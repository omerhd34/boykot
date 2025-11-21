import Link from "next/link";
import { FiMail, FiExternalLink, FiHeart } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container">
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Boykot Rehberi
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Tüketici gücünü kullanarak daha adil bir dünyaya katkı sağlayın.
              Bilinçli tercihler yaparak toplumsal değişimin parçası olun.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900">Hızlı Erişim</h3>
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm text-slate-600 transition hover:text-orange-500"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/kategoriler"
                className="text-sm text-slate-600 transition hover:text-orange-500"
              >
                Kategoriler
              </Link>
              <Link
                href="/iletisim"
                className="text-sm text-slate-600 transition hover:text-orange-500"
              >
                İletişim
              </Link>
            </nav>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900">İletişim</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:destek@boykotrehberi.org"
                className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-orange-500"
              >
                <FiMail className="h-4 w-4" />
                <span>destek@boykotrehberi.org</span>
              </a>
              <a
                href="https://forms.gle/8xHXfBoykotFormu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-600 transition hover:text-orange-500"
              >
                <FiExternalLink className="h-4 w-4" />
                <span>Gönüllü Başvuru</span>
              </a>
            </div>
          </div>

          {/* Bilgi */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-900">Hakkında</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Boykot listelerini doğru kaynaklarla paylaşarak tüketicilerin
              bilinçli tercihler yapmasına yardımcı oluyoruz.
            </p>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-slate-200 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="flex items-center gap-2 text-sm text-slate-600">
              © {currentYear} Boykot Rehberi. Tüm hakları saklıdır.
            </p>
            <p className="flex items-center gap-2 text-sm text-slate-500">
              <span>Kalpten yapıldı</span>
              <FiHeart className="h-4 w-4 text-orange-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

