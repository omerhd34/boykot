const sigortaCategory = {
  order: 14,
  name: "Sigorta",
  slug: "sigorta",
  iconKey: "shield",
  description: "Sigorta şirketleri ve risk yönetimi markaları.",
  brands: [
    {
      name: "Sompo Japan Sigorta",
      slug: "sompo-japan-sigorta",
      description: ``,
      country: "Japonya",
      website: "https://www.somposigorta.com.tr/",
      img: "/sigorta.png",

      isBoycotted: true,
      boycottReason: ``,
    },
    {
      name: "Allianz",
      slug: "allianz",
      description: ``,
      country: "Almanya",
      website: "https://www.allianz.com.tr/",
      img: "/allianz.png",

      isBoycotted: true,
      boycottReason: `17 Ekim 2023’te 100’den Fazla Alman şirketi, İsrailli Işgalcilerle Topraklarını Savunan Filistin Vatandaşlarının Temsilcisi Hamas Arasındaki Savaşta Hamas’ın Direnişini Terörist Saldırı Olarak Nitelendiren Markalar Arasında Allianz Da Bulunmaktadır. Bu Süreçte Yahudi Karşıtlığına Karşı Ortak Bir Kampanyayla Axel Springer Medyasında Yer Aldı.`,
    },
    {
      name: "Ray Sigorta",
      slug: "ray-sigorta",
      description: ``,
      country: "Türkiye",
      website: "https://www.raysigorta.com.tr/",
      img: "/ray-sigorta.png",

      isBoycotted: true,
      boycottReason: `Ray Sigorta, Türkiye'de Faaliyet Gösteren Bir Sigorta şirketidir. Şirketin Ana Hissedarı Vienna Insurance Group (VIG) Olup, VIG Avrupa'nın önde Gelen Sigorta Gruplarından Biridir Ve özellikle Orta Ve Doğu Avrupa'da Güçlü Bir Varlığa Sahiptir. Vienna Insurance Group, Ray Sigorta'nın Büyük Bir Kısmını Satın Alarak Bu şirketi Kendi Bünyesine Dahil Etmiştir. Avusturya Merkezli şirketin İsrail E Yönelik Bir Açıklaması Bulunmamaktadır.`,
    },
    {
      name: "AXA Sigorta",
      slug: "axa-sigorta",
      description: ``,
      country: "",
      website: "https://www.axasigorta.com.tr/",
      img: "/axa-sigorta.png",

      isBoycotted: true,
      boycottReason: `AXA, Filistinli Sivilleri Hedef Alan Ve Uluslararası Hukuka Aykırı Bombalar üreten Elbit Systems'in Yatırımcılarındandır. Ayrıca, 2022 Itibarıyla Gayrimeşru İsrail Yerleşimlerinde Faaliyet Gösteren Dört İsrail Bankasına 15,6 Milyon Dolar Yatırım Yapmıştır. İsrail Devletiyle Doğrudan Işbirliği Yapmak Ve İsrail Ordusu Için Bomba üreten Bir şirkete Yatırım Yapmak, AXA'nın Boykot Edilmesinin Nedenlerindendir.`,
    },
    {
      name: "Türk Nippon",
      slug: "turk-nippon",
      description: ``,
      country: "Türkiye",
      website: "https://www.turknippon.com/tr",
      img: "/turk-nippon.png",

      isBoycotted: true,
      boycottReason: `2000 Yılında %96.24 Hissesi Tasarruf Mevduatı Sigorta Fonu'na Geçen Türk Nippon Sigorta, 2001 Yılının Ekim Ayında HNS Grup Tarafından Satın Alınmış Ve Kasım 2008 Tarihine Kadar HNS Grup Bünyesinde Kaldıktan Sonra, çoğunluk Hissesi Harel Grup Tarafından Satın Alınmıştır.
      Türk Nippon Sigorta, 2008 Yılından Bu Yana Dinamik Ve Profesyonel Ekibi Ile, Harel Grubu’nun Gücü Ve Desteğini De Arkasına Alarak, Sigortacılık Faaliyetlerine Devam Etmektedir.
      Harel Sigorta Yatırımlar Ve Finansal Hizmetler Ltd. 70 Yılı Aşan Sektör Tecrübesi Ve Yaklaşık %18.5 Pazar Payı Ile İsrail'in En Büyük Finans Ve Sigorta Gruplarından Biridir. Sağlık Ve Hayat Dışı Branşlarda 1. Sırada, Hayat Branşında 2. Sırada Ve Emeklilik Fonlarında 4. Sırada Yer Almaktadır.`,
    },
    {
      name: "Ak Sigorta",
      slug: "ak-sigorta",
      description: ``,
      country: "Türkiye",
      website: "https://www.aksigorta.com.tr/",
      img: "/ak-sigorta.png",

      isBoycotted: false,
      boycottReason: `Sabancı Holding'e Ait, Sektörde 180 Yılı Aşkın Deneyime Sahip Uluslararası Sigorta şirketi Belçikalı Sigorta şirketi Ageas Ile Ortaklaşa çalışan Bir Sigorta şirketidir.`,
    },
    {
      name: "Anadolu Sigorta",
      slug: "anadolu-sigorta",
      description: ``,
      country: "Türkiye",
      website: "https://www.anadolusigorta.com.tr/",
      img: "/anadolu-sigorta.png",

      isBoycotted: false,
      boycottReason: `Anadolu Sigorta, 1925 Yılında Türkiye İş Bankası Iştirakı Olan Milli Reasürans Türk A.Ş. Bünyesinde Kurulan Anadolu Anonim Türk Sigorta Şirketi Bünyesindeki Sağlık Ve Kredi, Yangın, Nakliyat, Kaza, Mühendislik, Tarım, Hukuksal Koruma, Ferdi Kaza, Sigorta Markasıdır.`,
    },
    {
      name: "Aviva",
      slug: "aviva",
      description: ``,
      country: "Birleşik Krallık",
      website: "",
      img: "/aviva.png",

      isBoycotted: true,
      boycottReason: `Aviva, İsrail'e Filistinlilere Yönelik Baskıda Kullanılan Silah Ve Askeri Teçhizat Satan şirketlere Yatırım Yapmaktadır.`,
    },
    {
      name: "Ankara Sigorta",
      slug: "ankara-sigorta",
      description: ``,
      country: "Türkiye",
      website: "https://www.ankarasigorta.com.tr/",
      img: "/ankara-sigorta.png",

      isBoycotted: false,
      boycottReason: `Ankara Sigorta, 1936 Yılında Bakanlar Kurulu Onayıyla Kurulmuş Olan Ankara Anonim Türk Sigorta Şirketi Bünyesindeki Kasko, Trafik, Konut, Işyeri Sigortası Markasıdır.`,
    },
    {
      name: "Arentfoxschiff",
      slug: "arentfoxschiff",
      description: ``,
      country: "",
      website: "https://www.afslaw.com/",
      img: "/arentfoxschiff.png",

      isBoycotted: true,
      boycottReason: `Arent Fox Schiff, Yaptığı Basın Açıklamasına Haması Terörist Olarak Adlandırmış Ve İsrail’in Arkasında Olduklarını Açıkça Belirtmiştir. Bu Durum Firmayı Doğrudan Boykot Listesine Koymuştur.`,
    },
    {
      name: "Starr Companies",
      slug: "starr-companies",
      description: ``,
      country: "",
      website: "https://starrcompanies.com/",
      img: "/starr-companies.png",

      isBoycotted: true,
      boycottReason: `Sahibi Gizli Bir şirket, şirketin Chairman And Chief Executive Officer İsraili Destekler Bir Açıklama Yaptı.`,
    },
    {
      name: "Groupama",
      slug: "groupama",
      description: `Groupama, Merkezi Fransa'da Bulunan Köklü Bir Sigorta şirketidir. 1840 Yılında çiftçiler Tarafından Karşılıklı Yardımlaşma Amacıyla Kurulmuş Olup, Uzun Yıllar Boyunca Tarım Sigortası Alanında Faaliyet Göstermiştir. Zamanla Büyüyerek Finans Ve Sigortacılığın Diğer Alanlarına Da Genişlemiştir. Groupama, özellikle Fransa'da Güçlü Bir Geçmişe Sahiptir, Ancak Bugün Uluslararası Alanda Da Faaliyet Gösteren önemli Bir Sigorta Grubu Haline Gelmiştir. Groupama, Dünya Genelinde Birçok ülkede Sigorta Ve Bankacılık Hizmetleri Sunmaktadır. Türkiye'deki Faaliyetlerini Ise, 2006 Yılında Başak Sigorta Ve Güven Sigorta’yı Satın Alarak Başlatmıştır. Bu Iki Sigorta şirketi Groupama Sigorta Ve Groupama Emeklilik Adıyla Yeniden Yapılandırılmıştır Ve Türkiye’deki Sigorta Ve Emeklilik Sektöründe Hizmet Vermeye Devam Etmektedir.`,
      country: "Fransa",
      website: "https://www.groupama.com/en/",
      img: "/groupama.png",

      isBoycotted: false,
      boycottReason: ``,
    },
    {
      name: "Hanseatic Versicherung",
      slug: "hanseatic-versicherung",
      description: ``,
      country: "Almanya",
      website: "https://www.hvd.de/",
      img: "/hanseatic-versicherung.png",

      isBoycotted: true,
      boycottReason: `Bu Marka, BOYKOT Listelerine Dahil Edilmiştir Ve Boykot Edilmesini Gerektiren Olumsuz Açıklamalar Ya Da Destekler Söz Konusudur. Bu Yüzden, Marka "Boykot Hususunda" Güvenli Olarak Kabul Edilmemekte Ve Tüketiciler Tarafından Tercih Edilmemesi önerilmektedir. Yanlış, Hatalı Veya Eksik Bir Metin Olduğunu Düşünüyorsanız öneri Kısmından Bizlere Kolaylıkla Bildirebilirsiniz.`,
    },
    {
      name: "",
      slug: "",
      description: ``,
      country: "",
      website: "",
      img: "/a.png",

      isBoycotted: false,
      boycottReason: ``,
    },
    {
      name: "",
      slug: "",
      description: ``,
      country: "",
      website: "",
      img: "/a.png",

      isBoycotted: false,
      boycottReason: ``,
    },
    {
      name: "",
      slug: "",
      description: ``,
      country: "",
      website: "",
      img: "/a.png",

      isBoycotted: false,
      boycottReason: ``,
    },
    {
      name: "",
      slug: "",
      description: ``,
      country: "",
      website: "",
      img: "/a.png",

      isBoycotted: false,
      boycottReason: ``,
    },
    {
      name: "",
      slug: "",
      description: ``,
      country: "",
      website: "",
      img: "/a.png",

      isBoycotted: false,
      boycottReason: ``,
    },
    {
      name: "",
      slug: "",
      description: ``,
      country: "",
      website: "",
      img: "/a.png",

      isBoycotted: false,
      boycottReason: ``,
    },
  ],
};

export default sigortaCategory;
