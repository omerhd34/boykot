import prisma from "@/lib/prisma.js";

function slugify(value = "") {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/İ/g, "i")
    .replace(/Ş/g, "s")
    .replace(/Ğ/g, "g")
    .replace(/Ü/g, "u")
    .replace(/Ö/g, "o")
    .replace(/Ç/g, "c")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.trim();

    if (!query) {
      return Response.json(
        { error: "Arama sorgusu gereklidir." },
        { status: 400 }
      );
    }

    const normalizedSlug = slugify(query);

    const [brands, categories] = await Promise.all([
      prisma.brand.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { slug: { equals: normalizedSlug } },
          ],
        },
        include: {
          category: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
        orderBy: [{ name: "asc" }, { createdAt: "desc" }],
        take: 10,
      }),
      prisma.category.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            { slug: { equals: normalizedSlug } },
          ],
        },
        orderBy: { order: "asc" },
        take: 10,
      }),
    ]);

    const serializedBrands = brands.map((brand) => ({
      id: brand.id,
      name: brand.name,
      slug: brand.slug,
      img: brand.img,
      isBoycotted: brand.isBoycotted,
      category: {
        id: brand.category.id,
        name: brand.category.name,
        slug: brand.category.slug,
      },
    }));

    const serializedCategories = categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
    }));

    return Response.json({
      brands: serializedBrands,
      categories: serializedCategories,
    });
  } catch (error) {
    console.error("[api/search] Arama sırasında hata:", error);
    return Response.json(
      { error: "Arama sırasında beklenmeyen bir hata oluştu." },
      { status: 500 }
    );
  }
}
