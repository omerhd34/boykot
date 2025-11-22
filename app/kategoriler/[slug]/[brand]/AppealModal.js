"use client";

import { useState } from "react";
import {
 IoClose,
 IoAlertCircleOutline,
 IoCheckmarkCircleOutline,
 IoMailOutline,
 IoPersonOutline,
 IoDocumentTextOutline,
} from "react-icons/io5";

export default function AppealModal({ isOpen, onClose, brand }) {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
 });
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
 const [errorMessage, setErrorMessage] = useState("");

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
  // Clear error when user types
  if (submitStatus === "error") {
   setSubmitStatus(null);
   setErrorMessage("");
  }
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);
  setErrorMessage("");

  try {
   const response = await fetch("/api/appeals", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({
     brandId: brand.id,
     brandName: brand.name,
     categorySlug: brand.category.slug,
     brandSlug: brand.slug,
     name: formData.name,
     email: formData.email,
     message: formData.message,
    }),
   });

   const data = await response.json();

   if (data.success) {
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
    // Close modal after 2 seconds
    setTimeout(() => {
     onClose();
     setSubmitStatus(null);
    }, 2000);
   } else {
    setSubmitStatus("error");
    setErrorMessage(
     data.message || "İtiraz gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz."
    );
   }
  } catch (error) {
   console.error("Appeal submission error:", error);
   setSubmitStatus("error");
   setErrorMessage("Bir hata oluştu. Lütfen tekrar deneyiniz.");
  } finally {
   setIsSubmitting(false);
  }
 };

 if (!isOpen) return null;

 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
   <div className="relative w-full max-w-2xl rounded-2xl border-2 border-slate-200 bg-white shadow-xl">
    {/* Header */}
    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
     <h2 className="text-xl font-bold text-slate-900">İtiraz Et</h2>
     <button
      onClick={onClose}
      className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
      disabled={isSubmitting}
     >
      <IoClose className="h-6 w-6" />
     </button>
    </div>

    {/* Body */}
    <div className="px-6 py-5">
     <div className="mb-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
      <p className="text-sm text-slate-700">
       <span className="font-semibold">{brand.name}</span> markası hakkında itirazınız mı var?
       Lütfen aşağıdaki formu doldurun. İncelendikten sonra size dönüş yapılacaktır.
      </p>
     </div>

     {submitStatus === "success" ? (
      <div className="flex flex-col items-center justify-center gap-4 py-8">
       <div className="rounded-full bg-emerald-100 p-4">
        <IoCheckmarkCircleOutline className="h-12 w-12 text-emerald-600" />
       </div>
       <div className="text-center">
        <h3 className="text-lg font-bold text-emerald-900">
         İtirazınız Başarıyla Gönderildi
        </h3>
        <p className="mt-2 text-sm text-slate-600">
         İncelendikten sonra size dönüş yapılacaktır.
        </p>
       </div>
      </div>
     ) : (
      <form onSubmit={handleSubmit} className="space-y-5">
       {/* Name Field */}
       <div>
        <label
         htmlFor="name"
         className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
        >
         <IoPersonOutline className="h-4 w-4" />
         İsim Soyisim <span className="text-red-500">*</span>
        </label>
        <input
         type="text"
         id="name"
         name="name"
         value={formData.name}
         onChange={handleChange}
         required
         disabled={isSubmitting}
         className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 disabled:bg-slate-100 disabled:cursor-not-allowed"
         placeholder="Adınız ve soyadınız"
        />
       </div>

       {/* Email Field */}
       <div>
        <label
         htmlFor="email"
         className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
        >
         <IoMailOutline className="h-4 w-4" />
         E-posta Adresi <span className="text-red-500">*</span>
        </label>
        <input
         type="email"
         id="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         required
         disabled={isSubmitting}
         className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 disabled:bg-slate-100 disabled:cursor-not-allowed"
         placeholder="ornek@email.com"
        />
       </div>

       {/* Message Field */}
       <div>
        <label
         htmlFor="message"
         className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700"
        >
         <IoDocumentTextOutline className="h-4 w-4" />
         İtirazınız <span className="text-red-500">*</span>
        </label>
        <textarea
         id="message"
         name="message"
         value={formData.message}
         onChange={handleChange}
         required
         minLength={10}
         disabled={isSubmitting}
         rows={6}
         className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 disabled:bg-slate-100 disabled:cursor-not-allowed resize-none"
         placeholder="İtirazınızı detaylı bir şekilde açıklayın (en az 10 karakter)..."
        />
        <p className="mt-1 text-xs text-slate-500">
         {formData.message.length}/10 karakter
        </p>
       </div>

       {/* Error Message */}
       {submitStatus === "error" && errorMessage && (
        <div className="flex items-start gap-3 rounded-lg border-2 border-red-200 bg-red-50 p-4">
         <IoAlertCircleOutline className="h-5 w-5 shrink-0 text-red-600" />
         <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
       )}

       {/* Submit Button */}
       <div className="flex gap-3 pt-2">
        <button
         type="button"
         onClick={onClose}
         disabled={isSubmitting}
         className="flex-1 rounded-lg border-2 border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
         İptal
        </button>
        <button
         type="submit"
         disabled={isSubmitting || formData.message.length < 10}
         className="flex-1 rounded-lg border-2 border-orange-500 bg-linear-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:from-orange-600 hover:to-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
         {isSubmitting ? "Gönderiliyor..." : "İtirazı Gönder"}
        </button>
       </div>
      </form>
     )}
    </div>
   </div>
  </div>
 );
}

