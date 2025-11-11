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
        _count: { select: { brands: true } },
      },
    });

    return categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      description: category.description,
      iconKey: category.iconKey,
      order: category.order,
      brandCount: category._count.brands,
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
      },
    });

    if (!brand) {
      return null;
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
      category: {
        id: brand.category.id,
        name: brand.category.name,
        slug: brand.category.slug,
      },
    };
  } catch (error) {
    console.error(
      "[lib/categories#getBrandBySlugs] sorgu sırasında hata:",
      error
    );
    return null;
  }
}
