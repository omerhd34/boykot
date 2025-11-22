"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
 FiMenu,
 FiX,
 FiSearch,
 FiLoader,
 FiArrowUpRight,
 FiMail,
 FiArrowRight,
 FiGrid,
} from "react-icons/fi";
import BoykotLogo from "./BoykotLogo.jsx";

export default function Header() {
 const router = useRouter();
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
 const [resultsOpen, setResultsOpen] = useState(false);
 const [searchTerm, setSearchTerm] = useState("");
 const [searchError, setSearchError] = useState("");
 const [isSearching, setIsSearching] = useState(false);
 const [searchResults, setSearchResults] = useState({
  brands: [],
  categories: [],
 });
 const searchContainerRef = useRef(null);
 const searchTimeoutRef = useRef(null);


 async function handleSearchSubmit(event) {
  event.preventDefault();
  const query = searchTerm.trim();

  if (!query) {
   return;
  }

  if (searchTimeoutRef.current) {
   clearTimeout(searchTimeoutRef.current);
  }

  setIsSearching(true);
  setSearchError("");

  try {
   const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
    cache: "no-store",
   });

   if (!response.ok) {
    throw new Error("Arama başarısız.");
   }

   const data = await response.json();

   if (data.error) {
    throw new Error(data.error);
   }

   if (data.brands?.length === 1 && data.categories?.length === 0) {
    const brand = data.brands[0];
    closeMobileMenu();
    setSearchTerm("");
    setResultsOpen(false);
    router.push(`/kategoriler/${brand.category.slug}/${brand.slug}`);
    return;
   }

   if (data.categories?.length === 1 && data.brands?.length === 0) {
    const category = data.categories[0];
    closeMobileMenu();
    setSearchTerm("");
    setResultsOpen(false);
    router.push(`/kategoriler/${category.slug}`);
    return;
   }

   if (!data.brands?.length && !data.categories?.length) {
    setSearchError("Sonuç bulunamadı. Lütfen başka bir ifadeyle deneyin.");
    setResultsOpen(false);
    setSearchResults({ brands: [], categories: [] });
    return;
   }

   setSearchResults({
    brands: data.brands ?? [],
    categories: data.categories ?? [],
   });
   setResultsOpen(true);
  } catch (error) {
   console.error("[Header] Arama hatası:", error);
   setSearchError("Arama sırasında bir sorun oluştu. Lütfen tekrar deneyin.");
  } finally {
   setIsSearching(false);
  }
 }

 function toggleMobileMenu() {
  setMobileMenuOpen((prev) => !prev);
 }

 function closeMobileMenu() {
  setMobileMenuOpen(false);
 }

 function toggleCategoryMenu() {
  setCategoryMenuOpen((prev) => !prev);
 }

 function handleSearchChange(event) {
  const value = event.target.value;
  setSearchTerm(value);
  if (searchError) {
   setSearchError("");
  }

  if (searchTimeoutRef.current) {
   clearTimeout(searchTimeoutRef.current);
  }

  const trimmedValue = value.trim();

  if (!trimmedValue) {
   setResultsOpen(false);
   setSearchResults({ brands: [], categories: [] });
   return;
  }

  if (trimmedValue.length < 2) {
   setResultsOpen(false);
   setSearchResults({ brands: [], categories: [] });
   return;
  }

  searchTimeoutRef.current = setTimeout(async () => {
   await performSearch(trimmedValue);
  }, 500);
 }

 async function performSearch(query) {
  if (!query || query.length < 2) {
   return;
  }

  setIsSearching(true);
  setSearchError("");

  try {
   const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`, {
    cache: "no-store",
   });

   if (!response.ok) {
    throw new Error("Arama başarısız.");
   }

   const data = await response.json();

   if (data.error) {
    throw new Error(data.error);
   }

   if (!data.brands?.length && !data.categories?.length) {
    setSearchError("Sonuç bulunamadı. Lütfen başka bir ifadeyle deneyin.");
    setResultsOpen(false);
    setSearchResults({ brands: [], categories: [] });
    return;
   }

   setSearchResults({
    brands: data.brands ?? [],
    categories: data.categories ?? [],
   });
   setResultsOpen(true);
  } catch (error) {
   console.error("[Header] Arama hatası:", error);
   setSearchError("Arama sırasında bir sorun oluştu. Lütfen tekrar deneyin.");
  } finally {
   setIsSearching(false);
  }
 }

 function handleResultClick(url) {
  closeMobileMenu();
  setResultsOpen(false);
  setSearchTerm("");
  setSearchResults({ brands: [], categories: [] });
  router.push(url);
 }

 useEffect(() => {
  function handleClickOutside(event) {
   if (searchContainerRef.current?.contains(event.target)) {
    return;
   }
   setResultsOpen(false);
  }

  if (resultsOpen) {
   document.addEventListener("mousedown", handleClickOutside);
   return () => document.removeEventListener("mousedown", handleClickOutside);
  }
  return undefined;
 }, [resultsOpen]);

 useEffect(() => {
  return () => {
   if (searchTimeoutRef.current) {
    clearTimeout(searchTimeoutRef.current);
   }
  };
 }, []);

 const AYET = {
  reference: "Maide Suresi, 2. Ayet",
  text: "Allah, iman edenleri, kendilerine haksızlık yapanlara karşı güçsüz kalmamaları için, birbirinize yardımlaşmanızı emreder.",
 };

 const HADIS = {
  reference: "Hadis-i Şerif",
  text: "Bir kavimle ticaret yapmazsanız, onlara zarar vermezsiniz ama onları yanlış işlerden alıkoyarsınız.",
 };

 return (
  <header className="fixed inset-x-0 top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
   <div className="border-b border-orange-100 bg-linear-to-r from-orange-50/70 via-white to-slate-50/60">
    <div className="container flex flex-col items-center gap-1 py-2.5 text-center text-xs text-slate-600 sm:text-sm">
     <span className="font-medium text-orange-600 md:max-w-6xl">
      <span className="font-bold">{AYET.reference}</span>  |   {AYET.text}
     </span>
     <span className="text-slate-600 md:max-w-3xl">
      <span className="font-medium">
       <span className="font-bold">{HADIS.reference}</span>  |   {HADIS.text}
      </span>
     </span>
    </div>
   </div>
   <div className="container flex items-center gap-4 py-6">
    <BoykotLogo size={36} />

    <nav className="hidden flex-1 items-center gap-4 text-sm font-medium text-slate-600 lg:flex">
     <div className="relative flex-1 max-w-3xl mx-auto" ref={searchContainerRef}>
      <form
       onSubmit={handleSearchSubmit}
       className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-0 shadow-sm hover:border-slate-300 transition-colors h-[50px]"
      >
       <FiSearch size={18} className="text-slate-400 shrink-0" aria-hidden="true" />
       <input
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Marka veya kategori ara"
        className="flex-1 bg-transparent text-base text-slate-700 placeholder:text-slate-400 focus:outline-none"
        aria-label="Marka veya kategori ara"
       />
       <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-400 shadow-sm"
        disabled={isSearching}
        aria-label="Ara"
       >
        {isSearching ? (
         <FiLoader size={16} className="animate-spin" aria-hidden="true" />
        ) : (
         <FiSearch size={16} aria-hidden="true" />
        )}
       </button>
      </form>
      {searchError && (
       <p
        className="absolute left-0 top-full mt-1 text-xs font-medium text-red-600"
        aria-live="polite"
       >
        {searchError}
       </p>
      )}
      {resultsOpen && (searchResults.brands.length > 0 || searchResults.categories.length > 0) && (
       <div className="absolute left-0 top-full z-50 mt-2 w-full max-w-2xl rounded-2xl border border-slate-200 bg-white shadow-xl">
        <div className="max-h-72 overflow-y-auto py-3">
         {searchResults.brands.length > 0 && (
          <div className="px-4 pb-3">
           <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Markalar
           </p>
           <ul className="mt-2 space-y-2">
            {searchResults.brands.map((brand) => {
             const getBackgroundColor = () => {
              if (brand.isBoycotted === "boykot") {
               return "bg-red-50 hover:bg-red-100";
              } else if (brand.isBoycotted === "onerilmiyor") {
               return "bg-orange-50 hover:bg-orange-100";
              } else {
               return "bg-green-50 hover:bg-green-100";
              }
             };
             return (
              <li key={brand.id}>
               <button
                type="button"
                onClick={() =>
                 handleResultClick(
                  `/kategoriler/${brand.category.slug}/${brand.slug}`
                 )
                }
                className={`flex w-full items-start justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm text-slate-600 transition ${getBackgroundColor()}`}
               >
                <span>
                 <span className="block font-semibold text-slate-900">
                  {brand.name}
                 </span>
                 <span className="text-xs text-slate-500">
                  {brand.category.name}
                 </span>
                </span>
                <FiArrowUpRight size={16} className="text-orange-500" aria-hidden />
               </button>
              </li>
             );
            })}
           </ul>
          </div>
         )}
         {searchResults.categories.length > 0 && (
          <div className="border-t border-slate-100 px-4 pt-3">
           <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Kategoriler
           </p>
           <ul className="mt-2 space-y-2">
            {searchResults.categories.map((category) => (
             <li key={category.id}>
              <button
               type="button"
               onClick={() =>
                handleResultClick(`/kategoriler/${category.slug}`)
               }
               className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm text-slate-600 transition hover:bg-orange-50"
              >
               <span className="font-semibold text-slate-900">
                {category.name}
               </span>
               <FiArrowUpRight size={16} className="text-orange-500" aria-hidden />
              </button>
             </li>
            ))}
           </ul>
          </div>
         )}
        </div>
       </div>
      )}
     </div>

     <button
      type="button"
      onClick={toggleCategoryMenu}
      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 h-[50px] text-sm font-medium text-slate-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 shadow-sm"
     >
      <FiGrid size={18} aria-hidden="true" />
      <span>Kategoriler</span>
     </button>

     <Link
      href="/iletisim"
      className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 h-[50px] text-sm font-medium text-white transition hover:bg-orange-600 shadow-sm"
     >
      <FiMail size={18} aria-hidden="true" />
      <span>İletişim</span>
     </Link>
    </nav>

    <button
     type="button"
     onClick={toggleMobileMenu}
     className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
     aria-label="Menüyü aç"
    >
     {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
    </button>
   </div>

   {mobileMenuOpen && (
    <div className="border-t border-slate-200 bg-white px-4 py-6 shadow-lg lg:hidden">
     <nav className="grid gap-4 text-sm font-medium text-slate-700">
      <div className="relative mb-4" ref={searchContainerRef}>
       <form
        onSubmit={handleSearchSubmit}
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-0 h-[50px]"
       >
        <FiSearch size={16} className="text-slate-400" aria-hidden="true" />
        <input
         type="search"
         value={searchTerm}
         onChange={handleSearchChange}
         placeholder="Marka veya kategori ara"
         className="flex-1 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
         aria-label="Marka veya kategori ara"
        />
        <button
         type="submit"
         className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-400"
         disabled={isSearching}
         aria-label="Ara"
        >
         {isSearching ? (
          <FiLoader size={14} className="animate-spin" aria-hidden="true" />
         ) : (
          <FiSearch size={14} aria-hidden="true" />
         )}
        </button>
       </form>
       {searchError && (
        <p
         className="mt-2 text-xs font-medium text-red-600"
         aria-live="polite"
        >
         {searchError}
        </p>
       )}
       {resultsOpen && (searchResults.brands.length > 0 || searchResults.categories.length > 0) && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-2xl border border-slate-200 bg-white shadow-xl">
         <div className="max-h-72 overflow-y-auto py-3">
          {searchResults.brands.length > 0 && (
           <div className="px-4 pb-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
             Markalar
            </p>
            <ul className="mt-2 space-y-2">
             {searchResults.brands.map((brand) => {
              const getBackgroundColor = () => {
               if (brand.isBoycotted === "boykot") {
                return "bg-red-50 hover:bg-red-100";
               } else if (brand.isBoycotted === "onerilmiyor") {
                return "bg-orange-50 hover:bg-orange-100";
               } else {
                return "bg-green-50 hover:bg-green-100";
               }
              };
              return (
               <li key={brand.id}>
                <button
                 type="button"
                 onClick={() =>
                  handleResultClick(
                   `/kategoriler/${brand.category.slug}/${brand.slug}`
                  )
                 }
                 className={`flex w-full items-start justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm text-slate-600 transition ${getBackgroundColor()}`}
                >
                 <span>
                  <span className="block font-semibold text-slate-900">
                   {brand.name}
                  </span>
                  <span className="text-xs text-slate-500">
                   {brand.category.name}
                  </span>
                 </span>
                 <FiArrowUpRight size={16} className="text-orange-500" aria-hidden />
                </button>
               </li>
              );
             })}
            </ul>
           </div>
          )}
          {searchResults.categories.length > 0 && (
           <div className="border-t border-slate-100 px-4 pt-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
             Kategoriler
            </p>
            <ul className="mt-2 space-y-2">
             {searchResults.categories.map((category) => (
              <li key={category.id}>
               <button
                type="button"
                onClick={() =>
                 handleResultClick(`/kategoriler/${category.slug}`)
                }
                className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm text-slate-600 transition hover:bg-orange-50"
               >
                <span className="font-semibold text-slate-900">
                 {category.name}
                </span>
                <FiArrowUpRight size={16} className="text-orange-500" aria-hidden />
               </button>
              </li>
             ))}
            </ul>
           </div>
          )}
         </div>
        </div>
       )}
      </div>
      <button
       type="button"
       onClick={toggleCategoryMenu}
       className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 h-[50px] text-slate-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
      >
       <FiGrid size={16} aria-hidden="true" />
       Kategoriler
      </button>
      <Link
       href="/iletisim"
       className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-4 h-[50px] text-white transition hover:bg-orange-600"
       onClick={closeMobileMenu}
      >
       <FiMail size={16} aria-hidden="true" />
       İletişim
      </Link>
     </nav>
    </div>
   )}

   <div
    className={`fixed inset-x-0 top-[184px] z-30 border-b border-slate-200 bg-white shadow-sm transition-all duration-500 ease-in-out ${categoryMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
     }`}
   >
    <div
     className={`transform transition-transform duration-500 ease-out ${categoryMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
     <nav className="py-5">
      <div className="container">
       <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
         href="/kategoriler/giyim-tekstil"
         className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 shadow-sm"
         onClick={() => setCategoryMenuOpen(false)}
        >
         Giyim - Tekstil
        </Link>

        <Link
         href="/kategoriler/market-alisverisi"
         className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 shadow-sm"
         onClick={() => setCategoryMenuOpen(false)}
        >
         Market Alışverişi
        </Link>
        <Link
         href="/kategoriler/supermarket"
         className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 shadow-sm"
         onClick={() => setCategoryMenuOpen(false)}
        >
         Süpermarket
        </Link>
        <Link
         href="/kategoriler/e-ticaret"
         className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 shadow-sm"
         onClick={() => setCategoryMenuOpen(false)}
        >
         E-ticaret
        </Link>
        <Link
         href="/kategoriler/finans"
         className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 shadow-sm"
         onClick={() => setCategoryMenuOpen(false)}
        >
         Finans
        </Link>
        <Link
         href="/kategoriler/dijital-medya"
         className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 shadow-sm"
         onClick={() => setCategoryMenuOpen(false)}
        >
         Dijital Medya
        </Link>
        <Link
         href="/kategoriler/teknoloji"
         className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 shadow-sm"
         onClick={() => setCategoryMenuOpen(false)}
        >
         Teknoloji
        </Link>
        <Link
         href="/kategoriler"
         className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-orange-600"
         onClick={() => setCategoryMenuOpen(false)}
        >
         <span>Diğerleri</span>
         <FiArrowRight size={16} aria-hidden="true" />
        </Link>
       </div>
      </div>
     </nav>
    </div>
   </div>
  </header>
 );
}