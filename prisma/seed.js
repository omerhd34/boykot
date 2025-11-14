import prisma from "../lib/prisma.js";
import categorySeed from "./seeds/index.js";

async function main() {
  console.log("Seed işlemi başlıyor...");

  console.log("Mevcut kategori ve marka verileri temizleniyor...");
  await prisma.brand.deleteMany({
    where: {
      parentBrandId: { not: null },
    },
  });
  await prisma.brand.deleteMany({});
  await prisma.category.deleteMany({});

  const categoryCount = await prisma.category.count();
  if (categoryCount === 0) {
    console.log("Kategori ve marka verileri ekleniyor...");

    const createdCategories = [];
    for (const category of categorySeed) {
      const subCategories = category.ctgry || [];

      const createdCategory = await prisma.category.create({
        data: {
          name: category.name,
          slug: category.slug,
          iconKey: category.iconKey,
          description: category.description,
          order: category.order,
          subCategories: subCategories,
        },
      });
      createdCategories.push({
        category: createdCategory,
        brands: category.brands,
      });
    }

    const existingSlugs = new Set();
    for (const { category, brands } of createdCategories) {
      for (const brand of brands) {
        // Geçersiz markaları filtrele
        if (!brand.name || !brand.slug || brand.slug.trim() === "") {
          console.log(
            `Marka '${
              brand.name || "İsimsiz"
            }' geçersiz veri nedeniyle atlanıyor...`
          );
          continue;
        }

        // isBoycotted değerini boolean'a çevir
        const isBoycotted =
          brand.isBoycotted === true ||
          brand.isBoycotted === "true" ||
          brand.isBoycotted === 1;

        if (!existingSlugs.has(brand.slug)) {
          try {
            const {
              subBrands,
              alternative_products,
              isBoycotted: _,
              ctgry,
              ...brandData
            } = brand;

            const createdBrand = await prisma.brand.create({
              data: {
                ...brandData,
                isBoycotted: isBoycotted,
                alternativeProducts: alternative_products || [],
                categoryId: category.id,
                subCategory: ctgry || null,
              },
            });
            existingSlugs.add(brand.slug);

            if (subBrands && Array.isArray(subBrands)) {
              for (const subBrand of subBrands) {
                // Geçersiz alt markaları filtrele
                if (
                  !subBrand.name ||
                  !subBrand.slug ||
                  subBrand.slug.trim() === ""
                ) {
                  console.log(
                    `Alt marka '${
                      subBrand.name || "İsimsiz"
                    }' geçersiz veri nedeniyle atlanıyor...`
                  );
                  continue;
                }

                // isBoycotted değerini boolean'a çevir
                const subIsBoycotted =
                  subBrand.isBoycotted === true ||
                  subBrand.isBoycotted === "true" ||
                  subBrand.isBoycotted === 1;

                if (!existingSlugs.has(subBrand.slug)) {
                  try {
                    const {
                      alternative_products,
                      isBoycotted: _,
                      ctgry,
                      ...subBrandData
                    } = subBrand;
                    await prisma.brand.create({
                      data: {
                        ...subBrandData,
                        isBoycotted: subIsBoycotted,
                        alternativeProducts: alternative_products || [],
                        categoryId: category.id,
                        parentBrandId: createdBrand.id,
                        subCategory: ctgry || null,
                      },
                    });
                    existingSlugs.add(subBrand.slug);
                  } catch (error) {
                    if (error.code === "P2002") {
                      console.log(
                        `Alt marka '${subBrand.name}' (${subBrand.slug}) zaten mevcut, atlanıyor...`
                      );
                    } else {
                      throw error;
                    }
                  }
                } else {
                  console.log(
                    `Alt marka '${subBrand.name}' (${subBrand.slug}) duplicate, atlanıyor...`
                  );
                }
              }
            }
          } catch (error) {
            if (error.code === "P2002") {
              console.log(
                `Marka '${brand.name}' (${brand.slug}) zaten mevcut, atlanıyor...`
              );
            } else {
              throw error;
            }
          }
        } else {
          console.log(
            `Marka '${brand.name}' (${brand.slug}) duplicate, atlanıyor...`
          );
        }
      }
    }

    console.log("Seed işlemi tamamlandı!");
  } else {
    console.log("Kategori verileri zaten mevcut, atlanıyor.");
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
