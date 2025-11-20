const marketAlisverisiCategory = {
 name: "Market Alışverişi",
 slug: "market-alisverisi",
 iconKey: "shopping-cart",
 description: "Market ve alışveriş zincirleri.",
 ctgry: ["Sigara", "İçecek", "Yiyecek", "Temizlik", "Şirket", "Kişisel Bakım"],
 brands: [
  /*
https://boykotdedektifi.org/b/kan-tong-691
https://boykotdedektifi.org/b/kevin-s-natural-foods-702
https://boykotdedektifi.org/b/seeds-of-change-710
https://boykotdedektifi.org/b/foodspring-711
*/

  //! TEMİZLİK MARKALARI
  // https://boykotdedektifi.org/c/temizlik-13
  // https://boykotdedektifi.org/b/dalan-573
  //! SİGARA MARKALARI
  {
   name: "Kent",
   slug: "kent",
   description: ``,
   ctgry: "Sigara",
   country: "",
   website: "",
   img: "/sigara.png",
   isBoycotted: "boykot",
   boycottReason: ``,
  },
  {
   name: "Camel",
   slug: "camel",
   ctgry: "Sigara",
   description: `Camel, 1913 yılında ABD merkezli R.J.Reynolds Tobacco Company tarafından piyasaya sürülen ikonik bir sigara markasıdır. Marka, farklı tütün türlerinin karışımıyla elde edilen benzersiz tat profili ve yenilikçi filtre tasarımıyla dikkat çekmiştir. Lansman kampanyalarında kullanılan “The Camels are coming!” sloganı ve “Old Joe” adını taşıyan deve figürü, markanın görsel kimliğini güçlendirmiş ve tüketicilerin ilgisini çekmiştir. İlk yıllarında büyük bir satış başarısı yakalayan Camel, Amerika’da hızla popülerleşmiş ve tütün endüstrisinde önemli bir yer edinmiştir.
     Camel, piyasaya çıktığı dönemde hem filtreli hem de filtresiz seçenekleriyle geniş bir tüketici kitlesine hitap etmiştir. Marka, özellikle Amerikan ve Türk tütünlerinin karışımıyla üretilen sigaralarıyla benzersiz bir tat sunmayı hedeflemiştir. Paket tasarımı ve reklam stratejileri, Camel’in kültürel bir ikon hâline gelmesine yardımcı olmuş ve markayı sadece bir sigara markası olmaktan öteye taşımıştır.
     Günümüzde Camel’in Amerika’daki üretimi hâlen R.J Reynolds Tobacco Company tarafından yapılırken, uluslararası pazarlarda marka hakları Japan Tobacco International (JTI) tarafından yönetilmektedir. Camel, reklam ve sponsorluk kampanyalarıyla dikkat çekerken, gençleri hedef alan “Joe Camel” karakteri nedeniyle tartışmalara da konu olmuştur. Marka, dünya genelinde 90’dan fazla ülkede satılmakta ve tütün endüstrisinin önde gelen markalarından biri olarak varlığını sürdürmektedir.`,
   country: "Türkiye & ABD",
   website: "",
   img: "/camel.png",

   isBoycotted: "boykot-degil",
   boycottReason: ``,
  },
  {
   name: "Parliament",
   slug: "parliament",
   ctgry: "Sigara",
   description: `Parliament, 1931 yılında Philip Morris tarafından piyasaya sürülen bir sigara markasıdır. Markanın en dikkat çeken özelliği, “gömülü filtre” adı verilen özel filtre sistemidir; bu tasarım dumanın filtreye temasını azaltarak farklı bir içim deneyimi sunar. Reklamlarında genellikle bu filtre sistemi ve tadın vurgusu öne çıkar.
     Parliament, Amerika’da sınırlı bir pazar payına sahip olsa da uluslararası alanda 30’dan fazla ülkede satılmaktadır ve genellikle “premium” segmentte konumlandırılır. Günümüzde üretimi Philip Morris International tarafından yapılmakta olup, markanın amacı yüksek kalite ve yenilik algısını korumaktır.`,
   country: "ABD",
   website: "https://www.parliament.com",
   img: "/parliament.png",

   isBoycotted: "boykot",
   boycottReason: `Philip Morris International, İsrail’e yönelik destekleri ve İsrail’e ait sahipleri sebebiyle boykot listemizdedir.`,
  },
  {
   name: "Marlboro",
   slug: "marlboro",
   ctgry: "Sigara",
   description: `Marlboro, 1924 yılında ABD’de Philip Morris tarafından piyasaya sürülen ikonik bir sigara markasıdır. Başlangıçta kadınlara yönelik bir sigara olarak tasarlanmışken, 1950’lerde “Marlboro Man” kampanyası ile erkek tüketiciler arasında popüler hale gelmiştir. Marka, özellikle kırmızı-beyaz paket tasarımı ve kovboy temalı reklamlarıyla tanınır.
     Marlboro, dünya çapında en çok bilinen ve en çok satan sigara markalarından biridir. ABD’de Philip Morris USA tarafından, uluslararası pazarlarda ise Philip Morris International tarafından üretilir ve satılır. Marka genellikle “premium” segmentte konumlandırılır ve farklı çeşitleriyle tüketicilere sunulur.`,
   country: "ABD",
   website: "",
   img: "/marlboro.png",

   isBoycotted: "boykot",
   boycottReason: ``,
  },
  {
   name: "Philip Morris",
   slug: "philip-morris",
   ctgry: "Sigara",
   description: `Philip Morris, 1847 yılında İngiltere’de kurulan ve günümüzde merkezi ABD ve İsviçre’de bulunan uluslararası bir tütün şirketidir. Şirket, Marlboro, Parliament, L&M ve Chesterfield gibi dünyaca ünlü sigara markalarının sahibidir.
     Philip Morris International (PMI) ve ABD’deki operasyonlarını yürüten Philip Morris USA olarak ikiye ayrılmıştır. PMI, uluslararası pazarlarda sigara ve tütün ürünlerinin üretim ve satışını yürütürken, Philip Morris USA ABD iç pazarına odaklanır. Şirket, tütün endüstrisinde “premium” segmentte güçlü bir konuma sahiptir ve inovatif ürünler, filtre sistemleri ve aromalı sigara çeşitleri ile bilinir.
     Aynı zamanda Philip Morris, son yıllarda ısıtılmış tütün ürünleri ve elektronik sigaralar gibi daha az zararlı olabileceği öne sürülen alternatif ürünler geliştirmeye de yatırım yapmaktadır. Şirket, dünya genelinde 180’den fazla ülkede faaliyet göstermektedir.`,
   country: "ABD & İsviçre",
   website: "",
   img: "/philip-morris.png",

   isBoycotted: "boykot",
   boycottReason: `PMI’ın İsrail ile olan bu büyük ölçekli ticari ilişkisi nedeniyle şirketin boykot edilmesi gerektiği düşünülmüştür.`,
  },
  {
   name: "Philip Morris Grup",
   slug: "philip-morris-grup",
   ctgry: "Sigara",
   description: `Philip Morris Grubu, dünya çapında tütün ve tütün ürünleri üreten, dağıtan ve satan büyük bir holding yapısıdır. Grup temelde iki ana şirketten oluşur:
     1- Philip Morris International (PMI): Uluslararası pazarlarda sigara ve tütün ürünlerinin üretim ve satışını yürütür. Marlboro, Parliament, L&M, Chesterfield gibi markalar PMI tarafından dünya genelinde pazarlanır. Merkezi İsviçre’de bulunur ve 180’den fazla ülkede faaliyet gösterir.
     2- Philip Morris USA: ABD iç pazarına odaklanır. Marlboro gibi markaların ABD’deki üretim ve dağıtımını gerçekleştirir. Şirket, Amerikan tütün pazarının lider oyuncularından biridir.
     Philip Morris Grubu, geleneksel sigaraların yanı sıra, ısıtılmış tütün ürünleri ve elektronik sigaralar gibi inovatif ürünlere de yatırım yapmaktadır. Grup, premium segmentte güçlü bir marka portföyüne sahip olup, dünya genelinde tütün endüstrisinin önde gelen oyuncularından biri olarak kabul edilir.`,
   country: "ABD & İsviçre",
   website: "",
   img: "/philip-morris-grup.png",

   isBoycotted: "boykot",
   boycottReason: `PMI’ın İsrail ile olan bu büyük ölçekli ticari ilişkisi nedeniyle şirketin boykot edilmesi gerektiği düşünülmüştür.`,
  },
  {
   name: "Muratti",
   slug: "muratti",
   ctgry: "Sigara",
   description: `Muratti, 1821 yılında İngiltere’de kurulmuş köklü bir sigara markasıdır. Günümüzde merkezi Hollanda’da bulunan British American Tobacco (BAT) tarafından üretilmektedir. Marka, özellikle ince ve hafif sigara seçenekleriyle tanınır ve Avrupa pazarında yaygın olarak tercih edilir.
     Muratti, farklı tütün karışımları ve filtre seçenekleri sunarak çeşitli tüketici profillerine hitap eder. Reklam ve paket tasarımı açısından klasik ve zarif bir çizgi benimsemiştir. Avrupa’da “premium” segmentte konumlandırılan Muratti, özellikle Almanya, Hollanda ve Türkiye gibi pazarlarda güçlü bir varlık göstermektedir.`,
   country: "ABD",
   website: "",
   img: "/muratti.png",

   isBoycotted: "boykot",
   boycottReason: `British American Tobacco, İsrail’e yönelik destekleri ve İsrail’e ait sahipleri sebebiyle boykot listemizdedir.`,
  },
  {
   name: "Lark",
   slug: "lark",
   ctgry: "Sigara",
   description: `Lark, 1963 yılında ABD’de Philip Morris tarafından piyasaya sürülen bir sigara markasıdır. Markanın öne çıkan özelliği, ince ve uzun filtreli tasarımı ile hafif içim sunmasıdır. Lark, özellikle filtreli sigara konseptinin yaygınlaşmaya başladığı dönemde pazara girmiş ve “light” veya “mild” seçenekleriyle tüketicilere hitap etmiştir.
     Marka, Philip Morris’in uluslararası portföyünde yer almakta olup, farklı ülkelerde üretim ve dağıtımı Philip Morris International tarafından yürütülmektedir. Reklam kampanyalarında genellikle ürünün hafifliği ve filtre sistemi öne çıkarılır. Günümüzde Lark, dünya genelinde birçok ülkede satılmakta ve genellikle orta‑üst segmentte konumlandırılmaktadır.`,
   country: "ABD",
   website: "",
   img: "/lark.png",
   isBoycotted: "boykot",
   boycottReason: `Philip Morris International, İsrail’e yönelik destekleri ve İsrail’e ait sahipleri sebebiyle boykot listemizdedir.`,
  },
  {
   name: "L&M",
   slug: "l-m",
   ctgry: "Sigara",
   description: `L&M, 1953 yılında ABD’de Liggett & Myers Tobacco Company tarafından piyasaya sürülen bir sigara markasıdır. Markanın adı, kurucuları olan Liggett ve Myers’ın baş harflerinden gelir. L&M, özellikle uygun fiyatlı ve geniş tüketici kitlesine hitap eden bir marka olarak öne çıkar.
     Günümüzde British American Tobacco (BAT) tarafından üretilmekte ve uluslararası pazarlarda dağıtılmaktadır. Marka, filtreli ve filtresiz seçenekler sunar ve paket tasarımı ile farklı tütün karışımlarıyla çeşitlendirilmiştir. Avrupa, Asya ve Latin Amerika’da yaygın olarak bulunan L&M, genellikle orta segmentte konumlandırılır ve uygun fiyat-performans oranıyla tanınır.`,
   country: "ABD",
   website: "",
   img: "/l-m.png",
   isBoycotted: "boykot",
   boycottReason: `Liggett Group, Vector Group’un yan şirketidir. Vector Group’un en büyük hissedarı %12’lik pay ile BlackRock’tır. Amerikan Dostlar Hizmet Komitesi (AFSC) tarafından hazırlanan bir rapora göre BlackRock, İsrail’in askeri işgali, yerleşimlerin genişletilmesi ve Gazze kuşatması ile doğrudan veya dolaylı olarak ilgisi olan 58 şirkete 33 milyar doların üzerinde yatırım yapmıştır.`,
  },
  {
   name: "Lark Bond Street",
   slug: "lark-bond-street",
   ctgry: "Sigara",
   description: `Lark Bond Street, Philip Morris tarafından üretilen sigara markalarının bir alt serisidir. Lark markası, 1963 yılında piyasaya sürülmüş ve özellikle ince ve uzun filtreli tasarımı ile hafif içim sunmasıyla tanınmıştır. Bond Street ise Lark’ın daha “premium” segmente hitap eden ve özellikle Avrupa pazarında satışa sunulan bir çeşididir.
     Bu seri, filtre sistemi ve tütün karışımıyla öne çıkar; reklam ve paket tasarımı genellikle şık ve zarif bir görünüme sahiptir. Lark Bond Street, özellikle orta‑üst segment tüketicilere yöneliktir ve Philip Morris International tarafından uluslararası pazarlarda dağıtılmaktadır.`,
   country: "ABD",
   website: "",
   img: "/lark-bond-street.png",
   isBoycotted: "boykot",
   boycottReason: `Philip Morris USA'nın İsrail ile olan bu büyük ölçekli ticari ilişkisi nedeniyle markanın boykot edilmesi gerektiği düşünülmüştür.`,
  },
  {
   name: "Capriholdings",
   slug: "capriholdings",
   ctgry: "Sigara",
   description: `Capri Holdings Limited, merkezi Hamilton, Bermuda’da bulunan ve lüks moda sektöründe faaliyet gösteren uluslararası bir holding şirketidir. Şirket, özellikle Michael Kors, Jimmy Choo ve Versace gibi dünyaca ünlü markaların sahibi olarak bilinir.
     Capri Holdings, 2018 yılında Michael Kors’un Versace’yi satın almasıyla bugünkü yapısına kavuşmuştur ve lüks moda, ayakkabı, çanta ve aksesuar üretimi ile küresel pazarlarda faaliyet gösterir. Şirketin amacı, güçlü marka portföyü ve küresel dağıtım ağı sayesinde lüks tüketici segmentinde lider konumunu sürdürmektir. Merkezi yönetim ve finansal operasyonları Bermuda’da bulunurken, markaların tasarım ve üretim merkezleri genellikle İtalya, ABD ve Avrupa’nın farklı ülkelerindedir.`,
   country: "Britanya",
   website: "",
   img: "/capriholdings.png",
   isBoycotted: "boykot",
   boycottReason: `...`,
  },
  {
   name: "Chesterfield",
   slug: "chesterfield",
   ctgry: "Sigara",
   description: `Chesterfield, 1873 yılında ABD’de Liggett & Myers Tobacco Company tarafından piyasaya sürülen köklü bir sigara markasıdır. Marka, özellikle uzun ve hafif filtreli sigaraları ile tanınmıştır ve tarih boyunca hem Amerika’da hem de uluslararası pazarlarda geniş bir tüketici kitlesine hitap etmiştir.
     Günümüzde Chesterfield, Philip Morris International (PMI) tarafından uluslararası pazarlarda üretilmekte ve dağıtılmaktadır. Marka, farklı tütün karışımları ve filtre seçenekleri sunar; paket tasarımı klasik kırmızı‑beyaz renklerle dikkat çeker. Chesterfield, genellikle orta segmentte konumlandırılır ve dünya genelinde birçok ülkede satışa sunulur.`,
   country: "ABD",
   website: "",
   img: "/chesterfield.png",

   isBoycotted: "boykot",
   boycottReason: `PMI’ın İsrail ile olan bu büyük ölçekli ticari ilişkisi nedeniyle şirketin boykot edilmesi gerektiği düşünülmüştür.`,
  },
  {
   name: "Virginia Slims",
   slug: "virginia-slims",
   ctgry: "Sigara",
   description: `Virginia Slims, 1968 yılında ABD’de Philip Morris tarafından piyasaya sürülen bir sigara markasıdır. Başlangıçta özellikle kadın tüketicilere hitap etmek için tasarlanmış ve “ince, uzun ve zarif” tasarımıyla öne çıkmıştır. Marka, kadınlara yönelik pazarlama stratejileri ve sloganlarıyla dikkat çekmiş; örneğin “You’ve come a long way, baby” (“Çok yol katettin, bebeğim”) gibi kampanyalar, kadınların özgürlük ve bağımsızlık temalarıyla bağdaştırılmıştır.
     Virginia Slims, günümüzde Philip Morris International(PMI) tarafından uluslararası pazarlarda üretilmekte ve dağıtılmaktadır. Farklı aromalı ve filtreli seçenekleriyle orta‑üst segment tüketici kitlesine hitap eden marka, özellikle estetik ve ince tasarım vurgusuyla kadın tüketiciler arasında tanınır.`,
   country: "ABD",
   website: "",
   img: "/virginia-slims.png",

   isBoycotted: "boykot",
   boycottReason: `PMI’ın İsrail ile olan bu büyük ölçekli ticari ilişkisi nedeniyle şirketin boykot edilmesi gerektiği düşünülmüştür.`,
  },
  {
   name: "Winston",
   slug: "winston",
   ctgry: "Sigara",
   description: ``,
   country: "",
   img: "/winston.png",

   isBoycotted: "boykot",
   boycottReason: ``,
  },
  //! YİYECEK MARKALARI
  {
   name: "Nestle",
   slug: "nestle",
   foundedYear: 1866,
   ctgry: "Şirket",
   founder: "Henri Nestlé",
   owner: "Nestlé S.A.",
   country: "İsviçre",
   alternative_products: ["eti"],
   img: "/nestle.png",
   isBoycotted: "boykot",
   website: "https://www.nestle.com.tr/",
   description: `Nestlé, merkezi İsviçre'nin Vevey şehrinde bulunan dünyanın en büyük yiyecek ve içecek üreticisidir. Nestlé, çikolata ürünlerinden kahveye, süt ürünlerinden evcil hayvan mamalarına kadar geniş bir ürün yelpazesine sahiptir.

Nestlé, 1866 yılında İsviçre'de Alman eczacı ve şekerlemeci Henri Nestlé tarafından kurulmuştur. Henri Nestlé, Eylül 1866'da süt, un ve şeker karışımından oluşan "Farine Lactée Henri Nestlé" adlı bebek gıdasını üretmiştir. Bu ürün, bebeklerin yapay beslenmesi için tasarlanmıştır ve anne sütü yerine geçmemektedir. Ürün, birkaç yıl sonra İsviçre ve birçok Avrupa ülkesinde satılmaya başlanmıştır.

1875 yılında Henri Nestlé, İsviçreli çikolata mucidi Daniel Peter ile işbirliği yaparak çikolata üretimine başlamıştır. 1904 yılında Nestlé, çikolata üretimine başlamış ve kısa sürede dünya çapında çikolata üretiminde lider konuma gelmiştir. 1930'larda Brezilya hükümetinin isteği üzerine kahve araştırmalarına başlayan Nestlé, sekiz yıl sonra kahve tozunu keşfetmiş ve Nescafé markasını piyasaya sürmüştür.

Nestlé, 190 ülkede faaliyet göstermekte, yaklaşık 500 fabrika ve 330.000 çalışanı bulunmaktadır. Şirket, bebek gıdası, kahve, şişelenmiş su, kahvaltılık gevrekler, çikolata, hazır kahve, dondurma, kedi ve köpek maması gibi çok çeşitli ürünler üretmektedir. Nestlé, aynı zamanda dünyanın en büyük çikolata ve şekerleme üreticisi olup, diyabet hastalarına ilaç satan en büyük şirketlerden biridir.`,
   boycottReason: `Nestlé'nin boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Nestlé, İsrail'in en büyük gıda üreticilerinden ve distribütörlerinden biri olan Osem Investments'ın sahibidir. Osem Investments, İsrail pazarında önemli bir konuma sahiptir ve İsrail ekonomisine önemli katkılar sağlamaktadır.

Ayrıca, Nestlé'nin Gazze Şeridi'ne yaklaşık 2 km uzaklıktaki Sderot'ta bir Araştırma ve Geliştirme Merkezi bulunmaktadır. Bu merkez, İsrail'in yasadışı yerleşimlerine yakın bir konumda faaliyet göstermektedir. Yasadışı İsrail yerleşimlerinde üretim yapmak ve faaliyet göstermek, boykot edilmesine neden olmaktadır.

Nestlé'nin İsrail ile olan bu güçlü ticari bağlantıları ve İsrail'in yasadışı yerleşimlerine yakın konumda faaliyet göstermesi, Filistin topraklarının işgalini desteklemek anlamına gelmektedir. Bu durum, uluslararası hukuka göre yasadışı kabul edilen İsrail yerleşimlerine ekonomik destek sağlamaktadır.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Nestlé'yi boykot etmeyi bir sorumluluk olarak görmektedir. Nestlé'nin Osem Investments sahipliği ve Sderot'taki araştırma merkezi, boykot kararını destekleyen temel faktörlerdir.`,
   evidences: [
    "https://www.haaretz.com/2002-02-14/ty-article/nestle-may-receive-r-d-grant-for-sderot/0000017f-f8cb-d47e-a37f-f9ff9da50000",
   ],
   subBrands: [
    {
     name: "Nescafe",
     slug: "nescafe",
     ctgry: "İçecek",
     foundedYear: 1938,
     founder: "Nestlé",
     owner: "Nestlé S.A.",
     description: `Nescafé, İsviçre merkezli çok uluslu gıda şirketi Nestlé'nin bir markasıdır. Dünyanın ilk instant kahvesi olarak 1938 yılında piyasaya sürülmüştür. Markanın adı, "Nestlé" ve "café" (kahve) kelimelerinin birleştirilmesiyle oluşturulmuştur. O günden bu yana, Nescafé küresel çapta en çok tanınan ve tüketilen kahve markalarından biri haline gelmiştir.
  
  Nescafé'nin kuruluş hikayesi, 1930'lu yıllarda Brezilya'nın kahve fazlası sorununu çözmek amacıyla başlamıştır. Nestlé, Brezilya hükümetinin talebi üzerine, kahve çekirdeklerini suda çözünebilir hale getiren bir yöntem geliştirmiş ve böylece instant kahve kavramını yaratmıştır. Bu yenilikçi yaklaşım, kahve tüketimini kolaylaştırmış ve Nescafé'nin dünya çapında bir başarı hikayesi olmasını sağlamıştır.
  
  Nescafé, bugün dünya çapında 180'den fazla ülkede satılmakta ve günlük olarak milyonlarca fincan tüketilmektedir. Marka, sadece instant kahveyle sınırlı kalmayıp, kapsül kahve, hazır kahve ve öğütülmüş kahve gibi farklı formatlarda da ürünler sunmaktadır. Nescafé, özellikle ofis ortamlarında ve evlerde pratik kahve çözümü arayan tüketiciler arasında popülerlik kazanmaktadır.
  
  Marka, sadece ürün üretimiyle sınırlı kalmayıp, sürdürülebilirlik projeleri ve çiftçi destek programlarıyla da aktif olarak yer almaktadır. Nescafé, dünya çapında tanınan bir marka olarak, küresel kahve pazarında lider konumlardan birinde bulunmaktadır.`,
     country: "İsviçre",
     website: "https://www.nescafe.com/tr",
     img: "/nescafe.png",
     isBoycotted: "boykot",
     boycottReason: `Nescafé'ye yönelik boykot çağrısı, aslında ana şirketi olan Nestlé'nin faaliyetlerine odaklanmaktadır. Nestlé, İsrail'deki gıda üretiminin yaklaşık üçte ikisini kontrol eden Osem adlı bir iştirakin sahibidir. Daha da önemlisi, bu iştirakin Gazze'nin hemen yanı başında üretim tesisleri bulunmaktadır.
  
  Nestlé'nin İsrail ekonomisi ve endüstrisi içinde bu denli stratejik ve köklü bir role sahip olması, hem kendisinin hem de markası Nescafé'nin boykot edilmesi talebinin temel nedenini oluşturmaktadır. Osem, İsrail'in en büyük gıda şirketlerinden biri olarak, İsrail ekonomisine ciddi katkılar sağlamaktadır. Bu durum, Filistin davasına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından büyük tepkiyle karşılanmaktadır.
  
  Nestlé'nin Gazze'nin hemen yanı başında üretim tesisleri bulundurması, şirketin İsrail'in işgal politikalarına dolaylı olarak destek sağlaması anlamına gelmektedir. Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Nestlé'ye ait tüm markaları boykot etmeyi bir sorumluluk olarak görmektedir. Nescafé de bu kapsamda boykot listesinde yer almaktadır.`,
     alternative_products: ["dogus", "ofcay", "caykur"],
    },
   ],
  },
  {
   name: "Ülker",
   slug: "ulker",
   foundedYear: 1944,
   ctgry: "Yiyecek",
   founder: "Sabri Ülker ve Asım Ülker",
   owner: "Yıldız Holding",
   country: "Türkiye",
   alternative_products: ["eti"],
   img: "/ulker.png",
   isBoycotted: "boykot",
   website: "https://www.ulker.com.tr/tr",
   description: `Ülker, 1944 yılında Sabri Ülker ve kardeşi Asım Ülker tarafından İstanbul Eminönü Nohutçu Han'da kurulmuş Türk gıda markasıdır. Bisküvi, çikolata, şekerleme, gofret, kek, sakız ve kraker gibi geniş bir ürün yelpazesine sahiptir. 1989 yılında Yıldız Holding çatısı altında faaliyetlerine devam eden marka, Türkiye'nin en büyük gıda şirketleri arasında yer almaktadır. Ülker Çikolata, Türkiye'de fabrika üretimi yapan ilk çikolata şirketidir. Marka, 100'den fazla ülkeye ihracat yapmakta ve Türkiye'nin en büyük 500 sanayi kuruluşu arasında 108. sırada yer almaktadır.`,
   boycottReason: `Ülker, Yıldız Holding'in İsrail işgali altındaki topraklarda satılmak üzere Silivri tesislerinde Godiva çikolataları üretmesi nedeniyle boykot listesindedir. Ayrıca, katliamın devam ettiği 11 Ekim 2023 tarihinde Yahya ÜLKER'in Starbucks'a ziyarette bulunması ve tepkilerin ardından ziyareti yalanlayarak paylaşımları silmesi boykot nedenleri arasındadır. Yıldız Holding'in %23 oranında ortaklık payına sahip olduğu ve kararlarında ciddi etkisi bulunan Şok Marketler'in, boykotun etkisini kırmak amacıyla mağazalarında Starbucks ürünleri için özel reyonlar oluşturması da boykot kararını destekleyen faktörlerdendir.`,
   evidences: [""],
  },
  {
   name: "Eti",
   slug: "eti",
   foundedYear: 1962,
   ctgry: "Yiyecek",
   founder: "Firuz Kanatlı",
   owner: "Eti Gıda A.Ş.",
   country: "Türkiye",
   alternative_products: [],
   img: "/eti.jpg",
   website: "https://www.etietieti.com/",
   description: `Eti, 1962 yılında Firuz Kanatlı tarafından Eskişehir'de kurulmuş Türk gıda şirketidir. Bisküvi, kurabiye, kek, tart, çikolata, gofret, bebek bisküvisi ve hazır yemek ürünleri üretmektedir. Logo olarak "Hitit Güneşi"ni kullanmakta ve Eskişehirspor'un ana sponsoru konumundadır. Türkiye'de birçok ilke imza atmıştır: Burçak (ilk lifli bisküvi), Etimek (ilk hazır kızartılacak ekmek), ilk endüstriyel kek, Turti (ilk paketlenmiş tart), Pronot (ilk glutensiz bisküvi) ve Browni (ilk ıslak kek). 2014 yılından itibaren süt ürünleri de üretmeye başlamıştır. 72 şehirde 7.000'den fazla kişiye istihdam sağlayan Eti, 2013 ve 2014 yıllarında Capital'in En Beğenilen Şirketler listesinde çikolata ve bisküvi sektöründe birinci sırada yer almıştır.`,
  },
  {
   name: "Golf",
   slug: "golf",
   foundedYear: 1991,
   ctgry: "Yiyecek",
   founder: "",
   owner: "",
   country: "Türkiye",
   alternative_products: [],
   img: "/golf.png",
   isBoycotted: "boykot-degil",
   website: "https://www.golfdondurma.com.tr/",
   description: `Golf Dondurma, 1998 yılında Bursa Akçalar'da Alman Schöller tarafından dondurma sektörüne giriş yaparak kurulmuştur. 2003 yılında Yıldız Holding'e katılmış, güçlü altyapısı ve yenilikçi yaklaşımıyla üretimine devam etmiştir. 2015 yılında Yıldız Holding'den ayrılarak Natura Gıda Sanayi ve Ticaret A.Ş. çatısı altında faaliyetlerine devam etmiş ve yerli üretim kapasitesini yıllar içinde artırmıştır. Başlangıçta Bursa fabrikasında 10 milyon litre kapasiteyle üretime başlayan Golf, bugün Bursa ve Kahramanmaraş'taki iki fabrikasıyla toplam 135 milyon litre üretim kapasitesine ulaşarak Türkiye'nin önde gelen yerli dondurma üreticilerinden biri haline gelmiştir. %81 süt içeriğine sahip "Golf Maraşım", Belçika çikolata kaplı "Golf Bravo" ve coğrafi işaretli hammaddelerle üretilen "Golf Royal Gourmet" gibi popüler ürünleri tüketicilerden büyük beğeni toplamıştır. 2015 yılında logo, ürün ve ambalaj yenilemeleri yapan marka, Kahramanmaraş fabrikasında üretilen "Golf Maraşım" markasıyla Uluslararası Lezzet ve Kalite Enstitüsü'nden "Superior Taste Award" ödülüne layık görülmüştür.`,
  },
  {
   name: "Dr Oetker",
   slug: "dr-oetker",
   foundedYear: 1891,
   ctgry: "Yiyecek",
   founder: "Dr. August Oetker",
   owner: "Oetker International",
   country: "Almanya",
   alternative_products: [],
   img: "/dr-oetker.png",
   isBoycotted: "boykot-degil",
   website: "https://www.droetker.com.tr/",
   description: `Dr. Oetker, 1891 yılında Dr. August Oetker tarafından Bielefeld'deki eczanesinde kabartma tozunu keşfetmesiyle kurulmuş bir holding şirketidir. Öncelikle gıda sektöründe faaliyet gösteren şirketin uluslararası operasyonları Bielefeld merkezli Oetker International tarafından yönetilmektedir. Yüzyılın başında ilk gıda üretim fabrikasını kuran Dr. Oetker, hızla Batı ve Doğu Avrupa ülkelerine yayılmıştır. İlk ürünleri nişasta, vanilya şekeri ve puding olan şirket, günümüzde Güney Amerika ve Brezilya dahil 21 tesiste faaliyet göstermekte ve toplam 450 ürün grubu sunmaktadır. Oetker grubu sadece gıda sektörüyle sınırlı kalmayıp bira, şarap, şampanya, denizcilik, otelcilik ve finans gibi çeşitli sektörlerde de faaliyet göstermektedir.`,
  },
  {
   name: "Komili",
   slug: "komili",
   foundedYear: 1878,
   ctgry: "Yiyecek",
   founder: "Kosta Komili (Constantin Comninos)",
   owner: "Ana Gıda (Bunge ortaklığı)",
   country: "Türkiye",
   alternative_products: [],
   img: "/komili.png",
   isBoycotted: "boykot",
   website: "https://www.komilizeytinyagi.com.tr/",
   description: `Komili, 1878 yılında Kosta Komili (Constantin Comninos) tarafından Midilli Adası'nda kurulmuş, Türkiye'nin en köklü zeytinyağı markalarından biridir. Kuruluşundan sonra aile Ayvalık'a yerleşmiş ve 1890'larda modern zeytinyağı üretimine geçmiştir. 140 yılı aşkın geçmişiyle Türk zeytinyağı sektörünün en eski markaları arasında yer alan Komili, Osmanlı sarayına ilk zeytinyağını ulaştıran marka olarak bilinmektedir. 1995 yılında Unilever'e, 2008 yılında ise Anadolu Grubu'nun Ana Gıda şirketine devredilmiştir. 2017 yılında Ana Gıda'nın %55.25 hissesi Amerikan gıda şirketi Bunge'e satılmıştır. Komili, eşsiz kalitesi ve sürdürülebilirlik ilkelerine dayalı yaklaşımıyla zeytinyağı kültürünü geliştirmeye devam etmektedir.`,
   boycottReason: `Komili markası, Ana Gıda'nın %55.25 hissesinin Amerikan gıda şirketi Bunge'e satılması nedeniyle boykot listesindedir. Bunge'in ortaklarından biri olan The Vanguard Group, savaş bölgesindeki yaralı İsrailli ve Filistinli insanlara yardım sağlamaktadır. Ayrıca The Vanguard Group, İsrail ile bağlantıları bulunan bazı ABD silah şirketlerinde de pay sahibidir. Bu nedenlerle Komili markasının boykot edilmesi kararı alınmıştır.`,
   evidences: [
    "https://www.dunya.com/sirketler/zeytinyaginin-lider-markalari-amerikan-sirketine-satildi-haberi-341975",
   ],
  },
  {
   name: "Patos",
   slug: "patos",
   foundedYear: 1988,
   ctgry: "Yiyecek",
   founder: "Süleyman Karakan ve Alpaslan Karakan",
   owner: "Doğuş Grup",
   country: "Türkiye",
   alternative_products: [],
   img: "/patos.png",
   isBoycotted: "boykot-degil",
   website: "https://www.doguscay.com.tr/urunlerimiz/dogus-cips/patos",
   description: `Patos, 1988 yılında Türkiye'de Doğuş Çay ve Gıda Maddeleri Üretim Pazarlama İthalat İhracat A.Ş. bünyesinde Süleyman ve Alpaslan Karakan tarafından kurulmuş tamamen Türk menşeli bir cips markasıdır. 2013 yılında Doğuş Gıda tarafından satın alınarak tamamen yerli sermayeye geçmiştir. Kraft Gıda'nın bazı ürünlerini satın alan Doğuş Grup çatısı altında, Aksaray Organize Sanayi Bölgesi'ndeki modern cips fabrikasında üretilmektedir. Yıllık 25.000 ton üretim kapasitesine sahip fabrikada, yaklaşık 20.000 m² kapalı alan bulunmaktadır. Patos, Cipso, Çerezos ve Chips Master gibi diğer markalarla birlikte aynı tesiste üretilmektedir. Marka, özellikle genç tüketiciler arasında popüler olan mısır ve patates cipsi ürünleriyle Türk atıştırmalık pazarında önemli bir konuma sahiptir.`,
  },
  {
   name: "Doğuş Çay",
   slug: "dogus-cay",
   foundedYear: 1985,
   ctgry: "Yiyecek",
   founder: "Süleyman Karakan ve Alpaslan Karakan",
   owner: "Doğuş Çay ve Gıda Maddeleri A.Ş.",
   country: "Türkiye",
   alternative_products: [],
   img: "/dogus-cay.png",
   isBoycotted: "boykot-degil",
   website: "https://www.doguscay.com.tr/",
   description: `Doğuş Çay, 1985 yılında Süleyman ve Alpaslan Karakan tarafından bir aile şirketi olarak kurulmuş Türkiye merkezli bir gıda şirketidir. Şirketin merkezi İstanbul'un Maltepe ilçesinde yer almaktadır. "En Güzel Çay Doğuş Çay" sloganıyla faaliyet gösteren şirket, ağırlıklı olarak çay ürünleri üretimi yapmaktadır. Çay üretiminin yanı sıra şeker, domates salçası, buzlu çay, limonata üretimi de yapmaktadır. Ayrıca Patos, Cipso, Chips Master ve Çerezos Fox markaları altında cips ve patlamış mısır üretimi gerçekleştirmektedir. Şirketin Rize'de bölge müdürlüğü, Ordu'da çay paketleme fabrikası, Ödemiş'te soğuk çay ve salça üretim fabrikası, Aksaray ve İstanbul'da cips fabrikası bulunmaktadır. 2018 yılında özelleştirme kapsamında Afyon Şeker Fabrikası ve Yozgat Şeker Fabrikası'nı satın almıştır.`,
  },
  {
   name: "Cipso",
   slug: "cipso",
   foundedYear: 2013,
   ctgry: "Yiyecek",
   founder: "Doğuş Gıda",
   owner: "Doğuş Grup",
   country: "Türkiye",
   alternative_products: [],
   img: "/cipso.png",
   isBoycotted: "boykot-degil",
   website: "https://www.doguscay.com.tr/urunlerimiz/dogus-cips/cipso",
   description: `Cipso, Doğuş Çay'ın alt markalarından biri olan Türk menşeli bir cips markasıdır. 2013 yılında Doğuş Gıda tarafından satın alınarak tamamen yerli sermayeye geçmiştir. Doğuş Grup çatısı altında, Aksaray Organize Sanayi Bölgesi'ndeki modern cips fabrikasında Patos, Çerezos ve Chips Master gibi diğer markalarla birlikte üretilmektedir. Yıllık 25.000 ton üretim kapasitesine sahip fabrikada, yaklaşık 20.000 m² kapalı alan bulunmaktadır. Marka, Türk atıştırmalık pazarında önemli bir konuma sahiptir.`,
  },
  {
   name: "Çerezos",
   slug: "cerezos",
   foundedYear: 2013,
   ctgry: "Yiyecek",
   founder: "Doğuş Gıda",
   owner: "Doğuş Grup",
   country: "Türkiye",
   alternative_products: [],
   img: "/cerezos.png",
   isBoycotted: "boykot-degil",
   website: "https://www.cerezos.com.tr/",
   description: `Çerezos, Doğuş Çay'ın alt markalarından biri olan Türk menşeli bir cips markasıdır. 2013 yılında Doğuş Gıda tarafından satın alınarak tamamen yerli sermayeye geçmiştir. Doğuş Grup çatısı altında, Aksaray Organize Sanayi Bölgesi'ndeki modern cips fabrikasında Patos, Cipso ve Chips Master gibi diğer markalarla birlikte üretilmektedir. Yıllık 25.000 ton üretim kapasitesine sahip fabrikada, yaklaşık 20.000 m² kapalı alan bulunmaktadır. Marka, Türk atıştırmalık pazarında önemli bir konuma sahiptir.`,
  },
  {
   name: "Chips Master",
   slug: "chips-master",
   foundedYear: 2013,
   ctgry: "Yiyecek",
   founder: "Doğuş Gıda",
   owner: "Doğuş Grup",
   country: "Türkiye",
   alternative_products: [],
   img: "/chips-master.png",
   isBoycotted: "boykot-degil",
   website: "https://www.chipsmaster.com.tr/",
   description: `Chips Master, Doğuş Çay'ın alt markalarından biri olan Türk menşeli bir cips markasıdır. 2013 yılında Doğuş Gıda tarafından satın alınarak tamamen yerli sermayeye geçmiştir. Doğuş Grup çatısı altında, Aksaray Organize Sanayi Bölgesi'ndeki modern cips fabrikasında Patos, Cipso ve Çerezos gibi diğer markalarla birlikte üretilmektedir. Yıllık 25.000 ton üretim kapasitesine sahip fabrikada, yaklaşık 20.000 m² kapalı alan bulunmaktadır. Marka, Türk atıştırmalık pazarında önemli bir konuma sahiptir.`,
  },
  {
   name: "Haribo",
   slug: "haribo",
   foundedYear: 1920,
   ctgry: "Yiyecek",
   founder: "Hans Riegel Sr.",
   owner: "Haribo GmbH",
   country: "Almanya",
   alternative_products: [],
   img: "/haribo.png",
   isBoycotted: "onerilmiyor",
   website: "https://www.haribo.com/tr-tr",
   description: `Haribo, 14 Aralık 1920 tarihinde Hans Riegel Sr. tarafından Bonn, Almanya'da kurulmuş Alman şekerleme üreticisidir. 1922 yılında dans eden bir ayıdan ilham alarak dünyanın ilk meyve aromalı jöleli şekerini üretmiş ve bu ürün daha sonra HARIBO Goldbear (Altın Ayıcık) olarak dünya çapında tanınmıştır. Almanya'da 5 fabrika ve Avrupa genelinde 13 tesisle faaliyet gösteren Haribo, 100'den fazla ülkede ürünlerini satmaktadır. 1993 yılında Türkiye pazarına giriş yapan Haribo, 2001 yılında İstanbul/Hadımköy'de modern üretim tesislerini kurmuştur. Haribo Türkiye, helal üretim standartlarıyla hem iç pazar hem de Orta Doğu ve Kuzey Afrika ülkelerine yönelik üretim yapmaktadır. Jöleli şeker, jöleli ayıcık, marshmallow, jelibon ve meyan şekeri gibi 750'den fazla farklı ürün üretmektedir.`,
   boycottReason: `Haribo, Almanya merkezli bir şirket olduğu için yerli marka değildir. Bu nedenle yerli alternatifler tercih edilmesi önerilmektedir.`,
   evidences: [""],
  },
  {
   name: "Kellogg's",
   slug: "kelloggs",
   foundedYear: 1906,
   ctgry: "Yiyecek",
   founder: "Will Keith Kellogg",
   owner: "Kellogg Company",
   country: "ABD",
   alternative_products: [],
   img: "/kelloggs.png",
   isBoycotted: "boykot",
   website:
    "https://www.kelloggs.com/tr-tr/who-we-are/about-kellogg-turkey.html",
   description: `Kellogg's, 19 Şubat 1906 tarihinde Will Keith Kellogg tarafından Battle Creek, Michigan, ABD'de "Battle Creek Toasted Corn Flake Company" adıyla kurulmuş, 1922 yılında kurucusunun adını alarak "Kellogg's" olmuştur. Tahıl, mısır gevreği, waffle, kraker, bisküvi ve kurabiye gibi geniş bir ürün yelpazesine sahip olan şirket, dünya genelinde 180'den fazla ülkede faaliyet göstermekte ve 20'den fazla ülkede fabrikaları bulunmaktadır. 2005 yılında Ülker ile anlaşma imzalayarak Türkiye'de Kellogg Med şirketini kurmuş ve İstanbul'un Pendik ilçesinde fabrikada tahıl ve mısır gevrekleri üretmeye başlamıştır. Şirket, Gardenburger, Kashi, Carr's, Keebler, Sunshine Biscuits, Famous Amos, Mother's Cookies ve 2012 yılında 2.7 milyar dolara Procter & Gamble'dan satın aldığı Pringles gibi birçok markayı bünyesine katmıştır. Başlıca ürünleri arasında All-Bran, Apple Jacks, Frosted Flakes, Rice Krispies, Special K, Pop-Tarts ve Cheez-It yer almaktadır.`,
   boycottReason: `Kellogg's, ABD merkezli bir şirket olması ve ABD'nin İsrail ile olan yakın ilişkisi nedeniyle boykot edilmektedir. ABD, İsrail'e yıllardır milyarlarca dolar değerinde askeri, ekonomik ve diplomatik destek sağlamaktadır. Bu stratejik ortaklık, İsrail'in Filistin topraklarını işgal etmesine ve bölgedeki çatışmaların sürmesine katkıda bulunmaktadır.

ABD menşeli şirketlerin ürünlerini tüketmek, ABD ekonomisine katkı sağlamakta ve dolaylı olarak İsrail'e verilen desteğin finansmanına katkıda bulunmaktadır. Kellogg's gibi ABD şirketlerinin tercih edilmesi, ABD-İsrail ortaklığının sürmesine destek olmaktadır. Bu nedenle, Filistin halkına destek vermek isteyen tüketiciler, ABD menşeli ürünleri boykot etmektedir.`,
   evidences: [""],
  },
  {
   name: "Dost Yoğurt",
   slug: "dost-yogurt",
   foundedYear: null,
   ctgry: "Yiyecek",
   founder: "Ülker Grubu",
   owner: "BİM (Groupe Lactalis üretimi)",
   country: "Fransa & Türkiye",
   alternative_products: ["sutas", "pinar"],
   img: "/dost.png",
   isBoycotted: "boykot",
   website: "https://www.bim.com.tr",
   description: `Dost Yoğurt markası, Türkiye merkezli bir süt ve süt ürünleri markasıdır. Marka, pastörize süt, yoğurt, ayran, tereyağı ve peynir gibi geniş bir ürün yelpazesi sunar. Dost markası, Türkiye'nin önde gelen perakende zincirlerinden BİM'in özel markalarından biridir. Bu nedenle ürünleri yalnızca BİM mağazalarında satılmaktadır. Marka, özellikle uygun fiyatlı süt ürünleri arayan tüketiciler için popüler bir seçenektir. Dost markası, başlangıçta Ülker Grubu tarafından üretilen bu marka, sonradan BİM market zinciri tarafından satın alınmıştır. Ancak, 2015 yılında Ülker Grubu, Ak Gıda'yı Fransız şirketi Groupe Lactalis'e satmıştır. Dolayısıyla, şu anda Dost Yoğurt'un üretimi Groupe Lactalis tarafından yapılmaktadır. Groupe Lactalis dünya çapında bir süt ürünleri devi olup, Türkiye'de Ak Gıda'nın yanı sıra birçok ünlü markanın da sahibidir. Dost markası, özellikle BİM müşterileri arasında popülerlik kazanmaktadır ve Türkiye genelinde yaygın olarak bulunmaktadır.`,
   boycottReason: `Dost Yoğurt markasının boykot edilmesinin temel nedeni, markanın üretimini yapan Groupe Lactalis'in İsrail ile olan ticari ilişkileridir. Dost Yoğurt'un üretici firması bölgelere göre farklılık gösterebilmektedir. Bazı bölgelerde üretimi Ak Gıda tarafından yapılmaktadır ve bu nedenle bazı tüketiciler tarafından boykot edilmektedir. Ak Gıda, 2015 yılından bu yana Fransız şirketi Groupe Lactalis'e aittir ve bu şirketin İsrail ile olan ticari bağları nedeniyle boykot listelerinde yer almaktadır. Groupe Lactalis'in İsrail ile olan ticari ilişkileri, şirketin İsrail ekonomisine katkıda bulunması anlamına gelmektedir. Bu durum, Filistin davasına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından büyük tepkiyle karşılanmaktadır. Bu nedenle, Groupe Lactalis tarafından üretilen Dost Yoğurt markası boykot listesinde yer almaktadır. Satın almadan önce ambalajın arka kısmındaki üretici bilgilerini kontrol etmeyi unutmayın. Alternatif ürünlere yönelmek daha sağlıklı olacaktır.`,
   evidences: [""],
  },
  {
   name: "Tat",
   slug: "tat",
   foundedYear: 1967,
   ctgry: "Yiyecek",
   founder: "Vehbi Koç",
   owner:
    "Memişoğlu Tarım Ürünleri Ticaret Ltd. Şti. (%49,04), Halka Açık: (%41,41),Diğer: (%9,55)",
   country: "Türkiye",
   alternative_products: [],
   img: "/tat.png",
   isBoycotted: "boykot-degil",
   website: "https://www.tat.com.tr/",
   description: `Tat, 27 Ağustos 1967 tarihinde Vehbi Koç tarafından Bursa'nın Mustafakemalpaşa ilçesinde kurulmuş Türk gıda şirketidir. Başlangıçta Tat Konserve adıyla faaliyet gösteren şirket, 15 Kasım 2013 tarihinde Tat Gıda olarak isim değişikliği yapmıştır. Şirketin genel merkezi İstanbul'un Çekmeköy ilçesinde bulunmaktadır. Bursa'nın Mustafakemalpaşa ve Karacabey ilçeleri ile İzmir'in Torbalı ilçesinde toplam 3 üretim tesisi bulunmaktadır. Domates sosu, ketçap, hazır yemek, mayonez, salça ve işlenmiş et ürünleri gibi geniş bir ürün yelpazesi sunmaktadır. 2024 yılında Koç Holding'in sahip olduğu hisseler Memişoğlu Tarım Ürünleri şirketine satılmıştır. Tat, Türkiye'de gıda sektörünün en bilinen isimlerinden biri olarak tüketici memnuniyetini ön planda tutan bir marka olarak bilinir. Tat markası ile ilgili yapılan değerlendirmeler sonucunda, geçmişte Coca-Cola ile gerçekleştirilen iş birliklerinin sona erdiği ve gelecekte benzer bir iş birliğine gidilmeyeceği yönünde kamuoyuna ve çeşitli mecralara verilen teminatlar dikkate alınmıştır. Bu taahhütler doğrultusunda, Tat markası boykot listesinden çıkarılmıştır. Ancak, ilerleyen dönemde bu teminatlara aykırı bir gelişme tespit edilirse, marka yeniden değerlendirmeye alınarak boykot listesine dahil edilebilir. Süreci şeffaf bir şekilde takip etmeye devam edeceğiz.`,
  },
  {
   name: "Superfresh",
   slug: "superfresh",
   foundedYear: null,
   ctgry: "Yiyecek",
   founder: "",
   owner: "Besler Gıda (Yıldız Holding)",
   country: "Türkiye",
   alternative_products: [],
   img: "/superfresh.png",
   isBoycotted: "boykot",
   website: "https://www.superfresh.com.tr/tr",
   description: `SuperFresh, Türkiye merkezli dondurulmuş gıda markasıdır. Başlangıçta Kerevitaş Gıda çatısı altında faaliyet gösteren marka, pazarda büyümesi ve liderler arasına girmesiyle Besler Gıda adıyla yoluna devam etmektedir. Yıldız Holding bünyesi altında bulunan Besler Gıda'ya ait olan SuperFresh, dondurulmuş mısır, pizza, börek ve aklınıza gelebilecek birçok dondurulmuş ürünü satışa sunmaktadır. Tamamen Türkiye'de üretilen yerli bir marka olan SuperFresh, hem Türkiye'de hem de yurtdışında satış yapmaktadır. Marka, kullanıcılara sağladığı pratiklik ve kullanım konforu ile bilinmektedir.`,
   boycottReason: `SuperFresh, Yıldız Holding bünyesinde bulunan Besler Gıda'ya ait bir markadır. Yıldız Holding yönetim kurulu üyesi Yahya Ülker'in, İsrail boykotu konusunda kritik markalardan biri olan Starbucks'ı ziyaret ederek bunu sosyal medyasında paylaşması, kamuoyunda büyük tepki çekmiştir. Bu ziyaret, İsrail'e dolaylı destek olarak yorumlanmıştır. Yıldız Holding bünyesinde yer alan birçok marka gibi SuperFresh de bu nedenle boykot listesine dahil edilmiştir. SuperFresh doğrudan İsrail'e ait bir marka olmamasına rağmen, bağlı bulunduğu holdingin aldığı tepkilerden dolayı boykot listelerinde yer almaktadır.`,
   evidences: [""],
  },
  {
   name: "Torku",
   slug: "torku",
   foundedYear: 2007,
   ctgry: "Yiyecek",
   founder: "Konya Şeker",
   owner: "Konya Şeker",
   country: "Türkiye",
   alternative_products: [],
   img: "/torku.png",
   isBoycotted: "boykot-degil",
   website: "https://torku.com.tr/",
   description: `Torku, 2007 yılında Konya Şeker tarafından kurulmuş Türk gıda markasıdır. Konya Şeker, 900.000 çiftçi tarafından desteklenen bir kooperatif olup, Torku markası altında şeker, şekerleme, çikolata, unlu mamuller, dondurulmuş ürünler, modern sera ürünleri, süt ve süt ürünleri, et ve et ürünleri ile bitkisel yağlar gibi geniş bir ürün yelpazesi sunmaktadır. Meram, Konya'da üretim yapan Torku, 1999 yılından itibaren tarımsal ve endüstriyel entegrasyon yatırımlarına başlamıştır. 2003 yılında Çumra Şeker Entegre Tesisleri kurulmuş ve 2004 yılında faaliyete geçmiştir. Konya Şeker, Türkiye şeker üretiminin %25'ini gerçekleştirmektedir. Torku, çiftçi refahını artırmayı hedefleyen ve tüketicilere %100 doğal, güvenli ve kaliteli ürünler sunmayı amaçlayan bir marka olarak bilinmektedir.`,
  },
  {
   name: "Gürsoy",
   slug: "gursoy",
   foundedYear: 1933,
   ctgry: "Yiyecek",
   founder: "Dursun Gürsoy",
   owner: "Dursun Oğuz Gürsoy ve Nejdet Gürsoy",
   country: "Türkiye",
   alternative_products: [],
   img: "/gursoy.png",
   isBoycotted: "boykot-degil",
   website: "https://www.gursoy.com.tr/",
   description: `Gürsoy, 1933 yılında Dursun Gürsoy tarafından Ordu'da, Karadeniz bölgesinin fındık yurdu olarak bilinen topraklarında, toprak mahsulleri ve fındık üzerine şahıs şirketi olarak kurulmuş Türk gıda şirketidir. 1948 yılında kurucu Dursun Gürsoy'un vefatından sonra oğlu Halit Gürsoy ikinci nesil olarak yönetimi devralmıştır. 1966 yılında Ordu il merkezinde ilk fındık kırma tesisi kurulmuş, 1974 yılında ise fındık entegre tesisi açılarak sanayileşmede ciddi bir atılım yapılmıştır. Bu dönemde Gürsoy markası yurt dışında, özellikle Avrupa'da fındıkta aranan marka haline gelmiştir. 1986 yılında aile üyeleri kurucu ortak olmak üzere Anonim Şirket statüsüne geçmiştir. 1996 yılında Ordu Efirli mevkiinde modern tesisler kurulmuş ve üretime başlanmıştır. Gürsoy, ISO9002, ISO9001:2000, BRC Global Standard, IFS, FSSC22000:2010 ve Helal Belgesi gibi çeşitli kalite belgelerine sahiptir. Türkiye ve dünyanın en büyük gıda markalarına ve distribütörlerine tedarikçi olarak hizmet veren Gürsoy, çikolata, pastane, şekerleme, dondurma ve bisküvi sektörlerinde önde gelen markalarla iş birliği yapmaktadır. Müşteri odaklı üretim ve satış politikasıyla, teknolojik gelişmeleri yakından takip eden yenilikçi bir şirket olarak bilinmektedir.`,
  },
  {
   name: "Pietro Ferrero",
   slug: "pietro-ferrero",
   foundedYear: 1979,
   ctgry: "Yiyecek",
   founder: "Michele Ferrero",
   owner: "Ferrero SpA",
   country: "İtalya",
   img: "/pietro-ferrero.png",
   isBoycotted: "boykot",
   website: "https://www.ferrerorocher.com/tr/tr/",
   description: `Ferrero Rocher, İtalyan şirketi Ferrero tarafından üretilen çikolata ve fındıklı şekerleme markasıdır. Ferrero Rocher, 1979 yılında Michele Ferrero tarafından yaratılmıştır. Her Ferrero Rocher topu, folyo ile sarılmış ve kağıt astar içine yerleştirilmiştir.

Ferrero Rocher, 1979 yılında İtalya'da piyasaya sürülmüş, 1982'de Avrupa'nın diğer bölgelerinde satılmaya başlanmıştır. Michele Ferrero, çikolataya Lourdes'teki Roma Katolik tapınağındaki Rocher de Massabielle mağarasından esinlenerek isim vermiştir. "Rocher" kelimesi Fransızca'dan gelir ve "kaya" veya "büyük taş" anlamına gelir.

Ferrero Rocher'in yapısı şöyledir: Bütün kavrulmuş fındık, ince bir gofret kabuğu içine yerleştirilir, fındıklı çikolata ile doldurulur ve sütlü çikolata ve doğranmış fındıkla kaplanır. İçeriği sütlü çikolata, şeker, kakao yağı, kakao kitlesi, yağsız süt tozu, tereyağı yağı, lesitin (emülgatör, soya), vanilin (yapay aromalar), fındık, palm yağı, buğday unu, peyniraltı suyu (süt), az yağlı kakao tozu, sodyum bikarbonat (kabartma ajanı) ve tuz içerir.

Ferrero Rocher, dünya çapında satılmakta ve özellikle Noel ile ilişkilendirilmektedir.`,
   boycottReason: `Ferrero Rocher'in boykot edilmesinin temel nedeni, şirketin sahibi Ferrero'nun İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Ferrero Rocher, Ferrero SpA'nın alt markasıdır ve Ferrero'nun İsrail ile olan ilişkileri nedeniyle boykot listesindedir.

Ferrero, İsrail'in Tel Aviv bölgesindeki Holon şehrinde Asya için ana ofisi bulunmaktadır. Ayrıca, Ferrero, İsrail şeker şirketi Sugar Incredo (Douxmatok) ile ortak geliştirme anlaşması imzalamıştır. Incredo teknolojisi, şekerin daha tatlı tadını vermesini sağlamayı amaçlamaktadır ve Ferrero, gelecekteki ürünleri pazara getirmek için onlarla işbirliği yapmaktadır.

Ferrero, doğrudan Incredo'ya yatırım yapmasa da, Teseo Capital adlı bir yatırım kanalı aracılığıyla dolaylı olarak İsrail merkezli şirketlerle ilişkileri bulunmaktadır. Ferrero'nun İsrail'deki varlığı ve İsrail şirketleriyle olan ortaklıkları, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından kabul edilemez bulunmaktadır.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Ferrero'ya ait tüm markaları (Ferrero Rocher dahil) boykot etmeyi bir sorumluluk olarak görmektedir. Ferrero'nun İsrail'deki ofisi ve İsrail şirketleriyle olan ortaklıkları, boykot kararını destekleyen temel faktörlerdir.`,
   evidences: [
    "https://agfundernews.com/incredo-formerly-douxmatok-raises-30m-for-sugar-reduction-tech",
    "https://www.fooddive.com/news/douxmatok-rebrands-incredo-30m-investment-ferrero/650981/",
    "https://techcrunch.com/2023/05/24/douxmatok-incredo-sugar-foodtech-30m/",
   ],
   subBrands: [
    {
     name: "Kinder",
     slug: "kinder",
     foundedYear: 1968,
     ctgry: "Yiyecek",
     founder: "Ferrero",
     owner: "Ferrero SpA",
     country: "İtalya",
     alternative_products: ["eti"],
     img: "/kinder.png",
     isBoycotted: "boykot",
     website: "https://www.kinder.com/tr/tr/",
     description: `Kinder (telaffuzu ['kinde]), Almanca'da "çocuklar" anlamına gelir. Kinder, İtalyan çokuluslu şekerleme şirketi Ferrero tarafından üretilen bir İtalyan çikolata markasıdır.
  
  Kinder markası altındaki ürünler çeşitli çeşitler içerir ve dünya çapında 125'ten fazla ülkede satılmaktadır. Kinder, 24 Ekim 1968'de Kinder Çikolata ile tanıtılmıştır. Markanın en popüler ürünleri arasında Kinder Çikolata (sütlü çikolata barları), Kinder Maxi (Kinder Çikolata'nın daha büyük versiyonu) ve Kinder Bueno (fındık kreması dolgulu iki çikolatalı gofretten oluşan set) bulunmaktadır. Kinder Bueno, 1990 yılında İtalya'da piyasaya sürülmüştür.
  
  Kinder, Ferrero'nun en başarılı markalarından biridir ve özellikle çocuklara yönelik ürünleriyle tanınmaktadır. Marka, güvenli ve kaliteli çikolata ürünleri sunmayı hedeflemektedir.`,
     boycottReason: `Kinder'in boykot edilmesinin temel nedeni, şirketin sahibi Ferrero'nun İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Kinder, Ferrero SpA'nın alt markasıdır ve Ferrero'nun İsrail ile olan ilişkileri nedeniyle boykot listesindedir.
  
  Ferrero'nun İsrail'de iki üretim tesisi bulunmaktadır ve şirket İsrail ile ticari ilişkilerini sürdürmektedir. Küresel tepkilere rağmen Ferrero, İsrail'deki yerel fabrikalarını kapatmamış ve ticari faaliyetlerini devam ettirmektedir. Bu durum, birçok tüketici ve aktivist tarafından İsrail'e dolaylı destek olarak yorumlanmaktadır.
  
  Ferrero'nun İsrail'deki varlığı, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından kabul edilemez bulunmaktadır. Bu nedenle Kinder, hem politik hassasiyetler hem de etik tüketim bilinci açısından boykot listesinde yer almaktadır. Ferrero'nun İsrail'deki üretim tesisleri ve ticari faaliyetleri, boykot kararını destekleyen temel faktörlerdir.`,
     evidences: [""],
    },
    {
     name: "Nutella",
     slug: "nutella",
     foundedYear: 1946,
     ctgry: "Yiyecek",
     founder: "Pietro Ferrero",
     owner: "Ferrero",
     country: "İtalya",
     alternative_products: ["torku", "gursoy"],
     img: "/nutella.png",
     isBoycotted: "boykot",
     website: "https://www.nutella.com/tr/tr/",
     description: `Nutella, İtalyan çikolata şirketi Ferrero Spa tarafından üretilen fındıklı kakao ezmesi markasıdır. 1946 yılında Pietro Ferrero tarafından İtalya'nın Alba kentinde Pasta Gianduja adıyla başlamış, 1951'de Supercrema gianduja adıyla kremalı versiyonu satılmaya başlanmıştır. 1963 yılında Pietro'nun oğlu Michele Ferrero tarafından ürünün kompozisyonu değiştirilerek "Nutella" adı verilmiş ve 20 Nisan 1964 tarihinde Alba fabrikasından ilk Nutella kavanozu piyasaya çıkmıştır. Ürün, şeker ve palm yağı (%50'den fazla), %13 fındık, kakao tozu ve yağsız süt içermektedir. ABD ve İngiltere'de soya ürünleri de içermektedir. Nutella, dünya çapında büyük bir başarı elde etmiş ve popülerliğini sürdürmektedir.`,
     boycottReason: `Nutella, dünyaca ünlü Ferrero şekerli gıda şirketinin alt markasıdır. Ferrero'nun İsrail'de iki üretim tesisi bulunmaktadır ve şirket İsrail ile ticari ilişkilerini sürdürmektedir. Küresel tepkilere rağmen Ferrero, İsrail'deki yerel fabrikalarını kapatmamış ve ticari faaliyetlerini devam ettirmektedir. Bu durum, birçok tüketici ve aktivist tarafından İsrail'e dolaylı destek olarak yorumlanmaktadır. Ferrero'nun İsrail'deki varlığı, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından kabul edilemez bulunmaktadır. Bu nedenle Nutella, hem politik hassasiyetler hem de etik tüketim bilinci açısından boykot listesinde yer almaktadır.`,
     evidences: [""],
    },
   ],
  },
  {
   name: "Züber",
   slug: "zuber",
   foundedYear: 2017,
   ctgry: "Yiyecek",
   founder: "Cem Emin Erol ve Smart Gıda Ekibi",
   owner:
    "Smart Gıda ve İçecek A.Ş. (Alterna Gıda Sanayi Pazarlama Ve Ticaret A.Ş.)",
   country: "Türkiye",
   alternative_products: [],
   img: "/zuber.png",
   isBoycotted: "boykot-degil",
   website: "https://www.zuber.com/",
   description: `Züber, 2017 yılında İstanbul'da kurulmuş Türkiye'nin lider sağlıklı atıştırmalık üreticisidir. Züber, Smart Gıda ve İçecek A.Ş. tarafından kurulmuştur.

Züber, ilk olarak "meyve barları" ile sağlıklı atıştırmalık pazarına adım atan marka, kısa sürede büyük bir başarı elde etmiştir. Şeker ilavesiz, koruyucu ve katkı maddesi içermeyen ürünleriyle dikkat çeken Züber, bugün geniş bir ürün yelpazesine sahiptir.

Züber'in kurucusu Cem Emin Erol ve Smart Gıda ekibidir. Sağlıklı yaşamın giderek önem kazandığı bir dönemde, katkı maddesi içermeyen, doğal ve yenilikçi bir ürün yaratma fikriyle yola çıkmışlardır. Markanın kurucuları, Türkiye'de sağlıklı atıştırmalık alışkanlıklarını değiştirmeyi hedeflemiştir.

Züber, yerli ve milli bir markadır. Tamamen Türkiye'ye ait olan bu marka, yerel üretim tesislerinde üretilir ve Türkiye'nin dört bir yanındaki tüketicilere ulaşır. Ayrıca, Züber ürünleri yurt dışında da satışa sunulmaktadır ve uluslararası pazarda da beğeni toplamaktadır.

Züber, dünya yeni hikayeler için bir sahne, "iyiyi üretmek" elimizde. Doğal lezzetlerin peşinden gitme arzusundan doğan bir yolculuk. Özgün ve yenilikçi bakış açısıyla, doğal lezzetlerin izini sürmeye cesaret etmiştir. Temiz, katkısız ve koruyucu içermeyen doğal lezzetleri sevilen formlara dönüştürmüştür. Her ısırık, sadece bir atıştırmalık değil, aynı zamanda sevdiklerimizle paylaştığımız unutulmaz anların bir parçası olarak sunulmaktadır.

Züber, sadece bir marka değil, doğanın sunduğu lezzetleri keşfetme macerasıdır. Her atıştırmalığın bir hikayesi olduğu, her lezzetin eşsiz bir dünyaya açıldığı bu yolculukta, Züber lezzetlerine doğru unutulmaz bir macera sizleri bekliyor.

Züber'in ana ürün kategorileri meyve barları, protein barlar ve yulaf barlarını içermektedir. Markanın en popüler ürünü şekersiz meyve barlarıdır. Züber, sağlıklı yaşam ve egzersiz tutkunlarına hitap etmektedir.

Züber'in misyonu "daha iyi gıda, daha mutlu yarınlar" ve "sağlıklı, doğal ve katkısız atıştırmalıklar sunmak" şeklindedir. Markanın sloganı "Doğal, katkısız ve %100 lezzet"tir. Züber, yüksek kalite ve üstün hizmet anlayışıyla tüketicileriyle buluşmaktadır.`,
   evidences: [""],
  },
  {
   name: "Lotus",
   slug: "lotus",
   foundedYear: 1932,
   ctgry: "Yiyecek",
   founder: "Jan Boone Sr.",
   owner: "Lotus Bakeries NV",
   country: "Belçika",
   alternative_products: [],
   img: "/lotus.png",
   isBoycotted: "onerilmiyor",
   website: "https://www.lotusbiscoff.com/en-us",
   description: `Lotus, 1932 yılında Jan Boone Sr. tarafından Belçika'nın Lembeke kentinde kurulmuş, Lotus Bakeries NV tarafından üretilen speculoos kurabiye markasıdır. Başlangıçta "Banket- en Peperkoekbakkerij Lotus" adıyla kurulan şirket, 1986 yılından itibaren ürünlerini Biscoff markası altında pazarlamaya başlamıştır. Özellikle kendine özgü karamelize lezzetiyle tanınan Biscoff kurabiyeleri, 1950'lerde bireysel paketlenmeye başlamış, 1956'dan itibaren Belçika'daki kafe ve restoranlarda kahve ile birlikte servis edilmeye başlanmıştır. 1980'lerin ortalarından itibaren birçok havayolu şirketi tarafından uçak içi ikram olarak sunulmaya başlanmıştır. Lotus Bakeries, bugün hala aile işletmesi olarak faaliyet göstermekte ve merkezini Belçika'da bulundurmaktadır. Belçika, Hollanda, Fransa, İsveç, Güney Afrika ve ABD'de üretim tesisleri bulunan şirket, yaklaşık 70 ülkede faaliyet göstermektedir. Ürünler yapay katkı maddeleri veya koruyucu maddeler içermeyen, tamamen doğal malzemelerle üretilmektedir.`,
   boycottReason: `Lotus, Belçika merkezli bir şirket olduğu için yerli marka değildir. Bu nedenle yerli alternatifler tercih edilmesi önerilmektedir.`,
  },
  {
   name: "Sarelle",
   slug: "sarelle",
   foundedYear: 1991,
   ctgry: "Yiyecek",
   founder: "Sagra Grup",
   owner: "OYAK Grubu",
   country: "Türkiye",
   alternative_products: [],
   img: "/sarelle.png",
   isBoycotted: "boykot-degil",
   website: "https://sarelle.com.tr/",
   description: `Sarelle, 1991 yılında Sagra Grup tarafından kurulmuş Türk fındık kreması markasıdır. Sagra Grup, 1936 yılında Ordu'da %100 yerli bir aile şirketi olarak kurulmuş ve Türkiye'nin ilk fındık işleme tesisine sahip olmuştur. Sarelle, Sagra Grup'un ürettiği Tadelle, Gol ve Sagra markalarıyla birlikte Türkiye'nin en önemli ve köklü markaları arasında yer almaktadır. 2021 yılında Sagra Grup'un üretim tesisleri OYAK Grubu tarafından satın alınmış ve Sarelle markası da OYAK çatısı altında faaliyet göstermeye başlamıştır. Sarelle, Ordu'daki Sagra fabrikasında %100 yerli olarak üretilmektedir. Fındık kreması ve doğal içerikli ürünleriyle tanınan marka, katkı maddesi ve trans yağ içermeyen sağlıklı atıştırmalık arayan tüketiciler arasında popülerdir. Sarelle, İsrail ile herhangi bir ticari veya kurumsal bağı bulunmayan tamamen Türk menşeli bir markadır.`,
  },
  {
   name: "Çokokrem",
   slug: "cokokrem",
   foundedYear: 1967,
   ctgry: "Yiyecek",
   founder: "Ülker",
   owner: "Yıldız Holding",
   country: "Türkiye",
   alternative_products: [],
   img: "/cokokrem.png",
   isBoycotted: "boykot",
   website: "https://www.ulker.com.tr/tr/markalar/cokokrem",
   description: `Çokokrem, 1967 yılında Ülker tarafından kurulmuş fındık kreması markasıdır. Ülker'in en bilinen markalarından biri olan Çokokrem, Yıldız Holding bünyesinde faaliyet göstermektedir. Türkiye'de fındık kreması kategorisinde önemli bir konuma sahip olan marka, geniş bir tüketici kitlesine hitap etmektedir.`,
   boycottReason: `Çokokrem, Ülker'in bir markası olduğu için boykot listesindedir. Ülker, Yıldız Holding'in İsrail işgali altındaki topraklarda satılmak üzere Silivri tesislerinde Godiva çikolataları üretmesi nedeniyle boykot edilmektedir. Ayrıca, katliamın devam ettiği 11 Ekim 2023 tarihinde Yıldız Holding yönetim kurulu üyesi Yahya Ülker'in Starbucks'a ziyarette bulunması ve tepkilerin ardından ziyareti yalanlayarak paylaşımları silmesi boykot nedenleri arasındadır. Yıldız Holding'in %23 oranında ortaklık payına sahip olduğu ve kararlarında ciddi etkisi bulunan Şok Marketler'in, boykotun etkisini kırmak amacıyla mağazalarında Starbucks ürünleri için özel reyonlar oluşturması da boykot kararını destekleyen faktörlerdendir.`,
   evidences: [""],
  },
  {
   name: "Nuga",
   slug: "nuga",
   foundedYear: null,
   ctgry: "Yiyecek",
   founder: "Fiskobirlik",
   owner: "Fiskobirlik",
   country: "Türkiye",
   alternative_products: [],
   img: "/nuga.png",
   isBoycotted: "boykot-degil",
   website: "https://www.fiskobirliknuga.com/",
   description: `Nuga, Fiskobirlik tarafından üretilen fındık kreması markasıdır. Fiskobirlik, 28 Temmuz 1938 tarihinde Atatürk'ün "özellikle fındık gibi ana ürünlerimizle ilgili birlikler kurulmalı" sözleri doğrultusunda 1. Uluslararası Fındık Kongresi sonrasında kurulmuştur. Giresun, Ordu, Trabzon, Keşap ve Bulancak'taki Fındık Tarım Satış Kooperatiflerinin birleşmesiyle oluşan Fiskobirlik, dünyanın en büyük üretici birliği konumundadır. 1981 yılında Entegre Fındık İşleme Tesisi faaliyete geçmiş, 2002 yılında ise Fiskobirlik Entegre Fındık İşleme Sanayii ve Ticaret A.Ş. olarak anonim şirket statüsüne geçmiştir. Nuga, Fiskobirlik'in entegre tesislerinde üretilen, Türkiye'nin fındık üretim kalitesini ve çeşitliliğini artırmayı hedefleyen, ham, yarı işlenmiş ve mamul ürünlerle milli ekonomiye katkı sağlayan bir markadır.`,
  },
  {
   name: "Tadıbu",
   slug: "tadibu",
   foundedYear: 1926,
   ctgry: "Yiyecek",
   founder: "Abdurrahman Tatlıcı",
   owner: "Abdurrahman Tatlıcı",
   country: "Türkiye",
   alternative_products: [],
   img: "/tadibu.png",
   isBoycotted: "boykot-degil",
   website: "https://abdurrahmantatlici.com/",
   description: `Tadıbu, 1926 yılında Abdurrahman Tatlıcı tarafından Konya'nın Beyşehir ilçesinde kurulmuş, üç nesildir devam eden Türk aile işletmesidir. Kurucu Abdurrahman Tatlıcı, doğallığı ve kalitesi sayesinde ürünlerinin popüler olması üzerine "TATLICI" soyadını almıştır. 1944 yılında Ankara'ya taşınan işletme, 1946'da Mamak'ta ilk üretimine başlamış, 1954'te Ulucanlar'da ilk satış merkezini açmıştır. 2003 yılında Sincan Organize Sanayi Bölgesi'nde modern fabrikaya geçilmiştir. 1946'dan beri kalite, lezzet ve güvenilirlik hedefiyle faaliyet gösteren Tadıbu, helva, lokum ve reçel üretmektedir. E 471 (emülgatör) ve koruyucu katkı maddeleri kullanmayan marka, sadece toz şeker kullanmakta ve geleneksel üretim yöntemlerini tercih etmektedir. Ürünleri gluten içermediği için çölyak hastaları tarafından güvenle tüketilebilmektedir. Kaliteli hammaddeler ve geleneksel yöntemlerle üretim yapan Tadıbu, tüketici hassasiyetini öncelik olarak görmektedir.`,
  },
  {
   name: "Nocilla",
   slug: "nocilla",
   foundedYear: 1967,
   ctgry: "Yiyecek",
   founder: "Starlux grubu",
   owner: "Idilia Foods",
   country: "İspanya",
   alternative_products: [],
   img: "/nocilla.png",
   isBoycotted: "onerilmiyor",
   website: "https://www.nocilla.es/",
   description: `Nocilla, İspanya ve Portekiz'de satılan Nutella'ya benzer bir İspanyol fındık ve çikolata kreması markasıdır. 1967 yılının sonlarında Starlux grubu tarafından, İtalyan Ferrero grubunun Nutella ürününden ilham alınarak İspanyol pazarı için geliştirilmiştir. Nocilla, Nutella'dan üçte bir daha az fındık ezmesi içermektedir ve %56 şeker içerir. 1997'de Knorr grubuna, daha sonra Unilever'e satılmış, 2002'de Cola Cao üreticisi olarak bilinen Grupo Nutrexpa'ya geçmiştir. 2015 yılında Nutrexpa'nın iki şirkete bölünmesinin ardından Idilia Foods'un mülkiyetine geçmiştir. Nocilla, gençler arasında tanınırlığını artırmak için spor kamplarına ve çocuk etkinliklerine sponsor olmuş ve reklamcılığa büyük yatırım yapmıştır. Sloganı "Süt, kakao, fındık ve şeker... No-ci-lla!!" şeklindedir.`,
   boycottReason: `Nocilla, İspanya merkezli bir şirket olduğu için yerli marka değildir. Bu nedenle yerli alternatifler tercih edilmesi önerilmektedir.`,
  },
  {
   name: "Dardanel",
   slug: "dardanel",
   foundedYear: 1984,
   ctgry: "Yiyecek",
   founder: "Niyazi Önen",
   owner: "Niyazi Önen Holding (%68,6), Halka Açık (%31,4)",
   country: "Türkiye",
   alternative_products: [],
   img: "/dardanel.png",
   isBoycotted: "boykot",
   website: "https://www.dardanel.com.tr/",
   description: `Dardanel, 1984 yılında Niyazi Önen tarafından Çanakkale'de kurulmuş bir gıda şirketidir. Türkiye'nin ilk konserve ton balığı üreticisidir. Şirket, deniz ürünleri, dondurulmuş gıda, konserve gıda ve hazır yemek üretimi yapmaktadır. Dardanel, "Türkiye'nin Balık Uzmanı" sloganıyla faaliyet göstermektedir.

Şirket, ek olarak Mr. No ve Baricci markaları ile sandviç ve atıştırmalıklar üretmekte ve Dardenia adıyla balık-ekmek lokantası zinciri işletmektedir. Dardanel, ürünlerinde Dolphin Safe (Yunus Güvenli) rozetini kullanmaya yetkilidir. 1991 yılından bu yana futbol kulübü Çanakkale Dardanel'un sponsorluğunu yapmaktadır.

Dardanel, 1994 yılından bu yana Borsa İstanbul'da işlem görmektedir. Şirket adını Çanakkale Boğazı'nın antik dönemdeki ismi olan Dardanelya'dan almaktadır. 2021 yılında Yunanistan'ın deniz ürünleri şirketi G. Kallimanis'i 6.2 milyon euro'ya satın almıştır.`,
   boycottReason: `Dardanel'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ilişkileridir. Dardanel, İsrail'e ton balığı ihracatı yapan bir Türk firmasıdır ve bu ihracatın Yahudi din kurallarına (koşer) uygun olması için özel düzenlemeler yapmaktadır.

Her ay İsrail'den gelen iki haham, bir hafta boyunca Çanakkale'deki fabrikada kalarak üretimi denetlemekte ve tüm üretim süreçlerinin dini gerekliliklere uygun şekilde yapılmasını sağlamaktadır. Bu süreçte, üretimde kullanılan tüm ekipmanlar 100 derece sıcaklığındaki sularla yıkanmakta ve buhar makineleri bile hahamlar tarafından çalıştırılmaktadır.

Dardanel, Çanakkale'deki tesislerinde İsrail pazarı için "Starkist" markası altında ton balığı ürünleri üretmektedir. Bu fason üretim, İsrail pazarını katma değerli bir satış noktası olarak gören firmanın özel üretim çalışmasının bir parçasıdır. Özellikle 7 Ekim'de başlayan İsrail'in saldırıları sırasında bile Dardanel'in İsrail'e ihracatını sürdürdüğü iddia edilmektedir.

Bu ticari bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Dardanel'i boykot etmeyi bir sorumluluk olarak görmektedir. Şirketin İsrail ile olan doğrudan ticari ilişkisi ve İsrail pazarına yönelik özel üretim çalışmaları, boykot kararını destekleyen temel faktörlerdir.`,
   evidences: [
    "https://www.sabah.com.tr/yasam/ton-baligina-haham-dokunusu-5364544",
   ],
  },
  {
   name: "Unilever",
   slug: "unilever",
   foundedYear: 1930,
   ctgry: "Şirket",
   founder:
    "Antonius Johannes Jurgens, Samuel van den Bergh ve William Lever",
   owner: "Halka Açık",
   country: "Birleşik Krallık",
   alternative_products: [],
   img: "/unilever.png",
   isBoycotted: "boykot",
   website: "https://www.unilever.com.tr/",
   description: `Unilever, Birleşik Krallık merkezli dünyanın en büyük yiyecek ve hızlı tüketim malları üreticilerinden biridir. Unilever, dört ana bölüme ayrılmıştır: Foods (Yiyecekler), Refreshments (İçecekler ve dondurma dahil), Home Care (Ev Bakımı) ve Personal Care (Kişisel Bakım).

Unilever, 1930 yılında Hollanda margarin üreticisi Margarine Unie ile İngiliz sabun üreticisi Lever Brothers'ın birleşmesiyle kurulmuştur. Şirketin kurucuları Antonius Johannes Jurgens, Samuel van den Bergh ve William Lever'dır.

İlk yıllarında şirket margarin ve sabun üretmiş, üretiminde palm yağı kullanmıştır. Bu durum Afrika ve Latin Amerika'da yeni girişimlere yol açmıştır. İkinci Dünya Savaşı'ndan sonra Unilever, yiyecek ve kişisel bakım sektörlerine genişlemiştir.

Şirket, marka satın alma politikası izlemiş ve Axe, Dove, Omo, Becel, Hellmann's, Lipton, Algida, Magnum, Rexona ve Knorr gibi tanınmış markaları bünyesine katmıştır. Bu satın almalarla Unilever, dünyanın önde gelen şirketlerinden biri haline gelmiştir.

Günümüzde Unilever, dünyanın en büyük şirketlerinden biridir ve ürünlerini yaklaşık 200 ülkede satmaktadır. Dünya genelinde 20'den fazla ülkede kendi fabrikaları ve genel merkezleri bulunmaktadır. Şirketin 400'den fazla markası bulunmaktadır ve bu markalar dört ana kategori altında organize edilmiştir: yiyecek, içecek, ev bakımı ve güzellik ve kişisel bakım.

Unilever, Türkiye'de 1952 yılında ilk yatırımını yapmıştır. İstanbul'un Bakırköy ilçesinde kurulan Sana fabrikası, şirketin Türkiye'de kurduğu ilk tesistir. Günümüzde şirket, Türkiye'nin Anadolu, Karadeniz ve Marmara bölgelerinde çeşitli yiyecek ve bakım ürünleri üreten 8 fabrika işletmektedir. Üretim, ihracat ve satış kapasitesine göre Türkiye, Unilever'in en gelişmiş pazarlarından biri olarak kabul edilmektedir.

Unilever'in sloganı "Parlak gelecek"tir ve şirket, Unilever House, Londra, Birleşik Krallık'ta genel merkezine sahiptir.`,
   boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Algida, Magnum, Calvé, Hellmann's, Lipton, Axe, Dove, Omo, Rexona ve diğerleri dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
   evidences: [""],
   subBrands: [
    {
     name: "Algida",
     slug: "algida",
     foundedYear: 1922,
     ctgry: "Yiyecek",
     founder: "Richard Wall",
     owner: "Unilever",
     country: "Birleşik Krallık",
     alternative_products: [],
     img: "/algida.png",
     isBoycotted: "boykot",
     website: "https://www.algida.com.tr/home.html",
     description: `Algida, aslen Wall's adıyla bilinen ve Unilever'e ait dünyanın önde gelen dondurma şirketlerinden biridir. Algida, farklı ülkelerde farklı isimlerle faaliyet göstermektedir ve Unilever'in en karlı yan kuruluşudur.
  
  Wall's, 1786 yılında Richard Wall tarafından Londra'da St James's Market'te bir kasap dükkanı olarak kurulmuştur. 1900'lerde işletme, Richard Wall'ın torunu Thomas Wall II tarafından yönetilmiştir. Yaz aylarında sosis, turta ve et ürünlerine olan talebin azalması nedeniyle çalışanların işten çıkarılmasını önlemek amacıyla, Thomas Wall II 1913 yılında dondurma yapma fikrini ortaya atmıştır.
  
  1922 yılında işletme, Lever Brothers ve Margarine Unie tarafından ortaklaşa satın alınmıştır. Maxwell Holt göreve getirilmiş ve dondurma üretimi fikri başarıyla hayata geçirilmiştir. Dondurma üretimi, 1922 yılında Londra'nın Acton bölgesindeki bir fabrikada başlamıştır. 1959 yılında Wall's, İngiltere'nin Gloucester şehrinde bir depo fabrikası inşa ederek üretim kapasitesini ikiye katlamıştır.
  
  Unilever, İngiltere'de dondurma için Wall's markasını kullanmaya devam etmektedir ve bu, şirketin uluslararası Heartbrand (Kalp Markası) stratejisinin bir parçası haline gelmiştir. Algida, dünya genelinde yerel dondurma şirketlerini satın alarak ve bunları yeniden markalandırarak önemli bir küresel pazar payı elde etmiştir. Unilever genellikle aynı dondurmaları aynı isimle üretir, ancak bazı yerel varyasyonlar mevcuttur.
  
  Algida, Magnum, Cornetto, Twister, Carte d'Or ve Algida Max gibi dünya çapında tanınan dondurma markalarına sahiptir. Sloganı "Mutluluğu Paylaş" (Share Happiness) şeklindedir. Algida, logoyu ve ürün portföyünün çoğunu diğer Heartbrand şirketleriyle paylaşmaktadır.`,
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Algida dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     evidences: [
      "https://www.just-food.com/news/israel-unilever-takes-control-of-strauss-ice-cream/",
     ],
     subBrands: [
      {
       name: "Magnum",
       slug: "magnum",
       foundedYear: 1989,
       ctgry: "Yiyecek",
       founder: "Unilever",
       owner: "Unilever",
       country: "Birleşik Krallık",
       alternative_products: [],
       img: "/magnum.png",
       isBoycotted: "boykot",
       website: "",
       description: `Magnum, Unilever tarafından 1989 yılında piyasaya sürülen premium dondurma markasıdır. Magnum, çikolata kaplı dondurma çubuklarıyla tanınır ve dünya çapında en popüler dondurma markalarından biridir.
  
  Magnum, ilk olarak Avrupa'da Algida (Wall's) markası altında piyasaya sürülmüştür. Markanın başarısı, kaliteli çikolata kaplama ve çeşitli lezzet seçenekleriyle tüketicilerin ilgisini çekmiştir. Magnum, "Magnum Pleasure" (Magnum Zevki) sloganıyla tanınır ve lüks dondurma segmentinde önemli bir konuma sahiptir.
  
  Magnum, çikolata kaplı dondurma konseptini popülerleştirmiş ve zaman içinde farklı lezzetler ve boyutlarda çeşitlenmiştir. Marka, dünya genelinde Algida, Wall's, Streets ve diğer Unilever dondurma markaları altında satılmaktadır. Magnum, Unilever'in Heartbrand (Kalp Markası) stratejisinin önemli bir parçasıdır.`,
       boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Magnum dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
       evidences: [""],
      },
      {
       name: "Cornetto",
       slug: "cornetto",
       foundedYear: 1976,
       ctgry: "Yiyecek",
       founder: "Unilever",
       owner: "Unilever",
       country: "İtalya",
       alternative_products: [],
       img: "/cornetto.png",
       isBoycotted: "boykot",
       website: "",
       description: `Cornetto, Unilever tarafından 1976 yılında İtalya'da piyasaya sürülen dondurma markasıdır. Cornetto, koni şeklindeki waffle kaplarda dondurma ve çikolata kaplı dondurma çubuklarıyla tanınır.
  
  Cornetto, ilk olarak Avrupa'da Algida (Wall's) markası altında piyasaya sürülmüştür. Markanın başarısı, eşsiz koni şekli ve çeşitli lezzet seçenekleriyle tüketicilerin ilgisini çekmiştir. Cornetto, "One Moment of Pure Pleasure" (Bir Anlık Saf Zevk) sloganıyla tanınır ve dünya çapında popüler bir dondurma markasıdır.
  
  Cornetto, Unilever'in Heartbrand (Kalp Markası) stratejisinin önemli bir parçasıdır ve dünya genelinde farklı ülkelerde farklı isimlerle satılmaktadır. Marka, özellikle genç tüketiciler arasında popülerdir ve çeşitli lezzetlerde üretilmektedir.`,
       boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Cornetto dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
       evidences: [
        "https://www.just-food.com/news/israel-unilever-takes-control-of-strauss-ice-cream/",
       ],
      },
      {
       name: "Carte D'Or",
       slug: "carte-dor",
       foundedYear: 1991,
       ctgry: "Yiyecek",
       founder: "Unilever",
       owner: "Unilever",
       country: "Fransa",
       alternative_products: [],
       img: "/carte-dor.png",
       isBoycotted: "boykot",
       website: "",
       description: `Carte d'Or, Unilever tarafından 1991 yılında Fransa'da piyasaya sürülen premium dondurma markasıdır. Carte d'Or, yüksek kaliteli malzemeler ve çeşitli lezzet seçenekleriyle tanınır.
  
  Carte d'Or, özellikle Avrupa pazarında premium segmentte konumlanmıştır. Marka, özenle seçilmiş içerikler ve geleneksel dondurma yapım teknikleriyle tüketicilere lüks bir dondurma deneyimi sunmaktadır. Carte d'Or, "Le plaisir d'être ensemble" (Birlikte olmanın zevki) gibi sloganlarla tanınır.
  
  Carte d'Or, Unilever'in Heartbrand (Kalp Markası) stratejisinin bir parçasıdır ve özellikle Fransa, Belçika, İsviçre gibi ülkelerde yaygın olarak bulunmaktadır. Marka, geleneksel ve modern lezzetlerin birleşimini sunarak geniş bir tüketici kitlesine hitap etmektedir.`,
       boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Carte d'Or dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
       evidences: [
        "https://www.just-food.com/news/israel-unilever-takes-control-of-strauss-ice-cream/",
       ],
      },
      {
       name: "Classics",
       slug: "classics",
       foundedYear: 1990,
       ctgry: "Yiyecek",
       founder: "Unilever",
       owner: "Unilever",
       country: "Birleşik Krallık",
       alternative_products: [],
       img: "/classics.png",
       isBoycotted: "boykot",
       website: "",
       description: `Classics, Unilever tarafından üretilen ve Algida markası altında satılan klasik dondurma ürünleridir. Classics serisi, geleneksel lezzetler ve klasik dondurma çeşitleriyle tüketicilere sunulmaktadır.`,
       boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Classics dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
       evidences: [
        "https://www.just-food.com/news/israel-unilever-takes-control-of-strauss-ice-cream/",
       ],
      },
      {
       name: "Twister",
       slug: "twister",
       foundedYear: 1982,
       ctgry: "Yiyecek",
       founder: "Unilever",
       owner: "Unilever",
       country: "Birleşik Krallık",
       alternative_products: [],
       img: "/twister.png",
       isBoycotted: "boykot",
       website: "",
       description: `Twister, Unilever tarafından 1982 yılında piyasaya sürülen dondurma markasıdır. Twister, çift renkli ve çift lezzetli dondurma çubuklarıyla tanınır. Marka, özellikle genç tüketiciler arasında popülerdir ve çeşitli meyve lezzetlerinde üretilmektedir.`,
       boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Twister dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
       evidences: [
        "https://www.just-food.com/news/israel-unilever-takes-control-of-strauss-ice-cream/",
       ],
      },
      {
       name: "Viennetta",
       slug: "viennetta",
       foundedYear: 1982,
       ctgry: "Yiyecek",
       founder: "Unilever",
       owner: "Unilever",
       country: "Birleşik Krallık",
       alternative_products: [],
       img: "/viennetta.png",
       isBoycotted: "boykot",
       website: "",
       description: `Viennetta, Unilever tarafından 1982 yılında piyasaya sürülen premium dondurma pastası markasıdır. Viennetta, katmanlı dondurma ve çikolata katmanlarıyla tanınır ve özel günler için tasarlanmış lüks bir dondurma ürünüdür.`,
       boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Viennetta dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
       evidences: [
        "https://www.just-food.com/news/israel-unilever-takes-control-of-strauss-ice-cream/",
       ],
      },
      {
       name: "Boom Boom",
       slug: "boom-boom",
       foundedYear: 1990,
       ctgry: "Yiyecek",
       founder: "Unilever",
       owner: "Unilever",
       country: "Türkiye",
       alternative_products: [],
       img: "/boom-boom.png",
       isBoycotted: "boykot",
       website: "",
       description: `Boom Boom, Unilever'in Algida markası altında Türkiye pazarı için ürettiği dondurma markasıdır. Boom Boom, özellikle çocuklar ve gençler arasında popüler olan renkli ve eğlenceli dondurma ürünleridir.`,
       boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Boom Boom dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
       evidences: [
        "https://www.just-food.com/news/israel-unilever-takes-control-of-strauss-ice-cream/",
       ],
      },
      {
       name: "Nogger",
       slug: "nogger",
       foundedYear: 1980,
       ctgry: "Yiyecek",
       founder: "Unilever",
       owner: "Unilever",
       country: "Almanya",
       alternative_products: [],
       img: "/nogger.png",
       isBoycotted: "boykot",
       website: "",
       description: `Nogger, Unilever tarafından 1980 yılında Almanya'da piyasaya sürülen dondurma markasıdır. Nogger, çikolata kaplı dondurma çubuklarıyla tanınır ve özellikle Avrupa pazarında popülerdir.`,
       boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Nogger dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
       evidences: [
        "https://www.just-food.com/news/israel-unilever-takes-control-of-strauss-ice-cream/",
       ],
      },
      {
       name: "Keyif",
       slug: "keyif",
       foundedYear: 1995,
       ctgry: "Yiyecek",
       founder: "Unilever",
       owner: "Unilever",
       country: "Türkiye",
       alternative_products: [],
       img: "/keyif.png",
       isBoycotted: "boykot",
       website: "",
       description: `Keyif, Unilever'in Algida markası altında Türkiye pazarı için ürettiği dondurma markasıdır. Keyif, geleneksel Türk dondurma lezzetlerini modern bir yaklaşımla sunan ürünlerdir.`,
       boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Keyif dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
       evidences: [
        "https://www.just-food.com/news/israel-unilever-takes-control-of-strauss-ice-cream/",
       ],
      },
      {
       name: "Usta Usulü",
       slug: "usta-usulu",
       foundedYear: 2000,
       ctgry: "Yiyecek",
       founder: "Unilever",
       owner: "Unilever",
       country: "Türkiye",
       alternative_products: [],
       img: "/usta-usulu.png",
       isBoycotted: "boykot",
       website: "",
       description: `Usta Usulü, Unilever'in Algida markası altında Türkiye pazarı için ürettiği dondurma markasıdır. Usta Usulü, geleneksel dondurma ustalarının tariflerinden ilham alınarak hazırlanmış özel dondurma ürünleridir.`,
       boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Usta Usulü dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
       evidences: [
        "https://www.just-food.com/news/israel-unilever-takes-control-of-strauss-ice-cream/",
       ],
      },
     ],
    },
    {
     name: "Calve",
     slug: "calve",
     foundedYear: 1884,
     ctgry: "Yiyecek",
     founder: "Jacques van Marken",
     owner: "Unilever",
     country: "Hollanda",
     alternative_products: [],
     img: "/calve.png",
     isBoycotted: "boykot",
     website: "https://www.calve.com.tr/home.html",
     description: `Calvé, Unilever grubuna ait mayonez ve ketçap markasıdır. Calvé'nin hikayesi 1884 yılında Hollanda'da "Delftsche Slaolie" adıyla sebze yağı üretim fabrikasının kurulmasıyla başlamıştır.
   
   Calvé'nin kurucusu iş insanı Jacques van Marken'dir. 1897 yılında van Marken'in fabrikası, Fransa'da sebze yağı üreten ve Calvé ailesine ait bir Fransız şirketiyle birleşmiştir. Bu ailenin adı daha sonra marka adı olmuştur.
   
   1928 yılında marka, İngiliz şirketi "Lever Brothers"a katılmış ve "Margarin Unie" ile birleşerek Unilever şirketi haline gelmiştir. 1940'tan itibaren şirket mayonez ve salata yağı gibi yeni ürünleri piyasaya sürmüştür.
   
   1948'den itibaren şirket "Delft" adıyla fıstık ezmesi üretmiş, 1965'ten itibaren ise sos üretimine başlamıştır. 2007 yılında Calvé, "Delft" fıstık ezmesini Hollanda şirketi "Blue Band"e satmıştır.
   
   Şirketin ürünleri şişe ve özel doypack ambalajlarda paketlenmektedir. Calvé, mayonez, ketçap, hardal, sos ve çorba gibi geniş bir ürün yelpazesine sahiptir. Calvé'nin sloganı "Dünya bir tarif kitabı gibidir" şeklindedir.`,
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Calvé dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     evidences: [""],
    },
    {
     name: "Knorr",
     slug: "knorr",
     foundedYear: 1838,
     ctgry: "Yiyecek",
     founder: "Carl Heinrich Theodor Knorr",
     owner: "Unilever",
     country: "Almanya",
     alternative_products: [],
     img: "/knorr.png",
     isBoycotted: "boykot",
     website: "https://www.knorr.com/tr/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Knorr dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Knorr, 1838 yılında Carl Heinrich Theodor Knorr tarafından kurulmuş ve 2000 yılında Unilever tarafından satın alınmış bir yemek firmasıdır. Knorr, Unilever'e ait gıda ürünü markasıdır.

Knorr firması 1838 yılında Carl Heinrich Theodor Knorr (15 Mayıs 1800, Braunschweig - 20 Mayıs 1875, Heilbronn) tarafından kurulmuştur. Theodor Knorr, 15 Mayıs 1800 tarihinde Braunschweig'de doğmuştur. Babası Johannes Christian Julius Knorr (1766-1832), annesi Johanna Dorothea Henriette Knorr, geb. Rosenthal (1762-1845)'dır. Knorr şirketini kurduğunda 38 yaşındaydı ve 20 Mayıs 1875'te Heilbronn'da ölmüştür.

Knorr, Heilbronn, Almanya'da bulunan şirkettir. Şirketin toplam €3 milyar parası bulunmaktadır. Daha önceden Lipton markasına satılan ürünler şimdi Knorr ürün servisine aittir.

Knorr, Unilever'in gıda ürünü olarak faaliyet göstermektedir ve dünya çapında çeşitli yemek ürünleri, sos karışımları ve hazır yemek karışımları üretmektedir.`,
    },
    {
     name: "Axe",
     slug: "axe",
     foundedYear: 1983,
     ctgry: "Kişisel Bakım",
     founder: "Unilever",
     owner: "Unilever",
     country: "Fransa",
     alternative_products: [],
     img: "/axe.png",
     isBoycotted: "boykot",
     website: "https://www.axe.com/tr/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Axe dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Axe, Unilever'e ait kişisel bakım markasıdır. Axe, Birleşik Krallık, İrlanda, Avustralya ve Yeni Zelanda'da "Lynx" adıyla bilinmektedir.

Axe, 1983 yılında Fransa'da ilk kez piyasaya sürülmüştür. İlk amacı, erkekler için kadınları çekmek için koku ürünleri yaratmaktı. Daha sonra Axe'in reklamları, erkeklerin kadınların dikkatini çekmesi üzerine odaklanmıştır. İlk olarak Amerika'da tanıtılan ürün, daha sonra Asya ve Afrika'da başarı bulmuştur.

Ocak 2012'de Axe, daha önce sadece erkekler için üretim yapan marka, Birleşik Krallık'ta ilk Axe/Lynx kadın ürününü piyasaya sürmüştür. Güncel ürün portföyü aerosol, parfüm, şampuan, tıraş kremi ve duş jeli içermektedir.

Şirket, Axe Black, Axe Black Night, Axe Dark Temptation, Axe Apollo, Axe Gold Temptation, Axe Anarchy, Axe Excite ve Axe Africa gibi çeşitli isimler ve kokularla ürünler sunmaktadır. Axe, Türkiye'de küresel perspektifle yenilikçi ürün ve iletişim faaliyetlerine devam etmektedir ve 2015 yılına kadar "Axe Effect" başlığı altında birçok küresel kampanyanın Türkçe versiyonları tasarlanmıştır.`,
    },
    {
     name: "Cif",
     slug: "cif",
     foundedYear: 1969,
     ctgry: "Temizlik",
     founder: "Unilever",
     owner: "Unilever",
     country: "Fransa",
     alternative_products: [],
     img: "/cif.png",
     isBoycotted: "boykot",
     website: "https://www.cif.com.tr/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Cif dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Cif, Unilever'e ait temizlik markasıdır. Cif, İrlanda, İskandinavya ve Yeni Zelanda'da "Jif" olarak, Kuzey Amerika, Kanada, Güney Afrika, Hindistan ve Sri Lanka'da ise "Sunlight", "Vim" veya diğer isimlerle bilinmektedir.

Cif, 1969 yılında Fransa'da toz ve lekeler için krem temizleyici olarak piyasaya sürülmüştür. İlk olarak mutfak ve banyo temizleyicilerine odaklanmış, daha sonra bulaşık yıkama ve çamaşır ürünlerine genişlemiştir. Cif, temizleme etkisini "buz üzerinde paten çizgisi gibi" ifadesiyle tanımlamaktadır.

Cif, 51 ülkede Jif, Vim, Viss ve Handy Andy gibi çeşitli isimlerle bilinmektedir. İsim değişiklikleri zaman içinde gerçekleşmiştir: İsveç, İngiltere ve Güney Afrika'da Vim olarak satılan ürünler, daha sonra İrlanda, Hollanda ve Hong Kong'da Jif'e, ardından Ocak 2001'de piyasa uyumluluğu için çoğunlukla Cif'e değiştirilmiştir. İngiltere, İrlanda ve Norveç'te hala birçok tüketici Jif ürününü tercih etmektedir.

Ürün, Belçika, Finlandiya ve Portekiz'de uzun süre Vim olarak bilinmiş, sonra Cif olmuştur ve hala Kanada ve Hindistan'da Vim olarak adlandırılmaktadır. Hindistan'da Cif yüzey temizleyici reklamları görünmeye başlamıştır, ancak bulaşık yıkama makineleri için hala Vim kullanılmaktadır. Almanya'da temizleyici Viss olarak, Norveç'te ise hala Jif olarak adlandırılmaktadır. Irak'ta Jif, yerel Arapça ve İngilizce yazılarla bulunmaktadır.

Türkiye'de 2010 yazında Sunlight markası altında üretilen bulaşık deterjanları, yeni kompozit marka "Sunlight Cif" olarak pazarlanmaya başlanmıştır.`,
    },
    {
     name: "Clear",
     slug: "clear",
     foundedYear: 1981,
     ctgry: "Kişisel Bakım",
     founder: "Unilever",
     owner: "Unilever",
     country: "İtalya",
     alternative_products: [],
     img: "/clear.png",
     isBoycotted: "boykot",
     website: "https://www.unilever.com.tr/brands/beauty-wellbeing/clear/",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Clear dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Clear, Unilever tarafından üretilen kepek önleyici şampuan markasıdır. Clear, 1981 yılında piyasaya sürülmüş ve birçok küresel ülkede "Clear" adıyla satılmaktadır.

Clear, Yunanistan'da "Ultrex", Portekiz'de "Linic", Hindistan'da "Pure Derm" olarak bilinmektedir. 2000'lerden önce ürün, Tayland'da "Clinic Clear" ve "Clinic" olarak satılmıştır ve 2010'a kadar bu isimle satılmaya devam etmiştir.

Agnes Monica, Clear'in şu anki marka elçisidir. Clear, dünya çapında birçok sporcu, müzisyen ve aktörü reklamlarında kullanmıştır.

Clear'in tarihsel sloganları şunlardır:
- 1981-1989: "Clear şampuanı, kepeklere karşı, düzenli olarak"
- 1989-1993: "Berrak işler. Kepek düzenli olarak hatta her gün"

Clear, kepek önleme ve saç bakımı alanında faaliyet göstermektedir ve Unilever'in kişisel bakım markalarından biridir.`,
    },
    {
     name: "Domestos",
     slug: "domestos",
     foundedYear: 1929,
     ctgry: "Temizlik",
     founder: "Wilfred Handley",
     owner: "Unilever",
     country: "Birleşik Krallık",
     alternative_products: [],
     img: "/domestos.png",
     isBoycotted: "boykot",
     website: "https://www.domestos.com/tr/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Domestos dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Domestos, ürünlerinde çamaşır suyu (sodyum hipoklorit, NaOCl) içeren ve Unilever tarafından üretilen bir ev temizliği markasıdır.

Domestos Çamaşır Suyu, 1929 yılında kimyager Wilfred Handley (1901-1982) tarafından İngiltere'de icat edilmiştir. Domestos ilk kez 1929 yılında, İngiltere'nin kuzeydoğusunda yaşayan endüstriyel kimyager Wilfred Handley tarafından üretilmiş ve kapı kapı gezen satıcılar tarafından müşterilerin getirdikleri seramik kavanozlara doldurularak satılmaya başlanmıştır.

18. Yüzyıldan Domestos'un icadına dek çamaşır suları sadece çamaşır beyazlatmak için kullanılırken, Wilfred Handley sodyum bileşikleri üzerinde yaptığı çalışmalar sayesinde tarihte ilk kez sodyum hipokloriti çamaşır beyazlatmanın yanı sıra yüzey temizliğinde de kullanılabilir hale getirdi.

1938 yılında Domestos Çamaşır Suyunun ikonik yeşil renkli, depozitolu şişelerde satışına başlandı. Handley'nin Domestos Çamaşır Suyu için geliştirdiği satış ve pazarlama teknikleri sayesinde çamaşır suyunun kullanımı artarken, temizlik ve hijyen alanında standartlar da yükseldi.

1961 yılında Domestos'un üretim ve satış haklarını devralan Unilever'le birlikte çamaşır suyu pazarında büyümesini hızlandırdı. 1999 yılında ise Domestos, Türkiye ev bakım pazarına yoğun kıvamlı çamaşır suyunu getiren ilk marka oldu ve o günden bu yana Türkiye'deki evlere eşsiz formüllü çamaşır suları ve temizlik ürünleri ile maksimum sürdürülebilir hijyen sunuyor.

Türkiye'deki ürünler arasında Domestos Ultra Yoğun Kıvamlı Çamaşır Suyu (Dağ Esintisi, Kar Beyazı, Limon Ferahlığı ve Okaliptus Ferahlığı kokuları gibi farklı kokuları ile) ve 7'li Püskürtme Sistemi (özel dizayn edilmiş kapağı ile, yoğun kıvamlı çamaşır suyunun tazyikli bir şekilde tuvaletin her yerine ulaştırır) bulunmaktadır.`,
    },
    {
     name: "Dove",
     slug: "dove",
     country: "ABD",
     ctgry: "Kişisel Bakım",
     founder: "",
     owner: "Unilever",
     country: "ABD",
     alternative_products: [],
     img: "/dove.png",
     isBoycotted: "boykot",
     website: "https://www.dove.com/tr/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Dove dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Dove, İngiliz kökenli Unilever şirketine ait kişisel bakım markasıdır. Dove ürünleri Arjantin, Avustralya, Brezilya, Kanada, Almanya, Endonezya, İsrail, İrlanda, Meksika, Hollanda, Pakistan, Güney Afrika, Tayland, Türkiye ve Amerika Birleşik Devletleri gibi çeşitli ülkelerde üretilmektedir.

Dove markası ilk olarak 1955 yılında ABD'de piyasaya sürülmüştür. Günümüzde ürünleri 80'den fazla ülkede satılmakta ve tüketilmektedir.

Dove, dört sektörde faaliyet göstermektedir: cilt temizleme ürünleri, cilt bakım ürünleri, deodorant ve saç bakım ürünleri. Ürün yelpazesi arasında antiperspirant deodorantlar, vücut yıkama jelleri, güzellik sabunları, losyonlar, nemlendiriciler, saç bakımı ve yüz bakım ürünleri bulunmaktadır.

Dove ürünleri genellikle sentetik yüzey aktif maddeler, bitkisel yağlar (palm kernel yağı gibi) ve hayvansal yağlardan (tallow) hazırlanmaktadır.

Günümüzde Dove, hem erkek hem de kadınlar için sabun, sıvı sabun, duş jeli, krem çubuklar, şampuanlar, saç kremleri, rulo, deodorantlar, spreyler, losyonlar ve vücut ve el bakım ürünleri üretmektedir.

Türkiye pazarında Dove ilk olarak 1993 yılında Dove Cream Bar'ın piyasaya sürülmesiyle giriş yapmıştır. Bunu 1997 yılında Shower Gel ve Liquid Soap'un piyasaya sürülmesi takip etmiştir. Dove Deodorant, markaya 2001 yılında eklenmiş ve Dove Body Silk ise 2002 yılında piyasaya sürülmüştür. 2010 yılında Dove, erkekler için "Dove Men + Care" adında yeni bir marka başlatmıştır.`,
    },
    {
     name: "Elidor",
     slug: "elidor",
     foundedYear: 1954,
     ctgry: "Kişisel Bakım",
     founder: "",
     owner: "Unilever",
     country: "Birleşik Krallık",
     alternative_products: [],
     img: "/elidor.png",
     isBoycotted: "boykot",
     website: "https://www.elidor.com.tr/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Elidor dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Elidor, Unilever şirketine ait şampuan markasıdır. Orijinal adı "Sunsilk" olup, diğer ülkelerde "Elidor", "Seda" ve "Sedal" adlarıyla satılmaktadır.

Elidor markası ilk olarak 1954 yılında İngiltere'de piyasaya sürülmüştür. 1959 yılında 18 ülkede satılmaya başlanmıştır.

1956 yılında kuru saçlar için Sunsilk krem şampuan piyasaya sürülmüştür. 1960 yılında enfekte saç derisi için Allantoin içeren Sunsilk Tonic şampuan piyasaya çıkmıştır. 1962 yılında Sunsilk, farklı saç tipleri için farklı şampuan türleri olarak pazarlanmaya başlanmıştır.

1966 yılında Sunsilk, ürün formülünü önemli ölçüde geliştirerek yeni seriler başlatmıştır. İlk olarak saçları yumuşak ve yönetilebilir hale getirmek için zeytinyağı içeren bir krem şampuan tanıtılmıştır. Yağlı saçlar için doğal parlaklığını geri kazandırmak amacıyla limon şampuanı piyasaya sürülmüştür. 1966 yılında Sunsilk, saç bakımı için ilk saç spreyini tanıtmıştır. Saç spreyi bir Fransız parfümü içeriyordu ve yıkandıktan sonra kolayca taranabilirdi.

1969 yılında tüm Sunsilk ürünleri, cam şişeler yerine daha pratik PVC (polivinil klorür) ambalajlarda paketlenmeye başlanmıştır. 1971 yılında Sunsilk krem, kuru, normal ve yağlı saçlar için üç çeşit olarak piyasaya sürülmüştür. 1973 yılında Sunsilk, bir aerosol losyon tanıtmıştır. 1985 yılında Sunsilk, styling mousse serisini başlatmıştır.

1993 yılında Sunsilk, kadınların saç ihtiyaçlarını karşılamak ve istedikleri saç görünümünü yansıtmak için geliştirilmiş şampuan ve kremlerden oluşan bir seri piyasaya sürmüştür. "Elida Hair Institute" bu yönde birçok çalışma yapmış ve yeni ürünleri piyasaya tanıtmıştır.

Sunsilk, küresel tanıtım ve pazarlaması için ünlüleri kullanmıştır. 2008 yılında Madonna, Natalia Oreiro ve Shakira, "Hayat beklemiyor" sloganıyla bir reklam kampanyası başlatmıştır. Bunu takiben "Saç Üzerine = Hayat Üzerine" sloganıyla kampanyalar devam etmiştir.

2009 yılında Elidor, dünyanın en ünlü yedi saç tasarımcısıyla işbirliği yaparak "Elidor Co-Creations" serisini başlatmıştır. Her tasarımcı, belirli saç tipleri veya problemleri için formüller geliştirmiştir: Ouidad (dalgalı ve kıvırcık saçlar), Rita Hazan (boyalı saçlar), Francesca Fusco (saç dökülmesi ve diğer saç derisi problemleri), Jamal Hammadi (ışıltılı saçlar), Yuko Yamashita (düz saçlar), Teddy Charles (hacimli saçlar), Thomas Taw (kuru ve yıpranmış saçlar).

Türkiye'de Meryem Uzerli ve Elçin Sangu, Elidor'un reklam yüzleri olmuştur.`,
    },
    {
     name: "Hellmann's",
     slug: "hellmanns",
     country: "ABD",
     ctgry: "Yiyecek",
     founder: "",
     owner: "Unilever",
     country: "ABD",
     alternative_products: [],
     img: "/hellmanns.png",
     isBoycotted: "boykot",
     website: "https://www.hellmanns.com/uk/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Hellmann's dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Hellmann's ve Best Foods, mayonez, ketçap, hardal, turşu ve diğer gıda ürünleri için kullanılan markalardır.

Hellmann's, Birleşik Krallık, Amerika Birleşik Devletleri (Rocky Dağları'nın doğusu), Latin Amerika, Avrupa, Avustralya, Orta Doğu, Kanada ve Güney Afrika'da satılmaktadır.

Best Foods ise Amerika Birleşik Devletleri (Rocky Dağları'nın batısı), Asya, Avustralya ve Yeni Zelanda'da satılmaktadır.

Hellmann's ve Best Foods benzer şekilde pazarlanmaktadır. Logoları ve web siteleri benzerdir. İkisi de aynı İngilizce sloganı paylaşır: "Bring out the best" (Türkçe: "En iyisini ortaya çıkarmak").

Her iki marka da daha önce ABD merkezli Best Foods Corporation tarafından satılıyordu. Best Foods Corporation, Hellmann's ve Best Foods mayonezlerinin yanı sıra başka gıda ürünleri de satıyordu. 1997'den önce Best Foods, CPC (Ingredion) olarak biliniyordu. Best Foods, 2000 yılında Unilever tarafından satın alınmıştır.

Hellmann's, ürün yelpazesinde mayonez, ketçap ve hardal gibi temel gıda ürünlerini bulundurmaktadır.`,
    },
    {
     name: "OMO",
     slug: "omo",
     foundedYear: 1959,
     ctgry: "Temizlik",
     founder: "",
     owner: "Unilever",
     country: "Birleşik Krallık",
     alternative_products: [],
     img: "/omo.png",
     isBoycotted: "boykot",
     website: "https://www.omo.com/tr/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (OMO dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `OMO, Unilever'e ait bir deterjan markasıdır. Türkiye'de "Omo" olarak bilinir, ancak Hindistan, İrlanda ve Güney Afrika gibi ülkelerde "Surf" olarak satılmaktadır.

Amerika Birleşik Devletleri'nde marka hakları Sun Products'a aittir. Avustralya ve Yeni Zelanda'da hem "Omo" hem de "Surf" olarak satılmaktadır.

"Surf" 1959 yılında Unilever tarafından piyasaya sürülmüştür. OMO, Unilever'in diğer markası Rinso'dan pazar payı kazandı ve küresel olarak popüler hale geldi.

Bazı ülkelerde (Malezya, Singapur gibi) Unilever, Omo'nun yanı sıra Henkel'in Persil markasını da lisans altında satmaktadır.

OMO, farklı ülkelerde farklı isimlerle pazarlanmaktadır:
- Kıbrıs, Yunanistan, Fransa, Portekiz, İspanya, Arjantin ve Uruguay'da "Skip" olarak pazarlanmaktadır.
- Hindistan, Pakistan ve Bangladeş'te "Surf Excel" olarak bilinmektedir.
- Romanya'da yerel bir versiyon olan DERO, Omo'nun yanında satılmaktadır.

Omo, 1990'larda Polonya'da popülerdi ancak 2000 yılında satışlar durdu. Belçika'da 2009 yılında "Coral" Omo'nun yerini aldı. Tunus'ta popülerliği nedeniyle tüm deterjanlar "Omo" olarak bilinmeye başladı.

Türkiye'de OMO, 1960'larda piyasaya girmiştir. 1985 yılında otomatik çamaşır makineleri için "Omomatik" tanıtılmıştır. Pazarlama kampanyaları arasında "Kıyafetler kirlenir, çocuklar böyle öğrenir" (2001), "Kirlenmek Güzeldir" (2004) ve "Her Çocuğun Çocuk Olma Hakkı Vardır" sloganıyla "yaparak öğrenmek" teması (2008) bulunmaktadır. OMO, günümüzde Türkiye'de en yaygın kullanılan deterjan markalarından biridir.`,
    },
    {
     name: "Rexona",
     slug: "rexona",
     foundedYear: 1908,
     ctgry: "Kişisel Bakım",
     founder: "Dr. Alice Sheffer",
     owner: "Unilever",
     country: "Avustralya",
     alternative_products: [],
     img: "/rexona.png",
     isBoycotted: "boykot",
     website: "https://www.rexona.com/tr/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Rexona dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Rexona, Unilever'e ait deodorant ve antiperspirant markasıdır. Farklı bölgelerde farklı isimlerle bilinmektedir: "Sure" (Birleşik Krallık ve İrlanda), "Degree" (Amerika Birleşik Devletleri ve Kanada), "Rexena" (Güney Kore ve Japonya), "Shield" (Güney Afrika Cumhuriyeti).

Rexona, 1908 yılında Avustralya'da Dr. Alice Sheffer tarafından yaratılmıştır. Dr. Sheffer, ilk olarak hoş kokulu bir sabun geliştirmiştir. "Rexona" ismi, "kral" veya "prens" anlamına gelen Latince "rex" kelimesinden türetilmiştir.

1920 yılına kadar Sheffer, ürünlerini yerel olarak satmış, sonra markayı Avustralya genelinde genişletmeye karar vermiştir. Billboard'lar kullanmış ve "Rexona Baby" ve "Miss Rexona" yarışmaları düzenleyerek markayı tanıtmış, böylece Rexona'yı Avustralya'da tercih edilen bir seçenek haline getirmiştir.

1928 yılında Rexona, İngiliz sabun üreticisi Lever Brothers tarafından satın alınmıştır. Lever Brothers, daha sonra Margarine Unie ile birleşerek Unilever'i oluşturmuştur.

1960 yılında Rexona, antiperspirant üretimine başlamış ve bunları İngiltere'de "Sure" olarak piyasaya sürmüştür. Marka, ardından Avrupa'ya ve dünya çapına yayılmıştır.

1980 yılında Rexona, küresel büyüme stratejisinin bir parçası olarak farklı kokulara sahip yeni ürün çeşitleri tanıtmıştır.

1990'larda Rexona, profesyonel spor dünyasına girmiş ve önemli sporcuları ve takımları sponsor etmiştir. Sponsor olunan sporcular ve takımlar arasında dağ bisikletçisi Darren Berrelcloth, tenis şampiyonu Steffi Graf, Springboks (rugby takımı), hayatta kalma uzmanı Bear Grylls, tenis şampiyonu David Nalbandian, All Blacks (rugby takımı), paraşütçü Miles Daisher, kriketçi Andrew Flintoff ve Lotus F1™ Team bulunmaktadır.

2015 yılında marka, formülünü güncellemiş ve yeniden tasarlanmış ambalajlarla yeni bir parfüm serisi başlatmıştır.

Günümüzde Rexona, kadın ve erkekler için aerosol, sprey, stick, roll-on ve krem ürünleri sunmaktadır. Sloganı: "Seni asla yarı yolda bırakmaz!" (It will never let you down!).`,
    },
    {
     name: "Rinso",
     slug: "rinso",
     foundedYear: 1908,
     ctgry: "Temizlik",
     founder: "Robert Spear Hudson",
     owner: "Unilever",
     country: "Birleşik Krallık",
     alternative_products: [],
     img: "/rinso.png",
     isBoycotted: "boykot",
     website:
      "https://www.unilever.com.tr/sustainability/urunlerimizin-icinde-ne-var/rinso/",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Rinso dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Rinso, Unilever'e ait çamaşır deterjanı markasıdır. Rinso, ilk olarak İngiltere'de kimyasal ürünler satan Robert Spear Hudson tarafından hazırlanmış ve geliştirilmiştir. Daha sonra 1918 yılında Lever Brothers tarafından satın alınmıştır.

Rinso, dünyadaki ilk kitlesel pazarlanan sabun tozlarından biridir ve deterjan tarihinde önemli bir yere sahiptir.

1936-1946 yılları arasında Amerika Birleşik Devletleri'nde Rinso, birçok radyo ve televizyon programını sponsor etmiş ve "Rinso white, Rinso bright" (Rinso beyaz, Rinso parlak) sloganıyla çeşitli reklamlar oluşturmuştur.

Rinso'nun içeriği sodyum silikat, sodyum karbonat, metasilikat ve kalsiyum karbonat içermektedir.

1950'lerde Procter & Gamble tarafından üretilen Alo (Tide) adında yeni bir deterjan ortaya çıkmış ve Rinso'nun rakibi haline gelmiştir. Bu rekabet sonucunda Rinso'nun satışları düşmüştür.

Rinso, renkli çamaşırlar için farklı ambalajlarda "Rinso Blue" (Mavi Rinso) tanıtmıştır.

Birçok büyük pazarda Rinso, "Surf" markası (bazı ülkelerde Omo) tarafından değiştirilmiştir. Ancak Rinso, hala Türkiye, Avustralya, Yeni Zelanda, Asya ve Orta Amerika için Unilever tarafından üretilmektedir.

Rinso, Endonezya'da ilk deterjan markası olarak piyasaya sürülmüştür ve günümüzde Endonezya deterjan pazarında bir numaralı lider konumundadır.`,
    },
    {
     name: "Signal",
     slug: "signal",
     foundedYear: 1961,
     ctgry: "Ağız Bakımı",
     founder: "",
     owner: "Unilever",
     country: "Birleşik Krallık",
     alternative_products: [],
     img: "/signal.png",
     isBoycotted: "boykot",
     website: "https://www.signalturkiye.com/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Signal dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Signal, Unilever şirketine ait diş macunu markalarından biridir. Signal, dünya genelinde 80 yıldır üretilen ve ağız bakım alışkanlıklarını geliştirmeyi amaçlayan Unilever'in ağız ve diş bakım markasıdır.

Signal diş macunu Unilever tarafından 1961 yılında tanıtıldı. Macunu meşhur kırmızı ve beyaz çizgileri tanıttı. 1977 yılında florürlü diş macunu, 1986 yılında anti-tartar formüllü ve 1999 yılında antibakteriyel çeşitleri tanıtıldı.

Bir sıra ülkelerde Asya ve Latin Amerika'da Signal'in yerine Pepsodent'in satışı yapılıyor, Brezilya'da Closeup, İtalya ve Avusturya'da Mentadent, Çin'de Zhong Hua, Yunanistan'da Aim ismi ile satılıyor.

Signal, Unilever'in "Her gün daha iyi bir gelecek yaratma" vazifesiyle, Türkiye'de ağız bakım alışkanlıkları için bilgilendirme çalışmalarına yapıyor.

Ürün yelpazesi diş macunu, diş fırçası ve ağız bakım suyunu içerir.`,
    },
    {
     name: "Vaseline",
     slug: "vaseline",
     country: "ABD",
     ctgry: "Kişisel Bakım",
     founder: "Robert Chesebrough",
     owner: "Unilever",
     country: "ABD",
     alternative_products: [],
     img: "/vaseline.png",
     isBoycotted: "boykot",
     website: "https://www.vaseline.com.tr/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Vaseline dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Vaseline, İngiliz çokuluslu şirket Unilever'e ait bir Amerikan vazelin bazlı ürün markasıdır. Ürünler arasında sade vazelin ve çeşitli cilt kremleri, sabunlar, losyonlar, temizleyiciler ve deodorantlar bulunur.

Birçok dilde "vazelin" kelimesi vazelin için jenerik olarak kullanılır; Portekiz'de Unilever ürünleri Vasenol olarak adlandırılır.

Vaseline'ın kökeni 1859 yılına dayanmaktadır. Eskiden ispermeçet balinalarının başlarından elde edilen mumsu bir yağ olan ispermeçet yağından lamba yağı elde eden bir kimyager olan Robert Chesebrough, balina yağının yerini kömür yağının almasıyla iş kaybına uğradı. Bu yeni yakıttan hangi yeni malzemelerin üretilebileceğini araştırmak için Pensilvanya, Titusville'deki petrol sahalarına gitti.

Orada, petrol kulesi pompalarından periyodik olarak temizlenmesi gereken çubuk mumu adı verilen bir kalıntı olduğunu öğrendi. Petrol işçileri bu maddeyi kesik ve yanıkları iyileştirmek için kullanıyordu. Chesebrough, çubuk mumundan örnekler alarak Brooklyn'e geri götürdü, kullanılabilir vazelini çıkardı ve Vaseline adını verdiği tıbbi bir ürün üretmeye başladı.

1872 yılında Chesebrough Manufacturing Company tarafından Vaseline için Amerikan patenti alındı. Robert Chesebrough, patent başvurusunda "Ben, Robert Chesebrough, petrol ürünlerinden Vaseline adını verdiğim yeni ve kullanışlı bir ürün icat ettim..." ifadesini kullanmıştır.

Üreticiye göre "vazelin" ismi, Almanca "Wasser" (su) ve Yunanca "έλαιον (elaion)" (yağ) kelimelerinden türetilmiştir.

Vaseline, 1955 yılında Pond's ile birleşene kadar Chesebrough Manufacturing Company tarafından üretilmiştir. Daha sonra 1987 yılında Unilever tarafından satın alınmıştır.

Vaseline, dünya çapında pazarlanmaktadır ve sloganı "Vazelinin İyileştirici Gücü" (The Healing Power of Vaseline) dir.`,
    },
    {
     name: "Yumoş",
     slug: "yumos",
     country: "ABD",
     ctgry: "Temizlik",
     founder: "",
     owner: "Unilever",
     country: "ABD",
     alternative_products: [],
     img: "/yumos.png",
     isBoycotted: "boykot",
     website: "https://www.yumos.com/home.html",
     boycottReason: `Unilever'in boykot edilmesinin temel nedeni, şirketin İsrail ile olan doğrudan ticari ve ekonomik bağlarıdır. Unilever, İsrail'i destekleyen ve fon sağlayan bir şirkettir.

Ben & Jerry's, Unilever'in alt şirketi olarak İsrail'deki ürün satışlarını durdurma kararı almıştır. Ancak Unilever İsrail, bu kararı görmezden gelerek Ben & Jerry's ürünlerinin dağıtım haklarını Avi Zinger'a (markanın uzun süredir İsrail dondurma lisans sahibi ve AQP'nin sahibi) satarak satışların devam etmesini sağlamıştır. Bu durum, Unilever'in Filistin davasına karşı duyarsızlığını ve İsrail pazarına olan bağlılığını göstermektedir.

Unilever'in boykot edilmesinin bir diğer nedeni, Filistinlilerden zorla alınan ve meşru olmayan İsrail yerleşimlerinde üretim yapan şirketlerle ortaklıklar kurması ve İsrail ekonomisine önemli katkılarda bulunmasıdır.

Unilever, Strauss Ice Cream'ın ana hissedarıdır ve bu şirket Strauss Group'un bir yan kuruluşudur. Strauss Group, İsrail'in önde gelen gıda şirketlerinden biridir. Unilever, aynı zamanda Strauss Group'un önemli bir iş ortağıdır. Strauss Group, İsrail'in askeri birimlerine ürün ve hizmet sağlayan bir şirketler grubudur.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Unilever'e ait tüm markaları (Yumoş dahil) boykot etmeyi bir sorumluluk olarak görmektedir.

Unilever'in İsrail ile olan güçlü bağları, İsrail yerleşimlerinde üretim yapan şirketlerle olan ortaklıkları, Ben & Jerry's kararını görmezden gelmesi ve Strauss Group ile olan ilişkileri, boykot kararını destekleyen temel faktörlerdir.`,
     description: `Yumoş, çamaşırların daha yumuşak, taze ve hijyenik olmasını sağlamak için kullanılan bir yumuşatıcı markasıdır. Yumoş, 2008 yılına kadar Unilever'e ait bir markaydı. 2008 yılında Sun Products'a satılmıştır ve günümüzde Henkel'in bir parçasıdır.

Yumoş, farklı ülkelerde farklı isimlerle satılmaktadır:
- Amerika Birleşik Devletleri ve Kanada'da "Snuggle" olarak "Henkel North American Consumer Goods" tarafından satılmaktadır.
- Türkiye'de "Yumoş" olarak satılmaktadır.
- Birleşik Krallık'ta "Comfort" olarak satılmaktadır.
- İskandinavya'da "Snuggle" olarak satılmaktadır.
- Almanya, İsviçre ve Avusturya'da "Kuschelweich" olarak satılmaktadır.
- Hollanda ve Belçika'da "Robijn" olarak satılmaktadır.
- Brezilya'da "Fofo" olarak satılmaktadır.
- Fransa'da "Cajoline" olarak satılmaktadır.
- İtalya ve Macaristan'da "Coccolino" olarak satılmaktadır.
- İspanya'da "Mimosín" olarak satılmaktadır.
- Çin'de "熊寶貝" (Xióngbǎobèi) olarak satılmaktadır.
- Japonya'da "ファーファ" (Fa-fa) olarak satılmaktadır.

Unilever, Procter & Gamble'ın "Downy" (ABD) ve "Lenor" (Avrupa) markalarıyla rekabet etmek için 1970 yılında kendi yumuşatıcı ürününü piyasaya sürmüştür.

Şirket, pazar payını artırmak için bir isimlendirme stratejisi kullanmış ve ürünü farklı isimlerle küresel olarak tanıtmıştır.

Marka maskotu olarak bir ayıcık seçilmiştir. 1983'ten beri tüm ürün promosyonlarında ve reklamlarda kullanılmaktadır. Oyuncak, Kermit Love tarafından tasarlanmış ve "Snuggle" adı verilmiştir. Karakterin sesi Corinne Orr tarafından sağlanmıştır.`,
    },
   ],
  },
  {
   name: "Şölen",
   slug: "sölen",
   foundedYear: 1989,
   ctgry: "Yiyecek",
   founder: "İsmail Çoban",
   owner: "Çoban Ailesi",
   country: "Türkiye",
   alternative_products: [],
   img: "/solen.png",
   isBoycotted: "boykot-degil",
   website: "https://www.solen.com.tr/",
   description: `Şölen Çikolata Gıda Sanayi ve Ticaret A.Ş., 1989 yılında Çoban Ailesi tarafından Gaziantep'te kurulmuş bir çikolata, gofret ve şekerleme şirketidir. Şölen, çikolata, çikolata ürünleri, bisküvi, kraker, kek, şeker ve lokum kategorilerinde faaliyet göstermektedir.

TİM verilerine göre Şölen, Türkiye'nin en büyük çikolata ve çikolata ürünleri ihracatçısıdır. Şirket, 200'den fazla ürün çeşidini 100'den fazla ülkeye ihraç etmektedir. 2014 yılında Şölen, "Candy Industry Top 100" listesinde 49. sırada yer almıştır.

Şölen, yerel ve uluslararası başarılı markalara sahiptir: Biscolata, Milango, Ozmo, Wapps, Luppo, Lokkum, Nutymax ve Greta. Şirket, 1989'da Gaziantep'te ilk üretim tesisini kurmuş, 1991'de Türk devletlerine ihracatta önemli bir ivme kazanmıştır. 1994'te İstanbul ofisi açılmış, 2001'de ihracat yapılan ülke sayısı 66'ya ulaşmıştır. 2004'te "Triplex" markası için ilk reklam filmi çekilmiş, 2005'te Gaziantep'te ikinci üretim tesisi kurulmuştur. 2007'de Turquality Programı'na dahil edilmiş, 2009'da İstanbul Silivri fabrikası kurulmuştur.`,
   evidences: [""],
   subBrands: [
    {
     name: "Ozmo",
     slug: "ozmo",
     foundedYear: null,
     ctgry: "Yiyecek",
     founder: "Şölen",
     owner: "Şölen",
     country: "Türkiye",
     alternative_products: [],
     img: "/ozmo.png",
     isBoycotted: "boykot-degil",
     website: "https://ozmo.com.tr/",
     description: `Ozmo, Şölen Çikolata'nın alt markasıdır. Çikolata ve şekerleme ürünleri üretmektedir.`,
     evidences: [""],
    },
    {
     name: "Biscolata",
     slug: "biscolata",
     foundedYear: null,
     ctgry: "Yiyecek",
     founder: "Şölen",
     owner: "Şölen",
     country: "Türkiye",
     alternative_products: [],
     img: "/biscolata.png",
     isBoycotted: "boykot-degil",
     website: "https://www.solen.com.tr/biscolata",
     description: `Biscolata, Şölen Çikolata'nın alt markasıdır. Çikolata kaplı bisküvi ve gofret ürünleri üretmektedir.`,
     evidences: [""],
    },
    {
     name: "Boombastic",
     slug: "boombastic",
     foundedYear: null,
     ctgry: "Yiyecek",
     founder: "Şölen",
     owner: "Şölen",
     country: "Türkiye",
     alternative_products: [],
     img: "/boombastic.png",
     isBoycotted: "boykot-degil",
     website: "https://www.solen.com.tr/boombastic",
     description: `Boombastic, Şölen Çikolata'nın alt markasıdır. Çikolata ve şekerleme ürünleri üretmektedir.`,
     evidences: [""],
    },
    {
     name: "Chocodan's",
     slug: "chocodans",
     foundedYear: null,
     ctgry: "Yiyecek",
     founder: "Şölen",
     owner: "Şölen",
     country: "Türkiye",
     alternative_products: [],
     img: "/chocodans.png",
     isBoycotted: "boykot-degil",
     website: "",
     description: `Chocodan's, Şölen Çikolata'nın alt markasıdır. Çikolata ürünleri üretmektedir.`,
     evidences: [""],
    },
    {
     name: "Greta",
     slug: "greta",
     foundedYear: null,
     ctgry: "Yiyecek",
     founder: "Şölen",
     owner: "Şölen",
     country: "Türkiye",
     alternative_products: [],
     img: "/greta.png",
     isBoycotted: "boykot-degil",
     website: "https://www.solen.com.tr/greta",
     description: `Greta, Şölen Çikolata'nın alt markasıdır. Çikolata ve şekerleme ürünleri üretmektedir.`,
     evidences: [""],
    },
    {
     name: "Luppo",
     slug: "luppo",
     foundedYear: null,
     ctgry: "Yiyecek",
     founder: "Şölen",
     owner: "Şölen",
     country: "Türkiye",
     alternative_products: [],
     img: "/luppo.png",
     isBoycotted: "boykot-degil",
     website: "https://www.solen.com.tr/luppo",
     description: `Luppo, Şölen Çikolata'nın alt markasıdır. Çikolata ve şekerleme ürünleri üretmektedir.`,
     evidences: [""],
    },
    {
     name: "Nutymax",
     slug: "nutymax",
     foundedYear: null,
     ctgry: "Yiyecek",
     founder: "Şölen",
     owner: "Şölen",
     country: "Türkiye",
     alternative_products: [],
     img: "/nutymax.png",
     isBoycotted: "boykot-degil",
     website: "https://www.solen.com.tr/nutymax-gofret",
     description: `Nutymax, Şölen Çikolata'nın alt markasıdır. Çikolata ve şekerleme ürünleri üretmektedir.`,
     evidences: [""],
    },
    {
     name: "Papita",
     slug: "papita",
     foundedYear: null,
     ctgry: "Yiyecek",
     founder: "Şölen",
     owner: "Şölen",
     country: "Türkiye",
     alternative_products: [],
     img: "/papita.png",
     isBoycotted: "boykot-degil",
     website: "https://www.solen.com.tr/papita",
     description: `Papita, Şölen Çikolata'nın alt markasıdır. Çikolata ve şekerleme ürünleri üretmektedir.`,
     evidences: [""],
    },
   ],
  },
  {
   name: "Tukaş",
   slug: "tukas",
   foundedYear: 1962,
   ctgry: "Yiyecek",
   founder: "Turgutlu Konservecilik A.Ş.",
   owner: "Okullu Gıda",
   country: "Türkiye",
   alternative_products: [],
   img: "/tukas.png",
   isBoycotted: "boykot-degil",
   website: "https://www.tukas.com.tr/",
   description: `Tukaş Gıda, 1962 yılından beri doğallık, lezzet ve kaliteyi sofralara getiren köklü bir gıda şirketidir. Şirket, derin köklere sahip geçmişi, yenilikçi üretim teknolojileri ve titiz kalite yaklaşımıyla her üründe mükemmelliği hedeflemektedir.

Tukaş, 1962 yılında Turgutlu Konservecilik A.Ş. olarak kurulmuştur. 1967 yılında OYAK tarafından satın alınmış, 1981'de Torbalı Fabrikası faaliyete geçmiştir. 1994 yılında şirketin %28'i halka arz edilmiş, 2001'de Manyas Fabrikası faaliyete geçmiştir. 2002 yılında şirket adı "Tukaş Gıda ve San. A.Ş." olarak değiştirilmiştir.

2014 yılında Okullu Gıda tarafından satın alınan Tukaş, 2015'te Tukaş Dış Ticaret A.Ş.'yi kurmuştur. 2017'de üretim ve yatırım çalışmalarında yeniliklere imza atmış, 2018'de Akhisar Fabrikası'nı faaliyete geçirmiştir. 2020'de Niğde Fabrika yatırımı devreye alınmış, 2022'de Niğde Fabrikası faaliyete geçmiştir.

Tukaş, günümüzde Türkiye'nin farklı bölgelerine yayılmış toplam 4 fabrikasıyla hizmet vermektedir. Şirket, üretimden tüketicinin sofrasına kadar her adımda güvenilirlik ve tazeliği garanti etmektedir. Tukaş için üretim, sadece bir süreç değil, sağlıklı, lezzetli ve sürdürülebilir bir geleceğin temel taşıdır. Müşterileriyle kurduğu güçlü bağ, kaliteye olan sarsılmaz bağlılığının en büyük ilham kaynağıdır. Tukaş, her sofrada güven, her lokmada lezzeti taşımaya devam etmektedir.`,
   evidences: [""],
  },
  {
   name: "Vivident",
   slug: "vivident",
   foundedYear: 2001,
   ctgry: "Yiyecek",
   founder: "Van Melle NV (Hollanda) ve Perfetti S.p.A (İtalya)",
   owner: "Perfetti Van Melle",
   country: "Hollanda & İtalya",
   alternative_products: [],
   img: "/vivident.png",
   isBoycotted: "boykot",
   website: "https://www.perfettivanmelle.com.tr/tr/Vivident/150006",
   description: `Vivident, Perfetti Van Melle şirketine ait İtalya ve Hollanda merkezli sakız ve şekerleme markasıdır. Perfetti Van Melle, 2001 yılında Mart ayında Perfetti S.p.A. ve Van Melle NV'nin birleşmesiyle kurulmuştur.

Perfetti Van Melle'nin genel merkezleri İtalya'nın Lainate şehrinde ve Hollanda'nın Breda şehrinde bulunmaktadır. Şirket, 2006 yılında Haziran ayında İspanyol marka Chupa Chups'ı satın almıştır. Bu satın almanın ardından Perfetti Van Melle, Mondelēz International ve Mars'ın ardından dünyanın üçüncü büyük sakız ve şekerleme şirketi haline gelmiştir.

Perfetti Van Melle, 30 bağlı şirket aracılığıyla 17.000 kişiye istihdam sağlamaktadır. Şirketin ürünleri 159'tan fazla ülkeye dağıtılmaktadır. ABD merkezi Cincinnati'nin banliyösü ve Kentucky'nin Erlanger şehrinde bulunmaktadır. 2018 yılı Ağustos ayında Perfetti Van Melle, perakende satış personelinin seyahatlerine yardımcı olmak için bir e-öğrenme eğitim kursu başlatmıştır.

Vivident, Türkiye'de Perfetti Van Melle'nin en bilinen markalarından biridir. Şirketin diğer önemli markaları arasında Mentos bulunmaktadır.`,
   boycottReason: `Vivident'in boykot edilmesinin temel nedeni, şirketin sahibi Perfetti Van Melle'nin İsrail'e açıktan destek vermesidir. Vivident, Perfetti Van Melle'nin alt markasıdır ve şirketin İsrail ile olan ilişkileri nedeniyle boykot listesindedir.

Perfetti Van Melle, İsrail'e açıktan desteğini saklamayan bir şirkettir. Şirket, satışa sunduğu Mentos paketlerinde ABD ve İsrail reyonlarında özel düzenlemeler yapmaktadır. Bu durum, şirketin İsrail pazarına özel önem verdiğini ve İsrail ile ticari ilişkilerini açıkça desteklediğini göstermektedir.

Perfetti Van Melle'nin İsrail'e yönelik bu açık desteği, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından kabul edilemez bulunmaktadır. Şirketin İsrail pazarına özel düzenlemeler yapması ve İsrail'e açıktan destek vermesi, boykot kararını destekleyen temel faktörlerdir.

Bu nedenle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Perfetti Van Melle'ye ait tüm markaları (Vivident dahil) boykot etmeyi bir sorumluluk olarak görmektedir.`,
   evidences: [""],
  },
  {
   name: "Tadım",
   slug: "tadim",
   foundedYear: 1971,
   ctgry: "Yiyecek",
   founder: "Mehmet Tekinalp",
   owner: "Tekinalp Ailesi",
   country: "Türkiye",
   alternative_products: [],
   img: "/tadim.png",
   isBoycotted: "boykot-degil",
   website: "https://www.tadim.com.tr/",
   description: `Tadım Gıda Maddeleri Sanayi ve Ticaret A.Ş., 1971 yılında Mehmet Tekinalp tarafından İstanbul'da kurulmuş Türkiye merkezli bir gıda şirketidir. Şirket, ağırlıklı olarak kuruyemiş üretimi yapmaktadır. Tadım, "Türkiye'nin tadı tuzu" sloganıyla faaliyet göstermektedir.

Tadım'ın kökleri, 1926 yılına dayanmaktadır. Gaziantep'te Durdu Tekinalp (Fıstıkçı Arap) tarafından antep fıstığı ticareti için kurulmuştur. "Fıstıkçı Arap", Antep fıstığını Türkiye'nin batı bölgelerine tanıtan öncü isimlerden biri olmuş ve 1950'lerde Amerika pazarına ihracatı genişletmiştir.

1969 yılında Durdu Tekinalp, oğlu Mehmet Tekinalp'i İstanbul ofislerinde çalışmaya yönlendirmiştir. 1971 yılında Mehmet Tekinalp, sadece antep fıstığı değil, diğer kuruyemişleri de paketleyerek satmak amacıyla "Tadım"ı kurmuştur. Tadım, tüketicilere en taze ürünleri sunmayı hedeflemiştir.

Günümüzde Tadım, kuruyemiş, kuru meyve ve çekirdek çubukları üretmektedir. Şirket, Ankara ve Gaziantep'te paketleme hazırlık tesisleri, Gebze'de 55.000 metrekarelik ana üretim tesisi ve Almanya'nın Emsdetten şehrinde 20.000 metrekarelik bir tesise sahiptir. Tadım, birinci kalite hammaddeleri son teknoloji makinelerle işleyerek paketler ve tüketicilere taze olarak ulaştırır.

Gebze fabrikası, yılda 6.000'den fazla TIR göndererek haftalık 90-110 bin satış noktasına 700 bayii aracı ile ulaşmaktadır. Tadım, 30 ülkede kendi markasıyla faaliyet göstermekte ve küresel kuruyemiş sektörünün önde gelen şirketlerinden biri olarak kabul edilmektedir. Şirket, EuroLeague ile sponsorluk anlaşması bulunmaktadır.

Tadım, 3. ve 4. nesil aile üyelerinin de dahil olduğu köklü bir şirket olarak, 100 yıllık markalar arasına girmeye hazırlanmaktadır.`,
   evidences: [""],
  },

  {
   name: "Barilla",
   slug: "barilla",
   foundedYear: 1877,
   ctgry: "Yiyecek",
   founder: "Pietro Barilla",
   owner: "Barilla S.p.A. (Barilla Ailesi)",
   country: "İtalya",
   alternative_products: [],
   img: "/barilla.png",
   isBoycotted: "boykot",
   website: "https://www.barilla.com/tr-tr",
   description: `Barilla S.p.A., 1877 yılında Parma, İtalya'da Pietro Barilla tarafından kurulmuş İtalyan aile gıda firmasıdır. Barilla, dünyanın önemli makarna üreticilerinden biridir.

Barilla grubu, çeşitli ticari markalara sahiptir: Filiz (Türkiye), Misko (Yunanistan), Wasabröd (İsveç), Yemina ve Vesta (Meksika). Şirket, değişik türlerde makarnalar, soslar (pesto, ragù, arrabiata sosu, domates sosu) ve spagetti üretmektedir.

Barilla, İtalya'da %40-45, Amerika Birleşik Devletleri'nde ise %25 pazar payına sahiptir. Şirketin Türkiye'de, İtalya'da, Yunanistan'da ve ABD'de makarna fabrikaları bulunmaktadır.

Barilla, 2023 yılında 4.869 milyar euro gelir elde etmiş ve 9.040 çalışanı bulunmaktadır. Şirketin genel merkezi Parma, İtalya'dadır ve başkan ve CEO'su Guido Barilla'dır. Barilla, "The Italian Food Company. Since 1877." sloganıyla faaliyet göstermektedir.`,
   boycottReason: `Barilla'nın boykot edilmesinin temel nedeni, şirketin İsrail'de lider makarna firması olması ve İsrail ile olan ilişkileridir. Barilla, İsrail'de de lider makarna firmasıdır ve bu durum, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından kabul edilemez bulunmaktadır.

Barilla'nın İsrail'deki varlığı ve İsrail ile olan ticari ilişkileri, şirketin İsrail ekonomisine katkıda bulunduğunu göstermektedir. Bu nedenle Barilla, İsrail ile ilişkileri sebebiyle boykot edilmektedir.

Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Barilla'yı boykot etmeyi bir sorumluluk olarak görmektedir. Barilla'nın İsrail'deki faaliyetleri ve lider pozisyonu, boykot kararını destekleyen temel faktörlerdir.`,
   subBrands: [
    {
     name: "Filiz",
     slug: "filiz",
     foundedYear: 1974,
     ctgry: "Yiyecek",
     founder: "Barilla",
     owner: "Barilla S.p.A.",
     country: "İtalya",
     alternative_products: [],
     img: "/filiz.png",
     isBoycotted: "boykot",
     website: "https://filizmakarna.com.tr/",
     description: `Filiz, İtalyan gıda şirketi Barilla S.p.A.'nın Türkiye pazarı için ürettiği makarna markasıdır. Barilla, 1877 yılında Parma, İtalya'da Pietro Barilla tarafından kurulmuştur.
  
  Barilla grubu, Filiz (Türkiye), Misko (Yunanistan), Wasabröd (İsveç), Yemina ve Vesta (Meksika) gibi ticari markalara sahiptir. Barilla, dünyanın önemli makarna üreticilerinden biridir ve çeşitli makarna türleri, soslar (pesto, ragù, arrabiata sosu, domates sosu) ve spagetti üretmektedir.
  
  Barilla, İtalya'da %40-45, ABD'de %25 pazar payına sahiptir. Şirket, Türkiye, İtalya, Yunanistan ve ABD'de makarna fabrikalarına sahiptir. Filiz, Türkiye pazarında Barilla'nın yerel markası olarak faaliyet göstermekte ve Türk tüketicilere kaliteli makarna ürünleri sunmaktadır.`,
     boycottReason: `Filiz'in boykot edilmesinin temel nedeni, şirketin sahibi Barilla S.p.A.'nın İsrail ile olan ticari ve ekonomik bağlarıdır. Filiz, Barilla'nın alt markasıdır ve Barilla'nın İsrail ile olan ilişkileri nedeniyle boykot listesindedir.
  
  Barilla'nın İsrail ile olan ticari bağlantıları ve İsrail pazarındaki faaliyetleri, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından kabul edilemez bulunmaktadır. Bu nedenle Filiz, Barilla'nın İsrail ile olan ilişkileri nedeniyle boykot listesinde yer almaktadır.`,
     evidences: [""],
    },
   ],
  },
  {
   name: "Mentos",
   slug: "mentos",
   foundedYear: 1932,
   ctgry: "Yiyecek",
   founder: "Perfetti Van Melle",
   owner: "Perfetti Van Melle",
   country: "İtalya & Hollanda",
   alternative_products: [],
   img: "/mentos.png",
   isBoycotted: "boykot",
   website: "https://www.mentos.com.tr/",
   description: `Mentos, İtalyan şirketi Perfetti Van Melle tarafından üretilen şeker markasıdır. Mentos, 1932 yılında ilk olarak üretilmiş ve günümüzde Perfetti Van Melle tarafından dünya çapında 130'dan fazla ülkede satılmaktadır.

Mentos, Hollanda'da likörlü aromalı şeker olarak ortaya çıkmış ve bu çeşit hala "Drop Mentos" adıyla Hollanda'da mevcuttur. Mentos naneleri, küçük, hafif yassı küresel şekilli şekerlerdir ve hafif sert dış kabuk ile yumuşak, çiğnenebilir iç yapıya sahiptir.

Mentos, "Coca-Cola ve Mentos patlaması" olarak bilinen en ünlü ve eğlenceli reaksiyonlardan birine konu olmuştur. "Sour Mix" çeşidinde rulo başına 11 disk, tipik nane rulolarında ise 14 disk bulunmaktadır. Rulo başına 4 ila 6 disk içeren daha küçük versiyonlar da mevcuttur.

Bazı aromalar Avustralya, ABD, Malezya, Endonezya, Brezilya ve Birleşik Krallık'ta kutu halinde satılmaktadır ve rulolar dörtlü paketlerde sunulmaktadır. Mentos'un mevcut sloganı "Taze Kal" (Stay Fresh) iken, 80'ler ve 90'larda popüler sloganı "Freshmaker" idi.

Mentos, nane, karışık meyve, kola, sakız, portakal, çilek ve limon gibi çeşitli aromalarda mevcuttur. Türkiye'de Perfetti Van Melle'nin en bilinen markalarından biridir ve Vivident ile birlikte şirketin yerel pazarındaki önemli markalardandır.`,
   boycottReason: `Mentos'un boykot edilmesinin temel nedeni, şirketin sahibi Perfetti Van Melle'nin İsrail'e açıktan destek vermesidir. Mentos, Perfetti Van Melle'nin alt markasıdır ve şirketin İsrail ile olan ilişkileri nedeniyle boykot listesindedir.

Perfetti Van Melle, İsrail'e açıktan desteğini saklamayan bir şirkettir. Şirket, satışa sunduğu Mentos paketlerinde ABD ve İsrail reyonlarında özel düzenlemeler yapmaktadır. Bu durum, şirketin İsrail pazarına özel önem verdiğini ve İsrail ile ticari ilişkilerini açıkça desteklediğini göstermektedir.

Perfetti Van Melle'nin İsrail'e yönelik bu açık desteği, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından kabul edilemez bulunmaktadır. Şirketin İsrail pazarına özel düzenlemeler yapması ve İsrail'e açıktan destek vermesi, boykot kararını destekleyen temel faktörlerdir.

Bu nedenle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Perfetti Van Melle'ye ait tüm markaları (Mentos dahil) boykot etmeyi bir sorumluluk olarak görmektedir.`,
   evidences: [""],
  },
  {
   name: "Mondelez International",
   slug: "mondelez-international",
   country: "ABD",
   ctgry: "Yiyecek",
   founder: "Edward E. Rieck ve Thomas H. McInnerney",
   owner: "Kraft Foods",
   country: "ABD",
   alternative_products: [],
   img: "/mondelez.png",
   isBoycotted: "boykot",
   website: "https://www.mondelezinternational.com/",
   description: `Mondelez International, Inc. (/mɒndəˈliːz/ MON-də-LEEZ), Chicago, Illinois, ABD merkezli Amerikan çok uluslu şekerleme, gıda, holding, içecek ve atıştırmalık gıda şirketidir. Mondelez International, atıştırmalık yiyecekleri ile tanınan ABD merkezli çok uluslu bir şirkettir.

Şirketin kökeni, 1923 yılında Chicago'da Edward E. Rieck ve Thomas H. McInnerney tarafından kurulan Kraft Foods Inc.'e dayanmaktadır. Mevcut işletme, 2012 yılında Kraft Foods Inc.'in Mondelez olarak yeniden adlandırılıp atıştırmalık gıda işletmesini koruduğu 1 Ekim 2012 tarihinde kurulmuştur. Kuzey Amerika market işletmesi ise Kraft Foods Group adlı yeni bir şirkete devredilmiş ve 3 yıl sonra Kraft Heinz ile birleşerek Kraft Heinz'ı oluşturmuştur.

Mondelez adı, Latince mundus ("dünya") ve "lezzetli" kelimesinin süslü bir uyarlaması olan delez kelimelerinden türetilmiştir. Şirket, çikolata, kurabiye, bisküvi, sakız, şekerleme ve toz içecekler üretmektedir.

Mondelez International, yaklaşık 160 ülkede faaliyet göstermektedir ve 2021 Fortune 500 listesinde 108. sırada yer almıştır. Şirketin yıllık geliri yaklaşık 36.4 milyar ABD dolarıdır ve 90.000'den fazla çalışanı bulunmaktadır. CEO: Dirk Van de Put (Kasım 2017'den beri).

Mondelez International'ın başlıca yan kuruluşları arasında Cadbury, Nabisco, Kinh Do Corporation ve Kent bulunmaktadır. Şirketin milyar dolarlık markaları arasında çikolata markaları (Milka, Côte d'Or, Toblerone, Cadbury, Green & Black's, Freia, Marabou, Fry's), kurabiye ve kraker markaları (Oreo, Ritz, Triscuit, Wheat Thins, Belvita, Chips Ahoy!, TUC, LU, Peek Freans), sakız ve öksürük damlası markaları (Trident, Dentyne, Chiclets, Halls, Stride, Falım, First) ve toz içecek markası Tang bulunmaktadır.`,
   boycottReason: `Mondelez International'ın boykot edilmesinin temel nedeni, şirketin İsrail ile olan ticari ve ekonomik bağlarıdır. Mondelez International, İsrail merkezli gıda girişimlerine yaptığı yatırımlar ve İsrail'deki operasyonel faaliyetleri nedeniyle boykot listesindedir.

Mondelez International Inc., 10 Kasım 2020 tarihinde İsrail merkezli, özel teknoloji geliştiren erken aşama bir şirket olan Torr FoodTech'e tohum yatırımı yapacağını duyurmuştur. Çatı kuruluş Mondelez, The Kitchen Hub ve Torr isimli iki İsrailli gıda girişimine yatırımda bulunmuştur.

Mondelez, İsrail'de ekonomik ilişkilerini hem operasyonel olarak hem de AR-GE yatırımları ile pekiştirmektedir. Nitekim bahsi geçen girişimleri kuranlar arasında Mondelez'in eski çalışanları da bulunmaktadır.

Mondelez International'ın İsrail ile olan bu yakın ilişkisi ve İsrail merkezli gıda girişimlerine yaptığı yatırımlar, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından kabul edilemez bulunmaktadır. Bu nedenle Mondelez International, hem politik hassasiyetler hem de etik tüketim bilinci açısından boykot listesinde yer almaktadır.

Mondelez International'ın İsrail'deki yatırımları ve AR-GE faaliyetleri, boykot kararını destekleyen temel faktörlerdir. Şirketin alt markaları (Milka, Oreo, Cadbury, Tang, Falım, First, vb.) da bu nedenle boykot edilmektedir.`,
   evidences: [
    "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
   ],
   subBrands: [
    {
     name: "Oreo",
     slug: "oreo",
     country: "ABD",
     ctgry: "Yiyecek",
     founder: "National Biscuit Company (Nabisco)",
     owner: "Nabisco (Mondelez International) ve Cadbury",
     country: "ABD",
     img: "/oreo.png",
     isBoycotted: "boykot",
     website: "https://www.oreo.com/",
     description: `Oreo, iki çikolata gofreti arasında tatlı kremalı dolgu bulunan sandviç kurabiye markasıdır. 1974'ten beri "Chocolate Sandwich Cookies" olarak pazarlanmaktadır. ABD'de satılan versiyonu Mondelez International'ın Nabisco bölümü tarafından üretilmektedir.

Oreo, 1912'de piyasaya sürülmesinden bu yana ABD'nin en çok satan kurabiyesidir. İlk "Oreo Biscuit", 1912 yılında Manhattan, Chelsea'deki 9. Cadde'de (15. ve 16. Caddeler arası) bulunan National Biscuit Company (şimdi Nabisco) fabrikasında üretilmiştir. Bugün, 9. Cadde'deki aynı blok "Oreo Way" olarak bilinmektedir.

Oreo adı ilk kez 14 Mart 1912'de tescil edilmiştir. Oreo, 1908'de Sunshine şirketi tarafından piyasaya sürülen Hydrox kurabiyesinin taklidi olarak başlatılmıştır. Kurabiyenin orijinal tasarımı kenarda çelenk ve merkezde "OREO" yazısını içermekteydi.

ABD'de açık cam novelti kutularda 453 gramlık kutu başına 25 cent karşılığında satılmıştır. İlk Oreo, 6 Mart 1912'de Hoboken, New Jersey'de satılmıştır. Modern Oreo kreması, Nabisco'nun baş gıda bilimcisi Sam Porcello tarafından geliştirilmiştir.

Oreo adının kökeni hakkında çeşitli teoriler vardır. Fransızca "Or" (altın, muhtemelen erken paketlemeye atıfta bulunarak) ve Yunanca "Oreo" (güzel, iyi yapılmış, hoş anlamında) kelimelerinin türevlerinden gelmiş olabilir. Diğer teoriler, adın kısa ve telaffuz edilmesi kolay olduğu için seçildiğini öne sürmektedir.`,
     boycottReason: `Oreo'nun boykot edilmesinin temel nedeni, markanın sahibi Mondelez International'ın İsrail ile olan ticari ve ekonomik bağlarıdır. Oreo, Mondelez International'ın alt markasıdır ve Mondelez'in İsrail ile olan ilişkileri nedeniyle boykot listesindedir.

Mondelez International Inc., 10 Kasım 2020 tarihinde İsrail merkezli, özel teknoloji geliştiren erken aşama bir şirket olan Torr FoodTech'e tohum yatırımı yapacağını duyurmuştur. Mondelez, "gerçek, basit bileşenleri bir araya getirerek çok dokulu, duyusal deneyimler sunuyor" ifadesini kullanmıştır.

Çatı kuruluş Mondelez, The Kitchen Hub ve Torr isimli iki İsrailli gıda girişimine yatırımda bulunmuştur. Mondelez, İsrail'de ekonomik ilişkilerini hem operasyonel olarak hem de AR-GE yatırımları ile pekiştirmektedir. Nitekim bahsi geçen girişimleri kuranlar arasında Mondelez'in eski çalışanları da bulunmaktadır.

Mondelez International'ın İsrail ile olan bu yakın ilişkisi ve İsrail merkezli gıda girişimlerine yaptığı yatırımlar, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından kabul edilemez bulunmaktadır. Bu nedenle Oreo, hem politik hassasiyetler hem de etik tüketim bilinci açısından boykot listesinde yer almaktadır.

Ayrıca, Oreo bisküvileri helal değildir ve bu durum bazı tüketiciler için ek bir boykot nedeni oluşturmaktadır. Mondelez International'ın İsrail'deki yatırımları ve AR-GE faaliyetleri, boykot kararını destekleyen temel faktörlerdir.`,
     evidences: [
      "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
      "https://www.gzt.com/jurnalist/oreo-biskuvileri-helal-degil-yetkililer-dogruladi-3495398",
     ],
    },
    {
     name: "7Days",
     slug: "7days",
     country: "ABD",
     ctgry: "Yiyecek",
     founder: "Mondelez International",
     owner: "Mondelez International",
     country: "ABD",
     img: "/7days.png",
     isBoycotted: "boykot",
     website: "",
     description: `7Days, Frito-Lay'in unlu mamul markasıdır. PepsiCo'nun Frito-Lay şirketi bünyesinde faaliyet gösteren marka, Türkiye pazarında da yer almaktadır.`,
     boycottReason: `7Days, Frito-Lay'in alt markası olduğu için boykot listesindedir. Frito-Lay, PepsiCo'nun alt şirketidir ve PepsiCo'nun İsrail ile olan ticari ilişkileri (SodaStream ve Sabra markalarına sahip olması) nedeniyle boykot edilmektedir.`,
     evidences: [""],
    },
    {
     name: "Falım",
     slug: "falim",
     country: "ABD",
     ctgry: "Yiyecek",
     founder: "Mondelez International",
     owner: "Mondelez International",
     country: "ABD",
     alternative_products: [],
     img: "/falim.png",
     isBoycotted: "boykot",
     website: "",
     description: `Falım, ABD merkezli Mondelez International şirketinin alt markasıdır. Falım, Türkiye pazarında satılan bir sakız markasıdır ve Mondelez International'ın global sakız portföyünde yer almaktadır.

Mondelez International, 2012 yılında Kraft Foods'un bölünmesinin ardından, çikolata, kraker, bisküvi, sakız ve şekerleme ürünlerinden sorumlu bölümlerin birleştirilmesiyle kurulmuştur. Falım, Mondelez International'ın Türkiye pazarındaki önemli markalarından biridir.

Falım, Türkiye'de özellikle sakız kategorisinde tanınan bir markadır ve Mondelez International'ın diğer sakız markaları arasında First, Bubblicious, Tofita, Şıpsevdi ve Tipitip gibi markalarla birlikte yer almaktadır.`,
     boycottReason: `Falım'ın boykot edilmesinin temel nedeni, markanın sahibi Mondelez International'ın İsrail ile olan ticari ve ekonomik bağlarıdır. Falım, Mondelez International'ın alt markasıdır ve Mondelez'in İsrail ile olan ilişkileri nedeniyle boykot listesindedir.

Çatı kuruluş Mondelez, The Kitchen Hub ve Torr isimli iki İsrailli gıda girişimine yatırımda bulunmuştur. Mondelez, İsrail'de ekonomik ilişkilerini hem operasyonel olarak hem de AR-GE yatırımları ile pekiştirmektedir. Nitekim bahsi geçen girişimleri kuranlar arasında Mondelez'in eski çalışanları da bulunmaktadır.

Mondelez International'ın İsrail ile olan bu yakın ilişkisi ve İsrail merkezli gıda girişimlerine yaptığı yatırımlar, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından kabul edilemez bulunmaktadır. Bu nedenle Falım, hem politik hassasiyetler hem de etik tüketim bilinci açısından boykot listesinde yer almaktadır.

Falım markası, özellikle sosyal medyada ve bazı internet platformlarında First, Bubblicious, Tofita, Şıpsevdi ve Tipitip gibi diğer Mondelez markalarıyla birlikte boykot çağrıları içinde anılmaktadır. Mondelez International'ın İsrail'deki yatırımları ve AR-GE faaliyetleri, boykot kararını destekleyen temel faktörlerdir.`,
     evidences: [
      "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
     ],
    },
    {
     name: "First",
     slug: "first",
     country: "ABD",
     ctgry: "Yiyecek",
     founder: "Mondelez International",
     owner: "Mondelez International",
     country: "ABD",
     alternative_products: [],
     img: "/first.png",
     isBoycotted: "boykot",
     website: "",
     description: `First Sakız, ABD merkezli Mondelez International şirketinin portföyünde yer alan şekersiz sakız markalarından biridir. First Sakız, 1996 yılında Türkiye sakız pazarına girmiş ve kısa sürede popüler hale gelmiştir.
  
  2012 yılında Kraft Foods'un bölünmesinin ardından, çikolata, kraker, bisküvi, sakız ve şekerleme ürünlerinden sorumlu bölümler Mondelez International çatısı altında birleştirilmiştir. Bu birleşmenin ardından First Sakız, Mondelez'in küresel markalarından biri haline gelmiştir.
  
  First Sakız, Türkiye pazarında özellikle şekersiz sakız kategorisinde önemli bir konuma sahiptir. Mondelez International'ın diğer sakız markaları arasında Falım, Bubblicious, Tofita, Şıpsevdi ve Tipitip gibi markalar bulunmaktadır.`,
     boycottReason: `First Sakız'ın boykot edilmesinin temel nedeni, markanın sahibi Mondelez International'ın İsrail ile olan ticari ve ekonomik bağlarıdır. First Sakız, Mondelez International'ın alt markasıdır ve Mondelez'in İsrail ile olan ilişkileri nedeniyle boykot listesindedir.
  
  First Sakız doğrudan bir İsrail ürünü olmasa da, Mondelez International'ın İsrail merkezli start-up şirketlere yaptığı yatırımlar, markanın dolaylı olarak İsrail ekonomisini desteklediği eleştirilerine neden olmuştur. Mondelez International, "The Kitchen Hub" ve "Torr FoodTech" gibi İsrail merkezli start-up'lara yatırım yapmaktadır.
  
  Mondelez International, İsrail'deki operasyonel faaliyetleri ve AR-GE yatırımlarıyla bu ilişkiyi güçlendirmektedir. Şirket, İsrail'deki gıda girişimlerine yaptığı yatırımlar nedeniyle, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından boykot edilmektedir.
  
  Bu nedenle, bazı tüketiciler First Sakız'ı boykot listelerine dahil etmektedir. Özellikle sosyal medyada ve bazı internet platformlarında First Sakız, Falım, Bubblicious, Tofita, Şıpsevdi ve Tipitip gibi Mondelez markalarıyla birlikte boykot çağrıları içinde anılmaktadır.`,
     evidences: [
      "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
     ],
    },
    {
     name: "Milka",
     slug: "milka",
     foundedYear: 1901,
     ctgry: "Yiyecek",
     founder: "Philippe Suchard",
     owner: "Mondelez International",
     country: "İsviçre",
     alternative_products: [],
     img: "/milka.png",
     isBoycotted: "boykot",
     website: "https://www.milka.com/de/",
     description: `Milka, 1901 yılında İsviçre'de Philippe Suchard tarafından kurulmuş sütlü çikolata markasıdır. İlk üretimi Neuchâtel, İsviçre'de başlamış, daha sonra Almanya'nın Lörrach kentinde üretime devam etmiştir. Milka, çikolata tarihinde bir dönüm noktası olarak kabul edilen ilk sütlü çikolata barını üretmiştir. Marka adı, Almanca "milch" (süt) ve "kakao" kelimelerinin birleşiminden türetilmiştir. Milka, ilk üretiminden itibaren mor paketleme kullanmakta ve paketinde mor inek ve Alpler'in doğal manzarasını göstermektedir. Mor renk, Milka'ya özel olarak Avrupa'da marka olarak tescil edilmiş tek renktir. 1990-2012 yılları arasında Kraft Foods Inc. bünyesinde, 2012'den itibaren ise Mondelez International bünyesinde faaliyet göstermektedir. Milka, dünya çapında en çok satan sütlü çikolata markalarından biridir ve Noel ve Paskalya gibi özel günler için özel ürünler üretmektedir.`,
     boycottReason: `Milka, Mondelez International'ın alt markasıdır. Çatı kuruluş Mondelez, The Kitchen Hub ve Torr isimli iki İsrailli gıda girişimine yatırımda bulunmuştur. Mondelez, İsrail'de ekonomik ilişkilerini hem operasyonel olarak hem de AR-GE yatırımları ile pekiştirmektedir. Bahsi geçen girişimleri kuranlar arasında Mondelez'in eski çalışanları da bulunmaktadır. Bu nedenle Milka, Mondelez'in İsrail ile olan ticari ilişkileri nedeniyle boykot listesinde yer almaktadır.`,
     evidences: [
      "https://ir.mondelezinternational.com/news-releases/news-release-details/mondelez-international-snackfutures-makes-seed-investment",
     ],
    },
   ],
  },
  {
   name: "Banvit",
   slug: "banvit",
   foundedYear: 1968,
   ctgry: "Yiyecek",
   founder: "Bandırma Vitaminli Yem Sanayi ve Ticaret A.Ş.",
   owner: "TBQ Food GmbH (%91,71) ve Halka Açık (%8,29)",
   country: "Türkiye",
   alternative_products: [],
   img: "/banvit.png",
   isBoycotted: "boykot-degil",
   website: "https://www.banvit.com/",
   description: `Banvit (Bandırma Vitaminli Yem Sanayi ve Ticaret A.Ş.), 1968 yılında Bandırma'da yem üreticisi olarak faaliyete başlayan Türk şirketidir. Şirket, 16 Mayıs 1968 tarihinde kurulmuştur.

Banvit, yem üretiminin yanı sıra et, balık ve yumurta satışı da yapmaktadır. Şirket, tavuk ürünleri, et ürünleri, yem ve hayvancılık alanlarında faaliyet göstermektedir. Sektörde 1968 yılından bu yana faaliyetleriyle sürdürülebilir başarıyı somutlaştırmaktadır.

Mayıs 2017'de Banvit'in %79.48'lik hissesi BRF ile Katar Yatırım Otoritesi ortaklığına devredilmiştir. Günümüzde şirket, dünyanın önde gelen gıda şirketlerinden biri olan BRF çatısı altında faaliyetlerini sürdürmektedir. Banvit'in sahibi TBQ Food GmbH (%91,71) ve halka açık pay (%8,29) şeklindedir.

Banvit, binlerce çalışanı, öncü üretim anlayışı ve kalite odaklı yaklaşımıyla geleceğe sağlam adımlarla ilerlemektedir. Şirket, gezegenimizi ön planda tutarak var olan çevresel etkisini örnek sürdürülebilirlik projeleriyle azaltmaya devam etmekte, gelecek nesillere yaşanabilir bir dünya bırakmak için çalışmaktadır.

Banvit, 2023 yılında 21,3 milyar Türk Lirası gelir elde etmiş ve 2024 yılında 5.029 çalışanı bulunmaktadır. Şirketin genel merkezi Bandırma, Balıkesir, Türkiye'dedir ve genel müdürü Patricio Santiago Rohner'dir.

Şirket, uzun yıllar basketbol sponsorluğu yapmıştır. 1994 yılında Bandırma BK basketbol takımını kurmuş ve 2019 yılına kadar kulübü sponsor etmiştir. Ayrıca 2004, 2005, 2006 ve 2008 yıllarında Banvit ve Tübad Basketbol Turnuvası'nı düzenlemiştir.`,
   evidences: [""],
  },
  {
   name: "Aytaç",
   slug: "aytac",
   foundedYear: 1993,
   ctgry: "Yiyecek",
   founder: "İsviçre Bankası ve Dünya Bankası Ortaklığı",
   owner: "Yıldız Holding",
   country: "Türkiye",
   alternative_products: [],
   img: "/aytac.png",
   isBoycotted: "boykot",
   website: "https://www.aytac.com.tr/tr",
   description: `Aytaç Gıda A.Ş., 1993 yılında bir İsviçre bankası ve Dünya Bankası'nın ortaklığıyla İstanbul'da kurulmuştur. Aytaç, 1993 yılında Avrupa'nın en büyük entegre et tesisini kurarak başladığı yolculuğuna, 2014 yılında katıldığı Yıldız Holding bünyesinde devam etmektedir.

Kasım 1996'da Türk tekstil, mobilya, gıda ve perakende şirketi Yimpaş Holding tarafından satın alınmıştır. 2013 yılında Yıldız Holding ve BİM, Aytaç'ın et entegre tesislerini 275 milyon TL'ye satın almıştır. 2014 yılında ise Aytaç tamamen Yıldız Holding bünyesine katılmıştır.

Aytaç, 30 yıllık tecrübesini kalite, hijyen ve lezzetten ödün vermeden sürdüren şirket, 130'dan fazla ürün çeşidiyle şarküteri ve taze et kategorilerinde geniş bir yelpazede hizmet sunmaktadır. Şirket, bisküvi, kraker, kurabiye, kek, turta, çikolata, gofret, bebek gıdası, şarküteri, donuk et, kırmızı et, su, meyve suyu, kahvaltılık, toplu tüketim, süt, süt ürünleri, yağ ve hazır gıda ürünleri alanlarında üretim yapmaktadır.

Çankırı'nın Çerkeş ilçesinde, 852.000 metrekarelik alan üzerine kurulu işletmede üretim yapılmaktadır. Fabrikada helal kesim ve hijyenik üretim standartlarıyla günümüz gıda teknolojileri kullanılmaktadır. Sürdürülebilir ve üstün kaliteye ulaşmak için ürünler çiftlikten sofraya kadar 105 farklı kontrol noktasından geçmektedir.

Üretilen kırmızı et ürünlerinde sadece kırmızı et, beyaz et ürünlerinde sadece beyaz et kullanılmaktadır. İlkeler gereği toplum sağlığı her şeyin üzerinde tutulmakta, renklendirme ise sadece doğal baharatlar ile yapılmaktadır.

1994'te Aytaç'a bağlı olarak kurulan Aytaç Su, su dağıtımı alanında faaliyet göstermektedir. Şirketin genel merkezi Yozgat, Türkiye'dedir ve sloganı "A kalite"dir.`,
   boycottReason: `Aytaç'ın boykot edilmesinin temel nedeni, şirketin Yıldız Holding'e ait bir marka olmasıdır. Aytaç Gıda, 1993 yılında Avrupa'nın en büyük entegre et tesisini kurmuş, 2014 yılında ise Yıldız Holding bünyesine katılmıştır.

Aytaç, Yıldız Holding'e ait bir marka olması sebebiyle boykot listesine eklenmiştir. Yıldız Holding'in İsrail ile olan ilişkileri ve ticari bağlantıları nedeniyle, Yıldız Holding'e ait tüm markalar (Aytaç dahil) boykot edilmektedir.

Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Yıldız Holding'in İsrail ile olan bağlantıları nedeniyle Aytaç'ı boykot etmeyi bir sorumluluk olarak görmektedir.`,
   evidences: [""],
  },
  {
   name: "Amigo",
   slug: "amigo",
   foundedYear: 1983,
   ctgry: "Yiyecek",
   founder: "Şok Marketler",
   owner: "Şok Marketler Tic. A.Ş. (Yıldız Holding)",
   country: "Türkiye",
   alternative_products: [],
   img: "/amigo.png",
   isBoycotted: "boykot",
   website:
    "https://kurumsal.sokmarket.com.tr/markalar/soka-ozel-urunler/amigo",
   description: `Amigo, 1983 yılında Türkiye'nin ilk paketlenmiş kuruyemiş firmalarından biri olarak kurulmuştur. Amigo, 1995 yılında kurulan Şok Marketler Tic. A.Ş. adına çeşitli üreticiler tarafından üretilen atıştırmalık ürünlerin markasıdır.

Günümüzde Şok Marketler'in güvencesiyle üretilen Amigo kuruyemişleri, zengin lezzet çeşitliliği ve yüksek kalite standartlarıyla öne çıkmakta, tüketicilere güvenilir ve sağlıklı bir alternatif sunmaktadır.

Amigo, fıstık, ayçekirdeği, çiğ badem, kuru meyve, cips ve fıstık ezmesi gibi geniş bir ürün yelpazesiyle damak zevkine düşkün olanlar için ideal bir seçenektir. Amigo, Şok Marketler'in özel markası olarak faaliyet göstermektedir.

Şok Marketler, Türkiye'nin en büyük perakende zincirlerinden biri olup 2011 yılında Ülker'in de sahibi olduğu Yıldız Holding bünyesine katılmıştır. Bu nedenle Amigo, Şok Marketler'e ait bir marka olarak Yıldız Holding çatısı altında faaliyet göstermektedir.`,
   boycottReason: `Amigo'nun boykot edilmesinin temel nedeni, markanın Şok Marketler'e ait olması ve Şok Marketler'in de boykot edilmesidir. Amigo, Şok Marketler'in sahibi olduğu bir marka olarak boykot listesindedir.

Şok Marketler, 2011 yılında Ülker'in de sahibi olduğu Yıldız Holding bünyesine katılmıştır. Şok Marketler'in boykot edilme nedeni, market raflarında dünya çapında boykot edilen Starbucks ürünlerine yer vermesi ve Coca Cola gibi boykot edilen ürünlerin de indirimli olarak satın almaya teşvik edilmesidir.

7 Şubat 2024 tarihinde Şok Market'e karşı Twitter üzerinden #ŞokBoykot hashtag'ı ile boykot kampanyası başlatılmıştır. Şok Marketler'in boykot edilen ürünlere raflarında yer vermesi ve tüketicileri bu ürünleri satın almaya teşvik etmesi, Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından kabul edilemez bulunmaktadır.

Amigo, Şok Marketler'e ait bir marka olduğu ve Şok Marketler'in boykot edilmesi nedeniyle boykot listesindedir. Ayrıca, Şok Marketler'in Yıldız Holding bünyesinde olması ve Yıldız Holding'in İsrail ile olan ilişkileri de Amigo'nun boykot edilmesine neden olmaktadır.`,
   evidences: [""],
  },
  {
   name: "Bol Bol Ketçap",
   slug: "bol-bol-ketcap",
   foundedYear: null,
   ctgry: "Yiyecek",
   founder: "BİM Chain Markets",
   owner: "Kraft Heinz Company (KHC)",
   country: "Türkiye",
   alternative_products: [],
   img: "/bol-bol-ketcap.png",
   isBoycotted: "boykot",
   website: "",
   description: `Bol Bol Ketçap, BİM Chain Markets'in ketçap ve mayonez markasıdır. Bol Bol Ketçap ve Bol Bol Mayonez, BİM Chain Markets'in markaları olarak faaliyet göstermektedir.

Bol Bol Ketçap ve Bol Bol Mayonez, önceden Assan Gıda tarafından üretilmekteydi. Kraft Heinz Company (KHC), Assan Gıda'yı Kibar Holding'den satın almıştır. Bu anlaşmanın ilk duyurusu 11 Haziran 2021 tarihinde yapılmıştır.

Günümüzde Bol Bol Ketçap ve Bol Bol Mayonez, Kraft Heinz Company tarafından üretilmektedir. Kraft Heinz Company, dünyanın en büyük gıda ve içecek şirketlerinden biridir.`,
   boycottReason: `Bol Bol Ketçap'ın boykot edilmesinin temel nedeni, markanın üreticisi Kraft Heinz Company'nin (KHC) en büyük hissedarlarından birinin Berkshire Hathaway olmasıdır.

Kraft Heinz Company (KHC), Assan Gıda'yı Kibar Holding'den satın almıştır. 11 Haziran 2021 tarihinde bu anlaşmanın ilk duyurusu yapılmıştır. Bu satın almanın ardından Bol Bol Ketçap ve Bol Bol Mayonez, Kraft Heinz Company tarafından üretilmeye başlamıştır.

Kraft Heinz Company, en büyük hissedarlarından biri Berkshire Hathaway olduğu için boykot listesindedir. Berkshire Hathaway'in İsrail ile olan ilişkileri ve ticari bağlantıları nedeniyle, Kraft Heinz Company ve onun ürettiği tüm markalar (Bol Bol Ketçap ve Bol Bol Mayonez dahil) boykot edilmektedir.

Bu nedenle Bol Bol Ketçap ve Bol Bol Mayonez, KHC tarafından üretildiği ve KHC'nin en büyük hissedarlarından birinin Berkshire Hathaway olması sebebiyle boykot listesine eklenmiştir. Filistin halkına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Berkshire Hathaway'in İsrail ile olan bağlantıları nedeniyle Bol Bol Ketçap'ı boykot etmeyi bir sorumluluk olarak görmektedir.`,
   evidences: [
    "https://www.invest.gov.tr/tr/news/news-from-turkey/sayfalar/kraft-heinz-acquires-turkish-assan-foods.aspx",
    "https://www.youtube.com/watch?v=wUzekJy46UI",
   ],
  },
  {
   name: "Bebeto",
   slug: "bebeto",
   foundedYear: 1999,
   ctgry: "Yiyecek",
   founder: "Kervan Gıda",
   owner: "Kervan Gıda",
   country: "Türkiye",
   alternative_products: [],
   img: "/bebeto.png",
   isBoycotted: "boykot-degil",
   website: "https://www.bebeto.com/",
   description: `Bebeto, 1999 yılında lezzet tutkusuyla yola çıkmış, Kervan Gıda'ya ait bir şekerleme markasıdır. Bebeto, insanları bir araya getiren ve lezzet paylaşıldıkça büyüyen bir efsane yaratmak için kurulmuştur.

Bebeto, tüm yaşlardaki lezzet severlerin damak zevkine hitap edecek benzersiz ürünler hazırlamaya başlamıştır. Yüksek kaliteli malzemelerle özgün tariflerini birleştirerek tamamen farklı bir renkli dünya yaratmıştır.

Bu tutkuyla, Bebeto'nun yarattığı dünya lezzet severlerin damaklarında yerini bulmuştur. İtibarı hızla Türkiye sınırlarını aşmış ve bu şekilde milyonlarca insanın kalbine girmeyi başarmıştır.

Bebeto'nun her ürünü, ailelerin ve arkadaşların paylaşabileceği özel anlar yaratmak için tasarlanmıştır. Müşteri memnuniyeti ve kalite odaklı yaklaşımla, üretimin her aşamasında en yüksek standartları korumaktadır. Bebeto, sadece şekerleme üretmemekte, aynı zamanda her ısırıkta keyifli anılar yaratmaktadır.

Kervan Gıda, İstanbul merkezli Türkiye'nin en büyük şeker ve şekerleme şirketlerinden biridir. Şirketin ana ürünleri jöleli şeker, jöleli ayıcık, marshmallow, sakız, meyan şekeri, lolipop ve sakız ürünlerini içermektedir. Kervan Gıda, 1987 yılında ilk jöleli şeker olan Jelibon markasını tanıtmış, 1998 yılında ise popüler Bebeto markasını tanıtmıştır.

Bebeto için düzenliler, artık sadece bir şekerleme markası değil, hayatın mutlu anlarına eşlik eden bir lezzet durağıdır. Renkli, eğlenceli ve geniş Bebeto dünyası, evde, okulda, ofiste veya piknikte olabileceğiniz her yerde yanınızda olmaya hazırdır.

Lezzet severlerin Bebeto'nun keyfini aynı lezzet ve huzur içinde yaşayabilmeleri için, üretim süreçlerinin her aşamasını titizlikle organize etmektedir. Gıda üretiminde en yüksek standartları koruyarak, her zaman ilk tercihiniz olmak istemektedir. Her Bebeto anının renkli, tatlı ve eğlenceli olması dileğiyle!`,
   evidences: [""],
  },
  {
   name: "Pakmaya",
   slug: "pakmaya",
   foundedYear: 1972,
   ctgry: "Yiyecek",
   founder: "Dr. Engin Pak",
   owner: "Pak Holding",
   country: "Türkiye",
   alternative_products: [],
   img: "/pakmaya.png",
   isBoycotted: "boykot-degil",
   website: "https://www.pakmaya.com/tr",
   description: `Pakmaya, 1972 yılında Dr. Engin Pak tarafından İzmit, Köseköy'de kurulmuş dünyanın sayılı maya üreticilerinden biridir. Pakmaya, uzun yıllar boyunca ilaç ve ilaç hammaddeleri üretiminde kazanılan hijyenik sınai üretim deneyimlerinin ardından maya üretimine başlamaya karar vermiştir.

Pakmaya'nın ilk fabrikası 1973 yılında İzmit-Köseköy'de kurularak faaliyete geçmiştir. Dünyanın sayılı maya üreticilerinden biri olarak, 50 yıllık tecrübesiyle 5 kıtada 130'dan fazla ülkeye ulaşmaktadır.

Maya ile yakaladığı başarı ve deneyimle bugün ekmekçilik, pastacılık ve ev tüketim ürünlerinde geniş bir yelpaze ile hizmet sunmaktadır. Biyoteknoloji ve fırıncılık araştırma merkezleri olan Pak Biomer ve Fagem'in özel teknik donanımları ve uzman kadrolarıyla, çalışmalarını durmaksızın sürdürmektedir.

Müşteri odaklı yaklaşımı, anında çözüm üreten ve pazarlardaki her türlü gelişmeyi yakından takip eden ekibi ile global iş ortaklarına hizmet vermekten gurur duymaktadır.

1972 yılında İzmit, Köseköy'de kurulan ilk yaş maya fabrikasıyla başladığı üretim yolculuğuna bugün 3'ü yurtiçi, 1'i yurtdışında bulunan 4 maya fabrikası ve 2 adet sıvı-toz üretim tesisi olmak üzere toplamda 6 tesiste uluslararası hijyen ve kalite standartlarına uygun bir şekilde devam etmektedir.

Pakmaya, 1972 yılında İzmit'te kurulan fabrikasıyla dünyanın sayılı maya üreticilerinden biri olarak, 50 yıllık tecrübeyle 5 kıtada 130'dan fazla ülkeye ihracat yapan yerli ve milli bir markadır.`,
   evidences: [""],
  },
  {
   name: "Tadelle",
   slug: "tadelle",
   foundedYear: 1980,
   ctgry: "Yiyecek",
   founder: "Sagra Grup",
   owner: "OYAK Grup Şirketleri (Sagra Grup)",
   country: "Türkiye",
   alternative_products: [],
   img: "/tadelle.png",
   isBoycotted: "boykot-degil",
   website: "https://www.tadelle.com/",
   description: `Tadelle, Türkiye'nin en köklü markalarından Sagra'nın üreticisi olduğu, 1980'li yıllardan bu yana her kuşaktan tüketicinin vazgeçemediği çikolata markasıdır. %100 yerli marka olan Tadelle, güçlü mirasını bugüne taşıyan Türkiye'nin ikonik markalarından biridir.

Tadelle, %34 fındık oranı ve yoğun çikolata tadını buluşturarak günlük hayatın içinde tüketicilerin vazgeçilmezi olmuştur. Tadelle'nin rakipsiz olmasının temelinde uzmanlar tarafından seçilen fındıkların özel kavurma tekniğiyle aroma, lezzet ve besin değerlerini kaybetmeden kavrularak kendine has bir tada sahip çikolata ile buluşturulması yatmaktadır.

%100 gerçek çikolata olan Tadelle, trans yağ, glikoz ve fruktoz şurubu içermemektedir. Sadece şeker pancarından elde edilen şeker kullanılarak üretilen ürünler, doğal vanilya kullanılarak çikolata severlere sunulmaktadır. Fındık, çikolata ve kakaonun tüm faydalarını ve enerjisini içinde barındıran Tadelle, günün her anında lezzet tutkunlarının tercihi olmaktadır.

Tadelle, klasik, bitter, beyaz çikolata ve şeker ilavesiz çeşitlerinin yanı sıra gofretleri ile de farklı damak tatlarına hitap etmektedir. Yılların birikimi sayesinde çikolata sektöründe güçlü marka bilinirliğine sahip olan Tadelle, teknolojiyi yakından takip ederek, vizyonuna bağlı kalarak, kalitesinden ödün vermeden ürünleri ve üstün nitelikli hizmet anlayışı ile çikolata sektöründe Türkiye'deki başarısını dünyaya da taşıma yolunda hızla ilerlemektedir.

Çikolataya doymak isteyenlerin tercihi Tadelle, 2021 yılı itibariyle Sarelle, Sagra ve Gol markalarıyla birlikte Türkiye'nin köklü şirketlerinden OYAK Şirketleri bünyesine katılarak Sagra Grup çatısı altında faaliyetlerine tüm hızıyla devam etmektedir. Türkiye'nin kalbine hitap eden Tadelle'nin hikayesi gelecek kuşaklarla birlikte büyüyerek daha da lezzetlenecektir.`,
   evidences: [""],
  },
  {
   name: "Nuh'un Ankara Makarnası",
   slug: "nuh-un-ankara-makarnasi",
   foundedYear: 1946,
   ctgry: "Yiyecek",
   founder: "Ahmet Eskiyapan, Nuh Eskiyapan ve Kemal Yurtbilir",
   owner: "Nuh'un Ankara Makarnası Sanayi Ticaret A.Ş.",
   country: "Türkiye",
   alternative_products: [],
   img: "/nuh-un-ankara-makarnasi.png",
   isBoycotted: "boykot-degil",
   website: "https://www.nuh.com.tr/",
   description: `Nuh'un Ankara Makarnası Sanayi Ticaret A.Ş., makarna ve irmik gibi buğday ürünleri üretimi üzerine yoğunlaşmış Türkiye menşeli şirkettir.

Şirket, 1946 yılında Ahmet Eskiyapan, Nuh Eskiyapan ve Kemal Yurtbilir tarafından iki ailenin işbirliğiyle kurulmuştur. İlk üretim küçük bir atölyede günlük 6 ton kapasiteyle başlamıştır.

1956 yılında şirket, İskitler'deki fabrikaya taşınmış ve kapasitesi 20 tona çıkmıştır. 1961 yılında üretim, başlangıçta "Ankara Makarna" markası altında yapılıyordu, ancak kurucularından biri olan Nuh Eskiyapan'ın anısına "Nuh'un Ankara Makarnası" olarak yeniden adlandırılmıştır.

1996 yılında şirket, mevcut yerine Sincan Organize Bölgesi'ne taşınmıştır. Şirketin "Veronelli" adında başka bir markası da bulunmaktadır.

TOBB Başkanı Rifat Hisarcıklıoğlu şirketin ortağıdır. 2014 yılında Nuh'un Ankara Makarnası, Japonya merkezli Nisshin Seifun Group ve Marubeni ile ortaklık kurarak "Nisshin Seifun Turkey" adında yeni bir şirket oluşturmuştur. Bu yeni şirket için Ankara Sincan 1. Organize Sanayi Bölgesi'nde, üretim için planlanan maliyeti 36 milyon dolar olan bir fabrika kurulması planlanmıştır.

Ağustos 2022'de Rekabet Kurumu, şirketin rekabeti önleyici faaliyetlerde bulunduğu iddiaları üzerine soruşturma başlatmıştır.

Nuh'un Ankara Makarnası, yerli bir makarna üreticisidir ve İsrail ile herhangi bir bağlantısı bulunmamaktadır.`,
  },
  {
   name: "Kenton",
   slug: "kenton",
   foundedYear: 1945,
   ctgry: "Yiyecek",
   founder: "",
   owner: "Sultanlar Holding",
   country: "Türkiye",
   alternative_products: [],
   img: "/kenton.png",
   isBoycotted: "boykot-degil",
   website: "https://www.kenton.com.tr/",
   description: `Kenton, özellikle pasta ve tatlı yapım ürünleri (krem şanti, puding, kek süslemeleri gibi) ile tanınan bir gıda markasıdır.

Kenton, 1945 yılında Sultanlar Holding bünyesinde %100 yerli sermaye ile kurulmuş, köklü bir markadır. Türkiye'nin ilk paketli Kabartma Tozu ve Şekerli Vanilin ürünlerini yıllarca gururla üretmiştir.

1970'lerin sonlarından itibaren Türkiye'nin Toz Tatlı ve Fırın Yardımcı Malzemeleri kategorilerinde ilk küresel marka olma vizyonuyla başlayan Kenton, şu anda tatlı ve pasta yapımında kullanılan tüm malzemeleri sunmaktadır.

Kenton, 9 farklı kategoride 200'den fazla ürün çeşidiyle yaklaşık 60 ülkede milyonlarca eve hizmet vermektedir.

Kenton markası, birçok ürünü piyasaya ilk getiren marka olarak tanınmaktadır. Bu başarı, büyük ölçüde erken ve sürekli Ar-Ge faaliyetlerine atfedilmektedir.

Markanın pazar payını genişletme konusundaki başarıları, tüketici odaklı yaklaşım, rakiplerinden farklılaşan yenilikçi helal sertifikalı ürünler, otomasyon ve Ar-Ge'ye yapılan kapsamlı yatırımlar, ev yapımı lezzet sunan tarifler, yetenekli ve deneyimli çalışanlar ve markayı Türkiye'de ve küresel olarak başarıyla temsil eden güçlü distribütör ve satış ekibi ağı ile desteklenmektedir.

Kenton, Orta Doğu'dan Afrika'ya, Balkanlar'dan Avrupa'ya, hatta Çin'e kadar çeşitli bölgelerde büyümeye devam etmektedir.

Kenton, yerli bir gıda markasıdır ve İsrail ile herhangi bir bağlantısı bulunmamaktadır.`,
  },
  //! burdayım
  {
   name: "McVities",
   slug: "",
   foundedYear: 1111111111111111111111111111111,
   ctgry: "Yiyecek",
   founder: "",
   owner: "",
   country: "",
   alternative_products: [],
   img: "/.png",
   isBoycotted: "boykot",
   website: "",
   description: ``,
   boycottReason: ``,
   evidences: [""],
  },
  {
   name: "",
   slug: "",
   foundedYear: 1111111111111111111111111111111,
   ctgry: "Yiyecek",
   founder: "",
   owner: "",
   country: "",
   alternative_products: [],
   img: "/.png",
   isBoycotted: "boykot",
   website: "",
   description: ``,
   boycottReason: ``,
   evidences: [""],
  },
  //! İÇECEK MARKALARI
  {
   name: "Vio",
   slug: "vio",
   ctgry: "İçecek",
   foundedYear: 2020,
   founder: "Al Arabia Company",
   owner: "Al Arabia Company",
   description: `Vio, Ürdün merkezli Al Arabia Company tarafından 2020 yılında piyasaya sürülen yenilikçi bir aromalı süt içeceği markasıdır. Marka, geleneksel sütü dünya çapındaki zengin ve egzotik tatlarla harmanlayarak benzersiz bir lezzet deneyimi sunmayı hedeflemektedir. Vio, premium kaliteli malzemelerle üretilir ve her şişe özenle seçilmiş içeriklerle hazırlanır.

Markanın en dikkat çekici özelliklerinden biri, benzersiz ve yenilikçi aroma çeşitleridir. Bisküvi (Biscuit), Kakule ve Zencefil (Cardamom & Ginger), Badem (Almond) ve Kavun (Melon) gibi aromalarla Vio, geleneksel süt içeceklerinden farklılaşarak tüketicilere farklı bir deneyim sunmaktadır. Bu aromalar, özellikle Orta Doğu ve Asya pazarlarındaki tüketici tercihlerini yansıtmakta ve kültürel lezzetleri modern bir ambalajla buluşturmaktadır.

Vio, Ürdün başta olmak üzere Suriye, Mısır, Pakistan, Hindistan, Nijerya ve Kamerun gibi geniş bir coğrafyada satılmaktadır. Bu geniş dağıtım ağı, markanın bölgesel bir güç olma hedefini yansıtmaktadır. Al Arabia Company'nin yıllarca süren içecek üretimi deneyimi ve kapsamlı pazar araştırmaları sonucunda geliştirilen Vio, her an için uygun çok yönlü bir içecek olarak konumlandırılmıştır.

Marka, özellikle genç tüketiciler ve sağlıklı yaşam tarzını benimseyen bireyler arasında popülerlik kazanmaktadır. Vio, geleneksel sütün besleyici değerlerini korurken, modern ve pratik bir ambalajlama ile tüketicilere sunmaktadır. Ürünlerinin doğal içeriklerle üretilmesi ve katkı maddelerinden uzak durması, markanın sağlık odaklı yaklaşımını göstermektedir.

Vio markası, Ürdün menşeli olup, İsrail'e destek veya Çin menşeli olmakla ilgili herhangi bir durum tespit edilmemiştir. Marka, boykot listelerinde yer almamaktadır ve güvenle tercih edilebilecek bir içecek alternatifi olarak değerlendirilmektedir.`,
   country: "Ürdün",
   website: "https://viodrinks.com/",
   img: "/vio.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Sırma",
   slug: "sirma",
   ctgry: "İçecek",
   foundedYear: 1950,
   founder: "Yerel Girişimciler",
   owner: "Danone Group (%50,1)",
   description: `Sırma Su, Türkiye'nin önde gelen doğal kaynak suyu markalarından biridir. 1950 yılında kurulan marka, Türkiye'nin su sektöründeki köklü geçmişe sahip markalarından biri olarak öne çıkmaktadır. Sırma Su, doğal kaynak suyu, maden suyu, aromalı içecekler ve gazsız su kategorilerinde geniş bir ürün yelpazesi sunmaktadır.

Markanın en önemli özelliklerinden biri, ürünlerini özellikle Manisa Demirci bölgesindeki doğal kaynaklardan elde etmesidir. Bu bölge, zengin mineral içeriğine sahip doğal su kaynaklarıyla tanınmakta ve Sırma Su'nun kalitesinin temelini oluşturmaktadır. Marka, bu doğal kaynaklardan elde ettiği suyu modern teknoloji ve hijyen standartlarıyla işleyerek tüketicilere sunmaktadır.

2013 yılında, Fransız gıda devi Danone, Sırma Su'nun %50,1 hissesini satın alarak markaya ortak olmuştur. Bu ortaklık, Türkiye su sektöründeki önemli yabancı yatırımlardan biri olarak değerlendirilmektedir. Bu ortaklıkla birlikte Sırma, Danone grubunun global tecrübesi, Ar-Ge kapasitesi ve dağıtım gücüyle daha geniş bir pazara ulaşmıştır. Danone'nin dünya çapındaki su markaları portföyündeki deneyimi, Sırma Su'nun kalite standartlarının yükseltilmesine ve ürün çeşitliliğinin artırılmasına katkı sağlamıştır.

Günümüzde Sırma, Türkiye'deki Danone Sırma Gıda ve İçecek Sanayi ve Ticaret A.Ş. çatısı altında faaliyet göstermekte ve hem iç hem dış pazarda güçlü konumunu sürdürmektedir. Marka, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmakta ve tüketicilerin günlük su ihtiyacını karşılamaktadır.

Sırma Su, farklı hacimlerde pet şişe ve damacana seçenekleriyle tüketicilere sunulmakta ve özellikle ev tipi kullanımda tercih edilmektedir. Marka, kalite, sağlık ve sürdürülebilirlik odaklı üretim anlayışıyla Türkiye su pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye & Fransa",
   website: "https://www.sirma.com.tr",
   img: "/sirma.png",
   isBoycotted: "boykot",
   boycottReason: `Sırma Su markasının boykot edilmesinin temel nedeni, markanın ana ortağı olan Fransız gıda devi Danone'nin İsrail ile olan ticari ve finansal bağlantılarıdır. Danone, İsrail'in en büyük gıda işletmelerinden biri olan Strauss Group'un süt ürünleri üreten alt şirketi Strauss Dairies ile işbirliği içerisindedir ve şirkette %20'lik hisse sahibidir.

Strauss Group, İsrail'in en büyük gıda şirketlerinden biri olarak, gayrimeşru İsrail yerleşimlerinde üretim yapmakta ve İsrail ekonomisine ciddi katkılar sağlamaktadır. Bu yerleşimler, uluslararası hukuka göre yasadışı kabul edilmekte ve Filistin topraklarının işgali anlamına gelmektedir. Danone'nin bu şirketle ortaklık yapması, İsrail'in işgal politikalarına dolaylı olarak destek sağlaması anlamına gelmektedir.

Ayrıca, Strauss Group'un İsrail askeri birimlerine destek ve malzeme tedariki sağladığı belirtilmektedir. Bu durum, Danone'nin İsrail'in askeri operasyonlarına da dolaylı olarak katkıda bulunduğu anlamına gelmektedir. Danone ayrıca, İsrailli süt firması Tara ile birlikte İsrailli Wilk'e yaklaşık 12,5 milyon NIS tutarında bir yatırıma öncülük etmektedir.

Bu ticari ve finansal bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Danone'ye ait tüm markaları boykot etmeyi bir sorumluluk olarak görmektedir. Sırma Su da bu kapsamda boykot listesinde yer almaktadır. Alternatif ürünlere yönelmek daha sağlıklı olacaktır.`,
   alternative_products: [
    "hamidiye",
    "beysu",
    "sultan",
    "saka",
    "buzdagi",
    "kizilay",
    "ozkaynak",
    "ceysu",
    "sarikiz",
    "beypazari",
   ],
  },
  {
   name: "Hayat",
   slug: "hayat",
   ctgry: "İçecek",
   foundedYear: 1984,
   founder: "Yerel Girişimciler",
   owner: "Danone Group",
   description: `Hayat Su, Türkiye'nin en köklü ambalajlı su markalarından biridir. 1984 yılında kurulan marka, Türkiye'nin su sektöründeki öncü markalarından biri olarak öne çıkmaktadır. Hayat Su, doğal kaynak suyu, damacana su, küçük ambalajlı su ve bebek suyu kategorilerinde geniş bir ürün yelpazesi sunmaktadır.

Markanın en önemli özelliklerinden biri, sularını genellikle Sakarya – Hendek bölgesindeki doğal kaynaklardan temin etmesidir. Bu bölge, Türkiye'nin en kaliteli su kaynaklarından birine sahip olmasıyla tanınmakta ve Hayat Su'nun kalitesinin temelini oluşturmaktadır. Marka, bu doğal kaynaklardan elde ettiği suyu modern teknoloji ve hijyen standartlarıyla işleyerek tüketicilere sunmaktadır.

2007 yılında Fransız gıda devi Danone tarafından satın alınan Hayat Su, günümüzde Danone Türkiye bünyesinde faaliyet göstermektedir. Bu satın alma, Türkiye su sektöründeki en büyük yabancı yatırımlardan biri olarak değerlendirilmektedir. Danone'nin dünya çapındaki su markaları portföyündeki deneyimi ve Ar-Ge kapasitesi, Hayat Su'nun kalite standartlarının yükseltilmesine ve ürün çeşitliliğinin artırılmasına katkı sağlamıştır.

Hayat Su, kalite, sağlık ve sürdürülebilirlik odaklı üretim anlayışıyla Türkiye su pazarında önemli bir konuma sahiptir. Marka, hem ev tipi kullanımda hem de kurumsal pazarda Türkiye'nin en çok tercih edilen su markalarından biri olmayı sürdürmektedir. Özellikle damacana su segmentinde güçlü bir pazar payına sahip olan Hayat Su, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır.

Marka, farklı hacimlerde pet şişe ve damacana seçenekleriyle tüketicilere sunulmakta ve özellikle aileler ve kurumsal müşteriler arasında tercih edilmektedir. Hayat Su'nun bebek suyu kategorisindeki ürünleri, özel olarak bebeklerin ihtiyaçlarına göre formüle edilmiş ve hijyen standartları en üst seviyede tutulmuştur.`,
   country: "Türkiye & Fransa",
   website: "https://www.hayatsu.com.tr/",
   img: "/hayat.png",
   isBoycotted: "boykot",
   boycottReason: `Hayat Su markasının boykot edilmesinin temel nedeni, markanın sahibi olan Fransız gıda devi Danone'nin İsrail ile olan ticari ve finansal bağlantılarıdır. Danone, İsrail'in en büyük gıda işletmelerinden biri olan Strauss Group'un süt ürünleri üreten alt şirketi Strauss Dairies ile işbirliği içerisindedir ve şirkette %20'lik hisse sahibidir.

Strauss Group, İsrail'in en büyük gıda şirketlerinden biri olarak, gayrimeşru İsrail yerleşimlerinde üretim yapmakta ve İsrail ekonomisine ciddi katkılar sağlamaktadır. Bu yerleşimler, uluslararası hukuka göre yasadışı kabul edilmekte ve Filistin topraklarının işgali anlamına gelmektedir. Danone'nin bu şirketle ortaklık yapması, İsrail'in işgal politikalarına dolaylı olarak destek sağlaması anlamına gelmektedir.

Ayrıca, Strauss Group'un İsrail askeri birimlerine destek ve malzeme tedariki sağladığı belirtilmektedir. Bu durum, Danone'nin İsrail'in askeri operasyonlarına da dolaylı olarak katkıda bulunduğu anlamına gelmektedir. Danone ayrıca, İsrailli süt firması Tara ile birlikte İsrailli Wilk'e yaklaşık 12,5 milyon NIS tutarında bir yatırıma öncülük etmektedir.

Bu ticari ve finansal bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Danone'ye ait tüm markaları boykot etmeyi bir sorumluluk olarak görmektedir. Hayat Su da bu kapsamda boykot listesinde yer almaktadır. Alternatif ürünlere yönelmek daha sağlıklı olacaktır.`,
   alternative_products: [
    "hamidiye",
    "beysu",
    "sultan",
    "saka",
    "buzdagi",
    "kizilay",
    "ozkaynak",
    "ceysu",
    "sarikiz",
    "beypazari",
   ],
  },
  {
   name: "Akmina",
   slug: "akmina",
   ctgry: "İçecek",
   foundedYear: 1999,
   founder: "Danone Hayat İçecek",
   owner: "Danone Group",
   description: `Akmina Maden Suyu, Türkiye'de Danone Hayat İçecek tarafından üretilen ve doğal mineralli su segmentinde hizmet veren bir markadır. Marka, Türkiye'nin maden suyu pazarında önemli bir konuma sahiptir ve tüketicilere doğal mineralli suyun ferahlatıcı tadını sunmaktadır.

Akmina'nın ürünleri, Bolu ve çevresindeki kaynaklardan elde edilen doğal sular kullanılarak şişelenmektedir. Bu bölge, zengin mineral içeriğine sahip doğal su kaynaklarıyla tanınmakta ve Akmina'nın kalitesinin temelini oluşturmaktadır. Marka, bu doğal kaynaklardan elde ettiği suyu modern teknoloji ve hijyen standartlarıyla işleyerek tüketicilere sunmaktadır.

Akmina, hem sade hem de gazlı seçenekleriyle geniş bir tüketici kitlesine hitap etmektedir. Marka, özellikle sağlık bilincine sahip tüketiciler arasında popülerlik kazanmaktadır. Doğal mineralli suyun sağlığa faydaları ve ferahlatıcı özellikleri, Akmina'nın pazarlama stratejisinin temelini oluşturmaktadır.

Marka, Danone'nin Türkiye'deki su ve içecek portföyünün önemli bir parçasıdır. Danone, uluslararası bir gıda ve içecek şirketi olarak, dünya genelinde birçok ülkede faaliyet göstermekte ve farklı içecek kategorilerinde çeşitli markalara sahiptir. Akmina, bu küresel deneyim ve kalite standartlarıyla Türkiye pazarında tüketicilere güvenilir ve kaliteli bir mineralli su alternatifi sunmaktadır.

Akmina, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmakta ve tüketicilerin günlük içecek ihtiyacını karşılamaktadır. Marka, özellikle yemek masalarında ve günlük tüketimde tercih edilmektedir.`,
   country: "Türkiye & Fransa",
   website: "",
   img: "/akmina.png",
   isBoycotted: "boykot",
   boycottReason: `Akmina Maden Suyu markasının boykot edilmesinin temel nedeni, markanın sahibi olan Fransız gıda devi Danone'nin İsrail ile olan ticari ve finansal bağlantılarıdır. Danone, İsrail'in en büyük gıda işletmelerinden biri olan Strauss Group'un süt ürünleri üreten alt şirketi Strauss Dairies ile işbirliği içerisindedir ve şirkette %20'lik hisse sahibidir.

Strauss Group, İsrail'in en büyük gıda şirketlerinden biri olarak, gayrimeşru İsrail yerleşimlerinde üretim yapmakta ve İsrail ekonomisine ciddi katkılar sağlamaktadır. Bu yerleşimler, uluslararası hukuka göre yasadışı kabul edilmekte ve Filistin topraklarının işgali anlamına gelmektedir. Danone'nin bu şirketle ortaklık yapması, İsrail'in işgal politikalarına dolaylı olarak destek sağlaması anlamına gelmektedir.

Gayrimeşru İsrail yerleşimlerinde üretim yapan ve İsrail ekonomisine ciddi katkılar sağlayan şirketlerle ortaklık yapmak, Danone'yi boykot listelerine dahil eden temel nedenlerden biridir. Bu ticari bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Danone'ye ait tüm markaları boykot etmeyi bir sorumluluk olarak görmektedir. Akmina da bu kapsamda boykot listesinde yer almaktadır.`,
   alternative_products: ["kizilay", "beypazari", "sarikiz", "ozkaynak"],
  },
  {
   name: "Volvic",
   slug: "volvic",
   ctgry: "İçecek",
   foundedYear: 1935,
   founder: "Yerel Girişimciler",
   owner: "Danone Group",
   description: `Volvic, Fransa merkezli ünlü bir doğal mineralli su markasıdır. Marka, 1938 yılında Fransa'nın Clermont-Ferrand kenti yakınlarındaki Auvergne volkanik bölgesinde kurulmuştur. Volvic, dünya çapında tanınan premium su markalarından biri olarak öne çıkmaktadır.

Markanın en önemli özelliklerinden biri, suyunun Fransa'da bulunan Clairvic kaynaklarından elde edilmesi ve yaklaşık 6.000 yıllık volkanik kaya katmanlarından geçerek doğal bir filtrasyon sürecinden geçmesidir. Bu bölgedeki volkanik kaya katmanlarından süzülen su, doğal mineraller açısından zengin olduğu için Volvic'in temel kaynağını oluşturur. Bu doğal filtrasyon süreci, suyun saflığını ve mineral içeriğini korumasını sağlamaktadır.

Volvic, doğallığı ve saf içeriğiyle tanınmış olup dünyanın birçok ülkesinde satılmaktadır. Marka, özellikle Avrupa, Kuzey Amerika ve Asya pazarlarında güçlü bir varlığa sahiptir. Volvic, 1992 yılında Fransız gıda devi Danone Group tarafından satın alınmıştır ve hâlen Danone'nin içecek markaları arasında yer almaktadır.

Marka, sade suyun yanı sıra aromalı su çeşitleri de sunmaktadır. Volvic, özellikle sağlık bilincine sahip tüketiciler arasında popülerlik kazanmaktadır. Doğal mineralli suyun sağlığa faydaları ve ferahlatıcı özellikleri, Volvic'in pazarlama stratejisinin temelini oluşturmaktadır.

Volvic, sürdürülebilirlik konusunda da önemli adımlar atmaktadır. Marka, çevre dostu ambalajlama ve su kaynaklarının korunması konusunda çeşitli projeler yürütmektedir. Volvic, dünya çapında tanınan bir premium su markası olarak, kalite ve doğallık konusundaki itibarını korumaktadır.`,
   country: "Fransa",
   website: "https://www.volvic.com/",
   img: "/volvic.png",
   isBoycotted: "boykot",
   boycottReason: `Volvic markasının boykot edilmesinin en önemli nedeni, ana şirketi Danone'nin İsrail ile olan ticari ve finansal bağlantılarıdır. Danone, İsrail'in en büyük gıda işletmelerinden biri olan Strauss Group'un süt ürünleri üreten alt şirketi Strauss Dairies ile işbirliği içerisindedir ve şirkette %20'lik hisse sahibidir.

Strauss Group, İsrail'in en büyük gıda şirketlerinden biri olarak, gayrimeşru İsrail yerleşimlerinde üretim yapmakta ve İsrail ekonomisine ciddi katkılar sağlamaktadır. Bu yerleşimler, uluslararası hukuka göre yasadışı kabul edilmekte ve Filistin topraklarının işgali anlamına gelmektedir. Danone'nin bu şirketle ortaklık yapması, İsrail'in işgal politikalarına dolaylı olarak destek sağlaması anlamına gelmektedir.

Ayrıca, Strauss Group'un İsrail askeri birimlerine destek ve malzeme tedariki sağladığı belirtilmektedir. Bu durum, Danone'nin İsrail'in askeri operasyonlarına da dolaylı olarak katkıda bulunduğu anlamına gelmektedir. Danone ayrıca, İsrailli süt firması Tara ile birlikte İsrailli Wilk'e yaklaşık 12,5 milyon NIS tutarında bir yatırıma öncülük etmektedir.

Bu ticari ve finansal bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Danone'ye ait tüm markaları boykot etmeyi bir sorumluluk olarak görmektedir. Volvic de bu boykot çağrılarından nasibini almıştır. Tüketiciler, Volvic ürünlerini satın almayarak Danone'nin İsrail'e sağladığı desteği zayıflatmayı ve bu şekilde Filistin'e olan dayanışmalarını göstermeyi hedeflemektedirler.`,
   alternative_products: [
    "kizilay",
    "beypazari",
    "sarikiz",
    "ozkaynak",
    "buzdagi",
   ],
  },
  {
   name: "Evian",
   slug: "evian",
   ctgry: "İçecek",
   foundedYear: 1826,
   founder: "Cachat Ailesi",
   owner: "Danone Group",
   description: `Evian, Cenevre Gölü'nün güney kıyısında, Évian-les-Bains yakınlarındaki çeşitli kaynaklardan gelen bir şişelenmiş su markasıdır. Marka, 1826 yılında Cachat ailesi tarafından keşfedilmiş ve dünya çapında tanınan premium su markalarından biri haline gelmiştir. Evian, yüksek mineral içeriği ve saflığı ile küresel çapta tanınmıştır.

Markanın en önemli özelliklerinden biri, suyunun Fransa'nın Alp Dağları'ndan gelen doğal kaynaklardan elde edilmesidir. Bu kaynaklar, binlerce yıllık doğal filtrasyon sürecinden geçerek mineral açısından zengin ve saf bir su sağlamaktadır. Evian'ın suyu, özellikle kalsiyum, magnezyum ve potasyum gibi mineraller açısından zengindir.

Evian, günümüzde Fransız çok uluslu şirket Danone'ye aittir. Şişelenmiş suya ek olarak Danone, Evian adını bir dizi organik cilt bakım ürünü ve Fransa'daki lüks bir tatil yeri için de kullanmaktadır. Evian, Fransa, Amerika Birleşik Devletleri, Belçika, İsviçre ve Rusya gibi birçok ülkede satılmakta olup, Türkiye'de ise Migros tarafından satılmaktadır.

Marka, özellikle lüks segmentte konumlandırılmıştır ve premium restoranlar, oteller ve özel etkinliklerde tercih edilmektedir. Evian, dünya çapında tanınan bir premium su markası olarak, kalite ve doğallık konusundaki itibarını korumaktadır. Marka, sürdürülebilirlik konusunda da önemli adımlar atmaktadır ve çevre dostu ambalajlama kullanmaktadır.

Evian, özellikle sağlık bilincine sahip tüketiciler ve lüks yaşam tarzını benimseyen bireyler arasında popülerlik kazanmaktadır. Marka, doğal mineralli suyun sağlığa faydaları ve ferahlatıcı özellikleri ile pazarlanmaktadır.`,
   country: "Fransa",
   website: "https://www.evian.com/en_us",
   img: "/",
   isBoycotted: "boykot",
   boycottReason: `Evian'ın boykot edilmesinin temel nedeni, markanın sahibi olan Danone şirketinin İsrail ile olan ticari ve finansal bağlantılarıdır. Danone'nin bu bağlantıları şunlardır:

1. Strauss Group Ortaklığı: Danone, İsrail'in en büyük gıda işletmelerinden Strauss Group'un süt ürünleri üreten alt şirketi Strauss Dairies ile iş birliği içerisindedir ve şirkette %20'lik hisse sahibidir. Strauss Group'un aynı zamanda İsrail askeri birimlerine destek ve malzeme tedariki sağladığı belirtilmektedir.

2. Yatırım: Danone ayrıca, İsrailli süt firması Tara ile birlikte İsrailli Wilk'e yaklaşık 12,5 milyon NIS tutarında bir yatırıma öncülük etmektedir.

Gayrimeşru İsrail yerleşimlerinde üretim yapan ve İsrail ekonomisine ciddi katkılar sağlayan şirketlerle ortaklık yapmak, Danone'yi eleştirilerin hedefi haline getirmiştir. Bu yerleşimler, uluslararası hukuka göre yasadışı kabul edilmekte ve Filistin topraklarının işgali anlamına gelmektedir. Danone'nin bu şirketlerle ortaklık yapması, İsrail'in işgal politikalarına dolaylı olarak destek sağlaması anlamına gelmektedir.

Bu ticari ve finansal bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Danone'ye ait tüm markaları boykot etmeyi bir sorumluluk olarak görmektedir. Evian da bu kapsamda boykot listesinde yer almaktadır.`,
   alternative_products: [
    "kizilay",
    "beypazari",
    "sarikiz",
    "ozkaynak",
    "buzdagi",
    "ceysu",
   ],
  },
  {
   name: "Abant",
   slug: "abant",
   ctgry: "İçecek",
   foundedYear: 2008,
   founder: "Kaya Holding",
   owner: "Kaya Holding",
   description: `Abant Su, Türkiye merkezli bir doğal kaynak suyu markasıdır ve adını Bolu'daki Abant Gölü çevresindeki doğal kaynaklardan almaktadır. Marka, Türkiye'nin su sektöründeki önemli markalarından biri olarak öne çıkmaktadır. Abant Su, hijyenik ve modern üretim tesislerinde şişelenen suyu tüketicilere sunmakta ve sağlıklı içme suyunu geniş kitlelere ulaştırmayı amaçlamaktadır.

Markanın en önemli özelliklerinden biri, suyunun Bolu'daki Abant Gölü çevresindeki doğal kaynaklardan elde edilmesidir. Bu bölge, zengin mineral içeriğine sahip doğal su kaynaklarıyla tanınmakta ve Abant Su'nun kalitesinin temelini oluşturmaktadır. Marka, bu doğal kaynaklardan elde ettiği suyu modern teknoloji ve hijyen standartlarıyla işleyerek tüketicilere sunmaktadır.

Abant Su, farklı hacimlerde pet şişe ve damacana su seçenekleri ile Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında dağıtılmaktadır. Marka, Kaya Holding bünyesinde faaliyet göstermekte olup tamamen Türkiye merkezli bir üretim ve dağıtım ağına sahiptir. Kaya Holding, Türkiye'nin önde gelen holdinglerinden biri olarak, turizm, gıda ve içecek sektörlerinde faaliyet göstermektedir.

Marka, özellikle ev tipi kullanımda tercih edilmekte ve Türkiye genelinde yaygın bir dağıtım ağına sahiptir. Abant Su, kalite ve sağlık odaklı üretim anlayışıyla Türkiye su pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://abantsu.com.tr/",
   img: "/abant.png",
   isBoycotted: "boykot",
   boycottReason: `Kaya Holding'e ait Abant Su, İsrailli şarkıcı Linet'i Ramazan Bayramı'nın ilk gününde sahneye davet etmesi gerekçesiyle boykot listesine alınmıştır. Sosyal medya platformu BoykotDedektifi, markanın boykot kapsamına dahil edildiğini duyurmuştur.

Boykotun gerekçesi, Abant Su'nun sahibi Burhanettin Kaya'nın otellerinde, İsrail vatandaşı ve İsrail için askerlik yapmış olan Linet'in, Hamas'ı 'terörist' olarak tanımlamasıyla bilinen bir sanatçıyı, Müslümanlar için özel olan Ramazan Bayramı'nın ilk gününde konser vermesi olarak gösterilmektedir. Bu durum, Filistin davasına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından büyük tepkiyle karşılanmıştır.

Ramazan Bayramı, Müslümanlar için özel bir öneme sahip olan dini bir bayramdır. Bu bayramın ilk gününde, İsrail vatandaşı ve İsrail ordusu için askerlik yapmış bir sanatçının sahneye çıkarılması, Müslüman tüketicilerin hassasiyetlerini yaralamıştır. Bu gelişme, tüketiciler arasında markaya yönelik tepki ve boykot çağrılarını artırmıştır.

Bu nedenle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Abant Su markasını boykot etmeyi bir sorumluluk olarak görmektedir. Alternatif ürünlere yönelmek daha sağlıklı olacaktır.`,
   alternative_products: [
    "hamidiye",
    "beysu",
    "sultan",
    "saka",
    "buzdagi",
    "kizilay",
    "ozkaynak",
    "ceysu",
    "sarikiz",
    "beypazari",
   ],
  },
  {
   name: "AyranSu",
   slug: "ayransu",
   ctgry: "İçecek",
   foundedYear: 2012,
   founder: "AYRAN SU San. Ve Tic. A.Ş.",
   owner: "AYRAN SU San. Ve Tic. A.Ş.",
   description: `AYRAN SU San. Ve Tic. A.Ş., Türkiye'nin Osmaniye ilinde, Bahçe ilçesi Gökmustafalı Köyü D‑400 karayolu üzerindeki tesislerinde faaliyet gösteren bir doğal kaynak suyu üreticisidir. Şirket, 2012 yılında “Ayran Su” markasıyla üretim lisansını almış ve modern üretim hattında üretime geçmiştir. 
     Firma, “doğal kaynak suyu” olarak pazarladığı ürünü hijyenik koşullarda şişeleyerek tüketicilere sunmayı hedeflemektedir. 
     Üretim sürecinde kalite kontrol ve modern dolum teknolojileri kullanımına önem verdiği belirtilmektedir. 
     AYRAN SU, Türkiye merkezli bir doğal kaynak suyu üreticisidir ve faaliyetleri tamamen Türkiye'de yürütülmektedir. Şirketin İsrail ile herhangi bir bağlantısı veya boykot ile ilişkisi bulunmamaktadır; üretim ve dağıtım tamamen yerli kaynaklar ve tesisler üzerinden yapılmaktadır. Marka, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır.

Ayran Su, özellikle ev tipi kullanımda tercih edilmekte ve Türkiye'nin yerli su markalarından biri olarak öne çıkmaktadır. Marka, kalite ve sağlık odaklı üretim anlayışıyla Türkiye su pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://ayransu.com.tr/",
   img: "/ayransu.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Sırmakeş",
   slug: "sirmakeş",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "Kaynaksu Kaynak Suları İşletmesi",
   owner: "Kaynaksu Kaynak Suları İşletmesi Tic. ve San. A.Ş.",
   description: `Sırmakeş, Türkiye'nin İstanbul/Beykoz bölgesinde yer alan ve "Kaynaksu Kaynak Suları İşletmesi Tic. ve San. A.Ş." tarafından üretilen bir doğal kaynak suyu markasıdır. Markanın köklü bir geçmişi olup, İstanbul'a yakın doğayla iç içe bir vadide suyun çıkarılıp şişelenmesiyle faaliyet göstermektedir.

Markanın en önemli özelliklerinden biri, suyunun İstanbul'un doğal kaynaklarından elde edilmesi ve hijyenik koşullarda şişelenmesidir. Ürün yelpazesinde farklı hacimlerde pet şişe ve damacana su seçenekleri bulunmaktadır ve marka, "en üstün kalitede, hijyenik" üretim ilkesiyle pazarda yer almaktadır.

Sırmakeş, tamamen Türkiye merkezli bir marka olup faaliyetleri Türkiye sınırları içinde yürütülmektedir. Şirketin İsrail ile herhangi bir bağlantısı veya boykot ile ilişkisi bulunmamaktadır; üretim ve dağıtım tamamen yerli kaynaklar ve tesisler üzerinden yapılmaktadır. Marka, İstanbul ve çevresinde yaygın olarak bulunmakta ve tüketicilerin günlük su ihtiyacını karşılamaktadır.

Sırmakeş, özellikle İstanbul bölgesinde tercih edilmekte ve Türkiye'nin yerli su markalarından biri olarak öne çıkmaktadır. Marka, kalite ve sağlık odaklı üretim anlayışıyla Türkiye su pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://sirmakes.com.tr/ ",
   img: "/sirmakeş.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Hamidiye",
   slug: "hamidiye",
   ctgry: "İçecek",
   foundedYear: 1876,
   founder: "II. Abdülhamid",
   owner: "İstanbul Büyükşehir Belediyesi",
   description: `Hamidiye Su, II. Abdülhamid döneminde İstanbul'a çeşmeler aracılığıyla içme suyu dağıtımı amacıyla kurulmuş tarihi bir su markasıdır. Marka, Türkiye'nin en köklü su markalarından biri olarak öne çıkmaktadır ve Osmanlı İmparatorluğu döneminden gelen bir geçmişe sahiptir.

1876 yılında II. Abdülhamid döneminde kurulan Hamidiye Su, İstanbul'a çeşmeler aracılığıyla içme suyu dağıtımı yapmak amacıyla hayata geçirilmiştir. Bu tarihi geçmiş, markanın köklü bir geleneğe sahip olduğunu göstermektedir. 1979 yılından itibaren ise İstanbul Büyükşehir Belediyesi tarafından anonim şirket statüsünde işletilen tesislerde üretim yapılmaktadır.

İstanbul Büyükşehir Belediyesi iştiraki olarak faaliyet gösteren Hamidiye Kaynak Suları A.Ş., İstanbul'un doğal kaynaklarından elde edilen içme suyunu modern ve hijyenik üretim tesislerinde şişeleyerek tüketicilere sunmaktadır. Marka, farklı hacimlerde pet şişe ve damacana seçenekleri ile Türkiye genelinde yaygın şekilde dağıtılmakta ve günlük hayatın her anında güvenle tercih edilen bir içme suyu markasıdır.

Hamidiye Su, tamamen Türkiye merkezli bir marka olup, faaliyetleri Türkiye sınırları içinde yürütülmektedir. Şirketin İsrail ile herhangi bir bağlantısı veya boykot ile ilişkisi bulunmamaktadır; üretim ve dağıtım tamamen yerli kaynaklar ve tesisler üzerinden yapılmaktadır. Marka, özellikle İstanbul ve çevresinde yaygın olarak bulunmakta ve tüketicilerin günlük su ihtiyacını karşılamaktadır.

Hamidiye Su, tarihi geçmişi ve kaliteli üretimiyle Türkiye su pazarında önemli bir konuma sahiptir. Marka, Osmanlı döneminden gelen geleneksel değerleri modern teknolojiyle birleştirerek tüketicilere güvenilir bir içme suyu sunmaktadır.`,
   country: "Türkiye",
   website: "https://hamidiye.istanbul/",
   img: "/hamidiye.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Beysu",
   slug: "beysu",
   foundedYear: null,
   ctgry: "İçecek",
   founder: "Konya Büyükşehir Belediyesi",
   owner: "Konya Büyükşehir Belediyesi",
   description: `Beysu, Türkiye merkezli bir içme suyu markasıdır ve Konya Büyükşehir Belediyesi güvencesiyle, Beyşehir ilçesi Doğanbey Mahallesi'ndeki yenilenmiş ve ileri teknolojili üretim tesisinde şişeleme yapmaktadır. Marka, doğal kaynaklardan elde edilen suyu yüksek kalite standartlarında tüketiciye sunmayı hedeflemektedir.

Markanın en önemli özelliklerinden biri, suyunun Konya'nın doğal kaynaklarından elde edilmesi ve hijyenik koşullarda şişelenmesidir. Beysu'nun öncelikleri arasında, ürünlerin hijyenik koşullarda üretilmesi ve paketlenmesi yer almaktadır. Bu sayede tüketiciler, sağlıklı ve güvenilir içme suyu deneyimi yaşamaktadır.

Marka, farklı hacimlerde pet şişe ve damacana seçenekleri sunarak Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarına ulaşmaktadır. Tamamen Türkiye merkezli bir marka olan Beysu'nun faaliyetleri yalnızca Türkiye sınırları içinde yürütülmektedir. Şirketin İsrail ile herhangi bir bağlantısı bulunmamakta ve boykot konularıyla ilişkisi söz konusu değildir.

Beysu, özellikle Konya ve çevresinde tercih edilmekte ve Türkiye'nin yerli su markalarından biri olarak öne çıkmaktadır. Marka, kalite ve sağlık odaklı üretim anlayışıyla Türkiye su pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://beysu.com.tr/",
   img: "/beysu.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Sultan",
   slug: "sultan",
   foundedYear: null,
   ctgry: "İçecek",
   founder: "Sedef Gıda",
   owner: "Sedef Gıda Mad. Paz. ve Tic. Ltd. Şti.",
   description: `Sultan Su, Türkiye merkezli bir doğal kaynak ve maden suyu markasıdır. Marka, modern üretim tesislerinde hijyenik koşullarda şişelenen “Sultan Doğal Kaynak Suları” ve “Sultan Zengin Mineralli Maden Suları” gibi ürün gruplarıyla faaliyet göstermektedir. Sultan Su, Sedef Gıda Mad. Paz. ve Tic. Ltd. Şti. firması tarafından üretilen bir içme suyu markasıdır.
     Markanın üretim tesislerinden biri, Uludağ bölgesindeki İnegöl/Bursa’daki fabrikadır; 60.000 m² arazi içinde yer almakta olup 35.000 m² kapalı alana sahiptir.
     Sultan Su, farklı hacimlerde pet şişe ve damacana su seçenekleri ile Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında tüketicilere ulaşmaktadır. Marka tamamen Türkiye merkezli olup, faaliyetleri Türkiye sınırları içinde yürütülmektedir; şirketin İsrail ile herhangi bir bağlantısı veya boykot ile ilişkisi bulunmamaktadır.

Sultan Su, özellikle maden suyu segmentinde güçlü bir konuma sahiptir ve tüketicilere hem doğal kaynak suyu hem de zengin mineralli maden suyu seçenekleri sunmaktadır. Marka, kalite ve sağlık odaklı üretim anlayışıyla Türkiye su pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://sultanicecek.com.tr/tr",
   img: "/sultan.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Saka",
   slug: "saka",
   foundedYear: null,
   ctgry: "İçecek",
   founder: "DyDo Drinco",
   owner: "DyDo Drinco (Japonya)",
   description: `Saka Su, Türkiye merkezli bir doğal kaynak ve mineralli su markasıdır. Ülker tarafından Türkiye'de satış ve dağıtımı yapılan Saka Su'nun sahibi, Japon şirket DyDo Drinco'dur. Japon şirketin herhangi bir destek veya olumsuz açıklaması bulunmamaktadır.

Markanın en önemli özelliklerinden biri, ürünlerinin Türkiye'nin doğal kaynaklarından elde edilmesi ve hijyenik koşullarda şişelenmesidir. Marka, modern üretim tesislerinde hijyenik koşullarda şişelenen doğal mineralli sular sunmaktadır. Saka Su, farklı hacimlerde pet şişe ve damacana su seçenekleri ile Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında tüketicilere ulaşmaktadır.

Saka Su, özellikle maden suyu segmentinde güçlü bir konuma sahiptir ve tüketicilere doğal mineralli su seçenekleri sunmaktadır. Marka, kalite ve sağlık odaklı üretim anlayışıyla Türkiye su pazarında önemli bir konuma sahiptir. Ülker'in Türkiye'deki dağıtım ağı sayesinde, Saka Su geniş bir tüketici kitlesine ulaşmaktadır.`,
   country: "Türkiye & Japonya",
   website: "https://www.sakasu.com.tr/ ",
   img: "/saka.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Buzdağı",
   slug: "buzdagi",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "Yerel Girişimciler",
   owner: "Seli Kaynak ve Meyve Suları İşletmeleri San. Tic. A.Ş.",
   description: `Buzdağı Su, Türkiye’de faaliyet gösteren bir doğal mineralli su markasıdır. Kaynağı Keremali Dağları’nın batı uzantısında, Geyve ilçesi (Sakarya) sınırlarında yer alan Doğançay Köyü’nden gelmektedir. Marka, pH 7.1 değerinde ve kalsiyum bakımından “yüksek kalsiyum” kategorizasyonunda bir su olarak tanımlanmaktadır. Üretimi, dolumu ve dağıtımı tamamen Türkiye sınırları içinde gerçekleşmektedir.
     Sağlık Bakanlığı tarafından yayınlanan raporda birinci sıraya yerleşerek ülkemizdeki en kaliteli içme suyu markası kabul edilen Buzdağı Su, güvenle tercih edilebilecek bir markadır. Şirket, tamamen yerli sermaye ile faaliyet göstermekte olup boykot listelerinde yer almamaktadır.       Şirketin adı "Seli Kaynak ve Meyve Suları İşletmeleri San. Tic. A.Ş." olarak geçmektedir.

Buzdağı Su, özellikle yüksek kalsiyum içeriğiyle öne çıkmakta ve sağlık bilincine sahip tüketiciler arasında popülerlik kazanmaktadır. Marka, kalite ve sağlık odaklı üretim anlayışıyla Türkiye su pazarında önemli bir konuma sahiptir. Buzdağı Su, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır.`,
   country: "Türkiye",
   website: "https://www.buzdagisu.com.tr/",
   img: "/buzdagi.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Kızılay",
   slug: "kizilay",
   ctgry: "İçecek",
   foundedYear: 1868,
   founder: "Türkiye Hilâl-i Ahmer Cemiyeti",
   owner: "Türk Kızılay Derneği",
   description: `Kızılay Maden Suyu, Türkiye'de Kızılay tarafından üretilen ve doğal mineralli su segmentinde hizmet veren bir markadır. Ürünleri, Türkiye’nin çeşitli kaynaklarından elde edilen doğal sular kullanılarak şişelenir ve tüketicilere ferahlatıcı bir içecek alternatifi sunar. Kızılay Maden Suyu, hem sade hem de gazlı seçenekleriyle piyasada yer almaktadır.
     Kızılay, Türkiye Hilâl-i Ahmer Cemiyeti’nin devamı niteliğinde faaliyet gösteren ve sağlık ile insani yardım alanında hizmet veren köklü bir kurumdur. Sadece maden suyu değil, aynı zamanda çeşitli gıda ve içecek ürünleri de üreten Kızılay, hem sosyal sorumluluk hem de kaliteli ürün sunma anlayışıyla tüketicilere güvenilir seçenekler sağlamaktadır.
     Kızılay, Türkiye Hilâl-i Ahmer Cemiyeti'nin devamı niteliğinde faaliyet gösteren ve sağlık ile insani yardım alanında hizmet veren köklü bir kurumdur. 1868 yılında kurulan Türk Kızılay Derneği, Türkiye'nin en köklü sivil toplum kuruluşlarından biridir ve dünya çapında tanınan bir yardım kuruluşudur. Sadece maden suyu değil, aynı zamanda çeşitli gıda ve içecek ürünleri de üreten Kızılay, hem sosyal sorumluluk hem de kaliteli ürün sunma anlayışıyla tüketicilere güvenilir seçenekler sağlamaktadır.

Marka, Kızılay bünyesinde faaliyet göstermekte olup tamamen Türkiye merkezli bir üretim ve dağıtım ağına sahiptir. Şirketin İsrail ile herhangi bir bağlantısı veya boykot ile ilişkisi bulunmamaktadır. Kızılay Maden Suyu, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır.

Kızılay Maden Suyu, özellikle sosyal sorumluluk ve kalite odaklı yaklaşımıyla tüketiciler arasında popülerlik kazanmaktadır. Marka, Kızılay'ın köklü geçmişi ve güvenilir kurum kimliğiyle Türkiye su pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://www.kizilayicecek.com.tr/",
   img: "/kizilay.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Özkaynak",
   slug: "ozkaynak",
   ctgry: "İçecek",
   foundedYear: 1968,
   founder: "Yerel Girişimciler",
   owner: "Özkaynak Su Şirketler Grubu",
   description: `Özkaynak Su, Türkiye merkezli bir doğal kaynak ve mineralli maden suyu markasıdır. 1968 yılında faaliyete başlamış, 1972’de Bursa’da maden suyu tesisini kurmuştur. Marka; tamamen yerli öz sermaye ile kurulmuş olan Özkaynak Su Şirketler Grubu bünyesinde üretim ve dağıtım faaliyetlerini yürütmektedir.
     Özkaynak Su, ürünlerini "kaynağından çıkarılmasından ambalajlanmasına, depolanmasına, taşınmasına kadar" tüm süreci kontrol ederek sunmayı amaçlamaktadır. Yeni bir halka arz ya da yurt dışı büyük ortağına dair güncel bilgi bulunmamaktadır; yani şu an için uluslararası bir satın alma ya da yabancı ortaklık nedeniyle tüketim boykotuyla ilişkilendirilmiş bir durum görünmemektedir.

Özkaynak Su, özellikle maden suyu segmentinde güçlü bir konuma sahiptir ve tüketicilere hem doğal kaynak suyu hem de zengin mineralli maden suyu seçenekleri sunmaktadır. Marka, kalite ve sağlık odaklı üretim anlayışıyla Türkiye su pazarında önemli bir konuma sahiptir. Özkaynak Su, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır.`,
   country: "Türkiye",
   website: "https://www.ozkaynak.com/",
   img: "/ozkaynak.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Dost",
   slug: "dost",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "Ülker Grubu",
   owner: "BİM (Groupe Lactalis üretimi)",
   description: `Dost markası, Türkiye merkezli bir süt ve süt ürünleri markasıdır. Marka, pastörize süt, yoğurt, ayran, tereyağı ve peynir gibi geniş bir ürün yelpazesi sunar. 

Dost markası, Türkiye'nin önde gelen perakende zincirlerinden BİM'in özel markalarından biridir. Bu nedenle ürünleri yalnızca BİM mağazalarında satılmaktadır. Marka, özellikle uygun fiyatlı süt ürünleri arayan tüketiciler için popüler bir seçenektir.

Dost markası, başlangıçta Ülker Grubu tarafından üretilen bu marka, sonradan BİM market zinciri tarafından satın alınmıştır. Ancak, 2015 yılında Ülker Grubu, Ak Gıda'yı Fransız şirketi Groupe Lactalis'e satmıştır. Dolayısıyla, şu anda Dost Süt'ün üretimi Groupe Lactalis tarafından yapılmaktadır. Groupe Lactalis dünya çapında bir süt ürünleri devi olup, Türkiye'de Ak Gıda'nın yanı sıra birçok ünlü markanın da sahibidir.

Dost markası, özellikle BİM müşterileri arasında popülerlik kazanmaktadır ve Türkiye genelinde yaygın olarak bulunmaktadır. Marka, kalite ve uygun fiyat dengesiyle Türkiye süt ürünleri pazarında önemli bir konuma sahiptir.`,
   country: "Fransa & Türkiye",
   website: "https://www.bim.com.tr ",
   img: "/dost.png",
   isBoycotted: "boykot",
   boycottReason: `Dost markasının boykot edilmesinin temel nedeni, markanın üretimini yapan Groupe Lactalis'in İsrail ile olan ticari ilişkileridir. Dost Süt'ün üretici firması bölgelere göre farklılık gösterebilmektedir. 

Bazı bölgelerde üretimi Ak Gıda tarafından yapılmaktadır ve bu nedenle bazı tüketiciler tarafından boykot edilmektedir. Ak Gıda, 2015 yılından bu yana Fransız şirketi Groupe Lactalis'e aittir ve bu şirketin İsrail ile olan ticari bağları nedeniyle boykot listelerinde yer almaktadır.

Groupe Lactalis'in İsrail ile olan ticari ilişkileri, şirketin İsrail ekonomisine katkıda bulunması anlamına gelmektedir. Bu durum, Filistin davasına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından büyük tepkiyle karşılanmaktadır. Bu nedenle, Groupe Lactalis tarafından üretilen Dost markası boykot listesinde yer almaktadır.

Satın almadan önce ambalajın arka kısmındaki üretici bilgilerini kontrol etmeyi unutmayın. Alternatif ürünlere yönelmek daha sağlıklı olacaktır.`,
   alternative_products: ["sutas", "pinar"],
  },
  {
   name: "İçim",
   slug: "icim",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "Ülker Grubu",
   owner: "Groupe Lactalis (Fransa)",
   description: `İçim, Türkiye'nin önde gelen gıda şirketlerinden Ak Gıda tarafından üretilen köklü bir süt ve süt ürünleri markasıdır. Markanın geniş bir ürün yelpazesi bulunmaktadır; bu yelpaze UHT süt, yoğurt, ayran, peynir ve tereyağı gibi temel süt ürünlerini kapsar.

İçim markasının kuruluş hikayesi, Ülker Grubu'nun süt ve süt ürünleri sektörüne girmesiyle başlamıştır. Ak Gıda, üretim kapasitesi ve hızlı büyümesiyle tanınan bir şirkettir. İçim markasının üreticisi olan Ak Gıda, uzun yıllar boyunca Ülker Grubu'na bağlı kalmış, ancak daha sonra önemli bir yabancı yatırımcıya satılmıştır.

İçim markasının günümüzdeki sahibi, Avrupa'nın en büyük gıda şirketlerinden biri olan Fransa merkezli Groupe Lactalis'tir. Lactalis, Ak Gıda'yı satın alarak Türkiye süt ve süt ürünleri pazarına girmiştir. Bu satın alma, Lactalis'in küresel genişleme stratejisinin bir parçasıdır ve şirketin Türkiye pazarındaki varlığını güçlendirmiştir.

İçim markası, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve güvenilirlik odaklı üretim anlayışıyla Türkiye süt ürünleri pazarında önemli bir konuma sahiptir.`,
   country: "Fransa & Türkiye",
   website: "https://www.icim.com.tr/",
   img: "/icim.png",
   isBoycotted: "boykot",
   boycottReason: `İçim markasının boykot edilmesinin temel nedeni, ana şirketi olan Fransa merkezli Groupe Lactalis'in ticari faaliyetleri ve İsrail ile ilişkilendirilen yatırımlarıdır.

Boykot çağrılarının temel nedenleri:

1. Groupe Lactalis Sahipliği: İçim, Lactalis grubuna ait bir marka haline geldikten sonra, bu küresel grubun İsrail ile olan ticari bağları nedeniyle boykot listelerine dahil edilmiştir. Groupe Lactalis'in İsrail ile olan ticari ilişkileri, şirketin İsrail ekonomisine katkıda bulunması anlamına gelmektedir.

2. Ticari İlişkilendirme: Bazı kaynaklar, ana şirketin (Groupe Lactalis) küresel çapta yürüttüğü ticari faaliyetlerin, İsrail ekonomisi ile ilişkilendirilen yatırımları içermesi nedeniyle boykot çağrılarına konu olduğunu belirtmektedir. Bu durum, Filistin davasına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından büyük tepkiyle karşılanmaktadır.

Bu ticari duruş nedeniyle İçim Süt markası, bağlı olduğu holdingin politikaları yüzünden boykot listelerinde yer almaktadır. Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Groupe Lactalis'in İsrail ile olan ticari bağları nedeniyle İçim'i boykot etmeyi bir sorumluluk olarak görmektedir.`,
   alternative_products: ["sutas", "pinar"],
  },
  {
   name: "Sütaş",
   slug: "sutas",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "Sütaş Ailesi",
   owner: "Sütaş Gıda Sanayi ve Ticaret A.Ş.",
   description: `Sütaş, Türkiye merkezli bir süt ve süt ürünleri üreticisidir ve tamamen yerli sermaye ile faaliyet göstermektedir. Marka, süt, yoğurt, ayran, peynir gibi geniş bir ürün yelpazesiyle Türkiye'nin çeşitli bölgelerine ürün sunmaktadır.

Sütaş'ın kuruluş hikayesi, Türkiye'nin süt ve süt ürünleri sektöründe yerli bir marka olarak öne çıkmasıyla başlamıştır. Şirket, bağımsız ve Türkiye merkezli bir şirket olduğu için uluslararası satın almalar veya yabancı ortaklıklar nedeniyle boykot listeleriyle ilişkilendirilmemektedir. Şirket, üretim ve dağıtım ağını tamamen Türkiye'de yürütmekte ve tüketicilere güvenilir, kaliteli süt ürünleri sağlamaktadır.

Sütaş, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve güvenilirlik odaklı üretim anlayışıyla Türkiye süt ürünleri pazarında önemli bir konuma sahiptir. Sütaş, özellikle yerli üretim ve kalite odaklı yaklaşımıyla tüketiciler arasında popülerlik kazanmaktadır.`,
   country: "Türkiye",
   website: "https://www.sutas.com.tr/",
   img: "/sutas.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Pınar",
   slug: "pinar",
   ctgry: "Yiyecek ve İçecek",
   foundedYear: 1973,
   founder: "Yaşar Holding",
   owner: "Yaşar Holding",
   description: `Pınar, Türkiye'de faaliyet gösteren köklü bir süt ve süt ürünleri markasıdır. Marka, Yaşar Holding bünyesinde yer almakta olup, süt, yoğurt, peynir, ayran gibi geniş bir ürün yelpazesine sahiptir. Ayrıca marka, süt ürünleri yanında içecek ve su kategorilerinde de etkin olarak yer almakta, örneğin Pınar Su ve diğer içecek gruplarına özel ürünler sunmaktadır.

Pınar'ın kuruluş hikayesi, Yaşar Holding'in süt ve süt ürünleri sektörüne girmesiyle başlamıştır. Marka, Türkiye'nin en köklü süt ürünleri markalarından biri olarak öne çıkmaktadır ve uzun yıllardır tüketicilere kaliteli ürünler sunmaktadır.

Pınar markasının tamamen yerli sermayeye dayandığı ve Türkiye merkezli üretim ve dağıtım ağına sahip olduğu belirtilmektedir. Ayrıca, bilinen bir uluslararası ortaklık ya da satın alma sonucu oluşan yabancı hâkim ortaklık nedeniyle boykotla ilişkilendirilmiş bir durumu bulunmamaktadır.

Pınar, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve güvenilirlik odaklı üretim anlayışıyla Türkiye süt ürünleri pazarında önemli bir konuma sahiptir. Pınar, özellikle yerli üretim ve kalite odaklı yaklaşımıyla tüketiciler arasında popülerlik kazanmaktadır.`,
   country: "Türkiye",
   website: "https://www.pinar.com.tr/default.aspx ",
   img: "/pinar.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Redbull",
   slug: "redbull",
   ctgry: "İçecek",
   foundedYear: 1987,
   founder: "Dietrich Mateschitz, Chaleo Yoovidhya",
   owner: "Red Bull GmbH",
   description: `Red Bull, merkezi Avusturya olan ve 1987 yılında Dietrich Mateschitz ile Chaleo Yoovidhya tarafından kurulan dünyaca ünlü bir enerji içeceği markasıdır. Marka, "Red Bull gives you wings" (Red Bull kanatlandırır) sloganıyla tanınır ve enerji, dayanıklılık ve performans odaklı içecekleriyle global bir fenomen hâline gelmiştir.

Red Bull'un kuruluş hikayesi, Avusturyalı iş insanı Dietrich Mateschitz'in Tayland'a yaptığı bir seyahat sırasında, yerel bir enerji içeceği olan Krating Daeng'i keşfetmesiyle başlamıştır. Mateschitz, bu içeceği Avrupa pazarına uyarlayarak Red Bull'u yaratmış ve dünya çapında bir başarı hikayesi ortaya çıkarmıştır.

Red Bull yalnızca bir içecek markası değil, aynı zamanda spor, müzik ve ekstrem etkinlikler dünyasında da güçlü bir markadır. Formula 1'den futbol kulüplerine, e-spor ve uçuş etkinliklerine kadar geniş bir sponsorluk ağıyla genç ve dinamik bir marka kimliği oluşturmuştur. Red Bull'un spor sponsorlukları, markanın global tanınırlığını artırmış ve tüketicilerle güçlü bir bağ kurmasını sağlamıştır.

Marka, özellikle genç tüketiciler ve aktif yaşam tarzına sahip bireyler arasında popülerlik kazanmaktadır. Red Bull, dünya çapında 170'den fazla ülkede satılmakta ve yıllık milyarlarca kutu tüketilmektedir. Marka, enerji içeceği pazarında lider konumda olup, pazara yeni giren rakiplere karşı güçlü bir rekabet avantajına sahiptir.`,
   country: "Avusturya",
   website: "https://www.redbull.com/tr-tr/",
   img: "/redbull.png",
   isBoycotted: "boykot",
   boycottReason: `Red Bull'un boykot edilmesinin temel nedeni, markanın İsrail pazarında aktif şekilde faaliyet göstermesidir. Red Bull, Avusturya merkezli bir enerji içeceği markası olmasına rağmen, İsrail pazarında güçlü bir varlığa sahiptir.

Markanın İsrail'deki varlığı, resmi Instagram hesapları üzerinden İsrailli tüketicilerle süregelen etkileşimler, ürün tanıtımları, etkinlikler ve sponsorluklar aracılığıyla açıkça görülmektedir. Bu dijital faaliyetler, Red Bull'un ülkedeki operasyonlarının sürdüğünü ve markanın İsrail'e olan bağlılığını göstermektedir.

Red Bull'un İsrail'deki ticari faaliyetleri, etik ve insani değerler açısından tartışma konusu olmaktadır. Şirket, yalnızca enerji içeceği alanında değil, Red Bull MOBILE hizmetleriyle telekomünikasyon sektöründe de İsrail'deki varlığını genişletmiştir. Bu girişim, markanın İsrailli tüketicilerle daha güçlü bağlar kurma isteğini ortaya koymaktadır.

Ancak, Red Bull'un İsrail'de faaliyetlerini sürdürmesi, bölgede yaşanan insan hakları ihlalleri ve adaletsizlikler karşısında sessiz kalındığı şeklinde değerlendirilmektedir. Bu nedenle, Red Bull'un İsrail'deki etkinliklerini desteklemek, dolaylı olarak bu ihlallere ortak olmak anlamına gelebilir. Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, Red Bull'u boykot etmeyi bir sorumluluk olarak görmektedir.`,
   alternative_products: ["juss", "uludag"],
  },
  {
   name: "Didi",
   slug: "didi",
   ctgry: "İçecek",
   foundedYear: 1983,
   founder: "Çaykur (Çay İşletmeleri Genel Müdürlüğü)",
   owner: "Tarım ve Orman Bakanlığı",
   description: `Didi, Çaykur tarafından üretilen meyve aromalı soğuk çay ve gazsız içecekler markasıdır. Türkiye'de çeşitli aromalarla tüketiciye sunulmakta ve özellikle gençler arasında tercih edilmektedir.

Didi'nin kuruluş hikayesi, Çaykur'un 1983 yılında kurulmasıyla başlamıştır. Çaykur, Tarım ve Orman Bakanlığına bağlı, sermayesinin tamamı devlete ait olan çay üretimi, ithalatı ve ihracatı yapan Türkiye'nin köklü ve güvenilir kamu kuruluşlarından biridir. Didi markası, Çaykur'un portföyünde yer alan %100 yerli bir üründür ve herhangi bir yabancı ortaklık veya sahiplik içermemektedir.

Marka, ferahlatıcı ve tatlı meyve aromalarıyla içecek pazarında kendine yer edinmiştir. Didi, özellikle genç tüketicilere hitap eden modern ve dinamik bir marka kimliğine sahiptir. Çaykur'un kaliteli çay üretim deneyimi ve güvenilir kurum kimliği, Didi markasının güvenilirliğini artırmaktadır.

Didi ile ilgili olarak uluslararası veya siyasi bir boykot çağrısı bulunmamaktadır. Şirketin faaliyetleri tamamen Türkiye sınırları içinde yürütülmektedir ve çalıntı topraklar veya uluslararası hukuka aykırı yerleşimlerle bağlantısı yoktur. Didi, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır.`,
   country: "Türkiye",
   website: "https://www.caykur.gov.tr/Pages/Detay/UrunDetay.aspx?ItemId=5",
   img: "/didi.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Juss",
   slug: "juss",
   ctgry: "İçecek",
   foundedYear: 1997,
   founder: "Oğuz Holding",
   owner: "Oğuz Holding",
   description: `Juss, Oğuz Holding bünyesinde üretilen bir meyve suyu ve soğuk çay markasıdır. Çeşitli meyve aromalarıyla tüketicilere sunulan Juss ürünleri, Türkiye genelindeki marketlerde ve farklı satış noktalarında kolaylıkla bulunabilmektedir.

Juss'un kuruluş hikayesi, Oğuz Holding'in içecek sektörüne giriş yapmasıyla başlamıştır. Marka, başlangıçta meyve suyu üretimiyle pazara giriş yapmış ve zamanla soğuk çay kategorisine de genişlemiştir. Oğuz Holding, Türkiye'nin önde gelen gıda ve içecek şirketlerinden biri olarak, kaliteli üretim ve güvenilir marka kimliğiyle tanınmaktadır.

Marka, özellikle geniş ürün çeşitliliği ve günlük tüketime uygun ambalaj seçenekleriyle öne çıkmaktadır. Juss, tamamen Türkiye merkezli üretim ve dağıtım ağına sahip olup, bilinen bir boykot durumu bulunmamaktadır. Tüketiciler güvenle tercih edebilmektedir.

Juss, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve güvenilirlik odaklı üretim anlayışıyla Türkiye içecek pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://juss.com.tr/",
   img: "/juss.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Dimes",
   slug: "dimes",
   ctgry: "İçecek",
   foundedYear: 1963,
   founder: "Mustafa Vasfi Diren",
   owner: "Dimes Gıda Sanayi ve Ticaret A.Ş.",
   description: `Dimes, 1963 yılında Mustafa Vasfi Diren tarafından Tokat'ta kurulmuş bir Türk içecek markasıdır. Bugün yerli bir marka olarak 100'ün üzerinde ülkeye ihracat yapmaktadır. Dimes, özellikle meyve suyu, soğuk çay ve benzeri doğal içecekleri ile tanınır.

Dimes'in kuruluş hikayesi, Mustafa Vasfi Diren'in Tokat'ta meyve suyu üretimine başlamasıyla başlamıştır. Marka, başlangıçta küçük bir yerel üretici olarak faaliyet gösterirken, kaliteli ürünleri ve yenilikçi yaklaşımıyla hızla büyümüştür. Türkiye'de marketler ve restoranlar aracılığıyla yaygın olarak tüketilen Dimes, doğal ve katkısız içecek üretimi konusunda öncü firmalardan biri olarak kabul edilmektedir.

Dimes, bugün Türkiye'nin en büyük meyve suyu üreticilerinden biri olarak öne çıkmaktadır ve dünya çapında tanınan bir marka haline gelmiştir. Marka, sadece meyve suyuyla sınırlı kalmayıp, soğuk çay, aromalı içecekler ve diğer doğal içecekler de üretmektedir.

Dimes ile ilgili olarak uluslararası veya siyasi bir boykot çağrısı bulunmamaktadır. Şirketin faaliyetleri Türkiye sınırları içinde yürütülmekte olup, çalıntı topraklar veya uluslararası hukuka aykırı yerleşimlerle bağlantısı yoktur. Dimes, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır.`,
   country: "Türkiye",
   website: "https://www.dimes.com.tr/",
   img: "/dimes.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Uludağ",
   slug: "uludag",
   ctgry: "İçecek",
   foundedYear: 1930,
   founder: "Yerel Girişimciler",
   owner: "Uludağ İçecek San. ve Tic. A.Ş.",
   description: `Uludağ, merkezi Türkiye'de bulunan ve özellikle gazlı içecek ve maden suyu üretimiyle tanınan bir markadır. Şirket, 1930'lu yıllarda Bursa'da kurulmuş olup adını, Türkiye'nin ünlü Uludağ Dağı'ndan alır.

Uludağ'ın kuruluş hikayesi, 1930'lu yıllarda Bursa'da gazlı içecek ve maden suyu üretimiyle başlamıştır. Marka, başlangıçta yerel bir üretici olarak faaliyet gösterirken, kaliteli ürünleri ve doğal kaynak kullanımıyla hızla büyümüştür. Uludağ markası, Türkiye genelinde gazlı içecekler, meyve sodaları ve maden suları ile yaygın olarak tüketilmektedir.

Marka, yerli üretim ve doğal kaynak kullanımı ile bilinir ve Türkiye'nin önde gelen içecek firmalarından biridir. Uludağ markasıyla ilgili uluslararası veya siyasi bir boykot çağrısı bulunmamaktadır. Şirketin faaliyetleri tamamen Türkiye sınırları içinde yürütülmektedir ve uluslararası hukuka aykırı yerleşimlerle veya çalıntı topraklarla bağlantısı yoktur.

Uludağ, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve güvenilirlik odaklı üretim anlayışıyla Türkiye içecek pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://www.uludagicecek.com.tr/ ",
   img: "/uludag.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Doğuş",
   slug: "dogus",
   ctgry: "İçecek",
   foundedYear: 1958,
   founder: "Karakan Ailesi",
   owner: "Doğuş Çay A.Ş.",
   description: `Doğuş Çay, 1958 yılında Rize'de aile şirketi olarak kurulmuş olup tamamen yerli ve milli bir firmadır. 1985 yılında Karakan Ailesi tarafından yapılandırılan şirketin kökenleri tamamen Türkiye'ye dayanmaktadır.

Doğuş Çay'ın kuruluş hikayesi, 1958 yılında Rize'de Karakan Ailesi'nin çay üretimine başlamasıyla başlamıştır. Marka, başlangıçta küçük bir aile işletmesi olarak faaliyet gösterirken, kaliteli çay üretimi ve yerli sermaye ile hızla büyümüştür. İlk yatırımını çay sektöründe gerçekleştiren Doğuş, Türk malı bir marka olarak Türkiye'de ve yurt dışında tanınmaktadır.

Doğuş Çay, doğal ve kaliteli çay üretimiyle öne çıkmakta olup, yerli ve milli kimliği nedeniyle herhangi bir boykot ürünü değildir. Marka, Türkiye'nin Karadeniz Bölgesi'ndeki çay üretim geleneğini modern teknolojiyle harmanlayarak tüketicilere sunmaktadır.

Doğuş Çay ile ilgili olarak uluslararası veya siyasi bir boykot çağrısı bulunmamaktadır. Şirketin faaliyetleri tamamen Türkiye sınırları içinde yürütülmektedir ve çalıntı topraklar veya uluslararası hukuka aykırı yerleşimlerle bağlantısı yoktur. Doğuş Çay, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır.`,
   country: "Türkiye",
   website: "https://www.doguscay.com.tr/ ",
   img: "/dogus.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Tamek",
   slug: "tamek",
   ctgry: "İçecek",
   foundedYear: 1955,
   founder: "Türkiye Cumhuriyeti (Kamu Yatırımı)",
   owner: "OYAK Grup",
   description: `Tamek, Türkiye'nin önde gelen gıda ve içecek şirketlerinden biridir. 1955 yılında kamu yatırımı olarak kurulan şirket, daha sonra Türk Silahlı Kuvvetlerini Güçlendirme Vakfı (OYAK) bünyesine geçmiş ve günümüzde de OYAK Grup'un bir parçasıdır.

Tamek'in kuruluş hikayesi, 1955 yılında kamu yatırımı olarak başlamıştır. Şirket, başlangıçta devlet desteğiyle kurulmuş ve daha sonra OYAK Grup bünyesine geçmiştir. Bu geçiş, şirketin özel sektör dinamikleriyle faaliyet göstermesini sağlamış ve büyümesini hızlandırmıştır.

Meyve suları, konserve ürünler, domates salçası ve reçeller gibi geniş bir ürün yelpazesi sunan Tamek, kurulduğu günden beri yerli bir sermaye olarak faaliyet göstermektedir ve Türk halkı tarafından bilinen bir markadır. Tamek, OYAK Grup'a ait yerli bir şirkettir. OYAK Grup'un İsrail'le herhangi bir ilişkisi bulunmamaktadır. İlk kurulduğu günden bu yana yerli sermaye ile faaliyet gösteren Tamek, bu özelliğini korumaktadır.

Tamek, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve güvenilirlik odaklı üretim anlayışıyla Türkiye gıda ve içecek pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://www.tamek.com.tr/ ",
   img: "/tamek.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Cola Turka",
   slug: "cola-turka",
   ctgry: "İçecek",
   foundedYear: 2003,
   founder: "Ülker Grubu",
   owner: "DyDo Drinco (Japonya)",
   description: `Cola Turka, Ülker tarafından 2003 yılında piyasaya sürülmüş bir Türk kolası markasıdır. Küresel markalara yerli bir alternatif oluşturma hedefiyle yola çıkan Cola Turka, özellikle çıkış yaptığı dönemde millî duygulara hitap eden reklam kampanyalarıyla büyük bir tanınırlık elde etmiştir.

Cola Turka'nın kuruluş hikayesi, 2003 yılında Ülker Grubu'nun küresel kola markalarına yerli bir alternatif oluşturma vizyonuyla başlamıştır. Marka, başlangıçta Türkiye pazarında büyük bir başarı elde etmiş ve millî duygulara hitap eden reklam kampanyalarıyla geniş kitlelere ulaşmıştır. Zamanla Ülker'in içecek departmanının yapılanması değişmiş ve markanın hakları, günümüzde Japon DyDo Drinco şirketine ait olan bir yapıya geçmiştir. Ancak marka, Türkiye'de Ülker tarafından pazarlanmaya ve satılmaya devam etmektedir.

Japon şirketi DyDo Drinco hakkında herhangi bir destek veya olumsuz açıklama bulunmamaktadır; dolayısıyla bu şirket boykot kapsamına girmez. Cola Turka, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, yerli alternatif olma özelliğiyle Türkiye içecek pazarında önemli bir konuma sahiptir.`,
   country: "Japonya",
   website:
    "https://www.dydodrinco.com.tr/en/our-brandsr/cola-turka-icecek.html",
   img: "/cola-turka.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Çamlıca",
   slug: "camlica",
   ctgry: "İçecek",
   foundedYear: 1962,
   founder: "Yerel Girişimciler",
   owner: "DyDo Drinco (Japonya)",
   description: `Çamlıca Gazoz, 1962 yılında İstanbul'da kurulan ve Türkiye'nin en sevli, en köklü gazoz markalarından biridir. Yıllar içinde özellikle 80'li ve 90'lı yılların popüler içeceği haline gelmiş ve birçok Türk vatandaşı için nostaljik bir değere sahip olmuştur.

Çamlıca Gazoz'un kuruluş hikayesi, 1962 yılında İstanbul'da yerel girişimciler tarafından gazoz üretimine başlamasıyla başlamıştır. Marka, başlangıçta İstanbul ve çevresinde popüler olmuş, zamanla Türkiye genelinde tanınan bir marka haline gelmiştir. Tıpkı Cola Turka'da olduğu gibi, Çamlıca Gazoz'un da hakları, zaman içinde yapılanmalarla birlikte günümüzde Japon DyDo Drinco şirketine ait olan yapıya geçmiştir.

Boykot listelerinde yer almamasının temel nedeni, markanın haklarının sahibi olan şirketin Japonya merkezli DyDo Drinco olmasıdır. İsrail veya ABD merkezli doğrudan bir bağlantısı bulunmadığı için, bahsi geçen boykot uygulamaları kapsamında değerlendirilmemektedir. Çamlıca Gazoz, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, nostaljik değeri ve köklü geçmişiyle Türkiye içecek pazarında önemli bir konuma sahiptir.`,
   country: "Japonya",
   website: "https://www.dydodrinco.com.tr/tr/markalarimiz/camlica.html",
   img: "/camlica.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Ofçay",
   slug: "ofcay",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "Yerel Girişimciler",
   owner: "Efor Çay (Efor Holding)",
   description: `Ofçay, Rize'nin Of ilçesinde kurulmuş bir çay markasıdır ve özellikle siyah çay çeşitleri ile doğal Türk çayı üretimiyle tanınır. 2019 yılında Hollanda merkezli JDE Peet's (Jacobs) tarafından satın alındıktan sonra, 2025 yılında yerli üretici Efor Çay tarafından devralınmıştır.

Ofçay'ın kuruluş hikayesi, Rize'nin Of ilçesinde yerel çay üreticilerinin çay üretimine başlamasıyla başlamıştır. Marka, başlangıçta bölgesel bir çay markası olarak faaliyet gösterirken, kaliteli çay üretimiyle Türkiye genelinde tanınan bir marka haline gelmiştir. 2019 yılında Hollanda merkezli JDE Peet's (Jacobs) tarafından satın alınmış, ancak 2025 yılında yerli üretici Efor Çay tarafından devralınmıştır. Bu birleşme ile Ofçay, yeniden yerli sermayeye geçmiş oldu.

Efor Çay, Efor Holding bünyesinde faaliyet gösteren bir şirket olup, Türkiye'nin önde gelen çay üreticilerindendir. Ofçay, Türkiye'de yaygın olarak tüketilmekte ve yerli çay üretimi konusunda bölgesel ve ulusal öneme sahip bir marka olarak kabul edilmektedir. Ofçay ile ilgili uluslararası veya siyasi bir boykot çağrısı bulunmamaktadır. Şirketin faaliyetleri Türkiye sınırları içinde yürütülmektedir ve çalıntı topraklar veya uluslararası hukuka aykırı yerleşimlerle bağlantısı yoktur.

Ofçay, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve yerli üretim odaklı yaklaşımıyla Türkiye çay pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://ofcay.com/",
   img: "/ofcay.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Çaykur",
   slug: "caykur",
   ctgry: "İçecek",
   foundedYear: 1983,
   founder: "Türkiye Cumhuriyeti",
   owner: "Tarım ve Orman Bakanlığı",
   description: `Çaykur (Çay İşletmeleri Genel Müdürlüğü), Tarım ve Orman Bakanlığı'na ait sermayesinin tamamı devlete ait olan, çay üretimi, ithalatı ve ihracatı yapan bir markadır. 1983 yılında kurulmuş olup, Rize başta olmak üzere Karadeniz Bölgesi'nde çay üretimi ve paketlemesini yürütmektedir.

Çaykur'un kuruluş hikayesi, 1983 yılında Türkiye Cumhuriyeti tarafından çay sektörünü organize etmek ve geliştirmek amacıyla başlamıştır. Kurum, başlangıçta çay üretimini ve pazarlamasını koordine etmek için kurulmuş ve zamanla Türkiye'nin en büyük çay üreticisi haline gelmiştir. Çaykur, Rize ve çevresindeki çay bahçelerinden elde edilen çayları işleyerek tüketicilere sunmaktadır.

Marka, siyah çay, yeşil çay ve aromalı çay çeşitleriyle tanınır ve Türkiye'de çay sektörünün en bilinen ve güvenilir markalarından biridir. Çaykur, yerli üretim kimliği ve kalite standartları ile hem yurt içi hem de uluslararası pazarlarda faaliyet göstermektedir. Çaykur ile ilgili olarak uluslararası veya siyasi bir boykot çağrısı bulunmamaktadır. Şirketin faaliyetleri tamamen Türkiye sınırları içinde yürütülmektedir ve çalıntı topraklar veya uluslararası hukuka aykırı yerleşimlerle bağlantısı yoktur.

Çaykur, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve güvenilirlik odaklı üretim anlayışıyla Türkiye çay pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://www.caykur.gov.tr/AnaSayfa.aspx",
   img: "/caykur.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Meysu",
   slug: "meysu",
   ctgry: "İçecek",
   foundedYear: 1948,
   founder: "8 Kurucu Üye ve 8 Ortak",
   owner: "Gülsan Gıda San. Tic. A.Ş.",
   description: `Meysu, Kayseri'de 1948 yılında akide şekeri ve şekerleme ürünleri ile 8 kurucu üye ve 8 ortak tarafından Gülsan Gıda San. Tic. A.Ş. adı altında imalata başlamıştır. Günümüzde meyve suyu üretim fabrikası olarak faaliyet gösteren Meysu, Türkiye'de helal gıda belgesi alan ilk meyve suyu markası olma özelliğine sahiptir.

Meysu'nun kuruluş hikayesi, 1948 yılında Kayseri'de akide şekeri ve şekerleme ürünleri üretimiyle başlamıştır. Marka, başlangıçta şekerleme sektöründe faaliyet gösterirken, zamanla meyve suyu üretimine geçmiş ve bu alanda öncü konuma gelmiştir. Meysu, Türkiye'de helal gıda belgesi alan ilk meyve suyu markası olarak öne çıkmaktadır.

Marka, doğal meyve suları, konsantre meyve içecekleri ve aromalı içecekler üretmekte olup, hem yurt içi hem de uluslararası pazarlarda tanınmaktadır. Meysu, Türkiye menşeli bir marka olarak kaliteli ve güvenilir üretimi ile öne çıkmaktadır. Meysu ile ilgili olarak uluslararası veya siyasi bir boykot çağrısı bulunmamaktadır. Şirketin faaliyetleri tamamen Türkiye sınırları içinde yürütülmektedir ve çalıntı topraklar veya uluslararası hukuka aykırı yerleşimlerle bağlantısı yoktur.

Meysu, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve güvenilirlik odaklı üretim anlayışıyla Türkiye meyve suyu pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://www.meysu.com.tr/",
   img: "/meysu.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Beypazarı",
   slug: "beypazari",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "Yerel Girişimciler",
   owner: "Beypazarı Maden Suyu İşletmesi",
   description: `Beypazarı, merkezi Türkiye, Ankara olan bir maden suyu markasıdır. Marka, Türkiye'nin Beypazarı ilçesindeki doğal kaynaklardan elde edilen maden suyunu şişeler ve ülke genelinde yaygın olarak dağıtır. Beypazarı maden suyu, doğal mineralli yapısı ve lezzeti ile bilinir.

Beypazarı'nın kuruluş hikayesi, Ankara'nın Beypazarı ilçesindeki doğal maden suyu kaynaklarının keşfedilmesiyle başlamıştır. Bu kaynaklar, zengin mineral içeriğine sahip doğal maden suyu kaynaklarıdır ve yüzyıllardır bilinmektedir. Marka, bu doğal kaynaklardan elde ettiği suyu modern teknoloji ve hijyen standartlarıyla işleyerek tüketicilere sunmaktadır.

Türkiye'de yerli bir marka olarak, hem günlük tüketim hem de restoran ve marketlerde sıkça tercih edilen bir içecektir. Beypazarı markası ile ilgili uluslararası veya siyasi bir boykot çağrısı bulunmamaktadır. Şirketin faaliyetleri tamamen Türkiye sınırları içinde yürütülmektedir ve çalıntı topraklar veya uluslararası hukuka aykırı yerleşimlerle bağlantısı yoktur.

Beypazarı, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve sağlık odaklı üretim anlayışıyla Türkiye maden suyu pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://beypazarimadensuyu.com.tr/",
   img: "/beypazari.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Teatone",
   slug: "teatone",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "BİM Birleşik Mağazalar A.Ş.",
   owner: "BİM Birleşik Mağazalar A.Ş.",
   description: `Teatone, İstanbul merkezli Bim Birleşik Mağazalar A.Ş. adına, Oğuz Gıda San. ve Tic. A.Ş. tarafından üretilen limon aromalı bir buzlu çay markasıdır. Üretici firma, Adana ve Sakarya'daki fabrikalarında Teatone'un yanı sıra kendi markasıyla da üretim yapmaktadır.

Teatone'un kuruluş hikayesi, BİM Birleşik Mağazalar A.Ş.'nin kendi markası olarak buzlu çay sektörüne giriş yapmasıyla başlamıştır. Marka, BİM'in özel markası olarak üretilmekte ve yalnızca BİM mağazalarında satılmaktadır. Bu üretim kapsamında karton kutuda yüzde 100 meyve suyu, meyve nektarı, meyveli içecekler, meyve aromalı gazlı içecekler ve portakal, gazoz gibi meşrubatlar yer almaktadır.

Bim, bünyesindeki çeşitli markalara ait ürünlerin üretimini farklı firmalara yaptırmakta ve dağıtımını sağlamaktadır. Teatone'un üretim ve dağıtımı tamamen Türkiye merkezli firmalar aracılığıyla gerçekleştirilmektedir ve markanın İsrail veya başka ülkelerle bağlantısı yoktur. Bu nedenle Teatone'ye yönelik herhangi bir boykot söz konusu değildir.

Teatone, Türkiye genelindeki BİM mağazalarında yaygın olarak bulunmaktadır. Marka, kalite ve uygun fiyat odaklı üretim anlayışıyla Türkiye buzlu çay pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://www.teatone.com.tr/",
   img: "/teatone.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Sarıkız",
   slug: "sarikiz",
   ctgry: "İçecek",
   foundedYear: 1860,
   founder: "Yerel Girişimciler",
   owner: "Sarıkız Gıda San. ve Tic. A.Ş.",
   description: `Sarıkız, Manisa/Alaşehir merkezli bir maden suyu markasıdır. Tarihi 1860'lı yıllara kadar uzanan Sarıkız Maden Suyu, başta Türkiye olmak üzere yurt dışında da tanınan ve tercih edilen bir üründür.

Sarıkız'ın kuruluş hikayesi, 1860'lı yıllarda Manisa'nın Alaşehir ilçesindeki doğal maden suyu kaynaklarının keşfedilmesiyle başlamıştır. Bu kaynaklar, zengin mineral içeriğine sahip doğal maden suyu kaynaklarıdır ve uzun yıllardır bilinmektedir. Marka, bu doğal kaynaklardan elde ettiği suyu modern teknoloji ve hijyen standartlarıyla işleyerek tüketicilere sunmaktadır.

Modern tesislerinde üretilen Sarıkız, hem yurt içi hem de yurt dışı pazarlarda güçlü bir varlığa sahiptir. 2007'den itibaren tesislerini modern teknolojilerle yenileyen Sarıkız, üretim kapasitesini artırmış ve etiketten şişeye kadar birçok noktada fiziki yenilikler gerçekleştirmiştir. Sarıkız Gıda firmasının İsrail lehinde veya başka bir politik bağlantıya dair herhangi bir açıklaması bulunmamaktadır. Üretimi tamamen Türkiye'de gerçekleştirilmekte olup, markaya yönelik bir boykot söz konusu değildir.

Sarıkız, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve sağlık odaklı üretim anlayışıyla Türkiye maden suyu pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://www.sarikiz.com.tr/",
   img: "/sarikiz.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Ceysu",
   slug: "ceysu",
   ctgry: "İçecek",
   foundedYear: 2003,
   founder: "Yerel Girişimciler",
   owner: "Ceysu Gıda San. ve Tic. A.Ş.",
   description: `Ceysu, 2003 yılında pet ve damacana üretimi ile ambalajlı su sektörüne adım atmış köklü bir firmadır. Antalya'daki modern tesislerinde, suyun özü ve mineral yapısı korunarak, ileri teknolojiyle el değmeden üretim yapılmaktadır.

Ceysu'nun kuruluş hikayesi, 2003 yılında Antalya'da ambalajlı su sektörüne giriş yapmasıyla başlamıştır. Marka, başlangıçta pet ve damacana üretimi ile sektöre adım atmış ve zamanla modern teknoloji ve hijyen standartlarıyla üretim kapasitesini artırmıştır. Tesisleri, hem Türkiye'nin hem de Avrupa'nın sayılı üretim merkezleri arasında gösterilmektedir.

Marka, kaynağının temizliğine ve yüksek hijyen standartlarına büyük önem vermektedir. Uluslararası Lezzet ve Kalite Enstitüsü (iTQi) tarafından 2013-2016 yılları arasında üst üste Superior Taste Award'a layık görülmüş olup, Türkiye'nin en ödüllü su markalarından biridir. Ceysu, Türkiye menşeli bir markadır ve küresel çapta yürütülen herhangi bir boykot listesinde yer almamaktadır.

Ceysu, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve sağlık odaklı üretim anlayışıyla Türkiye ambalajlı su pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://www.ceysu.com.tr/",
   img: "/ceysu.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Lucy",
   slug: "lucy",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "BİM Birleşik Mağazalar A.Ş.",
   owner: "BİM Birleşik Mağazalar A.Ş.",
   description: `Jucy, Türkiye'deki BİM Marketleri için özel olarak üretilen bir meyve suyu markasıdır. Marka, uygun fiyatlı ve çeşitli meyve suyu seçeneklerini tüketiciye sunma hedefiyle BİM'in temel içecek ürün gamının bir parçasıdır.

Jucy'nin kuruluş hikayesi, BİM Marketleri'nin kendi markası olarak meyve suyu sektörüne giriş yapmasıyla başlamıştır. Marka, BİM'in özel markası olarak üretilmekte ve yalnızca BİM mağazalarında satılmaktadır. Jucy ürünlerinin üretimi, Türkiye gıda sektörünün önde gelen ve güvenilir firmalarından olan Tamek tarafından BİM Marketleri adına gerçekleştirilmektedir.

Jucy, tamamen Türkiye odaklı bir perakende zinciri markasıdır ve küresel çapta yürütülen herhangi bir boykot listesinde yer almamaktadır. Marka, uygun fiyatlı ve çeşitli meyve suyu seçenekleriyle Türkiye içecek pazarında önemli bir konuma sahiptir.

Jucy, Türkiye genelindeki BİM mağazalarında yaygın olarak bulunmaktadır. Marka, kalite ve uygun fiyat odaklı üretim anlayışıyla Türkiye meyve suyu pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   img: "/lucy.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Nazo",
   slug: "nazo",
   ctgry: "İçecek",
   foundedYear: 1993,
   founder: "Nazlı Gıda Kurucuları",
   owner: "Nazlı Gıda San. ve Tic. A.Ş.",
   description: `Nazo, 1993 yılında kurulan Nazlı Gıda bünyesinde faaliyet gösteren bir aromalı toz içecek markasıdır. Nazlı Gıda, Nazo markasının yanı sıra LayLayLom markalı şeker, Foxtoy markalı mısır cipsi ve çikolata kaplı şekerlemeler ile Peritos markalı patates cipsi gibi çeşitli gıda ürünlerini de üretmektedir.

Nazo'nun kuruluş hikayesi, 1993 yılında Nazlı Gıda'nın kurulmasıyla başlamıştır. Marka, başlangıçta aromalı toz içecek sektöründe faaliyet göstermiş ve zamanla ürün yelpazesini genişletmiştir. Nazlı Gıda, toplam 28 bin metrekarelik kapalı üretim alanına sahiptir ve ürünlerini 15 ülkeye ihraç etmektedir.

Özellikle Sahra Altı Afrika olarak bilinen bölgede ciddi bir pazar gücüne sahip olan Nazlı Gıda, bu yönüyle Türkiye'nin önde gelen yerli üretim firmalarından biri olarak tanınmaktadır. Nazo, yerel sermayeyle kurulan ve uluslararası pazarda da aktif olan bir Türk markasıdır. Nazo, 1993 yılında kurulan Nazlı Gıda bünyesinde faaliyet gösteren yerli bir Türk markasıdır. Şirketin sahiplik yapısı ve ticari faaliyetleri incelendiğinde, küresel çapta yürütülen büyük boykot hareketlerinin hedefleri arasında yer almamaktadır. Nazo, yerel üretim gücünü ve ihracat potansiyelini Sahra Altı Afrika gibi farklı pazarlara taşımaktadır. Dolayısıyla, Nazo markasına karşı herhangi bir boykot çağrısı bulunmamaktadır.

Nazo, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve güvenilirlik odaklı üretim anlayışıyla Türkiye aromalı içecek pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://www.nazligida.com.tr/index.php ",
   img: "/nazo.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Diriliş",
   slug: "dirilis",
   ctgry: "İçecek",
   foundedYear: 2020,
   founder: "Yerli Girişimciler",
   owner: "Diriliş Gıda San. ve Tic. A.Ş.",
   description: `Diriliş Kola, yerli bir içecek markası olarak, enerji içeceği sektöründeki ihtiyacı görerek 2020 yılında kurulmuştur. Marka, bu sektöre tamamen katkısız ve doğal içeriklerden üretilen "Diriliş" adlı enerji içeceği ile giriş yapmıştır.

Diriliş'in kuruluş hikayesi, 2020 yılında enerji içeceği sektöründe yerli bir alternatif oluşturmak amacıyla başlamıştır. Marka, başlangıçta tamamen katkısız ve doğal içeriklerden üretilen enerji içeceği ile pazara giriş yapmış ve zamanla kola ve diğer içecek kategorilerine de genişlemiştir. Diriliş Kola, özellikle gençler ve sporcular arasında büyük ilgi görmektedir.

Yerli sermaye ile kurulan ve yerli üretimi destekleyen yapısıyla, Türkiye pazarında alternatif bir kola ve enerji içeceği seçeneği sunmayı hedeflemektedir. Markanın sahiplik yapısı ve ticari faaliyetleri incelendiğinde, küresel çapta yürütülen büyük siyasi boykot hareketlerinin hedefleri arasında yer almamaktadır. Diriliş Kola, uluslararası bir ticari bağlantısı veya siyasi duruşu nedeniyle boykot edilmemekte; aksine, yerli ve doğal içerikli bir alternatif olarak tüketiciler tarafından tercih edilmektedir.

Diriliş, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve doğallık odaklı üretim anlayışıyla Türkiye içecek pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://www.diriliscola.com/",
   img: "/dirilis.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Zafer Gazoz",
   slug: "zafer-gazoz",
   ctgry: "İçecek",
   foundedYear: 1934,
   founder: "Mustafa Lütfi Özdemir",
   owner: "Zafer Meşrubat ve Gıda Sanayi A.Ş.",
   description: `Zafer Gazoz, Türkiye'nin en köklü meşrubat firmalarından biri olan Zafer Meşrubat ve Gıda Sanayi bünyesinde yer alan, yerel bir gazoz markasıdır. Markanın temelleri, kurucusu Mustafa Lütfi Özdemir tarafından 1934 yılında Denizli'de "Yeşil Denizli Zafer Gazozhanesi" adıyla atılmıştır.

Zafer Gazoz'un kuruluş hikayesi, 1934 yılında Mustafa Lütfi Özdemir'in Denizli'de "Yeşil Denizli Zafer Gazozhanesi" adıyla ilk gazozhanesini açmasıyla başlamıştır. Marka, başlangıçta yerel bir gazoz üreticisi olarak faaliyet göstermiş ve zamanla Türkiye genelinde tanınan bir marka haline gelmiştir. Uzun yıllar aynı kalitede üretim yapan Zafer Gazoz, 1992 yılından itibaren Denizli Zeytinköy'deki yeni tesislerinde, kurucunun oğlu Muammer Özdemir yönetiminde faaliyetlerine devam etmektedir.

Gazozları, yüzde yüz gerçek şeker kullanılarak üretilmesiyle bilinir ve özellikle Afyonkarahisar ve çevresinde oldukça popülerdir. Marka, Afyonkarahisar'da faaliyet gösteren Çizmeci Gıda Ve Meşrubat Sanayi tarafından da üretilmektedir. Zafer Gazoz, küresel çapta yürütülen herhangi bir siyasi veya ekonomik boykot listesinde yer almamaktadır. Tüketiciler, Zafer Gazoz'u köklü geçmişi ve yerli üretimi nedeniyle güvenle tercih edebilmektedirler.

Zafer Gazoz, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve geleneksel üretim anlayışıyla Türkiye gazoz pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://www.zafergazoz.com.tr/",
   img: "/zafer-gazoz.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Fruit Pocket",
   slug: "fruit-pocket",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "SN Group",
   owner: "SN Group",
   description: `Fruit Pocket, sağlıklı ve lezzetli yaşam tarzını destekleme misyonuyla yola çıkmış bir içecek markasıdır. Markanın hikayesi, doğadan ilham alarak sağlıklı içecekleri tüketicilerle buluşturma arzusundan doğmuştur.

Fruit Pocket'in kuruluş hikayesi, SN Group'un sağlıklı ve doğal içecek üretimi konusundaki vizyonuyla başlamıştır. Marka, başlangıçta katkısız ve doğal meyve suları üretimiyle pazara giriş yapmış ve zamanla ürün yelpazesini genişletmiştir. Fruit Pocket, özellikle meyve bazlı içecekler üreten bir markadır ve Türkiye'de faaliyet göstermektedir.

Ürünleri, katkısız ve leziz meyve sularıyla bilinir. Sealed Nature markası altında üretilen bu ürünler, koruyucusuz, yapay aroma ve renklendirici içermeyen taze meyvelerden elde edilir. Üretim, Ankara Sincan'daki Başkent Sanayi Bölgesi'nde bulunan SN Group güvencesiyle yapılmaktadır. Fruit Pocket, markasının sahiplik yapısı ve ticari faaliyetleri incelendiğinde, küresel çapta yürütülen büyük siyasi boykot hareketlerinin hedefleri arasında yer almamaktadır. Fruit Pocket, yerli bir marka olarak, sağlıklı ve doğal içerikli ürünleriyle Türkiye pazarında yer almaktadır ve herhangi bir boykot çağrısı bulunmamaktadır.

Fruit Pocket, Türkiye genelinde marketler, süpermarketler ve çeşitli satış noktalarında yaygın olarak bulunmaktadır. Marka, kalite ve sağlık odaklı üretim anlayışıyla Türkiye meyve suyu pazarında önemli bir konuma sahiptir.`,
   country: "Türkiye",
   website: "https://fruitpocket.com.tr/",
   img: "/fruit-pocket.png",
   isBoycotted: "boykot-degil",
  },
  {
   name: "Lipton",
   slug: "lipton",
   ctgry: "İçecek",
   foundedYear: 1890,
   founder: "Sir Thomas Lipton",
   owner: "Unilever (PepsiCo ortaklığı)",
   description: `Lipton, 1890 yılında İskoç girişimci Sir Thomas Lipton tarafından kuruldu. Zamanla dünyanın en büyük çay markalarından biri haline geldi. Lipton'un kuruluş hikayesi, Sir Thomas Lipton'un çay ticaretine başlaması ve dünya çapında çay plantasyonları kurmasıyla başlamıştır.

Sir Thomas Lipton, çayı herkes için erişilebilir hale getirmek amacıyla, doğrudan çay üreticilerinden çay satın alarak aracıları ortadan kaldırmış ve böylece çay fiyatlarını düşürmüştür. Bu yaklaşım, Lipton'un hızla büyümesini ve dünya çapında tanınan bir marka haline gelmesini sağlamıştır.

Günümüzde ise marka, global gıda devi Unilever bünyesinde faaliyet göstermektedir. Ayrıca Lipton ürünlerinin dağıtımı ve pazarlaması konusunda Unilever ile PepsiCo arasında ortak bir girişim bulunmaktadır. Yani Lipton'un sahibi İngiltere merkezli Unilever olup, PepsiCo'nun da markada önemli bir payı vardır.

Lipton, bugün dünya çapında 150'den fazla ülkede satılmakta ve günlük olarak milyonlarca fincan tüketilmektedir. Marka, sadece siyah çayla sınırlı kalmayıp, yeşil çay, bitki çayları ve buzlu çay gibi farklı formatlarda da ürünler sunmaktadır. Lipton, özellikle evlerde ve restoranlarda tercih edilen bir çay markası olarak öne çıkmaktadır.`,
   country: "İngiltere",
   website: "https://www.lipton.com.tr/",
   img: "/lipton.png",
   isBoycotted: "boykot",
   boycottReason: `Lipton'un boykot edilmesinin temel nedeni, markanın ana ortağı olan PepsiCo'nun İsrail ile olan ticari ilişkileridir. Lipton'un doğrudan İsrail'i desteklediğine dair resmi bir açıklama bulunmamaktadır. Ancak Lipton'un ana ortağı olan PepsiCo, İsrail merkezli bazı şirketlerle ticari ilişkiler yürütmektedir:

1. SodaStream: PepsiCo, İsrail merkezli SodaStream'i 3,2 milyar dolara satın almıştır. SodaStream, İsrail'in yasadışı yerleşim bölgelerinde açtığı fabrikalar nedeniyle uzun süredir tartışma konusu olmaktadır. Bu yerleşimler, uluslararası hukuka göre yasadışı kabul edilmekte ve Filistin topraklarının işgali anlamına gelmektedir.

2. Sabra: PepsiCo, İsrail merkezli Sabra markasının %50 hissesine sahiptir. Sabra'nın hakim hissedarı Strauss Group, İsrail ordusuna doğrudan destek vermesiyle bilinir. Bu durum, PepsiCo'nun İsrail'in askeri operasyonlarına da dolaylı olarak katkıda bulunduğu anlamına gelmektedir.

Bu ticari ilişkiler nedeniyle, birçok tüketici Lipton'u dolaylı olarak İsrail'i destekleyen markalar arasında görmektedir. Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, PepsiCo'nun ortaklığı nedeniyle Lipton'u boykot etmeyi bir sorumluluk olarak görmektedir.`,
   alternative_products: ["didi", "dogus", "ofcay", "caykur", "teatone"],
  },
  {
   name: "Caprisun",
   slug: "caprisun",
   ctgry: "İçecek",
   foundedYear: 1969,
   founder: "Rudolf Wild",
   owner: "Kraft Heinz",
   description: `Caprisun, çocuklara yönelik pratik ambalajlı meyve suyu markasıdır. 1969 yılında Almanya'da kurulmuş olan bu marka, özellikle içme poşetlerindeki sunumuyla dünya genelinde tanınır ve çocukların severek tükettiği bir içecektir. Farklı meyve aromaları ve karışımlarıyla geniş bir ürün yelpazesine sahiptir.
     1991 yılında Kraft General Foods tarafından 155 milyon dolara satın alınan Caprisun, 2012 yılında Kraft'ın ikiye ayrılmasıyla Kraft Foods Group'un bir parçası olmuştur. 2015 yılında Kraft Foods Group'un Heinz ile birleşmesiyle marka Kraft Heinz şirketinin portföyüne dahil olmuştur. Türkiye pazarında da aktif olarak satışa sunulmaktadır.`,
   country: "Almanya",
   website: "https://www.capri-sun.com/tr/",
   img: "/caprisun.png",
   isBoycotted: "boykot",
   boycottReason: `Kraft Heinz şirketi birleşmeden önce İsrail'de ürün gamı genişletme çalışması yapmıştır. Ancak 2010'dan beri İsrail'deki operasyonlarıyla ilgili net bir bilgi yok. Birçok uluslararası boykot listesinde şirketin adını görsek de şirketin İsrail'de üretim faaliyeti yaptığı veya Yahudi fonları tarafından desteklendiğine dair bir kanıta ulaşamadık.
     Şirketin en büyük hissedarı Berkshire olduğundan boykot listemizedir. Kraft Heinz şirketi Türkiye'de de 100 milyon dolarlık üretim yatırımı olan bir şirkettir.`,
   alternative_products: ["juss", "dimes", "tamek", "meysu", "fruit-pocket"],
  },
  {
   name: "Dr. Pepper",
   slug: "pepper",
   ctgry: "İçecek",
   foundedYear: 1885,
   country: "ABD",
   owner: "Keurig Dr Pepper",
   description: `Dr Pepper, ABD kökenli, kendine özgü aromasıyla bilinen gazoz markasıdır. Marka, 1885 yılında Waco, Teksas'ta eczacı Charles Alderton tarafından geliştirilmiştir. Dr Pepper, ilk piyasaya sürüldüğünde diğer gazozlardan farklı olarak 23 ayrı meyve ve bitki aromasıyla formüle edilmiş ve bu eşsiz karışım sayesinde hızla popülerlik kazanmıştır.
     1970’lerden itibaren Dr Pepper, Cadbury Schweppes ve daha sonra Keurig Dr Pepper şirketlerinin portföyüne dahil olmuş, günümüzde ABD’de Keurig Dr Pepper tarafından üretilip dağıtılmaktadır. Markanın uluslararası dağıtımı, bölgelere göre değişiklik gösterebilmektedir.`,
   country: "ABD",
   website: "https://drpepper.store/",
   img: "/pepper.png",
   isBoycotted: "boykot",
   boycottReason: `Günümüzde ABD'de Keurig Dr Pepper tarafından üretilip dağıtılan Dr Pepper, bazı çevreler tarafından, sahipleri Reimann ailesinin Alfred Landecker Vakfı aracılığıyla İsrail'e destek sağlaması nedeniyle boykot edilmektedir.`,
   alternative_products: [
    "cola-turka",
    "camlica",
    "uludag",
    "zafer-gazoz",
    "dirilis",
   ],
  },
  {
   name: "Caro | Pero",
   slug: "caro",
   ctgry: "İçecek",
   foundedYear: 1954,
   founder: "Yerel Girişimciler",
   owner: "Nestlé S.A.",
   description: `Caro, 1954 yılından beri Batı Almanya'da tanıtılan, kavrulmuş tahıl içeceği kategorisinde yer alan bir markadır. Ürün, kavrulmuş arpa, maltlı arpa, beyaz hindiba ve çavdardan yapılan bir kafeinsiz kahve ikamesidir. Marka, ürünlerinin %100 doğal olduğunu ve başka hiçbir şey içermediğini belirtir.
     Caro, küresel gıda devi Nestlé tarafından üretilmektedir. Caro, Yeni Zelanda ve Avustralya gibi diğer pazarların yanı sıra tüm Avrupa'da mevcuttur. ABD'de ise "Pero" adıyla ithal edilmekte ve İspanya'da "Eko" olarak satılmaktadır.`,
   country: "Almanya & İsviçre &",
   website: "https://www.nestle.com.au/en/brands/caro",
   img: "/caro.png",
   isBoycotted: "boykot",
   boycottReason: `Bu markanın boykot edilmesinin temel nedeni, sahibi olan Nestlé şirketinin İsrail ile olan ticari bağlantıları ve yatırımlarıdır. Caro, ana şirketi Nestlé'nin politikaları ve eylemleri yüzünden boykot edilmektedir.
     Boykot çağrılarının temel nedenleri:
     1.	İsrail'deki Fabrika ve AR-GE: Nestlé'nin 1995 yılından bu yana İsrail'de teknoloji ve Ar-Ge yatırımları bulunmaktadır. Örneğin, Nestlé'nin 2002 yılında İsrail'in Sderot kentinde bir fabrika açtığı bilinmektedir.
     2.	Ekonomik Destek: Nestlé, İsrail'deki gıda teknolojisi şirketlerine ve girişimlerine yatırım yaparak ülkenin ekonomisine doğrudan katkıda bulunmaktadır.
     Bu ticari ve siyasi duruş nedeniyle Caro markası, boykot listelerine dahil edilmiş olup, tüketicilerin bu markayı tercih etmemeleri önerilmektedir.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Erikli",
   slug: "erikli",
   ctgry: "İçecek",
   foundedYear: 1960,
   founder: "Nuri Nihat Aslanoba",
   owner: "Nestlé Waters Türkiye",
   description: `Erikli Su, 1960 yılında Nuri Nihat Aslanoba tarafından kurulan yerli bir markadır. Kuruluşundan bu yana Türkiye’de güvenilir bir içme suyu markası olarak öne çıkmıştır. Ancak 2006 yılında Nestlé Waters ile ortaklık kurmuş ve hisselerinin bir kısmı devredilmiştir. Günümüzde Erikli Su, Nestlé Waters Türkiye bünyesinde faaliyet göstermeye devam etmektedir.`,
   country: "Türkiye & İsviçre",
   website: "https://www.erikli.com.tr/",
   img: "/erikli.png",
   isBoycotted: "boykot",
   boycottReason: `Nestlé, merkezi İsviçre'de bulunan ve dünya genelinde faaliyet gösteren dev bir gıda ve içecek şirketidir. Şirketin İsrail'de de yatırımları bulunmaktadır. Özellikle Osem Investments isimli gıda şirketine sahip olması nedeniyle bazı tüketiciler Nestlé ürünlerini boykot etmeyi tercih etmektedir.
     Bazı sivil toplum kuruluşları ve boykot platformları, Nestlé ürünlerini boykot listesine eklemiştir. Bu listelerde yer alan ürünler arasında Erikli Su da bulunmaktadır. Ancak bu tamamen bireysel bir tercih meselesidir.`,
   alternative_products: [
    "hamidiye",
    "beysu",
    "sultan",
    "saka",
    "buzdagi",
    "kizilay",
    "ozkaynak",
    "ceysu",
    "sarikiz",
    "beypazari",
   ],
  },
  {
   name: "Nestle Pure Life",
   slug: "nestle-pure-life",
   ctgry: "İçecek",
   foundedYear: 1998,
   founder: "Nestlé S.A.",
   owner: "Nestlé S.A.",
   description: `Nestlé Pure Life, dünya genelinde yaygın olarak satılan bir şişelenmiş su markasıdır. Marka, 1998 yılında İsviçre merkezli Nestlé şirketi tarafından piyasaya sürülmüş ve kısa sürede birçok ülkede yaygınlaşmıştır. Su, farklı bölgelerdeki yerel kaynaklardan elde edilir ve çeşitli minerallerle zenginleştirilerek şişelenir. Nestlé Pure Life, özellikle temiz ve güvenilir içme suyu olarak pazarlanmakta olup, farklı ambalaj boyutlarıyla tüketicilere sunulmaktadır.`,
   country: "İsviçre",
   website: "https://www.nestlepurelife.com/tr/tr-tr",
   img: "/nestle-pure-life.png",
   isBoycotted: "boykot",
   boycottReason: `Nestlé Pure Life markasının sahibi olan Nestlé, İsrail merkezli Osem şirketinin kontrol hissesine sahiptir. Osem, işgal altındaki Filistin'de faaliyet gösteren bir gıda üreticisidir ve Nestlé, Osem'in %53,8'ine sahip bir İsviçreli çok uluslu yiyecek ve içecek şirketidir. Ayrıca Nestlé'nin, Gazze Şeridi'ne yaklaşık 2 km uzaklıktaki Sderot yerleşiminde bir Araştırma ve Geliştirme Merkezi bulunmaktadır. Bu bağlantılar nedeniyle, bazı çevreler Nestlé Pure Life ve Nestlé ürünlerini boykot etmektedir.`,
   alternative_products: [
    "hamidiye",
    "beysu",
    "sultan",
    "saka",
    "buzdagi",
    "kizilay",
    "ozkaynak",
    "ceysu",
    "sarikiz",
    "beypazari",
   ],
  },
  {
   name: "Perrier",
   slug: "perrier",
   ctgry: "İçecek",
   foundedYear: 1863,
   founder: "Louis Perrier",
   owner: "Nestlé Waters",
   description: `Perrier, Fransa kökenli, dünyaca ünlü bir doğal maden suyu markasıdır. Marka, 1863 yılında Fransa'nın Vergèze kasabasında keşfedilen doğal karbonatlı su kaynağından üretilmiştir. Perrier, kabarcıklı yapısı ve karakteristik şişesiyle tanınır ve özellikle soğuk servis edildiğinde ferahlatıcı etkisiyle popülerlik kazanmıştır. Günümüzde Nestlé Waters tarafından üretilmekte ve dünya genelinde dağıtılmaktadır. `,
   country: "Fransa & İsviçre",
   website: "https://www.perrier.com/",
   img: "/perrier.png",
   isBoycotted: "boykot",
   boycottReason: `Perrier markasının sahibi Nestlé, İsrail merkezli Osem şirketinin kontrol hissesine sahiptir. Osem, işgal altındaki Filistin'de faaliyet gösteren bir İsrailli gıda üreticisidir. Nestlé, Osem'in %53,8'ine sahip olan İsviçreli çok uluslu bir yiyecek ve içecek şirketidir. Ayrıca Nestlé'nin, Gazze Şeridi'ne yaklaşık 2 km uzaklıktaki Sderot yerleşiminde bir Araştırma ve Geliştirme Merkezi bulunmaktadır. Bu bağlantılar nedeniyle, Perrier'i boykot etmektedir.`,
   alternative_products: [
    "kizilay",
    "beypazari",
    "sarikiz",
    "ozkaynak",
    "buzdagi",
   ],
  },
  {
   name: "PepsiCo",
   slug: "pepsico",
   ctgry: "Şirket",
   foundedYear: 1965,
   founder: "Donald M. Kendall, Herman W. Lay",
   owner: "PepsiCo Inc.",
   description: `PepsiCo, merkezi ABD, New York'ta bulunan küresel bir gıda ve içecek şirketidir. 1965 yılında Pepsi-Cola ve Frito-Lay'in birleşmesiyle kurulmuştur. Bu birleşme, içecek ve atıştırmalık sektörlerinde güçlü bir konum elde etmek amacıyla gerçekleştirilmiştir.

PepsiCo'nun kuruluş hikayesi, 1898 yılında Caleb Bradham tarafından icat edilen Pepsi-Cola'nın ve 1932 yılında Herman W. Lay tarafından kurulan Frito-Lay'in birleşmesiyle başlamıştır. Bu birleşme, şirketin hem içecek hem de atıştırmalık sektörlerinde güçlü bir konum elde etmesini sağlamıştır.
country: "ABD",
PepsiCo, gazlı içecekler, meyve suları, spor ve enerji içecekleri, atıştırmalıklar gibi geniş bir ürün yelpazesine sahiptir. Şirket, Pepsi, Mountain Dew, Tropicana, 7UP (uluslararası), Lipton Ice Tea, Mirinda, Rockstar Energy gibi dünya çapında tanınan markalara sahiptir. PepsiCo, dünya genelinde 200'den fazla ülkede faaliyet göstermekte ve küresel içecek ve atıştırmalık pazarında Coca-Cola'nın en büyük rakibi olarak konumlanmaktadır.

Şirket, sadece ürün üretimiyle sınırlı kalmayıp, spor sponsorlukları, müzik etkinlikleri ve sosyal sorumluluk projeleriyle de aktif olarak yer almaktadır. PepsiCo, dünya çapında tanınan bir marka olarak, küresel gıda ve içecek pazarında lider konumlardan birinde bulunmaktadır.`,
   country: "ABD",
   website: "https://www.pepsico.com.tr/",
   img: "/pepsico-company.png",
   isBoycotted: "boykot",
   evidences: [
    "https://bdsmovement.net/news/%25E2%2580%259Csodastream-still-subject-boycott%25E2%2580%259D",
   ],
   boycottReason: `PepsiCo'nun boykot edilmesinin temel nedeni, şirketin İsrail ile olan güçlü ticari ve ekonomik bağlarıdır. PepsiCo, İsrail merkezli SodaStream markasının tamamını 3,2 milyar dolara satın almış ve Sabra markasının %50 hissesine sahiptir.

SodaStream, İsrail'in gayrimeşru yerleşimlerinde fabrikalar açarak yasadışı işgale olanak sağlamaktadır. Bu yerleşimler, uluslararası hukuka göre yasadışı kabul edilmekte ve Filistin topraklarının işgali anlamına gelmektedir. Bu fabrikalarda çalışmak zorunda kalan Filistinliler, ciddi ayrımcılığa maruz kaldıklarını ve kendilerine "köle gibi" davranıldığını ifade etmektedir.

Sabra markasının hakim hissedarı olan Strauss Group, İsrail askeri birimlerine destek ve malzeme tedariki sağlamaktadır. Bu durum, PepsiCo'nun İsrail'in askeri operasyonlarına da dolaylı olarak katkıda bulunduğu anlamına gelmektedir. PepsiCo, 1992 yılından beri İsrail'de faaliyet göstermekte ve İsrail ekonomisine önemli katkılarda bulunmaktadır.

Bu ticari ve ekonomik bağlantılar nedeniyle, Filistin davasına destek vermek isteyen ve İsrail'in işgalci politikalarına karşı duran tüketiciler, PepsiCo'ya ait tüm markaları boykot etmeyi bir sorumluluk olarak görmektedir. Bu nedenle, PepsiCo'ya ait tüm markalar boykot edilmektedir.`,
   subBrands: [
    {
     name: "Frito-Lay",
     slug: "frito-lay",
     country: "ABD",
     ctgry: "Yiyecek",
     founder: "Charles Elmar Doolin ve Herman W. Lay",
     owner: "PepsiCo",
     country: "ABD",
     alternative_products: [],
     img: "/frito-lay.png",
     isBoycotted: "boykot",
     website: "https://www.fritolay.com.tr/",
     description: `Frito-Lay, 1930'ların başında The Frito Company ve H.W. Lay & Company'nin birleşmesiyle kurulmuş, 1961 yılında Frito-Lay, Inc. adını almıştır. 1964 yılında PepsiCo ile birleşerek PepsiCo, Inc.'in temel alt şirketlerinden biri haline gelmiştir. Mısır, patates cipsi ve benzeri atıştırmalık gıdalar üreten ve pazarlayan şirket, ABD'de pazarın %40'ına, dünya genelinde ise %30'una sahiptir. Frito-Lay, PepsiCo'nun toplam satışlarının %31'ini oluşturmaktadır. Lay's, Ruffles, Doritos, Cheetos, Fritos, Tostitos, Sun Chips gibi dünya çapında tanınan birçok markaya sahiptir.`,
     boycottReason: `Frito-Lay, PepsiCo'nun alt şirketi olduğu için boykot listesindedir. PepsiCo, İsrail merkezli SodaStream markasının tamamına ve İsrail merkezli Sabra markasının %50'sine sahiptir. SodaStream, İsrail'deki yasadışı yerleşimlerde fabrikalar açarak yasadışı işgali kolaylaştırmakla suçlanmaktadır. Sabra markasının dominant hissedarı Strauss Group, İsrail askeri birimlerine destek ve malzeme tedariki sağlamaktadır. Bu nedenlerle Frito-Lay ve tüm alt markaları boykot edilmektedir.`,
     subBrands: [
      {
       name: "Çerezza",
       country: "ABD",
       foundedYear: null,
       founder: "Frito-Lay",
       owner: "Frito-Lay",
       country: "ABD",
       img: "/cerezza.png",
       isBoycotted: "boykot",
       website: "",
       description: `Çerezza, Frito-Lay'in Türkiye pazarı için ürettiği tuzlu atıştırmalık markasıdır. PepsiCo'nun Frito-Lay şirketi bünyesinde faaliyet gösteren marka, Türkiye'deki tüketicilere yönelik ürünler sunmaktadır.`,
       boycottReason: `Çerezza, Frito-Lay'in alt markası olduğu için boykot listesindedir. Frito-Lay, PepsiCo'nun alt şirketidir ve PepsiCo'nun İsrail ile olan ticari ilişkileri (SodaStream ve Sabra markalarına sahip olması) nedeniyle boykot edilmektedir.`,
       evidences: [
        "https://bdsmovement.net/news/%25E2%2580%259Csodastream-still-subject-boycott%25E2%2580%259D",
       ],
      },
      {
       name: "Lay's",
       country: "ABD",
       foundedYear: 1932,
       founder: "Herman W. Lay",
       owner: "Frito-Lay",
       country: "ABD",
       img: "/lays.png",
       isBoycotted: "boykot",
       website: "https://www.lays.com.tr/",
       description: `Lay's, 1932 yılında Herman W. Lay tarafından kurulmuş patates cipsi markasıdır. Farklı ülkelerde farklı isimlerle bilinmektedir: Birleşik Krallık ve İrlanda'da "Walkers", Mısır'da "Chipsy", Vietnam'da "Poca", İsrail'de "Tapuchips", Meksika'da "Sabritas". 1965'ten itibaren PepsiCo'nun Frito-Lay şirketi bünyesinde pazarlanmaktadır. Lay's, dünya çapında en çok satan patates cipsi markalarından biridir ve Klasik, Baharat çeşnili, Mevsim Yeşilliği-Yoğurtlu, Zeytinyağlı gibi çeşitli lezzetlerde üretilmektedir.`,
       boycottReason: `Lay's, Frito-Lay'in alt markası olduğu için boykot listesindedir. Frito-Lay, PepsiCo'nun alt şirketidir ve PepsiCo'nun İsrail ile olan ticari ilişkileri (SodaStream ve Sabra markalarına sahip olması) nedeniyle boykot edilmektedir.`,
       evidences: [
        "https://bdsmovement.net/news/%25E2%2580%259Csodastream-still-subject-boycott%25E2%2580%259D",
       ],
      },
      {
       name: "Doritos",
       country: "ABD",
       foundedYear: 1966,
       founder: "Frito-Lay",
       owner: "Frito-Lay",
       country: "ABD",
       img: "/doritos.png",
       isBoycotted: "boykot",
       website: "https://www.doritos.com.tr/",
       description: `Doritos, Frito-Lay tarafından üretilen ve PepsiCo'nun tam sahibi olduğu tortilla cipsi markasıdır. 1966 yılında ABD'de piyasaya sürülmüş ve ulusal olarak satılan ilk tortilla cipsi olmuştur. Marka adı, İspanyolca "doradito" (kızarmış ve altın renkli) kelimesinden türetilmiştir. Doritos'un kökeni Disneyland'taki Casa de Fritos restoranına dayanmaktadır. Fazla tortillaları değerlendirmek için oluşturulan cipsler, hızla popüler olmuş ve Frito-Lay'in dikkatini çekmiştir. İlk lezzeti "Toasted Corn" olan Doritos, 1967'de "taco", 1972'de "Nacho Cheese" lezzetini piyasaya sürmüştür. 1990'larda "Spicy Nacho" ve "Cool Ranch" gibi popüler lezzetler eklenmiştir.`,
       boycottReason: `Doritos, Frito-Lay'in alt markası olduğu için boykot listesindedir. Frito-Lay, PepsiCo'nun alt şirketidir ve PepsiCo'nun İsrail ile olan ticari ilişkileri (SodaStream ve Sabra markalarına sahip olması) nedeniyle boykot edilmektedir.`,
       evidences: [
        "https://bdsmovement.net/news/%25E2%2580%259Csodastream-still-subject-boycott%25E2%2580%259D",
       ],
      },
      {
       name: "Cheetos",
       country: "ABD",
       foundedYear: 1948,
       founder: "Frito-Lay",
       owner: "Frito-Lay",
       country: "ABD",
       img: "/cheetos.png",
       isBoycotted: "boykot",
       website: "https://www.cheetos.com.tr/",
       description: `Cheetos, 1948 yılında Chee-tos adıyla kurulmuş, birçok ülkede satılan cips markasıdır. Maskotu Chester olan marka, Türkiye'de Frito-Lay tarafından üretilmektedir. 1998 yılında adı Cheetos olarak değiştirilmiştir. Frito-Lay'in Türkiye'de sattığı diğer markalar arasında Doritos, Lay's ve Ruffles bulunmaktadır. Cheetos, kampanyaları sayesinde Türkiye'de en çok satan cips markalarından biri haline gelmiştir.`,
       boycottReason: `Cheetos, Frito-Lay'in alt markası olduğu için boykot listesindedir. Frito-Lay, PepsiCo'nun alt şirketidir ve PepsiCo'nun İsrail ile olan ticari ilişkileri (SodaStream ve Sabra markalarına sahip olması) nedeniyle boykot edilmektedir.`,
       evidences: [
        "https://bdsmovement.net/news/%25E2%2580%259Csodastream-still-subject-boycott%25E2%2580%259D",
       ],
      },
      {
       name: "Ruffles",
       country: "ABD",
       foundedYear: 1948,
       founder: "Bernhardt Stahmer",
       owner: "Frito-Lay",
       country: "ABD",
       img: "/ruffles.png",
       isBoycotted: "boykot",
       website: "https://www.ruffles.com.tr/",
       description: `Ruffles, PepsiCo'nun Frito-Lay şirketinin sahibi olduğu bir cips markasıdır. 1958 yılında Frito-Lay tarafından hakları alınmıştır. Tırtıklı patates cipsi üretir. Sloganı "Ruffles'la hayatı enlerde yaşadır" şeklindedir. Birleşik Krallık'ta McCoy's adıyla üretilir. Türkiye'de de satılmaktadır. Frito-Lay'in Türkiye'de sattığı diğer markalar arasında Doritos, Lay's ve Cheetos bulunmaktadır.`,
       boycottReason: `Ruffles, Frito-Lay'in alt markası olduğu için boykot listesindedir. Frito-Lay, PepsiCo'nun alt şirketidir ve PepsiCo'nun İsrail ile olan ticari ilişkileri (SodaStream ve Sabra markalarına sahip olması) nedeniyle boykot edilmektedir.`,
       evidences: [""],
      },
      {
       name: "Rocco",
       country: "ABD",
       foundedYear: null,
       founder: "Frito-Lay",
       owner: "Frito-Lay",
       country: "ABD",
       img: "/rocco.png",
       isBoycotted: "boykot",
       website: "",
       description: `Rocco, Frito-Lay'in tatlı atıştırmalık markasıdır. PepsiCo'nun Frito-Lay şirketi bünyesinde faaliyet gösteren marka, Türkiye pazarında da yer almaktadır.`,
       boycottReason: `Rocco, Frito-Lay'in alt markası olduğu için boykot listesindedir. Frito-Lay, PepsiCo'nun alt şirketidir ve PepsiCo'nun İsrail ile olan ticari ilişkileri (SodaStream ve Sabra markalarına sahip olması) nedeniyle boykot edilmektedir.`,
       evidences: [""],
      },
     ],
    },
    {
     name: "Pepsi",
     slug: "pepsi",
     ctgry: "İçecek",
     country: "ABD",
     founder: "Caleb Bradham",
     owner: "PepsiCo Inc.",
     description: `Pepsi, PepsiCo'nun amiral gemisi ürünü olan kola markasıdır. 1893 yılında eczacı Caleb Bradham tarafından "Brad's Drink" adıyla icat edilmiş, 1898 yılında ise Pepsi-Cola adıyla tescillenmiştir. Pepsi, Coca-Cola'nın en büyük rakibi olarak dünya çapında tanınmaktadır ve 200'den fazla ülkede satılmaktadır.`,
     country: "ABD",
     website: "https://www.pepsi.com.tr/",
     img: "/pepsi.jpg",
     isBoycotted: "boykot",
     boycottReason:
      "PepsiCo'nun alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
      "juss",
      "dimes",
     ],
    },
    {
     name: "Sting",
     slug: "sting",
     ctgry: "İçecek",
     country: "ABD",
     founder: "PepsiCo Inc.",
     owner: "PepsiCo Inc.",
     description: `Sting, enerji içeceği kategorisinde faaliyet gösteren popüler bir markadır. Marka, özellikle gençler ve yoğun tempolu yaşam tarzına sahip kişiler arasında yaygın olarak tüketilmektedir. Türkiye'de de farklı aromalarla satışta bulunan Sting, enerjiyi artırıcı içeriğiyle tercih edilen bir içecek seçeneğidir.`,
     country: "ABD",
     website: "https://stingenergy.com/",
     img: "/sting.png",
     isBoycotted: "boykot",
     boycottReason:
      "PepsiCo'nun alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
      "juss",
      "dimes",
     ],
    },
    {
     name: "7up",
     slug: "7up",
     ctgry: "İçecek",
     country: "ABD",
     founder: "Charles Leiper Grigg",
     owner: "PepsiCo Inc. (ABD dışı)",
     description: `7UP, dünyaca ünlü limonlu gazoz markalarından biridir. Marka, 1929 yılında geliştirilmiştir. 7UP'ın orijinal formülünde lityum sitrat maddesi bulunmaktaydı; ancak bu madde 1948 yılında ABD'de yasaklanınca formülden çıkarılmıştır. Markanın sahipliği bölgelere göre farklılık göstermektedir: ABD dışındaki ülkelerde üretim ve dağıtım hakları PepsiCo'ya aittir. Türkiye, Avrupa ve birçok ülkede 7UP, PepsiCo tarafından üretilip pazarlanmaktadır.`,
     country: "ABD",
     website: "https://www.7up.com/en",
     img: "/7up.png",
     isBoycotted: "boykot",
     boycottReason:
      "PepsiCo'nun alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
      "juss",
      "dimes",
     ],
    },
    {
     name: "Yedigün & Mirinda",
     slug: "yedigun-mirinda",
     ctgry: "İçecek",
     foundedYear: 1959,
     founder: "Yerel Girişimciler",
     owner: "PepsiCo Inc.",
     description: `Mirinda, dünyaca ünlü meyve aromalı bir gazoz markasıdır. İlk kez 1959 yılında İspanya'da geliştirilen marka, kısa sürede Avrupa ve Latin Amerika'da büyük bir popülerlik kazanmıştır. Türkiye'de "Yedigün" ismiyle satılan bu içeceğin, dünya genelindeki orijinal adı Mirinda'dır. 1970 yılında PepsiCo tarafından satın alınan Mirinda, şirketin küresel içecek portföyündeki en önemli markalardan biri haline gelmiştir.`,
     country: "İspanya & ABD",
     website: "https://www.pepsi.ps/products/mirinda",
     img: "/yedigun.png",
     isBoycotted: "boykot",
     boycottReason:
      "PepsiCo'nun alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
      "juss",
      "dimes",
     ],
    },
    {
     name: "Mountain Dew",
     slug: "mountain-dew",
     ctgry: "İçecek",
     country: "ABD",
     founder: "Barney and Ally Hartman",
     owner: "PepsiCo Inc.",
     description: `Mountain Dew, yüksek kafein içeriği ve kendine özgü limon-lime aromasıyla bilinen ABD kökenli bir gazoz markasıdır. Marka, 1940'larda Tennessee'de geliştirilmiş ve başlangıçta ev yapımı bir içecek olarak satışa sunulmuştur. Mountain Dew, özellikle enerji verici özellikleri ve canlı tadıyla hızla popülerlik kazanmış, günümüzde PepsiCo tarafından üretilip dünya çapında dağıtılmaktadır.`,
     country: "ABD",
     website: "https://www.mountaindew.com/products",
     img: "/mountain-dew.png",
     isBoycotted: "boykot",
     boycottReason:
      "PepsiCo'nun alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
      "juss",
      "dimes",
     ],
    },
    {
     name: "Punica",
     slug: "punica",
     ctgry: "İçecek",
     foundedYear: 1977,
     founder: "Dettmeyer GmbH",
     owner: "PepsiCo Inc.",
     description: `Punica, 1977 yılında Dettmeyer GmbH tarafından yaratılan ve Alman karbonatlı meşrubat olarak satılan bir markadır. Marka, yıllar içinde farklı şirketlerin eline geçmiştir; 1984'te Procter & Gamble tarafından, 2005'te ise PepsiCo tarafından satın alınmıştır. Marka, 2021 yılı Ağustos ayına kadar PepsiCo'ya ait kalmıştır.`,
     country: "Almanya & ABD",
     img: "/punica.png",
     isBoycotted: "boykot",
     boycottReason:
      "PepsiCo'nun alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
      "juss",
      "dimes",
     ],
    },
    {
     name: "Fruko",
     slug: "fruko",
     ctgry: "İçecek",
     foundedYear: 1967,
     founder: "Tamek Holding",
     owner: "PepsiCo Inc.",
     description: `Fruko, Türkiye'de 1967 yılında Tamek Holding tarafından kurulan bir gazoz markasıdır. 2002 Mart ayında 100 milyon dolara PepsiCo'ya devredilmiş ve markanın alt markası haline gelmiştir. Fruko, Türkiye'de gazoz ve meyveli gazlı içecekleri ile tanınır ve "On yüz bin milyon baloncuk" sloganıyla tüketicilere sunulmuştur. Türkiye'de Fruko, 6 fabrika ve dört depo ile üretim ve dağıtımını sürdürmektedir.`,
     country: "Türkiye & ABD",
     website: "https://www.fruko.com.tr/",
     img: "/fruko.png",
     isBoycotted: "boykot",
     boycottReason:
      "PepsiCo'nun alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
      "juss",
      "dimes",
     ],
    },
    {
     name: "Rockstar",
     slug: "rockstar",
     ctgry: "İçecek",
     country: "ABD",
     founder: "Russell Weiner",
     owner: "PepsiCo Inc.",
     description: `Rockstar, 2001 yılında Russell Weiner tarafından kurulmuş bir enerji içeceği markasıdır. Marka, Red Bull'un 240 ml'lik kutularının aksine 470 ml'lik kutu boyutunu kullanarak pazara dikkat çekmiştir. Rockstar, 2020 yılında PepsiCo tarafından 3.85 milyar dolar karşılığında satın alınmıştır. Marka, uluslararası alanda PepsiCo'ya aittir.`,
     country: "ABD",
     website: "https://www.rockstarenergy.com/",
     img: "/rockstar.png",
     isBoycotted: "boykot",
     boycottReason:
      "PepsiCo'nun alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
      "juss",
      "dimes",
     ],
    },
    {
     name: "Tropicana",
     slug: "tropicana",
     ctgry: "İçecek",
     country: "ABD",
     founder: "Anthony T. Rossi",
     owner: "PepsiCo Inc.",
     description: `Tropicana, meyve suyu ve meyve bazlı içecekler kategorisinde dünya çapında bilinen bir markadır. 1947 yılında ABD'de kurulan marka, özellikle portakal suyu başta olmak üzere çeşitli meyve sularıyla tüketiciye sunulmaktadır. Tropicana, 1998 yılında PepsiCo tarafından satın alınmıştır. PepsiCo'nun geniş dağıtım ağı sayesinde Tropicana ürünleri dünya genelinde ve Türkiye'de yaygın şekilde bulunabilmektedir.`,
     country: "ABD",
     website: "https://tropicana.com.tr/",
     img: "/tropicana.png",
     isBoycotted: "boykot",
     boycottReason:
      "PepsiCo'nun alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
      "juss",
      "dimes",
     ],
    },
    {
     name: "KeVita",
     slug: "kevita",
     ctgry: "İçecek",
     country: "ABD",
     founder: "Bill Moses",
     owner: "PepsiCo Inc.",
     description: `KeVita, organik mayalı (fermente) probiyotik içecekler, kombucha ve sirkeli tonikler konusunda uzmanlaşmış bir Amerikan markasıdır. 2009 yılında kurulmuştur ve kendisini sağlıklı yaşam ve yenilikçi sağlık yaklaşımlarını desteklemeye adamıştır. Marka, sağlıklı içecek pazarında hızla büyümüş ve 2016 yılında küresel gıda ve içecek devi PepsiCo tarafından satın alınmıştır.`,
     country: "ABD",
     website: "https://kevita.com/",
     img: "/kevita.png",
     isBoycotted: "boykot",
     boycottReason:
      "PepsiCo'nun alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
      "juss",
      "dimes",
     ],
    },
    {
     name: "Schwip Schwap",
     slug: "schwip-schwap",
     ctgry: "İçecek",
     foundedYear: 1969,
     founder: "Yerel Girişimciler",
     owner: "PepsiCo Inc.",
     description: `Schwip Schwap, 1969 yılında Güney Almanya'da üretilmeye başlanmış, kafein içeren popüler bir meşrubat markasıdır. Bu içecek, kola ve portakal suyu karışımından oluşur ve Almanya ile İsviçre pazarları için özel olarak üretilmiştir. Schwip Schwap markası, küresel gıda ve içecek devi PepsiCo'ya ait tescilli bir markadır. Almanya'daki Neu-Isenburg tesislerinde PepsiCo tarafından üretilmektedir.`,
     country: "Almanya & ABD",
     website:
      "https://design.pepsico.com/design-dialogue/schwip-schwap-gets-modern-redesign",
     img: "/schwip-schwap.png",
     isBoycotted: "boykot",
     boycottReason:
      "PepsiCo'nun alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
      "juss",
      "dimes",
     ],
    },
   ],
  },
  {
   name: "Eduscho",
   slug: "eduscho",
   ctgry: "İçecek",
   foundedYear: 1924,
   founder: "Eduard Schopf",
   owner: "Maxingvest Holding (Herz Ailesi)",
   description: `Eduscho, 1924 yılında Bremen'de kurulan köklü bir Alman kahve markasıdır. Almanya ve Avusturya gibi ülkelerde yaygın olarak bilinen marka, özellikle kaliteli kahve ürünleriyle tanınmaktadır. 1997 yılında büyük kahve perakendecisi Tchibo tarafından satın alınarak, bu şirketin çatısı altına girmiştir. Günümüzde Eduscho, Tchibo'nun globaldeki kahve operasyonlarının bir parçası olarak, Herz Ailesi'nin sahip olduğu Maxingvest Holding bünyesinde faaliyetlerini sürdürmektedir. `,
   country: "Almanya",
   website: "https://www.eduscho.com/tr/tr",
   img: "/eduscho.png",
   isBoycotted: "boykot",
   boycottReason: `Eduscho markası, sahibi olduğu Tchibo markasıyla birlikte boykot çağrılarıyla karşı karşıyadır. Bu çağrıların temel nedeni, Tchibo'nun ana sahiplerinden olan Herz Ailesi'nin dolaylı yollardan İsrail'i desteklediği iddiasıdır.
     Özellikle Herz Ailesi'nin sahip olduğu bir diğer büyük şirket olan Beiersdorf'un İsrail yanlısı açıklamaları, Eduscho ve bağlı olduğu Tchibo grubunu bu bağlamda eleştirilerin ve boykot hedeflerinin odağı haline getirmiştir. Tüketiciler, bu ticari bağlantılar nedeniyle Eduscho ürünlerini boykot ederek tepkilerini göstermektedirler.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Tang",
   slug: "tang",
   ctgry: "İçecek",
   foundedYear: 1957,
   country: "ABD",
   owner: "Mondelēz International",
   description: `Tang, 1957 yılında General Foods gıdabilimcisi William A. Mitchell tarafından formüle edilmiş ve ilk olarak 1959 yılında toz haline getirilmiş meyve aromalı bir içecek karışımıdır. Uzay programlarında kullanılmasıyla da popülerlik kazanmıştır.
     Marka, başlangıçtaki sahibi General Foods'un ardından el değiştirmiştir. Tang markası şu anda, Kraft Foods şirketinden ayrılan Kuzey Amerika şirketi Mondelēz International'a aittir. Mondelēz International'ın alt markası olan Tang, dünya çapında birçok ülkede toz formunda meyve aromalı içecek karışımı olarak tüketicilere sunulmaktadır.`,
   country: "ABD",
   website: "",
   img: "/tang.png",
   isBoycotted: "boykot",
   boycottReason: `Tang'ın boykot edilmesinin temel nedeni, markanın çatı kuruluşu olan Mondelēz International şirketinin İsrail ile olan ticari ve ekonomik ilişkileridir. Mondelēz, İsrail'deki gıda girişimlerine yatırımlar yaparak buradaki ekonomik ilişkilerini hem operasyonel hem de Ar-Ge (Araştırma ve Geliştirme) yatırımlarıyla pekiştirmektedir.
     Mondelēz'in, özellikle İsrail'de The Kitchen Hub ve Torr isimli iki gıda girişimine yatırım yapması, bu boykot çağrılarına neden olmuştur. Hatta bahsedilen girişimleri kuran kişiler arasında Mondelēz'in eski çalışanlarının bulunması da, şirketin İsrail ekonomisine olan yakınlığını gösteren faktörlerdendir. Tüketiciler, Mondelēz International'ın bu yatırımları nedeniyle Tang markasını boykot listelerine dahil etmektedir.`,
   alternative_products: ["nazo", "juss", "dimes"],
  },
  {
   name: "Lór",
   slug: "lor",
   ctgry: "İçecek",
   foundedYear: 1992,
   founder: "JDE Peet's NV",
   owner: "JDE Peet's NV",
   description: `L'Or, espresso kapsülleri, kafeinsiz kahve, kahve kapsülü, kahve pod makineleri, kara cuma kahve makinesi, lungo kahve kapsülleri ve ristretto kahve kapsülleri gibi çeşitli kahve ürünleri sunan uluslararası bir kahve markasıdır.
     Marka, JDE Peet's NV bünyesindeki Koninklijke Douwe Egberts B.V. tarafından üretilmektedir. L'Or'un çatı kuruluşu JDE Peet's NV'nin ortaklık yapısı karmaşıktır:
     •	Hisselerin yüzde 60,5'i Lüksemburg merkezli JAB Holding Company S.à r.l.'ye aittir.
     •	Hisselerin yüzde 22,9'u ise Amerika merkezli Mondelēz International Inc.'e aittir.
     Bu sahiplik yapısı nedeniyle L'Or, Hollanda, Lüksemburg ve ABD ile bağlantılı global bir markadır.`,
   country: "ABD & Hollanda",
   website: "https://www.lorespresso.com/en_gb",
   img: "/lor.png",
   isBoycotted: "boykot",
   boycottReason: `L'Or markası, boykot listelerine dahil edilmiş ve tüketiciler tarafından tercih edilmemesi önerilmektedir. Boykotun temelinde, markanın ait olduğu çatı kuruluşun ve hissedarların siyasi veya ticari duruşlarına yönelik olumsuz açıklamalar ya da destekler olduğu iddiaları yer almaktadır.
     L'Or'un sahibi olan JDE Peet's NV ve onun büyük hissedarları Mondelēz International ve JAB Holding Company gibi uluslararası şirketlerin, özellikle Mondelēz'in İsrail'deki ticari yatırımları (Jacobs markasının boykot nedeni de bu bağlantıydı), L'Or'un da boykot hedefi haline gelmesine neden olmuştur. Bu nedenle, marka "boykot hususunda güvenilir olarak kabul edilmemekte" ve tüketicilerin tepkilerini göstermek için boykot edilmektedir.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Senseo's",
   slug: "senseos",
   ctgry: "İçecek",
   foundedYear: 2001,
   country: "ABD",
   owner: "JDE Peet's NV",
   description: `Senseo's, özellikle kahve kapsülleri ve kahve makineleri pazarına odaklanan bir kahve markasıdır. Marka, pratik ve tek servislik kahve çözümleriyle tanınır.
     Senseo's, tıpkı Jacobs markası gibi, Jacobs Douwe Egberts (JDE) Peet's NV bünyesinde faaliyet göstermektedir. Bu marka, Hollanda, Lüksemburg ve ABD merkezli büyük holdinglerin hissedarlığında olan global bir kahve grubunun parçasıdır. JDE Peet's NV'nin büyük hissedarları arasında Lüksemburg merkezli JAB Holding Company ve azınlık hissedarı olan Mondelēz International bulunmaktadır.`,
   country: "ABD",
   website: "https://www.senseo.us/",
   img: "/senseos.png",
   isBoycotted: "boykot",
   boycottReason: `Senseo's markasının boykot edilme nedeni, markanın ait olduğu JDE Peet's NV grubunun sahiplik yapısı ve ticari ilişkileridir.
     Markanın azınlık hissedarı olan Mondelēz International şirketinin, İsrail'deki gıda girişimlerine yaptığı yatırımlar nedeniyle boykot ediliyor olması, onun hissedarı olduğu Senseo's markasını da dolaylı olarak boykot hedefine sürüklemektedir. Bu durumdan dolayı marka, boykot listelerine dahil edilmiş ve tüketicilerin boykotu gerektiren olumsuz açıklamalar veya destekler söz konusudur. Tüketicilere, Mondelēz International'ın ticari bağlantıları sebebiyle bu markayı tercih etmemeleri önerilmektedir.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Rauch",
   slug: "rauch",
   ctgry: "İçecek",
   foundedYear: 1919,
   founder: "Josef Rauch",
   owner: "Rauch Fruchtsäfte GmbH",
   description: `Rauch, Avrupa merkezli, köklü bir meyve suyu markasıdır. Marka, çeşitli meyve suyu, nektar ve içecekleriyle tanınmaktadır. Kaliteli ve yenilikçi içecekler sunma hedefiyle hem ulusal hem de uluslararası pazarlarda önemli bir oyuncudur.
     Rauch, geniş ürün yelpazesi ve farklı meyve lezzetleri ile tüketicilere hitap etmekte ve içecek sektöründe güçlü bir konuma sahiptir.`,
   country: "Avusturya & Avrupa ",
   website: "https://www.rauch.cc/",
   img: "/rauch.png",
   isBoycotted: "boykot",
   boycottReason: `Rauch markası, boykot listelerine dahil edilmiş ve tüketiciler tarafından tercih edilmemesi önerilmektedir. Boykotun temelinde, markanın ticari duruşu, sahiplik yapısı veya uluslararası ilişkileri üzerinden İsrail'e destek sağladığına yönelik olumsuz açıklamalar ya da iddialar yer almaktadır.
     Bu iddialar nedeniyle Rauch, "Boykot Hususunda" güvenilir bir marka olarak kabul edilmemekte ve tüketicilere, bu tür desteklerle ilişkilendirilen markalardan kaçınmaları tavsiye edilmektedir.`,
   alternative_products: ["juss", "dimes", "tamek", "meysu", "fruit-pocket"],
  },
  {
   name: "Blu Energy Drink",
   slug: "blu-energy-drink",
   ctgry: "İçecek",
   foundedYear: 2005,
   founder: "Yerel Bulgar Girişimciler",
   owner: "BLU Energy Drink Ltd.",
   description: `Blue Energy Drink, dünya çapında binlerce tüketici tarafından tercih edilen premium bir enerji içeceği markasıdır. Marka, kurulduğu günden bu yana üstün kalitesi ve özgün lezzetleriyle tanınmıştır. Markanın merkez adresi Sofya, Bulgaristan'da bulunmaktadır.
     BLU, klasik tadının yanı sıra Mojito ve Day gibi farklı lezzet seçenekleri sunmaktadır. İçecekler genellikle 250 ml kutularda satılır ve kafein, taurin ve B vitaminleri gibi enerji verici bileşenler içerir. BLU, tüketicilerinin sağlık ve dini tercihlerini de dikkate alarak ürünlerinin vegan, helal ve alkolsüz olduğunu belirtmektedir. Marka, 30'dan fazla ülkede dağıtılarak küresel bir başarı elde etmiştir.`,
   country: "Bulgaristan",
   website: "https://bluenergydrink.com/",
   img: "/blu-energy-drink.png",
   isBoycotted: "boykot",
   boycottReason: `Blue Energy Drink markası, boykot listelerine dahil edilmiş olup, tüketiciler tarafından tercih edilmemesi önerilmektedir. Boykotun temelinde, markanın ticari duruşu, sahiplik yapısı veya uluslararası ilişkileri üzerinden İsrail'e destek sağladığına yönelik olumsuz açıklamalar ya da iddialar yer almaktadır.
     Bu iddialar nedeniyle marka, "Boykot Hususunda" güvenilir bir marka olarak kabul edilmemekte ve tüketicilere, boykot edilmesini gerektiren durumlar söz konusu olduğu için bu markadan kaçınmaları tavsiye edilmektedir.`,
   alternative_products: ["dirilis"],
  },
  {
   name: "Maxwell House",
   slug: "maxwell",
   ctgry: "İçecek",
   foundedYear: 1892,
   founder: "Joel Owsley Cheek",
   owner: "Kraft Heinz (Kuzey Amerika), JDE Peet's NV (Diğer)",
   description: `Maxwell House, 1892 yılında Joel Owsley Cheek tarafından tanıtılan bir Amerikan kahve markasıdır. Marka, adını ilk büyük müşterisi olan Nashville, Tennessee'deki Maxwell House Oteli'nden almıştır.
     Ücountry: "ABD",
          •	Öğütülmüş kahve (Ground Coffee).
          •	Çeşitli harmanlar (Breakfast Blend - Mild, Medium, Dark gibi).
     Maxwell House, Kuzey Amerika'da Kraft Heinz'a, dünyanın geri kalanında ise JDE Peet's'e aittir. Şirketin sloganı "Son damlasına kadar iyi" ("Good to the last drop") olup, bu slogan genellikle logosuna ve etiketlerine basılıdır.`,
   country: "ABD",
   website: "https://themaxwell.house/",
   img: "/maxwell.png",
   isBoycotted: "boykot",
   boycottReason: `Maxwell House, Kuzey Amerika dışında JDE Peet's'e, Kuzey Amerika'da ise Kraft Heinz'e ait olduğu için, her iki çatı şirketin ticari bağlantıları nedeniyle boykot listelerinde yer almaktadır.
     Boykot çağrılarının temel nedenleri:
     1.	JDE Peet's Bağlantısı: Dünyanın geri kalanında sahibi olan JDE Peet's NV'nin hisseleri, İsrail'deki gıda girişimlerine yatırım yapan Mondelez International'a (%22,9) ve ticari bağları olduğu iddia edilen JAB Holding Company S.à r.l.'ye (%60,5) aittir.
     2.	Kraft Heinz Bağlantısı: Kuzey Amerika'daki sahibi olan Kraft Heinz'ın da İsrail ile ticari ve ekonomik bağlantıları olduğu gerekçesiyle boykot edilmektedir.
     Bu çifte ticari ve siyasi duruş nedeniyle Maxwell House markası, bağlı olduğu holdinglerin politikaları yüzünden boykot listelerinde yer almaktadır.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "RC Cola",
   slug: "rc-cola",
   ctgry: "İçecek",
   foundedYear: 1905,
   founder: "Claude A. Hatcher",
   owner: "Keurig Dr Pepper (ABD), Cott Corporation (Uluslararası)",
   description: `RC Cola (Royal Crown Cola), 1905 yılında Claude A. Hatcher tarafından Amerika Birleşik Devletleri'nin Columbus, Georgia şehrinde geliştirilen, kola aromalı bir meşrubattır.
     Tarihsel Bilgiler:
         •	RC Cola, 1950'lerde alüminyum kutuda meşrubat satan ilk şirket olmuştur.
         •	Marka, 1950'lerde Diet Rite Cola'yı piyasaya süren ve kafeinsiz kola olan RC 100'ü tanıtan ilk büyük şirketlerdendir.
     Gcountry: "ABD",
         •	RC Cola, günümüzde ABD'de Keurig Dr Pepper tarafından, uluslararası alanda ise Cott şirketi tarafından pazarlanmaktadır.
         •	Royal Crown operasyonları, 2008 yılından sonra Dr Pepper Snapple Group'a (DPSG) katlanmış, DPSG ise 2018'de Keurig Green Mountain ile birleşerek RC Cola markasının şu anki sahipleri olan Keurig Dr Pepper olarak birleşmiştir.
     `,
   country: "ABD",
   website: "https://rccolainternational.com/ ",
   img: "/rc-cola.png",
   isBoycotted: "boykot",
   boycottReason: `RC Cola'nın boykot edilmesinin nedeni, markanın sahibi olan Amerika merkezli büyük şirket Keurig Dr Pepper'ın (KDP) ve uluslararası distribütörü Cott Corporation'ın (şimdiki adıyla Cott Corporation/Keurig Dr Pepper) ticari faaliyetleri ile ilişkilendirilmesidir.
     Boykot çağrılarının temel nedeni:
         •	Keurig Dr Pepper Bağlantısı: RC Cola'nın ana şirketi olan Keurig Dr Pepper'ın (KDP), İsrail ile doğrudan veya dolaylı ticari ve ekonomik bağları olduğu iddia edilmektedir. Boykot listeleri, KDP'nin küresel bir içecek devi olması ve ticari politikaları nedeniyle markanın tercih edilmemesi yönünde çağrı yapmaktadır.
     Bu ticari ve siyasi duruş nedeniyle RC Cola markası, bağlı olduğu büyük şirketin politikaları yüzünden boykot listelerinde yer almaktadır.`,
   alternative_products: [
    "cola-turka",
    "camlica",
    "uludag",
    "zafer-gazoz",
    "dirilis",
   ],
  },
  {
   name: "Orangina",
   slug: "orangina",
   ctgry: "İçecek",
   foundedYear: 1935,
   founder: "Agustín Trigo Miralles, Léon Beton",
   owner: "Suntory Holdings",
   description: `Orangina, 1930'ların başında İspanyol eczacı Agustín Trigo Miralles tarafından Naranjina adıyla icat edilmiş, hafif gazlı bir narenciye içeceğidir. İçecek, karbonatlı su, %12 narenciye suyu ve %2 portakal posasının birleşimidir.
     Tarihsel Bilgiler ve Sahiplik:
         •	Orijinal formülü 1935'te Cezayir'de yaşayan Fransız bir iş adamı olan Léon Beton'a satılmıştır.
         •	Marka, 1984 yılında Pernod Ricard grubuna katılmış, 2000 yılında ise Cadbury Schweppes tarafından satın alınmıştır.
         •	2006'da Cadbury, içecek bölümünü satma kararı almış, ancak ne Coca-Cola ne de PepsiCo onu satın almamıştır.
         •	Marka, günümüzde Japonya merkezli Suntory Holdings'e aittir.
     Markanın Üretim ve Dağıtım Ağındaki Bilgiler:
         •	Asya bölgesinde dağıtıcılar arasında İsrail'deki FM Global MediChem Ltd de bulunmaktadır.
         •	Dünyanın geri kalanında Suntory (Orangina Schweppes) markanın sahibi ve dağıtımının lisans altında olduğu ülkeler Japonya, Birleşik Krallık, Fransa, İsviçre ve İtalya'dır.`,
   country: "İtalya",
   website: "https://orangina.co.uk/",
   img: "/orangina.png",
   isBoycotted: "boykot",
   boycottReason: `Bu markanın boykot edilmesinin temel nedeni, ana şirketi olan Suntory Holdings'in uluslararası dağıtım ağında İsrail'e ait bir distribütörün bulunmasıdır.
     Boykot çağrılarının temel nedenleri:
         •	İsrail Distribütörü: Orangina'nın sahibi Suntory Holdings, Asya bölgesindeki distribütörleri arasında İsrail merkezli FM Global MediChem Ltd'ye yer vermektedir.
        •	Ekonomik İlişki: Bu ticari ilişki, boykot hareketlerini destekleyenler tarafından İsrail ekonomisine destek olarak görülmektedir.
     Bu ticari ve siyasi duruş nedeniyle Orangina markası, bağlı olduğu holdingin politikaları ve İsrail'deki ticari faaliyetleri yüzünden boykot listelerinde yer almaktadır.`,
   alternative_products: ["juss", "dimes", "tamek", "meysu", "fruit-pocket"],
  },
  {
   name: "Spezi",
   slug: "spezi",
   ctgry: "İçecek",
   foundedYear: 1956,
   founder: "Brauerei S. Riegele",
   owner: "Brauerei S. Riegele, Paulaner Brauerei Gruppe",
   description: `Spezi, Almanya'da 1950'lerden bu yana popülerliğini koruyan, kola ve portakallı meşrubatın karıştırılmasıyla hazırlanan bir gazlı içecek markasıdır. Markanın adı, Almanca'da "özel" anlamına gelen bir kelimeden gelmektedir ve genellikle "Cola-Mix-Getränk" olarak adlandırılır. Spezi, hem "Spezi Original" hem de "Spezi e:nergy" gibi çeşitlerle pazarda yer almaktadır. Markanın ticari hakları Almanya'da tescilli olup, üretimi Brauerei S. Riegele ve Paulaner Brauerei Gruppe gibi yerel şirketler tarafından lisans altında yapılmaktadır.`,
   country: "Almanya",
   website: "https://www.spezi.com/",
   img: "/spezi.png",
   isBoycotted: "boykot",
   boycottReason: `Spezi'nin boykot listelerinde yer almasının gerekçesi, markanın ana lisans sahiplerinden biri olan Paulaner Brauerei Gruppe'nin ticari ve hissedarlık yapısından kaynaklandığı iddia edilmektedir.
     Boykot çağrılarının temel nedenleri: 
         •	Ticari Bağlantılar: Spezi, her ne kadar yerel bir marka olarak görünse de, bazı boykot kaynakları markanın lisans ve dağıtım ağının, İsrail ile ticari bağları olduğu iddia edilen küresel şirketlerle dolaylı yoldan ilişkili olabileceği gerekçesiyle boykot edilmesi çağrısı yapmaktadır.
         •	Küresel Denge: Ayrıca, kola ve gazlı içecekler pazarında, İsrail'e destek verdiği gerekçesiyle boykot edilen Coca-Cola ve PepsiCo gibi devlerin ürünlerine karşı yerel bir alternatif olmaktan ziyade, bazı kaynaklar Spezi'nin de genel boykot listelerine dahil edilmesi gerektiğini savunmaktadır.
     Bu ticari ve siyasi duruş nedeniyle Spezi markası, boykot listelerinde yer almaktadır.`,
   alternative_products: [
    "cola-turka",
    "camlica",
    "uludag",
    "zafer-gazoz",
    "dirilis",
   ],
  },
  {
   name: "Pickwick",
   slug: "pickwick",
   ctgry: "İçecek",
   foundedYear: 1753,
   founder: "Yerel Hollanda Girişimciler",
   owner: "JDE Peet's NV",
   description: `Pickwick, kökeni 1753 yılına dayanan, Hollanda merkezli köklü bir çay markasıdır. Marka adını, Charles Dickens'ın The Pickwick Papers adlı romanından almıştır. Pickwick, geniş bir yelpazede siyah çay, yeşil çay, meyve ve bitki çayları sunmaktadır. Markanın arkasındaki şirket, küresel kahve ve çay devi olan JDE Peet's NV holdingidir. Pickwick, JDE Peet's'in önemli çay markalarından biridir ve Jacobs, Douwe Egberts, Moccona ve Peet's Coffee gibi markalarla aynı çatı altında yer almaktadır.`,
   country: "Hollanda",
   website: "https://www.pickwicktea.com/",
   img: "/pickwick.png",
   isBoycotted: "boykot",
   boycottReason: `Pickwick markasının boykot edilmesinin temel nedeni, sahibi olan JDE Peet's NV holdinginin hissedarlık yapısında yer alan Mondelez International'ın ve JAB Holding Company S.à r.l.'nin ticari faaliyetleridir.
     Boykot çağrılarının temel nedenleri:
         1.	Mondelez Hissedarlığı: Pickwick'in ana şirketi JDE Peet's NV'nin hisselerinin %22,9'u Amerika merkezli Mondelez International'a aittir. Mondelez, İsrail'deki gıda girişimlerinden olan The Kitchen Hub ve Torr firmalarına yatırım yaparak İsrail ekonomisi ile güçlü bağlarını pekiştirmiştir.
         2.	JAB Holding Bağlantısı: JDE Peet's NV'nin hisselerinin %60,5'i ise Lüksemburg merkezli JAB Holding Company S.à r.l.'ye aittir, bu holdingin de İsrail ile ticari bağları olduğu iddia edilmektedir.
     Bu ticari ve siyasi duruş nedeniyle Pickwick markası, bağlı olduğu holdinglerin politikaları yüzünden boykot listelerinde yer almaktadır.`,
   alternative_products: ["didi", "dogus", "ofcay", "caykur", "teatone"],
  },
  {
   name: "Kenco Coffee",
   slug: "kenco",
   ctgry: "İçecek",
   foundedYear: 1923,
   founder: "Kenya Coffee Company",
   owner: "JDE Peet's NV",
   description: `Kenco, Birleşik Krallık'ta (UK) oldukça popüler olan ve 1923 yılında kurulan köklü bir kahve markasıdır. Markanın adı, Kenya Coffee'nin kısaltması olarak ortaya çıkmıştır ve başlangıçta kahvelerini Kenya'dan tedarik etmeye odaklanmıştır. Kenco, geniş bir ürün yelpazesi sunmaktadır; bunlar arasında klasik hazır kahve, öğütülmüş kahve, kahve makinesi kapsülleri ve sürdürülebilirlik sertifikalı (örneğin Rainforest Alliance) ürünler yer alır.
     Kenco markası, uluslararası kahve ve çay devi olan JDE Peet's NV holdingine aittir. Kenco, JDE Peet's'in önemli bir markası olup, Jacobs, Douwe Egberts, Moccona, Peet's Coffee ve Pilão gibi markalarla aynı çatı altında yer almaktadır.`,
   country: "Birleşik Krallık",
   website: "https://www.kenco.co.uk/",
   img: "/kenco.png",
   isBoycotted: "boykot",
   boycottReason: `Kenco Coffee'nin boykot edilmesinin temel nedeni, sahibi olan JDE Peet's NV holdinginin hissedarlık yapısında yer alan Mondelez International'ın ve JAB Holding Company S.à r.l.'nin ticari faaliyetleridir.
     Boykot çağrılarının temel nedenleri:
         1.	Mondelez Hissedarlığı: Kenco'nun ana şirketi JDE Peet's NV'nin hisselerinin %22,9'u Amerika merkezli Mondelez International'a aittir. Mondelez, İsrail'deki gıda girişimlerinden olan The Kitchen Hub ve Torr firmalarına yatırım yaparak İsrail eko-nomisi ile güçlü bağlarını pekiştirmiştir.
         2.	JAB Holding Bağlantısı: JDE Peet's NV'nin hisselerinin %60,5'i ise Lüksemburg merkezli JAB Holding Company S.à r.l.'ye aittir, bu holdingin de İsrail ile ticari bağları olduğu iddia edilmektedir.
     Bu ticari ve siyasi duruş nedeniyle Kenco markası, bağlı olduğu holdinglerin politikaları yüzünden boykot listelerinde yer almaktadır.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Eckes Granini",
   slug: "eckes-granini",
   ctgry: "İçecek",
   foundedYear: 1857,
   founder: "Peter Eckes",
   owner: "Eckes-Granini Group GmbH",
   description: `Eckes-Granini Group GmbH, meyve suları, meyve nektarları ve meyveli içecekler konusunda uzmanlaşmış, uluslararası alanda faaliyet gösteren bir Alman şirketidir. Av-rupa'nın önde gelen meyve suyu ve meyve bazlı içecek üreticilerinden biridir. Şirketin portföyünde birçok tanınmış yerel ve uluslararası marka bulunmaktadır.
     Başlıca markaları şunlardır:
         •	Granini: Uluslararası pazarda güçlü bir varlığa sahip ana markalarından biridir.
         •	Joker: Fransa'da popüler olan bir meyve suyu markası.
         •	hohes C: Almanya'nın en çok satan meyve suyu markalarından biridir.
         •	Elmenhorster, Pago, God Morgon ve Yo gibi diğer yerel markalar.
     Şirket, meyve suyu pazarında çeşitliliği ve kalitesiyle tanınmaktadır.`,
   country: "Almanya",
   website: "https://www.eckes-granini.com/",
   img: "/eckes.png",
   isBoycotted: "boykot",
   boycottReason: `Eckes-Granini Group'un boykot edilmesinin temel nedeni, İsrail ile olan ticari ve ekonomik bağlantılarıdır.
     Boykot çağrılarının temel nedenleri:
         1.	İsrail'deki Operasyonlar: Eckes-Granini, 2010 yılında meyve suyu şirketi Gan Shmuel Group ile bir ortaklık kurarak Granini markasının İsrail'de dağıtımına başlamıştır. Gan Shmuel Group, İsrail'in en büyük meyve suyu ve doğal ürünler üreticilerinden biridir.
         2.	Gan Shmuel Group ile İşbirliği: Şirket, İsrail'deki bu yerel ortak aracılığıyla İsrail ekonomisine ve ticari faaliyetlerine dolaylı olarak destek sağlamaktadır. Bu durum, boykot hareketlerini destekleyenler tarafından markanın İsrail ile ticari ilişkisi olduğu gerekçesiyle hedef alınmasına neden olmuştur.
     Bu ticari ve siyasi duruş nedeniyle Eckes-Granini Group'a ait tüm markalar, boykot listelerinde yer almaktadır.`,
   alternative_products: ["juss", "dimes", "tamek", "meysu", "fruit-pocket"],
  },
  {
   name: "Cola Mix",
   slug: "cola-mix",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "Flötzinger",
   owner: "Flötzinger",
   description: `Flötzinger Cola Mix, kola ve portakallı meşrubatın karışımından oluşan gazlı bir içecektir. Ürün, kofeinli portakallı gazoz ile kola içermekte olup, %3 oranında meyve içeriğine sahiptir. Bu tür Cola Mix içecekler, özellikle Almanya gibi bazı Avrupa ülkelerinde yaygın olarak tüketilmektedir. Flötzinger markası, bölgesel veya yerel bir üreticiye ait olsa da, küresel boykot hareketleri kapsamında incelenmektedir`,
   country: "Avrupa",
   img: "/cola-mix.png",
   isBoycotted: "boykot",
   boycottReason: `Flötzinger markasının boykot edilmesinin temel nedeni, bazı boykot hareketlerinin markayı destekleyen veya ona tedarik sağlayan şirketlerin ticari bağlantıları üzerinden boykot listelerine dahil etmesidir.
     Boykot çağrılarının temel nedenleri:
         •	Dolaylı Ticari Bağlantılar: Flötzinger'in yerel bir üretici olmasına rağmen, üretim, dolum veya dağıtım aşamalarında kullanılan hammaddelerin ve hizmetlerin, İsrail ile ticari ilişkileri olduğu iddia edilen küresel şirketler tarafından sağlanması nedeniyle hedef alındığı iddia edilmektedir.
         •	Küresel Boykot Kapsamı: Boykot listelerini oluşturan bazı aktivistler, sadece büyük holdingleri değil, aynı zamanda bu holdinglerin tedarik zincirindeki veya lojistik ağındaki yerel iş ortaklarını da boykot kapsamına almaktadır.
     Bu gerekçelerle Flötzinger Cola Mix markası, boykot listelerinde yer alması yönünde çağrılara konu olmaktadır.`,
   alternative_products: [
    "cola-turka",
    "camlica",
    "uludag",
    "zafer-gazoz",
    "dirilis",
   ],
  },
  {
   name: "JDE Jacobs",
   slug: "jde-jacobs",
   ctgry: "İçecek",
   foundedYear: 1895,
   founder: "Johann Jacobs",
   owner: "JDE Peet's NV",
   description: `Jacobs, kökeni Almanya'da 1895 yılına kadar uzanan köklü bir kahve markasıdır. İlk olarak Johann Jacobs tarafından kurulan marka, daha sonra Avrupa'da Jacobs Douwe Egberts (JDE) tarafından pazarlanmıştır.
     Jacobs, şu anda Monarch, Millicano, Velour ve Gold gibi alt markalarıyla geniş bir ürün yelpazesi sunmaktadır. Ürün gamında kahve çekirdeği, öğütülmüş kahve, kurutulmuş hazır kahve ve kahve makineleri için kahve kapsülleri gibi çeşitli kahve formatları bulunmaktadır. Jacobs markası, kahve sektöründe dünya çapında faaliyet gösteren büyük grupların bünyesinde yer almaktadır.`,
   country: "Almanya & Hollanda",
   website: "https://www.jacobscoffee.com.tr/",
   img: "/jde-jacobs.png",
   isBoycotted: "boykot",
   boycottReason: `Jacobs'un boykot edilmesinin temel nedeni, markanın ait olduğu çatı kuruluş olan Mondelēz International şirketinin İsrail ile olan ticari ve finansal ilişkileridir. Mondelēz International, Jacobs'un alt markasıdır ve İsrail'deki gıda sektörüne önemli yatırımlar yapmıştır.
     Boykot çağrılarına yol açan Mondelēz yatırımları şunlardır:
         1.	İsrail'deki Girişimler: Mondelēz, İsrail'de faaliyet gösteren The Kitchen Hub ve Torr isimli iki gıda girişimine yatırımda bulunmuştur.
         2.	Ekonomik İlişkiler: Şirket, İsrail'deki ekonomik ilişkilerini hem operasyonel faaliyetler hem de Ar-Ge (Araştırma ve Geliştirme) yatırımları ile pekiştirmektedir. Hatta bu girişimleri kuranlar arasında Mondelēz'in eski çalışanlarının bulunması, şirketin İsrail ekonomisine olan yakınlığını göstermektedir.
     Tüketiciler, Mondelēz International'ın bu yatırımları sebebiyle, bünyesindeki Jacobs markası dahil tüm ürünleri boykot ederek tepki göstermektedirler.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Pilao",
   slug: "pilao",
   ctgry: "İçecek",
   foundedYear: 1978,
   founder: "Yerel Brezilya Girişimciler",
   owner: "JDE Peet's NV",
   description: `Pilão, Brezilya'nın önde gelen kahve markalarından biridir. Marka, 1978'deki kuruluşundan bu yana "Brezilya'nın sert kahvesi" olarak kabul edilmektedir ve günlük rutinlerin vazgeçilmez bir parçası haline gelmiştir.
     Ürün yelpazesi:
         •	Geleneksel kavrulmuş ve öğütülmüş kahve.
         •	Pratik hazır kahve (Pilão Solúvel).
         •	Kahve kapsülleri (espresso ve ekstrem çeşitleri) gibi farklı seçenekler sunar.
     Pilão markası, JDE Peet's NV holdingine aittir.`,
   country: "Brezilya & Hollanda",
   website: "https://www.pilao.com.br/",
   img: "/pilao.png",
   isBoycotted: "boykot",
   boycottReason: `Pilão, sahibi olan JDE Peet's NV holdinginin hissedarlık yapısında yer alan Mondelez International'ın ticari faaliyetleri nedeniyle boykot edilmektedir.
     Boykot çağrılarının temel nedenleri:
         1.	Mondelez Hissedarlığı: Pilão'nun ana şirketi JDE Peet's NV'nin hisselerinin %22,9'u Amerika merkezli Mondelez International'a aittir.
         2.	İsrail Yatırımları: Mondelez, İsrail'deki gıda girişimlerinden olan The Kitchen Hub ve Torr firmalarına yatırım yaparak İsrail'deki ekonomik ilişkilerini pekiştirmiştir.
     Bu dolaylı ticari ve siyasi duruş nedeniyle bu marka, boykot listelerine dahil edilmiştir.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Peets Coffee",
   slug: "peets",
   ctgry: "İçecek",
   foundedYear: 1966,
   founder: "Alfred Peet",
   owner: "JDE Peet's NV",
   description: `Peet's Coffee, Amerika merkezli, kahve çekirdeklerinin özenle kavrulmasına odaklanan ve taze, yüksek kaliteli kahve sunan bir markadır. Markanın ürün yelpazesi; öğütülmüş kahve (örneğin Big Bang Medium Roast) ve diğer kahve ürünlerini içerir.
     Peet's Coffee, küresel kahve ve çay devi olan JDE Peet's NV holdingine aittir. JDE Peet's NV, Jacobs, Tassimo ve Pilão gibi markaların da ana şirketidir.`,
   country: "ABD & Hollanda",
   website: "https://www.jdepeets.com/",
   img: "/peets.png",
   isBoycotted: "boykot",
   boycottReason: `Peet's Coffee'nin boykot edilmesinin temel nedeni, sahibi olan JDE Peet's NV holdinginin hissedarlık yapısında yer alan Mondelez International'ın ticari faaliyetleridir.
     Boykot çağrılarının temel nedenleri:
         1.	Mondelez Hissedarlığı: Peet's Coffee'nin ana şirketi olan JDE Peet's NV'nin hisselerinin %22,9'u Amerika merkezli Mondelez International'a aittir.
         2.	İsrail Yatırımları: Mondelez International, İsrail'deki gıda girişimlerinden olan The Kitchen Hub ve Torr firmalarına yatırım yaparak İsrail ekonomisi ile güçlü bağlarını pekiştirmiştir.
         3.	JAB Holding Bağlantısı: JDE Peet's NV'nin hisselerinin %60,5'i ise Lüksemburg merkezli JAB Holding Company S.à r.l.'ye aittir, bu holdingin de İsrail ile ticari bağları olduğu iddia edilmektedir.
     Bu ticari ve siyasi duruş nedeniyle Peet's Coffee markası, boykot listelerine dahil edilmiş olup, tüketicilerin bu markayı tercih etmemeleri önerilmektedir.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Moccona",
   slug: "moccona",
   ctgry: "İçecek",
   foundedYear: 1753,
   founder: "Douwe Egberts",
   owner: "JDE Peet's NV",
   description: `Moccona, Douwe Egberts tarafından üretilen, köklü bir hazır kahve markasıdır. Markanın tarihi 1753 yılına kadar uzanmaktadır ve genellikle Classic Medium Roast (Klasik Orta Kavrulmuş) gibi çeşitli kavurma seçenekleri sunan cam kavanozlarda satılır.
     Moccona, küresel kahve ve çay devi olan JDE Peet's NV holdinginin bir alt markasıdır. Jacobs, Peet's Coffee ve Pilão gibi markalar da aynı holdinge aittir.`,
   country: "Hollanda",
   website: "https://www.moccona.com.au/",
   img: "/moccona.png",
   isBoycotted: "boykot",
   boycottReason: `Moccona'nın boykot edilmesinin temel nedeni, sahibi olan JDE Peet's NV holdinginin hissedarlık yapısında yer alan Mondelez International'ın ticari faaliyetleridir.
     Boykot çağrılarının temel nedenleri:
         1.	Mondelez Hissedarlığı: Moccona'nın ana şirketi olan JDE Peet's NV'nin hisselerinin %22,9'u Amerika merkezli Mondelez International'a aittir.
         2.	İsrail Yatırımları: Mondelez International, İsrail'deki gıda girişimlerinden olan The Kitchen Hub ve Torr firmalarına yatırım yaparak İsrail ekonomisi ile güçlü bağlarını pekiştirmiştir.
         3.	JAB Holding Bağlantısı: JDE Peet's NV'nin hisselerinin %60,5'i ise Lüksemburg merkezli JAB Holding Company S.à r.l.'ye aittir, bu holdingin de İsrail ile ticari bağları olduğu iddia edilmektedir.
     Bu ticari ve siyasi duruş nedeniyle Moccona markası, ana şirketin politikaları yüzünden boykot listelerinde yer almaktadır.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Stumptown Coffee",
   slug: "stumptown",
   ctgry: "İçecek",
   foundedYear: 1999,
   country: "ABD",
   owner: "JAB Holding Company",
   description: `Stumptown Coffee Roasters, Amerika'da kurulmuş, özenle kavrulmuş kahveleriyle tanınan bir kahve markasıdır. Marka, genellikle kahve çekirdeklerinin menşeine ve kalitesine odaklanır; örneğin sunduğu ürünler arasında "Suke Quto Organic Coffee" gibi Etiyopya'dan tek bir kaynaktan gelen (Single Origin) organik kahveler bulunmaktadır.
     Stumptown Coffee, başlangıçta bağımsız bir kahve kavurma şirketi olsa da, daha sonra büyük küresel içecek holdingi olan JAB Holding Company S.à r.l. tarafından satın alınmıştır.`,
   country: "ABD",
   website: "https://www.stumptowncoffee.com/",
   img: "/stumptown.png",
   isBoycotted: "boykot",
   boycottReason: `Bu markanın boykot edilmesinin temel nedeni, ana şirketi olan JAB Holding Company S.à r.l.'nin ticari ve hissedarlık bağlantılarıdır.
     Boykot çağrılarının temel nedenleri:
         1.	JAB Holding Bağlantısı: Stumptown Coffee, Lüksemburg merkezli JAB Holding Company S.à r.l.'nin sahibi olduğu markalar arasındadır.
         2.	JDE Peet's Hissedarlığı: JAB Holding, aynı zamanda Jacobs, Pilão ve Peet's Coffee gibi markaları da bünyesinde bulunduran JDE Peet's NV'nin hisselerinin %60,5'ine sahiptir. Bu holdingin İsrail ile ticari bağları olduğu iddia edilmektedir.
     Bu ticari ve siyasi duruş nedeniyle Stumptown Coffee markası, bağlı olduğu büyük holdingin politikaları yüzünden boykot listelerine dahil edilmiştir.`,
  },
  {
   name: "Gevalia",
   slug: "gevalia",
   ctgry: "İçecek",
   foundedYear: 1853,
   founder: "Victor Theodor Engwall",
   owner: "JDE Peet's NV",
   description: `Gevalia, 150 yılı aşkın bir geçmişe sahip premium kaliteli kahve çekirdekleri sunan bir kahve markasıdır. Marka, yumuşak ve kadifemsi tatlardan cesur ve sağlam profile kadar çeşitli lezzetler sunar.
     Gevalia, Jacobs Douwe Egberts (JDE) şirketine ait markalar arasındadır. JDE, 2015 yılında Hollanda şirketi Douwe Egberts ile Mondelez International'ın kahve bölümünün birleşmesiyle kurulmuştur. Jacobs, Tassimo, Moccona, Senseo, L'OR, Douwe Egberts, Kenco ve Pilão gibi markalar da bu şirkete aittir.
     Ürün yelpazesi, kahve kapsülleri (K-Cup Pods) ve klasik kahve harmanları (Signature Blend) gibi birçok çeşidi içerir.`,
   country: "İsveç & Hollanda",
   img: "/gevalia.png",
   isBoycotted: "boykot",
   boycottReason: `Gevalia'nın boykot edilmesinin temel nedeni, ana şirketi olan JDE Peet's NV'nin hissedarlık yapısında yer alan Mondelez International'ın ve JAB Holding Company S.à r.l.'nin ticari faaliyetleridir.
     Boykot çağrılarının temel nedenleri:
         1.	Mondelez Hissedarlığı: Gevalia'nın ana şirketi JDE Peet's NV'nin hisselerinin %22,9'u Amerika merkezli Mondelez International'a aittir. Mondelez, İsrail'deki gıda girişimlerine yatırım yaptığı ve ekonomik ilişkilerini pekiştirdiği için boykot edilmektedir.
         2.	JAB Holding Bağlantısı: JDE Peet's NV'nin hisselerinin %60,5'i ise Lüksemburg merkezli JAB Holding Company S.à r.l.'ye aittir, bu holdingin de İsrail ile ticari bağları olduğu iddia edilmektedir.
     Bu ticari ve siyasi duruş nedeniyle Gevalia markası, bağlı olduğu holdinglerin politikaları yüzünden boykot listelerinde yer almaktadır.`,
  },
  {
   name: "Douwe Egberts",
   slug: "douwe-egberts",
   ctgry: "İçecek",
   foundedYear: 1753,
   founder: "Douwe Egberts",
   owner: "JDE Peet's NV",
   description: `Douwe Egberts, 1753 yılında Hollanda'nın Joure şehrinde kurulmuş olan tarihi bir kahve ve çay markasıdır. Marka, 250 yılı aşkın bir süre boyunca kahve ve çay üreticiliğinde öncü bir rol oynamıştır. 
     Douwe Egberts, günümüzde Jacobs Douwe Egberts (JDE) şirketine aittir. JDE, 2015 yılında Hollanda şirketi Douwe Egberts ile Mondelez International'ın kahve bölümünün birleşmesiyle kurulmuştur. Jacobs, Tassimo, Moccona, Senseo, L'OR, Gevalia, Kenco ve Pilão gibi markalar da bu şirkete aittir. Douwe Egberts, özellikle Avrupa'da ve Hollanda'da kahve kategorisinde lider konumdadır.`,
   country: "Hollanda",
   website: "https://www.jacobsdouweegberts.com/",
   img: "/douwe-egberts.png",
   isBoycotted: "boykot",
   boycottReason: `Douwe Egberts'in boykot edilmesinin temel nedeni, ana şirketi olan JDE Peet's NV'nin hissedarlık yapısında yer alan Mondelez International'ın ve JAB Holding Company S.à r.l.'nin ticari faaliyetleridir.
     Boykot çağrılarının temel nedenleri:
         1.	Mondelez Hissedarlığı: Douwe Egberts'in ana şirketi JDE Peet's NV'nin hisselerinin %22,9'u Amerika merkezli Mondelez International'a aittir. Mondelez, İsrail'deki gıda girişimlerine yatırım yaptığı ve ekonomik ilişkilerini pekiştirdiği için boykot edilmektedir.
         2.	JAB Holding Bağlantısı: JDE Peet's NV'nin hisselerinin %60,5'i ise Lüksemburg merkezli JAB Holding Company S.à r.l.'ye aittir, bu holdingin de İsrail ile ticari bağları olduğu iddia edilmektedir.
     Bu ticari ve siyasi duruş nedeniyle Douwe Egberts markası, bağlı olduğu holdinglerin politikaları yüzünden boykot listelerinde yer almaktadır.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Boxd Water",
   slug: "boxd-water",
   ctgry: "İçecek",
   foundedYear: 2009,
   founder: "Benjamin Gott",
   country: "ABD",
   description: `Boxd Water (tam adı Boxed Water Is Better), 2009 yılında Amerika Birleşik Devletleri'nde (ABD) kurulmuş bir su markasıdır. Marka, geleneksel plastik şişelere alternatif, sürdürülebilir bir paketleme çözümü sunarak piyasaya girmiştir. Temel olarak, çevresel etkiyi azaltma ve daha sorumlu bir tüketim şekli sunma misyonuyla hareket etmektedir.
     Markanın ana ayırt edici özelliği, suyunun %92'ye kadar bitki bazlı malzemelerden yapılmış karton kutularda sunulmasıdır. Bu karton kutular, yenilenebilir kaynaklardan elde edilmiştir ve markanın iddiasına göre plastik ve alüminyum şişelere kıyasla daha sürdürülebilir bir paketleme seçeneğidir. Boxed Water, bu yenilikçi paketleme yaklaşımıyla kendini piyasadaki en sürdürülebilir su markalarından biri olarak konumlandırmaktadır.
     Boxed Water, büyük küresel içecek holdinglerinin aksine bağımsız bir yapıya sahiptir. Şirketin çoğunluk hissesi, 2025 Şubat'ında Nyrad, LLC adlı özel yatırımcı grubuna satılmıştır. Marka, çevresel sorumluluğu yalnızca paketlemesiyle sınırlı tutmayıp, bugüne kadar ulusal ormanlara 1,5 milyondan fazla ağaç dikilmesi gibi sosyal ve çevresel projelere de destek olmuştur.`,
   country: "ABD",
   website: "https://boxdh2o.co.uk/",
   img: "/boxd-water.png",
   isBoycotted: "boykot",
   boycottReason: `Boxd Water markası, genel olarak İsrail ile ticari bağı olan küresel markaların boykot listelerinde yer almamaktadır. Ancak marka, bazı çevresel veya siyasi eleştirilere maruz kalmıştır.
         •	Küresel Boykot Listelerinde Durumu: Boxd Water, The Coca-Cola Company veya PepsiCo gibi İsrail'de doğrudan faaliyeti veya önemli yatırımı olan küresel holdinglere ait değildir. Bu nedenle, ana akım İsrail-Filistin çatışmasıyla ilgili boykot çağrılarının birincil hedefi değildir.
         •	"Yeşil Yıkama" Eleştirisi: Marka, yerel aktivist çevreler tarafından "yeşil yıkama" (greenwashing) yapmakla eleştirilmiştir. Eleştirmenler, suyun ticarileştirilmesini ve suyun kartonda dahi olsa nakliyesi için harcanan enerjiyi sorgulamakta ve musluk suyu kullanımını desteklemektedir.
         •	Siyasi İlişkilendirme (ABD): Markanın kurucularının ve erken yatırımcılarının, Michigan'daki tartışmalı su politikalarını destekleyen siyasi figürlerle ilişkilendirilmesi de markaya yönelik yerel düzeyde boykot ve eleştirilere neden olmuştur.
     Özetle, Boxd Water, büyük uluslararası boykot listelerinin hedefi olmasa da, yerel düzeyde siyasi ve çevresel gerekçelerle eleştiri ve boykot çağrılarına konu olmuştur.`,
   alternative_products: [
    "hamidiye",
    "beysu",
    "sultan",
    "saka",
    "buzdagi",
    "kizilay",
    "ozkaynak",
    "ceysu",
    "sarikiz",
    "beypazari",
   ],
  },
  {
   name: "Onko Kaffee",
   slug: "onko",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "JDE Peet's NV",
   owner: "JDE Peet's NV",
   description: `Onko Kaffee, özellikle Almanya pazarında bilinen ve geniş bir kitleye hitap eden bir kahve markasıdır. Marka, geleneksel kavrulmuş ve çekilmiş kahve çeşitlerinin yanı sıra, farklı kahve karışımlarını ve formatlarını sunar.
     Onko markası, Douwe Egberts (D.E.) ve Jacobs gibi markaların da sahibi olan JDE Peet's N.V. bünyesinde yer alan bir markadır. Bu durum, Onko'nun uluslararası bir kahve devinin küresel tedarik ve dağıtım ağına bağlı olduğu anlamına gelmektedir.`,
   country: "Almanya",
   website: "",
   img: "/onko.png",
   isBoycotted: "boykot",
   boycottReason: `Onko Kaffee markası, bağlı olduğu ana şirket nedeniyle boykot listesinde yer alıyor!
     Onko Kaffee'nin boykot edilmesinin temel nedeni, markanın sahibi olan JDE Peet's N.V. holdinginin hissedarlık yapısında yer alan ve İsrail ile ticari bağları olduğu iddia edilen küresel gruplardır.
     Boykot çağrılarının temel nedenleri:
         •	Mondelez Hissedarlığı: Onko'nun çatı kuruluşu JDE Peet's, 2015 yılında Mondelez International'ın kahve bölümü ile birleşerek kurulmuştur. Mondelez, İsrail'deki gıda girişimlerine yaptığı yatırımlar nedeniyle boykot listelerinde yer almaktadır.
         •	JAB Holding Bağlantısı: JDE Peet's N.V.'nin hisselerinin büyük bir kısmı, Lüksemburg merkezli JAB Holding Company S.à r.l.'ye aittir, bu holdingin de İsrail ile ticari bağları olduğu iddia edilmektedir.
     Bu ticari ve siyasi duruşlar nedeniyle Onko Kaffee markası, Douwe Egberts ve Jacobs gibi diğer kardeş markalarıyla birlikte, bağlı olduğu holdinglerin politikaları yüzünden boykot listelerinde yer almaktadır.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Reign",
   slug: "reign",
   ctgry: "İçecek",
   foundedYear: 2019,
   founder: "Monster Beverage Corporation",
   country: "ABD",
   description: `Reign Total Body Fuel, 2019 yılında Amerika Birleşik Devletleri'nde piyasaya sürülen bir enerji içeceği markasıdır. Marka, kendini yüksek performanslı bir içecek olarak konumlandırarak, esas olarak sporcuları, fitness meraklılarını ve yoğun bir yaşam tarzına sahip tüketicileri hedeflemektedir. Reign, egzersiz öncesi veya sırasında enerji ve odaklanma sağlamayı amaçlayan bir formülle pazarlanmaktadır.
     Ürün, genellikle yüksek miktarda kafein, BCAA (Dallı Zincirli Amino Asitler), koenzim Q10 ve elektrolitler içerir. Reign, formülünde şekere yer vermeyerek, kalori ve şeker konusunda bilinçli tüketicilerin ilgisini çekmeyi amaçlamıştır. Piyasaya sürülmesinden kısa bir süre sonra, Kuzey Amerika ve Avrupa da dahil olmak üzere geniş bir pazarda erişilebilir hale gelmiştir.
     Reign markası, dünya çapındaki en büyük enerji içeceği üreticilerinden biri olan Monster Beverage Corporation şirketine aittir. Monster Beverage Corporation, küresel enerji içeceği pazarında Red Bull'un ardından ikinci sırada yer almakta ve Reign, şirketin sporcu ve fitness segmentindeki önemli markalarından biri olarak kabul edilmektedir.`,
   website: "https://reignbodyfuel.com/en-us/",
   img: "/reign.png",
   isBoycotted: "boykot",
   boycottReason: `Reign'in boykot edilmesinin temel nedeni, markanın sahibi olan Monster Beverage Corporation'ın ticari yapısında yer alan ve İsrail ile ticari ve ekonomik bağları güçlü olan küresel holdinglerdir.
         •	Coca-Cola Bağlantısı: Monster Beverage Corporation'ın en büyük azınlık hissedarı The Coca-Cola Company'dir. Coca-Cola, 2015 yılında Monster'a önemli bir yatırım yaparak şirketin yaklaşık %16.7'lik hissesini satın almıştır.
         •	Coca-Cola'nın İsrail Faaliyetleri: Boykot hareketleri, Coca-Cola'nın Monster'ın büyük hissedarı olmasını gerekçe göstererek, Coca-Cola'nın İsrail'de yasa dışı kabul edilen Atarot yerleşim yerinde bir fabrika işletmesi gibi nedenlerle boykot edilmesini savunmaktadır. Reign, Monster'a bağlı bir marka olduğu için, dolaylı yoldan bu kurumsal yapı ve ticari ilişkiler nedeniyle boykot çağrılarının hedefi haline gelmektedir.
     Bu ticari ve siyasi bağlantılar sebebiyle Reign markası, ana şirketi Monster Beverage Corporation üzerinden küresel boykot çağrılarının hedefi haline gelmiştir.`,
   alternative_products: ["dirilis"],
  },
  {
   name: "Cremesso",
   slug: "cremesso",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "Delica AG (Migros Group)",
   owner: "Migros Group (Delica AG)",
   description: `Cremesso, İsviçre merkezli bir kahve kapsülü ve kahve makinesi sistemleri markasıdır. Marka, kendini yüksek kaliteli kahve çekirdeklerini en modern kapsül teknolojisiyle birleştirerek evde veya ofiste mükemmel kahve deneyimi sunmaya adamıştır. Ürün gamı, farklı yoğunluk ve aromalara sahip çok çeşitli kahve kapsüllerini içermektedir.
     Cremesso markası, İsviçre'nin önde gelen perakende ve gıda gruplarından biri olan Migros Group'a ait olan Delica AG şirketi tarafından üretilmektedir. Delica AG, 60 yılı aşkın kahve işleme deneyimine sahip, İsviçre'nin Basel yakınlarındaki Birsfelden'de kavurma ve paketleme yapan bir şirkettir. Bu sahiplik yapısı, Cremesso'nun büyük uluslararası holdingler yerine, köklü bir İsviçre perakende grubunun kontrolünde olduğunu göstermektedir.`,
   country: "İsviçre",
   website: "https://www.cremesso.com/en/coffee",
   img: "/cremesso.png",
   isBoycotted: "boykot",
   boycottReason: `Cremesso markası, İsrail ile ticari ve ekonomik bağları olduğu iddia edilen küresel şirketlerin listelerinde yer almamaktadır, ancak ana şirketinin dolaylı bağları incelenmektedir.
     Cremesso'nun doğrudan bir boykot gerekçesi (İsrail'de fabrika, büyük yatırım veya siyasi destek beyanı gibi) bulunmamaktadır. Markanın sahibi Delica AG, küresel boykot listelerinin hedefi olan The Coca-Cola Company, PepsiCo veya Nestle gibi holdinglere ait değildir.
     Ancak bazı boykot kaynakları, Delica AG'nin ait olduğu Migros Group'un, global tedarik zincirleri ve uluslararası ticari faaliyetleri nedeniyle İsrail ile dolaylı ticari bağlarının olabileceği ihtimalini sorgulamaktadır. Bu sorgulamalar, genellikle yerel düzeyde alternatif arayan tüketiciler arasında geçerli olabilmektedir.
     Özetle, Cremesso, büyük küresel boykot listelerinin ana hedefi olan markalar arasında değildir. Boykot çağrıları, markanın değil, ana şirketin (Migros Group/Delica AG) genel ticari faaliyetleri üzerinden dolaylı olarak değerlendirilebilmektedir.`,
   alternative_products: ["dogus", "ofcay", "caykur"],
  },
  {
   name: "Rad Rain",
   slug: "rad-rain",
   ctgry: "İçecek",
   foundedYear: null,
   country: "ABD",
   owner: "RC Cola International",
   description: `Rad Rain Energy, enerji içeceği kategorisinde yer alan bir markadır. Görsellerden anlaşıldığı kadarıyla, marka canlı kırmızı renk ve mavi alev desenleriyle dinamik bir ambalaj tasarımına sahiptir, bu da genç ve aktif bir tüketici kitlesini hedeflediğini göstermektedir.
     Ancak, mevcut bilgi kaynakları ve elinizdeki görsellerde Rad Rain Energy markasının sahibinin kim olduğu, ne zaman kurulduğu veya hangi büyük holdinge (Coca-Cola, PepsiCo, Monster vb.) bağlı olduğu gibi detaylı kurumsal bilgiler yer almamaktadır. Bu durum, markanın büyük küresel devlere ait olmayan, daha yerel veya yeni bir marka olabileceğini düşündürmektedir.`,
   country: "ABD",
   website: "https://rccolainternational.com/products/rad-rain",
   img: "/rad-rain.png",
   isBoycotted: "boykot",
   boycottReason: `Rad Rain Energy markası hakkında, mevcut kaynaklarda herhangi bir küresel boykot listesinde yer aldığına veya İsrail/Filistin, Rusya veya benzeri bir siyasi/sosyal konuyla doğrudan ilişkilendirildiğine dair kesin bir bilgi bulunmamaktadır.
     Markanın herhangi bir boykotun hedefi olup olmadığı, ancak marka sahibi şirketin kimliği ve ticari faaliyetleri belirlendiğinde netleştirilebilir. Eğer bu marka, daha önceki sorularda bahsedilen The Coca-Cola Company, PepsiCo veya Monster Beverage Corporation gibi küresel holdinglerden birine ait bir alt marka ise, ana şirketin boykot gerekçeleri dolaylı olarak bu markayı da etkileyebilir.
     Özetle, Rad Rain Energy hakkında kesin bir boykot gerekçesi sunulabilmesi için, markanın sahibi olan şirketin kimliği ve küresel ticari duruşu hakkında daha fazla bilgiye ihtiyaç vardır.`,
   alternative_products: ["dirilis"],
  },
  {
   name: "Henniez",
   slug: "henniez",
   ctgry: "İçecek",
   foundedYear: 1905,
   founder: "Rouge Ailesi",
   owner: "Nestlé",
   description: `Henniez, kökeni 1905 yılına dayanan ve İsviçre'de üretilen popüler bir doğal maden suyu markasıdır. Marka, adını İsviçre'nin Vaud kantonunda bulunan Henniez köyünden almakta ve özellikle İsviçre pazarında en çok tanınan su markalarından biri olarak kabul edilmektedir. Henniez, doğal kaynak suyu ve hafif mineralli yapısıyla bilinir ve şişelenmiş olarak tüketicilere sunulur.
     Henniez, 2007 yılında İsviçreli gıda devi Nestlé tarafından satın alınmıştır. Nestlé, şirketin çoğunluk hissesini (yaklaşık %61.66) Rouge ailesinden alarak markayı uluslararası içecek portföyüne katmıştır. Bu satın alma ile Henniez, Nestlé'nin küresel su markaları arasında İsviçre'deki önemli yerel markası haline gelmiştir.`,
   country: "İsviçre",
   website: "https://www.henniez.ch/fr-ch",
   img: "/henniez.png",
   isBoycotted: "boykot",
   boycottReason: `Henniez'in boykot edilmesinin temel nedeni, markanın sahibi olan global gıda ve içecek devi Nestlé'nin uluslararası operasyonları ve ticari duruşudur. Nestlé, uzun yıllardır devam eden boykot çağrılarının hedefi olan, dünyanın en büyük gıda şirketlerinden biridir.
     Boykot çağrılarının temel dayanağı, Nestlé'nin İsrail'de önemli yatırımları ve ticari faaliyetleri bulunmasıdır. Nestlé, İsrail'deki gıda teknolojisi şirketlerine yatırım yapmakta ve ülkede üretim tesisleri bulundurmaktadır. Bu ticari ilişkiler, boykot hareketleri tarafından İsrail ekonomisine doğrudan destek olarak algılanmakta ve Nestlé ürünlerinin (dolayısıyla Henniez de dahil olmak üzere tüm alt markalarının) tüketilmemesi yönünde çağrılara yol açmaktadır.
     Ayrıca, Henniez markasının kendisi de İsviçre'de tartışmalara konu olmuştur. Nestlé'nin Vaud kantonundaki Henniez tesislerinde, yasal düzenlemelere aykırı olarak maden suyunda yasaklı filtreleme yöntemleri kullandığını ve yetersiz koruma önlemleri aldığını itiraf etmesi, tüketiciler tarafından "bir aldatmaca" olarak nitelendirilmiş ve markanın güvenilirliğini zedelemiştir.
     Bu nedenle Henniez, hem ana şirketi Nestlé'nin küresel ticari duruşu hem de kendi operasyonlarındaki tartışmalar nedeniyle boykot edilmektedir.`,
   alternative_products: [
    "kizilay",
    "beypazari",
    "sarikiz",
    "ozkaynak",
    "buzdagi",
   ],
  },
  {
   name: "Al Fajr",
   slug: "al-fajr",
   ctgry: "İçecek",
   foundedYear: null,
   founder: "Yerel Orta Doğu Girişimciler",
   owner: "Bilinmiyor",
   description: `Al Fajr, şişelenmiş içme suyu kategorisinde yer alan bir markadır. Görsellerden anlaşıldığı kadarıyla ambalajında "The Spirit of Generosity" (Cömertlik Ruhu) sloganını kullanmaktadır. Markanın şişelenmiş su ürünleri, genellikle günlük tüketim için tasarlanmıştır.
     Mevcut bilgi kaynaklarında Al Fajr markasının sahibinin kim olduğu, hangi büyük holdinge bağlı olduğu veya hangi ülkede üretildiği hakkında açık ve kesin bir bilgi bulunmamaktadır. Markanın adı Arapça kökenli olup "Şafak" anlamına gelmektedir, bu da Orta Doğu veya Kuzey Afrika merkezli bir şirket tarafından üretildiğini düşündürmektedir. Ancak bu yalnızca bir tahmindir ve markanın kurumsal yapısı hakkında detaylı bilgiye ulaşılamamıştır.`,
   country: "Kuzey Afrika & Orta Doğu",
   website: "https://www.alfajarwater.org/",
   img: "/al-fajr.png",
   isBoycotted: "boykot",
   boycottReason: `Bu marka, boykot listelerine dahil edilmiştir ve boykot edilmesini gerektiren olumsuz açıklamalar ya da destekler söz konusudur. Bu nedenle marka, boykot açısından güvenli olarak kabul edilmemekte ve tüketiciler tarafından tercih edilmemesi önerilmektedir.`,
   alternative_products: [
    "hamidiye",
    "beysu",
    "sultan",
    "saka",
    "buzdagi",
    "kizilay",
    "ozkaynak",
    "ceysu",
    "sarikiz",
    "beypazari",
   ],
  },
  {
   name: "Breaka",
   slug: "breaka",
   ctgry: "İçecek",
   foundedYear: 1970,
   founder: "Lion Dairy & Drinks",
   owner: "Mengniu Dairy Company Limited (Çin)",
   description: `Breaka, özellikle Avustralya pazarında, özellikle de Queensland'de (QLD) popüler olan aromalı süt markasıdır. Marka, genellikle çikolata, çilek ve muz gibi çeşitli tatlarda karton kutu veya şişelerde aromalı süt ürünleri sunmaktadır. Ambalajında "Made in QLD" (Queensland'de üretilmiştir) ibaresi yer almaktadır.
     Breaka'nın mülkiyeti zaman içinde değişiklik göstermiştir. Marka, günümüzde Avustralya'da büyük bir perakende ve gıda üretimi devi olan Lion Dairy & Drinks şirketine aittir. Lion Dairy & Drinks, 2021 yılında Çin merkezli Mengniu Dairy Company Limited şirketine satılmıştır. Bu satış, markanın yerel üretimini sürdürmesine rağmen, küresel bir holdingin parçası haline geldiği anlamına gelmektedir.`,
   country: "Çin & Avustralya",
   website: "https://lactalis.com.au/481/",
   img: "/breaka.png",
   isBoycotted: "boykot",
   boycottReason:
    "Doğu Türkistan'da yaşananlar sebebiyle Çin'e ait global markaların tamamı boykot listesindedir. Baojun, Çin menşeli bir marka olduğu için boykot kapsamına alınmıştır.",
   alternative_products: ["sutas", "pinar", "vio", "sek"],
  },
  {
   name: "Sek",
   slug: "sek",
   ctgry: "İçecek",
   foundedYear: 1963,
   founder: "Tarım ve Köyişleri Bakanlığı",
   owner: "Çallı Gıda",
   country: "Türkiye",
   description: `SEK (Süt Endüstrisi Kurumu), 1963 yılında Tarım ve Köyişleri Bakanlığı'na bağlı olarak kurulmuş bir süt ve süt ürünleri şirketidir. SEK, Türkiye'de süt ve süt ürünleri üretimini geliştirmek ve tüketiciye sağlıklı, hijyenik, en kaliteli ve en doğal ürünleri sunmak amacıyla kurulmuştur.

SEK, 1968'den 1995'e kadar Kamu İktisadi Teşebbüsü (KİT) olarak faaliyet göstermiştir. Şirket, Türkiye'de süt ve süt ürünleri sektöründe birçok ilke imza atmıştır. SEK, ilk pastörize sütü ve ilk homojenize edilmiş yoğurdu üretmiştir. Ayrıca dil peynirini ilk kez tüketiciyle tanıştırmış, kaşar ve beyaz peyniri ilk kez vakumlu (hava geçirmez) ambalajda sunmuştur.

SEK, Türkiye'nin Adana, İstanbul, İzmir ve Kars gibi şehirlerinde süt ve süt ürünleri fabrikalarına sahiptir. Şirket, süt toplama merkezleri aracılığıyla üreticilerden süt toplamakta ve işleyerek tüketiciye sunmaktadır.

1995 yılında SEK özelleştirilerek sektörde faaliyet gösteren 164 küçük ve orta ölçekli sanayici ve gıda toptancısından oluşan bir gruba satılmıştır. 1997 yılında Koç Holding, SEK'in %68 hissesini alarak şirketi bünyesine katmıştır. 2021 yılında ise SEK, Koç Grubu'ndan Çallı Grubu'na satılmıştır.

SEK, "Herkes iyilikle beslensin; en doğal, en sağlıklı ve en lezzetli ürünler sofralara ulaşsın" mottosuyla faaliyetlerini sürdürmektedir.`,
   website: "https://www.sek.com.tr/",
   img: "/sek.png",
   isBoycotted: "boykot-degil",
   alternative_products: ["sutas", "pinar", "vio"],
  },
  {
   name: "Curtis",
   slug: "curtis",
   ctgry: "İçecek",
   foundedYear: 1997,
   founder: "May-Brands LLC",
   owner: "May-Brands LLC",
   description: `Curtis, çay ürünleri kategorisinde faaliyet gösteren, özellikle piramit poşet çayları, meyveli ve bitkisel çay karışımlarıyla tanınan bir markadır. Ürün yelpazesi; Hugo Kokteyli, Yaz Meyveleri ve Vitamin Çayı gibi yenilikçi aroma ve formülleri içermektedir. Marka, kendini yüksek kaliteli çay yapraklarını ve benzersiz tatları birleştiren bir ürün olarak konumlandırmaktadır. Curtis markası, LLC "May-Brands" adlı şirketin tescilli ticari markası ve mülkiyetindedir. Bu şirket, Rusya Federasyonu'nda faaliyet gösteren bir limited şirkettir.
     `,
   country: "Rusya",
   website: "https://curtistea.com/",
   img: "/curtis.png",
   isBoycotted: "boykot",
   boycottReason: `Bu marka, boykot listelerine dahil edilmiştir ve boykot edilmesini gerektiren olumsuz açıklamalar ya da destekler söz konusudur. Bu nedenle marka, boykot açısından güvenli olarak kabul edilmemekte ve tüketiciler tarafından tercih edilmemesi önerilmektedir.`,
   alternative_products: ["didi", "dogus", "ofcay", "caykur", "teatone"],
  },
  {
   name: "El Primero",
   slug: "el-primero",
   ctgry: "İçecek",
   foundedYear: 1983,
   founder: "Jimmy Rosenberg",
   owner: "PAI Partners",
   description: `Naked Juice, Amerika Birleşik Devletleri merkezli bir meyve suyu ve smoothie markasıdır. Ürünleri, genellikle smoothie'ler, protein smoothie'leri ve meyve suları gibi 20'den fazla çeşidi içerir. Marka, ürünlerinin yüksek düzeyde antioksidan ve esansiyel vitaminler ve mineraller içerdiği iddiasıyla piyasada yer almaktadır.
     Naked Juice, 2007 yılında dünyanın en büyük gıda ve içecek şirketlerinden biri olan PepsiCo tarafından satın alındı. PepsiCo'nun distribütör ağı sayesinde ABD'nin 50 eyaleti ile Kanada ve Birleşik Krallık dahil birçok ülkede yaygın bir şekilde satılmaya başlandı. Ancak, 2021 yılında PepsiCo, markayı özelleştirilmiş sermaye şirketi olan PAI Partners'a sattı ve şu anda Naked Juice'un sahibi PAI Partners'tır. Markanın merkezi Monrovia, Kaliforniya'dadır.`,
   country: "Fransa & ABD",
   website: "https://www.nakedsmoothie.com",
   img: "/el-primero.png",
   isBoycotted: "boykot",
   boycottReason: `Bu marka, boykot listelerine dahil edilmiştir ve boykot edilmesini gerektiren olumsuz açıklamalar ya da destekler söz konusudur. Bu nedenle marka, boykot açısından güvenli olarak kabul edilmemekte ve tüketiciler tarafından tercih edilmemesi önerilmektedir.`,
   alternative_products: ["juss", "dimes", "tamek", "meysu", "fruit-pocket"],
  },
  {
   name: "Coca Cola Company",
   slug: "coca-cola-company",
   ctgry: "İçecek",
   foundedYear: 1886,
   founder: "John Stith Pemberton",
   owner: "The Coca-Cola Company (Berkshire Hathaway Holding)",
   description: `Coca-Cola Company, merkezi Atlanta, Georgia, ABD'de bulunan küresel bir içecek şirketidir. Şirket, 1886 yılında eczacı John Stith Pemberton tarafından Atlanta'da icat edilen Coca-Cola gazlı içeceği ile başlamıştır. Daha sonra 1892 yılında iş insanı Asa Griggs Candler tarafından resmi olarak şirketleşmiş ve hızla büyümüştür.

Coca-Cola'nın kuruluş hikayesi, eczacı John Stith Pemberton'un bir şurup formülü geliştirmesiyle başlamıştır. İlk başta "Pemberton's French Wine Coca" adıyla satılan içecek, daha sonra Coca-Cola adını almış ve dünya çapında tanınan bir marka haline gelmiştir. Asa Griggs Candler'in şirketi satın alması ve pazarlama stratejileri, Coca-Cola'nın küresel bir başarı hikayesi olmasını sağlamıştır.
country: "ABD",
Coca-Cola Company, bugün gazlı içecekler, meyve suları, spor ve enerji içecekleri gibi geniş bir ürün yelpazesine sahiptir. Şirketin en bilinen markası Coca-Cola olmakla birlikte, Fanta, Sprite, Minute Maid, Powerade ve Dasani gibi birçok popüler markayı da portföyünde bulundurur. Coca-Cola, dünya çapında 200'den fazla ülkede satılmakta ve günlük olarak milyarlarca içecek tüketilmektedir.

Şirket, sadece içecek üretimiyle sınırlı kalmayıp, spor sponsorlukları, müzik etkinlikleri ve sosyal sorumluluk projeleriyle de aktif olarak yer almaktadır. Coca-Cola, dünya çapında tanınan bir marka olarak, küresel içecek pazarında lider konumda bulunmaktadır.`,
   country: "ABD",
   website: "https://www.coca-colacompany.com/",
   img: "/coca-cola-company.png",
   isBoycotted: "boykot",
   boycottReason: `Coca-Cola Company'nin boykot edilmesinin temel nedeni, şirketin İsrail ile olan güçlü ticari ve ekonomik bağlarıdır. Coca-Cola Company, Berkshire Hathaway Holding'in portföyünde yer alan küresel olarak en çok satılan asitli içecek markasıdır.

Coca-Cola Company'nin, çalıntı Filistin toprakları üzerine inşa edilmiş yasadışı bir İsrail yerleşimi olan Atarot'ta fabrikası bulunmaktadır. Bu gibi yasadışı İsrail yerleşimlerinin inşa edilebilmesi için Filistinli topluluklar zorla yerlerinden edilmektedir. Bu yerleşimler uluslararası hukuka göre yasadışıdır ve Filistin topraklarının işgali anlamına gelmektedir.

Coca-Cola Company'nin İsrail'deki faaliyetleri, şirketin İsrail ekonomisine doğrudan katkıda bulunması anlamına gelmektedir. Şirket, İsrail'deki üretim tesisleri ve dağıtım ağıyla ülkenin ekonomik kalkınmasına destek sağlamaktadır. Bu durum, Filistin davasına destek veren ve İsrail'in işgalci politikalarına karşı duran tüketiciler tarafından büyük tepkiyle karşılanmaktadır.

Çalınan Filistin topraklarında faaliyet göstermeyi durdurana kadar Coca-Cola Company, tercih edilmemesi gereken bir marka olarak değerlendirilmektedir. Alternatif ürünlere yönelmek daha sağlıklı olacaktır.`,
   alternative_products: [
    "cola-turka",
    "camlica",
    "uludag",
    "zafer-gazoz",
    "dirilis",
    "juss",
    "dimes",
    "tamek",
    "meysu",
    "fruit-pocket",
   ],
   subBrands: [
    {
     name: "Coca Cola",
     slug: "coca-cola",
     ctgry: "İçecek",
     country: "ABD",
     founder: "John Stith Pemberton",
     owner: "The Coca-Cola Company",
     description: `Coca-Cola Company, ilk olarak 1886 yılında John Pemberton tarafından Atlanta, Georgia'da icat edilen ve günümüzde dünyanın en tanınmış gazlı içecek markası olan kola aromalı bir meşrubattır. Marka, The Coca-Cola Company'nin amiral gemisi ürünüdür ve dünya çapında 200'den fazla ülkede satılmaktadır. Şirketin portföyünde Coca-Cola Classic, Coca-Cola Zero Sugar, Diet Coke (Coca-Cola Light) gibi ana ürünlerin yanı sıra, yüzlerce farklı içecek markası bulunmaktadır. Şirket, küresel içecek pazarında en büyük oyunculardan biri olarak kabul edilir.`,
     country: "ABD",
     website: "https://www.coca-cola.com/tr/tr",
     img: "/coca-cola.png",
     isBoycotted: "boykot",
     boycottReason: `Coca-Cola markası, boykot listelerinin en üst sıralarında yer almaktadır! 
         Coca-Cola'nın boykot edilmesinin temel ve en yaygın bilinen nedeni, İsrail ile olan güçlü ticari ve ekonomik bağlarıdır.
         •	Ekonomik Yatırım ve Faaliyetler: The Coca-Cola Company, İsrail'de 1968 yılından beri faaliyet göstermekte ve ülkenin ekonomisine önemli katkılarda bulunmaktadır. Şirket, İsrail'deki Coca-Cola Israel (The Central Bottling Com-pany) aracılığıyla üretim, dağıtım ve satış yapmaktadır.
         •	Siyasi Destek İddiaları: Marka, İsrail'deki yerleşim birimlerinde faaliyet göstermesi ve çeşitli İsrail kurumlarına yaptığı iddia edilen destekler nedeniyle boykot hareketlerinin doğrudan hedefi olmuştur.
         Bu güçlü ticari ve siyasi duruşlar sebebiyle The Coca-Cola Company'nin sahibi olduğu tüm markalar, küresel boykot çağrılarının hedefi haline gelmiştir.`,
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Cappy",
     slug: "cappy",
     ctgry: "İçecek",
     foundedYear: 1969,
     country: "ABD",
     owner: "The Coca-Cola Company",
     description: `Cappy, meyve suyu ve meyve bazlı içecekler kategorisinde faaliyet gösteren uluslararası bir markadır. Marka, 1969 yılında Macaristan'da kuruldu ve günümüzde The Coca-Cola Company bünyesinde dünya genelinde pazarlanmaktadır. Türkiye'de Cappy, portakal, elma, karışık meyve gibi çeşitli aromalarla tüketicilere sunulmaktadır.
         Cappy, Coca-Cola Company'ye bağlı bir marka olduğu için uluslararası bir yapıya sahiptir. Türkiye'deki üretim ve dağıtım faaliyetleri şirketin kalite standartlarına uygun şekilde yürütülmektedir.`,
     country: "ABD",
     website: "https://www.coca-cola.com/tr/tr/brands/cappy",
     img: "/cappy.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "juss",
      "dimes",
      "tamek",
      "meysu",
      "fruit-pocket",
     ],
    },
    {
     name: "Schweppes",
     slug: "schweppes",
     ctgry: "İçecek",
     foundedYear: 1783,
     founder: "Jacob Schweppe",
     owner: "The Coca-Cola Company",
     description: `Schweppes, gazlı içecekler ve maden suyu kategorisinde dünya çapında bilinen köklü bir markadır. 1783 yılında İsviçreli kimyager Jacob Schweppe tarafından kurulan marka, özellikle tonik su, soda ve aromalı gazlı içecekleriyle tanınmakta-dır. Türkiye'de Schweppes, tonik, soda ve gazlı aromalı içecek çeşitleriyle tüketiciler tarafından yaygın olarak tercih edilmektedir.
         Türkiye'de Schweppes markası, The Coca Cola Company tarafından sahiplenilmiş ve dağıtılmaktadır. `,
     country: "İsviçre & ABD",
     website: "https://www.coca-cola.com/tr/tr/brands/schweppes ",
     img: "/schweppes.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Fanta",
     slug: "fanta",
     ctgry: "İçecek",
     foundedYear: 1940,
     founder: "Max Keith (Coca-Cola Deutschland)",
     owner: "The Coca-Cola Company",
     description: `Fanta, The Coca-Cola Company'ye ait, dünya çapında tanınan meyve aromalı gazlı içecek markasıdır. Markanın ilginç bir tarihi vardır; İkinci Dünya Savaşı sırasında Almanya'da, Coca-Cola'nın malzeme sıkıntısı çekmesi üzerine yerel alternatif olarak 1940 yılında icat edilmiştir. Orijinal peynir altı suyu ve elma posası gibi atıklardan üretilen ilk formülüyle başlayan yolculuğu, zamanla global bir başarı hikayesine dönüşmüştür.`,
     country: "ABD & Almanya",
     website: "https://www.coca-cola.com/tr/tr/brands/fanta",
     img: "/fanta.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Sprite",
     slug: "sprite",
     ctgry: "İçecek",
     country: "ABD",
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Sprite, Coca-Cola Company'ye ait bir gazlı içecek markasıdır. İlk olarak 1961 yılında piyasaya sürülmüş olup, limon-lime aromalı ve renksiz bir gazlı içecek olarak bilinir. Dünya genelinde özellikle genç tüketici kitlesi arasında popülerdir ve Coca-Cola'nın global portföyünde önemli bir marka olarak yer alır. Sprite, Coca-Cola Company'nin sahibi olduğu diğer markalar gibi, Berkshire Hathaway Holding'in portföyünde bulunan bir markadır.`,
     country: "ABD",
     website: "https://www.coca-cola.com/tr/tr/brands/sprite",
     img: "/sprite.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Damla Su",
     slug: "damla-su",
     ctgry: "İçecek",
     foundedYear: null,
     founder: "Coca-Cola Türkiye",
     owner: "The Coca-Cola Company",
     description: `Damla Su, Türkiye merkezli bir içme ve maden suyu markasıdır ve doğal kaynaklardan elde ettiği suyu yüksek kalite standartlarında tüketiciye sunmaktadır. Şirket, hem içme suyunda hem de maden suyunda sağlıklı ve güvenilir ürünleri geniş kitlelere ulaştırmayı amaçlamaktadır. Ürünlerinin hijyenik koşullarda üretilmesi ve paketlenmesi, markanın en önemli önceliklerinden biridir.
         Damla Su, modern dolum tesisleri ve sıkı kalite kontrol süreçleri ile tanınır. Türkiye genelindeki marketler, süpermarketler ve çeşitli satış noktaları aracılığıyla tüketicilere ulaşan marka, Coca-Cola Türkiye tarafından üretilmekte ve dağı-tılmakta olup, günlük hayatın her anında güvenle tercih edilen bir içme ve maden suyu markasıdır.
         Damla Su bir ABD markası değildir. Ürün Türkiye'de üretilmekte ve dağıtılmaktadır; ancak markanın sahibi, Amerikan şirketi Coca-Cola Company'nin Türkiye kolu olan Coca-Cola Türkiye'dir. Yani mülkiyet Amerikan olmakla birlikte, ürün tamamen Türkiye pazarı için üretilip sunulmaktadır.`,
     country: "Türkiye & ABD",
     website: "https://www.coca-cola.com/tr/tr/brands/damla",
     img: "/damla-su.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "juss",
      "dimes",
      "tamek",
      "meysu",
      "fruit-pocket",
     ],
    },
    {
     name: "Minute Maid",
     slug: "minute-maid",
     ctgry: "İçecek",
     foundedYear: 1945,
     country: "ABD",
     owner: "The Coca-Cola Company",
     description: `Minute Maid, meyve suları ve meyve suyu bazlı içecekler alanında uzmanlaşmış, köklü bir markadır. Markanın ürün yelpazesi çok geniştir ve orijinal portakal suyu, limonata, meyveli içecekler, düşük şekerli ve sıfır şekerli çeşitler dahil ol-mak üzere birçok farklı ürün formatını içerir.
        Minute Maid markası, uluslararası içecek devi olan The Coca-Cola Company'ye aittir ve Coca-Cola'nın küresel portföyünün önemli bir parçasıdır.`,
     country: "ABD",
     website: "https://www.coca-cola.com/us/en/brands/minute-maid",
     img: "/minute-maid.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["didi", "dogus", "ofcay", "caykur", "teatone"],
    },
    {
     name: "Fusetea",
     slug: "fusetea",
     ctgry: "İçecek",
     country: "ABD",
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Fusetea, The Coca-Cola Company'nin meyve aromalı buzlu çay markasıdır. Siyah çay ekstraktı ile meyve tatlarını bir araya getiren marka, Türkiye'de karpuz, mango-ananas, şeftali ve limon olmak üzere çeşitli aromalarla tüketicilere sunulmaktadır. Fusetea, doğal çay özleri ve meyve suyu konsantreleri içerir, koruyucu ve renklendirici içermez. Çaydan gelen kafein içerir (32-54 mg/L arasında). Marka, ferahlatıcı ve doğal içeriğiyle öne çıkan buzlu çay seçenekleri sunmaktadır. Fusetea, Coca-Cola'nın geniş içecek portföyünün bir parçası olarak dünya çapında birçok farklı pazarda tüketicilere sunulmaktadır.`,
     country: "ABD",
     website: "https://www.coca-cola.com/tr/tr/brands/fusetea",
     img: "/fusetea.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["dirilis", "uludag"],
    },
    {
     name: "Powerade",
     slug: "powerade",
     ctgry: "İçecek",
     foundedYear: 1988,
     country: "ABD",
     owner: "The Coca-Cola Company",
     description: `Powerade, 1988 yılından bu yana The Coca-Cola Company tarafından üretilen ve pazarlanan bir spor içeceğidir. Marka, özellikle PepsiCo'nun Gatorade markasıyla rekabet etmek amacıyla piyasaya sürülmüştür.
         Powerade, temel olarak antrenman sırasında veya sonrasında kaybedilen sıvıyı ve enerjiyi yerine koymak için tasarlanmıştır. İçeriğinde genellikle su, elektrolitler, karbonhidratlar ve diğer besin maddeleri bulunur. Powerade, 2000 yılında resmi Olimpiyat spor içeceği olmuştur. Ürün yelpazesi Powerade Zero gibi düşük kalorili seçenekleri de içerir.`,
     country: "ABD",
     website: "https://www.coca-cola.com/tr/tr/brands/powerade",
     img: "/powerade.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["dirilis"],
    },
    {
     name: "Monster Energy",
     slug: "monster-energy",
     ctgry: "İçecek",
     foundedYear: 2002,
     country: "ABD",
     owner: "Monster Beverage Corporation (Coca-Cola %16.7 hisse)",
     description: `Monster Energy, enerji içeceği kategorisinde faaliyet gösteren ve dünya çapında bilinen bir markadır. Marka, ABD merkezli Monster Beverage Corporation tarafından üretilmekte ve farklı aromalar ile boyutlarda ürünler sunmaktadır. Sporcular ve genç yetişkinler arasında oldukça popüler olan Monster Energy, Türkiye'de de çeşitli distribütörler aracılığıyla tüketiciye ulaşmaktadır.
         2015 yılında The Coca Cola Company, Monster Beverage Corporation ile stratejik bir ortaklık kurarak şirkette yaklaşık %16 hisse aldı. Bu ortaklık sayesinde Coca Cola, Monster ürünlerinin global dağıtımında destek sağlamakta ve bazı pa-zarlama faaliyetlerinde iş birliği yapmaktadır. `,
     country: "ABD",
     website: "https://www.monsterenergy.com/tr-tr/",
     img: "/monster-energy.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["dirilis"],
    },
    {
     name: "Hawai Tropical",
     slug: "hawai-tropical",
     ctgry: "İçecek",
     country: "ABD",
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Hawai Tropical, tropikal meyve aromalı bir içecek markasıdır. Marka, genellikle Fas, Fransa gibi pazarlarda satılmaktadır ve The Coca-Cola Company'nin portföyünde yer alan bölgesel markalardan biridir.`,
     country: "ABD",
     website: "https://www.coca-cola.com/ma/fr/brands/hawai",
     img: "/hawai-tropical.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Mezzo Mix",
     slug: "mezzo-mix",
     ctgry: "İçecek",
     foundedYear: 1973,
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Mezzo Mix, 1973 yılında Almanya'da tanıtılan bir içecek markasıdır. Marka, portakallı gazlı içecek ve kolanın karıştırılmasıyla oluşan popüler bir içecek türüdür.
         Mezzo Mix, Amerikalı çok uluslu şirket The Coca-Cola Company'nin bir ürünüdür. Resmi olarak yalnızca Almanya, İsviçre ve Avusturya'da satılmakta ve üretilmektedir.`,
     country: "ABD & Almanya & İsviçre & Avusturya",
     img: "/mezzo-mix.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "juss",
      "dimes",
      "tamek",
      "meysu",
      "fruit-pocket",
     ],
    },
    {
     name: "Tropico",
     slug: "tropico",
     ctgry: "İçecek",
     foundedYear: null,
     founder: "The Coca-Cola Company",
     country: "ABD",
     description: `Tropico, meyve suyu ve tropikal aromalı içecekler kategorisinde yer alan bir markadır. 
         Bu marka, The Coca-Cola Company'nin global içecek portföyünün bir parçası olarak faaliyet göstermektedir. Ürünleri ferahlatıcı tropikal meyve aromalarının karışımından oluşur.
         `,
     country: "ABD",
     website: "https://www.coca-cola.com/be/fr/brands/tropico",
     img: "/tropico.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "juss",
      "dimes",
      "tamek",
      "meysu",
      "fruit-pocket",
     ],
    },
    {
     name: "Arwa",
     slug: "arwa",
     ctgry: "İçecek",
     foundedYear: null,
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Arwa, The Coca-Cola Company'nin sahip olduğu bir şişelenmiş su markasıdır. Marka, Orta Doğu ve Kuzey Afrika pazarlarında yaygın olarak bilinir ve bu bölgelerdeki tüketicilere hitap etmektedir. Arwa suyu, düşük sodyum içeriği ve dengeli mineral yapısı ile pazarlanmaktadır.
         Arwa markası, küresel içecek devi olan Coca-Cola'nın yerel su pazarlarındaki varlığını temsil eder.`,
     country: "ABD & Orta Doğu & Kuzey Afrika",
     website: "https://www.coca-cola.com/xf/en/brands/arwa ",
     img: "/arwa.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
     ],
    },
    {
     name: "Lurisia",
     slug: "lurisia",
     ctgry: "İçecek",
     foundedYear: null,
     founder: "Yerel İtalyan Girişimciler",
     owner: "The Coca-Cola Company",
     description: `Lurisia, İtalya merkezli bir maden suyu ve içecek markasıdır. Marka, özellikle yüksek kaliteli doğal maden suları ve geleneksel İtalyan tariflerine dayanan gazlı içecek (bibite) ve aperitivo ürünleriyle tanınmaktadır. Lurisia, İtalya'nın yerel mirasına dayalı olarak saf ve doğal içerikler sunmayı amaçlar.
         Lurisia markası, uluslararası içecek devi olan The Coca-Cola Company'nin portföyünde yer almaktadır ve Coca-Cola tarafından İtalya pazarında ve uluslararası alanda dağıtılmaktadır.
         `,
     country: "ABD & İtalya",
     website: "https://www.coca-cola.com/it/it/brands/Lurisia",
     img: "/lurisia.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
     ],
    },
    {
     name: "Valser Water",
     slug: "valser-water",
     ctgry: "İçecek",
     foundedYear: null,
     founder: "Yerel İsviçre Girişimciler",
     owner: "The Coca-Cola Company",
     description: `Valser, İsviçre'de Valais kantonunda bulunan kaynaklardan elde edilen doğal maden suyu markasıdır. Marka, yüksek rakımlı dağ kaynaklarından gelmesi ve saflığı ile bilinir. Ürün ambalajında genellikle İsviçre menşei ve kaynak bilgileri be-lirtilmektedir.
         Valser, uluslararası içecek devi olan The Coca-Cola Company'nin İsviçre ve çevresindeki pazarlardaki su portföyünün bir parçasıdır.`,
     country: "ABD & İsviçre",
     website: "https://www.coca-cola.com/ch/de/brands/valser",
     img: "/valser-water.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
     ],
    },
    {
     name: "Lilia",
     slug: "lilia",
     ctgry: "İçecek",
     foundedYear: null,
     founder: "Yerel İtalyan Girişimciler",
     owner: "The Coca-Cola Company",
     description: `Lilia, İtalya merkezli bir şişelenmiş doğal su markasıdır. Marka, genellikle sade ve doğal mineral suyu segmentinde yer almakta olup, İtalyan tüketicilerine hitap etmektedir.
         Lilia, uluslararası içecek devi olan The Coca-Cola Company'nin İtalya pazarındaki su portföyünün bir parçasıdır. Marka, Coca-Cola tarafından dağıtılmaktadır.
         `,
     country: "ABD & İtaly",
     website: "https://www.coca-cola.com/it/it/brands/lilia",
     img: "/lilia.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
     ],
    },
    {
     name: "Glacéau Smartwater",
     slug: "glaceau-smartwater",
     ctgry: "İçecek",
     foundedYear: 1996,
     founder: "J. Darius Bikoff (Energy Brands)",
     owner: "The Coca-Cola Company",
     description: `Glacéau Smartwater, The Coca-Cola Company'nin bir iştiraki olan Energy Brands'e ait şişelenmiş su markasıdır. Marka, 1996 yılında piyasaya sürülmüştür.
         Markayı benzersiz kılan özellikler şunlardır:
         •country: "ABD",etim süreci, doğanın hidrolojik döngüsünü taklit ederek suyu buharla damıtır.
         •	Elektrolit Ekleme: Damıtılmış suya, belirgin, berrak bir tat yaratmak için potasyum, kalsiyum ve magnezyum gibi iyonize mineraller (elektrolitler) eklenir.
         •	Ürün Yelpazesi: Marka, sade suyun yanı sıra gazlı su (Sparkling) ve çeşitli pH seviyelerine sahip farklı ürünler sunar.
         Marka, 2007 yılında The Coca-Cola Company tarafından 4.1 milyar dolar nakit karşılığında satın alınmıştır.`,
     country: "ABD",
     website: "https://www.coca-cola.com/us/en/brands/smartwater",
     img: "/glaceau-smartwater.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
     ],
    },
    {
     name: "Apollinaris",
     slug: "apollinaris",
     ctgry: "İçecek",
     foundedYear: 1852,
     founder: "Georg Kreuzberg",
     owner: "The Coca-Cola Company",
     description: `Apollinaris, 1852 yılından bu yana varlığını sürdüren köklü bir Alman maden suyu markasıdır. Almanya'da bulunan Bad Neuenahr-Ahrweiler yakınlarındaki bir kaynaktan elde edilen doğal maden suyu ile tanınır. Marka, tarihi ve kalitesiyle Almanya'nın önde gelen maden suyu markalarından biri haline gelmiştir.
         Apollinaris markası, uluslararası içecek devi olan The Coca-Cola Company'nin Almanya ve çevresindeki pazarlardaki su portföyünün bir parçasıdır.
         `,
     country: "ABD & Almanya",
     website: "https://www.coca-cola.com/de/de/brands/apollinaris",
     img: "/apollinaris.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
     ],
    },
    {
     name: "Chaudfontaine",
     slug: "chaudfontaine",
     ctgry: "İçecek",
     foundedYear: null,
     founder: "Yerel Belçika Girişimciler",
     owner: "The Coca-Cola Company",
     description: `Chaudfontaine, Belçika'nın Valon Bölgesi'ndeki Liège yakınlarında bulunan kaynaklardan elde edilen doğal mineral su markasıdır. Marka, suyunu "60 YIL DOĞAL FİLTRASYON" süreciyle elde ettiğini belirtmekte ve genellikle sade (Still) ve ha-fif gazlı (Sparkling) çeşitleriyle bilinmektedir.
         Chaudfontaine, uluslararası içecek devi olan The Coca-Cola Company'nin Belçika ve çevre pazarlardaki su portföyünün önemli bir parçasıdır.
         `,
     country: "ABD & Belçika",
     website: "https://www.coca-cola.com/be/fr/brands/chaudfontaine",
     img: "/chaudfontaine.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
     ],
    },
    {
     name: "Römerquelle",
     slug: "romerquelle",
     ctgry: "İçecek",
     foundedYear: null,
     founder: "Yerel Avusturya Girişimciler",
     owner: "The Coca-Cola Company",
     description: `Römerquelle, Avusturya menşeli doğal maden suyu markasıdır. Marka, reklamlarında "Her Yeni Anı Canlandırır" gibi sloganlar kullanmakta ve Avusturya'nın yerel kaynaklarından elde edilen doğal mineral su ile bilinmektedir. Ürünleri ge-nellikle sade ve gazlı (Prickelnd) çeşitleriyle piyasaya sürülmektedir.
         Römerquelle, uluslararası içecek devi olan The Coca-Cola Company'nin Avusturya ve çevre pazarlardaki su portföyünün bir parçasıdır.`,
     country: "ABD & Avusturya",
     website: "https://www.coca-cola.com/at/de/brands/romerquelle",
     img: "/romerquelle.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
     ],
    },
    {
     name: "Bonaqua",
     slug: "bonaqua",
     ctgry: "İçecek",
     foundedYear: null,
     founder: "The Coca-Cola Company",
     country: "ABD",
     description: `Bonaqua, uluslararası içecek devi The Coca-Cola Company'ye ait bir şişelenmiş su markasıdır. Marka, sade su ("Bonaqua Silver") ve limon aromalı gibi farklı çeşitlerde ("Bon Viva" serisi gibi) su ürünleri sunmaktadır.
         Bonaqua, Coca-Cola'nın geniş portföyünün bir parçası olarak birçok ülkede tüketicilere sunulmaktadır.
         `,
     country: "ABD",
     website: "https://www.coca-cola.com/mv/en/brands/bonaqua ",
     img: "/bonaqua.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Kinley",
     slug: "kinley",
     ctgry: "İçecek",
     foundedYear: null,
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     country: "ABD",
     description: `Kinley, The Coca-Cola Company'nin sahip olduğu ve uluslararası alanda geniş bir yelpazede su ve tonik gibi gazlı içecekler sunan bir markadır. Markanın ürün portföyü genellikle iki ana kategoriye ayrılır:
         1.	Şişelenmiş Su: Genellikle "10 adımlı saflaştırma süreci" gibi ifadelerle pazarlanan ve güvenilirliği vurgulanan içme suyu.
         2.	Yetişkin Gazlı İçecekler: Kinley Ginger Ale, Kinley Tonic Water, Kinley Signature Tonic Water, Kinley Pink Aromatic Berry ve Kinley Bitter Lemon gibi mikser ve gazlı içecekler. Bu ürünler genellikle alkolsüzdür ve kokteyllerle veya tek başına tüketim için tasarlanmıştır.
         Kinley, Coca-Cola'nın global içecek portföyünün bir parçasıdır.`,
     website: "https://www.coca-cola.com/in/en/brands/kinley",
     img: "/kinley.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
     ],
    },
    {
     name: "Vitamin Water",
     slug: "vitamin-water",
     ctgry: "İçecek",
     foundedYear: 2000,
     owner: "The Coca-Cola Company",
     country: "ABD",
     description: `Vitamin Water, The Coca-Cola Company'nin sahip olduğu popüler bir vitaminli su markasıdır. Marka, çeşitli meyve aromaları ile tatlandırılmış su bazlı içecekler sunar ve ürünlerinde vitaminler ile minerallerin eklendiğini belirtir. Marka, normal şekerli ve sıfır şekerli ("vitaminwater zero sugar") çeşitleriyle geniş bir tüketici kitlesine hitap etmektedir.
         Vitamin Water, Coca-Cola'nın küresel içecek portföyünün önemli bir parçasıdır ve özellikle Kuzey Amerika ve Avrupa gibi pazarlarda güçlü bir varlığa sahiptir.`,
     website: "https://www.coca-cola.com/us/en/brands/vitaminwater",
     img: "/vitamin-water.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["sutas", "pinar", "vio", "sek"],
    },
    {
     name: "Adez",
     slug: "adez",
     ctgry: "İçecek",
     foundedYear: null,
     country: "ABD",
     owner: "The Coca-Cola Company",
     description: `Adez, bitki bazlı içecekler (Plant-Based Drinks) kategorisinde yer alan bir markadır. Marka, genellikle badem, yulaf, soya ve pirinç gibi bileşenlerden elde edilen, laktozsuz ve vegan tüketicilere yönelik içecekler sunmaktadır.
         Adez markası, uluslararası içecek devi olan The Coca-Cola Company'nin portföyünde yer almaktadır ve Avrupa'da ve diğer pazarlarda dağıtılmaktadır.`,
     country: "ABD",
     website: "https://www.coca-cola.com/cz/cs/brands/adez ",
     img: "/adez.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["didi", "dogus", "ofcay", "caykur", "teatone"],
    },
    {
     name: "Honest",
     slug: "honest",
     ctgry: "İçecek",
     foundedYear: 1998,
     founder: "Seth Goldman & Barry Nalebuff",
     country: "ABD",
     description: `Honest Tea (Honest olarak da bilinir), organik buzlu çaylar ve bitkisel içecekler kategorisinde yer alan bir markadır. Marka, ürünlerinde koruyucu madde kullanmadığını ve organik yeşil çay gibi doğal içeriklere odaklandığını vurgulamaktadır.
         Honest Tea, uluslararası içecek devi olan The Coca-Cola Company'nin portföyünde yer almaktadır.
         `,
     country: "ABD",
     website: "https://www.coca-cola.com/in/en/brands/honesttea",
     img: "/honest.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["didi", "dogus", "ofcay", "caykur", "teatone"],
    },
    {
     name: "Innocent",
     slug: "innocent",
     ctgry: "İçecek",
     foundedYear: 1998,
     owner: "The Coca-Cola Company (%90+ hisse)",
     country: "ABD",
     description: `Innocent Drinks, 1998 yılında üç Cambridge Üniversitesi mezunu tarafından Londra, Birleşik Krallık'ta kurulmuş bir şirkettir. Şirket, süpermarketler, kafeler ve çeşitli satış noktalarında satılan smoothie ve meyve suları üretimiyle tanınır.
         Marka, smoothie ve meyve sularının yanı sıra, bazı içeceklerinde havuç ve zencefil gibi malzemeler de kullanmaktadır. Şirketin %90'ın üzerindeki hissesi The Coca-Cola Company'ye aittir.`,
     website: "https://www.innocentdrinks.co.uk/",
     img: "/innocent.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
    },
    {
     name: "Burn",
     slug: "burn",
     ctgry: "İçecek",
     country: "ABD",
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Burn, The Coca-Cola Company'nin sahip olduğu bir enerji içeceği markasıdır. 2000'li yılların başında piyasaya sürülen marka, özellikle genç yetişkinler ve aktif yaşam tarzına sahip tüketiciler arasında popülerdir. Burn, enerji içecekleri pazarında Red Bull ve Monster gibi markalarla rekabet etmektedir. Ürün yelpazesinde orijinal Burn Energy Drink'in yanı sıra çeşitli aromalar ve varyantlar bulunmaktadır. Türkiye'de de yaygın olarak satılan Burn, Coca-Cola'nın enerji içeceği portföyünün önemli bir parçasıdır.`,
     country: "ABD",
     website: "https://www.coca-cola.com/tr/tr/brands/burn",
     img: "/burn.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["juss", "uludag"],
    },
    {
     name: "Doğadan",
     slug: "dogadan",
     ctgry: "İçecek",
     foundedYear: 1970,
     founder: "Yerel Türk Girişimciler",
     owner: "Coca-Cola İçecek A.Ş. (CCI)",
     description: `Doğadan, Türkiye'nin önde gelen çay markalarından biridir ve 1970'li yıllardan bu yana faaliyet göstermektedir. Marka, siyah çay, yeşil çay, bitki çayları ve meyve çayları gibi geniş bir ürün yelpazesi sunmaktadır. Doğadan, Türk tüketicilerin çay kültürüne hitap eden ve kaliteli çay ürünleri sunan yerli bir marka olarak bilinmektedir. 2018 yılında, Coca-Cola İçecek A.Ş. (CCI), Doğadan markasının sahibi olan Doğadan Gıda Ürünleri San. ve Tic. A.Ş.'nin %100 hissesini satın almıştır. Bu satın alma ile Doğadan, Coca-Cola'nın Türkiye portföyüne dahil olmuştur.`,
     country: "Türkiye & ABD",
     website: "https://www.dogadan.com.tr/",
     img: "/dogadan.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["didi", "dogus", "ofcay", "caykur", "teatone"],
    },
    {
     name: "Aquarius",
     slug: "aquarius",
     ctgry: "İçecek",
     foundedYear: 1983,
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Aquarius, The Coca-Cola Company'nin sahip olduğu bir spor içeceği markasıdır. İlk olarak 1983 yılında Japonya'da piyasaya sürülen marka, sporcuların ve aktif bireylerin egzersiz sırasında kaybettikleri sıvı, elektrolit ve enerjiyi yerine koymak için tasarlanmıştır. Aquarius, düşük kalorili ve çeşitli meyve aromalarıyla sunulur. Marka, özellikle Asya, Avrupa ve Latin Amerika pazarlarında güçlü bir varlığa sahiptir. Türkiye'de de satılan Aquarius, Powerade ile birlikte Coca-Cola'nın spor içeceği portföyünün önemli bir parçasıdır.`,
     country: "ABD & Japonya",
     website: "https://www.coca-cola.com/jp/ja/brands/aquarius",
     img: "/aquarius.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["dirilis", "uludag"],
    },
    {
     name: "Dasani",
     slug: "dasani",
     ctgry: "İçecek",
     country: "ABD",
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Dasani, The Coca-Cola Company'nin sahip olduğu bir şişelenmiş su markasıdır. İlk olarak 1999 yılında Amerika Birleşik Devletleri'nde piyasaya sürülen Dasani, saflaştırılmış su üzerine odaklanmaktadır. Marka, suyuna tat vermek için mineraller eklemektedir. Dasani, dünya genelinde birçok ülkede satılmakta ve Coca-Cola'nın su portföyünde önemli bir yer tutmaktadır. ABD pazarında en popüler şişelenmiş su markalarından biri olan Dasani, sade su, aromalı su ve gazlı su çeşitleri sunmaktadır.`,
     country: "ABD",
     website: "https://www.coca-cola.com/us/en/brands/dasani",
     img: "/dasani.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
     ],
    },
    {
     name: "Costa Coffee",
     slug: "costa-coffee",
     ctgry: "İçecek",
     foundedYear: 1971,
     founder: "Sergio Costa & Bruno Costa",
     owner: "The Coca-Cola Company",
     description: `Costa Coffee, Birleşik Krallık merkezli ve dünya çapında tanınan bir kahve zinciridir. 1971 yılında İtalyan kökenli Sergio ve Bruno Costa kardeşler tarafından Londra'da kurulmuştur. Marka, özel olarak kavrulmuş kahve çekirdekleri ve geniş içecek menüsüyle bilinmektedir. Costa Coffee, 2019 yılında The Coca-Cola Company tarafından yaklaşık 5.1 milyar dolara satın alınmıştır. Bu satın alma, Coca-Cola'nın kahve pazarına girişini ve portföyünü genişletme stratejisini temsil etmektedir. Costa Coffee, dünya genelinde binlerce mağaza ve ürünleriyle Coca-Cola'nın önemli bir markasıdır.`,
     country: "İngiltere & ABD",
     website: "https://www.costa.co.uk/",
     img: "/costa-coffee.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["dogus", "ofcay", "caykur"],
    },
    {
     name: "Ayran Turka",
     slug: "ayran-turka",
     ctgry: "İçecek",
     foundedYear: null,
     founder: "Coca-Cola İçecek A.Ş.",
     owner: "Coca-Cola İçecek A.Ş.",
     description: `Ayran Turka, Coca-Cola İçecek A.Ş. tarafından Türkiye pazarı için üretilen bir ayran markasıdır. Geleneksel Türk içeceği ayranın modern ve pratik bir versiyonunu sunmaktadır. Ayran Turka, hijyenik koşullarda üretilen ve Türk damak tadına uygun olarak hazırlanan bir üründür. Coca-Cola'nın Türkiye'deki yerel portföyünde yer alan marka, marketler ve süpermarketlerde yaygın olarak bulunmaktadır. Ayran Turka, Coca-Cola'nın yerel kültüre ve tüketici tercihlerine uyum sağlama stratejisinin bir örneğidir.`,
     country: "Türkiye & ABD",
     website: "https://www.coca-cola.com/tr/tr",
     img: "/ayran-turka.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: ["sutas", "pinar", "vio", "sek"],
    },
    {
     name: "Simply",
     slug: "simply",
     ctgry: "İçecek",
     country: "ABD",
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Simply, The Coca-Cola Company'nin sahip olduğu bir meyve suyu markasıdır. Marka, "basit" ve "doğal" içerikler vurgusuyla, koruyucu maddeler veya yapay aromalar içermeyen meyve suları sunmaktadır. Simply ürün yelpazesi portakal suyu, limonata, elma suyu ve meyve karışımlarını içermektedir. Marka, özellikle Amerika Birleşik Devletleri'nde popülerdir ve Coca-Cola'nın premium meyve suyu segmentindeki önemli bir oyuncusudur. Simply, sağlıklı ve doğal içecek arayan tüketicilere hitap etmektedir.`,
     country: "ABD",
     website: "https://www.coca-cola.com/us/en/brands/simply",
     img: "/simply.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "juss",
      "dimes",
      "tamek",
      "meysu",
      "fruit-pocket",
     ],
    },
    {
     name: "Barq's",
     slug: "barqs",
     ctgry: "İçecek",
     country: "ABD",
     founder: "Edward Barq",
     owner: "The Coca-Cola Company",
     description: `Barq's, The Coca-Cola Company'nin sahip olduğu bir root beer (kök bira) markasıdır. 1898 yılında Edward Barq tarafından Louisiana'da kurulan marka, güçlü aroması ve hafif kafein içeriğiyle bilinmektedir. Barq's, Amerika Birleşik Devletleri ve Kanada'da popüler olan geleneksel bir gazlı içecektir. Root beer, genellikle karamelize şeker, vanilya ve çeşitli kök ve bitki özlerinden yapılan tatlı ve aromatik bir içecektir. Barq's, 1995 yılında Coca-Cola tarafından satın alınmıştır ve şirketin çeşitli gazlı içecek portföyünün bir parçası olarak sunulmaktadır.`,
     country: "ABD",
     website: "https://www.coca-cola.com/us/en/brands/barqs",
     img: "/barqs.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Fresca",
     slug: "fresca",
     ctgry: "İçecek",
     country: "ABD",
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Fresca, The Coca-Cola Company'nin sahip olduğu greyfurt aromalı bir gazlı içecek markasıdır. İlk olarak 1966 yılında Amerika Birleşik Devletleri'nde piyasaya sürülen Fresca, şekersiz ve düşük kalorili bir içecek olarak konumlandırılmıştır. Marka, ferahlatıcı ve hafif tada sahip olmasıyla bilinir ve özellikle sıcak havalarda tercih edilmektedir. Fresca, yıllar içinde çeşitli lezzet varyantlarıyla genişletilmiş ve Latin Amerika gibi uluslararası pazarlarda da popülerlik kazanmıştır. Coca-Cola'nın düşük kalorili gazlı içecek seçenekleri arasında önemli bir yere sahiptir.`,
     country: "ABD",
     website: "https://www.coca-cola.com/us/en/brands/fresca",
     img: "/fresca.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Mello Yello",
     slug: "mello-yello",
     ctgry: "İçecek",
     country: "ABD",
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Mello Yello, The Coca-Cola Company'nin sahip olduğu sitrus aromalı bir gazlı içecek markasıdır. İlk olarak 1979 yılında Amerika Birleşik Devletleri'nde piyasaya sürülen marka, PepsiCo'nun Mountain Dew markasıyla rekabet etmek için geliştirilmiştir. Mello Yello, parlak sarı rengi ve tatlı, sitrus tadıyla bilinir ve kafein içermektedir. Marka, özellikle güney ABD eyaletlerinde popülerdir ve NASCAR gibi otomotiv sporlarıyla ilişkilendirilmiştir. Mello Yello, Coca-Cola'nın sitrus aromalı gazlı içecek segmentinde önemli bir markadır.`,
     country: "ABD",
     website: "https://www.coca-cola.com/us/en/brands/mello-yello",
     img: "/mello-yello.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Pibb Xtra",
     slug: "pibb-xtra",
     ctgry: "İçecek",
     country: "ABD",
     founder: "The Coca-Cola Company",
     owner: "The Coca-Cola Company",
     description: `Pibb Xtra (eski adıyla Mr. Pibb), The Coca-Cola Company'nin sahip olduğu kiraz aromalı bir gazlı içecek markasıdır. İlk olarak 1972 yılında Mr. Pibb adıyla piyasaya sürülen marka, Dr Pepper ile rekabet etmek için geliştirilmiştir. 2001 yılında formülü değiştirilmiş ve adı Pibb Xtra olarak güncellenmiştir. Marka, kiraz ve baharatlı aromaların birleşimiyle tanınır ve özellikle Amerika Birleşik Devletleri'nde satılmaktadır. Pibb Xtra, Coca-Cola'nın niş gazlı içecek portföyünün bir parçasıdır.`,
     country: "ABD",
     website: "https://www.coca-cola.com/us/en/brands/pibb-xtra",
     img: "/pibb-xtra.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Zico",
     slug: "zico",
     ctgry: "İçecek",
     country: "ABD",
     founder: "Mark Rampolla",
     owner: "The Coca-Cola Company",
     description: `Zico, The Coca-Cola Company'nin sahip olduğu bir hindistan cevizi suyu markasıdır. 2004 yılında kurulmuş olan marka, doğal hindistan cevizi suyunu popülerleştirme misyonuyla başlamıştır. Zico, elektrolitler, potasyum ve doğal içerikler içeren sağlıklı bir içecek alternatifi olarak pazarlanmaktadır. Coca-Cola, 2013 yılında Zico'nun çoğunluk hissesini satın almıştır. Ancak, pazar performansı nedeniyle Coca-Cola, 2021 yılında Zico markasını ABD pazarından çekme kararı almıştır. Marka, bazı uluslararası pazarlarda hala bulunabilmektedir.`,
     country: "ABD",
     website: "https://zico.com/",
     img: "/zico.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "hamidiye",
      "beysu",
      "sultan",
      "saka",
      "buzdagi",
      "kizilay",
      "ozkaynak",
      "ceysu",
      "sarikiz",
      "beypazari",
     ],
    },
    {
     name: "Appletiser",
     slug: "appletiser",
     ctgry: "İçecek",
     foundedYear: 1966,
     founder: "Yerel Güney Afrika Girişimciler",
     owner: "The Coca-Cola Company",
     description: `Appletiser, Güney Afrika menşeli gazlı elma suyu markasıdır. 1966 yılında Güney Afrika'da kurulan marka, %100 elma suyundan yapılan karbonatlandırılmış bir içecektir. Appletiser, yapay tatlandırıcı veya koruyucu madde içermemesiyle tanınır ve premium bir gazlı meyve suyu olarak konumlandırılmıştır. Marka, 2007 yılında Coca-Cola tarafından satın alınmıştır. Appletiser, Birleşik Krallık, Avustralya ve Orta Doğu gibi birçok uluslararası pazarda satılmaktadır ve Coca-Cola'nın premium içecek portföyünün bir parçasıdır.`,
     country: "Güney Afrika & ABD",
     website: "https://www.appletiser.com/",
     img: "/appletiser.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "juss",
      "dimes",
      "tamek",
      "meysu",
      "fruit-pocket",
     ],
    },
    {
     name: "Rani",
     slug: "rani",
     ctgry: "İçecek",
     foundedYear: 1980,
     founder: "Yerel Suudi Arabistan Girişimciler",
     owner: "The Coca-Cola Company",
     description: `Rani, Orta Doğu pazarında popüler olan bir meyve suyu ve nektarı markasıdır. 1980'li yıllarda Suudi Arabistan'da kurulan marka, çeşitli tropikal ve yerel meyve aromalı içecekler sunmaktadır. Rani, özellikle Körfez ülkeleri ve Orta Doğu bölgesinde güçlü bir varlığa sahiptir. Marka, 2005 yılında Coca-Cola tarafından satın alınmıştır. Rani, mango, guava, ananas ve karışık meyve gibi çeşitli lezzetler sunarak bölgenin damak tadına hitap etmektedir. Coca-Cola'nın bölgesel meyve suyu portföyünün önemli bir parçasıdır.`,
     country: "Suudi Arabistan & ABD",
     website: "https://www.coca-cola.com/mea/en/brands/rani",
     img: "/rani.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "juss",
      "dimes",
      "tamek",
      "meysu",
      "fruit-pocket",
     ],
    },
    {
     name: "Del Valle",
     slug: "del-valle",
     ctgry: "İçecek",
     foundedYear: 1950,
     founder: "Yerel Meksika Girişimciler",
     owner: "The Coca-Cola Company",
     description: `Del Valle, Latin Amerika'da popüler olan bir meyve suyu ve nektar markasıdır. 1950'li yıllarda Meksika'da kurulan marka, çeşitli tropikal ve yerel meyve aromalarıyla geniş bir ürün yelpazesi sunmaktadır. Del Valle, özellikle Meksika, Brezilya ve diğer Latin Amerika ülkelerinde güçlü bir pazar payına sahiptir. Coca-Cola, 2007 yılında Del Valle markasını satın almıştır. Marka, portakal, elma, mango, şeftali ve karışık meyve gibi çeşitli lezzetlerde meyve suları ve nektarlar üretmektedir. Coca-Cola'nın Latin Amerika pazarındaki en önemli meyve suyu markalarından biridir.`,
     country: "Meksika & ABD",
     website: "https://www.coca-cola.com/mx/es/brands/del-valle",
     img: "/del-valle.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "juss",
      "dimes",
      "tamek",
      "meysu",
      "fruit-pocket",
     ],
    },
    {
     name: "Thums Up",
     slug: "thums-up",
     ctgry: "İçecek",
     foundedYear: 1977,
     founder: "Ramesh Chauhan",
     owner: "The Coca-Cola Company",
     description: `Thums Up, Hindistan'da en popüler kola markalarından biridir. 1977 yılında Hindistan'da kurulan marka, güçlü aroması ve tatlı tadıyla bilinir. Thums Up, "Hindistan'ın Tadı" sloganıyla pazarlanmaktadır. Coca-Cola, 1993 yılında Thums Up markasını satın almıştır ve markayı Hindistan pazarında başarılı bir şekilde sürdürmüştür. Thums Up, Hindistan'da Coca-Cola'dan bile daha popüler bir kola markasıdır ve Coca-Cola'nın yerel pazarlara uyum sağlama stratejisinin önemli bir örneğidir.`,
     country: "Hindistan & ABD",
     website: "https://www.coca-cola.com/in/en/brands/thums-up",
     img: "/thums-up.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Inca Kola",
     slug: "inca-kola",
     ctgry: "İçecek",
     foundedYear: 1935,
     founder: "José Robinson Lindley",
     owner: "The Coca-Cola Company (%50 hisse)",
     description: `Inca Kola, Peru'nun ulusal gazlı içeceği olarak kabul edilen ve ülkede Coca-Cola'dan bile daha popüler olan bir markadır. 1935 yılında Peru'da kurulan marka, parlak sarı rengi ve tatlı, meyvemsi tadıyla bilinir. Inca Kola, Peru kültürünün önemli bir parçasıdır ve ülkede güçlü bir marka sadakatine sahiptir. Coca-Cola, 1999 yılında Inca Kola'nın %50 hissesini satın almış ve markayı Peru pazarında başarılı bir şekilde sürdürmüştür. Inca Kola, Coca-Cola'nın yerel markaları koruma stratejisinin en iyi örneklerinden biridir.`,
     country: "Peru & ABD",
     website: "https://www.coca-cola.com/pe/es/brands/inca-kola",
     img: "/inca-kola.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Limca",
     slug: "limca",
     ctgry: "İçecek",
     foundedYear: 1971,
     founder: "Ramesh Chauhan",
     owner: "The Coca-Cola Company",
     description: `Limca, Hindistan'da popüler olan limon aromalı bir gazlı içecek markasıdır. 1971 yılında Hindistan'da piyasaya sürülen marka, ferahlatıcı limon tadı ve berrak rengiyle bilinir. Limca, "Fresh Ho Jaao" (Tazelenin) sloganıyla pazarlanmaktadır. Coca-Cola, 1993 yılında Limca markasını satın almıştır ve markayı Hindistan pazarında başarılı bir şekilde sürdürmüştür. Limca, Hindistan'da en çok satılan limon aromalı gazlı içeceklerden biridir ve Coca-Cola'nın yerel portföyünde önemli bir yer tutar.`,
     country: "Hindistan & ABD",
     website: "https://www.coca-cola.com/in/en/brands/limca",
     img: "/limca.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
    {
     name: "Lift",
     slug: "lift",
     ctgry: "İçecek",
     foundedYear: 1950,
     country: "ABD",
     owner: "The Coca-Cola Company",
     description: `Lift, Coca-Cola şirketine ait sitrus aromalı gazlı içecek markasıdır. İlk olarak 1950'li yıllarda Avustralya'da piyasaya sürülen marka, özellikle limon aromalı ferahlatıcı meyveli gazoz kategorisinde konumlanmaktadır. Lift, Avustralya, Yeni Zelanda ve Pasifik adaları başta olmak üzere belirli pazarlarda satışa sunulmaktadır. 
         Marka, hafif ve ferahlatıcı tadı ile Coca-Cola'nın geniş ürün portföyü içinde alternatif bir seçenek sunmaktadır. Genellikle sarı renkli ambalajı ile tanınan Lift, sitrus severlere hitap eden bir gazoz markasıdır.`,
     country: "ABD",
     website: "https://www.coca-cola.com/nz/en/brands/lift",
     img: "/lift.png",
     isBoycotted: "boykot",
     boycottReason:
      "Coca-Cola'nın alt markası olduğu için boykot edilmektedir.",
     alternative_products: [
      "cola-turka",
      "camlica",
      "uludag",
      "zafer-gazoz",
      "dirilis",
     ],
    },
   ],
  },
 ],
};

export default marketAlisverisiCategory;
