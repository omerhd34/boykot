"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
 IoLockClosedOutline,
 IoPersonOutline,
 IoAlertCircleOutline,
 IoLogInOutline,
} from "react-icons/io5";
import Link from "next/link";

export default function AdminLoginPage() {
 const router = useRouter();
 const [formData, setFormData] = useState({
  username: "",
  password: "",
 });
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [errorMessage, setErrorMessage] = useState("");
 const [isCheckingAuth, setIsCheckingAuth] = useState(true);

 useEffect(() => {
  // Check if already logged in
  checkAuth();
 }, []);

 const checkAuth = async () => {
  try {
   const response = await fetch("/api/admin/login");
   const data = await response.json();

   if (data.success && data.authenticated) {
    router.push("/admin");
   }
  } catch (error) {
   console.error("Auth check error:", error);
  } finally {
   setIsCheckingAuth(false);
  }
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
  // Clear error when user types
  if (errorMessage) {
   setErrorMessage("");
  }
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setErrorMessage("");

  try {
   const response = await fetch("/api/admin/login", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
   });

   const data = await response.json();

   if (data.success) {
    router.push("/admin");
   } else {
    setErrorMessage(data.message || "Giriş yapılırken bir hata oluştu");
   }
  } catch (error) {
   console.error("Login error:", error);
   setErrorMessage("Bir hata oluştu. Lütfen tekrar deneyiniz.");
  } finally {
   setIsSubmitting(false);
  }
 };

 if (isCheckingAuth) {
  return (
   <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 to-slate-100">
    <div className="text-center">
     <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-500 border-r-transparent"></div>
     <p className="mt-4 text-sm text-slate-600">Kontrol ediliyor...</p>
    </div>
   </div>
  );
 }

 return (
  <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 px-4 py-12">
   <div className="w-full max-w-md">
    <div className="rounded-2xl border-2 border-slate-200 bg-white shadow-xl">
     {/* Header */}
     <div className="border-b border-slate-200 px-8 py-6 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-orange-600">
       <IoLockClosedOutline className="h-8 w-8 text-white" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900">Admin Girişi</h1>
      <p className="mt-2 text-sm text-slate-600">
       Yönetim paneline erişmek için giriş yapın
      </p>
     </div>

     {/* Body */}
     <div className="px-8 py-6">
      <form onSubmit={handleSubmit} className="space-y-5">
       {/* Username Field */}
       <div>
        <label
         htmlFor="username"
         className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
        >
         <IoPersonOutline className="h-4 w-4" />
         Kullanıcı Adı
        </label>
        <input
         type="text"
         id="username"
         name="username"
         value={formData.username}
         onChange={handleChange}
         required
         disabled={isSubmitting}
         className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 disabled:bg-slate-100 disabled:cursor-not-allowed"
         placeholder="Kullanıcı adınızı girin"
         autoComplete="username"
        />
       </div>

       {/* Password Field */}
       <div>
        <label
         htmlFor="password"
         className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
        >
         <IoLockClosedOutline className="h-4 w-4" />
         Şifre
        </label>
        <input
         type="password"
         id="password"
         name="password"
         value={formData.password}
         onChange={handleChange}
         required
         disabled={isSubmitting}
         className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 disabled:bg-slate-100 disabled:cursor-not-allowed"
         placeholder="Şifrenizi girin"
         autoComplete="current-password"
        />
       </div>

       {/* Error Message */}
       {errorMessage && (
        <div className="flex items-start gap-3 rounded-lg border-2 border-red-200 bg-red-50 p-4">
         <IoAlertCircleOutline className="h-5 w-5 shrink-0 text-red-600" />
         <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
       )}

       {/* Submit Button */}
       <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg border-2 border-orange-500 bg-linear-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:from-orange-600 hover:to-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
       >
        {isSubmitting ? (
         <span className="flex items-center justify-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
          Giriş yapılıyor...
         </span>
        ) : (
         <span className="flex items-center justify-center gap-2">
          <IoLogInOutline className="h-5 w-5" />
          Giriş Yap
         </span>
        )}
       </button>
      </form>
     </div>
    </div>

    {/* Back Link */}
    <div className="mt-6 text-center">
     <Link
      href="/"
      className="text-sm text-slate-600 transition hover:text-orange-600 hover:underline"
     >
      Ana sayfaya dön
     </Link>
    </div>
   </div>
  </div>
 );
}

