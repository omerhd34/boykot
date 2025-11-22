//! BELKİ İLERDE YAZILAR DEĞİŞEBİLİR.
const supermarketCategory = {
 name: "Süpermarket",
 slug: "supermarket",
 iconKey: "shopping-basket",
 description: "Market zincirleri ve perakende mağazaları.",
 brands: [
  // Fiskobirlik ve ŞOK marketi ekle.
  {
   name: "A101",
   slug: "a101",
   foundedYear: 2008,
   ctgry: "Süpermarket",
   founder: "Cuneyd Zapsu ve Aziz Zapsu",
   owner: "Turgut Aydın Holding",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],
   img: "/a101.svg",
   isBoycotted: "boykot",
   website: "https://www.a101.com.tr/",
   description: `A101 Yeni Mağazacılık A.Ş., veya kısaca A101, Türkiye merkezli bir indirim marketleri zinciridir. Şirket, 28 Mart 2008 tarihinde kurulmuştur ve genel merkezi İstanbul'un Üsküdar ilçesinde yer almaktadır. A101, indirim marketi pazarına 121 mağaza ile giriş yapmış ve hızlı bir büyüme göstermiştir.

2023 itibarıyla Türkiye'nin 81 ilinde, 923 ilçede, 13.000'in üzerinde mağazasıyla hizmet vermektedir. Toplamda 16 bölge müdürlüğü bulunmaktadır. A101'e ait kamyonlar ile depolardan mağazalara sevkiyat yapılmaktadır. Şirketin ortaklık yapısı itibarıyla %79,21 oran ile Aydın Ailesi'ne (Turgut Aydın Holding) aittir. 2020'de Erhan Bostan'ın görevinden ayrılmasıyla 1 Ocak 2021'den beri Cem Maltaş üst düzey yöneticiliğini yapmaktadır.

A101, "hard discount" konsepti altında faaliyet gösteren bir market zinciridir. Şirket, e-ticaret alanına da genişlemiş ve günümüzde hem online hem de geleneksel yöntemlerle faaliyetlerini sürdürmektedir. A101, benzer Türk indirim marketleri zincirleri olan Şok ve BİM'in baş rakibidir.`,
   boycottReason: `A101, boykot edilen markaların ürünlerini (özellikle İsrail'i desteklediği düşünülen markalar) büyük indirimlerle satışa sunması nedeniyle eleştirilmektedir. Bu durum, bazı kesimler tarafından "işgalci ürünlere can suyu olmak" olarak yorumlanmakta ve A101'in bu markaları desteklediği algısı yaratmaktadır.

Bu tutuma tepki olarak, 1 Haziran 2024 tarihinde Twitter'da #A101Boykot hashtag'i ile bir boykot kampanyası başlatılmıştır. Kampanyanın temel amacı, A101'in bu politikalarını protesto etmek ve konuyla ilgili kamuoyu farkındalığı yaratmaktır.

<div style="text-align: center; margin-top: 12px;"><a href="https://x.com/hashtag/a101boykot" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 8px 20px; background-color: #991b1b; color: white; font-weight: bold; text-decoration: none; border-radius: 6px; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='#7f1d1d'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.2)';" onmouseout="this.style.backgroundColor='#991b1b'; this.style.transform='translateY(0)'; this.style.boxShadow='none';">KANIT</a></div>`,
  },
  {
   name: "Bim",
   slug: "bim",
   foundedYear: 1995,
   ctgry: "Süpermarket",
   founder:
    "Cüneyd Zapsu, Aziz Zapsu, Yasin El Kadı, Korkut Özal, Mustafa Latif Topbaş ve Mehmet Fatih Saraç",
   owner:
    "Halka açık (%71,4) ve Merkez Bereket Gıda A.Ş. (%15,3) ve Naspak Gıda A.Ş. (%11,6) ve Diğer (%1,5)",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/bim.png",
   isBoycotted: "boykot-degil",
   website: "https://www.bim.com.tr/",
   description: `Birleşik Mağazalar A.Ş., veya kısaltmasıyla BİM, Türkiye merkezli bir indirim marketleri zinciridir. 1995 yılında kurulan şirketin merkezi İstanbul'un Sancaktepe ilçesinde yer almaktadır. BİM, "hard discount" konseptiyle faaliyet gösteren ve düşük fiyatlı ürünler sunan bir perakende zinciridir.

Şubat 2021 itibarıyla Türkiye'deki perakendecilik sektöründe pazar payı en yüksek firma olan BİM, 2005 yılından beri Borsa İstanbul'da işlem görmektedir. Türkiye genelinde binlerce mağazası bulunan şirket, geniş bir müşteri kitlesine hizmet vermektedir. BİM, ürün çeşitliliğini sürekli artırarak müşterilerine gıda, temizlik, kişisel bakım ve gıda dışı kategorilerde geniş bir ürün yelpazesi sunmaktadır.

Türkiye dışında Fas ve Mısır'da da faaliyet gösteren şirketin BİMCell, Aytaç ve FİLE gibi alt markaları bulunmaktadır. BİM, tedarik zincirini optimize ederek maliyetleri düşürmekte ve bu sayede müşterilerine uygun fiyatlı ürünler sunabilmektedir. Şirket, sürdürülebilir büyüme stratejisiyle hem Türkiye'de hem de uluslararası pazarlarda varlığını güçlendirmeye devam etmektedir.`,
  },
  {
   name: "Migros",
   slug: "migros",
   foundedYear: 1954,
   ctgry: "Süpermarket",
   founder: "İstanbul Belediyesi(Ferruh İlter)",
   owner: "Anadolu Grubu",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],
   img: "/migros.png",
   isBoycotted: "boykot",
   website: "https://www.migroskurumsal.com/",
   description: `Migros Ticaret A.Ş., Türkiye'nin önde gelen süpermarket zincirlerinden biridir. Şirketin temelleri, 1953 yılında İstanbul Belediyesi İktisat Müdürü Ferruh İlter'in, İsviçre Migros'un kurucusu Gottlieb Duttweiler'e yazdığı mektupla atılmıştır. 1954'te İstanbul Belediyesi ve İsviçre Migros işbirliğiyle Migros Türk kurulmuştur.

1975 yılında şirketin çoğunluk hisseleri Koç Holding tarafından satın alınmıştır. 1991 yılında halka açılan şirket, 2005'te perakende zinciri Tansaş'ı bünyesine katmıştır. 2008'de Koç Holding, hisselerini İngiliz BC Partners tarafından kontrol edilen Moonlight Capital'e satmıştır. 2015 yılında ise şirketin %40,25 hissesi Anadolu Grubu tarafından satın alınmış ve Anadolu Grubu ana hissedar konumuna gelmiştir.

Migros, yıllar içinde Makro Market, Uyum Market ve Kipa gibi zincirleri de satın alarak büyümüştür. Bugün Migros, Macrocenter, Mion, Mionline, Tazedirekt, Migros Sanal Market, Migros Hemen ve Migros Yemek gibi farklı formatlardaki mağaza ve hizmetleriyle Türkiye genelinde binlerce noktada faaliyet göstermektedir.`,
   boycottReason: `Migros'un "boykot" olarak sınıflandırılmasının temel nedeni, İsviçre merkezli ana şirketinin piyanist Fazıl Say ile ilgili aldığı bir karardır. Fazıl Say, sosyal medya hesabından yaptığı bir paylaşımda, "İsrail'in Gazze'lilere karşı işlediği soykırım suçuna dair Türkiye Cumhuriyeti Cumhurbaşkanı Erdoğan'ın izlediği politikayı doğru bulduğunu" ifade etmiştir. Bu açıklamanın ardından İsviçre Migros, sanatçının planlanan konserlerini iptal ettiğini ve bu sözleri "kabul edilemez" bulduğunu duyurmuştur.

Bu olay, ana şirketin tutumu nedeniyle Türkiye'deki Migros Ticaret A.Ş.'nin de kamuoyunda eleştirilmesine ve bazı tüketiciler tarafından tercih edilmemesine yol açmıştır.`,
  },
  {
   name: "Carrefour & CarrefourSA",
   slug: "carrefour",
   foundedYear: 1957,
   ctgry: "Süpermarket",
   founder:
    "Marcel Fournier, Denis Defforey (Carrefour) / Sabancı Holding ve Carrefour (CarrefourSA)",
   owner:
    "Sabancı Ailesi (%57,12), Carrefour Nederland BV (%37,54), Halka açık (%5,34) (CarrefourSA)",
   country: "Fransa & Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],

   img: "/carrefour.png",
   isBoycotted: "boykot",
   website: "https://www.carrefoursa.com/",
   description: `Carrefour, 1957 yılında Fransa'nın Annecy kentinde Marcel Fournier ve Denis Defforey tarafından kurulan uluslararası bir süpermarketler zinciridir. Walmart'tan sonra dünyanın en büyük cirosuna sahip perakende şirketlerinden biri olan Carrefour, Avrupa, Asya, Afrika ve Güney Amerika'da faaliyet göstermektedir. Şirket, 1999 yılında Fransa'daki en büyük rakiplerinden Promodès ile birleşerek gücünü artırmıştır.

Türkiye pazarındaki varlığı ise CarrefourSA markasıyla bilinmektedir. CarrefourSA, 1991 yılında Sabancı Holding ve Fransız Carrefour ortaklığında kurulmuştur. Türkiye'deki ilk süpermarket olma özelliğini taşıyan ilk mağazasını 22 Kasım 1993 tarihinde İstanbul İçerenköy'de açmıştır.

1999 yılından itibaren Türkiye'de birçok yerel market zincirini satın alarak büyüyen CarrefourSA, 2005'te Gima ve Endi'yi, 2010'da Alpark'ı, 2015'te ise İsmar ve Kiler gibi önemli zincirleri bünyesine katmıştır. 2013'te Sabancı Holding'in hisse payını %50,8'e çıkararak yönetimi devralmasıyla şirket, Türkiye pazarındaki konumunu daha da güçlendirmiştir. Bugün CarrefourSA, Türkiye genelinde 70'ten fazla ilde hipermarket, süpermarket, gurme ve mini gibi farklı formatlardaki 1200'den fazla mağazasıyla hizmet vermektedir.`,
   boycottReason: `Carrefour'un boykot edilmesinin ana nedeni, şirketin İsrail'deki faaliyetleri ve İsrail ordusuna verdiği destektir. Şirket, İsrail'e büyük yatırımlar yaparak yeni mağazalar açmış ve İsrail ordusuna ücretsiz yardım sağladığını açıklamıştır.

Ayrıca Carrefour, Filistin topraklarındaki gayrimeşru İsrail yerleşimlerinde şubeleri bulunan Yeinot Bitan zinciriyle işbirliği yaparak bölgedeki iş hacmini genişletmektedir. 7 Ekim 2023'ten itibaren Carrefour İsrail'in, İsrail ordusuna doğrudan destek amacıyla kişisel bakım ürünleri ve gıda içeren yardım setleri hazırlayıp bağışladığı belirtilmiştir. Bu durum, Carrefour'u İsrail ordusuna doğrudan malzeme desteği sağlayan markalardan biri yapmıştır.

Fransa merkezli Carrefour, Türkiye'deki CarrefourSA'nın da ortağı olduğu için iki şirket arasındaki bağlantı iddiaları doğrudur ve boykot her iki markayı da kapsamaktadır.`,
  },
  {
   name: "Metro",
   slug: "metro",
   foundedYear: 1964,
   ctgry: "Süpermarket",
   founder: "Otto Beisheim",
   owner: "Metro AG",
   country: "Almanya",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],

   img: "/metro.png",
   isBoycotted: "boykot",
   website: "https://www.metro-tr.com/",
   description: `Metro, 1964 yılında girişimci Otto Beisheim tarafından Almanya'nın Düsseldorf şehrinde kurulan, uluslararası bir toptancı hipermarket zinciridir. "Cash & Carry" (Öde ve Götür) iş modeliyle profesyonel müşterilere hizmet vermeyi amaçlayan şirket, kısa sürede büyüyerek Metro AG grubunun önemli bir parçası haline gelmiştir. Bugün Almanya başta olmak üzere Sırbistan, Fransa, Hindistan ve Çin gibi birçok Avrupa ve Asya ülkesinde geniş bir operasyon ağına sahiptir.

Türkiye pazarına ilk adımını 1990 yılında İstanbul'da açtığı mağaza ile atan Metro, özellikle profesyonel müşterilerin (restoranlar, oteller, küçük marketler vb.) ihtiyaçlarına yönelik geniş bir ürün yelpazesi sunarak pazarda kendine yer edinmiştir. Bugün Türkiye genelinde 35'ten fazla toptancı hipermarket ile hizmet vermeye devam etmektedir.

Kökeni ve yönetim merkezi tamamen Almanya'da olan Metro, uluslararası bir marka kimliğine sahiptir. Türkiye'de uzun yıllardır faaliyet göstermesi ve ülke ekonomisine katkı sağlamasına rağmen, bu nedenlerle yerel bir marka olarak kabul edilmemektedir.`,
   boycottReason: `Metro Grossmarket'e yönelik boykot çağrılarının temelinde, şirketin "Metro Fast" isimli alışveriş uygulamasının kullanıcı sözleşmesinde yer alan bir madde yatmaktadır. "SuperSmart" alapısını kullanan uygulamanın sözleşmesinin 22. maddesi olan "Geçerli Hukuk ve Uyuşmazlıklar" bölümünde şu ifadeler yer almaktadır:

"Sözleşme, İsrail Devleti kanunlarına göre yorumlanıp uygulanacaktır. Herhangi bir uyuşmazlıkta Tel Aviv-Yaffo mahkemelerinin şahsi ve münhasır çözüm mercileri olduğunu kabul etmekte ve bu mahkemelerin kazai yetkisine, yerine veya uygunsuz mahkemeler olduğuna dair itirazlarınızdan feragat etmektesiniz."

Türkiye'deki bir tüketiciye sunulan hizmette, herhangi bir hukuki anlaşmazlık için İsrail yasalarının ve Tel Aviv mahkemelerinin yetkili kılınması, kamuoyunda büyük tepkiye yol açmış ve markanın boykot edilmesi için yapılan çağrıların ana nedenini oluşturmuştur.`,
  },
  {
   name: "Lidl",
   slug: "lidl",
   foundedYear: 1930,
   ctgry: "Süpermarket",
   founder: "Josef Schwarz",
   owner: "Schwarz Gruppe",
   country: "Almanya",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],

   img: "/lidl.png",
   isBoycotted: "boykot",
   website: "https://www.lidl.com/",
   description: `Lidl Stiftung & Co. KG, 1930 yılında Josef Schwarz tarafından kurulan, Almanya merkezli uluslararası bir indirim marketleri zinciridir. Schwarz Gruppe'nin bir parçası olan şirketin genel merkezi, Baden-Württemberg eyaletine bağlı Neckarsulm kentinde bulunmaktadır.

Avrupa'nın en büyük perakende zincirlerinden biri olan Lidl, 2021 itibarıyla 32 ülkede 11.000'den fazla mağazasıyla faaliyet göstermektedir. Şirket, benzer Alman indirim zinciri Aldi'nin en büyük rakiplerinden biri olarak kabul edilmektedir.`,
   boycottReason: `Lidl'ın boykot edilme nedeni, sahibi olan Schwarz Grubu'nun yaptığı bir teknoloji yatırımıdır. 2021 yılında Schwarz Grubu, İsrail merkezli bir siber güvenlik şirketi olan XM Cyber'ı satın almıştır.

XM Cyber teknoloji şirketinin, İsrail ordusuna teknoloji tedariki sağlayan CISCO SYSTEMS ile işbirliği yaptığı bilinmektedir. Bu bağlantı, Lidl'ın ve dolayısıyla Schwarz Grubu'nun İsrail'i dolaylı yoldan desteklediği iddialarına ve boykot çağrılarına neden olmuştur.`,
  },
  {
   name: "Tarım Kredi Kooperatifleri(KOOP)",
   slug: "tarim-kredi-kooperatifleri",
   foundedYear: 2017,
   ctgry: "Süpermarket",
   founder: "Tarım Kredi Pazarlama ve Marketçilik A.Ş.",
   owner: "Türkiye Tarım Kredi Kooperatifleri",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],
   img: "/tkk.jpg",
   isBoycotted: "boykot-degil",
   website: "https://www.tkkoop.com.tr/",
   description: `Türkiye Tarım Kredi Kooperatifleri, 1581 Sayılı Tarım Kredi Kooperatifleri ve Birlikleri kanunu hükümlerinden faydalanarak üreticilerin ekonomik menfaatlerini korumak ve mesleki ihtiyaçlarını karşılamak amacıyla kurulmuş, tüzel kişiliği olan bir çiftçi kuruluşudur.

Kuruluşun temeli, 1863 yılında Osmanlı Devleti'nin Niş Valisi Mithat Paşa tarafından kurulan ve tarımsal kooperatiflerin ilk adımı sayılan "Memleket Sandıkları"na dayanmaktadır. Cumhuriyetin ilanından sonra 1935 yılında çıkarılan "Tarım Kredi Kooperatifleri Kanunu" ile günümüzdeki modern yapısına kavuşmuştur.

Gıda, sigorta, hayvancılık ve lojistik gibi birçok farklı sektörde faaliyet gösteren Tarım Kredi Kooperatifleri, 2024 itibarıyla "Kooperatif Market" ve "KOOP" markaları altında 4.500'den fazla şube ile perakende sektöründe de hizmet vermektedir. Türkiye'nin en önemli çiftçi kuruluşu olarak kabul edilmektedir.`,
  },
  {
   name: "Aldi",
   slug: "aldi",
   foundedYear: 1913,
   ctgry: "Süpermarket",
   founder: "Karl Albrecht, Theo Albrecht",
   owner: "Aldi Nord (Albrecht ailesi), Aldi Süd (Albrecht ailesi)",
   country: "Almanya",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],
   img: "/aldi.png",
   isBoycotted: "boykot",
   website: "https://www.aldi.com/",
   description: `Aldi (Albrecht-Diskont), Almanya merkezli küresel bir indirim marketleri zinciridir. Şirket, iki ayrı merkezden yönetilmektedir: Aldi Nord ve Aldi Süd. İsim, kurucu ailenin soyadı olan "Albrecht" ve "Diskont" (indirim) kelimelerinin birleşiminden oluşmaktadır.

Şirketin geçmişi, 1913 yılında Almanya'nın Essen şehrinde Karl Albrecht ve Theo Albrecht kardeşlerin anneleri tarafından kurulan 35 m²'lik küçük bir mağaza ile başlamıştır. İkinci Dünya Savaşı'ndan sonra iki kardeş işletmeyi devralmış ve Essen-Schonnebeck bölgesinde daha büyük bir mağaza açarak büyümeye başlamışlardır. 1950 yılına gelindiğinde 13 mağazaya ulaşan şirket, 1960 yılında iki kardeşin ayrılmasıyla Aldi Nord (Kuzey) ve Aldi Süd (Güney) olarak ikiye bölünmüştür. Bu ayrılık sırasında şirket 300 mağaza ve 90 milyon Mark ciroya sahipti.

Aldi'nin büyüme sırrı, o dönemde verilen %3 indirim iznini hemen kullanarak ürünlerin fiyatlarını bu oranda düşürmesi ve "lüks mağaza dekorasyonunun satılan ürünlere yansıdığı" inancı nedeniyle dekorasyona yatırım yapmamasıydı. Ayrıca pahalı reklamlardan kaçınarak maliyetleri düşürmüş ve gıda ürünlerini mümkün olduğunca ucuza satmıştır.

2008 itibarıyla Aldi Nord, 35 merkezden yönetilen 2.500 şubeye sahipti. Aldi Süd ise 31 merkezden yönetilen 1.700 şubeye sahipti. Bugün Aldi, dünya çapında binlerce mağazasıyla faaliyet gösteren en büyük indirim marketleri zincirlerinden biridir.`,
   boycottReason: `Aldi'nin boykot edilmesinin temel nedeni, şirketin Almanya merkezli uluslararası bir marka olması ve yabancı sermaye ile işletilmesidir. Aldi, Türkiye'de doğrudan faaliyet göstermemekle birlikte, küresel bir indirim marketleri zinciri olarak yerel ekonomiyi desteklememesi nedeniyle boykot listelerine dahil edilmiştir.

Yabancı sermayeli ve uluslararası markalar yerine, yerel ve milli sermaye ile işletilen market zincirlerini tercih etmek, ülke ekonomisine daha fazla katkı sağlamak ve yerli işletmeleri desteklemek açısından önemlidir. Alternatif ürünlere bakınız.`,
  },
  {
   name: "Hakmar",
   slug: "hakmar",
   foundedYear: 1997,
   ctgry: "Süpermarket",
   founder: "Zeki Doruk",
   owner: "Zeki Doruk",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],
   img: "/hakmar.png",
   isBoycotted: "boykot",
   website: "https://www.hakmarexpress.com.tr/",
   description: `Hakmar Alışveriş Merkezleri, 1997 yılında İstanbul'un Pendik ilçesinde kurulmuş bir süpermarket zinciridir. Bölgede hızlı bir büyüme göstererek şube sayısını yaklaşık 800'e çıkarmış ve binlerce metrekarelik satış alanına sahip olmuştur. Son yıllarda sektörde öne çıkan şirketlerden biri haline gelmiştir.

Yüksek satın alma gücüne sahip, dinamik yapılı ve perakende sektörünü iyi bilen bir yönetim ekibi tarafından yönetilen Hakmar, hizmet kalitesi ve ürün çeşitliliğini sürekli olarak geliştirmektedir. Özel süpermarket yazılımları ve birbirleriyle entegre çevrimiçi POS sistemleri kullanarak, 15.000 farklı çeşit ürün sunmakta ve tüketicilere daha hızlı ve etkili hizmet vermektedir.

Hakmar, kurumsallaşmaya büyük önem vermekte ve ISO 9001:2000 hizmet kalitesi sertifikası çalışmalarını tamamlama sürecindedir. Ayrıca unlu mamul üreticileri için gerekli en yüksek standart olan HACCP sertifikasını da yakın gelecekte almayı hedeflemektedir. Şirketin temel idealleri arasında şube ağını genişletmek ve ürün ve hizmet kalitesini tüm İstanbul'a en kısa ve hızlı şekilde yaymak yer almaktadır.`,
   boycottReason: `Hakmar'ın boykot edilmesinin temel nedeni, şirketin sahibi ve HAKMAR Şirketler Grubu Yönetim Kurulu Başkanı Zeki Doruk'un Fetullahçı Terör Örgütü (FETÖ) soruşturması kapsamında yakalanması ve tutuklanmasıdır. 

İstanbul Cumhuriyet Başsavcılığınca yürütülen FETÖ'nün güncel finans yapılanmasına yönelik soruşturma kapsamında, Zeki Doruk'un FETÖ'nün yurt dışı yapılanmasından aldığı talimatlar doğrultusunda Türkiye'deki örgüt mensuplarına düzenli para transfer ettiği belirlenmiştir. HAKMAR ve TATBAK şirketleri örgütsel para transferinde kullanılmıştır.

Zeki Doruk'un "kurban bağışı, hac parası ve Zaman gazetesine üyelik" gerekçeleriyle FETÖ'ye yardım topladığı, FETÖ üyeliğinden kaydı olan ve terör örgütüne sempati beslemeye devam eden kişileri zincir marketlerinde çalıştırdığı tespit edilmiştir. HAKMAR'ın genel müdürlük binasında örgütsel toplantılar yapıldığı ve örgütsel para transferinde şirketlerin kullanıldığı anlaşılmıştır.

Bu nedenlerle Hakmar markası boykot edilmekte ve tüketicilerin yerel alternatifleri tercih etmesi tavsiye edilmektedir.

<div style="text-align: center; margin-top: 12px;"><a href="https://www.aa.com.tr/tr/gundem/hakmarin-sahibinin-yakalandigi-feto-sorusturmasinda-22-supheli-tutuklandi/3634518" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 8px 20px; background-color: #991b1b; color: white; font-weight: bold; text-decoration: none; border-radius: 6px; transition: all 0.2s ease;" onmouseover="this.style.backgroundColor='#7f1d1d'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 8px rgba(0,0,0,0.2)';" onmouseout="this.style.backgroundColor='#991b1b'; this.style.transform='translateY(0)'; this.style.boxShadow='none';">KANIT</a></div>`,
  },
  {
   name: "Makro Market",
   slug: "makromarket",
   foundedYear: 1991,
   ctgry: "Süpermarket",
   founder: "Songör ailesi",
   owner: "Mehmet Songör, Şeref Songör, Mustafa Songör",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],
   img: "/makroMarket.gif",
   isBoycotted: "onerilmiyor",
   website: "",
   description: `Makro Market A.Ş., 1991 yılında Ankara'da Songör ailesi tarafından kurulmuş bir süpermarket zinciridir. Şirket, "Bu ülkenin marketi" sloganıyla faaliyet göstermiştir. 6 ortaklı bir yapıya sahip olan Makro Market, Ankara, Amasya, Antalya, Bolu, İstanbul, Kayseri, Kırıkkale, Konya, Karaman, Malatya, Mersin, Samsun, Yozgat, Ordu ve Tekirdağ olmak üzere 15 ilde hizmet vermiştir.

2012 yılında Uyum Gıda'nın %47,32 hissesini satın alan Makro Market, 2016 yılında iki şirketi birleştirerek Makro Market A.Ş. çatısı altında toplam 192 Makro ve 87 Uyum mağazasıyla 279 mağazaya ulaşmıştır. 2016 yılında e-ticaret kanalına giriş yaparak www.marketsepeti.com.tr web sitesi ve GittiGidiyor'un süpermarket kanalı üzerinden Türkiye genelinde ürün gönderimi yapmaya başlamıştır.

2016 yılında Fortune Türkiye'nin En Büyük 500 Şirketi listesinde istihdamda 42., cirosunda 126. sırada yer alırken, perakende sektöründe 6. sırada yer almıştır. Capital Türkiye'nin En Büyük 500 Şirketi listesinde ise genel sıralamada 131. sırada, perakende sektöründe 11. sırada yer almış ve ₺1.725.322.850 ciro elde etmiştir.

Ekim 2017'de mali sıkıntılar nedeniyle konkordato başvurusunda bulunan şirket, 2018 yılında Migros'a İstanbul merkezli 56 Uyum Market şubesi ve Antalya'daki 17 Makro Market şubesini 105 milyon liraya satmıştır. 2019 itibarıyla Makro Market'in aktif şubesi kalmamıştır.`,
   boycottReason: `Makro Market'in önerilmemesinin temel nedeni, şirketin 2017 yılında mali sıkıntılar nedeniyle konkordato başvurusunda bulunması ve 2019 itibarıyla tüm şubelerini kapatarak faaliyetlerini durdurmasıdır. Şirket artık aktif olarak hizmet vermemektedir.

Ayrıca, 2018 yılında şirketin bazı şubelerinin Migros'a satılması nedeniyle, Migros'un boykot edilen bir marka olması ve şirketin bu markaya entegre olması da önerilmemesinin nedenlerinden biridir. Tüketicilerin aktif olarak hizmet veren ve yerel ekonomiyi destekleyen alternatif market zincirlerini tercih etmesi önerilmektedir.`,
  },
  {
   name: "Kaufland",
   slug: "kaufland",
   foundedYear: 1984,
   ctgry: "Süpermarket",
   founder: "Dieter Schwarz",
   owner: "Schwarz Gruppe",
   country: "Almanya",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],
   img: "/kaufland.png",
   isBoycotted: "boykot",
   website: "https://www.kaufland.com/",
   description: `Kaufland, Schwarz Gruppe bünyesinde bulunan Almanya merkezli bir hipermarket zinciridir. Şirket, 1984 yılında Neckarsulm'da ilk mağazasını açmış ve hızlı bir büyüme göstererek eski Doğu Almanya'da lider konuma gelmiştir.

Kaufland, geniş ürün yelpazesi ile bilinen bir süpermarket zinciridir ve özellikle Avrupa'da yaygın bir varlığa sahiptir. Şirket, Almanya, Çekya, Moldova, Slovakya, Polonya, Romanya, Bulgaristan ve Hırvatistan'da yaklaşık 9.000 mağaza ile hizmet vermektedir. Schwarz Gruppe'nin bir parçası olarak Lidl ve Handelshof grubu ile birlikte faaliyet göstermektedir.`,
   boycottReason: `Kaufland'ın boykot edilmesinin temel nedeni, ana şirketi Schwarz Gruppe'nin 2021 yılında İsrail merkezli XM Cyber Ltd. ile işbirliği anlaşması imzalamasıdır. XM Cyber Ltd., İsrail'in siber güvenlik altyapısını destekleyen bir şirkettir.

Bu işbirliği anlaşması nedeniyle Kaufland, dolaylı olarak İsrail'i desteklemektedir. Schwarz Gruppe'nin İsrail merkezli bir siber güvenlik şirketiyle yaptığı bu işbirliği, İsrail'in teknolojik altyapısına katkı sağlamakta ve bu nedenle Kaufland markası boykot listelerine dahil edilmiştir.`,
  },
  {
   name: "Action",
   slug: "action",
   foundedYear: 1993,
   ctgry: "Süpermarket",
   founder: "Gerard Deen, Rob Wagemaker",
   owner: "3i (%80)",
   country: "İngiltere",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],
   img: "/action.png",
   isBoycotted: "boykot",
   website: "https://www.action.com/",
   description: `Action, Hollanda merkezli uluslararası bir indirim mağazaları zinciridir. Şirket, Temmuz 1993 yılında Gerard Deen ve Rob Wagemaker tarafından Enkhuizen, Hollanda'da kurulmuştur. Daha sonra Boris Deen de şirkete katılmıştır. Genel merkezi Zwaagdijk-Oost, Hollanda'da bulunmaktadır.

Action, düşük bütçeli gıda dışı ürünler ve uzun raf ömrüne sahip bazı gıda ürünleri satmaktadır. Şirket, 2025 itibarıyla 14 ülkede (Hollanda, Almanya, Fransa, Belçika, Lüksemburg, Avusturya, Polonya, Portekiz, Çek Cumhuriyeti, İtalya, İspanya, Slovakya, Romanya, İsviçre) faaliyet göstermekte ve 3.124 mağazaya sahiptir.

Şirket, 2002 yılında 94 mağazaya ulaşmış, 2005'te Belçika'ya, 2009'da Almanya'ya, 2012'de Fransa'ya açılmıştır. 2014'te 500. mağazayı açan Action, 2021'de Avrupa genelinde 1.800'den fazla mağazaya ulaşmıştır. Kasım 2023'te 2.500. mağazasını açmış ve Haziran 2025'e kadar 3.000. mağazasını açmayı planlamaktadır.

2023 yılı itibarıyla Action, yaklaşık 70.000 çalışanı ile 11,3 milyar avro net satış geliri elde etmiştir. Şirketin %80'i İngiliz özel sermaye şirketi 3i'ye aittir.`,
   boycottReason: `Action'ın boykot edilmesinin temel nedeni, şirketin %80 hissesine sahip olan İngiliz özel sermaye şirketi 3i'nin sahipliğidir. Yabancı sermayeli ve uluslararası bir marka olan Action, yerel ekonomiyi desteklememesi ve milli sermaye ile işletilmemesi nedeniyle boykot listelerine dahil edilmiştir.

Ayrıca, şirketin küresel bir indirim zinciri olarak faaliyet göstermesi ve yerel işletmelerle rekabet etmesi de boykot nedenlerinden biridir. Tüketicilerin yerel ve milli sermaye ile işletilen market zincirlerini tercih etmesi, ülke ekonomisine daha fazla katkı sağlamak açısından önemlidir.`,
  },
  {
   name: "Kipa",
   slug: "kipa",
   foundedYear: 1992,
   ctgry: "Süpermarket",
   founder:
    "İzmirli 100 Girişimci ve 11 Kasım 2003 itibarıyla Tesco ile ortaklık",
   owner: "Anadolu Grubu (Migros Ticaret A.Ş. bünyesinde)",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],
   img: "/kipa.png",
   isBoycotted: "boykot",
   website: "http://www.kipa.com.tr",
   description: `Kipa Kitle Pazarlama Ticaret A.Ş., 17 Ağustos 1992 tarihinde İzmir'de İzmirli 100 girişimci tarafından kurulmuş bir hipermarket zinciridir. Şirketin kuruluşunda Ahmet Piriştina, Şinasi Ertan ve Metin Akpınar gibi isimler yer almıştır. İlk Kipa hipermarketi Bornova'da açılmış, ardından Balçova ve Çiğli ilçelerinde de mağazalar açılmıştır.

1997 yılında Kipa'nın hisseleri İMKB'de işlem görmeye başlamıştır. 1998 yılında İzmir dışındaki ilk mağazasını Denizli'de açan Kipa, Türkiye genelinde büyümeye başlamıştır. 11 Kasım 2003 tarihinde şirketin ana hisseleri İngiltere merkezli Tesco tarafından satın alınmıştır.

2013 yılında Tesco, "Türkiye'nin Tadı" projesi kapsamında İngiltere'deki 235 mağazasında Türk ürünleri ve markalarını satışa sunmuştur. 2015 yılında Tesco, Ankara, Mersin ve Denizli'deki 10 mağazayı Beğendik'e 40 milyon TL'ye satmıştır. 2017 yılında Kipa'nın %95,5 hissesi Anadolu Grubu'na satılmıştır.

2018 yılında Anadolu Grubu bünyesindeki Kipa ve Migros mağazalarının Migros markası altında birleştirilmesine karar verilmiştir. Kasım 2015 itibarıyla Kipa, 20 ilde 169 mağaza, 3 benzin istasyonu, 1 dağıtım merkezi ve 31 alışveriş merkezi ile faaliyet göstermiştir. Toplam satış alanı 354.384 m²'dir.`,
   boycottReason: `Kipa'nın boykot edilmesinin temel nedeni, şirketin 2018 yılında Migros Ticaret A.Ş. bünyesine dahil edilmesi ve Migros'un boykot edilen bir marka olmasıdır. Kipa, Anadolu Grubu bünyesinde Migros ile birleştirilmiş ve artık Migros markası altında faaliyet göstermektedir.

Migros'un boykot edilmesinin nedeni, İsviçre merkezli ana şirketinin piyanist Fazıl Say ile ilgili aldığı karardır. Fazıl Say'ın İsrail'in Gazze'ye karşı işlediği soykırım suçuna dair Türkiye Cumhuriyeti Cumhurbaşkanı Erdoğan'ın politikasını desteklediğini ifade etmesinin ardından İsviçre Migros, sanatçının konserlerini iptal etmiş ve bu sözleri "kabul edilemez" bulduğunu açıklamıştır.

Kipa'nın Migros'a bağlı olması ve Migros markası altında faaliyet göstermesi nedeniyle, Migros'un boykot edilmesi Kipa'yı da kapsamaktadır. Bu nedenle Kipa markası boykot listelerine dahil edilmiştir.`,
  },
  {
   name: "Walmart",
   slug: "walmart",
   foundedYear: 1962,
   ctgry: "Süpermarket",
   founder: "Sam Walton",
   owner: "Walton ailesi (%50,85)",
   country: "ABD",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],
   img: "/walmart.png",
   isBoycotted: "boykot",
   website: "https://www.walmart.com/",
   description: `Walmart Inc. (eski adıyla Wal-Mart Stores, Inc.), 2 Temmuz 1962 tarihinde Sam Walton tarafından kurulmuş Amerikan kökenli bir perakende zinciridir. Şirket, ismini kurucusu Sam Walton'un kısaltmasından almıştır. Genel merkezi Bentonville, Arkansas, ABD'de bulunmaktadır.

1950 yılında Sam Walton, Arkansas'ın küçük bir kasabası olan Bentonville'de Dime & Nickle Store adında küçük bir mağaza işletmekteydi. 1962 yılında Arkansas şehir merkezinde ilk büyük Walmart mağazasını açmıştır. Bu mağaza günümüzde şirketin yeni konumunun yanında müze olarak hizmet vermektedir.

1972 yılında halka açılan Walmart, 1987 yılında "Hipermarket" konseptini tanıtarak gerçek büyümesini başlatmıştır. 1991 yılında Meksika'nın Meksiko şehrindeki Polanco bölgesinde ilk uluslararası şubesini açmıştır. 2006 yılında Almanya'ya genişleme girişimi başarısız olmuş ve binaları Metro Group'a satılmıştır.

2007 yılında 374,5 milyar dolar cirosu ile Walmart, Amerikan perakende pazarında ve dünya genelinde en yüksek cirosu olan şirket haline gelmiştir. 2022 yılı itibarıyla şirket, 572,8 milyar dolar gelir elde etmiş ve yaklaşık 2,3 milyon çalışanı bulunmaktadır. Walmart, Amerika'nın en büyük özel sektör işverenidir.

Walmart, Amerika dışında 15 ülkede 4.263 şube ve 660.000 çalışan ile faaliyet göstermektedir. Meksika, İngiltere, Japonya (Seiyu), Kanada ve Çin gibi ülkelerde birçok şube açmıştır. Almanya ve Güney Kore pazarlarından çekilmiştir. 25 Ekim 2024 tarihinde Walmart, Türkiye'de ofis açacağını duyurmuştur.`,
   boycottReason: `Walmart'ın boykot edilmesinin temel nedeni, şirketin CEO'su Doug McMillon'un 9 Ekim 2023 tarihinde LinkedIn hesabından yaptığı açıklamadır. McMillon, Hamas'ın İsrail'e saldırısının ardından antisemitik söylemlerin ve nefret suçlarının arttığını gözlemlediklerini belirterek, Walmart Foundation'ın United States Holocaust Memorial Museum'a 1 milyon dolar bağış yapacağını açıklamıştır.

Bu bağış, Holokost'un tarihi ve dersleri ile antisemitizmin tehlikeleri hakkında eğitim programları için sosyal yardım programlarını desteklemek amacıyla yapılmıştır. Ancak bu bağış, Hamas'ın İsrail'e saldırısının hemen ardından yapılması ve İsrail'i destekleyen bir tutum olarak algılanması nedeniyle boykot çağrılarına neden olmuştur.

Walmart'ın bu bağışı, İsrail'i destekleyen bir tutum olarak yorumlanmakta ve bu nedenle şirket boykot listelerine dahil edilmiştir.`,
  },
  {
   name: "Tansaş",
   slug: "tansas",
   foundedYear: 1973,
   ctgry: "Süpermarket",
   founder: "İzmir Büyükşehir Belediyesi (İhsan Alyanak)",
   owner: "Anadolu Grubu (Migros Ticaret A.Ş. bünyesinde)",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "mopas",
    "onur-market",
    "yunus-market",
    "tespo",
   ],
   img: "/tansas.png",
   isBoycotted: "boykot",
   website: "https://tansasgross.com.tr/",
   description: `Tansaş (Tanzim Satış), 1973 yılında İzmir'de Belediye Başkanı İhsan Alyanak tarafından İzmir Büyükşehir Belediyesi bünyesinde kurulmuş bir süpermarket zinciridir. İlk olarak "Tansa" (Tanzim Satış'ın kısaltması) adıyla, tüketicilere uygun fiyatlı et, meyve, sebze ve kömür sağlamak amacıyla kurulmuştur. İlk mağaza İzmir Alsancak'ta açılmıştır.

1976 yılında Belediye bünyesinde "Tanzim Satışlar Müdürlüğü" kurulmuştur. 1978'de ucuz mal tedariki için "Tansa" adında bir şirket oluşturulmuş ancak 1983 yılında askeri yönetim tarafından lağvedilmiştir. 1984 yılına gelindiğinde mağaza sayısı 26'ya ulaşmış ve şirketleşme fikri ortaya çıkmıştır.

15 Aralık 1986 tarihinde "Tansaş İzmir Büyükşehir Belediyesi İç ve Dış Ticaret A.Ş." kurulmuştur. 1994 yılında 86 şubeye (74'ü İzmir'de, 12'si ilçelerde) ulaşmıştır. 1996 yılında İzmir Büyükşehir Belediyesi, Tansaş hisselerinin %32,98'ini halka açmış ve şirket Türkiye'nin ikinci büyük süpermarket zinciri haline gelmiştir.

1999 yılında Tansaş'ın tüm hisseleri Doğuş Grubu tarafından satın alınmıştır. 2002 yılında Uyum Market ve Macrocenter'ı satın almıştır. 10 Kasım 2005 tarihinde Doğuş Holding, Tansaş'ı Migros'a satmış ve birleşme 27 Ekim 2006'da tamamlanmıştır. 2006 sonu itibarıyla Tansaş'ın 270 mağazası bulunmaktaydı.

2011 yılında iç genişleme stratejisi sona ermiş ve Ege ve Akdeniz bölgeleri dışındaki Tansaş mağazaları Migros mağazalarına dönüştürülmüştür. Migros'un Anadolu Grubu'na satılmasının ardından Migros ve Tansaş markaları tek çatı altında birleştirilmiş ve Tansaş market zinciri 2016 yılında resmen feshedilmiştir.

Ocak 2024 tarihinde Tansaş markası "gross concept" (toptan satış) konseptiyle yeniden başlatılmıştır. Şu anda Tansaş, İstanbul ve Sakarya'da faaliyet göstermektedir.`,
   boycottReason: `Tansaş'ın boykot edilmesinin temel nedeni, şirketin Migros Ticaret A.Ş. bünyesinde faaliyet göstermesi ve Migros'un boykot edilen bir marka olmasıdır. Tansaş, 2006 yılında Migros tarafından satın alınmış ve 2015 yılında Anadolu Grubu'nun Migros'u satın almasının ardından Migros ile birleştirilmiştir.

Migros'un boykot edilmesinin nedeni, İsviçre merkezli ana şirketinin piyanist Fazıl Say ile ilgili aldığı karardır. Fazıl Say'ın İsrail'in Gazze'ye karşı işlediği soykırım suçuna dair Türkiye Cumhuriyeti Cumhurbaşkanı Erdoğan'ın politikasını desteklediğini ifade etmesinin ardından İsviçre Migros, sanatçının konserlerini iptal etmiş ve bu sözleri "kabul edilemez" bulduğunu açıklamıştır.

Tansaş'ın Migros'a bağlı olması ve Migros markası altında faaliyet göstermesi nedeniyle, Migros'un boykot edilmesi Tansaş'ı da kapsamaktadır. 2024 yılında yeniden başlatılan Tansaş markası da Anadolu Grubu bünyesinde Migros ile entegre bir şekilde faaliyet gösterdiği için boykot listelerine dahil edilmiştir.`,
  },
  {
   name: "Rewe",
   slug: "rewe",
   foundedYear: 1927,
   ctgry: "Süpermarket",
   founder: "",
   owner: "Rewe Group",
   country: "Almanya",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/rewe.webp",
   isBoycotted: "boykot",
   website: "https://www.rewe.de/",
   description: `Rewe, Almanya'da faaliyet gösteren bir süpermarket zinciridir ve Rewe Group'un ana markasıdır. Genel merkezi Köln'de bulunmaktadır. İsmi "Revisionsverband der Westkauf-Genossenschaften" (Westkauf Kooperatifleri Denetim Birliği) kısaltmasından gelmektedir.

Yaklaşık 3.300 mağaza ile Rewe, Almanya'nın Edeka'dan sonra ikinci büyük gıda perakendecisidir. Şirket, Ober-Rosbach'ta merkez depo ve yönetim binasına sahiptir.

2011 yılında Rewe, Frankfurt am Main'den başlayarak Almanya genelinde ev teslimat hizmeti başlatmıştır. Bu girişim, Rewe'yi Almanya'da online gıda ürünleri dağıtımında öncü bir marka haline getirmiştir. 2015 yılı itibarıyla şirket, online hizmetlere daha fazla yatırım yapmayı planlamıştır.

Rewe, çeşitli özel marka ürünleri sunmaktadır: "ja!" (uygun fiyatlı), "REWE Beste Wahl" (normal fiyatlı), "REWE Feine Welt" (yüksek fiyatlı, özel ürünler), "REWE Bio" (organik), "REWE Bio + vegan" (organik ve vegan), "REWE Regional" (yerel ürünler) ve "REWE to go". Şirket, 2020-2021 sezonu sonuna kadar Bundesliga kulübü 1. FC Köln'ü sponsor etmiştir.`,
   boycottReason: `Rewe'nin boykot edilmesinin temel nedeni, şirketin Almanya merkezli yabancı sermayeli bir marka olmasıdır. Rewe, yerel ekonomiyi desteklememesi ve milli sermaye ile işletilmemesi nedeniyle boykot listelerine dahil edilmiştir.

Yabancı sermayeli ve uluslararası markalar yerine, yerel ve milli sermaye ile işletilen market zincirlerini tercih etmek, ülke ekonomisine daha fazla katkı sağlamak ve yerli işletmeleri desteklemek açısından önemlidir. Alternatif ürünlere bakınız.`,
  },
  {
   name: "Netto",
   slug: "netto",
   foundedYear: 1928,
   ctgry: "Süpermarket",
   founder: "Michael Schels",
   owner: "Edeka",
   country: "Almanya",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "bim",
    "cagri",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/netto.svg",
   isBoycotted: "boykot",
   website: "https://www.netto-online.de/",
   description: `Netto Marken-Discount (kısaca Netto veya eski adıyla Plus), Almanya merkezli bir indirim süpermarket zinciridir. Şirket, Alman süpermarket kooperatifi Edeka Group'a aittir. Netto, Almanya'nın güney ve batı bölgelerinde faaliyet göstermektedir.

Şirket, 1928 yılında Regensburg'da Michael Schels tarafından bir gıda toptancısı olarak kurulmuştur. İlk perakende şubesi 1971 yılında Beilngries'de SuDi (Super Discount) adıyla açılmıştır. 1983 yılına kadar yeni şubeler açılmaya devam etmiştir.

Netto indirim konseptinin geliştirilmesiyle birlikte, 1983 yılında Regensburg'da ilk Netto market açılmıştır. Mevcut 50 SuDi şubesi 1990 yılına kadar yeni konsepte dönüştürülmüştür. 2004 yılında şirket 1.000 mağazaya ulaşmıştır. 2009 yılında agresif bir genişleme stratejisiyle 4.000'den fazla mağazaya ulaşarak Almanya'nın en büyük indirim marketi haline gelmiştir.

2009 yılında Edeka Group, Plus süpermarket zincirini satın almış ve mağazalarını Netto süpermarketlerine dönüştürmüştür. Netto, Aldi ve Lidl'den farklı olarak, tanınmış şirketler tarafından üretilen kendi markaları yerine, bilinen markaları düşük fiyatlarla sunarak rakiplerinden ayrışmaktadır.

2022 yılı itibarıyla Netto, Almanya genelinde 4.270 şubeye sahiptir. 2020 yılında şirket, 14,6 milyar avro gelir elde etmiş ve yaklaşık 84.000 çalışanı bulunmaktadır. Genel merkezi Maxhütte-Haidhof, Almanya'da bulunmaktadır.`,
   boycottReason: `Netto'nun boykot edilmesinin temel nedeni, şirketin Almanya merkezli yabancı sermayeli bir marka olmasıdır. Netto, yerel ekonomiyi desteklememesi ve milli sermaye ile işletilmemesi nedeniyle boykot listelerine dahil edilmiştir.

Yabancı sermayeli ve uluslararası markalar yerine, yerel ve milli sermaye ile işletilen market zincirlerini tercih etmek, ülke ekonomisine daha fazla katkı sağlamak ve yerli işletmeleri desteklemek açısından önemlidir. Alternatif ürünlere bakınız.`,
  },
  {
   name: "Penny",
   slug: "penny",
   foundedYear: 1973,
   ctgry: "Süpermarket",
   founder: "Leibbrand Gruppe",
   owner: "Rewe Group",
   country: "Almanya",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/penny.png",
   isBoycotted: "boykot",
   website: "https://www.penny.eu/",
   description: `PENNY Markt GmbH, Almanya merkezli bir indirim marketleri zinciridir. Şirket, 1973 yılında Leibbrand Gruppe tarafından kurulmuş olup günümüzde Rewe Group'un bir parçasıdır. Şirketin merkezi Köln'de yer almaktadır.

Penny, Almanya'nın önde gelen indirim süpermarket zincirlerinden biridir. 2015 yılı itibarıyla Penny, Almanya dışında Avusturya, Çekya, İtalya, Macaristan ve Romanya olmak üzere altı ülkede faaliyet göstermekte ve toplam 3.550 mağazaya sahiptir.

2010 yılı itibarıyla şirket, 10,3 milyar avro gelir elde etmiş ve yaklaşık 43.773 çalışanı bulunmaktadır. Şirketin genel müdürü Alain Caparros'dur. Penny, Rewe Group bünyesinde faaliyet gösteren önemli bir marka olarak Avrupa perakende pazarında önemli bir konuma sahiptir.`,
   boycottReason: `Penny'nin boykot edilmesinin temel nedeni, şirketin Almanya merkezli yabancı sermayeli bir marka olmasıdır. Penny, yerel ekonomiyi desteklememesi ve milli sermaye ile işletilmemesi nedeniyle boykot listelerine dahil edilmiştir.

Yabancı sermayeli ve uluslararası markalar yerine, yerel ve milli sermaye ile işletilen market zincirlerini tercih etmek, ülke ekonomisine daha fazla katkı sağlamak ve yerli işletmeleri desteklemek açısından önemlidir. Alternatif ürünlere bakınız.`,
  },
  {
   name: "Edeka",
   slug: "edeka",
   foundedYear: 1898,
   ctgry: "Süpermarket",
   founder: "Edeka Group",
   owner: "Spar Handels-AG",
   country: "Almanya",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/edeka.png",
   isBoycotted: "boykot",
   website: "https://www.edeka.de/",
   description: `Edeka, Almanya merkezli bir süpermarket kooperatifidir ve Almanya'nın en büyük gıda perakende zinciridir. Şirket, 1898 yılında kurulmuş olup kooperatif yapısında faaliyet göstermektedir. Edeka, Almanya genelinde binlerce mağazaya sahiptir ve Netto Marken-Discount gibi diğer markaların da sahibidir.

Edeka, bağımsız perakendecilerin bir araya gelmesiyle oluşan bir kooperatif yapısına sahiptir. Şirket, Almanya'nın en büyük gıda perakendecisi konumundadır ve Rewe'den sonra ikinci sırada yer alan Netto'nun da sahibidir. Edeka, Almanya genelinde geniş bir mağaza ağına sahiptir ve çeşitli formatlarda süpermarket ve hipermarket işletmektedir.

Edeka Group, Almanya'nın en büyük perakende gruplarından biridir ve çeşitli markalar altında faaliyet göstermektedir. Şirket, Almanya'nın gıda perakende pazarında önemli bir paya sahiptir.`,
   boycottReason: `Edeka'nın boykot edilmesinin temel nedeni, şirketin Almanya merkezli yabancı sermayeli bir marka olmasıdır. Edeka, yerel ekonomiyi desteklememesi ve milli sermaye ile işletilmemesi nedeniyle boykot listelerine dahil edilmiştir.

Yabancı sermayeli ve uluslararası markalar yerine, yerel ve milli sermaye ile işletilen market zincirlerini tercih etmek, ülke ekonomisine daha fazla katkı sağlamak ve yerli işletmeleri desteklemek açısından önemlidir. Alternatif ürünlere bakınız.`,
  },
  {
   name: "Coop",
   slug: "coop",
   foundedYear: 1969,
   ctgry: "Süpermarket",
   founder: "Verband Schweizerischer Konsumvereine",
   owner: "Kooperatif (Üyelere ait)",
   country: "İsviçre",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/coop.png",
   isBoycotted: "boykot-degil",
   website: "https://www.coop.ch/en/",
   description: `Coop, İsviçre'deki en büyük perakende ve toptancılık mağazalarından biridir. Şirket, 1969 yılında İsviçre Tüketici Dernekleri Birliği (Verband Schweizerischer Konsumvereine) tarafından kurulmuştur. Merkezi İsviçre'nin Basel şehrindedir. Coop, kooperatif yapısında faaliyet göstermekte ve üyelerine aittir.

Coop'un kökeni, 1850'lerde Jean Jeny tarafından İsviçre'ye getirilen tüketici kooperatifleri kavramına dayanmaktadır. İsviçre Tüketici Dernekleri Birliği, 11 Ocak 1890 tarihinde Olten'de kurulmuştur. 1969 yılında bu birlik Coop Suisse adını almıştır.

Coop, perakendenin yanı sıra Coop restoranları, Interdiscount elektronik mağazaları, Fust beyaz eşya mağazaları, Livique mobilya mağazaları, Jumbo yapı marketleri, ithal parfümeriler, Coop Vitality eczaneleri, Coop benzin istasyonları ve 3 otel gibi çeşitli iş kollarında faaliyet göstermektedir.

Yaklaşık 86.000 çalışanı olan kooperatif, İsviçre'de 2.250'den fazla satış noktasında 1.853.207 m² satış alanı ile faaliyet göstermektedir. 2017 mali yılında 29,21 milyar İsviçre Frangı satış gerçekleştirmiştir. Coop, Transgourmet Holding AG'nin satın alınmasından sonra Avrupa'da self-servis ve toptan teslimat sektöründe ikinci sıraya yükselmiştir.

Coop kooperatifinin Alman şirketi Co op veya İtalyan grubu Coop Italia ile hiçbir bağlantısı yoktur. İtalyan Coop'un Filistin dayanışması adına İsrail ürünlerini satmama kararı, İsviçre Coop'unu etkilememektedir.`,
  },
  {
   name: "Billa",
   slug: "billa",
   foundedYear: 1953,
   ctgry: "Süpermarket",
   founder: "Karl Wlaschek",
   owner: "REWE Group",
   country: "Avusturya",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/billa.png",
   isBoycotted: "boykot",
   website: "https://www.billa.at/",
   description: `BILLA, Avusturya merkezli Avrupa süpermarket zinciridir. Şirket, 1953 yılında Karl Wlaschek tarafından Viyana'nın Margareten bölgesinde WKW (Warenhandel Karl Wlaschek) adıyla bir indirim parfüm mağazası olarak kurulmuştur. İsmi Almanca "BILliger LAden" (ucuz mağaza) kelimelerinin birleşiminden gelmektedir.

1960 yılına gelindiğinde WKW'nin Avusturya'da 45 mağazası bulunmaktaydı. 1961 yılında zincir "Billa" adını almış ve gıda satışına başlamış, self-servis sistemine geçmiştir. 1965 yılında şirket 109 mağazaya ulaşmıştır. 1996 yılında Billa, Almanya merkezli REWE Group tarafından satın alınmıştır.

Billa, Orta, Doğu ve Güneydoğu Avrupa'da faaliyet göstermektedir. Şu anda Avusturya, Çek Cumhuriyeti, Bulgaristan ve Slovakya olmak üzere 4 ülkede mağazaları bulunmaktadır. 2014 yılı itibarıyla Billa'nın Avusturya'da 1.102, Çek Cumhuriyeti'nde 271, Bulgaristan'da 167 ve Slovakya'da 145 olmak üzere toplam 3.645 mağazası bulunmaktadır.

2014 yılı itibarıyla şirket, 13,02 milyar avro gelir elde etmiş ve yaklaşık 76.174 çalışanı bulunmaktadır. Genel merkezi Wiener Neudorf, Aşağı Avusturya, Avusturya'da bulunmaktadır. Macaristan'daki mağazalar Spar'a satılmıştır.`,
   boycottReason: `Billa'nın boykot edilmesinin temel nedeni, şirketin Almanya merkezli REWE Group'a ait olması ve yabancı sermayeli bir marka olmasıdır. Billa, yerel ekonomiyi desteklememesi ve milli sermaye ile işletilmemesi nedeniyle boykot listelerine dahil edilmiştir.

Yabancı sermayeli ve uluslararası markalar yerine, yerel ve milli sermaye ile işletilen market zincirlerini tercih etmek, ülke ekonomisine daha fazla katkı sağlamak ve yerli işletmeleri desteklemek açısından önemlidir. Alternatif ürünlere bakınız.`,
  },
  {
   name: "Tesco",
   slug: "tesco",
   foundedYear: 1924,
   ctgry: "Süpermarket",
   founder: "Jack Cohen",
   owner: "Halka açık",
   country: "İngiltere",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/tesco.png",
   isBoycotted: "boykot",
   website: "https://www.tesco.com/",
   description: `Tesco, İngiltere merkezli çok uluslu bir gıda ve genel ürün perakende zinciridir. Şirket, 1924 yılında Jack Cohen tarafından kurulmuştur. Jack Cohen, T.E. Stockwell'den büyük miktarda çay satın almış ve müşterilerinin isimlerinin ilk üç harfi (TES) ile kendi soyadının ilk iki harfini (CO) birleştirerek "TESCO" marka adını oluşturmuştur.

Tesco, İngiltere'nin en büyük süpermarket zinciridir ve genel merkezi Cheshunt, İngiltere'de bulunmaktadır. Dünya genelinde Walmart, Carrefour (ABD ve Fransa) ve diğerlerinden sonra gıda perakende zincirleri arasında 4. sırada yer almaktadır.

2003 yılında Tesco, Alman süpermarket zincirleri Aldi ve Lidl üzerinden Avrupa'ya ürün göndermeye başlamıştır. Şirketin rekabet avantajı, ürünlerinin kalitesi ve fiyatından kaynaklanmaktadır. 1924'ten 2008'e kadar Tesco, İngiltere'de 1.988 süpermarket kurmuş ve 240.000 kişi istihdam etmiştir.

2014 yılı itibarıyla Tesco, 500.000'den fazla çalışanı bulunmaktadır. 2007 yılında şirketin öz kaynağı 46,611 milyar dolar olarak gerçekleşmiştir. Tesco, İngiltere ve dünya genelinde geniş bir mağaza ağına sahiptir.`,
   boycottReason: `Tesco'nun boykot edilmesinin temel nedeni, şirketin İngiltere merkezli yabancı sermayeli bir marka olmasıdır. Tesco, yerel ekonomiyi desteklememesi ve milli sermaye ile işletilmemesi nedeniyle boykot listelerine dahil edilmiştir.

Yabancı sermayeli ve uluslararası markalar yerine, yerel ve milli sermaye ile işletilen market zincirlerini tercih etmek, ülke ekonomisine daha fazla katkı sağlamak ve yerli işletmeleri desteklemek açısından önemlidir. Alternatif ürünlere bakınız.`,
  },
  {
   name: "Actioniq",
   slug: "actioniq",
   foundedYear: 2014,
   ctgry: "Süpermarket",
   founder: "Tasso Argyros ve Nitay Joffe",
   owner: "Uniphore",
   country: "ABD",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/actioniq.jpg",
   isBoycotted: "boykot",
   website: "https://www.actioniq.com/",
   description: `ActionIQ, müşteri veri platformu ve müşteri deneyimi teknolojileri alanında faaliyet gösteren bir teknoloji şirketidir. Şirket, Uniphore'nin bir parçasıdır ve müşteri verilerini yönetmek ve analiz etmek için çözümler sunmaktadır.`,
   boycottReason: `ActionIQ'nun boykot edilmesinin temel nedeni, şirketin LinkedIn üzerinden yaptığı açıklamada Hamas'ı terörist olarak adlandırması ve İsrail'in arkasında olduklarını açıkça belirtmesidir. ([linkedin.com](https://www.linkedin.com/posts/actioniq_actioniq-is-deeply-saddened-by-the-horrific-activity-7118339957483528192-Nyn7/))

Şirket, yaptığı basın açıklamasında İsrail'e maddi olarak destek vereceklerini de açıklamıştır. ActionIQ, Hamas'ın İsrail'e yönelik saldırılarını kınadığını ve İsrail'deki çalışanlarının aileleri, arkadaşları ve duygusal bağları olduğunu belirterek İsrail'i desteklediğini açıkça ifade etmiştir.

Bu durum, ActionIQ'yu doğrudan boykot listesine koymuştur. Şirketin İsrail'i destekleyen açık tutumu ve İsrail'e maddi destek sözü vermesi nedeniyle ActionIQ markası boykot edilmektedir.`,
  },
  {
   name: "Denner",
   slug: "denner",
   foundedYear: 1860,
   ctgry: "Süpermarket",
   founder: "Heinrich Reiff-Schwarz",
   owner: "Migros Kooperatifleri Federasyonu",
   country: "İsviçre",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/denner.png",
   isBoycotted: "boykot",
   website: "https://www.denner.ch/",
   description: `Denner, İsviçre'de faaliyet gösteren bir indirim süpermarket zinciridir. Şirket, 1860 yılında Heinrich Reiff-Schwarz tarafından kurulmuş ve daha sonra Karl Schweri tarafından geliştirilmiştir. Denner, İsviçre'nin Migros ve Coop'tan sonra üçüncü büyük süpermarket zinciridir ve %11,4 pazar payına sahiptir.

1967 yılında Denner, Zürih'te İsviçre'nin ilk indirim marketini açmıştır. 1973 yılında ülkenin tütün kartelini kırmıştır. 2004 yılında 580 satış noktasından 1,8 milyar İsviçre Frangı'nın üzerinde satış gerçekleştirmiştir. 2005 yılında rakip indirim zinciri Pick Pay'ı satın almıştır.

Ocak 2007 tarihinde Migros, Denner'ın çoğunluk hissesini satın almış ve şirket o tarihten itibaren Migros Kooperatifleri Federasyonu'na aittir. Denner, 2004'te Aldi'nin ve 2009'da Lidl'ın pazara girişinden sonra bile indirim kategorisindeki lider rolünü başarıyla korumuştur.

2022 yılı itibarıyla Denner'ın toplam 860 mağazası bulunmaktadır: 591'i kendi mağazaları, 269'u "Denner Partner" adı altında franchise olarak işletilmektedir. Şirket, 2022 yılında 3,7 milyar İsviçre Frangı gelir elde etmiştir. Denner, 300'den fazla şarap çeşidiyle İsviçre'nin Coop'tan sonra ikinci büyük şarap satıcısıdır. Şirket, kendisini "perakendenin Robin Hood'u" olarak tanımlamakta ve müşterilere daha ucuz fiyatlar sunmak için mücadele ettiğini belirtmektedir.`,
   boycottReason: `Denner'ın boykot edilmesinin temel nedeni, şirketin 2007 yılından itibaren Migros Kooperatifleri Federasyonu'na ait olması ve Migros'un boykot edilen bir marka olmasıdır. Denner, Migros bünyesinde faaliyet göstermekte ve Migros markası altında yönetilmektedir.

Migros'un boykot edilmesinin nedeni, İsviçre merkezli ana şirketinin piyanist Fazıl Say ile ilgili aldığı karardır. Fazıl Say, sosyal medya hesabından yaptığı bir paylaşımda, "İsrail'in Gazze'lilere karşı işlediği soykırım suçuna dair Türkiye Cumhuriyeti Cumhurbaşkanı Erdoğan'ın izlediği politikayı doğru bulduğunu" ifade etmiştir. Bu açıklamanın ardından İsviçre Migros, sanatçının planlanan konserlerini iptal ettiğini ve bu sözleri "kabul edilemez" bulduğunu duyurmuştur.

Bu olay, ana şirketin tutumu nedeniyle Türkiye'deki Migros Ticaret A.Ş.'nin de kamuoyunda eleştirilmesine ve boykot edilmesine yol açmıştır. Denner'ın Migros'a ait olması ve Migros bünyesinde faaliyet göstermesi nedeniyle, Migros'un boykot edilmesi Denner'ı da kapsamaktadır. Bu nedenle Denner markası boykot listelerine dahil edilmiştir.`,
  },
  {
   name: "Cora",
   slug: "cora",
   foundedYear: 1974,
   ctgry: "Süpermarket",
   founder: "Louis Delhaize Group",
   owner: "Carrefour Group",
   country: "Belçika",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/cora.png",
   isBoycotted: "boykot",
   website: "https://www.cora.be/",
   description: `Cora, Belçika merkezli Louis Delhaize Group'a ait bir hipermarket zinciridir. Şirket, 1974 yılında Louis Delhaize Group tarafından Belçika'da üç Carrefour hipermarketinin satın alınmasıyla kurulmuştur. Bu ilk üç hipermarket, 1969 civarında Carrefour Group ve Delhaize Group arasında ortak girişim franchise olarak kurulmuştur.

Cora ismi, Yunan tanrıçası Persephone'den (Roma: Proserpina) esinlenilmiştir. Şirket, daha önce Fransa, Macaristan, Lüksemburg ve Romanya'da da faaliyet göstermiştir. Macaristan'daki hipermarketler 2011 yılında Auchan'a satılmış ve 2012 yazında devredilmiştir. Romanya'daki mağazalar Ekim 2023'te Carrefour tarafından satın alınmıştır.

2023 yılında Fransa'daki tüm Cora ve Smatch mağazaları Carrefour tarafından 1 milyar avro karşılığında satın alınmış ve Temmuz 2024'te satın alma tamamlanmıştır. Eylül-Kasım 2024 arasında Carrefour, Fransa'daki tüm Cora Hipermarketlerini Carrefour markası altında entegre etmiştir. Lüksemburg'daki tüm Cora ve Smatch mağazaları 2024 yılında E.Leclerc tarafından satın alınmıştır.

Nisan 2025'te Cora, Belçika'daki kalan yedi hipermarketini 2026 yılına kadar kapatacağını duyurarak faaliyetlerini sonlandırma sürecine girmiştir.`,
   boycottReason: `Cora'nın boykot edilmesinin temel nedeni, şirketin Fransa merkezli Carrefour Group'a ait olması ve Carrefour'un boykot edilen bir marka olmasıdır. Ayrıca Cora, Belçika merkezli yabancı sermayeli bir marka olması nedeniyle de boykot listelerine dahil edilmiştir.

Carrefour'un boykot edilmesinin nedeni, şirketin İsrail'deki faaliyetleri ve İsrail ordusuna verdiği destektir. Carrefour, İsrail'e büyük yatırımlar yaparak yeni mağazalar açmış ve İsrail ordusuna ücretsiz yardım sağladığını açıklamıştır. Ayrıca Carrefour, Filistin topraklarındaki gayrimeşru İsrail yerleşimlerinde şubeleri bulunan Yeinot Bitan zinciriyle işbirliği yapmaktadır.

Cora'nın Carrefour Group'a ait olması ve Carrefour bünyesinde faaliyet göstermesi nedeniyle, Carrefour'un boykot edilmesi Cora'yı da kapsamaktadır. Ayrıca yabancı sermayeli ve uluslararası bir marka olması nedeniyle yerel ekonomiyi desteklememesi de boykot nedenlerinden biridir.`,
  },
  {
   name: "Asda",
   slug: "asda",
   foundedYear: 1949,
   ctgry: "Süpermarket",
   founder:
    "Asquith Kardeşler (Peter ve Fred Asquith) ve Sör Noel Stockdale",
   owner: "TDR Capital (%67,5) ve  Muhsin İsa (%22,5) ve Walmart (%10)",
   country: "İngiltere",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/asda.png",
   isBoycotted: "boykot",
   website: "https://www.asda.com/",
   description: `Asda Stores Limited, yaygın olarak ASDA olarak bilinen, İngiltere merkezli bir süpermarket ve benzin istasyonu zinciridir. Genel merkezi Leeds, İngiltere'de bulunmaktadır. Şirket, 1949 yılında Associated Dairies and Farm Stores adıyla kurulmuştur.

1970'ler ve 1980'lerde Asda, Güney İngiltere'ye genişlemiş ve Allied Carpets, 61 büyük Gateway Supermarkets ve MFI gibi işletmeleri satın almıştır. 1990'larda şirket, süpermarket dışındaki işletmelerini satarak ana süpermarket operasyonlarına odaklanmıştır.

Asda, 1999 yılına kadar Londra Borsası'nda işlem görmüş, bu tarihte Walmart tarafından 6,7 milyar sterlin karşılığında satın alınmıştır. 2003-2014 yılları arasında Asda, Birleşik Krallık'ta pazar payına göre ikinci en büyük süpermarket zinciri konumundaydı, ancak daha sonra üçüncü sıraya düşmüştür. Ocak 2025 itibarıyla Birleşik Krallık'taki pazar payı %12,6'dır.

Şubat 2021'de Issa kardeşler ve TDR Capital, Asda'yı Walmart'tan satın almıştır. Anlaşma, Walmart'ın "hisse yatırımı" tutmasını, yönetim kurulunda bir koltuk bulundurmasını ve "devam eden ticari ilişki"yi içermektedir. Mart 2025 itibarıyla TDR Capital, Zuber Issa'nın %22,5 hissesini satın alarak şirketin çoğunluk hissesine sahiptir. Mohsin Issa %22,5 hissesini korumuş ancak Eylül 2024'te şirketi yönetmeyi bırakmıştır.

Asda, ana süpermarket işinin yanı sıra "Asda Money" markası altında beyaz etiket ödeme kartı sağlayıcısı olarak faaliyet göstermekte ve sigorta ve ödeme hizmetleri sunmaktadır. Ayrıca bir mobil sanal ağ operatörüne de sahiptir.`,
   boycottReason: `Asda'nın boykot edilmesinin temel nedeni, şirketin İngiltere merkezli yabancı sermayeli bir marka olmasıdır. Asda, yerel ekonomiyi desteklememesi ve milli sermaye ile işletilmemesi nedeniyle boykot listelerine dahil edilmiştir.

Yabancı sermayeli ve uluslararası markalar yerine, yerel ve milli sermaye ile işletilen market zincirlerini tercih etmek, ülke ekonomisine daha fazla katkı sağlamak ve yerli işletmeleri desteklemek açısından önemlidir. Alternatif ürünlere bakınız.`,
  },
  {
   name: "ADEG",
   slug: "adeg",
   foundedYear: 1951,
   ctgry: "Süpermarket",
   founder: "Bağımsız Tüccarlar Kooperatifi",
   owner: "REWE Group",
   country: "Avusturya",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/adeg.png",
   isBoycotted: "boykot",
   website: "https://www.adeg.at",
   description: `ADEG, Avusturya'da faaliyet gösteren bir süpermarket zinciridir. Şirket, 1951 yılında bağımsız tüccarlar kooperatifi tarafından kurulmuştur. ADEG, bağımsız perakendecilerin bir araya gelmesiyle oluşan bir kooperatif yapısına sahiptir.

ADEG, Avusturya'nın önde gelen süpermarket zincirlerinden biridir ve bağımsız perakendeciler için tedarik ve pazarlama hizmetleri sunmaktadır. Şirket, REWE Group bünyesinde faaliyet göstermektedir ve Avusturya genelinde geniş bir mağaza ağına sahiptir`,
   boycottReason: `ADEG'in boykot edilmesinin temel nedeni, şirketin Almanya merkezli REWE Group'a ait olması ve yabancı sermayeli bir marka olmasıdır. ADEG, yerel ekonomiyi desteklememesi ve milli sermaye ile işletilmemesi nedeniyle boykot listelerine dahil edilmiştir.

Yabancı sermayeli ve uluslararası markalar yerine, yerel ve milli sermaye ile işletilen market zincirlerini tercih etmek, ülke ekonomisine daha fazla katkı sağlamak ve yerli işletmeleri desteklemek açısından önemlidir. Alternatif ürünlere bakınız.`,
  },
  {
   name: "Macrocenter",
   slug: "macrocenter",
   foundedYear: 1996,
   ctgry: "Süpermarket",
   founder: "MacroCenter",
   owner: "Migros Ticaret A.Ş.",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/macrocenter.jpg",
   isBoycotted: "boykot",
   website: "https://www.macrocenter.com.tr/",
   description: `MacroCenter, Türkiye'ye ait bir markadır. 1996 yılında gurme ürünlere odaklanan bir süpermarket konseptiyle Türkiye'de kurulmuştur. 2003 yılında Türkiye'nin en büyük perakende gruplarından biri olan Migros Ticaret A.Ş. tarafından satın alınmıştır. Migros'un çatısı altında faaliyet göstermeye başlayan MacroCenter, premium hizmet anlayışıyla Türkiye'nin en seçkin süpermarket zincirlerinden biri haline gelmiştir.

2010'larda MacroCenter, Türkiye'de premium süpermarket segmentinde lider konuma gelmiştir. Gurme ürünlerin yanı sıra sağlıklı yaşam ürünleri, organik seçenekler ve özel ithal ürünlerle dikkat çekmektedir. 2020 ve sonrasında marka, dijitalleşme sürecine uyum sağlayarak online alışveriş ve eve teslim hizmetlerini geliştirmiştir. Ayrıca, sürdürülebilirlik projelerine önem vererek çevre dostu uygulamalarını artırmıştır.`,
   boycottReason: `Macrocenter'ın boykot edilmesinin temel nedeni, şirketin Migros Ticaret A.Ş. bünyesinde faaliyet göstermesi ve Migros'un boykot edilen bir marka olmasıdır. Macrocenter, Migros'un bir parçası olarak Migros markası altında yönetilmektedir.

Migros'un boykot edilmesinin nedeni, İsviçre merkezli ana şirketinin piyanist Fazıl Say ile ilgili aldığı karardır. Fazıl Say, sosyal medya hesabından yaptığı bir paylaşımda, "İsrail'in Gazze'lilere karşı işlediği soykırım suçuna dair Türkiye Cumhuriyeti Cumhurbaşkanı Erdoğan'ın izlediği politikayı doğru bulduğunu" ifade etmiştir. Bu açıklamanın ardından İsviçre Migros, sanatçının planlanan konserlerini iptal ettiğini ve bu sözleri "kabul edilemez" bulduğunu duyurmuştur.

Bu olay, ana şirketin tutumu nedeniyle Türkiye'deki Migros Ticaret A.Ş.'nin de kamuoyunda eleştirilmesine ve boykot edilmesine yol açmıştır. Macrocenter'ın Migros'a ait olması ve Migros bünyesinde faaliyet göstermesi nedeniyle, Migros'un boykot edilmesi Macrocenter'ı da kapsamaktadır. Bu nedenle Macrocenter markası boykot listelerine dahil edilmiştir.`,
  },
  {
   name: "File",
   slug: "file",
   foundedYear: 2015,
   ctgry: "Süpermarket",
   founder: "Bim",
   owner: "Bim",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/file.png",
   isBoycotted: "boykot-degil",
   website: "https://www.file.com.tr/",
   description: `File Market (Dosya Pazarı Perakende A.Ş.), 2015 yılında Bim tarafından kurulan ve Bim'e ait bir Türk perakende şirketidir. Şirket 2025 yılı itibarıyla Türkiye'de 32 ilde 262 süpermarket işletmektedir.

Bim, 2015 yılında Türkiye indirim mağazacılığı sektörünün önde gelen şirketlerinden biri olma unvanını elde ettikten sonra süpermarket kategorisine yatırım yapmak istedi ve File'yi kurdu. Şirketin ilk mağazası İstanbul Başakşehir'deki Prestige Alışveriş Merkezi'nde açıldı.

Bim'in geleneksel indirim modelinden farklı olarak File, daha geniş bir ürün yelpazesi ve daha modern bir mağaza konsepti sunmaktadır. Özel indirim günleri sunmak yerine, her gün düşük fiyatlandırma stratejisi izlemektedir. Her mağazada genellikle 4.000 ila 4.500 farklı gıda, kişisel bakım ve ev temizlik ürünü bulunmaktadır.

2021 yılında şirket "File Market" adlı bir market teslimat uygulaması geliştirmiştir. Nisan 2021 itibarıyla şirketin Türkiye'de 135 şubesi ve yaklaşık 4.000 çalışanı bulunmaktadır.`,
  },
  {
   name: "Seç Market",
   slug: "sec-market",
   foundedYear: 2014,
   ctgry: "Süpermarket",
   founder: "Bizim Toptan ve Yıldız Holding (Ortak girişim)",
   owner: "Bizim Toptan (%90) ve Yıldız Holding (%10)",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/sec.png",
   isBoycotted: "boykot-degil",
   website: "https://www.secmarket.com.tr/",
   description: `Seç Marketçilik A.Ş. veya yaygın adıyla Seç Market, Türkiye merkezli bir market zinciridir. Şirket, 2014 yılında Bizim Toptan ve Yıldız Holding ortak girişimi olarak kurulmuştur. Genel merkezi İstanbul'un Üsküdar ilçesinde yer almaktadır.

Seç Market, "Mahallenizin Marketi" sloganıyla faaliyet göstermektedir. 2020 yılında anonim şirket statüsüne geçmiştir. 2021 yılında 1500. mağazasını açmıştır. 2023 yılı itibarıyla Seç Market'in Türkiye genelinde 2.324 mağazası bulunmaktadır.

Şirket, mahalle marketi konseptiyle Türkiye genelinde yaygın bir ağa sahiptir ve müşterilere yakın çevrelerinde kolay erişilebilir alışveriş imkanı sunmaktadır.`,
  },
  {
   name: "Bizim Toptan",
   slug: "bizim",
   foundedYear: 2001,
   ctgry: "Süpermarket",
   founder: "Bilinmiyor",
   owner: "Yıldız Holding (ortaklık)",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/bizim.svg",
   isBoycotted: "boykot",
   website: "https://www.bizimtoptan.com.tr/",
   description: `Bizim Toptan, Türkiye'nin Cash & Carry (Organize Toptan Ticaret) sektöründe mağaza sayısı bakımından en büyük ve erişilebilirlik açısından en yaygın şirketidir. Kuruluş çalışmaları 2001 yılında tamamlanmış ve 2002 yılında 14 mağaza ile faaliyete başlamıştır. 2023 yılı itibarıyla Türkiye genelinde 71 ilde 180 mağazası bulunmaktadır.

Şirket, gıda, alkolsüz içecekler, tütün ürünleri, temizlik ürünleri, kişisel bakım ürünleri ve kağıt ürünleri gibi ana ürün kategorilerinde faaliyet göstermektedir. Türkiye'de faaliyet gösteren tanınmış ulusal ve uluslararası markaların toptan ürünlerini satmaktadır. Müşteri portföyü toptancılar, tüccarlar, bakkallar, marketler, süpermarketler, özel perakendeciler, oteller, restoranlar ve kafelerden oluşmaktadır.

Ülke genelinde yaklaşık 13.000 farklı ürün çeşidi sunan Bizim Toptan, cash&carry marketlerinde mağaza başına ortalama 3.000 stok kalemi bulundurmaktadır. Ürün portföyü markalı ürünler ve özel marka ürünler olarak gruplandırılabilir, SKU'ların yaklaşık %95'i markalı, %5'i özel marka ürünlerden oluşmaktadır.

Temmuz 2014'te Bizim Toptan, ortaklık tedarik sistemini satın almış ve sektörde üye marketlerin tedarikini üstlenen öncü ve tek şirket haline gelmiştir. Yıldız Holding ile güçlü bir ortaklık yapısına sahiptir. 2011 yılında halka açılmış ve hisseleri Borsa İstanbul'da işlem görmeye başlamıştır. Şirket, nakit üreten büyüme stratejisi izlemekte ve ülke genelinde varlığını sürekli genişletmektedir.`,
   boycottReason: `Bizim Toptan'ın boykot edilmesinin temel nedeni, Ülker Grubu ile olan bağlantısı ve Ülker Grubu'nun Starbucks ile olan ticari ilişkisidir. Yahya Ülker'in Starbucks'ı ziyaret etmesi ve Şok marketlerinde (Ülker Grubu'na bağlı) Starbucks ürünlerine özel alanlar ayırarak satışını yapmaya devam etmesi, birçok kesim tarafından tepkiyle karşılanmıştır.

Ülker'in İsrail yanlısı tutum sergileyen Starbucks ile bağlarını koparmaması sebebiyle eleştirilmektedir. Bu durum sosyal medyada büyük yankı bulmuştur. 7 Şubat 2024 tarihinde Twitter üzerinden başlatılan #ŞokBoykot kampanyası, Ülker Grubu'nun bu işbirliğini sürdürmesi nedeniyle daha da büyümüştür.

Tüketiciler, Starbucks'ın Filistin'deki duruma sessiz kaldığı gerekçesiyle, bu markaya destek veren firmalara karşı boykot çağrısında bulunmaktadır. Ülker ise bu eleştiriler karşısında, ziyaretin boykot öncesi olduğunu ve haksız bir algı yaratıldığını savunsa da, toplumsal tepkiler sürmektedir.

Sonuç olarak, Yahya Ülker'in Starbucks'a gerçekleştirdiği ziyaret ve Ülker Grubu'nun bu markayla ticari ilişkisini sürdürmesi, Bizim Toptan'ın boykot edilmesine yol açan temel sebeplerden biridir.`,
  },
  {
   name: "Tespo",
   slug: "tespo",
   foundedYear: 1989,
   ctgry: "Süpermarket",
   founder: "Ahmet Hamdi Ayker",
   owner: "Aytaş Grubu",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/tespo.webp",
   isBoycotted: "boykot-degil",
   website: "https://tespo.com.tr/",
   description: `Tespo Tüketim Malları Tic. ve San. A.Ş. veya yaygın adıyla Tespo, Türkiye merkezli bir market zinciridir. Şirketin kökeni, kurucu Ahmet Hamdi Ayker'in 1922 yılında İzmir'in Şirinyer (eski adıyla Buca-Kızılçullu) semtinde açtığı bakkal dükkanına dayanmaktadır. Ahmet Hamdi Ayker, Kurtuluş Savaşı'na yedek subay olarak katılmış, savaş bitiminde birikmiş asker maaşlarını sermaye yaparak ticaret hayatına başlamıştır.

1926 yılında bakkal dükkanını Anafartalar caddesine taşıyan Ayker, 1930 yılında perakendecilik işini gıda ve ihtiyaç maddeleri toptancılığına çevirmiştir. 1951 yılında müşterilerden alınan siparişlerin adreslerine teslim edilmesi ile Türkiye'de ilk kez servis toptancılığı işi başlatılmıştır. 1956 yılında "Ahmet Hamdi Ayker ve Oğulları Kolektif Şirketi" adını almıştır.

1964 yılında IBM marka makineler ile Türkiye'de gıda toptancılığı işinde ilk kez bilgisayar kullanımına başlanmıştır. 1969 yılında Bornova'da inşa edilen depoda, Ege Bölgesi için bir ilk olan paletli mal depolama ve sevkiyatına başlanmıştır.

1989 yılında kuruluş çalışmaları tamamlanan Tespo, Temmuz ayında Türkiye'nin ilk Cash&Carry mağazasını Marmaris'te açmış ve barcode'lu ürün satışı ilk kez bu mağazada yapılmıştır. Şirket, "Lider markalar, toptan fiyatlar!" sloganıyla faaliyet göstermektedir.

1998 yılında İzmir Çiğli Atatürk Organize Sanayi Bölgesi'ndeki yeni tesislerine taşınmıştır. 2002 yılında adepo.com web sitesi ile internette tüketicilere tüketim malları satışı ve teslimatı yapmaya başlamıştır. 2011 yılında Buca Kaynaklar'daki yeni merkez binasına taşınmıştır.

2021 yılı itibarıyla Tespo'nun Türkiye genelinde 22 mağazası bulunmaktadır. Mağazalar İzmir (Bornova, Osmangazi, Eski İzmir), İstanbul (Kartal, Küçükköy, Beylikdüzü, Arnavutköy), Marmaris, Bursa, Kuşadası, Denizli, Fethiye, Antalya, Alanya, Side, Eskişehir, Balıkesir, Samsun, Bodrum ve Aydın'da yer almaktadır. Genel merkezi İzmir'in Buca ilçesinde bulunmaktadır. Şirket, Aytaş Grubu'na aittir ve yaklaşık 500 çalışanı bulunmaktadır.`,
  },
  {
   name: "Onur Market",
   slug: "onur-market",
   foundedYear: 1996,
   ctgry: "Süpermarket",
   founder: "Özen Grup",
   owner: "Özen Grup",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "yunus-market",
   ],
   img: "/onur.jpg",
   isBoycotted: "boykot-degil",
   website: "https://onurmarket.com/",
   description: `Onur Market, Özen Grup bünyesinde faaliyet gösteren bir süpermarket zinciridir. Özen Grup'un 42 yıllık ticari deneyimi ile 1996 yılında ilk süpermarket formatındaki mağaza "Onur" adıyla açılmıştır. İlk Onur Market, İstanbul'un 4. Levent bölgesinde faaliyete başlamıştır.

Şu anda Onur Market zinciri İstanbul, Trakya ve Bursa'da 160 mağaza işletmektedir. Toplam 125.000 m² satış alanına sahip olan şirket, 5.000'den fazla personel istihdam etmekte ve yılda 70 milyondan fazla müşteriye hizmet vermektedir. Şirketin lojistik alanı 40.200 m²'dir.

Özen Grup bünyesinde Onur Market'in yanı sıra Onursal Tarım, Onurca, Özen Gross, Özen Depolama, Özen Gayrimenkul, Filoport, İnaş Yapı ve Ayşe Hatun Özen Eğitim ve Dayanışma Vakfı (AHEV) gibi şirketler ve kuruluşlar bulunmaktadır. Onursal Tarım, ülke genelinde tesisleri ve toplama ağı ile "çiftlikten sofraya" yaklaşımıyla taze ve kaliteli meyve-sebze garantisi sunmaktadır. Onurca Rapata markası ise taze ve lezzetli unlu mamuller sunmaktadır.

Özen Gross, grubun toptan fiyatına market konseptindeki mağazalarının markasıdır. Özen Depolama, Özen Gayrimenkul, Filoport ve İnaş Yapı şirketleri de grubun depo, lojistik ve yatırım faaliyetlerini organize eden diğer grup şirketleridir. Özen Grup, alanında uzman ve deneyimli çalışanları ile günden güne gelişerek büyümeye devam etmektedir.`,
  },
  {
   name: "Kim Market",
   slug: "kim-market",
   foundedYear: 1997,
   ctgry: "Süpermarket",
   founder: "Ersan Kardeşler (Ergin, Erol, Ercan Ersan)",
   owner: "Ersan Kardeşler",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/kim.png",
   isBoycotted: "boykot-degil",
   website: "https://www.kimmarket.com/kurumsal/index.html",
   description: `Kim Market, Ersan kardeşler (Ergin, Erol ve Ercan Ersan) tarafından kurulmuş bir süpermarket zinciridir. Ersan kardeşler, Bitlis'te doğmuş ve 1986 yılında İstanbul Şirinevler'de küçük bir bakkal dükkanı açarak ticaret hayatına başlamışlardır. Çalışkanlıkları ve iş zekaları sayesinde 1997 yılında kendi sermayeleriyle "Kim Market"i kurmuşlardır.

Şirket, 1997 yılında ilk mağazasını açarak faaliyetlerine başlamıştır. Kuruluşundan itibaren Kim Market, süpermarket formatında müşterilere hizmet vermektedir. Bu konseptteki mağazalar ortalama 710 m² alana sahiptir ve gıda, gıda dışı, şarküteri ve meyve-sebze ürünleri satmaktadır. İlk hipermarket, 800 m² büyüklüğünde Güneşli'de açılmış ve bu, mevcut Kim Market zincirinin ilk halkası olarak kabul edilmektedir.

1997-2007 yılları arasında şirketin ortaklık yapısı genişlemiş ve mağaza sayısı 30'u aşmıştır. 2002 yılında şirket, limited şirket statüsünden anonim şirket statüsüne geçmiştir. 2007 yılında yapılan hisse devri ile şirketin tüm hisseleri Ersan kardeşlerine devredilmiştir.

2008 yılında bölgesel bir zincir olma hedefiyle Kim Market, İstanbul dışına çıkarak Tekirdağ, Edirne ve Kocaeli'de mağazalar açmıştır. 2008-2009 yıllarında İzmir, Tekirdağ, Edirne ve Kocaeli'de mağazalar açarak İstanbul dışına genişlemiştir. 2014 yılında İzmir'deki yerel market zinciri Denmar'dan 11 şube satın alarak ulusal bir zincir olma yolunda önemli bir adım atmıştır. Aynı yıl tedarik süreçlerinde verimliliği artırmak amacıyla Hadımköy Lojistik Merkezi kurulmuş ve İstanbul, Edirne, Tekirdağ ve Kocaeli'deki mağazaların tüm tedarik işlemleri bu merkezden yönetilmeye başlanmıştır.

Sektörel gelişmeleri yakından takip eden ve artan özel marka ürün talebine yanıt veren Kim Market, 2018 yılında bakliyat ve kuru yemiş kategorisinde "Kim'in" markasını piyasaya sürmüş ve bu ürünler için yeni bir tesis yatırımı yapmıştır. 2019 yılında "Kimi" markasıyla temizlik ürünleri sektörüne giriş yapmış ve kağıt havlu, yüzey temizleyici, bulaşık deterjanı ve yumuşatıcı gibi ürünler sunmaya başlamıştır. 2019 yılında Kim Market mağaza sayısı 100'ü aşmıştır.

Dijital dönüşümün hızlanması ve tüketici alışkanlıklarının çeşitlenmesiyle birlikte şirket, teknoloji yatırımlarını artırmış ve e-ticaret sektöründeki satış hacmini genişletmiştir. Pandemi döneminde teknolojik gelişmeler ve değişen tüketici alışkanlıkları nedeniyle e-ticaret sektöründe satış hacminde hızlı bir artış yaşanmıştır. Sektör araştırmaları, pandemi döneminde e-ticaret hacminde %120 kalıcı büyüme olduğunu göstermektedir. Kim Market, trend takip eden yönetim anlayışı, hızlı operasyonel süreçleri ve güçlü altyapısı ile 2020'nin ikinci çeyreğinden itibaren e-ticaret alanındaki faaliyetlerini artırmıştır.

Eylül 2021 tarihinde organik ve inorganik büyümesini finanse etmek, karlılık odaklı nakit alımlarla işletme sermayesini güçlendirmek, e-ticaret ve satış kanalı çeşitlendirmesi için teknoloji yatırımlarını hızlandırmak ve lojistik altyapısını güçlendirmek amacıyla halka açılmıştır. Halka açılma sonrasında Kim Market'in sermayesi 65.000.000 TL artarak toplam 240.000.000 TL'ye ulaşmıştır.

2023 yılsonu itibarıyla Kim Market'in mağaza sayısı 140'a ulaşmıştır. Şirket, karlılık ve verimlilik odaklı mağazalaşma stratejisi izlemekte ve büyüme stratejisine uygun fırsatlar çerçevesinde genişlemektedir. Kim Market, beş ilde 136 şube ve 3.000 çalışanı ile faaliyet göstermektedir. Şirket, müşterilere doğru ürünü, doğru üreticiden, doğru hizmet ve fiyatla sunmayı hedeflemektedir ve mağaza ağını sürekli ve hızlı bir şekilde genişleterek müşterilere daha etkili bir şekilde ulaşmayı amaçlamaktadır.`,
  },
  {
   name: "Mopaş",
   slug: "mopas",
   foundedYear: 1996,
   ctgry: "Süpermarket",
   founder: "Fazıl Narman ve 10 ortak",
   owner: "Haci Ferşat NARMAN",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "sec-market",
    "tespo",
    "kim-market",
    "mopas",
    "onur-market",
    "ozkuruslar",
    "yunus-market",
   ],
   img: "/mopas.webp",
   isBoycotted: "boykot-degil",
   website: "https://mopas.com.tr/",
   description: `Mopaş, Fazıl Narman ve 10 ortak tarafından 1996 yılında kurulan bir perakende zinciridir. Şirketin temelleri, kurucu Fazıl Narman'ın 1961 yılında Erzurum'da ilk bakkal dükkanını açmasıyla atılmıştır. 1986 yılında Bayrampaşa, İstanbul'da iki süpermarket açarak perakende sektörüne giriş yapmıştır.

Mopaş markası, 1996 yılında Kadıköy Moda ve Hasanpaşa, İstanbul'da ilk otomatik altyapılı süpermarket işletmeleriyle başlamıştır. Mopaş ismi, ilk mağazalarının isimlerinin düzenlenmesinden oluşturulmuştur. Şu anda Mopaş, İstanbul ve Kocaeli'de faaliyet göstermektedir.

Süpermarketlerin yanı sıra Mopaş, Seçkin Seracılık (Sera Tarımı), Seçkin Peynircilik, Güneş Enerjisi Santralleri ve Mopaş Et Entegre Tesisi gibi yatırımlara sahiptir. Perakende sektörü dışında Bahçe Evler toplu konut projesi, süt üretim tesisleri, jeotermal sera tesisleri ve lojistik üssü ile tüketicilere ürünler sunmaktadır.

Mopaş, yaklaşık 130 mağaza ile hizmet vermektedir. Ayrıca e-ticaret hizmetleri ile çeşitli platformlarda hızlı, aynı gün teslimat sağlamaktadır.`,
  },
  {
   name: "Yunus Market",
   slug: "yunus-market",
   foundedYear: 1993,
   ctgry: "Süpermarket",
   founder: "Ayhan Ailesi",
   owner: "Ayhan Ailesi",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "kim-market",
    "mopas",
    "onur-market",
    "ozkuruslar",
   ],
   img: "/yunus.jpg",
   isBoycotted: "boykot-degil",
   website: "https://www.yunusonline.com/",
   description: `Yunus Market İşletmeleri Tic. A.Ş. veya yaygın adıyla Yunus Marketler Zinciri, Türkiye merkezli bir süpermarket zinciridir. Şirketin ticari geçmişi 1989 yılından itibaren aile şirketi olarak başlamıştır. 1995 yılında perakende sektörüne giriş yapmıştır. Genel merkezi Ankara'da bulunmaktadır.

Yunus Market, Ayhan ailesi tarafından kurulmuştur. Şirketin ana büyüme trendi, 1998 yılında Etimesgut mağazasının açılmasıyla başlamıştır. 30 yıl içinde Yunus Market, 91 şube, 85.000 m² satış alanı, 400'den fazla kasa ve 3.000'den fazla çalışanı ile sektörde öne çıkan bir marka haline gelmiştir.

Nisan 2008 tarihinde Düzce'deki 25. şubenin açılmasıyla birlikte şirket, yerelden ulusala geçiş sürecine başlamıştır. Ankara dışında Sakarya'da 1, Düzce'de 4, Kırşehir'de 2, Çorum'da 12, Aksaray'da 3 ve Çankırı'da 1 olmak üzere toplam 23 şube ile faaliyet göstermektedir. Şirket, mevcut şehirlerde şube sayısını artırmayı ve yeni şehirlerde yeni şubeler açmayı hedefleyerek ulusal çapta tanınan ve güvenilen bir marka olmayı amaçlamaktadır. 2021 hedefi, ekonomik gelişmeler ve yeni girişimlerle paralel olarak çalışmalarına devam ederek Türkiye'de "Yunus Market" olmayan yer kalmamasını sağlamaktır.

Yunus Market, müşteri memnuniyetini ön planda tutmakta, hijyen ve sağlık kurallarına uymakta ve ürünleri en rekabetçi fiyatlarla sunmaktadır. Gıda, temizlik, kişisel bakım ve gıda dışı kategorilerde 60.000 farklı ürün satmaktadır. Et, şarküteri, fırın ve manav ürünleri yüksek kalite standartlarına sahip sertifikalı ürünlerdir. Yunus Market, "Yunus" garantisi ile günlük taze ve lezzetli ürünler sunmaktadır.

3.000 uzman ve deneyimli personeli ile yılda 2,5 milyon müşteriye hizmet veren Yunus Market, her gün 08:00-22:00 saatleri arasında kesintisiz hizmet sunmakta ve "ilk gün heyecanı" ile müşterilerine hizmet vermektedir.

Et ve fırın bölümlerindeki ürünler kendi tesislerinde üretilmektedir. Et bölümünde, A kalite et üreticilerinden, veteriner hekim gözetiminde uzman ekipler tarafından seçilen %100 yerli, ayakta hayvanlardan elde edilen etler kullanılmaktadır. Kesim ve işleme işlemleri, İslami usullere göre, her aşamada gözetim altında ve hijyenik koşullarda kendi tesislerinde yapılmaktadır. Fırın bölümünde ise ekmek çeşitleri, gıda mühendisleri gözetiminde uzman ekip tarafından kendi tesislerinde hazırlanmakta ve 50 yıllık aile fırın deneyiminden faydalanılarak her gün müşterilere taze ve sıcak olarak sunulmaktadır.`,
  },
  {
   name: "Özkuruşlar",
   slug: "ozkuruslar",
   foundedYear: 1990,
   ctgry: "Süpermarket",
   founder: "Kuruş Ailesi",
   owner: "Ümit Kuruş",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "sec-market",
    "tespo",
    "kim-market",
    "onur-market",
   ],
   img: "/ozkuruslar.jpeg",
   isBoycotted: "boykot-degil",
   website: "https://www.ozkuruslar.com.tr/",
   description: `Özkuruşlar Gıda San. Tic. ve A.Ş., perakende sektöründe yerel süpermarket grubu içinde 32 yıldır haklı ve gururlu bir yer tutmaktadır. Şirket, 1990'ların başında İdealtepe/Maltepe'de küçük bir dükkânla yolculuğuna başlamıştır.

İlk olarak Küçükbakkalköy, ardından Çekmeköy ve Kayışdağı şubeleri açılmıştır. Haziran 2005'te Gülsuyu/Maltepe şubesi, 2006 yılının sonunda Sarıgazi şubesi eklenmiştir. 2007 yılında Suadiye ve Ümraniye, 2008 yılında Üsküdar ve Yakacık şubeleri açılmıştır. Şubat 2009'da Koşuyolu, Aralık 2009'da Göztepe şubesi hizmete girmiştir. 2010 yılında Topselvi ve Şerifali, 2011 yılında ise Uğurmumcu ve Yenidoğan şubeleri açılmıştır. 2022 itibarıyla toplam 32 şube ile değerli müşterilerine hizmet vermeye ve büyümeye devam etmektedir.

Özkuruşlar, temel müşteri memnuniyetinin yanı sıra ileri düzey müşteri memnuniyetini her zaman ön planda tutmuş, kaliteden ödün vermeden uygun fiyatlarla müşterilerine hizmet vermiştir. Bu yaklaşım ve tutumu sayesinde Özkuruşlar Gıda San. Tic. A.Ş., vazgeçilmez ve sağlam bir müşteri portföyüne sahiptir.

Şirketin sloganı "Kaliteyi takip edin, bize ulaşacaksınız" olup, müşteri memnuniyeti şirket için büyük önem taşımaktadır. Bu çerçevede Özkuruşlar, etik değerlerinden ödün vermeden müşteri memnuniyeti odaklı sağlam adımlarla büyümeye devam edecektir.`,
  },
  {
   name: "Çağrı Market",
   slug: "cagri-market",
   foundedYear: 1980,
   ctgry: "Süpermarket",
   founder: "Bilinmiyor",
   owner: "Mustafa Kara",
   country: "Türkiye",
   alternative_products: [
    "tarim-kredi-kooperatif-marketleri",
    "cagri",
    "bim",
    "mopas",
    "ozkuruslar",
    "sec-market",
    "tespo",
    "kim-market",
    "onur-market",
   ],
   img: "/cagri.jpeg",
   isBoycotted: "boykot-degil",
   website: "https://cagri.com/",
   description: `Çağrı Market, Türkiye merkezli bir süpermarket zinciridir. Türk sermayeli bir şirket olarak faaliyet gösteren Çağrı Market, Türkiye genelinde şubeleri bulunan market zinciri olarak müşterilerine hizmet vermektedir.

Çağrı Market, gıda ürünleri, temizlik malzemeleri, kişisel bakım ürünleri ve diğer tüketici ihtiyaçlarını karşılayan geniş bir ürün yelpazesi sunmaktadır. Market zinciri, müşterilerine kaliteli ürünleri uygun fiyatlarla ulaştırmayı hedeflemektedir.

Türkiye'nin çeşitli bölgelerinde şubeleri bulunan Çağrı Market, yerel tüketicilere hizmet vererek bölgesel perakende sektöründe önemli bir yer edinmiştir. Şirket, müşteri memnuniyetini ön planda tutarak faaliyetlerini sürdürmektedir.

Çağrı Market, Türk sermayeli bir şirket olarak yerli üretimi desteklemekte ve yerli markalara öncelik vermektedir. Bu yaklaşımıyla hem tüketiciler hem de yerli üreticiler için değer yaratmaya çalışmaktadır. Market zinciri, sürdürülebilir büyüme stratejisiyle hem mevcut müşterilerine hizmet vermeye hem de yeni bölgelerde faaliyet göstermeye devam etmektedir.`,
  },
 ],
};

export default supermarketCategory;
