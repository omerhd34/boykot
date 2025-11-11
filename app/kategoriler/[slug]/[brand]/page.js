import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBrandBySlugs } from "@/lib/categories.js";
import {
  IoArrowBack,
  IoGlobeOutline,
  IoLocationOutline,
  IoShieldCheckmarkOutline,
  IoWarningOutline,
} from "react-icons/io5";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { slug: categorySlug, brand: brandSlug } = await params;
  const brand = await getBrandBySlugs(categorySlug, brandSlug);

  if (!brand) {
    return {
      title: "Marka bulunamadı | Boykot Rehberi",
    };
  }

  return {
    title: `${brand.name} | ${brand.category.name} | Boykot Rehberi`,
    description:
      brand.description ||
      `${brand.name} markasının boykot durumu ve detayları.`,
  };
}

export default async function BrandDetailPage({ params }) {
  const { slug: categorySlug, brand: brandSlug } = await params;
  const brand = await getBrandBySlugs(categorySlug, brandSlug);

  if (!brand) {
    notFound();
  }

  return (
    <section className="bg-white py-16">
      <div className="container space-y-10">
        <nav className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-orange-600">
          <Link
            href="/kategoriler"
            className="inline-flex items-center gap-2 transition hover:text-orange-700"
          >
            <IoArrowBack className="h-4 w-4" />
            Tüm kategorilere dön
          </Link>
          <span className="text-slate-400">/</span>
          <Link
            href={`/kategoriler/${brand.category.slug}`}
            className="transition hover:text-orange-700"
          >
            {brand.category.name}
          </Link>
        </nav>

        {brand.img && (
          <div className="relative aspect-21/9 w-full overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 shadow-lg">
            <Image
              src={brand.img}
              alt={brand.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        )}

        <header className="space-y-4">
          {brand.isBoycotted ? (
            <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-red-500 to-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
              <IoWarningOutline className="h-4 w-4" />
              Boykot
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
              <IoShieldCheckmarkOutline className="h-4 w-4" />
              Alternatif
            </div>
          )}
          <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl lg:text-5xl">
            {brand.name}
          </h1>
          {brand.country && (
            <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-slate-500">
              <IoLocationOutline className="h-5 w-5" />
              Menşei: {brand.country}
            </p>
          )}
        </header>

        <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <article className="space-y-6">
            {brand.description && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50/30 px-6 py-5">
                <p className="text-base leading-relaxed text-slate-700">
                  {brand.description}
                </p>
              </div>
            )}
            {brand.boycottReason && (
              <div className="space-y-3 rounded-2xl border-2 border-red-200 bg-red-50 px-6 py-5 shadow-sm">
                <div className="flex items-center gap-2">
                  <IoWarningOutline className="h-5 w-5 text-red-600" />
                  <h2 className="text-sm font-bold uppercase tracking-wide text-red-600">
                    Boykot Gerekçesi
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-red-700">
                  {brand.boycottReason}
                </p>
              </div>
            )}
          </article>

          <aside className="space-y-6 rounded-2xl border-2 border-orange-200 bg-linear-to-br from-orange-50 to-amber-50 p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-700">
              <IoShieldCheckmarkOutline className="h-5 w-5 text-orange-600" />
              Marka Bilgileri
            </h2>
            <dl className="space-y-4">
              <div className="flex items-center justify-between gap-4 rounded-lg bg-white/60 px-4 py-3 shadow-sm">
                <dt className="text-sm font-semibold text-slate-700">Durum</dt>
                <dd className="text-sm font-medium text-slate-900">
                  {brand.isBoycotted
                    ? "🚫 Boykot Ediliyor"
                    : "✅ Alternatif Öneri"}
                </dd>
              </div>
              {brand.country && (
                <div className="flex items-center justify-between gap-4 rounded-lg bg-white/60 px-4 py-3 shadow-sm">
                  <dt className="text-sm font-semibold text-slate-700">
                    Menşei
                  </dt>
                  <dd className="text-sm font-medium text-slate-900">
                    {brand.country}
                  </dd>
                </div>
              )}
            </dl>
            {brand.website && (
              <Link
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:shadow-lg hover:from-orange-600 hover:to-orange-700"
              >
                <IoGlobeOutline className="h-5 w-5" />
                Resmi Siteyi Ziyaret Et
              </Link>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
