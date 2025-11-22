"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
 IoLogOutOutline,
 IoAlertCircleOutline,
 IoCheckmarkCircleOutline,
 IoTimeOutline,
 IoCloseOutline,
 IoCloseCircleOutline,
 IoMailOutline,
 IoPersonOutline,
 IoDocumentTextOutline,
 IoCalendarOutline,
 IoArrowBack,
 IoEyeOutline,
} from "react-icons/io5";

export default function AdminPage() {
 const router = useRouter();
 const [appeals, setAppeals] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [isCheckingAuth, setIsCheckingAuth] = useState(true);
 const [filter, setFilter] = useState("all"); // all, pending, reviewed, resolved
 const [selectedAppeal, setSelectedAppeal] = useState(null);
 const [adminNotes, setAdminNotes] = useState("");
 const [updatingStatus, setUpdatingStatus] = useState(false);

 useEffect(() => {
  checkAuth();
 }, []);

 useEffect(() => {
  if (!isCheckingAuth) {
   fetchAppeals();
  }
 }, [filter, isCheckingAuth]);

 const checkAuth = async () => {
  try {
   const response = await fetch("/api/admin/login");
   const data = await response.json();

   if (!data.success || !data.authenticated) {
    router.push("/admin/login");
    return;
   }
  } catch (error) {
   console.error("Auth check error:", error);
   router.push("/admin/login");
  } finally {
   setIsCheckingAuth(false);
  }
 };

 const fetchAppeals = async () => {
  try {
   setIsLoading(true);
   const response = await fetch(`/api/admin/appeals?status=${filter}`);
   const data = await response.json();

   if (data.success) {
    setAppeals(data.appeals || []);
   }
  } catch (error) {
   console.error("Fetch appeals error:", error);
  } finally {
   setIsLoading(false);
  }
 };

 const handleLogout = async () => {
  try {
   await fetch("/api/admin/logout", { method: "POST" });
   router.push("/admin/login");
  } catch (error) {
   console.error("Logout error:", error);
  }
 };

 const handleStatusUpdate = async (appealId, newStatus) => {
  try {
   setUpdatingStatus(true);
   const response = await fetch(`/api/admin/appeals/${appealId}`, {
    method: "PATCH",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({
     status: newStatus,
     adminNotes: adminNotes || undefined,
    }),
   });

   const data = await response.json();

   if (data.success) {
    setSelectedAppeal(null);
    setAdminNotes("");
    fetchAppeals();
   } else {
    alert(data.message || "Güncelleme başarısız");
   }
  } catch (error) {
   console.error("Update status error:", error);
   alert("Bir hata oluştu");
  } finally {
   setUpdatingStatus(false);
  }
 };

 const handleCancelAppeal = async (appealId) => {
  if (!confirm("Bu itirazı iptal etmek istediğinizden emin misiniz?")) {
   return;
  }

  try {
   setUpdatingStatus(true);
   const response = await fetch(`/api/admin/appeals/${appealId}`, {
    method: "PATCH",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({
     status: "cancelled",
    }),
   });

   const data = await response.json();

   if (data.success) {
    fetchAppeals();
   } else {
    alert(data.message || "İptal işlemi başarısız");
   }
  } catch (error) {
   console.error("Cancel appeal error:", error);
   alert("Bir hata oluştu");
  } finally {
   setUpdatingStatus(false);
  }
 };

 const getStatusBadge = (status) => {
  switch (status) {
   case "pending":
    return {
     bg: "bg-amber-100 text-amber-700 border-amber-300",
     icon: IoTimeOutline,
     label: "Beklemede",
    };
   case "reviewed":
    return {
     bg: "bg-blue-100 text-blue-700 border-blue-300",
     icon: IoEyeOutline,
     label: "İncelendi",
    };
   case "resolved":
    return {
     bg: "bg-emerald-100 text-emerald-700 border-emerald-300",
     icon: IoCheckmarkCircleOutline,
     label: "Çözüldü",
    };
   case "cancelled":
    return {
     bg: "bg-red-100 text-red-700 border-red-300",
     icon: IoCloseCircleOutline,
     label: "İptal Edildi",
    };
   default:
    return {
     bg: "bg-slate-100 text-slate-700 border-slate-300",
     icon: IoAlertCircleOutline,
     label: status,
    };
  }
 };

 const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
   year: "numeric",
   month: "long",
   day: "numeric",
   hour: "2-digit",
   minute: "2-digit",
  });
 };

 if (isCheckingAuth) {
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
       className="border-b-2 border-orange-500 px-4 py-3 text-sm font-semibold text-orange-600"
      >
       İtirazlar
      </Link>
      <Link
       href="/admin/brand-suggestions"
       className="border-b-2 border-transparent px-4 py-3 text-sm font-semibold text-slate-600 transition hover:text-orange-600"
      >
       Marka Önerileri
      </Link>
     </div>
    </div>

    {/* Filters */}
    <div className="mb-6 flex flex-wrap gap-3">
     {["all", "pending", "reviewed", "resolved", "cancelled"].map((status) => (
      <button
       key={status}
       onClick={() => setFilter(status)}
       className={`rounded-lg border-2 px-4 py-2 text-sm font-semibold transition ${filter === status
        ? "border-orange-500 bg-orange-500 text-white"
        : "border-slate-300 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50"
        }`}
      >
       {status === "all"
        ? "Tümü"
        : status === "pending"
         ? "Beklemede"
         : status === "reviewed"
          ? "İncelendi"
          : status === "resolved"
           ? "Çözüldü"
           : "İptal Edildi"}
      </button>
     ))}
    </div>

    {/* Appeals List */}
    {isLoading ? (
     <div className="flex items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-6 py-12">
      <div className="text-center">
       <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-500 border-r-transparent"></div>
       <p className="mt-4 text-sm text-slate-600">Yükleniyor...</p>
      </div>
     </div>
    ) : appeals.length === 0 ? (
     <div className="rounded-2xl border-2 border-slate-200 bg-white px-6 py-12 text-center">
      <IoAlertCircleOutline className="mx-auto h-12 w-12 text-slate-400" />
      <p className="mt-4 text-slate-600">Henüz itiraz bulunmamaktadır.</p>
     </div>
    ) : (
     <div className="space-y-4">
      {appeals.map((appeal) => {
       const statusBadge = getStatusBadge(appeal.status);
       const StatusIcon = statusBadge.icon;

       return (
        <div
         key={appeal.id}
         className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
         <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1 space-y-3">
           {/* Header */}
           <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-bold text-slate-900">
             {appeal.brandName}
            </h3>
            <span
             className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${statusBadge.bg}`}
            >
             <StatusIcon className="h-3 w-3" />
             {statusBadge.label}
            </span>
           </div>

           {/* Info */}
           <div className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <div className="flex items-center gap-2">
             <IoPersonOutline className="h-4 w-4" />
             <span className="font-semibold">{appeal.name}</span>
            </div>
            <div className="flex items-center gap-2">
             <IoMailOutline className="h-4 w-4" />
             <Link
              href={`mailto:${appeal.email}`}
              className="text-orange-600 hover:underline"
             >
              {appeal.email}
             </Link>
            </div>
            <div className="flex items-center gap-2">
             <IoCalendarOutline className="h-4 w-4" />
             <span>{formatDate(appeal.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
             <Link
              href={`/kategoriler/${appeal.categorySlug}/${appeal.brandSlug}`}
              className="text-orange-600 hover:underline"
              target="_blank"
             >
              Marka sayfasını görüntüle →
             </Link>
            </div>
           </div>

           {/* Message */}
           <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-slate-700">
             <IoDocumentTextOutline className="h-4 w-4" />
             İtiraz Mesajı
            </div>
            <p className="whitespace-pre-wrap text-sm text-slate-700">
             {appeal.message}
            </p>
           </div>

           {/* Admin Notes */}
           {appeal.adminNotes && (
            <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
             <div className="mb-2 text-xs font-semibold text-orange-700">
              Admin Notları
             </div>
             <p className="whitespace-pre-wrap text-sm text-orange-700">
              {appeal.adminNotes}
             </p>
            </div>
           )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2">
           {appeal.status === "pending" && (
            <>
             <button
              onClick={() => {
               setSelectedAppeal(appeal);
               setAdminNotes("");
              }}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-500 bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
             >
              <IoEyeOutline className="h-4 w-4" />
              İncele
             </button>
             <button
              onClick={() => handleCancelAppeal(appeal.id)}
              disabled={updatingStatus}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-red-500 bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
             >
              <IoCloseCircleOutline className="h-4 w-4" />
              İptal Et
             </button>
            </>
           )}
           {appeal.status === "reviewed" && (
            <>
             <button
              onClick={() =>
               handleStatusUpdate(appeal.id, "resolved")
              }
              disabled={updatingStatus}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50"
             >
              <IoCheckmarkCircleOutline className="h-4 w-4" />
              Çözüldü Olarak İşaretle
             </button>
             <button
              onClick={() => handleCancelAppeal(appeal.id)}
              disabled={updatingStatus}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-red-500 bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
             >
              <IoCloseCircleOutline className="h-4 w-4" />
              İptal Et
             </button>
            </>
           )}
          </div>
         </div>
        </div>
       );
      })}
     </div>
    )}
   </div>

   {/* Modal for reviewing appeal */}
   {selectedAppeal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
     <div className="relative w-full max-w-2xl rounded-2xl border-2 border-slate-200 bg-white shadow-xl">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
       <h2 className="text-xl font-bold text-slate-900">
        İtirazı İncele
       </h2>
       <button
        onClick={() => {
         setSelectedAppeal(null);
         setAdminNotes("");
        }}
        className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
       >
        <IoCloseOutline className="h-6 w-6" />
       </button>
      </div>
      <div className="px-6 py-5 space-y-4">
       <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
         Admin Notları (Opsiyonel)
        </label>
        <textarea
         value={adminNotes}
         onChange={(e) => setAdminNotes(e.target.value)}
         rows={4}
         className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
         placeholder="Bu itiraz hakkında notlarınız..."
        />
       </div>
       <div className="flex gap-3">
        <button
         onClick={() => {
          setSelectedAppeal(null);
          setAdminNotes("");
         }}
         className="flex-1 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
         İptal
        </button>
        <button
         onClick={() =>
          handleStatusUpdate(selectedAppeal.id, "reviewed")
         }
         disabled={updatingStatus}
         className="flex-1 rounded-lg border-2 border-blue-500 bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
         {updatingStatus ? "Güncelleniyor..." : "İncelendi Olarak İşaretle"}
        </button>
       </div>
      </div>
     </div>
    </div>
   )}
  </div>
 );
}

