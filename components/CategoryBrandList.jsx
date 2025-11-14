"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useRef, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import PropTypes from 'prop-types';
import {
 IoChevronDown,
 IoCloseCircle,
 IoWarning,
 IoCheckmarkCircle,
 IoArrowForward,
 IoLinkOutline
} from "react-icons/io5";

const FILTERS = [
 { id: "all", label: "Tümü" },
 { id: "boycott", label: "Boykot" },
 { id: "alternatif", label: "Boykot Değil" },
 { id: "onerilmiyor", label: "Önerilmiyor" },
];

export default function CategoryBrandList({ brands = [], subCategories = [], showBoycottReason = false }) {
 const searchParams = useSearchParams();
 const router = useRouter();
 const pathname = usePathname();
 const filterFromUrl = searchParams.get("filter");

 const isValidFilter = filterFromUrl && FILTERS.some((f) => f.id === filterFromUrl);
 const activeFilter = isValidFilter ? filterFromUrl : "all";

 const [activeCountryFilter, setActiveCountryFilter] = useState("all");
 const [activeSubCategoryFilter, setActiveSubCategoryFilter] = useState("all");
 const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
 const [isSubCategoryDropdownOpen, setIsSubCategoryDropdownOpen] = useState(false);
 const countryDropdownRef = useRef(null);
 const subCategoryDropdownRef = useRef(null);

 const availableCountries = useMemo(() => {
  const countries = brands
   .map((brand) => brand.country)
   .filter((country) => country && country.trim() !== "")
   .filter((country, index, self) => self.indexOf(country) === index)
   .sort((a, b) => a.localeCompare(b));

  return [
   { id: "all", label: "Tümü" },
   ...countries.map((country) => ({ id: country, label: country })),
  ];
 }, [brands]);

 const availableSubCategories = useMemo(() => {
  if (!subCategories || subCategories.length === 0) {
   return [{ id: "all", label: "Tümü" }];
  }

  return [
   { id: "all", label: "Tümü" },
   ...subCategories.map((subCat) => ({ id: subCat, label: subCat })),
  ];
 }, [subCategories]);

 // Tüm filtrelerin birbiriyle bağlantılı olduğundan emin ol
 const filteredBrands = useMemo(() => {
  let filtered = brands;

  if (activeFilter === "boycott") {
   filtered = filtered.filter((brand) => brand.isBoycotted === "boykot");
  } else if (activeFilter === "alternatif") {
   filtered = filtered.filter((brand) => brand.isBoycotted === "boykot-degil");
  } else if (activeFilter === "onerilmiyor") {
   filtered = filtered.filter((brand) => brand.isBoycotted === "onerilmiyor");
  }

  if (activeCountryFilter !== "all") {
   filtered = filtered.filter((brand) => brand.country === activeCountryFilter);
  }

  if (activeSubCategoryFilter !== "all") {
   filtered = filtered.filter((brand) => brand.subCategory === activeSubCategoryFilter);
  }

  return filtered;
 }, [brands, activeFilter, activeCountryFilter, activeSubCategoryFilter]);

 const handleFilterChange = (filterId) => {
  const params = new URLSearchParams(searchParams);
  if (filterId === "all") {
   params.delete("filter");
  } else {
   params.set("filter", filterId);
  }
  router.push(`${pathname}?${params.toString()}`, { scroll: false });
 };

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

 const selectedSubCategory = useMemo(() => {
  return availableSubCategories.find((c) => c.id === activeSubCategoryFilter) || availableSubCategories[0];
 }, [availableSubCategories, activeSubCategoryFilter]);

 const { statusCounts, countryCounts, subCategoryCounts } = useMemo(() => {
  // 1. Durum Filtreleri Sayımları (Tümü, Boykot, Boykot Değil...)
  // BU SAYIMLAR, AKTİF OLAN ÜLKE VE ALT KATEGORİ FİLTRELERİNE GÖRE HESAPLANIR.
  let brandsForStatusCount = brands;
  if (activeCountryFilter !== "all") {
   brandsForStatusCount = brandsForStatusCount.filter(b => b.country === activeCountryFilter);
  }
  if (activeSubCategoryFilter !== "all") {
   brandsForStatusCount = brandsForStatusCount.filter(b => b.subCategory === activeSubCategoryFilter);
  }
  const statusCounts = {
   all: brandsForStatusCount.length,
   boycott: brandsForStatusCount.filter(b => b.isBoycotted === "boykot").length,
   alternatif: brandsForStatusCount.filter(b => b.isBoycotted === "boykot-degil").length,
   onerilmiyor: brandsForStatusCount.filter(b => b.isBoycotted === "onerilmiyor").length,
  };

  // 2. Ülke Filtreleri Sayımları (Tümü, Türkiye, Almanya...)
  // BU SAYIMLAR, AKTİF OLAN DURUM VE ALT KATEGORİ FİLTRELERİNE GÖRE HESAPLANIR.
  let brandsForCountryCount = brands;
  if (activeFilter !== "all") {
   if (activeFilter === "boycott") {
    brandsForCountryCount = brandsForCountryCount.filter(b => b.isBoycotted === "boykot");
   } else if (activeFilter === "alternatif") {
    brandsForCountryCount = brandsForCountryCount.filter(b => b.isBoycotted === "boykot-degil");
   } else if (activeFilter === "onerilmiyor") {
    brandsForCountryCount = brandsForCountryCount.filter(b => b.isBoycotted === "onerilmiyor");
   }
  }
  if (activeSubCategoryFilter !== "all") {
   brandsForCountryCount = brandsForCountryCount.filter(b => b.subCategory === activeSubCategoryFilter);
  }
  const countryCounts = {};
  for (const country of availableCountries) {
   if (country.id === "all") {
    countryCounts[country.id] = brandsForCountryCount.length;
   } else {
    countryCounts[country.id] = brandsForCountryCount.filter(b => b.country === country.id).length;
   }
  }

  // 3. Alt Kategori Filtreleri Sayımları (Tümü, Kurum...)
  // BU SAYIMLAR, AKTİF OLAN DURUM VE ÜLKE FİLTRELERİNE GÖRE HESAPLANIR.
  let brandsForSubCategoryCount = brands;
  if (activeFilter !== "all") {
   if (activeFilter === "boycott") {
    brandsForSubCategoryCount = brandsForSubCategoryCount.filter(b => b.isBoycotted === "boykot");
   } else if (activeFilter === "alternatif") {
    brandsForSubCategoryCount = brandsForSubCategoryCount.filter(b => b.isBoycotted === "boykot-degil");
   } else if (activeFilter === "onerilmiyor") {
    brandsForSubCategoryCount = brandsForSubCategoryCount.filter(b => b.isBoycotted === "onerilmiyor");
   }
  }
  if (activeCountryFilter !== "all") {
   brandsForSubCategoryCount = brandsForSubCategoryCount.filter(b => b.country === activeCountryFilter);
  }
  const subCategoryCounts = {};
  for (const subCat of availableSubCategories) {
   if (subCat.id === "all") {
    subCategoryCounts[subCat.id] = brandsForSubCategoryCount.length;
   } else {
    subCategoryCounts[subCat.id] = brandsForSubCategoryCount.filter(b => b.subCategory === subCat.id).length;
   }
  }

  return { statusCounts, countryCounts, subCategoryCounts };

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
      const count = statusCounts[filter.id] || 0;
      return (
       <button
        key={filter.id}
        type="button"
        onClick={() => handleFilterChange(filter.id)}
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
        {availableSubCategories
         .filter((subCat) => (subCategoryCounts[subCat.id] || 0) > 0 || subCat.id === "all")
         .map((subCat) => {
          const isActive = activeSubCategoryFilter === subCat.id;
          const count = subCategoryCounts[subCat.id] || 0;
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
       {availableCountries
        .filter((country) => (countryCounts[country.id] || 0) > 0 || country.id === "all")
        .map((country) => {
         const isActive = activeCountryFilter === country.id;
         const count = countryCounts[country.id] || 0;
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

       <div className="flex flex-1 flex-col gap-4 px-5 py-4">
        <div className="flex items-center justify-between gap-3">
         <Link
          href={`/kategoriler/${brand.categorySlug}/${brand.slug}`}
          className="text-base font-semibold text-slate-900 transition group-hover:text-orange-600"
         >
          {brand.name}
         </Link>
         <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm ${brand.isBoycotted === "boykot"
           ? "bg-linear-to-r from-red-500 to-red-600 text-white"
           : brand.isBoycotted === "onerilmiyor"
            ? "bg-linear-to-r from-amber-500 to-amber-600 text-white"
            : "bg-linear-to-r from-emerald-500 to-emerald-600 text-white"
           }`}
         >
          {brand.isBoycotted === "boykot" ? (
           <>
            <IoCloseCircle className="h-4 w-4" />
            <span>Boykot</span>
           </>
          ) : brand.isBoycotted === "onerilmiyor" ? (
           <>
            <IoWarning className="h-4 w-4" />
            <span>Önerilmiyor</span>
           </>
          ) : (
           <>
            <IoCheckmarkCircle className="h-4 w-4" />
            <span>Boykot Değil</span>
           </>
          )}
         </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
         {brand.country && (
          <div className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold uppercase text-slate-600">
           {brand.country}
          </div>
         )}
         {brand.subCategory && (
          <div className="rounded-md bg-purple-100 px-2 py-0.5 text-xs font-semibold uppercase text-purple-700">
           {brand.subCategory}
          </div>
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
          <IoArrowForward className="h-4 w-4" />
         </Link>
         {brand.website && (
          <Link
           href={brand.website}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-700"
          >
           Resmi Site
           <IoLinkOutline className="h-4 w-4" />
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

CategoryBrandList.propTypes = {
 brands: PropTypes.array,
 subCategories: PropTypes.array,
 showBoycottReason: PropTypes.bool
};