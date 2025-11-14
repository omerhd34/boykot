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

      <section className="bg-white py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Neden önemli?
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Dayanışmanın gücü kolektif harekette saklı
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Boykot platformu, hızlı tüketim alışkanlıklarını sorgulayan ve
              değerlerimizle uyumlu bir ekonomik düzen için sesini yükselten
              herkesin buluşma noktasıdır. Burada yalnız olmadığını hissedersin.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="boykot-nedir" className="bg-slate-50 py-20">
        <div className="container grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Boykot nedir?
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Boykot, bireylerin veya toplulukların ahlaki, hukuki ya da
              çevresel gerekçelerle bir şirketin ürün veya hizmetlerinden
              bilinçli biçimde uzak durmasıdır. Amaç, yanlış politikaları
              barışçıl bir yöntemle değiştirmeye davet etmektir.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Tarih boyunca boykotlar, sömürgecilikle mücadeleden işçi
              haklarına, ırkçılığa karşı direnişten çevre mücadelesine kadar pek
              çok alanda etkili oldu. Bilinçli tüketim tercihleri sayesinde
              toplumsal dönüşüm bugün de mümkün.
            </p>
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Boykot kararı alırken hatırlatmalar
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Tercihlerin topluluk etkisini nasıl büyüttüğünü gözlemle.
                  </p>
                </div>
                <Link
                  href="#neden-boykot"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-orange-500 transition hover:bg-orange-50"
                >
                  Nedenleri keşfet
                  <FiArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {STEPS.slice(0, 2).map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm leading-relaxed text-slate-600"
                  >
                    <p className="font-semibold text-slate-900">{step.title}</p>
                    <p className="mt-1">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Nasıl adım adım ilerleriz?
            </h3>
            <div className="mt-6 space-y-5">
              {STEPS.map((step, index) => (
                <div key={step.title} className="relative pl-10">
                  <span className="absolute left-0 top-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-semibold text-white">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="neden-boykot"
        className="relative overflow-hidden bg-slate-900 py-20 text-slate-50"
      >
        <div className="absolute inset-0 bg-[radial-linear(circle_at_top,rgba(244,144,46,0.25),transparent_55%)]" />
        <div className="container relative z-10 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-orange-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange-200">
              Neden boykot edilir?
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Tüketici kararı, dönüşümün sessiz ama güçlü aracıdır
            </h2>
            <p className="text-base leading-relaxed text-slate-200">
              Boykot, sorumlu tüketim davranışının ayrılmaz bir parçasıdır.
              Tüketici gücünü adalet arayışında kullanarak şirketleri daha etik
              ve şeffaf olmaya davet ederiz.
            </p>
            <div className="grid gap-4">
              {WHY_ITEMS.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-200">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-200">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-linear-to-br from-white/15 via-white/10 to-transparent p-8 shadow-xl backdrop-blur">
            <h3 className="text-lg font-semibold text-white">
              Vicdan muhasebesi için sorular
            </h3>
            <p className="text-sm leading-relaxed text-slate-200">
              Hangi davranış beni rahatsız ediyor? Alternatifim var mı? Sesimi
              duyurmak için kimlerle dayanışma kurabilirim? Bu sorular, boykot
              kararının merkezinde yer alır.
            </p>
            <p className="text-sm leading-relaxed text-slate-200">
              Ortak hareket etmek, sesimizi büyütür. Her paylaşılan bilgi ve her
              bilinçli tercih, daha adil bir ekonomi için yeni bir adım
              demektir.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
