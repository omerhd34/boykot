"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { IoChevronDown } from "react-icons/io5";

const FILTERS = [
 { id: "all", label: "Tümü" },
 { id: "boycott", label: "Boykot" },
 { id: "alternatif", label: "Boykot Değil" },
];

export default function CategoryBrandList({ brands = [], subCategories = [], showBoycottReason = false }) {
 const searchParams = useSearchParams();
 const filterFromUrl = searchParams.get("filter");
 const [activeFilter, setActiveFilter] = useState(filterFromUrl || "all");
 const [activeCountryFilter, setActiveCountryFilter] = useState("all");
 const [activeSubCategoryFilter, setActiveSubCategoryFilter] = useState("all");
 const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
 const [isSubCategoryDropdownOpen, setIsSubCategoryDropdownOpen] = useState(false);
 const countryDropdownRef = useRef(null);
 const subCategoryDropdownRef = useRef(null);

 // Tüm benzersiz ülkeleri çıkar ve sırala
 const availableCountries = useMemo(() => {
  const countries = brands
   .map((brand) => brand.country)
   .filter((country) => country && country.trim() !== "")
   .filter((country, index, self) => self.indexOf(country) === index)
   .sort();

  return [
   { id: "all", label: "Tümü" },
   ...countries.map((country) => ({ id: country, label: country })),
  ];
 }, [brands]);

 // Alt kategorileri hazırla
 const availableSubCategories = useMemo(() => {
  if (!subCategories || subCategories.length === 0) {
   return [{ id: "all", label: "Tümü" }];
  }

  return [
   { id: "all", label: "Tümü" },
   ...subCategories.map((subCat) => ({ id: subCat, label: subCat })),
  ];
 }, [subCategories]);

 const filteredBrands = useMemo(() => {
  let filtered = brands;

  // Boykot durumuna göre filtreleme
  if (activeFilter === "boycott") {
   filtered = filtered.filter((brand) => brand.isBoycotted);
  } else if (activeFilter === "alternatif") {
   filtered = filtered.filter((brand) => !brand.isBoycotted);
  }

  // Ülkeye göre filtreleme
  if (activeCountryFilter !== "all") {
   filtered = filtered.filter((brand) => brand.country === activeCountryFilter);
  }

  // Alt kategoriye göre filtreleme
  if (activeSubCategoryFilter !== "all") {
   filtered = filtered.filter((brand) => brand.subCategory === activeSubCategoryFilter);
  }

  return filtered;
 }, [brands, activeFilter, activeCountryFilter, activeSubCategoryFilter]);

 // URL'den gelen filtreyi uygula
 useEffect(() => {
  if (filterFromUrl && FILTERS.some((f) => f.id === filterFromUrl)) {
   setActiveFilter(filterFromUrl);
  }
 }, [filterFromUrl]);

 useEffect(() => {
  function handleClickOutside(event) {
   if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target)) {
    setIsCountryDropdownOpen(false);
   }
   if (subCategoryDropdownRef.current && !subCategoryDropdownRef.current.contains(event.target)) {
    setIsSubCategoryDropdownOpen(false);
   }
  }

  if (isCountryDropdownOpen || isSubCategoryDropdownOpen) {
   document.addEventListener("mousedown", handleClickOutside);
   return () => {
    document.removeEventListener("mousedown", handleClickOutside);
   };
  }
 }, [isCountryDropdownOpen, isSubCategoryDropdownOpen]);

 const selectedCountry = useMemo(() => {
  return availableCountries.find((c) => c.id === activeCountryFilter) || availableCountries[0];
 }, [availableCountries, activeCountryFilter]);

 // Seçili alt kategori bilgisini al
 const selectedSubCategory = useMemo(() => {
  return availableSubCategories.find((c) => c.id === activeSubCategoryFilter) || availableSubCategories[0];
 }, [availableSubCategories, activeSubCategoryFilter]);

 const filterCounts = useMemo(() => {
  let filteredForBoycottButtons = brands;

  if (activeCountryFilter !== "all") {
   filteredForBoycottButtons = filteredForBoycottButtons.filter(
    (brand) => brand.country === activeCountryFilter
   );
  }

  if (activeSubCategoryFilter !== "all") {
   filteredForBoycottButtons = filteredForBoycottButtons.filter(
    (brand) => brand.subCategory === activeSubCategoryFilter
   );
  }

  const allCount = filteredForBoycottButtons.length;
  const boycottCount = filteredForBoycottButtons.filter((brand) => brand.isBoycotted).length;
  const alternativeCount = filteredForBoycottButtons.filter((brand) => !brand.isBoycotted).length;

  const countryCounts = {};
  availableCountries.forEach((country) => {
   let countryBrands = brands;

   if (activeSubCategoryFilter !== "all") {
    countryBrands = countryBrands.filter((brand) => brand.subCategory === activeSubCategoryFilter);
   }

   if (activeFilter === "boycott") {
    countryBrands = countryBrands.filter((brand) => brand.isBoycotted);
   } else if (activeFilter === "alternatif") {
    countryBrands = countryBrands.filter((brand) => !brand.isBoycotted);
   }

   if (country.id === "all") {
    countryCounts[country.id] = countryBrands.length;
   } else {
    countryCounts[country.id] = countryBrands.filter(
     (brand) => brand.country === country.id
    ).length;
   }
  });

  const subCategoryCounts = {};
  availableSubCategories.forEach((subCat) => {
   let subCatBrands = brands;

   if (activeCountryFilter !== "all") {
    subCatBrands = subCatBrands.filter((brand) => brand.country === activeCountryFilter);
   }

   if (activeFilter === "boycott") {
    subCatBrands = subCatBrands.filter((brand) => brand.isBoycotted);
   } else if (activeFilter === "alternatif") {
    subCatBrands = subCatBrands.filter((brand) => !brand.isBoycotted);
   }

   if (subCat.id === "all") {
    subCategoryCounts[subCat.id] = subCatBrands.length;
   } else {
    subCategoryCounts[subCat.id] = subCatBrands.filter(
     (brand) => brand.subCategory === subCat.id
    ).length;
   }
  });

  return {
   all: allCount,
   boycott: boycottCount,
   alternatif: alternativeCount,
   ...countryCounts,
   ...subCategoryCounts,
  };
 }, [brands, activeFilter, activeCountryFilter, activeSubCategoryFilter, availableCountries, availableSubCategories]);

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

    {/* Alt Kategori Dropdown */}
    {availableSubCategories.length > 1 && (
     <div className={`relative inline-flex rounded-full border p-1 transition ${activeSubCategoryFilter !== "all"
      ? "border-purple-500 bg-purple-500"
      : "border-slate-200 bg-slate-50"
      }`} ref={subCategoryDropdownRef}>
      <button
       type="button"
       onClick={() => setIsSubCategoryDropdownOpen(!isSubCategoryDropdownOpen)}
       className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${activeSubCategoryFilter !== "all"
        ? "bg-transparent text-white"
        : "bg-transparent text-slate-600 hover:bg-white"
        }`}
      >
       <span>Alt Kategoriler</span>
       {activeSubCategoryFilter !== "all" && (
        <span className="text-xs opacity-90">
         ({selectedSubCategory.label})
        </span>
       )}
       <IoChevronDown
        className={`h-4 w-4 transition-transform ${isSubCategoryDropdownOpen ? "rotate-180" : ""
         }`}
       />
      </button>
      {isSubCategoryDropdownOpen && (
       <div className="absolute left-0 top-full z-50 mt-1 max-h-64 w-64 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg">
        {availableSubCategories.map((subCat) => {
         const isActive = activeSubCategoryFilter === subCat.id;
         const count = filterCounts[subCat.id] || 0;
         return (
          <button
           key={subCat.id}
           type="button"
           onClick={() => {
            setActiveSubCategoryFilter(subCat.id);
            setIsSubCategoryDropdownOpen(false);
           }}
           className={`w-full px-4 py-2.5 text-left text-xs font-semibold transition first:rounded-t-xl last:rounded-b-xl ${isActive
            ? "bg-purple-50 text-purple-600"
            : "text-slate-600 hover:bg-slate-50"
            }`}
          >
           <span className="flex items-center justify-between">
            <span>{subCat.label}</span>
            <span className={`text-xs ${isActive ? "text-purple-600" : "text-slate-400"}`}>
             {count}
            </span>
           </span>
          </button>
         );
        })}
       </div>
      )}
     </div>
    )}

    {/* Ülke Dropdown */}
    <div className={`relative inline-flex rounded-full border p-1 transition ${activeCountryFilter !== "all"
     ? "border-orange-500 bg-orange-500"
     : "border-slate-200 bg-slate-50"
     }`} ref={countryDropdownRef}>
     <button
      type="button"
      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${activeCountryFilter !== "all"
       ? "bg-transparent text-white"
       : "bg-transparent text-slate-600 hover:bg-white"
       }`}
     >
      <span>Ülkeler</span>
      {activeCountryFilter !== "all" && (
       <span className="text-xs opacity-90">
        ({selectedCountry.label})
       </span>
      )}
      <IoChevronDown
       className={`h-4 w-4 transition-transform ${isCountryDropdownOpen ? "rotate-180" : ""
        }`}
      />
     </button>
     {isCountryDropdownOpen && (
      <div className="absolute left-0 top-full z-50 mt-1 max-h-64 w-64 overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-lg">
       {availableCountries.map((country) => {
        const isActive = activeCountryFilter === country.id;
        const count = filterCounts[country.id] || 0;
        return (
         <button
          key={country.id}
          type="button"
          onClick={() => {
           setActiveCountryFilter(country.id);
           setIsCountryDropdownOpen(false);
          }}
          className={`w-full px-4 py-2.5 text-left text-xs font-semibold transition first:rounded-t-xl last:rounded-b-xl ${isActive
           ? "bg-orange-50 text-orange-600"
           : "text-slate-600 hover:bg-slate-50"
           }`}
         >
          <span className="flex items-center justify-between">
           <span>{country.label}</span>
           <span className={`text-xs ${isActive ? "text-orange-600" : "text-slate-400"}`}>
            {count}
           </span>
          </span>
         </button>
        );
       })}
      </div>
     )}
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
        <div className="flex flex-wrap items-center gap-2">
         {brand.country && (
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
           {brand.country}
          </p>
         )}
         {brand.subCategory && (
          <>
           <span className="text-slate-300">•</span>
           <p className="text-xs font-medium uppercase tracking-wide text-purple-600">
            {brand.subCategory}
           </p>
          </>
         )}
        </div>
        {brand.description && (
         <p className="line-clamp-3 whitespace-pre-line text-sm leading-relaxed text-slate-600">
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