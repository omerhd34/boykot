"use client";

import { useState, useEffect } from "react";
<<<<<<< HEAD
import { FiCheckCircle, FiXCircle, FiClock, FiRefreshCw } from "react-icons/fi";
=======
import { FiCheckCircle, FiXCircle, FiClock } from "react-icons/fi";
>>>>>>> 77835048519632a9186d7fd467a5ac180eae690d
import Link from "next/link";
import { IoArrowBack, IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function AdminBrandSuggestionsPage() {
 const router = useRouter();
 const [suggestions, setSuggestions] = useState([]);
 const [loading, setLoading] = useState(true);
 const [filter, setFilter] = useState("all");
 const [updating, setUpdating] = useState(null);
<<<<<<< HEAD
=======
 const [notification, setNotification] = useState(null);
>>>>>>> 77835048519632a9186d7fd467a5ac180eae690d

 useEffect(() => {
  fetchSuggestions();
 }, []);

 const fetchSuggestions = async () => {
  try {
   setLoading(true);
   const response = await fetch("/api/brand-suggestions");
   const data = await response.json();

   if (data.success) {
    setSuggestions(data.suggestions);
   }
  } catch (error) {
   console.error("Öneriler yüklenemedi:", error);
  } finally {
   setLoading(false);
  }
 };

<<<<<<< HEAD
=======
 const showNotification = (message, type = "success") => {
  setNotification({ message, type });
  setTimeout(() => setNotification(null), 3000);
 };

>>>>>>> 77835048519632a9186d7fd467a5ac180eae690d
 const handleLogout = async () => {
  try {
   await fetch("/api/admin/login", { method: "DELETE" });
   router.push("/admin/login");
  } catch (error) {
   console.error("Çıkış hatası:", error);
  }
 };

 const updateStatus = async (id, newStatus, adminNotes = "") => {
  try {
   setUpdating(id);
   const response = await fetch(`/api/brand-suggestions/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: newStatus, adminNotes }),
   });

<<<<<<< HEAD
   if (response.ok) {
    await fetchSuggestions();
   }
  } catch (error) {
   console.error("Durum güncellenemedi:", error);
=======
   const data = await response.json();

   if (response.ok) {
    await fetchSuggestions();
    showNotification(
     newStatus === "approved"
      ? "Öneri başarıyla onaylandı!"
      : "Öneri başarıyla reddedildi!",
     "success"
    );
   } else {
    showNotification(data.error || "Bir hata oluştu.", "error");
   }
  } catch (error) {
   console.error("Durum güncellenemedi:", error);
   showNotification("Durum güncellenirken bir hata oluştu.", "error");
>>>>>>> 77835048519632a9186d7fd467a5ac180eae690d
  } finally {
   setUpdating(null);
  }
 };

 const filteredSuggestions = suggestions.filter((s) => {
  if (filter === "all") return true;
  return s.status === filter;
 });

 const getStatusBadge = (status) => {
  const badges = {
   pending: {
    icon: FiClock,
    text: "Beklemede",
    className: "bg-yellow-100 text-yellow-800 border-yellow-200",
   },
   approved: {
    icon: FiCheckCircle,
    text: "Onaylandı",
    className: "bg-green-100 text-green-800 border-green-200",
   },
   rejected: {
    icon: FiXCircle,
    text: "Reddedildi",
    className: "bg-red-100 text-red-800 border-red-200",
   },
  };

  const badge = badges[status];
  const Icon = badge.icon;

  return (
   <span
    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${badge.className}`}
   >
    <Icon className="h-3.5 w-3.5" />
    {badge.text}
   </span>
  );
 };

 if (loading) {
  return (
   <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 to-slate-100">
    <div className="text-center">
     <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-500 border-r-transparent"></div>
     <p className="mt-4 text-sm text-slate-600">Yükleniyor...</p>
    </div>
   </div>
  );
 }

 return (
  <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-8">
<<<<<<< HEAD
=======
   {/* Bildirim */}
   {notification && (
    <div className="fixed right-4 top-4 z-50 animate-slide-in">
     <div
      className={`rounded-xl border-2 px-6 py-4 shadow-lg ${notification.type === "success"
       ? "border-green-500 bg-green-50 text-green-800"
       : "border-red-500 bg-red-50 text-red-800"
       }`}
     >
      <div className="flex items-center gap-3">
       {notification.type === "success" ? (
        <FiCheckCircle className="h-5 w-5" />
       ) : (
        <FiXCircle className="h-5 w-5" />
       )}
       <p className="font-medium">{notification.message}</p>
      </div>
     </div>
    </div>
   )}

>>>>>>> 77835048519632a9186d7fd467a5ac180eae690d
   <div className="container mx-auto px-4">
    {/* Header */}
    <div className="mb-8 rounded-2xl border-2 border-slate-200 bg-white shadow-sm">
     <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
      <div className="flex items-center gap-4">
       <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-orange-600"
       >
        <IoArrowBack className="h-4 w-4" />
        Ana Sayfa
       </Link>
       <h1 className="text-2xl font-bold text-slate-900">Admin Paneli</h1>
      </div>
      <button
       onClick={handleLogout}
       className="inline-flex items-center gap-2 rounded-lg border-2 border-red-500 bg-white px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
      >
       <IoLogOutOutline className="h-5 w-5" />
       Çıkış Yap
      </button>
     </div>

     {/* Navigation Tabs */}
     <div className="flex gap-1 border-t border-slate-200 px-6">
      <Link
       href="/admin"
       className="border-b-2 border-transparent px-4 py-3 text-sm font-semibold text-slate-600 transition hover:text-orange-600"
      >
       İtirazlar
      </Link>
      <Link
       href="/admin/brand-suggestions"
       className="border-b-2 border-orange-500 px-4 py-3 text-sm font-semibold text-orange-600"
      >
       Marka Önerileri
      </Link>
     </div>
    </div>

    {/* Filtreler */}
    <div className="mb-6 flex flex-wrap gap-3">
     <button
      onClick={() => setFilter("all")}
      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${filter === "all"
       ? "bg-orange-500 text-white"
       : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
       }`}
     >
      Tümü ({suggestions.length})
     </button>
     <button
      onClick={() => setFilter("pending")}
      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${filter === "pending"
       ? "bg-orange-500 text-white"
       : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
       }`}
     >
      Bekleyen ({suggestions.filter((s) => s.status === "pending").length})
     </button>
     <button
      onClick={() => setFilter("approved")}
      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${filter === "approved"
       ? "bg-orange-500 text-white"
       : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
       }`}
     >
      Onaylanan ({suggestions.filter((s) => s.status === "approved").length}
      )
     </button>
     <button
      onClick={() => setFilter("rejected")}
      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${filter === "rejected"
       ? "bg-orange-500 text-white"
       : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
       }`}
     >
      Reddedilen ({suggestions.filter((s) => s.status === "rejected").length}
      )
     </button>
    </div>

    {/* Öneriler Listesi */}
    {filteredSuggestions.length === 0 ? (
     <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-12 text-center">
      <p className="text-slate-600">Henüz öneri bulunmuyor.</p>
     </div>
    ) : (
     <div className="space-y-4">
      {filteredSuggestions.map((suggestion) => (
       <div
        key={suggestion.id}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
       >
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
         <div className="flex-1">
          <div className="mb-2 flex items-center gap-3">
           <h3 className="text-xl font-semibold text-slate-900">
            {suggestion.brandName}
           </h3>
           {getStatusBadge(suggestion.status)}
          </div>
         </div>
        </div>

        <div className="mb-4 grid gap-3 border-t border-slate-100 pt-4 text-sm">
         {suggestion.description && (
          <div>
           <span className="font-medium text-slate-700">
            Açıklama:
           </span>{" "}
           <span className="text-slate-600">
            {suggestion.description}
           </span>
          </div>
         )}
         <div>
          <span className="font-medium text-slate-700">
           Gönderen:
          </span>{" "}
          <span className="text-slate-600">
           {suggestion.submitterName} ({suggestion.submitterEmail})
          </span>
         </div>
         <div>
          <span className="font-medium text-slate-700">Tarih:</span>{" "}
          <span className="text-slate-600">
           {new Date(suggestion.createdAt).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
           })}
          </span>
         </div>
        </div>

        {suggestion.status === "pending" && (
         <div className="flex gap-3 border-t border-slate-100 pt-4">
          <button
           onClick={() => updateStatus(suggestion.id, "approved")}
           disabled={updating === suggestion.id}
           className="flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-green-300"
          >
           <FiCheckCircle className="h-4 w-4" />
           Onayla
          </button>
          <button
           onClick={() => updateStatus(suggestion.id, "rejected")}
           disabled={updating === suggestion.id}
           className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-red-300"
          >
           <FiXCircle className="h-4 w-4" />
           Reddet
          </button>
         </div>
        )}
       </div>
      ))}
     </div>
    )}
   </div>
  </div>
 );
}