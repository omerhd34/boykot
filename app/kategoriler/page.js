import Link from "next/link";
import { getCategoryOverview } from "@/lib/categories.js";
import { FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Boykot Listeleri | Boykot Rehberi",
  description:
    "Sektörlere göre boykot edilen markaları, gerekçelerini ve güvenilir alternatifleri keşfedin.",
};

export default async function CategoriesPage() {
  const categories = await getCategoryOverview();

  return (
    <section className="bg-white py-16">
      <div className="container space-y-12">
        <header className="space-y-4 text-center">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
            Güncel boykot listeleri
          </span>
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
            Sektörlere göre boykot edilen markalar ve dayanışma alternatifleri
          </h1>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600">
            Her kategoriyi ayrı sayfalarda inceleyerek boykot edilen markaların
            hikâyelerini, gerekçelerini ve tercih edebileceğiniz güvenilir
            alternatifleri bulabilirsiniz. Liste topluluk girdileriyle düzenli
            olarak güncellenir.
          </p>
        </header>

        {categories.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/70 px-6 py-10 text-center text-sm font-medium text-slate-600">
            Boykot kategorileri yüklenemedi. Lütfen daha sonra tekrar deneyin.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.id}
                className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-orange-200 hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-orange-600">
                    <span className="h-2 w-2 rounded-full bg-orange-400" />
                    {category.order.toString().padStart(2, "0")}
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {category.name}
                  </h2>
                  {category.description && (
                    <p className="text-sm leading-relaxed text-slate-600">
                      {category.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                  <span>{category.brandCount} marka listede</span>
                  <Link
                    href={`/kategoriler/${category.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-orange-600"
                  >
                    Kategoriyi incele
                    <FaArrowRight aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
