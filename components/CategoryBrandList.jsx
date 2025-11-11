"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

const FILTERS = [
 { id: "all", label: "Tümü" },
 { id: "boycott", label: "Boykot" },
 { id: "alternative", label: "Boykot Değil" },
];

export default function CategoryBrandList({ brands = [], showBoycottReason = false }) {
 const [activeFilter, setActiveFilter] = useState("all");

 const filteredBrands = useMemo(() => {
  if (activeFilter === "boycott") {
   return brands.filter((brand) => brand.isBoycotted);
  }
  if (activeFilter === "alternative") {
   return brands.filter((brand) => !brand.isBoycotted);
  }
  return brands;
 }, [brands, activeFilter]);

 const filterCounts = useMemo(() => {
  const boycottCount = brands.filter((brand) => brand.isBoycotted).length;
  const alternativeCount = brands.filter((brand) => !brand.isBoycotted).length;
  return {
   all: brands.length,
   boycott: boycottCount,
   alternative: alternativeCount,
  };
 }, [brands]);

 return (
  <div className="space-y-6">
   <div className="flex flex-wrap items-center gap-3">
    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
     Listeyi filtrele
    </span>
    <div className="inline-flex gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
     {FILTERS.map((filter) => {
      const isActive = activeFilter === filter.id;
      const count = filterCounts[filter.id] || 0;
      return (
       <button
        key={filter.id}
        type="button"
        onClick={() => setActiveFilter(filter.id)}
        className={`rounded-full px-4 py-2 text-xs font-semibold transition ${isActive
         ? "bg-orange-500 text-white shadow-sm"
         : "bg-transparent text-slate-600 hover:bg-white"
         }`}
       >
        {filter.label} ({count})
       </button>
      );
     })}
    </div>
   </div>

   {filteredBrands.length === 0 ? (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-6 py-10 text-center text-sm font-medium text-slate-600">
     Seçilen filtreye göre marka bulunamadı.
    </div>
   ) : (
    <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2">
     {filteredBrands.map((brand) => (
      <article
       key={brand.id}
       className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-orange-300 hover:shadow-md"
      >
       {/* Marka Görseli */}
       <Link
        href={`/kategoriler/${brand.categorySlug}/${brand.slug}`}
        className="relative aspect-video w-full overflow-hidden bg-linear-to-br from-slate-50 to-slate-100"
       >
        {brand.img && (
         <Image
          src={brand.img}
          alt={brand.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
         />
        )}
       </Link>

       {/* İçerik Alanı */}
       <div className="flex flex-1 flex-col gap-4 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
         <Link
          href={`/kategoriler/${brand.categorySlug}/${brand.slug}`}
          className="text-base font-semibold text-slate-900 transition group-hover:text-orange-600"
         >
          {brand.name}
         </Link>
         <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm ${brand.isBoycotted
           ? "bg-linear-to-r from-red-500 to-red-600 text-white"
           : "bg-linear-to-r from-emerald-500 to-emerald-600 text-white"
           }`}
         >
          {brand.isBoycotted ? (
           <>
            <span className="text-sm">🚫</span>
            <span>Boykot</span>
           </>
          ) : (
           <>
            <span className="text-sm">✓</span>
            <span>Boykot Değil</span>
           </>
          )}
         </span>
        </div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
         {brand.country ?? "Menşei bilgisi güncelleniyor"}
        </p>
        {brand.description && (
         <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
          {brand.description}
         </p>
        )}
        {showBoycottReason && brand.boycottReason && (
         <div className="rounded-xl bg-red-50 px-4 py-3 text-xs leading-relaxed text-red-700 line-clamp-2">
          {brand.boycottReason}
         </div>
        )}
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
         <Link
          href={`/kategoriler/${brand.categorySlug}/${brand.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-700"
         >
          Detayı gör
          <span aria-hidden>→</span>
         </Link>
         {brand.website && (
          <Link
           href={brand.website}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-700"
          >
           Resmi Site
           <span aria-hidden>↗</span>
          </Link>
         )}
        </div>
       </div>
      </article>
     ))}
    </div>
   )}
  </div>
 );
}
