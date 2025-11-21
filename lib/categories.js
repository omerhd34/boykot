import prisma from "./prisma.js";

export async function getCategorySummaries(limit = 12) {
 try {
  const categories = await prisma.category.findMany({
   orderBy: { order: "asc" },
   take: limit > 0 ? limit : undefined,
   select: {
    id: true,
    name: true,
    slug: true,
    subCategories: true,
   },
  });

  return categories;
 } catch (error) {
  console.error(
   "[lib/categories#getCategorySummaries] sorgu sırasında hata:",
   error
  );
  return [];
 }
}

export async function getCategoryOverview() {
 try {
  const categories = await prisma.category.findMany({
   select: {
    id: true,
    name: true,
    slug: true,
    description: true,
    iconKey: true,
    order: true,
    subCategories: true,
    brands: {
     where: {
      parentBrand: null,
     },
     select: {
      id: true,
      subBrands: {
       select: {
        id: true,
        subBrands: {
         select: {
          id: true,
         },
        },
       },
      },
     },
    },
   },
  });

  // Recursive function to count all brands (ana + subBrands + nested subBrands)
  const countAllBrands = (brand) => {
   let count = 1; // Ana marka
   if (brand.subBrands && brand.subBrands.length > 0) {
    brand.subBrands.forEach((subBrand) => {
     count += countAllBrands(subBrand);
    });
   }
   return count;
  };

  const sortedCategories = categories
   .map((category) => {
    // Tüm markaları say (ana + subBrands + nested subBrands)
    let totalBrandCount = 0;
    category.brands.forEach((brand) => {
     totalBrandCount += countAllBrands(brand);
    });

    return {
     id: category.id,
     name: category.name,
     slug: category.slug,
     description: category.description,
     iconKey: category.iconKey,
     order: category.order,
     subCategories: category.subCategories,
     brandCount: totalBrandCount,
    };
   })
   .sort((a, b) => b.brandCount - a.brandCount);

  return sortedCategories.map((category, index) => ({
   ...category,
   order: index + 1,
  }));
 } catch (error) {
  console.error(
   "[lib/categories#getCategoryOverview] sorgu sırasında hata:",
   error
  );
  return [];
 }
}

export async function getCategoryBySlug(slug) {
 try {
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;

  if (!normalizedSlug) {
   return null;
  }

  const category = await prisma.category.findFirst({
   where: { slug: normalizedSlug },
   include: {
    brands: {
     where: {
      parentBrand: null,
     },
     orderBy: { name: "asc" },
     include: {
      subBrands: {
       orderBy: { name: "asc" },
       include: {
        subBrands: {
         orderBy: { name: "asc" },
        },
       },
      },
     },
    },
   },
  });

  if (!category) {
   return null;
  }

  // Ana markaları ve tüm alt markalarını flat bir liste haline getir
  const allBrands = [];

  for (const brand of category.brands) {
   // Ana markayı ekle
   allBrands.push({
    id: brand.id,
    name: brand.name,
    slug: brand.slug,
    description: brand.description,
    country: brand.country,
    website: brand.website,
    img: brand.img,
    isBoycotted: brand.isBoycotted,
    boycottReason: brand.boycottReason,
    categorySlug: category.slug,
    subCategory: brand.subCategory,
   });

   // Alt markaları ekle (nested subBrands dahil)
   if (brand.subBrands && brand.subBrands.length > 0) {
    for (const subBrand of brand.subBrands) {
     allBrands.push({
      id: subBrand.id,
      name: subBrand.name,
      slug: subBrand.slug,
      description: subBrand.description,
      country: subBrand.country,
      website: subBrand.website,
      img: subBrand.img,
      isBoycotted: subBrand.isBoycotted,
      boycottReason: subBrand.boycottReason,
      categorySlug: category.slug,
      subCategory: subBrand.subCategory,
     });

     // Nested alt markaları da ekle
     if (subBrand.subBrands && subBrand.subBrands.length > 0) {
      for (const nestedSubBrand of subBrand.subBrands) {
       allBrands.push({
        id: nestedSubBrand.id,
        name: nestedSubBrand.name,
        slug: nestedSubBrand.slug,
        description: nestedSubBrand.description,
        country: nestedSubBrand.country,
        website: nestedSubBrand.website,
        img: nestedSubBrand.img,
        isBoycotted: nestedSubBrand.isBoycotted,
        boycottReason: nestedSubBrand.boycottReason,
        categorySlug: category.slug,
        subCategory: nestedSubBrand.subCategory,
       });
      }
     }
    }
   }
  }

  // İsme göre sırala
  allBrands.sort((a, b) => a.name.localeCompare(b.name));

  return {
   id: category.id,
   name: category.name,
   slug: category.slug,
   description: category.description,
   iconKey: category.iconKey,
   order: category.order,
   subCategories: category.subCategories,
   brands: allBrands,
  };
 } catch (error) {
  console.error(
   "[lib/categories#getCategoryBySlug] sorgu sırasında hata:",
   error
  );
  return null;
 }
}

export async function getBrandBySlugs(categorySlug, brandSlug) {
 try {
  const normalizedCategorySlug = Array.isArray(categorySlug)
   ? categorySlug[0]
   : categorySlug;
  const normalizedBrandSlug = Array.isArray(brandSlug)
   ? brandSlug[0]
   : brandSlug;

  if (!normalizedCategorySlug || !normalizedBrandSlug) {
   return null;
  }

  const brand = await prisma.brand.findFirst({
   where: {
    slug: normalizedBrandSlug,
    category: { slug: normalizedCategorySlug },
   },
   include: {
    category: true,
    subBrands: {
     orderBy: { name: "asc" },
     include: {
      subBrands: {
       orderBy: { name: "asc" },
      },
     },
    },
    parentBrand: {
     include: {
      category: true,
     },
    },
   },
  });

  if (!brand) {
   return null;
  }

  let alternativeBrands = [];
  if (brand.alternative_products && brand.alternative_products.length > 0) {
   alternativeBrands = await prisma.brand.findMany({
    where: {
     slug: { in: brand.alternative_products },
     isBoycotted: "boykot-degil",
    },
    select: {
     id: true,
     name: true,
     slug: true,
     img: true,
     country: true,
     category: {
      select: {
       slug: true,
      },
     },
    },
   });
  }

  return {
   id: brand.id,
   name: brand.name,
   slug: brand.slug,
   description: brand.description,
   country: brand.country,
   website: brand.website,
   img: brand.img,
   isBoycotted: brand.isBoycotted,
   boycottReason: brand.boycottReason,
   evidences: brand.evidences || [],
   foundedYear: brand.foundedYear,
   founder: brand.founder,
   owner: brand.owner,
   subCategory: brand.subCategory,
   category: {
    id: brand.category.id,
    name: brand.category.name,
    slug: brand.category.slug,
    subCategories: brand.category.subCategories,
   },
   parentBrand: brand.parentBrand
    ? {
     id: brand.parentBrand.id,
     name: brand.parentBrand.name,
     slug: brand.parentBrand.slug,
     categorySlug: brand.parentBrand.category.slug,
    }
    : null,
   subBrands: brand.subBrands.map((subBrand) => ({
    id: subBrand.id,
    name: subBrand.name,
    slug: subBrand.slug,
    img: subBrand.img,
    isBoycotted: subBrand.isBoycotted,
    subBrands: subBrand.subBrands?.map((nestedSubBrand) => ({
     id: nestedSubBrand.id,
     name: nestedSubBrand.name,
     slug: nestedSubBrand.slug,
     img: nestedSubBrand.img,
     isBoycotted: nestedSubBrand.isBoycotted,
    })) || [],
   })),
   pill_category: brand.pill_category || [],
   alternative_products: alternativeBrands.map((altBrand) => ({
    id: altBrand.id,
    name: altBrand.name,
    slug: altBrand.slug,
    img: altBrand.img,
    country: altBrand.country,
    categorySlug: altBrand.category.slug,
   })),
  };
 } catch (error) {
  console.error(
   "[lib/categories#getBrandBySlugs] sorgu sırasında hata:",
   error
  );
  return null;
 }
}

// Owner string'inden brand adını çıkarır (parantez içindeki kısımları temizler)
function extractBrandNameFromOwner(owner) {
 if (!owner) return null;

 // Parantezden önceki kısmı al (ör: "Danone (Royal Numico üzerinden)" -> "Danone")
 const match = owner.match(/^([^(]+)/);
 if (match) {
  return match[1].trim();
 }
 return owner.trim();
}

// Slug oluşturur (Türkçe karakterleri dönüştürür)
function slugify(text) {
 return text
  .toLowerCase()
  .replace(/ğ/g, "g")
  .replace(/ü/g, "u")
  .replace(/ş/g, "s")
  .replace(/ı/g, "i")
  .replace(/ö/g, "o")
  .replace(/ç/g, "c")
  .replace(/[^a-z0-9\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");
}

// Owner string'ine göre brand'ı bulur (tüm kategorilerde arama yapar)
export async function getBrandByOwnerName(owner) {
 try {
  if (!owner) return null;

  // Önce parantezden önceki kısmı al
  const brandName = extractBrandNameFromOwner(owner);
  if (!brandName) return null;

  // Slug oluştur
  const brandSlug = slugify(brandName);

  // Önce slug ile tam eşleşme ara
  let brand = await prisma.brand.findFirst({
   where: {
    slug: brandSlug,
   },
   include: {
    category: {
     select: {
      slug: true,
     },
    },
   },
  });

  // Eğer slug ile bulunamazsa, isim ile ara
  if (!brand) {
   brand = await prisma.brand.findFirst({
    where: {
     name: {
      equals: brandName,
      mode: "insensitive",
     },
    },
    include: {
     category: {
      select: {
       slug: true,
      },
     },
    },
   });
  }

  if (!brand) return null;

  return {
   name: brand.name,
   slug: brand.slug,
   categorySlug: brand.category.slug,
  };
 } catch (error) {
  console.error(
   "[lib/categories#getBrandByOwnerName] sorgu sırasında hata:",
   error
  );
  return null;
 }
}