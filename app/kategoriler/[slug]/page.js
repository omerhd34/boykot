import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCategoryBySlug } from "@/lib/categories.js";
import CategoryBrandList from "@/components/CategoryBrandList.jsx";
import { IoArrowBack } from "react-icons/io5";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Kategori bulunamadı | Boykot Rehberi",
    };
  }

  return {
    title: `${category.name} Boykot Listesi | Boykot Rehberi`,
    description:
      category.description ||
      `${category.name} kategorisindeki boykot edilen markalar ve güvenilir alternatifler.`,
  };
}

export default async function CategoryDetailPage({ params }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <section className="bg-white py-16">
      <div className="container space-y-10">
        <header className="space-y-3">
          <Link
            href="/kategoriler"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-orange-600 transition hover:text-orange-700"
          >
            <IoArrowBack className="h-4 w-4" />
            Tüm kategorilere dön
          </Link>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            {category.name}
          </h1>
          {category.description && (
            <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
              {category.description}
            </p>
          )}
        </header>

        <Suspense fallback={<div className="text-center text-slate-600">Yükleniyor...</div>}>
          <CategoryBrandList brands={category.brands} />
        </Suspense>
      </div>
    </section>
  );
}
