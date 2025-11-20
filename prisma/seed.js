import prisma from "../lib/prisma.js";
import categorySeed from "./seeds/index.js";

async function createSubBrands(
  subBrands,
  parentBrandId,
  categoryId,
  existingSlugs
) {
  if (!subBrands || !Array.isArray(subBrands)) {
    return;
  }

  for (const subBrand of subBrands) {
    if (!subBrand.name || !subBrand.slug || subBrand.slug.trim() === "") {
      console.log(
        `Alt marka '${
          subBrand.name || "İsimsiz"
        }' geçersiz veri nedeniyle atlanıyor...`
      );
      continue;
    }

    let subBoycottStatus = "boykot-degil";

    if (
      subBrand.isBoycotted === true ||
      subBrand.isBoycotted === "true" ||
      subBrand.isBoycotted === 1
    ) {
      subBoycottStatus = "boykot";
    } else if (
      subBrand.isBoycotted === false ||
      subBrand.isBoycotted === "false" ||
      subBrand.isBoycotted === 0
    ) {
      subBoycottStatus = "boykot-degil";
    } else if (typeof subBrand.isBoycotted === "string") {
      subBoycottStatus = subBrand.isBoycotted;
    }

    if (!existingSlugs.has(subBrand.slug)) {
      try {
        const {
          subBrands: nestedSubBrands,
          alternative_products,
          evidences,
          pill_category,
          isBoycotted: _,
          ctgry,
          ...subBrandData
        } = subBrand;

        const evidencesArray = (evidences || []).filter(
          (evidence) =>
            evidence && typeof evidence === "string" && evidence.trim() !== ""
        );

        const pillCategoryArray = pill_category || [];
        const pillCategoryStrings = pillCategoryArray
          .filter((item) => {
            if (typeof item === "object" && item !== null) {
              return (
                item.name &&
                typeof item.name === "string" &&
                item.name.trim() !== ""
              );
            }
            return typeof item === "string" && item.trim() !== "";
          })
          .map((item) => {
            if (typeof item === "object" && item !== null) {
              const name = item.name.trim();
              const usage = item.usage ? item.usage.trim() : "";
              return usage ? `${name} (${usage})` : name;
            }
            return item.trim();
          });

        let subBrandSubCategoryArray = [];
        if (ctgry) {
          if (Array.isArray(ctgry)) {
            const filteredItems = ctgry.filter(
              (item) => item && typeof item === "string" && item.trim() !== ""
            );
            subBrandSubCategoryArray = filteredItems.map((item) => item.trim());
          } else if (typeof ctgry === "string" && ctgry.trim() !== "") {
            subBrandSubCategoryArray = [ctgry.trim()];
          }
        }

        const createdSubBrand = await prisma.brand.create({
          data: {
            ...subBrandData,
            isBoycotted: subBoycottStatus,
            alternative_products: alternative_products || [],
            evidences: evidencesArray,
            pill_category: pillCategoryStrings,
            category: {
              connect: {
                id: categoryId,
              },
            },
            parentBrand: {
              connect: {
                id: parentBrandId,
              },
            },
            subCategory: subBrandSubCategoryArray,
          },
        });
        existingSlugs.add(subBrand.slug);

        // Recursive olarak nested subBrands'ı işle
        if (nestedSubBrands && Array.isArray(nestedSubBrands)) {
          await createSubBrands(
            nestedSubBrands,
            createdSubBrand.id,
            categoryId,
            existingSlugs
          );
        }
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

async function main() {
  console.log("Seed işlemi başlıyor...");

  console.log("Mevcut kategori ve marka verileri temizleniyor...");
  await prisma.brand.updateMany({
    where: {
      parentBrandId: { not: null },
    },
    data: {
      parentBrandId: null,
    },
  });
  await prisma.brand.deleteMany({});
  await prisma.category.deleteMany({});

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

      let boycottStatus = "boykot-degil";

      if (
        brand.isBoycotted === true ||
        brand.isBoycotted === "true" ||
        brand.isBoycotted === 1
      ) {
        boycottStatus = "boykot";
      } else if (
        brand.isBoycotted === false ||
        brand.isBoycotted === "false" ||
        brand.isBoycotted === 0
      ) {
        boycottStatus = "boykot-degil";
      } else if (typeof brand.isBoycotted === "string") {
        boycottStatus = brand.isBoycotted;
      }

      if (!existingSlugs.has(brand.slug)) {
        try {
          const {
            subBrands,
            pill_category,
            alternative_products,
            evidences,
            isBoycotted: _,
            ctgry,
            ...brandData
          } = brand;

          const pillCategoryArray = pill_category || [];
          const pillCategoryStrings = pillCategoryArray
            .filter((item) => {
              if (typeof item === "object" && item !== null) {
                return (
                  item.name &&
                  typeof item.name === "string" &&
                  item.name.trim() !== ""
                );
              }
              return typeof item === "string" && item.trim() !== "";
            })
            .map((item) => {
              if (typeof item === "object" && item !== null) {
                const name = item.name.trim();
                const usage = item.usage ? item.usage.trim() : "";
                return usage ? `${name} (${usage})` : name;
              }
              return item.trim();
            });

          const evidencesArray = (evidences || []).filter(
            (evidence) =>
              evidence && typeof evidence === "string" && evidence.trim() !== ""
          );

          let subCategoryArray = [];
          if (ctgry) {
            if (Array.isArray(ctgry)) {
              const filteredItems = ctgry.filter(
                (item) => item && typeof item === "string" && item.trim() !== ""
              );
              subCategoryArray = filteredItems.map((item) => item.trim());
            } else if (typeof ctgry === "string" && ctgry.trim() !== "") {
              subCategoryArray = [ctgry.trim()];
            }
          }

          const createdBrand = await prisma.brand.create({
            data: {
              ...brandData,
              isBoycotted: boycottStatus,
              alternative_products: alternative_products || [],
              pill_category: pillCategoryStrings,
              evidences: evidencesArray,
              category: {
                connect: {
                  id: category.id,
                },
              },
              subCategory: subCategoryArray,
            },
          });
          existingSlugs.add(brand.slug);

          // Recursive fonksiyon ile subBrands'ı işle (nested subBrands dahil)
          if (subBrands && Array.isArray(subBrands)) {
            await createSubBrands(
              subBrands,
              createdBrand.id,
              category.id,
              existingSlugs
            );
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
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
