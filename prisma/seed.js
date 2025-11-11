import prisma from "../lib/prisma.js";
import categorySeed from "./seeds/index.js";

async function main() {
  console.log("Seed işlemi başlıyor...");

  console.log("Mevcut kategori ve marka verileri temizleniyor...");
  await prisma.brand.deleteMany({});
  await prisma.category.deleteMany({});

  const categoryCount = await prisma.category.count();
  if (categoryCount === 0) {
    console.log("Kategori ve marka verileri ekleniyor...");

    const createdCategories = [];
    for (const category of categorySeed) {
      const createdCategory = await prisma.category.create({
        data: {
          name: category.name,
          slug: category.slug,
          iconKey: category.iconKey,
          description: category.description,
          order: category.order,
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
        if (!existingSlugs.has(brand.slug)) {
          try {
            await prisma.brand.create({
              data: {
                ...brand,
                categoryId: category.id,
              },
            });
            existingSlugs.add(brand.slug);
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
