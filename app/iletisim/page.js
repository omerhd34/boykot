import Link from "next/link";

export const metadata = {
 title: "İletişim | Boykot Rehberi",
 description:
  "Boykot listeleri hakkında düzeltme, yeni kaynak veya dayanışma önerilerinizi iletin.",
};

export default function ContactPage() {
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
