const sigaraCategory = {
  order: 34,
  name: "Sigara",
  slug: "sigara",
  iconKey: "cigarette",
  description: "Tütün ve tütün ürünleri markaları.",
  brands: [
    {
      name: "Kent",
      slug: "kent",
      description: ``,
      country: "",
      website: "",
      img: "/sigara.png",

      isBoycotted: true,
      boycottReason: ``,
    },
    {
      name: "Camel",
      slug: "camel",
      description: `Camel, 1913 yılında ABD merkezli R.J.Reynolds Tobacco Company tarafından piyasaya sürülen ikonik bir sigara markasıdır. Marka, farklı tütün türlerinin karışımıyla elde edilen benzersiz tat profili ve yenilikçi filtre tasarımıyla dikkat çekmiştir. Lansman kampanyalarında kullanılan “The Camels are coming!” sloganı ve “Old Joe” adını taşıyan deve figürü, markanın görsel kimliğini güçlendirmiş ve tüketicilerin ilgisini çekmiştir. İlk yıllarında büyük bir satış başarısı yakalayan Camel, Amerika’da hızla popülerleşmiş ve tütün endüstrisinde önemli bir yer edinmiştir.
      Camel, piyasaya çıktığı dönemde hem filtreli hem de filtresiz seçenekleriyle geniş bir tüketici kitlesine hitap etmiştir. Marka, özellikle Amerikan ve Türk tütünlerinin karışımıyla üretilen sigaralarıyla benzersiz bir tat sunmayı hedeflemiştir. Paket tasarımı ve reklam stratejileri, Camel’in kültürel bir ikon hâline gelmesine yardımcı olmuş ve markayı sadece bir sigara markası olmaktan öteye taşımıştır.
      Günümüzde Camel’in Amerika’daki üretimi hâlen R.J Reynolds Tobacco Company tarafından yapılırken, uluslararası pazarlarda marka hakları Japan Tobacco International (JTI) tarafından yönetilmektedir. Camel, reklam ve sponsorluk kampanyalarıyla dikkat çekerken, gençleri hedef alan “Joe Camel” karakteri nedeniyle tartışmalara da konu olmuştur. Marka, dünya genelinde 90’dan fazla ülkede satılmakta ve tütün endüstrisinin önde gelen markalarından biri olarak varlığını sürdürmektedir.`,
      country: "Türkiye & Amerika Birleşik Devletleri",
      website: "",
      img: "/camel.png",

      isBoycotted: false,
      boycottReason: ``,
    },
    {
      name: "Parliament",
      slug: "parliament",
      description: `Parliament, 1931 yılında Philip Morris tarafından piyasaya sürülen bir sigara markasıdır. Markanın en dikkat çeken özelliği, “gömülü filtre” adı verilen özel filtre sistemidir; bu tasarım dumanın filtreye temasını azaltarak farklı bir içim deneyimi sunar. Reklamlarında genellikle bu filtre sistemi ve tadın vurgusu öne çıkar.
      Parliament, Amerika’da sınırlı bir pazar payına sahip olsa da uluslararası alanda 30’dan fazla ülkede satılmaktadır ve genellikle “premium” segmentte konumlandırılır. Günümüzde üretimi Philip Morris International tarafından yapılmakta olup, markanın amacı yüksek kalite ve yenilik algısını korumaktır.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.parliament.com",
      img: "/parliament.png",

      isBoycotted: true,
      boycottReason: `Philip Morris International, İsrail’e yönelik destekleri ve İsrail’e ait sahipleri sebebiyle boykot listemizdedir.`,
    },
    {
      name: "Marlboro",
      slug: "marlboro",
      description: `Marlboro, 1924 yılında ABD’de Philip Morris tarafından piyasaya sürülen ikonik bir sigara markasıdır. Başlangıçta kadınlara yönelik bir sigara olarak tasarlanmışken, 1950’lerde “Marlboro Man” kampanyası ile erkek tüketiciler arasında popüler hale gelmiştir. Marka, özellikle kırmızı-beyaz paket tasarımı ve kovboy temalı reklamlarıyla tanınır.
      Marlboro, dünya çapında en çok bilinen ve en çok satan sigara markalarından biridir. ABD’de Philip Morris USA tarafından, uluslararası pazarlarda ise Philip Morris International tarafından üretilir ve satılır. Marka genellikle “premium” segmentte konumlandırılır ve farklı çeşitleriyle tüketicilere sunulur.`,
      country: "Amerika Birleşik Devletleri",
      website: "",
      img: "/marlboro.png",

      isBoycotted: true,
      boycottReason: ``,
    },
    {
      name: "Philip Morris",
      slug: "philip-morris",
      description: `Philip Morris, 1847 yılında İngiltere’de kurulan ve günümüzde merkezi ABD ve İsviçre’de bulunan uluslararası bir tütün şirketidir. Şirket, Marlboro, Parliament, L&M ve Chesterfield gibi dünyaca ünlü sigara markalarının sahibidir.
      Philip Morris International (PMI) ve ABD’deki operasyonlarını yürüten Philip Morris USA olarak ikiye ayrılmıştır. PMI, uluslararası pazarlarda sigara ve tütün ürünlerinin üretim ve satışını yürütürken, Philip Morris USA ABD iç pazarına odaklanır. Şirket, tütün endüstrisinde “premium” segmentte güçlü bir konuma sahiptir ve inovatif ürünler, filtre sistemleri ve aromalı sigara çeşitleri ile bilinir.
      Aynı zamanda Philip Morris, son yıllarda ısıtılmış tütün ürünleri ve elektronik sigaralar gibi daha az zararlı olabileceği öne sürülen alternatif ürünler geliştirmeye de yatırım yapmaktadır. Şirket, dünya genelinde 180’den fazla ülkede faaliyet göstermektedir.`,
      country: "Amerika Birleşik Devletleri & İsviçre",
      website: "",
      img: "/philip-morris.png",

      isBoycotted: true,
      boycottReason: `PMI’ın İsrail ile olan bu büyük ölçekli ticari ilişkisi nedeniyle şirketin boykot edilmesi gerektiği düşünülmüştür.`,
    },
    {
      name: "Philip Morris Grup",
      slug: "philip-morris-grup",
      description: `Philip Morris Grubu, dünya çapında tütün ve tütün ürünleri üreten, dağıtan ve satan büyük bir holding yapısıdır. Grup temelde iki ana şirketten oluşur:
      1- Philip Morris International (PMI): Uluslararası pazarlarda sigara ve tütün ürünlerinin üretim ve satışını yürütür. Marlboro, Parliament, L&M, Chesterfield gibi markalar PMI tarafından dünya genelinde pazarlanır. Merkezi İsviçre’de bulunur ve 180’den fazla ülkede faaliyet gösterir.
      2- Philip Morris USA: ABD iç pazarına odaklanır. Marlboro gibi markaların ABD’deki üretim ve dağıtımını gerçekleştirir. Şirket, Amerikan tütün pazarının lider oyuncularından biridir.
      Philip Morris Grubu, geleneksel sigaraların yanı sıra, ısıtılmış tütün ürünleri ve elektronik sigaralar gibi inovatif ürünlere de yatırım yapmaktadır. Grup, premium segmentte güçlü bir marka portföyüne sahip olup, dünya genelinde tütün endüstrisinin önde gelen oyuncularından biri olarak kabul edilir.`,
      country: "Amerika Birleşik Devletleri & İsviçre",
      website: "",
      img: "/philip-morris-grup.png",

      isBoycotted: true,
      boycottReason: `PMI’ın İsrail ile olan bu büyük ölçekli ticari ilişkisi nedeniyle şirketin boykot edilmesi gerektiği düşünülmüştür.`,
    },
    {
      name: "Muratti",
      slug: "muratti",
      description: `Muratti, 1821 yılında İngiltere’de kurulmuş köklü bir sigara markasıdır. Günümüzde merkezi Hollanda’da bulunan British American Tobacco (BAT) tarafından üretilmektedir. Marka, özellikle ince ve hafif sigara seçenekleriyle tanınır ve Avrupa pazarında yaygın olarak tercih edilir.
      Muratti, farklı tütün karışımları ve filtre seçenekleri sunarak çeşitli tüketici profillerine hitap eder. Reklam ve paket tasarımı açısından klasik ve zarif bir çizgi benimsemiştir. Avrupa’da “premium” segmentte konumlandırılan Muratti, özellikle Almanya, Hollanda ve Türkiye gibi pazarlarda güçlü bir varlık göstermektedir.`,
      country: "Amerika Birleşik Devletleri",
      website: "",
      img: "/muratti.png",

      isBoycotted: true,
      boycottReason: `British American Tobacco, İsrail’e yönelik destekleri ve İsrail’e ait sahipleri sebebiyle boykot listemizdedir.`,
    },
    {
      name: "Lark",
      slug: "lark",
      description: `Lark, 1963 yılında ABD’de Philip Morris tarafından piyasaya sürülen bir sigara markasıdır. Markanın öne çıkan özelliği, ince ve uzun filtreli tasarımı ile hafif içim sunmasıdır. Lark, özellikle filtreli sigara konseptinin yaygınlaşmaya başladığı dönemde pazara girmiş ve “light” veya “mild” seçenekleriyle tüketicilere hitap etmiştir.
      Marka, Philip Morris’in uluslararası portföyünde yer almakta olup, farklı ülkelerde üretim ve dağıtımı Philip Morris International tarafından yürütülmektedir. Reklam kampanyalarında genellikle ürünün hafifliği ve filtre sistemi öne çıkarılır. Günümüzde Lark, dünya genelinde birçok ülkede satılmakta ve genellikle orta‑üst segmentte konumlandırılmaktadır.`,
      country: "Amerika Birleşik Devletleri",
      website: "",
      img: "/lark.png",
      isBoycotted: true,
      boycottReason: `Philip Morris International, İsrail’e yönelik destekleri ve İsrail’e ait sahipleri sebebiyle boykot listemizdedir.`,
    },
    {
      name: "L&M",
      slug: "l-m",
      description: `L&M, 1953 yılında ABD’de Liggett & Myers Tobacco Company tarafından piyasaya sürülen bir sigara markasıdır. Markanın adı, kurucuları olan Liggett ve Myers’ın baş harflerinden gelir. L&M, özellikle uygun fiyatlı ve geniş tüketici kitlesine hitap eden bir marka olarak öne çıkar.
      Günümüzde British American Tobacco (BAT) tarafından üretilmekte ve uluslararası pazarlarda dağıtılmaktadır. Marka, filtreli ve filtresiz seçenekler sunar ve paket tasarımı ile farklı tütün karışımlarıyla çeşitlendirilmiştir. Avrupa, Asya ve Latin Amerika’da yaygın olarak bulunan L&M, genellikle orta segmentte konumlandırılır ve uygun fiyat-performans oranıyla tanınır.`,
      country: "Amerika Birleşik Devletleri",
      website: "",
      img: "/l-m.png",
      isBoycotted: true,
      boycottReason: `Liggett Group, Vector Group’un yan şirketidir. Vector Group’un en büyük hissedarı %12’lik pay ile BlackRock’tır. Amerikan Dostlar Hizmet Komitesi (AFSC) tarafından hazırlanan bir rapora göre BlackRock, İsrail’in askeri işgali, yerleşimlerin genişletilmesi ve Gazze kuşatması ile doğrudan veya dolaylı olarak ilgisi olan 58 şirkete 33 milyar doların üzerinde yatırım yapmıştır.`,
    },
    {
      name: "Lark Bond Street",
      slug: "lark-bond-street",
      description: `Lark Bond Street, Philip Morris tarafından üretilen sigara markalarının bir alt serisidir. Lark markası, 1963 yılında piyasaya sürülmüş ve özellikle ince ve uzun filtreli tasarımı ile hafif içim sunmasıyla tanınmıştır. Bond Street ise Lark’ın daha “premium” segmente hitap eden ve özellikle Avrupa pazarında satışa sunulan bir çeşididir.
      Bu seri, filtre sistemi ve tütün karışımıyla öne çıkar; reklam ve paket tasarımı genellikle şık ve zarif bir görünüme sahiptir. Lark Bond Street, özellikle orta‑üst segment tüketicilere yöneliktir ve Philip Morris International tarafından uluslararası pazarlarda dağıtılmaktadır.`,
      country: "Amerika Birleşik Devletleri",
      website: "",
      img: "/lark-bond-street.png",
      isBoycotted: true,
      boycottReason: `Philip Morris USA'nın İsrail ile olan bu büyük ölçekli ticari ilişkisi nedeniyle markanın boykot edilmesi gerektiği düşünülmüştür.`,
    },
    {
      name: "Capriholdings",
      slug: "capriholdings",
      description: `Capri Holdings Limited, merkezi Hamilton, Bermuda’da bulunan ve lüks moda sektöründe faaliyet gösteren uluslararası bir holding şirketidir. Şirket, özellikle Michael Kors, Jimmy Choo ve Versace gibi dünyaca ünlü markaların sahibi olarak bilinir.
      Capri Holdings, 2018 yılında Michael Kors’un Versace’yi satın almasıyla bugünkü yapısına kavuşmuştur ve lüks moda, ayakkabı, çanta ve aksesuar üretimi ile küresel pazarlarda faaliyet gösterir. Şirketin amacı, güçlü marka portföyü ve küresel dağıtım ağı sayesinde lüks tüketici segmentinde lider konumunu sürdürmektir. Merkezi yönetim ve finansal operasyonları Bermuda’da bulunurken, markaların tasarım ve üretim merkezleri genellikle İtalya, ABD ve Avrupa’nın farklı ülkelerindedir.`,
      country: "Britanya",
      website: "",
      img: "/capriholdings.png",
      isBoycotted: true,
      boycottReason: `...`,
    },
    {
      name: "Chesterfield",
      slug: "chesterfield",
      description: `Chesterfield, 1873 yılında ABD’de Liggett & Myers Tobacco Company tarafından piyasaya sürülen köklü bir sigara markasıdır. Marka, özellikle uzun ve hafif filtreli sigaraları ile tanınmıştır ve tarih boyunca hem Amerika’da hem de uluslararası pazarlarda geniş bir tüketici kitlesine hitap etmiştir.
      Günümüzde Chesterfield, Philip Morris International (PMI) tarafından uluslararası pazarlarda üretilmekte ve dağıtılmaktadır. Marka, farklı tütün karışımları ve filtre seçenekleri sunar; paket tasarımı klasik kırmızı‑beyaz renklerle dikkat çeker. Chesterfield, genellikle orta segmentte konumlandırılır ve dünya genelinde birçok ülkede satışa sunulur.`,
      country: "Amerika Birleşik Devletleri",
      website: "",
      img: "/chesterfield.png",

      isBoycotted: true,
      boycottReason: `PMI’ın İsrail ile olan bu büyük ölçekli ticari ilişkisi nedeniyle şirketin boykot edilmesi gerektiği düşünülmüştür.`,
    },
    {
      name: "Virginia Slims",
      slug: "virginia-slims",
      description: `Virginia Slims, 1968 yılında ABD’de Philip Morris tarafından piyasaya sürülen bir sigara markasıdır. Başlangıçta özellikle kadın tüketicilere hitap etmek için tasarlanmış ve “ince, uzun ve zarif” tasarımıyla öne çıkmıştır. Marka, kadınlara yönelik pazarlama stratejileri ve sloganlarıyla dikkat çekmiş; örneğin “You’ve come a long way, baby” (“Çok yol katettin, bebeğim”) gibi kampanyalar, kadınların özgürlük ve bağımsızlık temalarıyla bağdaştırılmıştır.
      Virginia Slims, günümüzde Philip Morris International(PMI) tarafından uluslararası pazarlarda üretilmekte ve dağıtılmaktadır. Farklı aromalı ve filtreli seçenekleriyle orta‑üst segment tüketici kitlesine hitap eden marka, özellikle estetik ve ince tasarım vurgusuyla kadın tüketiciler arasında tanınır.`,
      country: "Amerika Birleşik Devletleri",
      website: "",
      img: "/virginia-slims.png",

      isBoycotted: true,
      boycottReason: `PMI’ın İsrail ile olan bu büyük ölçekli ticari ilişkisi nedeniyle şirketin boykot edilmesi gerektiği düşünülmüştür.`,
    },
    {
      name: "Winston",
      slug: "winston",
      description: ``,
      country: "",
      img: "/winston.png",

      isBoycotted: true,
      boycottReason: ``,
    },
  ],
};

export default sigaraCategory;
