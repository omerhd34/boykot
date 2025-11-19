import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBrandBySlugs } from "@/lib/categories.js";
import PillList from "./PillList";
import {
  IoArrowBack,
  IoLocationOutline,
  IoShieldCheckmarkOutline,
  IoWarningOutline,
  IoArrowForwardOutline,
  IoCloseCircleOutline,
  IoCheckmarkCircleOutline,
  IoAppsOutline,
  IoInformationCircleOutline,
  IoBusinessOutline,
  IoAlertCircleOutline,
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

  const getBadgeStyles = (status) => {
    switch (status) {
      case "boykot":
        return {
          bg: "bg-linear-to-r from-red-500 to-red-600",
          icon: IoWarningOutline,
          label: "Boykot",
        };
      case "onerilmiyor":
        return {
          bg: "bg-linear-to-r from-amber-500 to-amber-600",
          icon: IoAlertCircleOutline,
          label: "Önerilmiyor",
        };
      default:
        return {
          bg: "bg-linear-to-r from-emerald-500 to-emerald-600",
          icon: IoShieldCheckmarkOutline,
          label: "Boykot Edilmiyor",
        };
    }
  };

  const statusBadge = getBadgeStyles(brand.isBoycotted);
  const StatusIcon = statusBadge.icon;

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
          <div className="flex flex-wrap items-center gap-3">
            {/* UPDATED: Dinamik badge */}
            <div
              className={`inline-flex items-center gap-2 rounded-full ${statusBadge.bg} px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm`}
            >
              <StatusIcon className="h-4 w-4" />
              {statusBadge.label}
            </div>
            {brand.subCategory && (
              <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-500 to-purple-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                <IoAppsOutline className="h-4 w-4" />
                {Array.isArray(brand.subCategory)
                  ? brand.subCategory.join(" & ")
                  : brand.subCategory}
              </div>
            )}
            {brand.parentBrand && (
              <Link
                href={`/kategoriler/${brand.parentBrand.categorySlug}/${brand.parentBrand.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-slate-500 to-slate-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition hover:from-slate-600 hover:to-slate-700"
              >
                <IoBusinessOutline className="h-4 w-4" />
                Sahibi: {brand.parentBrand.name}
              </Link>
            )}
          </div>
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
                <p className="whitespace-pre-wrap text-base leading-relaxed text-slate-700">
                  {brand.description}
                </p>
              </div>
            )}
            {brand.boycottReason && (
              <div
                className={`space-y-3 rounded-2xl border-2 px-6 py-5 shadow-sm ${
                  brand.isBoycotted === "boykot"
                    ? "border-red-200 bg-red-50"
                    : "border-amber-200 bg-amber-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  {brand.isBoycotted === "boykot" ? (
                    <IoWarningOutline className="h-5 w-5 text-red-600" />
                  ) : (
                    <IoAlertCircleOutline className="h-5 w-5 text-amber-600" />
                  )}
                  <h2
                    className={`text-sm font-bold uppercase tracking-wide ${
                      brand.isBoycotted === "boykot"
                        ? "text-red-600"
                        : "text-amber-600"
                    }`}
                  >
                    {brand.isBoycotted === "boykot"
                      ? "Boykot Gerekçesi"
                      : "Neden Önerilmiyor?"}
                  </h2>
                </div>
                <div
                  className={`text-sm leading-relaxed whitespace-pre-wrap ${
                    brand.isBoycotted === "boykot"
                      ? "text-red-700"
                      : "text-amber-700"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: brand.boycottReason
                      .replace(/\n/g, "<br />")
                      .replace(
                        /<a href="([^"]+)"[^>]*>([^<]+)<\/a>/g,
                        (match, url, text) => {
                          if (
                            match.includes("display: inline-block") ||
                            match.includes("background-color")
                          ) {
                            return match;
                          }
                          const color =
                            brand.isBoycotted === "boykot"
                              ? "#991b1b"
                              : "#92400e";
                          return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="font-weight: bold; text-decoration: underline; color: ${color};" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">${text}</a>`;
                        }
                      ),
                  }}
                />
              </div>
            )}
          </article>

          <aside className="space-y-6 rounded-2xl border-2 border-orange-200 bg-linear-to-br from-orange-50 to-amber-50 p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-700">
              <IoInformationCircleOutline className="h-5 w-5 text-orange-600" />
              Marka Bilgileri
            </h2>
            <dl className="space-y-4">
              <div className="flex items-center justify-between gap-4 rounded-lg bg-white/60 px-4 py-3 shadow-sm">
                <dt className="text-sm font-semibold text-slate-700">Durum</dt>
                <dd className="flex items-center gap-2 text-sm font-medium text-slate-900">
                  {brand.isBoycotted === "boykot" ? (
                    <>
                      <IoCloseCircleOutline className="h-5 w-5 text-red-600" />
                      <span>Boykot</span>
                    </>
                  ) : brand.isBoycotted === "onerilmiyor" ? (
                    <>
                      <IoAlertCircleOutline className="h-5 w-5 text-amber-600" />
                      <span>Önerilmiyor</span>
                    </>
                  ) : (
                    <>
                      <IoCheckmarkCircleOutline className="h-5 w-5 text-emerald-600" />
                      <span>Boykot Değil</span>
                    </>
                  )}
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
              {brand.foundedYear && (
                <div className="flex items-center justify-between gap-4 rounded-lg bg-white/60 px-4 py-3 shadow-sm">
                  <dt className="text-sm font-semibold text-slate-700">
                    Kuruluş Yılı
                  </dt>
                  <dd className="text-sm font-medium text-slate-900">
                    {brand.foundedYear}
                  </dd>
                </div>
              )}
              {brand.founder && (
                <div className="flex items-center justify-between gap-4 rounded-lg bg-white/60 px-4 py-3 shadow-sm">
                  <dt className="text-sm font-semibold text-slate-700">
                    Kurucu
                  </dt>
                  <dd className="text-sm font-medium text-slate-900">
                    {brand.founder}
                  </dd>
                </div>
              )}
              {brand.owner && (
                <div className="flex items-center justify-between gap-4 rounded-lg bg-white/60 px-4 py-3 shadow-sm">
                  <dt className="text-sm font-semibold text-slate-700">
                    Sahibi
                  </dt>
                  <dd className="text-sm font-medium text-slate-900">
                    {brand.owner}
                  </dd>
                </div>
              )}
              {brand.subCategory && (
                <div className="flex items-center justify-between gap-4 rounded-lg bg-white/60 px-4 py-3 shadow-sm">
                  <dt className="text-sm font-semibold text-slate-700">
                    Kategori
                  </dt>
                  <dd className="text-sm font-medium text-slate-900">
                    {Array.isArray(brand.subCategory)
                      ? brand.subCategory.join(" & ")
                      : brand.subCategory}
                  </dd>
                </div>
              )}
              {brand.website && (
                <div className="flex items-center justify-between gap-4 rounded-lg bg-white/60 px-4 py-3 shadow-sm">
                  <dt className="text-sm font-semibold text-slate-700">
                    Web Sitesi
                  </dt>
                  <dd className="text-sm font-medium text-slate-900">
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 hover:underline"
                    >
                      {brand.website
                        .replace(/^https?:\/\//, "")
                        .replace(/\/$/, "")}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
            {brand.evidences && brand.evidences.length > 0 && (
              <div className="mt-6 space-y-3 border-t border-orange-200 pt-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-700">
                  <IoInformationCircleOutline className="h-5 w-5 text-orange-600" />
                  Kanıt Linkleri
                </h3>
                <div className="flex flex-wrap gap-2">
                  {brand.evidences.map((evidence, index) => (
                    <a
                      key={index}
                      href={evidence}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border-2 border-orange-300 bg-orange-50 px-4 py-2 text-xs font-semibold text-orange-700 transition hover:border-orange-400 hover:bg-orange-100 hover:shadow-sm"
                    >
                      <IoArrowForwardOutline className="h-3 w-3" />
                      Kanıt {index + 1}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {brand.alternative_products &&
              brand.alternative_products.length > 0 && (
                <div className="mt-6 space-y-4 border-t border-orange-200 pt-6">
                  <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-700">
                    <IoShieldCheckmarkOutline className="h-5 w-5 text-orange-600" />
                    Alternatif Ürünler
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {brand.alternative_products.slice(0, 5).map((altBrand) => (
                      <Link
                        key={altBrand.id}
                        href={`/kategoriler/${altBrand.categorySlug}/${altBrand.slug}`}
                        className="group flex items-center gap-3 rounded-lg border-2 border-emerald-200 bg-emerald-50/50 px-4 py-3 shadow-sm transition hover:border-emerald-400 hover:bg-emerald-100/70 hover:shadow-md"
                      >
                        {altBrand.img && (
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white">
                            <Image
                              src={altBrand.img}
                              alt={altBrand.name}
                              fill
                              className="object-contain p-1"
                              sizes="48px"
                            />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                            {altBrand.name}
                          </h4>
                          {altBrand.country && (
                            <p className="text-xs text-slate-500">
                              {altBrand.country}
                            </p>
                          )}
                        </div>
                        <IoArrowForwardOutline className="h-4 w-4 shrink-0 text-emerald-600 transition group-hover:translate-x-1" />
                      </Link>
                    ))}
                    <Link
                      href={`/kategoriler/${brand.category.slug}?filter=alternatif`}
                      className="group flex items-center justify-center gap-3 rounded-lg border-2 border-dashed border-emerald-300 bg-emerald-50/30 px-4 py-3 shadow-sm transition hover:border-emerald-400 hover:bg-emerald-100/50 hover:shadow-md"
                    >
                      <div className="min-w-0 flex-1 text-center">
                        <h4 className="text-sm font-semibold text-emerald-700 group-hover:text-emerald-800">
                          Diğer
                        </h4>
                        <p className="text-xs text-emerald-600">
                          Tüm alternatifleri gör
                        </p>
                      </div>
                      <IoArrowForwardOutline className="h-4 w-4 shrink-0 text-emerald-600 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )}
            {((brand.category.slug === "ilac-sirketi" &&
              brand.pill_category &&
              brand.pill_category.length > 0) ||
              (brand.subBrands && brand.subBrands.length > 0)) && (
              <div className="mt-6 space-y-4 border-t border-orange-200 pt-6">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-700">
                  <IoAppsOutline className="h-5 w-5 text-orange-600" />
                  {brand.category.slug === "ilac-sirketi"
                    ? "İlaçlar"
                    : "Alt Markalar"}
                </h3>
                {brand.category.slug === "ilac-sirketi" ? (
                  <PillList pills={brand.pill_category || []} />
                ) : (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {brand.subBrands.map((subBrand) => (
                      <Link
                        key={subBrand.id}
                        href={`/kategoriler/${brand.category.slug}/${subBrand.slug}`}
                        className="group relative flex flex-col items-center gap-2 overflow-hidden rounded-lg border-2 border-slate-200 bg-white p-3 shadow-sm transition hover:border-orange-400 hover:shadow-md"
                      >
                        {subBrand.img && (
                          <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                            <Image
                              src={subBrand.img}
                              alt={subBrand.name}
                              fill
                              className="object-contain"
                              sizes="64px"
                            />
                          </div>
                        )}
                        <div className="text-center">
                          <h4 className="text-xs font-semibold text-slate-900 group-hover:text-orange-600">
                            {subBrand.name}
                          </h4>
                          <div className="mt-1">
                            {subBrand.isBoycotted === "boykot" ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                                <IoWarningOutline className="h-3 w-3" />
                                Boykot
                              </span>
                            ) : subBrand.isBoycotted === "onerilmiyor" ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                                <IoAlertCircleOutline className="h-3 w-3" />
                                Önerilmiyor
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                                <IoShieldCheckmarkOutline className="h-3 w-3" />
                                Boykot Değil
                              </span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
