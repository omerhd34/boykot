const otomotivCategory = {
  order: 6,
  name: "Otomotiv",
  slug: "otomotiv",
  iconKey: "car",
  description: "Otomobil üreticileri ve yan sanayi markaları.",
  brands: [
    {
      name: "Acura",
      slug: "acura",
      description: `Acura, Japon otomobil devi Honda Motor Company'nin 1986 yılında kurduğu lüks otomobil markasıdır. Marka, başta Kuzey Amerika olmak üzere Amerika Birleşik Devletleri, Kanada, Meksika, Panama ve Kuveyt'te satış yapmaktadır. 
            Acura, bir Japon otomobil üreticisi tarafından kurulan ilk lüks otomobil markası olmuştur.  1986 yılında piyasaya sürdüğü Legend, Coupe, Sedan ve Integra modelleriyle büyük beğeni toplayan firmanın Legend modeli, 1991'de Amerika'da en iyi ithal araç ödülünü kazanmıştır. 
            Honda'ya bağlı bir marka olarak Acura, herhangi bir boykot listesinde yer almamaktadır. İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir. Japon menşeli olan marka, güvenilir ve kaliteli araçları ile tanınmaktadır.`,
      country: "Japonya",
      website: "https://www.acura.com/",
      img: "/otomotiv.png",

      isBoycotted: false,
    },
    {
      name: "Alfa Romeo",
      slug: "alfa-romeo",
      description: `Alfa Romeo, 1910 yılında Milano, İtalya'da kurulmuş köklü bir İtalyan otomobil markasıdır. Marka, İtalyan otomobil endüstrisinin en eski ve prestijli markalarından biridir. 
            Alfa Romeo şu anda Stellantis grubuna aittir. Stellantis, 2021 yılında İtalyan-Amerikan Fiat Chrysler Automobiles (FCA) ve Fransız PSA Group'un birleşmesiyle oluşan çok uluslu bir otomotiv şirketidir. Stellantis bünyesinde Abarth, Alfa Romeo, Chrysler, Citroën, Dodge, DS Automobiles, Fiat, Jeep, Lancia, Maserati, Opel, Peugeot, Ram ve Vauxhall gibi 14 marka bulunmaktadır. 
            Türkiye'de Alfa Romeo'nun temsilciliği Tofaş tarafından yürütülmektedir. Tofaş, Koç Holding ve Stellantis ortaklığında faaliyet gösteren yerli bir şirkettir. 
            Alfa Romeo markası, herhangi bir boykot listesinde yer almamaktadır. İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir. İtalyan menşeli olan marka, sportif karakteri ve yarış geçmişiyle tanınmaktadır.`,
      country: "İtalya",
      website: "https://www.alfaromeo.com/",
      img: "/alfa-romeo.png",

      isBoycotted: false,
    },
    {
      name: "Alpina",
      slug: "alpina",
      description: `Alpina Burkard Bovensiepen GmbH & Co. KG, Almanya'nın Bavyera eyaletinde Buchloe kentinde bulunan ve BMW araçlarının yüksek performanslı versiyonlarını geliştiren bir otomobil üreticisidir. Şirket 1965 yılında Burkard Bovensiepen tarafından kurulmuştur. 
            10 Mart 2022 tarihinde BMW, Alpina'yı satın alma niyetini açıkladı ve aynı gün markayı resmi olarak bünyesine kattığını duyurdu. Alpina'nın kökleri 1962 yılına kadar uzanmaktadır; Burkard Bovensiepen bu tarihte BMW 1500 için Weber çift karbüratör geliştirmiştir. 
            Alpina, diğer performans uzmanlarının aksine Almanya Ulaştırma Bakanlığı tarafından bir otomobil üreticisi olarak tanınmaktadır. BMW ile yakın çalışan Alpina'nın üretim süreçleri BMW'nin üretim hatlarına entegre edilmiştir.`,
      country: "Almanya",
      website: "https://www.alpina-automobiles.com/en/",
      img: "/alpina.png",

      isBoycotted: true,
      boycottReason:
        "Alpina, 2022 yılından itibaren tamamen BMW'nin sahibi olduğu bir yan kuruluştur. BMW'nin İsrail'e verdiği desteklerden dolayı boykot listesinde olması nedeniyle, Alpina da boykot kapsamındadır. BMW ana şirket olarak İsrail işgaline destek verdiği için, ona ait tüm markalar boykot edilmektedir.",
    },
    {
      name: "Anadolu Isuzu",
      slug: "anadolu-isuzu",
      description: `Anadolu Isuzu Otomotiv Sanayi ve Ticaret A.Ş., Anadolu Grubu, Isuzu Motors Limited (Japon) ve Itochu (Japon) ortaklığında halka açık bir anonim şirkettir. 1984 yılında İstanbul Kartal'daki fabrikasında Isuzu araçlarının üretimine başlayan şirket, 1999 yılında Gebze Şekerpınar'daki yeni fabrikasına taşınmıştır. Anadolu Isuzu, 1984 yılında kurulan Türk-Japon ortaklığında otomotiv sektöründeki ilk joint venture şirketidir.  Şirket, kamyon, hafif kamyon, midibüs, otobüs ve pick-up gibi ticari araçların üretimi ve pazarlamasını gerçekleştirmektedir. 
            Ortaklık Yapısı: 
            • Anadolu Grubu: %55,40 
            • Isuzu Motors (Japon): %16,99 
            • Itochu (Japon): %12,74 
            • Halka Açık 
            Anadolu Isuzu, Türkiye merkezli üretim yapan ve Türk-Japon ortaklığında faaliyet gösteren yerli bir şirket olarak boykot kapsamında değildir. İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.
            `,
      country: "Türkiye",
      website: "https://anadoluisuzu.com.tr/",
      img: "/anadolu-isuzu.png",

      isBoycotted: false,
    },
    {
      name: "Aston Martin",
      slug: "aston-martin",
      description: `Aston Martin, 1913 yılında İngiltere'de Lionel Martin ve Robert Bamford tarafından kurulmuş lüks ve spor otomobil üreticisidir. Marka, özellikle James Bond filmlerindeki rolleriyle dünya çapında tanınmıştır.
            Aston Martin Lagonda Global Holdings plc adıyla halka açık bir şirkettir ve merkezini Gaydon, Warwickshire, İngiltere'de bulundurmaktadır. Şirket, el yapımı lüks spor otomobiller üretmekte ve DB serisi, Vantage, DBS gibi ikonik modelleriyle bilinmektedir.
            Aston Martin markası, herhangi bir boykot listesinde yer almamaktadır. İngiliz menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "Birleşik Krallık",
      website: "https://www.astonmartin.com/en",
      img: "/aston-martin.png",

      isBoycotted: false,
    },
    {
      name: "Audi",
      slug: "audi",
      description: `Audi, 1909 yılında Almanya'da kurulan köklü bir otomobil markasıdır. Şirket, Volkswagen Grubu'nun premium segmentteki en önemli markalarından biridir ve merkezini Ingolstadt, Almanya'da bulundurmaktadır.
            Audi, dört halka logosuyla tanınan ve teknoloji, performans ve lüks segmentte güçlü bir konuma sahip olan global bir markadır. Quattro dört tekerlekten çekiş sistemi ve ileri teknoloji özellikleriyle tanınmaktadır.`,
      country: "Almanya",
      website: "https://www.audi.com.tr/tr/",
      img: "/audi.png",

      isBoycotted: true,
      boycottReason:
        "17 Ekim 2023'te 100'den fazla Alman şirketi, İsrailli işgalcilerle topraklarını savunan Filistin vatandaşlarının temsilcisi Hamas arasındaki savaşta Hamas'ın direnişini terörist saldırı olarak nitelendiren markalar arasında Volkswagen Grubu da bulunmaktadır. Audi, Volkswagen Grubu'na ait olduğu için boykot listesinde yer almaktadır.",
    },
    {
      name: "Baojun",
      slug: "baojun",
      description: `Baojun, 2010 yılında Çin'de kurulan bir otomobil markasıdır. Marka, SAIC-GM-Wuling Automobile ortaklığının bir ürünüdür ve General Motors, SAIC Motor ve Wuling Motors'un ortak girişimi olarak faaliyet göstermektedir.
            Baojun, özellikle Çin pazarına yönelik uygun fiyatlı binek otomobiller, SUV'lar, MPV'ler ve elektrikli araçlar üretmektedir. Marka adı Çince "değerli at" anlamına gelmektedir ve logosunda da bir at başı bulunmaktadır.`,
      country: "Çin",
      website: "https://www.sgmw.com.cn/en/baojun",
      img: "/baojun.png",

      isBoycotted: true,
      boycottReason:
        "Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Baojun, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.",
    },
    {
      name: "Bentley",
      slug: "bentley",
      description: `Bentley Motors Limited, 1919 yılında W.O. Bentley tarafından İngiltere'de kurulan bir lüks otomobil üreticisidir. Marka, el yapımı lüks otomobilleri ve yüksek performanslı grand tourer modelleriyle tanınmaktadır.
            1998 yılından bu yana Bentley, Volkswagen Grubu'nun bir parçasıdır. Ancak Bentley, operasyonel olarak bağımsız çalışan ve kendi üretim tesislerine sahip ayrı bir lüks marka konumundadır. Merkezini Crewe, İngiltere'de bulundurmaktadır.
            Bentley markası, Volkswagen Grubu'na ait olmasına rağmen, şu ana kadar doğrudan İsrail'e destek açıklaması yapmamıştır. Lüks segmentte faaliyet gösterdiği için boykot tartışmalarından genellikle uzak kalmıştır. Herhangi bir boykot sebebi tespit edilememiştir.`,
      country: "Birleşik Krallık",
      website: "https://www.bentleymotors.com/",
      img: "/bentley.png",

      isBoycotted: false,
    },
    {
      name: "BMW",
      slug: "bmw",
      description: `BMW (Bayerische Motoren Werke AG), 1916 yılında Münih, Almanya'da kurulan köklü bir Alman otomobil ve motosiklet üreticisidir. Şirket, premium segment otomobiller, lüks araçlar ve motosikletler üretmektedir.
            BMW Grubu bünyesinde BMW, Mini ve Rolls-Royce markaları bulunmaktadır. Şirket, dünya çapında tanınan ikonik logosu ve "Sürüş Keyfinin İcadı" (The Ultimate Driving Machine) sloganıyla bilinmektedir.`,
      country: "Almanya",
      website: "https://www.bmw.com.tr/tr/index.html",
      img: "/bmw.png",

      isBoycotted: true,
      boycottReason:
        "BMW, İsrail'e destek veren şirketler arasında yer almaktadır. 17 Ekim 2023'te 100'den fazla Alman şirketi, İsrailli işgalcilerle topraklarını savunan Filistin vatandaşlarının temsilcisi Hamas arasındaki savaşta Hamas'ın direnişini terörist saldırı olarak nitelendiren markalar arasında BMW da bulunmaktadır. Bu süreçte Yahudi karşıtlığına karşı ortak bir kampanyayla Axel Springer medyasında yer almıştır.",
    },
    {
      name: "Bugatti",
      slug: "bugatti",
      description: `Bugatti Automobiles S.A.S., 1909 yılında İtalyan tasarımcı Ettore Bugatti tarafından Alsace bölgesinde (o dönem Almanya, bugün Fransa sınırları) kurulan bir lüks ve hiper spor otomobil üreticisidir. Marka, dünyanın en hızlı ve en pahalı otomobillerini üretmesiyle tanınmaktadır.
            1998 yılından bu yana Bugatti, Volkswagen Grubu'nun bir parçasıdır ve merkezini Molsheim, Fransa'da bulundurmaktadır. Veyron ve Chiron gibi ikonik hiper otomobillerle dünya rekorları kıran marka, ultra lüks segmentte faaliyet göstermektedir.
            Boykot Nedeni: Bugatti, Volkswagen Grubu'na ait bir marka olduğu için boykot listesinde yer almaktadır. Volkswagen Grubu'nun İsrail'e verdiği destekler nedeniyle, gruba bağlı tüm markalar boykot kapsamına alınmıştır.`,
      country: "Fransa",
      website: "https://www.bugatti.com/",
      img: "/bugatti.png",

      isBoycotted: true,
      boycottReason:
        "Volkswagen Grubu'nun İsrail'e verdiği destekler nedeniyle Bugatti markası boykot edilmektedir.",
    },
    {
      name: "Buick",
      slug: "buick",
      description: `Buick, 1903 yılında David Dunbar Buick tarafından Amerika Birleşik Devletleri'nde kurulan köklü bir otomobil markasıdır. General Motors'un (GM) en eski bölümlerinden biri olan Buick, 1908 yılında GM bünyesine katılmıştır.
            Buick, özellikle Kuzey Amerika ve Çin pazarlarında güçlü bir konuma sahiptir. Marka, konforlu, lüks ve aile dostu SUV'lar ile sedanlar üretmektedir. Çin'de Buick, en çok satan Amerikan markalarından biridir.
            Boykot Nedeni: Buick, General Motors (GM) bünyesinde yer alan bir markadır. GM'nin İsrail'e destek veren şirketler arasında olması ve markanın İsrail ile ticari ilişkileri nedeniyle Buick boykot kapsamına alınmıştır.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.buick.com/",
      img: "/buick.png",

      isBoycotted: true,
      boycottReason:
        "General Motors'un İsrail ile olan ilişkileri ve destekleri nedeniyle Buick markası boykot edilmektedir.",
    },
    {
      name: "BYD Auto",
      slug: "byd-auto",
      description: `BYD Auto (Build Your Dreams), 1995 yılında Çin'de kurulan ve başlangıçta şarj edilebilir piller üreten bir şirkettir. 2003 yılında otomotiv sektörüne giren BYD, günümüzde dünyanın en büyük elektrikli araç üreticilerinden biri haline gelmiştir.
            BYD, elektrikli otomobiller, plug-in hibrit araçlar, elektrikli otobüsler ve elektrikli kamyonlar üretmektedir. Şirket, pil teknolojisi ve yenilenebilir enerji çözümlerinde de öncü konumdadır. 2024 yılında Tesla'yı geride bırakarak dünyanın en çok satan elektrikli araç üreticisi olmuştur.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. BYD Auto, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.byd.com/",
      img: "/byd-auto.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Çin menşeli markalara uygulanan boykot kapsamında BYD Auto da boykot edilmektedir.",
    },
    {
      name: "Cadillac",
      slug: "cadillac",
      description: `Cadillac, 1902 yılında Henry Leland tarafından Detroit, Michigan'da kurulan Amerikan lüks otomobil markasıdır. 1909 yılında General Motors (GM) tarafından satın alınarak GM'nin prestijli lüks markası haline gelmiştir.
            Cadillac, Amerikan lüks otomobil endüstrisinin öncülerinden biri olarak kabul edilir ve "Amerikan Lüksünün Standardı" sloganıyla bilinir. Marka, SUV'lar, sedanlar ve elektrikli araçlar dahil geniş bir ürün yelpazesine sahiptir.
            Boykot Nedeni: Cadillac, General Motors (GM) bünyesinde yer alan bir markadır. GM'nin İsrail'e destek veren şirketler arasında olması nedeniyle Cadillac boykot kapsamına alınmıştır.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.cadillac.com/",
      img: "/cadillac.png",

      isBoycotted: true,
      boycottReason:
        "General Motors'un İsrail'e verdiği destekler nedeniyle Cadillac markası boykot edilmektedir.",
    },
    {
      name: "Changan",
      slug: "changan",
      description: `Changan Automobile, 1862 yılında kurulan ve Çin'in en eski otomotiv üreticilerinden biri olan bir şirkettir. Modern otomotiv üretimine 1980'lerde başlayan Changan, günümüzde Çin'in devlet destekli araç üreticilerinden biridir.
            Changan, binek otomobiller, SUV'lar, MPV'ler, elektrikli araçlar ve ticari araçlar üretmektedir. Şirket, merkezi Chongqing'de bulunan devlet destekli bir kuruluştur ve Ford, Mazda gibi uluslararası markalarla ortaklıkları bulunmaktadır.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Changan, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.globalchangan.com/",
      img: "/changan.png",

      isBoycotted: true,
      boycottReason:
        "Çin menşeli markalara yönelik Doğu Türkistan politikaları nedeniyle uygulanan boykot kapsamında Changan markası boykot edilmektedir.",
    },
    {
      name: "Chery",
      slug: "chery",
      description: `Chery Automobile Co., Ltd., 1997 yılında Çin'in Anhui eyaletinde Wuhu kentinde kurulan bir otomobil üreticisidir. Chery, Çin'in ilk bağımsız otomobil markalarından biri ve ülkenin en büyük otomobil ihracatçılarından biridir.
            Chery, binek otomobiller, SUV'lar, elektrikli araçlar ve ticari araçlar üretmektedir. Marka, 80'den fazla ülkeye ihracat yapmakta ve küresel pazarda aktif olarak yer almaktadır.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Chery, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://chery.com/",
      img: "/chery.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Chery markası boykot edilmektedir.",
    },
    {
      name: "Chevrolet",
      slug: "chevrolet",
      description: `Chevrolet, 1911 yılında Amerikalı otomobil yarışçısı Louis Chevrolet ve William C. Durant tarafından Amerika Birleşik Devletleri'nde kurulmuş bir otomobil markasıdır. 1918 yılında General Motors (GM) tarafından satın alınarak bu dev şirketin bünyesine katılmıştır.
            Chevrolet markası, Amerikan merkezli çok segmentli bir otomotiv şirketi ve Chevrolet, GM'nin en önemli markalarından biridir. Marka, binek otomobillerden SUV'lara, kamyonetlerden ticari araçlara kadar geniş bir ürün yelpazesi sunmaktadır.
            Chevrolet, 2015 yılında Avrupa pazarından çekilmiş, ancak 2024 yılında General Motors'un Türkiye'ye geri dönüş kararı ile birlikte Cadillac ve GMC markaları ile beraber yeniden Türkiye pazarına dönmeye hazırlanmaktadır.
            Chevrolet markası, herhangi bir boykot listesinde yer almamaktadır. Amerikan menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.chevrolet.com/",
      img: "/chevrolet.png",

      isBoycotted: false,
    },
    {
      name: "Chrysler",
      slug: "chrysler",
      description: `Chrysler, 1925 yılında Walter Chrysler tarafından Amerika Birleşik Devletleri'nde kurulan tarihi bir Amerikan otomobil markasıdır. Marka, Amerikan otomotiv endüstrisinin "Üç Büyükleri" (Big Three) arasında yer almıştır. Günümüzde Chrysler, Stellantis grubunun bir parçasıdır. Stellantis, 2021 yılında Fiat Chrysler Automobiles (FCA) ve PSA Group'un birleşmesiyle oluşan çok uluslu otomotiv şirketidir. Chrysler, minivan ve sedan segmentlerinde araçlar üretmektedir.
            Boykot Nedeni: Chrysler, Stellantis grubuna bağlı bir markadır. Stellantis'in içindeki yapısı FCA'nın İsrail ile ticari ilişkileri ve bazı destekleri nedeniyle Chrysler boykot kapsamına alınmıştır. Ayrıca Chrysler Otomobil Grubu'nun İsrail'e destek verdiği tespit edilmiştir.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.chrysler.com/",
      img: "/chrysler.png",

      isBoycotted: true,
      boycottReason:
        "Stellantis/FCA'nın İsrail ile ilişkileri ve destekleri nedeniyle Chrysler markası boykot edilmektedir.",
    },
    {
      name: "Citroën",
      slug: "citroen",
      description: `Citroën, 1919 yılında André Citroën tarafından Fransa'da kurulan köklü bir Fransız otomobil markasıdır. Marka, yenilikçi tasarımları ve konfor odaklı araçlarıyla tanınmaktadır.
            Citroën, şu anda Stellantis grubunun bir parçasıdır. Marka, binek otomobiller, SUV'lar ve hafif ticari araçlar üretmektedir. 2CV, DS serisi ve C serisi modelleriyle otomotiv tarihinde önemli bir yere sahiptir.
            Citroën markası, herhangi bir boykot listesinde yer almamaktadır. Fransız menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "Fransa",
      website: "https://www.citroen.com.tr/",
      img: "/citroen.png",

      isBoycotted: false,
    },
    {
      name: "Dacia",
      slug: "dacia",
      description: `Dacia, 1966 yılında Romanya'da kurulan bir otomobil markasıdır. 1999 yılında Fransız otomobil üreticisi Renault tarafından satın alınmış ve Renault Grubu'nun bütçe dostu markası olarak konumlandırılmıştır. Dacia, uygun fiyat ve sağlam araçlarıyla bilinir; Sandero, Duster, Logan gibi modelleriyle Avrupa'da büyük başarı elde etmiştir. Marka, özellikle fiyat-performans dengesi arayan müşteriler için popüler bir tercihtir.
            Dacia markası, herhangi bir boykot listesinde yer almamaktadır. Romanya menşeli olan ve Renault bünyesinde faaliyet gösteren marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "Romanya",
      website: "https://www.dacia.com.tr/",
      img: "/dacia.png",

      isBoycotted: false,
    },
    {
      name: "Daihatsu",
      slug: "daihatsu",
      description: `Daihatsu Motor Co., 1907 yılında Japonya'da kurulan ve özellikle kompakt araçlar konusunda uzmanlaşmış bir otomobil üreticisidir. Daihatsu, Japonya'nın en eski otomobil üreticilerinden biridir. 1967 yılından bu yana Daihatsu, Toyota Motor Corporation'ın bir yan kuruluşu olarak faaliyet göstermektedir. Marka, küçük boyutlu ve yakıt tasarruflu araçlarıyla bilinir. 2013 yılında Avrupa pazarından çekilmiş, ancak Asya-Pasifik bölgesinde aktif olmaya devam etmektedir.
            Daihatsu markası, herhangi bir boykot listesinde yer almamaktadır. Japon menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "Japonya",
      website: "https://www.daihatsu.com/",
      img: "/daihatsu.png",

      isBoycotted: false,
    },
    {
      name: "DS Automobiles",
      slug: "ds-automobiles",
      description: `DS Automobiles, 2009 yılında Citroën'in premium alt markası olarak kurulmuş, 2015 yılında ise bağımsız bir marka haline gelmiş Fransız lüks otomobil markasıdır. Marka adı, Citroën'in ikonik DS modeli serisinden gelmektedir. DS Automobiles, şu anda Stellantis grubunun bir parçasıdır ve premium segment araçlar üretmektedir. Marka, Fransız şıklığı ve lüksünü otomotiv dünyasına taşımayı hedeflemektedir. DS 3, DS 4, DS 7 gibi modelleriyle bilinir.
            DS Automobiles markası, herhangi bir boykot listesinde yer almamaktadır. Fransız menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "Fransa",
      website: "https://www.dsautomobiles.com.tr/",
      img: "/ds-automobiles.png",

      isBoycotted: false,
    },
    {
      name: "Dodge",
      slug: "dodge",
      description: `Dodge, 1900 yılında Dodge kardeşler (Horace ve John Dodge) tarafından Amerika Birleşik Devletleri'nde kurulan Amerikan otomobil markasıdır. Marka, performans odaklı araçlar, özellikle muscle car'lar ve güçlü motorlarıyla tanınmaktadır. Günümüzde Dodge, Stellantis grubunun bir parçasıdır. Marka, Challenger, Charger ve Durango gibi ikonik modelleriyle bilinmektedir; RAM pick-up serisi 2009 yılında ayrı bir marka olarak ayrılmıştır.
            Boykot Nedeni: Dodge markası olarak İsrail'e destek verdiği araştırmalar sonucu tespit edilemedi fakat FCA (Fiat Chrysler Automobiles) yani Chrysler Otomobil Grubu'na ait olduğu için Chrysler olarak İsrail'e destek verildiği tespit edilmiştir. Bundan dolayı boykot listesinde yer almaktadır.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.dodge.com/",
      img: "/dodge.png",

      isBoycotted: true,
      boycottReason:
        "Stellantis/FCA'nın İsrail'e verdiği destekler nedeniyle Dodge markası boykot edilmektedir.",
    },
    {
      name: "Dongfeng",
      slug: "dongfeng",
      description: `Dongfeng Motor Corporation, 1969 yılında Çin'de kurulan ve ülkenin en büyük otomobil üreticilerinden biri olan devlet destekli bir şirkettir. Şirket, çok geniş bir ürün yelpazesine sahiptir; Dongfeng, binek otomobiller, SUV'lar, ticari araçlar, kamyonlar, otobüsler ve askeri araçlar üretmektedir. Şirket, Nissan, Honda, Kia, Peugeot ve Renault gibi uluslararası markalarla da ortaklıkları bulunmaktadır.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Dongfeng, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.dongfeng-global.com/",
      img: "/dongfeng.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Dongfeng markası boykot edilmektedir.",
    },
    {
      name: "FAW Group",
      slug: "faw-group",
      description: `FAW Group (First Automobile Works), 1953 yılında Çin'de kurulan ve ülkenin ilk otomobil üreticisi olan devlet destekli bir şirkettir. Merkezi Changchun kentinde bulunan şirket, Çin'in en büyük otomotiv gruplarından biridir. FAW, binek otomobiller, kamyonlar, otobüsler ve hafif ticari araçlar üretmektedir. Volkswagen, Audi, Toyota ve Mazda gibi uluslararası markalarla ortaklıkları bulunmaktadır. Hongqi lüks otomobil markası da FAW'a aittir.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. FAW Group, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.faw.com/",
      img: "/faw-group.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle FAW Group boykot edilmektedir.",
    },
    {
      name: "Ferrari",
      slug: "ferrari",
      description: `Ferrari S.p.A., 1939 yılında Enzo Ferrari tarafından İtalya'nın Maranello kentinde kurulmuş dünyaca ünlü İtalyan lüks spor otomobil üreticisidir. Marka, Formula 1 yarışları ve yüksek performanslı spor otomobilleriyle ikonik bir konuma sahiptir. Ferrari, kırmızı rengi, atlı logo ve benzersiz motor sesleriyle tanınır. Marka, sadece sınırlı sayıda üretilen modelleriyle mühendislik ve prestij odaklı strateji izlemektedir. 2016 yılında Fiat Chrysler'dan ayrılarak bağımsız bir şirket haline gelmiştir.
            Ferrari genellikle lüks segmentte faaliyet gösterdiği için boykot tartışmalarından uzaktır. İtalyan menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "İtalya",
      website: "https://www.ferrari.com/en-TR",
      img: "/ferrari.png",

      isBoycotted: false,
    },
    {
      name: "Fiat",
      slug: "fiat",
      description: `Fiat (Fabbrica Italiana Automobili Torino), 1899 yılında Torino, İtalya'da kurulan köklü bir İtalyan otomobil markasıdır. Marka, kompakt ve şehir içi kullanıma uygun araçlarıyla bilinir. Türkiye'de Fiat, Tofaş ortaklığıyla üretim yapmaktadır; Tofaş, 1968'de Fiat ile yapılan ortaklık sonucunda kurulan ve Türkiye'de faaliyet gösteren bir otomotiv şirketidir. Yerli üretim olan Tofaş, binek otomobillerden yan sanayi ticari araçlarına kadar üretim yapmaktadır.
            Fiat markası boykot değildir. Tofaş, Türkiye'de faaliyet gösteren yerli bir şirket olarak boykot kapsamında değildir. Fiat markası, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "İtalya",
      website: "https://www.fiat.com.tr/",
      img: "/fiat.png",

      isBoycotted: false,
    },
    {
      name: "Ford Motor Company",
      slug: "ford-motor-company",
      description: `Ford Motor Company, 1903 yılında Henry Ford tarafından Detroit, Michigan'da kurulan tarihi Amerikan otomobil üreticisidir. Ford, otomobil endüstrisinde seri üretim yöntemlerini geliştirerek otomobilleri geniş kitlelere ulaştırmıştır. Ford, binek otomobiller, SUV'lar, pick-up'lar ve ticari araçlar üretmektedir. F-Series pick-up'ları Amerika'nın en çok satan araçları olarak onlarca yıldır liderliğini sürdürmektedir. Mustang spor otomobil modelleriyle de bilinir.
            Boykot Nedeni: Bu marka, boykot listelerinde dahil edilmesi ve boykot edilmesi gerektiği konusunda açıklamalar ve ya destekler söz konusudur. Bu yüzden, marka boykot hususunda güvenli kabul edilmemekte ve tüketiciler tarafından tercih edilmemesi önerilmektedir.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.ford.com/",
      img: "/ford-motor-company.png",

      isBoycotted: true,
      boycottReason:
        "Çeşitli sivil girişimler Ford'un İsrail'e verdiği destekler nedeniyle boykot edilmesini önermektedir.",
    },
    {
      name: "GAC (Guangzhou Automobile)",
      slug: "gac-guangzhou-automobile",
      description: `GAC Group (Guangzhou Automobile Group), 1997 yılında Çin'in Guangzhou kentinde kurulan devlet destekli bir otomotiv üreticisidir. Şirket, Çin'in en büyük otomobil üreticilerinden biri ve hızla büyüyen bir global oyuncudur. GAC, binek otomobiller, SUV'lar, elektrikli araçlar ve ticari araçlar üretmektedir. Şirket, Honda, Toyota, Fiat Chrysler ve Mitsubishi gibi uluslararası markalarla ortaklıkları bulunmaktadır. Ayrıca kendi markası olan GAC Motor (Trumpchi) ile de faaliyet göstermektedir.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. GAC, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.gac.com.cn/",
      img: "/gac-guangzhou-automobile.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle GAC markası boykot edilmektedir.",
    },
    {
      name: "Geely",
      slug: "geely",
      description: `Geely Automobile Holdings Limited, 1986 yılında Li Shufu tarafından Çin'de kurulan özel sektöre ait bir otomobil üreticisidir. Geely, Çin'in en büyük özel otomobil şirketlerinden biri ve küresel çapta genişleyen bir otomotiv grubudur. Geely, binek otomobiller, SUV'lar ve elektrikli araçlar üretmektedir. Şirket, Volvo, Polestar, Lotus, Proton ve London Taxi Company (LEVC) gibi markaların sahibidir. Ayrıca Mercedes-Benz'de önemli bir hisseye sahiptir.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Geely, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://global.geely.com/",
      img: "/geely.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Geely markası boykot edilmektedir.",
    },
    {
      name: "Genesis",
      slug: "genesis",
      description: `Genesis, 2015 yılında Hyundai Motor Company tarafından kurulan Güney Koreli lüks otomobil markasıdır. Marka, Hyundai'nin premium segment stratejisinin bir parçası olarak bağımsız bir lüks marka olarak konumlandırılmıştır. Genesis, lüks sedanlar ve SUV'lar üretmektedir. G70, G80, G90 sedanları ve GV70, GV80 SUV modelleriyle bilinir. Marka, tasarım, teknoloji ve performans odaklı araçlarıyla dikkat çekmektedir.
            Boykot Nedeni: Genesis, Hyundai Motor Company'nin bir markasıdır. Hyundai'nin ağır makineleri, Kudüs'teki Filistin mahallelerinin yıkılmasında kullanıldığı ve bu mahallelere İsrail işgalinden ticari olarak fayda sağlandığı gerekçeleri nedeniyle boykot listesinde yer almaktadır.`,
      country: "Güney Kore",
      website: "https://www.genesis.com/worldwide/en/main.html",
      img: "/genesis.png",

      isBoycotted: true,
      boycottReason:
        "Hyundai ile ilişkili olarak Genesis markası İsrail'e verilen destek nedeniyle boykot edilmektedir.",
    },
    {
      name: "Great Wall Motors",
      slug: "great-wall-motors",
      description: `Great Wall Motors, 1984 yılında Wei Jianjun tarafından Çin'de kurulan ve özellikle SUV ve pick-up üretiminde uzmanlaşmış bir otomobil üreticisidir. GWM, Çin'in en büyük SUV ve pick-up üreticilerinden biridir; Haval, WEY, Ora ve Tank gibi alt markalara sahiptir. GWM, küresel pazarda hızla büyümekte ve birçok ülkeye ihracat yapmaktadır. Elektrikli araç teknolojilerinde de aktif olarak yatırım yapmaktadır.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Great Wall Motors, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.gwm-global.com/",
      img: "/great-wall-motors.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Great Wall Motors boykot edilmektedir.",
    },
    {
      name: "GMC",
      slug: "gmc",
      description: `GMC (General Motors Truck Company), 1911 yılında kurulan ve General Motors bünyesinde faaliyet gösteren Amerikan ticari araç ve SUV markasıdır. GMC, özellikle dayanıklı kamyonetler ve lüks SUV'larla tanınmaktadır. GMC, Sierra pick-up serisi, Yukon ve Denali gibi lüks SUV modelleriyle öne çıkar; profesyonel kullanım ve aile dostu lüks araç segmentinde güçlü bir konuma sahiptir.
            Boykot Nedeni: GMC, General Motors (GM) bünyesinde yer alan bir markadır. GM'nin İsrail'e destek veren şirketler arasında olması nedeniyle GMC de boykot kapsamına alınmıştır. GM'ye ait tüm markalar boykot listesine yer almaktadır.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.gmc.com/",
      img: "/gmc.png",

      isBoycotted: true,
      boycottReason:
        "General Motors'un İsrail'e verdiği destekler nedeniyle GMC markası boykot edilmektedir.",
    },
    {
      name: "Haval",
      slug: "haval",
      description: `Haval, 2013 yılında Great Wall Motors (GWM) tarafından SUV segmentine odaklanmak üzere kurulan Çin menşeli premium SUV markasıdır. Haval, GWM'nin en başarılı ve en çok satan markasıdır. Haval, kompakt SUV'lardan büyük lüks SUV'lara kadar geniş bir ürün yelpazesine sahiptir; H6, Jolion, Dargo gibi modelleriyle küresel pazarda hızlı büyümektedir. Türkiye pazarında da aktif olarak faaliyet göstermektedir.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Haval, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.gwm-global.com/brands/haval/haval-global.html",
      img: "/haval.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Haval markası boykot edilmektedir.",
    },
    {
      name: "Hongqi",
      slug: "hongqi",
      description: `Hongqi (Kırmızı Bayrak anlamına gelir), 1958 yılında Çin'de kurulan ve FAW Group'a ait olan Çin'in prestijli lüks otomobil markasıdır. Marka, tarihsel olarak Çin hükümet yetkililerinin resmi araçları olarak kullanılmıştır. Hongqi, lüks sedanlar ve SUV'lar üretmektedir; marka, Çin'in ulusal gururu kabul edilir ve son yıllarda modern lüks ve küresel genişleme stratejileriyle dikkat çekmektedir.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Hongqi, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.hongqi-auto.com/",
      img: "/hongqi.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Hongqi markası boykot edilmektedir.",
    },
    {
      name: "Honda",
      slug: "honda",
      description:
        "Honda Motor Co., Ltd., 1948 yılında Soichiro Honda tarafından Japonya'da kurulan köklü bir Japon otomobil ve motosiklet üreticisidir. Honda, dünyada hem otomobil hem de motosiklet üretiminde lider konumdadır. Honda, binek otomobiller, SUV'lar, hibrit ve elektrikli araçlar üretmektedir. Civic, Accord, CR-V gibi modelleri dünya çapında en çok satanlar arasındadır. Marka, güvenilirlik ve kaliteye odaklı üretimiyle tanınmaktadır. Honda markası boykot değildir. Japon menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.",
      country: "Japonya",
      website: "https://www.honda.com.tr/",
      img: "/honda.png",

      isBoycotted: false,
    },
    {
      name: "Hozon Auto",
      slug: "hozon-auto",
      description: `Hozon Auto (Neta), 2014 yılında Çin'de kurulan ve elektrikli araç üretimine odaklanan bir otomobil şirketidir. Şirket, Neta marka adıyla elektrikli araçlar üretmektedir. Hozon Auto, uygun fiyatlı elektrikli araçlar ve akıllı mobilite çözümleri sunmaktadır. Neta V, Neta U gibi modelleri Çin pazarında hızla büyümekte ve uluslararası arenada genişleme planları yapmaktadır.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Hozon Auto, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.netaauto.cc/",
      img: "/hozon-auto.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Hozon Auto markası boykot edilmektedir.",
    },
    {
      name: "Human Horizons",
      slug: "human-horizons",
      description: `Human Horizons, 2017 yılında Çin'de kurulan yeni nesil akıllı elektrikli araçlar üretmeyi hedefleyen bir teknoloji ve otomotiv şirketidir. Şirket, HiPhi marka adıyla lüks elektrikli araçlar üretmektedir. Human Horizons, yapay zeka, otonom sürüş teknolojisi ve gelişmiş elektrikli araç platformları üzerine odaklanmaktadır. HiPhi X ve HiPhi Z gibi ileri teknoloji ürünü lüks elektrikli SUV ve sedan modelleri bulunmaktadır.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Human Horizons, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.human-horizons.com/",
      img: "/human-horizons.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Human Horizons markası boykot edilmektedir.",
    },
    {
      name: "Hyundai",
      slug: "hyundai",
      description: `Hyundai Motor Company, 1967 yılında Chung Ju-yung tarafından Güney Kore'de kurulan ve dünyanın en büyük otomobil üreticilerinden biri olan Güney Koreli şirkettir. Hyundai, küresel otomotiv pazarında önemli bir oyuncudur. Hyundai, binek otomobiller, SUV'lar, hibrit ve elektrikli araçlar üretmektedir; i10, i20, Tucson, Santa Fe gibi modelleriyle bilinir. Marka, teknoloji, tasarım ve güvenilir üretim süreçleriyle dikkat çekmektedir.
            Boykot Nedeni: Hyundai ağır makineleri, Kudüs'teki Filistin mahallelerinin yıkılmasında kullanıldığı ve bu mahallelere İsrail işgalinden ticari olarak fayda sağlandığı iddiaları nedeniyle boykot listesinde yer almaktadır.`,
      country: "Güney Kore",
      website: "https://www.hyundai.com/tr/tr",
      img: "/hyundai.png",

      isBoycotted: true,
      boycottReason:
        "Hyundai'nin altyapı ekipmanlarının Kudüs'teki yıkımlarda kullanıldığı iddiaları nedeniyle boykot edilmesi çağrıları bulunmaktadır.",
    },
    {
      name: "Infiniti",
      slug: "infiniti",
      description: `Infiniti, 1989 yılında Nissan Motor Company tarafından lüks araç segmentine girmek için kurulan Japon lüks otomobil markasıdır. Marka, başta Kuzey Amerika olmak üzere küresel pazarlarda faaliyet göstermektedir. Infiniti, lüks sedanlar, coupé'ler, crossover'lar ve SUV'lar üretmektedir; Q50, Q60, QX50, QX80 gibi modelleriyle bilinir. Marka, performans odaklı tasarım ve ileri teknoloji özellikleriyle dikkat çekmektedir.
            Boykot Nedeni: Çin'e ait olduğu için boykot listesinde (Not: Bu bilgi yanlış olabilir, Infiniti Nissan'ın bir markasıdır).`,
      country: "Japonya",
      website: "https://www.infiniti.com/",
      img: "/infiniti.png",

      isBoycotted: true,
      boycottReason:
        "Çin menşeli olduğu yönünde hatalı da olabilecek bilgiler nedeniyle Infiniti markası bazı boykot listelerinde yer almaktadır.",
    },
    {
      name: "Isuzu",
      slug: "isuzu",
      description: `Isuzu Motors Ltd., 1916 yılında Japonya'da kurulan ve özellikle ticari araçlar, kamyonlar ve dizel motorlar konusunda uzmanlaşmış bir Japon otomobil üreticisidir. Isuzu, dünyada ticari araç üretiminde lider markalardan biridir. Isuzu, hafif ve ağır ticari araçlar, pick-up'lar ve SUV'lar üretmektedir. D-Max pick-up'ı ve MU-X SUV'u global pazarda popüler modellerindendir. Türkiye'de Anadolu Isuzu ortaklığıyla faaliyet göstermektedir.
            Isuzu markası boykot değildir. Japon menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "Japonya",
      website: "https://www.isuzu.com.tr/",
      img: "/isuzu.png",

      isBoycotted: false,
    },
    {
      name: "Jaguar",
      slug: "jaguar",
      description: `Jaguar, 1922 yılında İngiltere'de kurulan ve lüks spor otomobilleriyle tanınan İngiliz otomobil markasıdır. Marka, zarif tasarımları ve performans odaklı araçlarıyla bilinmektedir. Jaguar, şu anda Hint otomotiv devi Tata Motors'a aittir ve Jaguar Land Rover (JLR) bünyesinde faaliyet göstermektedir. XF, XE, F-Type gibi modelleri ve son dönemde elektrikli I-PACE modeli ile dikkat çekmektedir.
            Jaguar markası, herhangi bir boykot listesinde yer almamaktadır. İngiliz menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "Birleşik Krallık",
      website: "https://www.jaguar.com.tr/",
      img: "/jaguar.png",

      isBoycotted: false,
    },
    {
      name: "Jeep",
      slug: "jeep",
      description: `Jeep, 1941 yılında askeri kullanım için geliştirilen araçlarla başlayan ve SUV segmentinin öncülerinden biri olan Amerikan markasıdır. Marka, arazi yetenekleri ve macera ruhuyla tanınmaktadır. Jeep, şu anda Stellantis grubunun bir parçasıdır. Wrangler, Cherokee, Grand Cherokee, Compass, Renegade gibi ikonik modelleriyle bilinir.
            Jeep markası, herhangi bir boykot listesinde değildir. Şirketin İsrail ile ilgili bir destek açıklaması yok ancak geçmiş yıllarda İsrail ile birlikte ticari ve üretim anlaşmaları yapmış olsa da aktif boykot listesinde değildir.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.jeep.com.tr/",
      img: "/jeep.png",

      isBoycotted: false,
    },
    {
      name: "Karsan",
      slug: "karsan",
      description: `Karsan Otomotiv Sanayi ve Ticaret A.Ş., 1966 yılında Bursa'da kurulan Türk otomotiv şirketidir. Karsan, hafif ticari araçlar, minibüsler, midibüsler ve otobüsler üretmektedir. Karsan, Peugeot ve Hyundai gibi markalarla lisans anlaşmaları yaparak üretim gerçekleştirmiştir. Ayrıca kendi tasarımı olan e-ATAK elektrikli otobüsü gibi yenilikçi projeler geliştirmektedir. Şirket, özellikle elektrikli araç teknolojisinde önemli yatırımlar yapmaktadır.
            Karsan markası boykot değildir. Türk menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "Türkiye",
      website: "https://www.karsan.com.tr/",
      img: "/karsan.png",

      isBoycotted: false,
    },
    {
      name: "Kia",
      slug: "kia",
      description: `Kia Corporation, 1944 yılında Güney Kore'de kurulan ve Güney Kore'nin ilk bisiklet ve otomobil üreticisi olan köklü bir Güney Koreli markadır. Kia, dünyanın en hızlı büyüyen otomobil markalarından biridir; 1998 yılında Hyundai Motor Company ve Daimler-Chrysler ortaklığındaki konsorsiyum tarafından satın alınmıştır. Kia, binek otomobiller, SUV'lar, hibrit ve elektrikli araçlar üretmektedir; Sportage, Sorento, Ceed, EV6 gibi modelleriyle bilinir.
            Boykot Nedeni: Hyundai'nin ağır makinelerinin Kudüs'teki Filistin mahallelerinin yıkılmasında kullanıldığı ve bu mahallelere İsrail işgallerinden ticari fayda sağlandığı iddiaları nedeniyle Hyundai boykot edilmektedir. Hyundai ile aynı grupta yer alan Kia da boykot listesine alınmıştır.`,
      country: "Güney Kore",
      website: "https://www.kia.com/tr/anasayfa.html",
      img: "/kia.png",

      isBoycotted: true,
      boycottReason:
        "Hyundai ile olan bağlantısı nedeniyle Kia markası da boykot edilmektedir.",
    },
    {
      name: "Koenigsegg",
      slug: "koenigsegg",
      description: `Koenigsegg Automotive AB, 1994 yılında Christian von Koenigsegg tarafından İsveç'te kurulan bir hiper otomobil üreticisidir. Şirket, dünyanın en hızlı ve pahalı otomobillerini üreten butik bir marka olarak bilinir. Koenigsegg, mühendislikte yenilikçi çözümler sunmuştur. Agera, Regera, Jesko ve Gemera gibi modelleriyle dünya hız rekorları kırmış ve otomotiv mühendisliğinde yenilikçi çözümler önermiştir. Her araç özel olarak üretilir ve yüksek performanslıdır.
            Koenigsegg markası, herhangi bir boykot listesinde yer almamaktadır. İsveç menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "İsveç",
      website: "https://www.koenigsegg.com/home",
      img: "/koenigsegg.png",

      isBoycotted: false,
    },
    {
      name: "Lancia",
      slug: "lancia",
      description: `Lancia, 1906 yılında Vincenzo Lancia tarafından İtalya'da kurulan tarihi İtalyan otomobil markasıdır. Marka, yenilikçi mühendislik ve zarif tasarımlarıyla İtalyan otomotiv tarihinde önemli bir yere sahiptir. Lancia, şu anda Stellantis grubunun bir parçasıdır. Marka, Delta ve Ypsilon gibi modelleriyle bilinir ancak son yıllarda sadece İtalya pazarında faaliyet göstermektedir. Tarihi rallii başarıları ve lüks araçlarıyla ünlüdür.
            Lancia markası, herhangi bir boykot listesinde yer almamaktadır. İtalyan menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "İtalya",
      website: "https://www.lancia.com/",
      img: "/lancia.png",

      isBoycotted: false,
    },
    {
      name: "Land Rover",
      slug: "land-rover",
      description: `Land Rover, 1948 yılında İngiltere'de kurulan ve arazi araçları konusunda uzmanlaşmış İngiliz otomobil markasıdır. Marka, off-road kabiliyeti ve lüks SUV segmentindeki güçlü konumuyla tanınmaktadır. Land Rover, şu anda Hint otomotiv devi Tata Motors'a aittir ve Jaguar Land Rover (JLR) bünyesinde faaliyet göstermektedir. Defender, Discovery, Range Rover gibi ikonik modelleriyle bilinir. Marka, hem arazi kabiliyeti hem de lüks özellikleriyle ünlüdür.
            Land Rover markası, herhangi bir boykot listesinde yer almamaktadır. İngiliz menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "Birleşik Krallık",
      website: "https://www.landrover.com.tr/",
      img: "/land-rover.png",

      isBoycotted: false,
    },
    {
      name: "Lexus",
      slug: "lexus",
      description: `Lexus, 1989 yılında Toyota Motor Corporation tarafından lüks araç segmentine girmek için kurulan Japon lüks otomobil markasıdır. Marka, kalite, güvenilirlik ve müşteri memnuniyeti konusunda yüksek standartlarıyla tanınmaktadır. Lexus, lüks sedanlar, SUV'lar, coupé'lar ve hibrit araçlar üretmektedir. ES, LS, RX, NX gibi modelleriyle bilinir. Marka, sessiz kabin, mükemmel işçilik ve ileri teknoloji özellikleriyle dikkat çekmektedir.
            Lexus markası, herhangi bir boykot listesinde yer almamaktadır. Japon menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.`,
      country: "Japonya",
      website: "https://www.lexus.com.tr/",
      img: "/lexus.png",

      isBoycotted: false,
    },
    {
      name: "Leapmotor",
      slug: "leapmotor",
      description: `Leapmotor, 2015 yılında Çin'de kurulan ve elektrikli araç segmentinde faaliyet gösteren bir otomobil şirketidir. Şirket, akıllı elektrikli araçlar ve otonom sürüş teknolojileri geliştirmektedir. Leapmotor, kompakt elektrikli araçlar ve SUV'lar üretmektedir; C11, T03 gibi modelleriyle Çin pazarında hızla büyümekte ve küresel pazarda aktif olarak faaliyet göstermektedir. Şirket, lis otaklık anlaşmaları yaparak küresel genişleme planları yürütmektedir.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Leapmotor, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://leapmotortr.com/",
      img: "/leapmotor.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Leapmotor markası boykot edilmektedir.",
    },
    {
      name: "Li Auto",
      slug: "li-auto",
      description: `Li Auto, 2015 yılında Li Xiang tarafından Çin'de kurulan ve menzil genişletici elektrikli araçlar (EREV) konusunda uzmanlaşmış bir otomobil şirketidir. Şirket, akıllı elektrikli SUV'lar üretmektedir. Li Auto, hibrit teknolojisi ile çalışan elektrikli SUV'lar üretmektedir; Li ONE ve Li L serisi modelleriyle bilinir. Marka, uzun menzil ve pratik kullanım sunan araçlarıyla Çin'de premium elektrikli araç pazarında önemli bir konuma sahiptir.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Li Auto, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.lixiang.com/en",
      img: "/li-auto.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Li Auto markası boykot edilmektedir.",
    },
    {
      name: "Lincoln",
      slug: "lincoln",
      description: `Lincoln Motor Company, 1917 yılında Henry Leland tarafından kurulan ve Ford Motor Company'nin lüks araç markası olarak faaliyet gösteren Amerikan otomobil markasıdır. Marka, Amerikan lüks otomobil geleneğinin simgelerinden biridir. Lincoln, lüks sedanlar ve SUV'lar üretmektedir; Navigator, Aviator, Corsair gibi modelleriyle bilinir. Marka, konfor, teknoloji ve prestij odaklı araçlarıyla dikkat çekmektedir.
            Boykot Nedeni: Lincoln, Ford Motor Company'nin bir markasıdır. Ford'un boykot listesinde yer alması nedeniyle Lincoln de boykot kapsamına alınmıştır.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.lincoln.com/",
      img: "/lincoln.png",

      isBoycotted: true,
      boycottReason:
        "Ford Motor Company'nin boykot listelerinde yer alması nedeniyle Lincoln markası da boykot edilmektedir.",
    },
    {
      name: "Lotus",
      slug: "lotus",
      description:
        "Lotus Cars, 1952 yılında Colin Chapman tarafından İngiltere'de kurulan ve hafif, performans odaklı spor otomobilleriyle tanınan İngiliz otomobil markasıdır. Marka, yarış geleneği ve mühendislik mükemmeliyetiyle bilinir. Lotus, şu anda Çin menşeli Geely Holding Group'a aittir. Elise, Exige, Evora gibi klasik spor otomobilleri ve yeni nesil Emira, elektrikli Evija gibi modelleriyle tanınır. Marka, \"simplify, then add lightness\" felsefesiyle ünlüdür. Lotus markası, herhangi bir boykot listesinde yer almamaktadır. İngiliz menşeli olan marka, Geely'ye ait olmasına rağmen İngiliz kimliğini korumaktadır.",
      country: "Birleşik Krallık",
      website: "https://www.lotuscars.com/en",
      img: "/lotus.png",

      isBoycotted: false,
    },
    {
      name: "Lucid Motors",
      slug: "lucid-motors",
      description:
        "Lucid Motors, 2007 yılında Amerika Birleşik Devletleri'nde kurulan lüks elektrikli araç üreticisidir. Şirket, yüksek performanslı ve uzun menzilli elektrikli sedanlar üretmektedir. Lucid Air lüks elektrikli sedan modeli ile tanınan marka, ileri teknoloji, uzun menzil ve hızlı şarj özellikleriyle dikkat çekmektedir. Şirket, eski Tesla mühendisleri tarafından kurulmuş ve premium elektrikli araç pazarında Tesla'ya rakip olarak konumlanmıştır.",
      country: "Amerika Birleşik Devletleri",
      website: "https://lucidmotors.com/",
      img: "/lucid-motors.png",

      isBoycotted: true,
      boycottReason:
        "Lucid Motors'un boykot listelerinde yer aldığı belirtilmekte ve tüketicilere markadan uzak durmaları önerilmektedir. Bu yüzden, marka 'boykot hususunda' güvenli olarak kabul edilmemekte ve tüketiciler tarafından tercih edilmemesi önerilmektedir.",
    },
    {
      name: "Lynk & Co",
      slug: "lynk-co",
      description: `Lynk & Co, 2016 yılında Çin'de kurulan ve Geely Holding Group ile Volvo Car Corporation'ın ortak girişimi olan global otomobil markasıdır. Marka, genç ve teknoloji odaklı tüketicilere yönelik araçlar üretmektedir. Lynk & Co, SUV'lar ve elektrikli hibrit araçlar üretmektedir; 01, 02, 03 gibi modelleriyle bilinir. Marka, abonelik tabanlı satış modeli ve dijital deneyim odaklı yaklaşımıyla dikkat çekmektedir.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Lynk & Co, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.lynkco-turkiye.com/",
      img: "/lynk-co.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Lynk & Co markası boykot edilmektedir.",
    },
    {
      name: "Mazda",
      slug: "mazda",
      description:
        "Mazda Motor Corporation, 1920 yılında Japonya'da kurulan bağımsız bir Japon otomobil üreticisidir. Marka, sürüş keyfi odaklı araçları ve rotary motor teknolojisiyle tanınmaktadır. Mazda, binek otomobiller ve SUV'lar üretmektedir. Mazda3, Mazda6, CX-5, CX-30, MX-5 Miata gibi modelleriyle bilinir. Marka, KODO tasarım dili ve SKYACTIV teknolojisiyle dikkat çekmektedir. Mazda markası, herhangi bir boykot listesinde yer almamaktadır. Japon menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.",
      country: "Japonya",
      website: "https://www.mazda.com.tr/",
      img: "/mazda.png",

      isBoycotted: false,
    },
    {
      name: "Maxus",
      slug: "maxus",
      description: `Maxus, SAIC Motor bünyesinde faaliyet gösteren ve hafif ticari araçlar ile MPV'ler üreten Çin menşeli bir otomobil markasıdır. Marka, İngiliz LDV markasını satın aldıktan sonra Maxus adıyla global pazarda aktif olarak faaliyet göstermektedir. Maxus, elektrikli kamyonetler, MPV'ler ve SUV'lar üretmektedir; T60, T90, G10, Deliver serisi gibi elektrikli ticari araç segmentinde aktif olarak faaliyet göstermektedir.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Maxus, Çin menşeli SAIC Motor'a ait bir marka olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.maxus-turkiye.com/tr/",
      img: "/maxus.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle Maxus markası boykot edilmektedir.",
    },
    {
      name: "McLaren",
      slug: "mclaren",
      description:
        "McLaren Automotive, 1985 yılından itibaren McLaren Formula 1 yarış takımından gelen spor otomobilleriyle bilinen İngiliz otomobil üreticisidir. Marka, yüksek performanslı spor otomobiller ve hiper otomobiller üretmektedir. McLaren, 720S, Artura, GT ve Speedtail gibi modelleriyle bilinir. Marka, karbon fiber teknolojisi, aerodinamik tasarım ve hafif yapı konusunda öncüdür. Her araç performans ve teknoloji odaklı üretilmektedir. McLaren markası, herhangi bir boykot listesinde yer almamaktadır. İngiliz menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.",
      country: "Birleşik Krallık",
      website: "https://www.mclaren.com/",
      img: "/mclaren.png",

      isBoycotted: false,
    },
    {
      name: "Mercedes-Benz",
      slug: "mercedes-benz",
      description: `Mercedes-Benz, 1926 yılında Almanya'da kurulan ve dünyada lüks otomobil segmentinin öncülerinden biri olan Alman otomobil markasıdır. Marka, kalite, güvenlik ve lüks konusunda endüstri standardı olarak kabul edilir. Mercedes-Benz, binek otomobiller, SUV'lar, spor otomobiller, elektrikli araçlar ve ticari araçlar üretmektedir; C-Serisi, E-Serisi, S-Serisi, GLC, GLE, AMG performans serileri ve EQ elektrikli araçlarıyla bilinir.
            Boykot Nedeni: Şirket İsrail işgaline yönelik açıklamalarda bulunmuş ve 17 Ekim 2023'te 100'den fazla Alman şirketi, İsrailli işgalcilerin savunusunda Hamas'ın direnişini terör olarak nitelendiren markalar arasında Mercedes Grubu da bulunmaktadır. Bu süreçte Yahudi karşıtlığına karşı ortak bir kampanyayla Axel Springer medyasında yer almıştır.`,
      country: "Almanya",
      website: "https://www.mercedes-benz.com.tr/",
      img: "/mercedes-benz.png",

      isBoycotted: true,
      boycottReason:
        "Mercedes-Benz'in İsrail'e destek verdiği yönündeki açıklamalar ve kampanyalar nedeniyle markanın boykot edilmesi çağrılmaktadır.",
    },
    {
      name: "MG",
      slug: "mg",
      description: `MG (Morris Garages), 1924 yılında İngiltere'de kurulan tarihi İngiliz spor otomobil markasıdır. Ancak 2007 yılından bu yana Çin menşeli SAIC Motor'a aittir ve Çin'de üretilmektedir. MG, binek otomobiller, SUV'lar ve elektrikli araçlar üretmektedir; MG ZS, MG HS, MG4 Electric gibi modelleriyle küresel pazarda hızla büyümektedir. Türkiye pazarında da aktif olarak faaliyet göstermektedir.
            Boykot Nedeni: Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. MG, SAIC Motor'a ait olduğu için boykot kapsamına alınmıştır.`,
      country: "Çin",
      website: "https://www.mg-turkey.com/tr/",
      img: "/mg.png",

      isBoycotted: true,
      boycottReason:
        "Çin hükümetinin Doğu Türkistan politikaları nedeniyle MG markası boykot edilmektedir.",
    },
    {
      name: "Mini",
      slug: "mini",
      description:
        "Mini, 1959 yılında İngiltere'de kurulan ve kompakt otomobilleriyle tanınan İngiliz otomobil markasıdır. 2000 yılından bu yana BMW'nin sahibi olduğu bir marka olarak faaliyet göstermektedir. Mini, kompakt binek otomobiller, crossover'lar ve elektrikli araçlar üretmektedir. Mini Cooper, Mini Countryman, Mini Clubman gibi modelleriyle bilinir. Marka, ikonik tasarımı ve eğlenceli sürüş deneyimiyle dikkat çekmektedir.",
      country: "Birleşik Krallık",
      website: "https://www.mini.com.tr/tr_TR/home.html",
      img: "/mini.png",

      isBoycotted: true,
      boycottReason:
        "Mini, BMW'ye ait bir markadır. BMW'nin İsrail'e verdiği destekler nedeniyle BMW bünyesindeki tüm markalar boykot kapsamına alınmıştır.",
    },
    {
      name: "Mitsuoka",
      slug: "mitsuoka",
      description:
        "Mitsuoka Motor, 1968 yılında Japonya'da kurulan küçük ölçekli ve butik bir Japon otomobil üreticisidir. Şirket, özel tasarım ve retro görünümlü araçlar üretmektedir. Mitsuoka, klasik ve vintage görünümü ile dikkat çeken otomobiller sunmaktadır. Orochi, Nouera, Rock Star gibi sınırlı sayıda üretilen modelleriyle bilinir. Marka, el yapımı ve özelleştirilmiş üretim konusunda uzmanlaşmıştır.",
      country: "Japonya",
      website: "https://www.mitsuoka-motor.com/global/",
      img: "/mitsuoka.png",

      isBoycotted: false,
    },
    {
      name: "Mitsubishi",
      slug: "mitsubishi",
      description:
        "Mitsubishi Motors Corporation, 1970 yılında Japonya'da kurulan bir otomobil üreticisidir. Şirket, Mitsubishi grubundan ayrılarak bağımsız bir otomotiv şirketi haline gelmiştir. Mitsubishi, binek otomobiller, SUV'lar, pick-up'lar ve elektrikli araçlar üretmektedir. Outlander, Eclipse Cross, Pajero, L200 gibi modelleriyle bilinir. Marka, özellikle SUV ve arazi araçları segmentinde güçlü bir konuma sahiptir.",
      country: "Japonya",
      website: "https://www.mitsubishi-motors.com.tr/",
      img: "/mitsubishi.png",

      isBoycotted: true,
      boycottReason:
        "Mitsubishi markası, boykot listelerine dahil edilmiş ve boykot edilmesi gerektiğine dair olumsuz açıklamalar bulunmaktadır.",
    },
    {
      name: "NIO",
      slug: "nio",
      description:
        "NIO, 2014 yılında Çin'de kurulan ve premium elektrikli araçlar üreten bir otomobil şirketidir. Şirket, elektrikli araç teknolojisi ve pil değiştirme sistemleriyle tanınmaktadır. NIO, lüks elektrikli sedanlar ve SUV'lar üretmektedir; ES6, ES8, ET7, ET5 gibi modelleriyle bilinir. Marka, sürdürülebilir pil teknolojisi, otonom sürüş özellikleri ve dijital deneyim odaklı yaklaşımıyla dikkat çekmektedir.",
      country: "Çin",
      website: "https://www.nio.com/",
      img: "/nio.png",

      isBoycotted: true,
      boycottReason:
        "Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. NIO, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.",
    },
    {
      name: "Nissan",
      slug: "nissan",
      description:
        "Nissan Motor Co., Ltd., 1933 yılında Japonya'da kurulan köklü bir Japon otomobil üreticisidir. Marka, binek otomobiller, SUV'lar, ticari araçlar, spor otomobiller ve elektrikli araçlar gibi farklı segmentlerde üretim yapmaktadır. Nissan, özellikle SUV'ler, sürüş konforu ve yakıt ekonomisine odaklanmaktadır. Qashqai, X-Trail, Micra, GT-R ve Leaf elektrikli otomobili gibi modelleriyle bilinir. Marka, dünya çapında geniş bir satış ağına sahiptir.",
      country: "Japonya",
      website: "https://www.nissan.com.tr/",
      img: "/nissan.png",

      isBoycotted: false,
    },
    {
      name: "Opel",
      slug: "opel",
      description:
        "Opel Automobile GmbH, 1862 yılında Almanya'da kurulan köklü bir Alman otomobil markasıdır. Marka, uzun yıllar General Motors bünyesinde faaliyet göstermiş, 2017 yılında PSA Group (şimdi Stellantis) tarafından satın alınmıştır. Opel, binek otomobiller, SUV'lar ve hafif ticari araçlar üretmektedir. Corsa, Astra, Insignia, Grandland, Mokka gibi modelleriyle bilinir. Marka, Avrupa pazarında güçlü bir konuma sahiptir.",
      country: "Almanya",
      website: "https://www.opel.com.tr/",
      img: "/opel.png",

      isBoycotted: false,
    },
    {
      name: "Ora",
      slug: "ora",
      description:
        "Ora, Great Wall Motors'a (GWM) ait olan ve elektrikli araçlara odaklanan Çin menşeli bir otomobil markasıdır. Marka, özellikle kompakt ve genç kitleyi hedefleyen elektrikli araçlar üretmektedir. Ora, genç ve teknoloji odaklı kullanıcılar için tasarlanmış otomobiller sunar. Ora Good Cat, Ora Ballet Cat gibi modelleriyle bilinir. Marka, retro-modern tasarımları ve dijital deneyim odaklı yaklaşımıyla dikkat çekmektedir.",
      country: "Çin",
      website: "https://www.ora-europe.com/en",
      img: "/ora.png",

      isBoycotted: true,
      boycottReason:
        "Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Ora, Great Wall Motors'a ait Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.",
    },
    {
      name: "Otokar",
      slug: "otokar",
      description:
        "Otokar Otomotiv ve Savunma Sanayi A.Ş., 1963 yılında İstanbul'da kurulan Türk otomotiv ve savunma sanayi şirketidir. Koç Holding bünyesinde faaliyet gösteren şirket, otobüs, midibüs, hafif ticari araç ve askeri araç üretimi yapmaktadır. Otokar, Kent serisi otobüsleri, Doruk ve Navigo midibüsleri ile tanınır. Ayrıca Arma, Cobra gibi askeri araçlar da üretmektedir. Şirket, Türkiye'nin yerli üreticilerinden biridir ve uluslararası pazarda da araçları bulunmaktadır.",
      country: "Türkiye",
      website: "https://www.otokar.com.tr/",
      img: "/otokar.png",

      isBoycotted: false,
    },
    {
      name: "Pagani",
      slug: "pagani",
      description:
        "Pagani Automobili S.p.A., 1992 yılında Horacio Pagani tarafından İtalya'da kurulan ultra lüks hiper otomobil üreticisidir. Şirket, el yapımı ve sanat eseri niteliğinde hiper otomobiller üretmektedir. Pagani, Zonda, Huayra ve Utopia gibi sınırlı sayıda üretilen modelleriyle bilinir. Her araç özel olarak tasarlanır ve karbon fiber gibi ileri malzemeler kullanılır. Marka, otomotiv sanatının zirvesini temsil etmektedir.",
      country: "İtalya",
      website: "https://www.pagani.com/",
      img: "/pagani.png",

      isBoycotted: true,
      boycottReason:
        "Pagani markası bazı boykot listelerinde yer almakta ve boykot edilmesi önerilmektedir.",
    },
    {
      name: "Peugeot",
      slug: "peugeot",
      description:
        "Peugeot, 1810 yılında Fransa'da kurulan ve dünyanın en eski otomobil markalarından biri olan Fransız otomobil markasıdır. Marka, binek otomobiller, SUV'lar ve hafif ticari araçlar üretmektedir. Peugeot, şu anda Stellantis grubunun bir parçasıdır. 208, 308, 2008, 3008, 5008 gibi modelleriyle bilinir. Marka, Avrupa pazarında güçlü bir konuma sahiptir.",
      country: "Fransa",
      website: "https://www.peugeot.com.tr/",
      img: "/peugeot.png",

      isBoycotted: false,
    },
    {
      name: "Porsche",
      slug: "porsche",
      description:
        "Porsche AG, 1931 yılında Ferdinand Porsche tarafından Almanya'da kurulan lüks spor otomobil üreticisidir. Marka, yüksek performanslı spor otomobiller ve SUV'larla tanınmaktadır. Porsche, Volkswagen Grubu bünyesinde faaliyet göstermektedir. 911, Taycan, Cayenne, Macan, Panamera gibi modelleriyle bilinir. Marka, performans ve mühendislik başarısı ile otomotiv endüstrisinde liderdir.",
      country: "Almanya",
      website: "https://www.porsche.com.tr/",
      img: "/porsche.png",

      isBoycotted: true,
      boycottReason:
        "17 Ekim 2023'te 100'den fazla Alman şirketi, İsrailli işgalcilerin savunusunda Hamas'ın direnişini terör saldırısı olarak nitelendiren markalar arasında Porsche de bulunmaktadır. Bu süreçte Yahudi karşıtlığına karşı ortak bir kampanyayla Axel Springer medyasında yer almıştır.",
    },
    {
      name: "Ram",
      slug: "ram",
      description:
        "Ram Trucks, 2009 yılında Dodge markasından ayrılarak bağımsız bir marka haline gelen Amerikan pick-up ve ticari araç markasıdır. Marka, ağır hizmet pick-up'ları ve ticari araçlarla tanınmaktadır. Ram, şu anda Stellantis grubunun bir parçasıdır. Ram 1500, 2500, 3500 gibi güçlü pick-up modelleriyle bilinir. Marka, Amerika pazarında en çok satan pick-up'lardan biridir.",
      country: "Amerika Birleşik Devletleri",
      website: "https://www.ramtrucks.com/",
      img: "/ram.png",

      isBoycotted: true,
      boycottReason:
        "Ram, Stellantis grubuna bağlı bir markadır. Stellantis'in ve önceki yapısı FCA'nın İsrail ile ticari ilişkileri nedeniyle Ram boykot kapsamına alınmıştır.",
    },
    {
      name: "Renault",
      slug: "renault",
      description:
        "Renault S.A., 1899 yılında Fransa'da kurulan köklü bir Fransız otomobil üreticisidir. Marka, binek otomobiller, SUV'lar, ticari araçlar ve elektrikli araçlar üretmektedir. Renault, Clio, Megane, Captur, Kadjar, Arkana gibi modelleriyle bilinir. Marka, Formula 1 yarışlarındaki başarıları ve uygun fiyatlı araçlarıyla tanınmaktadır. Nissan ve Mitsubishi ile Renault-Nissan-Mitsubishi ittifakı kapsamında ortaklık ilişkileri bulunmaktadır.",
      country: "Fransa",
      website: "https://www.renault.com.tr/",
      img: "/renault.png",

      isBoycotted: true,
      boycottReason:
        "Renault'un İsrail ile ticari ilişkileri ve İsrail pazarındaki faaliyetleri nedeniyle boykot listesinde yer aldığı belirtilmektedir.",
    },
    {
      name: "Rivian",
      slug: "rivian",
      description:
        "Rivian Automotive, 2009 yılında Amerika Birleşik Devletleri'nde kurulan elektrikli araç üreticisidir. Şirket, elektrikli pick-up'lar ve SUV'lar konusunda uzmanlaşmıştır. Rivian, R1T elektrikli pick-up ve R1S elektrikli SUV modelleriyle bilinir. Marka, macera ve outdoor kullanıma uygun elektrikli araçlar üretmektedir. Amazon ile ortaklığı bulunmakta ve elektrikli teslimat araçları da üretmektedir. Rivian markası, herhangi bir boykot listesinde yer almamaktadır. Amerikan menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.",
      country: "Amerika Birleşik Devletleri",
      website: "https://rivian.com/",
      img: "/rivian.png",
      isBoycotted: false,
    },
    {
      name: "Roewe",
      slug: "roewe",
      description:
        "Roewe, SAIC Motor bünyesinde faaliyet gösteren Çin menşeli bir otomobil markasıdır. Marka, 2006 yılında İngiliz Rover markasının bazı varlıklarının satın alınmasıyla kurulmuştur. Roewe, binek otomobiller, SUV'lar ve elektrikli araçlar üretmektedir. RX5, i5, ei6 gibi modelleriyle Çin pazarında güçlü bir konuma sahiptir. Marka, orta segment araçlar ve elektrikli araçlar konusunda aktiftir.",
      country: "Çin",
      website:
        "https://www.saicmotor.com/english/latest_news/roewe/index.shtml",
      img: "/roewe.png",

      isBoycotted: true,
      boycottReason:
        "Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Roewe, SAIC Motor'a ait Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.",
    },
    {
      name: "Rolls-Royce",
      slug: "rolls-royce",
      description:
        "Rolls-Royce Motor Cars, 1906 yılından beri kullanılan ultra lüks otomobil markasıdır. Marka, dünyanın en prestijli ve pahalı otomobillerini üretmektedir. Rolls-Royce'un sahibi Bayerische Motoren Werke AG yani BMW'dir. Rolls-Royce, BMW şirketinin yan kuruluşudur. Phantom, Ghost, Wraith, Cullinan gibi ultra lüks modelleriyle bilinir.",
      country: "Birleşik Krallık",
      website: "https://www.rolls-roycemotorcars.com/en_GB/home.html",
      img: "/rolls-royce.png",

      isBoycotted: true,
      boycottReason:
        "Rolls-Royce, BMW şirketinin yan kuruluşudur ve BMW'nin İsrail'e desteklerinden ötürü boykot listesine eklenmiştir.",
    },
    {
      name: "SAIC Motor",
      slug: "saic-motor",
      description:
        "SAIC Motor Corporation Limited, 1955 yılında Çin'de kurulan ve Çin'in en büyük otomobil üreticisi olan devlet destekli bir şirkettir. Şirket, merkezi Shanghai'de bulunmaktadır. SAIC Motor, binek otomobiller, SUV'lar, ticari araçlar ve elektrikli araçlar üretmektedir. Roewe, MG, Maxus gibi markalara sahiptir. Ayrıca General Motors ve Volkswagen ile ortak girişimleri bulunmaktadır.",
      country: "Çin",
      website: "https://www.saicmotor.com/",
      img: "/saic-motor.png",

      isBoycotted: true,
      boycottReason:
        "Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. SAIC Motor, Çin menşeli bir şirket olduğu için boykot kapsamına alınmıştır.",
    },
    {
      name: "SEAT",
      slug: "seat",
      description:
        "SEAT S.A., 1950 yılında İspanya'da kurulan İspanyol otomobil markasıdır. Marka, 1986 yılından bu yana Volkswagen Grubu'na aittir. SEAT, binek otomobiller ve SUV'lar üretmektedir. Ibiza, Leon, Ateca gibi modelleriyle bilinir. SEAT, özellikle genç tüketicilere yönelik tasarımları ve sportif karakteriyle tanınmaktadır.",
      country: "İspanya",
      website: "https://www.seat.com.tr/",
      img: "/seat.png",

      isBoycotted: true,
      boycottReason:
        "SEAT, Volkswagen Grubu'nun bir parçası olduğu için ve Volkswagen grubunun İsrail'e verdiği destek nedeniyle boykot listesinde yer almaktadır.",
    },
    {
      name: "Seres Automobile",
      slug: "seres-automobile",
      description:
        "Seres (eski adıyla SF Motors), Çin menşeli bir elektrikli araç üreticisidir. Şirket, elektrikli SUV'lar ve akıllı elektrikli araçlar üretmektedir. Seres, Huawei ile ortaklık yaparak Aito markası altında akıllı elektrikli araçlar geliştirmektedir. Seres, 5 ve Seres 9 gibi modellerle dikkat çekmektedir.",
      country: "Çin",
      website: "https://en.seres.cn/",
      img: "/seres-automobile.png",

      isBoycotted: true,
      boycottReason:
        "Seres, Çin menşeli olduğu için boykot listesindedir. Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot kapsamına alınmıştır.",
    },
    {
      name: "Skoda",
      slug: "skoda",
      description:
        "Skoda Auto, 1895 yılında Çekoslovakya'da (şimdiki Çek Cumhuriyeti) kurulan köklü bir otomobil markasıdır. 1991 yılından bu yana Volkswagen Grubu'na aittir. Skoda, binek otomobiller, SUV'lar ve hafif ticari araçlar üretmektedir. Octavia, Superb, Fabia, Kodiaq, Kamiq gibi modelleriyle bilinir. Marka, geniş iç hacim, pratiklik ve uygun fiyat-performans oranıyla tanınmaktadır.",
      country: "Çekya",
      website: "https://www.skoda.com.tr/",
      img: "/skoda.png",

      isBoycotted: true,
      boycottReason:
        "Skoda, Volkswagen grubunun bir parçasıdır ve Volkswagen grubunun İsrail'e destek verdiği yönündeki iddialar nedeniyle Skoda da boykot kapsamına alınmıştır.",
    },
    {
      name: "Smart",
      slug: "smart",
      description:
        "Smart, 1994 yılında Swatch ve Mercedes-Benz ortaklığıyla kurulan kompakt şehir otomobilleri markasıdır. Marka, özellikle çok küçük boyutlu şehir araçlarıyla tanınmaktadır. 2019 yılından itibaren Smart, Mercedes-Benz ve Çin menşeli Geely Holding'in ortak girişimi haline gelmiştir. Marka, artık sadece elektrikli araçlar üretmektedir. Smart EQ serisi elektrikli küçük otomobillerle dikkat çekmektedir.",
      country: "Almanya",
      website: "https://www.smart.com/tr/",
      img: "/smart.png",

      isBoycotted: true,
      boycottReason:
        "17 Ekim 2023'te 100'den fazla Alman şirketi, İsrailli işgalcilerin savunan Filistin vatandaşlarının temsilcisi Hamas'ın direnişini terörist saldırı olarak nitelendiren markalar arasında Smart'ın çatı kuruluşu olan Mercedes Grubu da bulunmaktadır. Bu süreçte Yahudi karşıtlığına karşı ortak bir kampanyayla Axel Springer medyasında yer almıştır.",
    },
    {
      name: "SsangYong (KGM)",
      slug: "ssangyong-kgm",
      description:
        "SsangYong Motor Company (şimdiki KG Mobility olarak bilinir), 1954 yılında Güney Kore'de kurulan bir otomobil üreticisidir. SsangYong, 2022 yılında Güney Koreli KG konsorsiyumu tarafından satın alınmış ve KG Mobility adını almıştır. Korando, Tivoli, Rexton gibi SUV modelleriyle bilinir. Marka, uygun fiyatlı SUV segmentinde yer almaktadır.",
      country: "Güney Kore",
      website: "",
      img: "/ssangyong-kgm.png",

      isBoycotted: false,
    },
    {
      name: "Subaru",
      slug: "subaru",
      description:
        "Subaru Corporation, 1953 yılında Japonya'da kurulan ve boxer motor ve simetrik dört tekerlekten çekiş (AWD) sistemleriyle tanınan Japon otomobil üreticisidir. Subaru, binek otomobiller ve SUV'lar üretmektedir. Outback, Forester, XV, Impreza, WRX gibi modelleriyle bilinir. Marka, güvenlik, dayanıklılık ve rallirally geleneğiyle tanınmaktadır. Subaru markası, herhangi bir boykot listesinde yer almamaktadır. Japon menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.",
      country: "Japonya",
      website: "https://www.subaru.com.tr/",
      img: "/subaru.png",

      isBoycotted: false,
    },
    {
      name: "Suzuki",
      slug: "suzuki",
      description:
        "Suzuki Motor Corporation, 1909 yılında Japonya'da kurulan ve kompakt otomobiller, motosikletler ve dıştan takma motorlar üreten Japon otomobil üreticisidir. Suzuki, kompakt otomobiller, SUV'lar ve ticari araçlar üretmektedir. Swift, Vitara, Jimny, S-Cross gibi modelleriyle bilinir. Marka, küçük boyutlu ve yakıt tasarruflu araçlarıyla tanınmaktadır.",
      country: "Japonya",
      website: "https://www.suzuki.com.tr/",
      img: "/suzuki.png",

      isBoycotted: false,
    },
    {
      name: "Tesla",
      slug: "tesla",
      description:
        "Tesla, Inc., 2003 yılında Amerika Birleşik Devletleri'nde kurulan ve elektrikli araç üretiminde dünya lideri olan şirkettir. Elon Musk tarafından yönetilen şirket, elektrikli araç devrimini başlatan marka olarak kabul edilir. Tesla, elektrikli sedanlar, SUV'lar ve pick-up'lar üretmektedir. Model S, Model 3, Model X, Model Y ve Cybertruck gibi modelleriyle bilinir. Marka, otonom sürüş teknolojisi ve sürdürülebilir enerji çözümleriyle tanınmaktadır.",
      country: "Amerika Birleşik Devletleri",
      website: "https://www.tesla.com/tr_tr",
      img: "/tesla.png",

      isBoycotted: true,
      boycottReason:
        "Tesla şirketi, saldırı sonrası İsrail'deki bütün arabaların şarj istasyonlarını ücretsiz hale getirmesi nedeniyle boykot çağrılarına konu olmuştur.",
    },
    {
      name: "Tofaş",
      slug: "tofas",
      description:
        "Tofaş Türk Otomobil Fabrikası A.Ş., 1968 yılında Fiat ile yapılan ortaklık sonucunda Türkiye'de kurulan otomotiv şirketidir. Koç Holding ve Stellantis ortaklığında faaliyet göstermektedir. Tofaş, binek otomobillerin yanı sıra Fiat marka hafif ticari araçların da üretimini gerçekleştirmektedir. Fiat Egea (Tipo), Doblo gibi modelleri Türkiye'de üretmekte ve ihraç etmektedir. Tofaş boykot değildir. Yerli üretim olan Tofaş, Türkiye'de faaliyet gösteren bir şirket olarak boykot kapsamında değildir.",
      country: "Türkiye",
      website: "https://www.tofas.com.tr/",
      img: "/tofas.png",

      isBoycotted: false,
    },
    {
      name: "Togg",
      slug: "togg",
      description:
        "TOGG (Türkiye'nin Otomobili Girişim Grubu), Türkiye'nin ilk yerli otomobil markası olarak 2018 yılında kurulmuştur. Türkiye'nin yerli ve milli otomobil projesidir. Togg, tamamen elektrikli araçlar üretmektedir. T10X elektrikli SUV modeli ile 2023 yılında seri üretime başlamıştır. Marka, Türkiye'de yerli üretim ve teknoloji geliştirme odaklıdır. TOGG tamamen Türkiye merkezli üretim yaptığı için boykot kapsamına alınmamıştır.",
      country: "Türkiye",
      website: "https://www.togg.com.tr/",
      img: "/togg.png",

      isBoycotted: false,
    },
    {
      name: "Toyota",
      slug: "toyota",
      description:
        "Toyota Motor Corporation, 1937 yılında Japonya'da kurulan ve dünyanın en büyük otomobil üreticilerinden biri olan Japon şirketidir. Marka, güvenilirlik, kalite ve dayanıklılık konusunda endüstri standardı olarak kabul edilir. Toyota, binek otomobiller, SUV'lar, pick-up'lar, hibrit ve hidrojen yakıt hücreli araçlar üretmektedir. Corolla, Camry, RAV4, Land Cruiser, Prius gibi dünyada en çok satan modelleri bulunmaktadır.",
      country: "Japonya",
      website: "https://www.toyota.com.tr/",
      img: "/toyota.png",

      isBoycotted: false,
    },
    {
      name: "Volkswagen",
      slug: "volkswagen",
      description:
        "Volkswagen AG, 1937 yılında Almanya'da kurulan ve dünyanın en büyük otomobil üreticilerinden biri olan Alman otomotiv şirketidir. Volkswagen, binek otomobiller, SUV'lar, ticari araçlar ve elektrikli araçlar üretmektedir. Golf, Passat, Tiguan, ID serisi elektrikli araçlar gibi modelleriyle bilinir.",
      country: "Almanya",
      website: "https://www.vw.com.tr/",
      img: "/volkswagen.png",

      isBoycotted: true,
      boycottReason:
        "17 Ekim 2023'te yayımlanan listelerde Volkswagen'in de bulunduğu 100'den fazla Alman şirketi, İsrailli işgalcilere topraklarını savunan Filistin vatandaşlarının temsilcisi Hamas'ın direnişini terörist saldırı olarak nitelendiren markalar arasında yer almıştır. Bu süreçte Yahudi karşıtı kampanya Axel Springer medyasında yer almıştır.",
    },
    {
      name: "Volvo",
      slug: "volvo",
      description:
        "Volvo Car Corporation, 1927 yılında İsveç'te kurulan ve güvenlik konusunda öncü olan İsveç otomobil markasıdır. 2010 yılından bu yana Çin menşeli Geely Holding'e aittir. Volvo, binek otomobiller ve SUV'lar üretmektedir. S60, S90, V60, XC40, XC60, XC90 gibi modelleriyle bilinir. Marka, güvenlik teknolojileri, İskandinav tasarım ve sürdürülebilirlik odaklı yaklaşımıyla tanınmaktadır.",
      country: "İsveç",
      website: "https://www.volvocars.com/tr/",
      img: "/volvo.png",

      isBoycotted: true,
      boycottReason:
        "Volvo'nun ürettiği makineler İsrail'de kullanıldı ve Volvo'nun da İsrail'de yatırımları var; bu nedenle boykot listesinde yer almaktadır.",
    },
    {
      name: "Xiaomi Auto",
      slug: "xiaomi-auto",
      description:
        "Xiaomi Auto, Çin teknoloji devi Xiaomi Corporation'ın 2021 yılında otomotiv sektöründe kurduğu elektrikli araç markasıdır. Şirket, akıllı telefon ve elektronik ürünlerdeki başarısını otomotiv sektörüne taşımaktadır. Xiaomi Auto, akıllı elektrikli sedanlar üretmektedir. SU7 elektrikli sedan modeli ile 2024 yılında pazara girmiştir. Marka, ileri teknoloji, yapay zeka entegrasyonu ve uygun fiyat stratejisiyle dikkat çekmektedir.",
      country: "Çin",
      website: "https://www.xiaomiev.com/",
      img: "/xiaomi-auto.png",

      isBoycotted: true,
      boycottReason:
        "Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Xiaomi Auto, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.",
    },
    {
      name: "XPeng",
      slug: "xpeng",
      description:
        "XPeng Motors, 2014 yılında Çin'de kurulan ve akıllı elektrikli araç üretimine odaklanmış bir otomobil şirketidir. Şirket, yapay zeka, otonom sürüş teknolojisi ve ileri yazılım çözümlerine odaklanmaktadır. XPeng, elektrikli sedanlar ve SUV'lar üretmektedir; P7, P5, G3, G9 gibi modelleriyle bilinir.",
      country: "Çin",
      website: "https://www.xpeng.com/",
      img: "/xpeng.png",

      isBoycotted: true,
      boycottReason:
        "Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. XPeng, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.",
    },
    {
      name: "Zeekr",
      slug: "zeekr",
      description:
        "Zeekr, 2021 yılında Geely Holding Group tarafından kurulan premium elektrikli araç markasıdır. Marka, yüksek performanslı ve teknoloji odaklı elektrikli araçlar üretmektedir. Zeekr, elektrikli sedanlar ve SUV'lar üretmektedir. Zeekr 001, Zeekr 009, Zeekr X gibi modelleriyle bilinir. Marka, hızlı şarj teknolojisi, yüksek performans ve lüks özellikleriyle dikkat çeker.",
      country: "Çin",
      website: "https://www.zeekrlife.com/global/",
      img: "/zeekr.png",

      isBoycotted: true,
      boycottReason:
        "Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Zeekr, Geely Holding Group'a ait Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.",
    },
    {
      name: "WEY",
      slug: "wey",
      description:
        "WEY, 2016 yılında Great Wall Motors (GWM) tarafından kurulan Çin menşeli premium SUV markasıdır. WEY, premium SUV'lar ve hibrit elektrikli araçlar üretmektedir. VV5, VV6, VV7, Coffee serisi gibi modelleriyle bilinir. Marka, lüks donanım, gelişmiş teknoloji ve güvenlik özellikleriyle dikkat çekmektedir.",
      country: "Çin",
      website: "https://www.gwm-eu.com/eu/en/wey05",
      img: "/wey.png",

      isBoycotted: true,
      boycottReason:
        "Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. WEY, Great Wall Motors'a ait Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.",
    },

    {
      name: "Otokoc",
      slug: "otokoc",
      description:
        'Otokoc Otomotiv, Türkiye merkezli bir otomotiv şirketidir ve 1960\'lardan beri faaliyet göstermektedir. Şirket, araç kiralama, filo yönetimi ve otomobil satış hizmetleri sunmaktadır. Otokoc, özellikle uzun dönem ve kısa dönem araç kiralama çözümleri ile bilinir ve Türkiye genelinde geniş bir şube ağına sahiptir. Bu marka, BOYKOT listelerine dahil edilmiştir ve boykot edilmesini gerektiren olumsuz açıklamalar ya da destekler söz konusudur. Bu yüzden, marka "boykot hususunda" güvenli olarak kabul edilmemekte ve tüketiciler tarafından tercih edilmemesi önerilmektedir.',
      country: "Türkiye",
      website: "",
      img: "/otokoc.png",

      isBoycotted: true,
      boycottReason: "Boykot listelerinde yer aldığı belirtilmektedir.",
    },
    {
      name: "Maserati",
      slug: "maserati",
      description:
        "Maserati S.p.A., 1914 yılında Maserati kardeşler tarafından İtalya'da kurulan lüks spor otomobil üreticisidir. Marka, İtalyan lüks otomobil geleneğini ve yarış mirasını temsil etmektedir. Maserati, şu anda Stellantis grubunun bir parçasıdır. Ghibli, Quattroporte, Levante ve yeni MC20 süper otomobili gibi modelleriyle bilinir. Trident (üç çatallı mızrak) logosu markanın sembolüdür. Maserati markası, herhangi bir boykot listesinde yer almamaktadır. İtalyan menşeli olan marka, İsrail'e destek veya Çin menşeli olmakla ilgili bir durum tespit edilmemiştir.",
      country: "İtalya",
      website: "https://www.maserati.com/tr/tr",
      img: "/maserati.png",

      isBoycotted: false,
    },
    {
      name: "Lamborghini",
      slug: "lamborghini",
      description:
        "Automobili Lamborghini S.p.A., 1963 yılında Ferruccio Lamborghini tarafından İtalya'da kurulan lüks spor otomobil üreticisidir. Marka, agresif tasarımları ve yüksek performanslı süper otomobilleriyle dünya çapında ikonik bir statüye sahiptir. Lamborghini, 1998 yılından bu yana Volkswagen Grubu bünyesinde faaliyet göstermektedir ve Audi'nin bir yan kuruluşudur. Aventador, Huracán ve Urus gibi modelleriyle tanınır. Boğa figürü logosu ve makas kapıları markanın ayırt edici özelliklerindendir. Bu marka boykot listelerine dahil edilmiştir ve boykot edilmesini gerektiren olumsuz açıklamalar ya da destekler söz konusudur. Bu yüzden, marka \"boykot hususunda\" güvenli olarak kabul edilmemekte ve tüketiciler tarafından tercih edilmemesi önerilmektedir.",
      country: "İtalya",
      website: "https://www.lamborghini.com/en-en",
      img: "/lamborghini.png",

      isBoycotted: true,
      boycottReason:
        "Volkswagen Grubu bağlantısı nedeniyle boykot çağrılarına konu olmaktadır.",
    },
  ],
};

export default otomotivCategory;
