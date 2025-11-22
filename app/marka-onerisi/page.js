"use client";

import { useState } from "react";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

export default function BrandSuggestionPage() {
 const [formData, setFormData] = useState({
  brandName: "",
  description: "",
  submitterName: "",
  submitterEmail: "",
 });

 const [status, setStatus] = useState({ type: "", message: "" });
 const [isSubmitting, setIsSubmitting] = useState(false);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus({ type: "", message: "" });

  try {
   const response = await fetch("/api/brand-suggestions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
   });

   const data = await response.json();

   if (!response.ok) {
    throw new Error(data.error || "Bir hata oluştu");
   }

   setStatus({
    type: "success",
    message: "Marka öneriniz başarıyla gönderildi! İnceleme sonrası eklenecektir.",
   });

   setFormData({
    brandName: "",
    description: "",
    submitterName: "",
    submitterEmail: "",
   });
  } catch (error) {
   setStatus({
    type: "error",
    message: error.message || "Bir hata oluştu. Lütfen tekrar deneyin.",
   });
  } finally {
   setIsSubmitting(false);
  }
 };

 return (
  <div className="container py-12">
   <div className="mx-auto max-w-2xl">
    <div className="mb-8 text-center">
     <h1 className="mb-4 text-3xl font-bold text-slate-900">
      Marka Önerisi
     </h1>
     <p className="text-slate-600">
      Listede olmayan bir marka varsa aşağıdaki formu doldurarak bize
      önerebilirsiniz. Öneriniz incelendikten sonra listeye eklenecektir.
     </p>
    </div>

    {status.message && (
     <div
      className={`mb-6 flex items-center gap-3 rounded-xl border p-4 ${status.type === "success"
       ? "border-green-200 bg-green-50 text-green-800"
       : "border-red-200 bg-red-50 text-red-800"
       }`}
     >
      {status.type === "success" ? (
       <FiCheckCircle className="h-5 w-5 shrink-0" />
      ) : (
       <FiAlertCircle className="h-5 w-5 shrink-0" />
      )}
      <p className="text-sm font-medium">{status.message}</p>
     </div>
    )}

    <form
     onSubmit={handleSubmit}
     className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
    >
     <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-900">
       Marka Bilgileri
      </h2>

      <div>
       <label
        htmlFor="brandName"
        className="mb-2 block text-sm font-medium text-slate-700"
       >
        Marka Adı <span className="text-red-500">*</span>
       </label>
       <input
        type="text"
        id="brandName"
        name="brandName"
        required
        value={formData.brandName}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
        placeholder="Nike, Starbucks, ..."
       />
      </div>

      <div>
       <label
        htmlFor="description"
        className="mb-2 block text-sm font-medium text-slate-700"
       >
        Açıklama
       </label>
       <textarea
        id="description"
        name="description"
        rows={4}
        value={formData.description}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
        placeholder="Marka hakkında kısa bir açıklama..."
       />
      </div>
     </div>

     {/* İletişim Bilgileri */}
     <div className="space-y-4 border-t border-slate-200 pt-6">
      <h2 className="text-lg font-semibold text-slate-900">
       İletişim Bilgileriniz
      </h2>

      <div>
       <label
        htmlFor="submitterName"
        className="mb-2 block text-sm font-medium text-slate-700"
       >
        Adınız Soyadınız <span className="text-red-500">*</span>
       </label>
       <input
        type="text"
        id="submitterName"
        name="submitterName"
        required
        value={formData.submitterName}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
        placeholder="Ad Soyad"
       />
      </div>

      <div>
       <label
        htmlFor="submitterEmail"
        className="mb-2 block text-sm font-medium text-slate-700"
       >
        E-posta Adresiniz <span className="text-red-500">*</span>
       </label>
       <input
        type="email"
        id="submitterEmail"
        name="submitterEmail"
        required
        value={formData.submitterEmail}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
        placeholder="ornek@email.com"
       />
      </div>
     </div>

     <button
      type="submit"
      disabled={isSubmitting}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
     >
      {isSubmitting ? (
       <>
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        Gönderiliyor...
       </>
      ) : (
       <>
        <FiSend className="h-5 w-5" />
        Gönder
       </>
      )}
     </button>
    </form>
   </div>
  </div>
 );
}

