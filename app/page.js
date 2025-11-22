import Image from "next/image";
import Link from "next/link";
import {
 FiArrowRight,
 FiCheckCircle,
 FiCompass,
 FiHeart,
 FiShield,
 FiSlash,
 FiTrendingUp,
 FiUsers,
} from "react-icons/fi";
import prisma from "../lib/prisma.js";

const VALUES = [
 {
  title: "Şeffaf bilgi",
  description:
   "Bağımsız kaynaklardan doğrulanan verilerle hareket eder, kulaktan dolma bilgilere dayanmayız.",
  icon: FiShield,
 },
 {
  title: "Dayanışma kültürü",
  description:
   "Topluluk içerisinde deneyim ve kaynak paylaşarak herkesin katkı sunmasını kolaylaştırırız.",
  icon: FiUsers,
 },
 {
  title: "Vicdani duruş",
  description:
   "Tüketim gücümüzü adalet talebine dönüştürür, şirketleri sorumluluk almaya davet ederiz.",
  icon: FiHeart,
 },
];

const WHY_ITEMS = [
 {
  title: "Adalet talebi",
  description:
   "Haksız uygulamaları görünür kılmak için ekonomik baskının dönüştürücü gücünden yararlanırız.",
  icon: FiTrendingUp,
 },
 {
  title: "İnsan onuru",
  description:
   "Emeğe saygı duyan, sömürüyü reddeden ve temel haklara değer veren bir tüketim modeli savunuruz.",
  icon: FiHeart,
 },
 {
  title: "Doğa ve gelecek",
  description:
   "Çevreye zarar veren politikalara karşı kolektif ses çıkarır, sürdürülebilir alternatifleri destekleriz.",
  icon: FiCompass,
 },
];

const STEPS = [
 {
  title: "Araştır ve doğrula",
  description:
   "İddiaların kaynağını sorgula, güvenilir raporları ve bağımsız incelemeleri temel al.",
 },
 {
  title: "İlkeni belirle",
  description:
   "Boykot gerekçesini ve beklenen değişimi netleştir, toplulukla aynı hedefte buluş.",
 },
 {
  title: "Paylaş ve yaygınlaştır",
  description:
   "Deneyimlerini, alternatif önerilerini ve gelişmeleri toplulukla paylaş, farkındalığı artır.",
 },
 {
  title: "Takip et ve değerlendir",
  description:
   "Şirketlerin attığı adımları izleyerek sonuçları ölç, gerektiğinde boykotu güncelle.",
 },
];

export default async function Home() {
 const companyCount = await prisma.brand.count();

 const STATS = [
  { value: `${companyCount}`, label: "Listelenmiş şirket" },
  { value: "12K", label: "Topluluk destekçisi" },
 ];

 return (
  <>
   <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-white pb-24 pt-16">
    <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-orange-200/40 blur-3xl" />
    <div className="container relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
     <div className="flex flex-col gap-8">
      <span className="inline-flex items-center self-start rounded-full bg-orange-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
       Kolektif vicdan için
      </span>
      <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
       Boykot bilincini güçlendiren dayanışma platformuna hoş geldin.
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
       Tüketim gücünü adalet arayışına dönüştürmek isteyen herkes için
       güvenilir kaynaklar, ilham verici hikâyeler ve kolektif
       dayanışmayı burada bulacaksın. Bilinçli bir kararla küçük
       değişimlerin büyük sonuçlar doğurduğuna inanıyoruz.
      </p>
      <div className="flex flex-wrap gap-3">
       <Link
        href="/kategoriler"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-600"
       >
        <span>Boykot listesine göz at</span>
        <FiSlash size={18} aria-hidden="true" />
       </Link>
       <Link
        href="#boykot-nedir"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
       >
        Boykot rehberine göz at
       </Link>
      </div>
      <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
       {STATS.map((stat) => (
        <div
         key={stat.label}
         className="rounded-2xl border border-white/40 bg-white/60 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
        >
         <p className="text-2xl font-semibold text-slate-900">
          {stat.value}
         </p>
         <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
          {stat.label}
         </p>
        </div>
       ))}
      </div>
     </div>

     <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-10 -top-8 h-28 w-28 rounded-full bg-orange-100/70 blur-2xl" />
      <div className="absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-slate-200/50 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-white/80 p-8 shadow-xl backdrop-blur">
       <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 rounded-2xl bg-orange-500/10 p-3 text-orange-500">
         <FiCheckCircle size={24} aria-hidden="true" />
         <h2 className="text-2xl font-semibold">
          Vicdanınla hareket et
         </h2>
        </div>

        <p className="text-sm leading-relaxed text-slate-600">
         Boykot, yalnızca bir ürünü almamak değil; adalet talebini
         görünür kılan barışçıl bir dayanışma pratiğidir. Bilinçli
         tercihlerle değişimi hızlandırabiliriz.
        </p>
        <div className="overflow-hidden rounded-2xl border border-orange-200 bg-white p-4">
         <Image
          src="/forbidden.png"
          alt="Boykot bilinci görseli"
          width={420}
          height={320}
          priority
          className="mx-auto h-auto w-full max-w-[260px] object-contain"
         />
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 );
}
