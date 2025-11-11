import express from "express";
import cors from "cors";
import prisma from "@/lib/prisma.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") ?? "*",
  })
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "boykot-api" });
});

app.get("/api/categories", async (_req, res) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { order: "asc" },
      include: {
        brands: {
          orderBy: { name: "asc" },
          select: {
            id: true,
            name: true,
            slug: true,
            description: true,
            country: true,
            website: true,
            isBoycotted: true,
            boycottReason: true,
          },
        },
      },
    });

    const payload = categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      iconKey: category.iconKey,
      description: category.description,
      order: category.order,
      brandCount: category.brands.length,
      brands: category.brands,
    }));

    res.json(payload);
  } catch (error) {
    console.error("[GET /api/categories]", error);
    res.status(500).json({ message: "Kategoriler alınırken bir hata oluştu." });
  }
});

app.use((_req, res) => {
  res.status(404).json({ message: "Endpoint bulunamadı." });
});

app.listen(port, () => {
  console.log(`Boykot API ${port} portunda çalışıyor`);
});
