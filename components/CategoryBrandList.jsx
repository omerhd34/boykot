"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useRef, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import PropTypes from 'prop-types';
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel";
import {
 IoChevronDown,
 IoCloseCircle,
 IoWarning,
 IoCheckmarkCircle,
 IoArrowForward,
 IoLinkOutline,
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
 const [carouselApi, setCarouselApi] = useState(null);
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

 const hasSubCategory = (brand, subCategoryFilter) => {
  if (!brand.subCategory) return false;
  if (Array.isArray(brand.subCategory)) {
   return brand.subCategory.includes(subCategoryFilter);
  }
  return brand.subCategory === subCategoryFilter;
 };
 const calculateStatusCounts = (brands, activeCountryFilter, activeSubCategoryFilter) => {
  let brandsForStatusCount = brands;
  if (activeCountryFilter !== "all") {
   brandsForStatusCount = brandsForStatusCount.filter(b => b.country === activeCountryFilter);
  }
  if (activeSubCategoryFilter !== "all") {
   brandsForStatusCount = brandsForStatusCount.filter(b => hasSubCategory(b, activeSubCategoryFilter));
  }
  return {
   all: brandsForStatusCount.length,
   boycott: brandsForStatusCount.filter(b => b.isBoycotted === "boykot").length,
   alternatif: brandsForStatusCount.filter(b => b.isBoycotted === "boykot-degil").length,
   onerilmiyor: brandsForStatusCount.filter(b => b.isBoycotted === "onerilmiyor").length,
  };
 };

 const calculateCountryCounts = (brands, activeFilter, activeSubCategoryFilter, availableCountries) => {
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
   brandsForCountryCount = brandsForCountryCount.filter(b => hasSubCategory(b, activeSubCategoryFilter));
  }
  const countryCounts = {};
  for (const country of availableCountries) {
   if (country.id === "all") {
    countryCounts[country.id] = brandsForCountryCount.length;
   } else {
    countryCounts[country.id] = brandsForCountryCount.filter(b => b.country === country.id).length;
   }
  }
  return countryCounts;
 };

 const calculateSubCategoryCounts = (brands, activeFilter, activeCountryFilter, availableSubCategories) => {
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
    subCategoryCounts[subCat.id] = brandsForSubCategoryCount.filter(b => hasSubCategory(b, subCat.id)).length;
   }
  }
  return subCategoryCounts;
 };


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
   filtered = filtered.filter((brand) => hasSubCategory(brand, activeSubCategoryFilter));
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

 useEffect(() => {
  if (activeFilter === "onerilmiyor") {
   const onerilmiyorCount = calculateStatusCounts(brands, activeCountryFilter, activeSubCategoryFilter).onerilmiyor;
   if (onerilmiyorCount === 0) {
    const params = new URLSearchParams(searchParams);
    params.delete("filter");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
   }
  }
 }, [brands, activeCountryFilter, activeSubCategoryFilter, activeFilter, searchParams, router, pathname]);

 // Filtreleme değiştiğinde carousel'ı başa al
 useEffect(() => {
  if (carouselApi) {
   carouselApi.scrollTo(0);
  }
 }, [activeFilter, activeCountryFilter, activeSubCategoryFilter, carouselApi]);

 const selectedCountry = useMemo(() => {
  return availableCountries.find((c) => c.id === activeCountryFilter) || availableCountries[0];
 }, [availableCountries, activeCountryFilter]);

 const selectedSubCategory = useMemo(() => {
  return availableSubCategories.find((c) => c.id === activeSubCategoryFilter) || availableSubCategories[0];
 }, [availableSubCategories, activeSubCategoryFilter]);

 const { statusCounts, countryCounts, subCategoryCounts } = useMemo(() => ({
  statusCounts: calculateStatusCounts(brands, activeCountryFilter, activeSubCategoryFilter),
  countryCounts: calculateCountryCounts(brands, activeFilter, activeSubCategoryFilter, availableCountries),
  subCategoryCounts: calculateSubCategoryCounts(brands, activeFilter, activeCountryFilter, availableSubCategories),
 }), [brands, activeFilter, activeCountryFilter, activeSubCategoryFilter, availableCountries, availableSubCategories]);

 return (
  <div className="space-y-6">
   <div className="flex flex-wrap items-center gap-3">
    <div className="inline-flex gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
     {FILTERS.filter((filter) => {
      if (filter.id === "onerilmiyor") {
       const count = statusCounts[filter.id] || 0;
       return count > 0;
      }
      return true;
     }).map((filter) => {
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
     <div className={`relative inline-flex rounded-full border p-1 transition ${activeSubCategoryFilter === "all"
      ? "border-slate-200 bg-slate-50"
      : "border-purple-500 bg-purple-500"
      }`} ref={subCategoryDropdownRef}>
      <button
       type="button"
       onClick={() => setIsSubCategoryDropdownOpen(!isSubCategoryDropdownOpen)}
       className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${activeSubCategoryFilter === "all"
        ? "bg-transparent text-slate-600 hover:bg-white"
        : "bg-transparent text-white"
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
         .sort((a, b) => {
          if (a.id === "all") return -1;
          if (b.id === "all") return 1;
          const countA = subCategoryCounts[a.id] || 0;
          const countB = subCategoryCounts[b.id] || 0;
          return countB - countA;
         })
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

    <div className={`relative inline-flex rounded-full border p-1 transition ${activeCountryFilter === "all"
     ? "border-slate-200 bg-slate-50"
     : "border-orange-500 bg-orange-500"
     }`} ref={countryDropdownRef}>
     <button
      type="button"
      onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${activeCountryFilter === "all"
       ? "bg-transparent text-slate-600 hover:bg-white"
       : "bg-transparent text-white"
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

        .sort((a, b) => {
         if (a.id === "all") return -1;
         if (b.id === "all") return 1;
         const countA = countryCounts[a.id] || 0;
         const countB = countryCounts[b.id] || 0;
         return countB - countA;
        })

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
    <Carousel
     opts={{
      align: "start",
     }}
     setApi={setCarouselApi}
     className="relative w-full"
    >
     <CarouselContent className="-ml-5">
      {filteredBrands.map((brand) => (
       <CarouselItem key={brand.id} className="pl-5 md:basis-1/2">
        <article
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
           {
            (() => {
             let bgColorClass;
             if (brand.isBoycotted === "boykot") {
              bgColorClass = "bg-linear-to-r from-red-500 to-red-600 text-white";
             } else if (brand.isBoycotted === "onerilmiyor") {
              bgColorClass = "bg-linear-to-r from-amber-500 to-amber-600 text-white";
             } else {
              bgColorClass = "bg-linear-to-r from-emerald-500 to-emerald-600 text-white";
             }
             return (
              <span
               className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm ${bgColorClass}`}
              >
               {
                (() => {
                 if (brand.isBoycotted === "boykot") {
                  return (
                   <>
                    <IoCloseCircle className="h-4 w-4" />
                    <span>Boykot</span>
                   </>
                  );
                 } else if (brand.isBoycotted === "onerilmiyor") {
                  return (
                   <>
                    <IoWarning className="h-4 w-4" />
                    <span>Önerilmiyor</span>
                   </>
                  );
                 } else {
                  return (
                   <>
                    <IoCheckmarkCircle className="h-4 w-4" />
                    <span>Boykot Değil</span>
                   </>
                  );
                 }
                })()
               }
              </span>
             );
            })()
           }
          </div>
          <div className="flex flex-wrap items-center gap-2">
           {brand.country && (
            <div className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold uppercase text-slate-600">
             {brand.country}
            </div>
           )}
           {brand.subCategory && brand.subCategory.length > 0 && (
            <div className="rounded-md bg-purple-100 px-2 py-0.5 text-xs font-semibold uppercase text-purple-700">
             {(Array.isArray(brand.subCategory) ? brand.subCategory : [brand.subCategory]).join(" & ")}
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
       </CarouselItem>
      ))}
     </CarouselContent>
     <CarouselPrevious className="left-0 md:-left-12" />
     <CarouselNext className="right-0 md:-right-12" />
    </Carousel>
   )}
  </div>
 );
}

CategoryBrandList.propTypes = {
 brands: PropTypes.array,
 subCategories: PropTypes.array,
 showBoycottReason: PropTypes.bool
};