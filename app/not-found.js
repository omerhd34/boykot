import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="container grid place-items-center gap-6 text-center">
        <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
          404
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-slate-600">
          Aradığınız içerik kaldırılmış veya hiç var olmamış olabilir. Ana
          sayfaya dönerek güncel boykot listelerine ve rehber yazılarına
          ulaşabilirsiniz.
        </p>
        <Link
          className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
          href="/"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </section>
  );
}
