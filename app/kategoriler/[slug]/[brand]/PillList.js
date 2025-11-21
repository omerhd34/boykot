"use client";

import { useState } from "react";

export default function PillList({ pills }) {
 const [showAll, setShowAll] = useState(false);

 // Eğer pills string array ise (pill_category), obje array'e çevir
 const pillsArray = Array.isArray(pills) && pills.length > 0 && typeof pills[0] === "string"
  ? pills.map((pill, index) => {
   // "İlaç Adı (Kullanım)" formatını parse et
   const match = pill.match(/^(.+?)\s*\((.+?)\)$/);
   return {
    id: `pill-${index}`,
    name: match ? match[1].trim() : pill,
    usage: match ? match[2].trim() : "",
   };
  })
  : pills;

 const displayedPills = showAll ? pillsArray : pillsArray.slice(0, 9);
 const hasMore = pillsArray.length > 9;

 return (
  <>
   <div className="grid gap-3 grid-cols-3">
    {displayedPills.map((pill) => (
     <div
      key={pill.id || pill.name}
      className="flex flex-col items-center gap-2 overflow-hidden rounded-lg border-2 border-slate-200 bg-white p-3 shadow-sm"
     >
      <div className="text-center">
       <h4 className="text-xs font-semibold text-slate-900">
        {pill.name}
       </h4>
       {pill.usage && (
        <p className="mt-1 text-xs text-slate-500">
         {pill.usage}
        </p>
       )}
      </div>
     </div>
    ))}
   </div>
   {hasMore && !showAll && (
    <button
     onClick={() => setShowAll(true)}
     className="mt-4 w-full rounded-lg border-2 border-orange-400 bg-white px-4 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
    >
     Devamı
    </button>
   )}
  </>
 );
}
