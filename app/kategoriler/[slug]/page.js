import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCategoryBySlug } from "@/lib/categories.js";
import CategoryBrandList from "@/components/CategoryBrandList.jsx";
import { IoArrowBack, IoInformationCircle } from "react-icons/io5";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }) {
 const { slug } = await params;
 const category = await getCategoryBySlug(slug);

 if (!category) {
  return {
   title: "Kategori bulunamadı | Boykot Rehberi",
  };
 }

 return {
  title: `${category.name} Boykot Listesi | Boykot Rehberi`,
  description:
   category.description ||
   `${category.name} kategorisindeki boykot edilen markalar ve güvenilir alternatifler.`,
 };
}

export default async function CategoryDetailPage({ params }) {
 const { slug } = await params;
 const category = await getCategoryBySlug(slug);

 if (!category) {
  notFound();
 }

 return (
  <section className="bg-white py-16">
   <div className="container space-y-10">
    <header className="space-y-3">
     <Link
      href="/kategoriler"
      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-orange-600 transition hover:text-orange-700"
     >
      <IoArrowBack className="h-4 w-4" />
      Tüm kategorilere dön
     </Link>
     <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
      {category.name}
     </h1>
     {category.description && (
      <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
       {category.description}
      </p>
     )}
    </header>

    {category.slug === "ilac-sirketi" && (
     <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4 my-5 -mt-5">
      <div className="flex items-start gap-3">
       <IoInformationCircle className="h-5 w-5 shrink-0 text-blue-600 mt-0.5" />
       <div className="flex-1 space-y-1">
        <p className="text-sm font-medium text-blue-900">
         Önemli Bilgi
        </p>
        <p className="text-sm leading-relaxed text-blue-800">
         Eğer ilaçlarınız doktor tarafından reçeteli olarak yazıldıysa,
         boykot durumuna bakılmaksızın doktorunuzun önerdiği ilaçları
         kullanmaya devam etmeniz önemlidir. Reçeteli ilaçlarda
         boykotun önemi yoktur ve sağlığınız her şeyden önce gelir.
        </p>
        <p className="text-sm leading-relaxed text-blue-800">
         Reçetesiz ilaç satın alırken, ilacın üretici firmasını ve
         markasını mutlaka kontrol ediniz. Bu sayfada yer alan boykot
         listesini inceleyerek, satın almayı planladığınız ilacın
         üretici firma ve markasının boykot durumunu araştırınız. Eğer
         ilacın üreticisi boykot listesinde yer alıyorsa, aynı etken
         maddeye sahip alternatif markaları tercih edebilirsiniz.
         Sağlığınız kadar, bilinçli tüketim alışkanlıklarınız da
         önemlidir. Satın alma kararınızı vermeden önce mutlaka bu
         bilgileri göz önünde bulundurunuz.
        </p>
       </div>
      </div>
     </div>
    )}

    <Suspense
     fallback={
      <div className="text-center text-slate-600">Yükleniyor...</div>
     }
    >
     <CategoryBrandList
      brands={category.brands}
      subCategories={category.subCategories || []}
     />
    </Suspense>
   </div>
  </section>
 );
}
