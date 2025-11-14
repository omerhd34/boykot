"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import {
 FiMenu,
 FiX,
 FiChevronDown,
 FiSearch,
 FiLoader,
 FiArrowUpRight,
 FiArrowRight,
 FiSlash,
} from "react-icons/fi";

export default function Header({ categories = [] }) {
 const router = useRouter();
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [dropdownOpen, setDropdownOpen] = useState(false);
 const [resultsOpen, setResultsOpen] = useState(false);
 const [searchTerm, setSearchTerm] = useState("");
 const [searchError, setSearchError] = useState("");
 const [isSearching, setIsSearching] = useState(false);
 const [searchResults, setSearchResults] = useState({
  brands: [],
  categories: [],
 });
 const dropdownButtonRef = useRef(null);
 const dropdownMenuRef = useRef(null);
 const searchContainerRef = useRef(null);
 const searchTimeoutRef = useRef(null);

 const topCategories = useMemo(() => categories.slice(0, 6), [categories]);
 const groupedCategories = useMemo(() => {
  const columnSize = Math.ceil(topCategories.length / 2) || 1;
  return chunk(topCategories, columnSize);
 }, [topCategories]);

 useEffect(() => {
  if (!dropdownOpen) {
   return undefined;
  }

  function handlePointerDown(event) {
   if (
    dropdownMenuRef.current?.contains(event.target) ||
    dropdownButtonRef.current?.contains(event.target)
   ) {
    return;
   }
   setDropdownOpen(false);
  }

  function handleKey(event) {
   if (event.key === "Escape") {
    setDropdownOpen(false);
   }
  }

  document.addEventListener("mousedown", handlePointerDown);
  document.addEventListener("keydown", handleKey);

  return () => {
   document.removeEventListener("mousedown", handlePointerDown);
   document.removeEventListener("keydown", handleKey);
  };
 }, [dropdownOpen]);

 async function handleSearchSubmit(event) {
  event.preventDefault();
  const query = searchTerm.trim();

  if (!query) {
   return;
  }

  // Önceki timeout'u iptal et
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

 function handleSearchChange(event) {
  const value = event.target.value;
  setSearchTerm(value);
  if (searchError) {
   setSearchError("");
  }

  // Önceki timeout'u temizle
  if (searchTimeoutRef.current) {
   clearTimeout(searchTimeoutRef.current);
  }

  const trimmedValue = value.trim();

  // Eğer boşsa sonuçları kapat
  if (!trimmedValue) {
   setResultsOpen(false);
   setSearchResults({ brands: [], categories: [] });
   return;
  }

  // Minimum 2 karakter kontrolü
  if (trimmedValue.length < 2) {
   setResultsOpen(false);
   setSearchResults({ brands: [], categories: [] });
   return;
  }

  // Debounce ile arama yap (500ms bekle)
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
  <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
   <div className="border-b border-orange-100 bg-linear-to-r from-orange-50/70 via-white to-slate-50/60">
    <div className="container flex flex-col items-center gap-1 py-3 text-center text-xs text-slate-600 sm:text-sm">
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
   <div className="container flex items-center justify-between py-8">
    <Link
     href="/"
     className="flex items-center gap-3 text-lg font-semibold text-slate-900 md:text-xl"
    >
     <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-600">
      BR
     </span>
     Boykot Rehberi
    </Link>

    <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
     <div className="relative" ref={searchContainerRef}>
      <form
       onSubmit={handleSearchSubmit}
       className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/60 px-4 py-2"
      >
       <FiSearch size={16} className="text-slate-400" aria-hidden="true" />
       <input
        type="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Marka veya kategori ara"
        className="w-60 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
        aria-label="Marka veya kategori ara"
       />
       <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-400"
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
        className="absolute left-0 top-full mt-1 text-xs font-medium text-red-600"
        aria-live="polite"
       >
        {searchError}
       </p>
      )}
      {resultsOpen && (searchResults.brands.length > 0 || searchResults.categories.length > 0) && (
       <div className="absolute left-0 top-full z-50 mt-2 w-[320px] rounded-2xl border border-slate-200 bg-white shadow-xl">
        <div className="max-h-72 overflow-y-auto py-3">
         {searchResults.brands.length > 0 && (
          <div className="px-4 pb-3">
           <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Markalar
           </p>
           <ul className="mt-2 space-y-2">
            {searchResults.brands.map((brand) => (
             <li key={brand.id}>
              <button
               type="button"
               onClick={() =>
                handleResultClick(
                 `/kategoriler/${brand.category.slug}/${brand.slug}`
                )
               }
               className="flex w-full items-start justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm text-slate-600 transition hover:bg-orange-50"
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
            ))}
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

     <div className="relative">
      <button
       type="button"
       ref={dropdownButtonRef}
       className="inline-flex items-center gap-2 rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900"
       onClick={() => setDropdownOpen((prev) => !prev)}
       aria-expanded={dropdownOpen}
       aria-haspopup="true"
      >
       Kategoriler
       <FiChevronDown
        size={16}
        className={`transition ${dropdownOpen ? "rotate-180" : ""}`}
       />
      </button>

      {dropdownOpen && (
       <div
        ref={dropdownMenuRef}
        className="absolute left-1/2 top-full z-50 mt-3 w-[560px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl"
       >
        <div className="grid gap-4 md:grid-cols-2">
         {groupedCategories.map((group, groupIndex) => (
          <div key={groupIndex} className="grid gap-2">
           {group.map((category) => (
            <Link
             key={category.id}
             href={`/kategoriler/${category.slug}`}
             className="flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-sm transition hover:border-orange-200 hover:bg-orange-50/80 hover:text-orange-700"
             onClick={() => setDropdownOpen(false)}
            >
             <span className="font-semibold">{category.name}</span>
             <FiArrowRight className="text-base text-slate-400" aria-hidden="true" />
            </Link>
           ))}
          </div>
         ))}
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm">
         <Link
          href="/kategoriler"
          className="flex items-center justify-between font-semibold text-orange-600 transition hover:text-orange-700"
          onClick={() => setDropdownOpen(false)}
         >
          Tüm kategorileri görüntüle
         </Link>
        </div>
       </div>
      )}
     </div>

     <Link
      href="/iletisim"
      className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900"
     >
      İletişim
     </Link>
     <Link
      href="/kategoriler"
      className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-white shadow-sm transition hover:bg-orange-600"
     >
      <span>Boykot Listesi</span>
      <FiSlash size={18} aria-hidden="true" />
     </Link>
    </nav>

    <button
     type="button"
     onClick={toggleMobileMenu}
     className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
     aria-label="Menüyü aç"
    >
     {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
    </button>
   </div>

   {mobileMenuOpen && (
    <div className="border-t border-slate-200 bg-white/95 px-4 py-6 shadow-lg lg:hidden">
     <nav className="grid gap-4 text-sm font-medium text-slate-700">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
       <p className="text-sm font-semibold text-slate-800">Kategoriler</p>
       <div className="mt-3 grid gap-2">
        {topCategories.map((category) => (
         <Link
          key={category.id}
          href={`/kategoriler/${category.slug}`}
          className="rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-orange-50 hover:text-orange-700"
          onClick={closeMobileMenu}
         >
          {category.name}
         </Link>
        ))}
        <Link
         href="/kategoriler"
         className="mt-2 inline-flex items-center gap-2 rounded-xl bg-orange-100 px-3 py-2 font-semibold text-orange-600 transition hover:bg-orange-200"
         onClick={closeMobileMenu}
        >
         Tümünü gör
        </Link>
       </div>
      </div>
      <Link href="/iletisim" onClick={closeMobileMenu}>
       İletişim
      </Link>
      <Link
       href="/kategoriler"
       className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-white shadow-sm transition hover:bg-orange-600"
       onClick={closeMobileMenu}
      >
       Boykot listeleri
      </Link>
     </nav>
    </div>
   )}
  </header>
 );
}

function chunk(array, size) {
 const result = [];
 for (let i = 0; i < array.length; i += size) {
  result.push(array.slice(i, i + size));
 }
 return result;
}

