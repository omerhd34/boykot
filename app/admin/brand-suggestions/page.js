"use client";

import { useState, useEffect } from "react";
import { FiCheckCircle, FiXCircle, FiClock, FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import { IoArrowBack, IoLogOutOutline, IoDocumentTextOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";

export default function AdminBrandSuggestionsPage() {
 const router = useRouter();
 const [suggestions, setSuggestions] = useState([]);
 const [loading, setLoading] = useState(true);
 const [filter, setFilter] = useState("all");
 const [updating, setUpdating] = useState(null);
 const [notification, setNotification] = useState(null);

 useEffect(() => {
  fetchSuggestions();
 }, []);

 const fetchSuggestions = async () => {
  try {
   setLoading(true);
   const { data } = await axios.get("/api/brand-suggestions");

   if (data.success) {
    setSuggestions(data.suggestions);
   }
  } catch (error) {
   console.error("Öneriler yüklenemedi:", error);
  } finally {
   setLoading(false);
  }
 };

 const showNotification = (message, type = "success") => {
  setNotification({ message, type });
  setTimeout(() => setNotification(null), 3000);
 };

 const handleLogout = async () => {
  try {
   await axios.delete("/api/admin/login");
   router.push("/admin/login");
  } catch (error) {
   console.error("Çıkış hatası:", error);
  }
 };

 const updateStatus = async (id, newStatus, adminNotes = "") => {
  try {
   setUpdating(id);
   await axios.patch(`/api/brand-suggestions/${id}`, {
    status: newStatus,
    adminNotes,
   });

   showNotification("Durum başarıyla güncellendi!");
   await fetchSuggestions();
  } catch (error) {
   console.error("Durum güncellenemedi:", error);
   showNotification("Durum güncellenemedi!", "error");
  } finally {
   setUpdating(null);
  }
 };

 const deleteSuggestion = async (id) => {
  if (!confirm("Bu öneriyi silmek istediğinizden emin misiniz?")) {
   return;
  }

  try {
   setUpdating(id);
   await axios.delete(`/api/brand-suggestions/${id}`);

   showNotification("Öneri başarıyla silindi!");
   await fetchSuggestions();
  } catch (error) {
   console.error("Öneri silinemedi:", error);
   showNotification("Öneri silinemedi!", "error");
  } finally {
   setUpdating(null);
  }
 };

 const getStatusBadge = (status) => {
  const badges = {
   pending: {
    icon: FiClock,
    text: "Beklemede",
    className: "bg-amber-100 text-amber-700 border-amber-300",
   },
   approved: {
    icon: FiCheckCircle,
    text: "Onaylandı",
    className: "bg-emerald-100 text-emerald-700 border-emerald-300",
   },
   rejected: {
    icon: FiXCircle,
    text: "Reddedildi",
    className: "bg-red-100 text-red-700 border-red-300",
   },
  };

  const badge = badges[status];
  const Icon = badge.icon;

  return (
   <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${badge.className}`}>
    <Icon className="h-3 w-3" />
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

 // Filter suggestions by status
 const filteredSuggestions = suggestions.filter((s) => {
  if (filter === "all") return true;
  return s.status === filter;
 });

 return (
  <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-8">
   {notification && (
    <div className={`fixed right-4 top-4 z-50 rounded-lg border px-4 py-3 shadow-lg ${notification.type === "success" ? "border-green-200 bg-green-50 text-green-800" : "border-red-200 bg-red-50 text-red-800"}`}>
     <p className="text-sm font-medium">{notification.message}</p>
    </div>
   )}
   <div className="container mx-auto px-4">
    <div className="mb-8 rounded-2xl border-2 border-slate-200 bg-white shadow-sm">
     <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
      <div className="flex items-center gap-4">
       <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-orange-600">
        <IoArrowBack className="h-4 w-4" />
        Ana Sayfa
       </Link>
       <h1 className="text-2xl font-bold text-slate-900">Admin Paneli</h1>
      </div>
      <button onClick={handleLogout} className="inline-flex items-center gap-2 rounded-lg border-2 border-red-500 bg-white px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50">
       <IoLogOutOutline className="h-5 w-5" />
       Çıkış Yap
      </button>
     </div>

     <div className="flex gap-1 border-t border-slate-200 px-6">
      <Link href="/admin" className="border-b-2 border-transparent px-4 py-3 text-sm font-semibold text-slate-600 transition hover:text-orange-600">
       İtirazlar
      </Link>
      <Link href="/admin/brand-suggestions" className="border-b-2 border-orange-500 px-4 py-3 text-sm font-semibold text-orange-600">
       Marka Önerileri
      </Link>
      <Link href="/admin/messages" className="border-b-2 border-transparent px-4 py-3 text-sm font-semibold text-slate-600 transition hover:text-orange-600">
       İletişim Mesajları
      </Link>
     </div>
    </div>

    {/* Filters */}
    <div className="mb-6 flex flex-wrap gap-3">
     <button
      onClick={() => setFilter("all")}
      className={`rounded-lg border-2 px-4 py-2 text-sm font-semibold transition ${filter === "all" ? "border-orange-500 bg-orange-500 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50"
       }`}
     >
      Tümü
     </button>
     <button
      onClick={() => setFilter("pending")}
      className={`rounded-lg border-2 px-4 py-2 text-sm font-semibold transition ${filter === "pending" ? "border-orange-500 bg-orange-500 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50"
       }`}
     >
      Beklemede
     </button>
     <button
      onClick={() => setFilter("approved")}
      className={`rounded-lg border-2 px-4 py-2 text-sm font-semibold transition ${filter === "approved" ? "border-orange-500 bg-orange-500 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50"
       }`}
     >
      Onaylandı
     </button>
     <button
      onClick={() => setFilter("rejected")}
      className={`rounded-lg border-2 px-4 py-2 text-sm font-semibold transition ${filter === "rejected" ? "border-orange-500 bg-orange-500 text-white" : "border-slate-300 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50"
       }`}
     >
      Reddedildi
     </button>
    </div>

    {/* Suggestions List */}
    {filteredSuggestions.length === 0 ? (
     <div className="rounded-2xl border-2 border-slate-200 bg-white px-6 py-12 text-center">
      <FiClock className="mx-auto h-12 w-12 text-slate-400" />
      <p className="mt-4 text-slate-600">Henüz öneri bulunmamaktadır.</p>
     </div>
    ) : (
     <div className="space-y-4">
      {filteredSuggestions.map((suggestion) => (
       <div key={suggestion.id} className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
        <div className="flex flex-wrap items-start justify-between gap-4">
         <div className="flex-1 space-y-3">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-3">
           <h3 className="text-lg font-bold text-slate-900">{suggestion.brandName}</h3>
           {getStatusBadge(suggestion.status)}
          </div>

          {/* Info */}
          <div className="grid gap-2 text-sm text-slate-600">
           <div>
            <span className="font-medium text-slate-700">Gönderen:</span>{" "}
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

          {/* Description */}
          {suggestion.description && (
           <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-700">
             <IoDocumentTextOutline className="h-4 w-4" />
             Açıklama
            </div>
            <p className="whitespace-pre-wrap text-sm text-slate-700">
             {suggestion.description}
            </p>
           </div>
          )}
         </div>

         {/* Actions */}
         <div className="flex flex-col gap-2">
          {suggestion.status === "pending" && (
           <>
            <button
             onClick={() => updateStatus(suggestion.id, "approved")}
             disabled={updating === suggestion.id}
             className="inline-flex w-32 items-center justify-center gap-2 rounded-lg border-2 border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
             <FiCheckCircle className="h-4 w-4" />
             Onayla
            </button>
            <button
             onClick={() => updateStatus(suggestion.id, "rejected")}
             disabled={updating === suggestion.id}
             className="inline-flex w-32 items-center justify-center gap-2 rounded-lg border-2 border-amber-500 bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
             <FiXCircle className="h-4 w-4" />
             Reddet
            </button>
            <button
             onClick={() => deleteSuggestion(suggestion.id)}
             disabled={updating === suggestion.id}
             className="inline-flex w-32 items-center justify-center gap-2 rounded-lg border-2 border-red-500 bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
             <FiTrash2 className="h-4 w-4" />
             Sil
            </button>
           </>
          )}
          {(suggestion.status === "approved" || suggestion.status === "rejected") && (
           <button
            onClick={() => deleteSuggestion(suggestion.id)}
            disabled={updating === suggestion.id}
            className="inline-flex w-32 items-center justify-center gap-2 rounded-lg border-2 border-red-500 bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
           >
            <FiTrash2 className="h-4 w-4" />
            Sil
           </button>
          )}
         </div>
        </div>
       </div>
      ))}
     </div>
    )}
   </div>
  </div>
 );
}
