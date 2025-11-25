"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "@/lib/axios";
import {
 IoMailOutline,
 IoPersonOutline,
 IoDocumentTextOutline,
 IoCheckmarkCircleOutline,
} from "react-icons/io5";

export default function ContactPage() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
 });
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
 const [errorMessage, setErrorMessage] = useState("");

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);
  setErrorMessage("");

  try {
   const { data } = await axios.post("/api/contact", formData);

   if (data.success) {
    setSubmitStatus("success");
    setFormData({
     name: "",
     email: "",
     subject: "",
     message: "",
    });
   } else {
    setSubmitStatus("error");
    setErrorMessage(data.message || "Bir hata oluştu");
   }
  } catch (error) {
   setSubmitStatus("error");
   setErrorMessage(
    error.response?.data?.message ||
    "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin."
   );
  } finally {
   setIsSubmitting(false);
  }
 };

 return (
  <section className="bg-white py-16">
   <div className="container space-y-8">
    <header className="space-y-4">
     <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
      İletişim
     </h1>
     <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
      Boykot listelerindeki bilgiler için düzeltme, doğrulama veya yeni
      içerik öneriniz mi var? Aşağıdaki kanallar üzerinden
      ulaşabilirsiniz. Topluluk katkıları sayesinde rehber sürekli
      güncelleniyor.
     </p>
    </header>

    {/* Contact Form */}
    <div className="rounded-3xl border-2 border-orange-200 bg-orange-50/30 p-8 shadow-sm">
     <h2 className="mb-6 text-2xl font-semibold text-slate-900">
      Mesaj Gönder
     </h2>

     {submitStatus === "success" && (
      <div className="mb-6 flex items-start gap-3 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-4">
       <IoCheckmarkCircleOutline className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
       <div>
        <p className="font-semibold text-emerald-900">
         Mesajınız başarıyla gönderildi!
        </p>
        <p className="mt-1 text-sm text-emerald-700">
         En kısa sürede size dönüş yapacağız.
        </p>
       </div>
      </div>
     )}

     {submitStatus === "error" && (
      <div className="mb-6 rounded-xl border-2 border-red-300 bg-red-50 p-4">
       <p className="font-semibold text-red-900">Hata!</p>
       <p className="mt-1 text-sm text-red-700">{errorMessage}</p>
      </div>
     )}

     <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
       <div>
        <label
         htmlFor="name"
         className="mb-2 block text-sm font-semibold text-slate-700"
        >
         <IoPersonOutline className="mb-1 inline h-4 w-4" /> Ad Soyad
        </label>
        <input
         type="text"
         id="name"
         name="name"
         value={formData.name}
         onChange={handleChange}
         required
         minLength={2}
         className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
         placeholder="Adınız ve soyadınız"
        />
       </div>

       <div>
        <label
         htmlFor="email"
         className="mb-2 block text-sm font-semibold text-slate-700"
        >
         <IoMailOutline className="mb-1 inline h-4 w-4" /> E-posta
        </label>
        <input
         type="email"
         id="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         required
         className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
         placeholder="ornek@email.com"
        />
       </div>
      </div>

      <div>
       <label
        htmlFor="subject"
        className="mb-2 block text-sm font-semibold text-slate-700"
       >
        <IoDocumentTextOutline className="mb-1 inline h-4 w-4" /> Konu
       </label>
       <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
        minLength={3}
        className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
        placeholder="Mesajınızın konusu"
       />
      </div>

      <div>
       <label
        htmlFor="message"
        className="mb-2 block text-sm font-semibold text-slate-700"
       >
        Mesajınız
       </label>
       <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        minLength={10}
        rows={6}
        className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 transition focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
        placeholder="Lütfen mesajınızı detaylı bir şekilde yazınız..."
       />
      </div>

      <button
       type="submit"
       disabled={isSubmitting}
       className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
       {isSubmitting ? (
        <>
         <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent"></div>
         Gönderiliyor...
        </>
       ) : (
        <>
         <IoMailOutline className="h-5 w-5" />
         Mesajı Gönder
        </>
       )}
      </button>
     </form>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
     <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
       E-posta ile iletişim
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
       Güncel kaynak paylaşımı, düzeltme ve iş birliği önerileri için:
      </p>
      <Link
       href="mailto:destek@boykotrehberi.org"
       className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
      >
       destek@boykotrehberi.org
      </Link>
     </div>

     <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
       Topluluk çağrıları
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
       Boykot kararlarını desteklemek için gönüllü moderasyon ve içerik
       katkısı yapabilirsiniz. Aşağıdaki formu doldurduğunuzda size dönüş
       yapacağız.
      </p>
      <Link
       href="https://forms.gle/8xHXfBoykotFormu"
       target="_blank"
       rel="noopener noreferrer"
       className="mt-4 inline-flex items-center gap-2 rounded-full border border-orange-500 px-5 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
      >
       Gönüllü başvuru formu
      </Link>
     </div>
    </div>
   </div>
  </section>
 );
}
