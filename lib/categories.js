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
      orderBy: { order: "asc" },
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
            parentBrandId: null, // Sadece parent brand'leri al
          },
          select: {
            id: true, // Sadece count için id yeterli
          },
        },
      },
    });

    return categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      description: category.description,
      iconKey: category.iconKey,
      order: category.order,
      subCategories: category.subCategories,
      brandCount: category.brands.length, // Parent brand sayısı
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
            parentBrandId: null, // Sadece parent brand'leri göster
          },
          orderBy: { name: "asc" },
        },
      },
    });

    if (!category) {
      return null;
    }

    return {
      id: category.id,
      name: category.name,
      slug: category.slug,
      description: category.description,
      iconKey: category.iconKey,
      order: category.order,
      subCategories: category.subCategories,
      brands: category.brands.map((brand) => ({
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
      })),
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
