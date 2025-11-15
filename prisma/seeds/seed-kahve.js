//! BELKİ İLERDE YAZILAR DEĞİŞEBİLİR.
const kahveCategory = {
  order: 1,
  name: "Kahve",
  slug: "kahve",
  iconKey: "coffee",
  description: "Kahve zincirleri ve kahve çekirdeği sağlayıcıları.",
  brands: [
    {
      name: "Cafex",
      slug: "cafex",
      foundedYear: null,
      founder: "Aydın Ailesi",
      owner: "A101 Yeni Mağazacılık A.Ş. (Aydın Ailesi)",
      description: `Cafex, Türkiye merkezli bir kahve markasıdır ve A101 Yeni Mağazacılık A.Ş. bünyesinde faaliyet göstermektedir. Marka, Aydın Ailesi'nin sahibi olduğu A101 perakende zincirinin özel markası olarak konumlandırılmıştır ve Türkiye'nin yerli kahve markalarından biridir.

Cafex ürünleri, DİMES Gıda Sanayi ve Ticaret A.Ş. tarafından A101 Yeni Mağazacılık A.Ş. adına üretilmektedir. Marka, yüksek kaliteli kahve çekirdekleri kullanarak Türkiye'de üretim yapmaktadır ve tüm üretim süreçleri yerli tesislerde gerçekleştirilmektedir. Cafex, A101 mağazalarında özel marka (private label) olarak satılmakta ve tüketicilere uygun fiyatlı kaliteli kahve seçenekleri sunmaktadır.

Marka, tamamen Türk sermayesi ile faaliyet göstermektedir. A101 Yeni Mağazacılık A.Ş.'nin çoğunluk hisseleri Aydın Ailesi'ne aittir ve şirketin yönetimi tamamen yerli sermayeye dayanmaktadır. Cafex, üretimde kullanılan tüm malzemelerin Türkiye menşeli olmasına özen göstermekte ve yerli üretimi desteklemektedir.

Cafex markası, herhangi bir boykot listesinde yer almamaktadır. İsrail bağlantısı bulunmayan marka, tamamen yerli sermaye ile faaliyet göstermekte ve Türkiye'nin yerli kahve markaları arasında yer almaktadır. Marka, A101 müşterilerine kaliteli ve uygun fiyatlı kahve seçenekleri sunarak Türk kahve pazarında önemli bir konuma sahiptir.`,
      country: "Türkiye",
      img: "/cafex.svg",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Kahve Diyarı",
      slug: "kahve-diyari",
      foundedYear: 2005,
      founder: "Bilinmiyor",
      owner: "Abdurrahman Yılmaz & Taha Yılmaz",
      description: `Kahve Diyarı, 2005 yılında İzmir'in Alsancak semtinde açılan ilk şubesiyle marka yolculuğuna başlamış ve Türkiye'nin önde gelen yerli kahve zincirlerinden biri haline gelmiştir. Marka, başlangıçtan itibaren yerli sermaye ile faaliyet göstermekte ve Türk kahve kültürünü modern bir yaklaşımla sunmaktadır.

Bugün Kahve Diyarı, Türkiye genelinde 33 ilde 100'ün üzerinde şubesiyle misafirlerine hizmet vermektedir. Edirne'den Kars'a uzanan geniş mağaza ağıyla, marka Türkiye'nin dört bir yanındaki müşterilerine ulaşmaktadır. Her şube, sıcak ve samimi atmosferiyle misafirlerine kaliteli bir kahve deneyimi sunmayı hedeflemektedir.

Kahve Diyarı'nın en önemli özelliklerinden biri, tüm ürünlerinin kendi üretim tesislerinde özenle üretilmesidir. Marka, kahve çekirdeklerinden pastalara, dondurmalardan unlu mamullere ve tatlı çeşitlerine kadar geniş bir ürün yelpazesini kendi tesislerinde üretmektedir. Bu yaklaşım, kalite kontrolü ve tazelik açısından önemli avantajlar sağlamaktadır.

Marka, Türk kahve kültürünü modern bir anlayışla harmanlamaktadır. Geleneksel Türk kahvesinden espresso bazlı içeceklere, soğuk kahve çeşitlerinden özel karışımlara kadar geniş bir menü sunmaktadır. Ayrıca, pasta, dondurma ve tatlı çeşitleriyle de müşterilerine kapsamlı bir deneyim sunmaktadır.

Kahve Diyarı, tamamen yerli sermaye ile faaliyet gösteren Türk menşeli bir markadır ve boykot dışıdır. İsrail bağlantısı bulunmayan marka, Türkiye'nin yerli kahve zincirleri arasında önemli bir konuma sahiptir ve yerli üretimi desteklemektedir.`,
      country: "Türkiye",
      website: "https://kahvediyari.com/",
      img: "/kahve-diyari.png",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Mahmood",
      slug: "mahmood",
      foundedYear: 1996,
      founder: "Altunsa Gıda Sanayi ve Ticaret A.Ş.",
      owner: "Altunkaya Şirketler Grubu",
      description: `Mahmood Coffee, 1996 yılında kurulan Altunsa Gıda Sanayi ve Ticaret A.Ş.'nin sıcak toz içecek kategorisindeki önemli markalarından biridir. Marka, Altunkaya Şirketler Grubu bünyesinde faaliyet göstermekte ve Türkiye'nin önde gelen yerli kahve markaları arasında yer almaktadır.

Mahmood Coffee, kalite standartlarına olan bağlılığı ile tanınmaktadır. Marka, ISO 9001 Kalite Yönetim Sistemi ve ISO 22000 Gıda Güvenliği Yönetim Sistemi belgelerine sahiptir. Bu belgeler, Mahmood Coffee'nin üretim süreçlerinde en yüksek kalite ve güvenlik standartlarını uyguladığını göstermektedir.

Marka, Gaziantep'teki 15 bin metrekarelik modern üretim tesisinde üretilmektedir. Bu tesis, son teknoloji ekipmanlarla donatılmış ve sürekli kalite kontrolü yapılan bir üretim merkezidir. Mahmood Coffee, bu tesislerde sıcak toz içecek kategorisinde çeşitli ürünler üretmektedir.

Mahmood Coffee, sadece Türkiye pazarında değil, uluslararası pazarlarda da güçlü bir konuma sahiptir. Marka, 40'tan fazla ülkeye ihracat yapmakta ve dünya çapında tüketicilere ulaşmaktadır. Bu uluslararası başarı, Mahmood Coffee'nin kalitesinin ve rekabet gücünün bir göstergesidir.

Altunkaya Şirketler Grubu bünyesinde Mahmood Coffee, Altunsa, Livan's, Mahmood Rice ve Mahmood Tea gibi diğer markalarla birlikte geniş bir ürün yelpazesi sunmaktadır. Bu markalar, çay ve kahve pazarında uygun fiyatlı ve kaliteli ürünler sunarak geniş bir müşteri kitlesine hitap etmektedir.

Mahmood Coffee, üretim ve pazarlama faaliyetleri ile hem yurt içinde hem de yurt dışında birçok tüketiciye ulaşmaktadır. Marka, özellikle fiyat-performans dengesi arayan müşterilere hitap etmekte ve kaliteli kahve deneyimini erişilebilir fiyatlarla sunmaktadır.

Mahmood Coffee, boykot dışıdır. Tamamen yerli sermaye ile faaliyet gösteren marka, İsrail bağlantısı bulunmayan Türk menşeli bir markadır ve Türkiye'nin yerli kahve üreticileri arasında önemli bir konuma sahiptir.`,
      country: "Türkiye",
      website: "https://www.mahmoodcoffee.com/tr/ana-sayfa",
      img: "/mahmood.png",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Moliendo",
      slug: "moliendo",
      foundedYear: 2015,
      founder: "Kahvesan Gıda Sanayi ve Ticaret A.Ş.",
      owner: "Kahvesan Gıda Sanayi ve Ticaret A.Ş.",
      description: `Moliendo Finest Coffee, 2015 yılında kurulan Kahvesan Gıda Sanayi ve Ticaret A.Ş. bünyesinde üretilen ve Türkiye'nin önde gelen yerli kahve markalarından biridir. Marka, "Moliendo" adını İspanyolca'da "öğütme" anlamına gelen kelimeden almıştır ve bu isim, markanın kahve işleme konusundaki uzmanlığını yansıtmaktadır.

Moliendo, yeşil çekirdekten başlayarak tüm kahve işleme süreçlerini kendi tesislerinde gerçekleştirmektedir. Marka, kavrulmuş çekirdek kahveden öğütülmüş kahveye, filtre kahveden Türk kahvesine kadar geniş bir ürün yelpazesi sunmaktadır. Her ürün, özenle seçilmiş kahve çekirdeklerinden üretilmekte ve kalite standartlarına uygun olarak hazırlanmaktadır.

Marka, özellikle specialty coffee (özel kahve) segmentinde faaliyet göstermektedir. Moliendo, farklı bölgelerden gelen özel kahve çekirdeklerini kullanarak, çeşitli kavurma profilleri ve harmanlar sunmaktadır. Bu yaklaşım, kahve tutkunlarına farklı lezzet deneyimleri yaşama imkanı sağlamaktadır.

Moliendo Finest Coffee, Türkiye pazarında giderek büyüyen bir marka haline gelmiştir. Marka, hem perakende satış noktalarında hem de online platformlarda müşterilerine ulaşmaktadır. Özellikle kaliteli kahve arayan tüketiciler arasında popülerlik kazanmaktadır.

Marka, sürdürülebilir kahve üretimi konusunda da hassasiyet göstermektedir. Moliendo, etik ticaret prensiplerine uygun olarak çalışmakta ve kahve üreticileriyle adil ticaret ilişkileri kurmaya özen göstermektedir.

Moliendo Finest Coffee, boykot dışıdır. Tamamen yerli sermaye ile faaliyet gösteren marka, Türkiye'nin yerli kahve üreticileri arasında yer almaktadır ve İsrail bağlantısı bulunmamaktadır.`,
      country: "Türkiye",
      website: "https://www.moliendocoffee.com/",
      img: "/moliendo.png",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Obsesso",
      slug: "obsesso",
      foundedYear: 2015,
      founder: "DİMES Gıda Sanayi ve Ticaret A.Ş.",
      owner: "DİMES Gıda Sanayi ve Ticaret A.Ş.",
      description: `Obsesso, DİMES Gıda Sanayi ve Ticaret A.Ş. güvencesiyle üretilen ve Türkiye'nin önde gelen soğuk kahve markalarından biridir. Marka, özellikle tenekede soğuk kahve segmentinde uzmanlaşmış ve bu alanda önemli bir konuma sahiptir.

Obsesso ürünleri, DİMES İzmir fabrikasında üretilmektedir. Bu fabrika, Türkiye'nin tenekede soğuk kahve üretim kapasitesi en yüksek tesislerinden biridir ve son teknoloji üretim ekipmanlarıyla donatılmıştır. Fabrika, modern üretim teknikleri ve sıkı kalite kontrol süreçleriyle çalışmaktadır.

Marka, uzman üretim ve kalite mühendisleri gözetiminde hazırlanan ürünler sunmaktadır. Obsesso, soğuk kahve kategorisinde çeşitli ürünler üretmekte ve tüketicilere pratik ve lezzetli soğuk kahve seçenekleri sunmaktadır. Ürünler, teneke ambalajlarda sunulmakta ve uzun raf ömrü ile tazelik garantisi sağlamaktadır.

Obsesso, yerli bir marka olarak Türkiye pazarında faaliyet göstermektedir. Marka, özellikle hazır soğuk kahve arayan tüketicilere hitap etmekte ve modern yaşam tarzına uygun pratik çözümler sunmaktadır. Soğuk kahve kategorisinde giderek büyüyen bir pazar payına sahiptir.

DİMES'in güçlü altyapısı ve üretim kapasitesi sayesinde Obsesso, kaliteli ve güvenilir ürünler sunmaktadır. Marka, gıda güvenliği standartlarına uygun olarak üretim yapmakta ve tüketici sağlığını ön planda tutmaktadır.

Obsesso, boykot dışıdır. Tamamen yerli sermaye ile faaliyet gösteren marka, Türkiye'nin yerli kahve üreticileri arasında yer almaktadır ve İsrail bağlantısı bulunmamaktadır.`,
      country: "Türkiye",
      website: "https://www.obsesso.com.tr/",
      img: "/obsesso.png",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Gold Cup",
      slug: "gold-cup",
      foundedYear: null,
      founder: "Erfood Gıda Sanayi ve Tic. Ltd. Şti.",
      owner: "Erfood Gıda Sanayi ve Tic. Ltd. Şti.",
      description: `Gold Cup, Türkiye'de faaliyet gösteren yerli bir kahve markasıdır ve tüketicilere çeşitli kahve seçenekleri sunmaktadır. Marka, yerli üretimiyle bilinmekte ve Türkiye pazarında aktif olarak faaliyet göstermektedir.

Gold Cup, farklı kahve türleri ve harmanları ile tüketicilere geniş bir ürün yelpazesi sunmaktadır. Marka, hem geleneksel Türk kahvesi hem de modern kahve çeşitleri üretmekte ve farklı zevklere hitap eden ürünler geliştirmektedir.

Marka, kaliteli ve uygun fiyatlı kahve ürünleri sunmayı hedeflemektedir. Gold Cup, geniş bir müşteri kitlesine hitap etmekte ve erişilebilir fiyatlarla kaliteli kahve deneyimi sunmaktadır. Ürünler, perakende satış noktalarında ve online platformlarda tüketicilere ulaşmaktadır.

Gold Cup markası hakkında boykot listelerine alınmasını gerektirecek olumsuz bir açıklama ya da destek bulunmamaktadır. Yerli üretimiyle bilinen marka, Türkiye'nin yerli kahve üreticileri arasında yer almaktadır ve İsrail bağlantısı bulunmamaktadır. Marka, boykot dışıdır ve tüketiciler tarafından güvenle tercih edilebilir.`,
      country: "Türkiye",
      img: "/gold-cup.png",
      website: "https://www.goldcupdrink.com/",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Artukbey",
      slug: "artukbey",
      foundedYear: null,
      founder: "Geleneksel",
      owner: "Geleneksel",
      description: `Artuklu Bey Kahvesi, Mardin'in zengin kültürel mirasından doğan ve yüzyıllardır süregelen geleneksel bir kahve türüdür. Marka, Artuklu Beyliği döneminden gelen köklü bir geçmişe sahiptir ve Mardin'in tarihi kahve kültürünün önemli bir parçasıdır.

Artuklu Bey Kahvesi, Mardin'in tarih kokan sokaklarında hâlâ en çok tercih edilen kahvelerden biri olmayı sürdürmektedir. Bu geleneksel kahve, özel harman ve kavurma teknikleriyle hazırlanmakta ve Mardin'in kendine özgü lezzet profilini yansıtmaktadır. Kahve, bölgenin kültürel kimliğinin önemli bir parçasıdır ve nesiller boyunca aktarılan bir gelenektir.

Marka, geleneksel üretim yöntemlerini modern kalite standartlarıyla harmanlamaktadır. Artuklu Bey Kahvesi, özenle seçilmiş kahve çekirdeklerinden üretilmekte ve geleneksel kavurma teknikleri kullanılarak hazırlanmaktadır. Bu yaklaşım, hem geleneksel lezzeti korumakta hem de modern kalite standartlarını sağlamaktadır.

Artuklu Bey Kahvesi, sadece Mardin'de değil, Türkiye genelinde de tanınmaktadır. Marka, geleneksel Türk kahve kültürünü yaşatmakta ve bu kültürel mirası gelecek nesillere aktarmayı hedeflemektedir. Özellikle geleneksel kahve sevenler ve kültürel değerlere önem veren tüketiciler arasında popülerdir.

Marka, boykot dışıdır. Tamamen yerli ve geleneksel bir ürün olan Artuklu Bey Kahvesi, Türkiye'nin kültürel mirasının önemli bir parçasıdır ve İsrail bağlantısı bulunmamaktadır.`,
      country: "Türkiye",
      website: "https://www.artukbey.com/",
      img: "/artukbey.webp",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Espressolab",
      slug: "espressolab",
      foundedYear: 2014,
      founder: "Esat Kocadağ",
      owner: "Kocadağ Ailesi Şirketler Grubu",
      description: `Espressolab, 2014 yılında Esat Kocadağ tarafından İstanbul Bilgi Üniversitesi'nde kurulan ve Türkiye'nin önde gelen yerli ikinci dalga kahve zincirlerinden biridir. Marka, specialty coffee (özel kahve) kültürünü Türkiye'ye getiren öncü markalardan biri olarak kabul edilmektedir.

Espressolab, Sütis ile birlikte Kocadağ Ailesi Şirketler Grubu'na aittir. Bu grup, Türkiye'nin önde gelen yerli şirketlerinden biridir ve Espressolab'ın büyümesine önemli destek sağlamaktadır. Marka, bu güçlü altyapı sayesinde hızlı bir büyüme kaydetmiştir.

Marka, ikinci dalga kahve hareketinin Türkiye'deki temsilcilerinden biridir. Espressolab, özenle seçilmiş kahve çekirdeklerini kullanmakta, farklı kavurma profilleri sunmakta ve barista eğitimine önem vermektedir. Her şube, eğitimli baristalar tarafından yönetilmekte ve müşterilere kaliteli bir kahve deneyimi sunulmaktadır.

Espressolab, geniş bir menü sunmaktadır. Marka, espresso bazlı içeceklerden filtre kahvelere, soğuk kahve çeşitlerinden özel harmanlara kadar geniş bir yelpazede ürün sunmaktadır. Ayrıca, pastane ürünleri ve hafif yemek seçenekleriyle de müşterilerine kapsamlı bir deneyim sağlamaktadır.

Marka, özellikle genç ve şehirli tüketicilere hitap etmektedir. Espressolab şubeleri, modern ve şık tasarımlarıyla dikkat çekmekte ve müşterilere rahat bir ortam sunmaktadır. Marka, sosyal medya ve dijital pazarlama stratejileriyle de güçlü bir varlık göstermektedir.

Espressolab, boykot dışıdır. Tamamen yerli sermaye ile faaliyet gösteren marka, Türkiye'nin yerli kahve zincirleri arasında önemli bir konuma sahiptir ve İsrail bağlantısı bulunmamaktadır.`,
      country: "Türkiye",
      website: "https://espressolab.com/tr",
      img: "/espresso-lab.png",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Osso",
      slug: "osso",
      foundedYear: null,
      founder: "Natural Gıda A.Ş.",
      owner: "Natural Gıda A.Ş.",
      description: `Osso, Natural Gıda A.Ş.'ye ait olan ve Türkiye'de faaliyet gösteren yerli bir kahve markasıdır. Marka, kahve kategorisinde geniş bir ürün yelpazesi sunmakta ve tüketicilere çeşitli kahve seçenekleri sağlamaktadır.

Natural Gıda A.Ş., Türkiye'nin önde gelen gıda üreticilerinden biridir ve Osso markası, şirketin kahve kategorisindeki önemli markalarından biridir. Marka, kaliteli ve güvenilir ürünler sunmayı hedeflemekte ve tüketici memnuniyetini ön planda tutmaktadır.

Osso, farklı kahve türleri ve harmanları ile geniş bir müşteri kitlesine hitap etmektedir. Marka, hem geleneksel Türk kahvesi hem de modern kahve çeşitleri üretmekte ve farklı zevklere uygun ürünler geliştirmektedir. Ürünler, perakende satış noktalarında ve online platformlarda tüketicilere ulaşmaktadır.

Marka, uygun fiyatlı ve kaliteli kahve ürünleri sunmayı hedeflemektedir. Osso, geniş bir müşteri kitlesine hitap etmekte ve erişilebilir fiyatlarla kaliteli kahve deneyimi sunmaktadır. Marka, özellikle fiyat-performans dengesi arayan tüketiciler arasında popülerdir.

Osso, kahve kategorisinde boykot listelerinde yer almayan yerli markalar arasındadır. Tamamen yerli sermaye ile faaliyet gösteren marka, Türkiye'nin yerli kahve üreticileri arasında yer almaktadır ve İsrail bağlantısı bulunmamaktadır. Marka, boykot dışıdır ve tüketiciler tarafından güvenle tercih edilebilir.`,
      country: "Türkiye",
      img: "/osso.png",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Misswell",
      slug: "misswell",
      foundedYear: null,
      founder: "Abdullah Eroğlu",
      owner: "Abdullah Eroğlu",
      description: `Misswell, Türkiye'nin yeni nesil dinamik girişim ve networking platformu olarak faaliyet göstermektedir. Platform, yerli üretimlere odaklanmakta ve yerel girişimcileri desteklemeyi hedeflemektedir. Misswell, sadece bir kahve markası değil, aynı zamanda bir girişimcilik ekosistemi olarak konumlandırılmıştır.

Platform, kullanıcılarının ihtiyaçlarına yanıt veren ürünler sunmakta ve başarı hikâyeleriyle dikkat çekmektedir. Misswell, yerel girişimcilerin ürünlerini tanıtma ve pazarlama imkanı sağlamakta ve bu sayede yerli üretimin desteklenmesine katkıda bulunmaktadır.

Misswell, kahve kategorisinde de faaliyet göstermektedir. Platform, yerli kahve üreticilerinin ürünlerini tanıtmakta ve tüketicilere ulaştırmaktadır. Bu yaklaşım, hem yerel girişimcilere destek sağlamakta hem de tüketicilere kaliteli yerli ürünler sunmaktadır.

Marka, özellikle genç ve girişimci ruhlu tüketicilere hitap etmektedir. Misswell, modern teknolojiler ve dijital platformlar kullanarak müşterilerine ulaşmakta ve yenilikçi bir yaklaşım sergilemektedir. Platform, sosyal medya ve dijital pazarlama stratejileriyle güçlü bir varlık göstermektedir.

Misswell, boykot dışıdır. Yerli üretime odaklanan platform, Türkiye'nin yerli girişimcilerini desteklemekte ve İsrail bağlantısı bulunmamaktadır. Marka, yerli üretimin gelişmesine katkıda bulunmakta ve Türkiye'nin ekonomik bağımsızlığına destek sağlamaktadır.`,
      country: "Türkiye",
      img: "/misswell.png",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Kurukahveci Mehmet Efendi Mahdumları",
      slug: "kurukahveci-mehmet-efendi",
      foundedYear: 1871,
      founder: "Mehmet Efendi",
      owner: "Mehmet Efendi Mahdumları",
      description: `Kurukahveci Mehmet Efendi Mahdumları, 1871 yılında İstanbul'un Fatih ilçesinde Mehmet Efendi tarafından kurulan ve Türkiye'nin en köklü kahve markalarından biridir. Marka, 150 yılı aşkın tarihiyle Türk kahve kültürünün önemli bir parçasıdır ve nesiller boyunca aktarılan bir gelenektir.

Mehmet Efendi, Türkiye'de ilk kez öğütülmüş kahve üretimini başlatan kişi olarak kabul edilmektedir. O dönemde kahve, çekirdek halinde satılmakta ve evlerde dibeklerde öğütülmekteydi. Mehmet Efendi, kahveyi öğütülmüş halde satarak Türk kahve kültüründe bir devrim yaratmıştır. Bu yenilik, Türk kahvesinin yaygınlaşmasına ve popülerleşmesine önemli katkı sağlamıştır.

Kurukahveci Mehmet Efendi Mahdumları, bugün hala aynı aile tarafından yönetilmektedir. Marka, geleneksel üretim yöntemlerini modern kalite standartlarıyla harmanlamakta ve her nesilde kaliteyi artırmaktadır. Üretim, İstanbul'daki tarihi tesislerde gerçekleştirilmekte ve özenle seçilmiş kahve çekirdekleri kullanılmaktadır.

Marka, sadece Türkiye'de değil, dünya çapında da tanınmaktadır. Kurukahveci Mehmet Efendi, ürünlerini 50'den fazla ülkeye ihraç etmekte ve Türk kahvesini dünya çapında tanıtmaktadır. Bu uluslararası başarı, markanın kalitesinin ve geleneksel değerlerinin bir göstergesidir.

Kurukahveci Mehmet Efendi Mahdumları, Türk kahvesini gelecek nesillerle buluşturmayı amaçlamaktadır. Marka, geleneksel lezzeti korurken modern tüketici ihtiyaçlarına da cevap vermektedir. Farklı ambalaj seçenekleri, çeşitli harmanlar ve özel serilerle geniş bir müşteri kitlesine hitap etmektedir.

Marka, boykot dışıdır. Tamamen yerli sermaye ile faaliyet gösteren ve Türkiye'nin kültürel mirasının önemli bir parçası olan Kurukahveci Mehmet Efendi, İsrail bağlantısı bulunmayan köklü bir Türk markasıdır.`,
      country: "Türkiye",
      website: "https://www.mehmetefendi.com/",
      img: "/Kurukahveci_Mehmet_Efendi.png",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
      ],
    },
    {
      name: "Gloria Jean's",
      slug: "gloria-jeans",
      foundedYear: 1979,
      founder: "Ed ve Gloria Jean Kvetko",
      owner: "Türkiye: Mehmet Dinçerler",
      description: `Gloria Jean's Coffees, 1979 yılında Ed ve Gloria Jean Kvetko tarafından Amerika Birleşik Devletleri'nde kurulan ve dünya çapında faaliyet gösteren bir kahve zinciridir. Marka, başlangıçta küçük bir kahve dükkanı olarak faaliyet gösterirken, hızlı bir büyüme kaydederek global bir kahve zinciri haline gelmiştir.

Gloria Jean's, özellikle specialty coffee (özel kahve) kategorisinde faaliyet göstermektedir. Marka, özenle seçilmiş kahve çekirdeklerini kullanmakta, farklı kavurma profilleri sunmakta ve geniş bir menü ile müşterilerine hizmet vermektedir. Zincir, espresso bazlı içeceklerden filtre kahvelere, soğuk kahve çeşitlerinden özel harmanlara kadar geniş bir yelpazede ürün sunmaktadır.

Türkiye'de Gloria Jean's operasyonları, Mehmet Dinçerler tarafından yürütülmektedir. Türkiye pazarında aktif olarak faaliyet gösteren marka, yerel ihtiyaçlara uyum sağlamakta ve Türk kahve kültürüne saygı göstermektedir. Türkiye'deki şubeler, modern ve şık tasarımlarıyla dikkat çekmekte ve müşterilere rahat bir ortam sunmaktadır.

Gloria Jean's, dünya çapında binlerce şubeye sahiptir ve farklı ülkelerde faaliyet göstermektedir. Marka, her ülkede yerel pazara uyum sağlamakta ve kültürel farklılıklara saygı göstermektedir. Bu yaklaşım, markanın global başarısının önemli bir parçasıdır.

Marka, sosyal sorumluluk projelerine de önem vermektedir. Gloria Jean's, kahve üreticilerini desteklemekte ve sürdürülebilir kahve üretimini teşvik etmektedir. Ayrıca, yerel topluluklara katkıda bulunmak için çeşitli projeler yürütmektedir.

Gloria Jean's Coffees, boykot dışıdır. Markanın İsrail menşeli olduğuna dair resmi bir bilgi bulunmamaktadır ve Türkiye'deki operasyonları yerel bir yatırımcı tarafından yürütülmektedir. Marka, Türkiye pazarında güvenle tercih edilebilir.`,
      country: "Türkiye",
      website: "https://gloriajeans.com.tr/",
      img: "/gloria-jeans.webp",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Caffè Nero",
      slug: "caffe-nero",
      foundedYear: 1997,
      founder: "Gerry Ford",
      owner: "Caffè Nero Group",
      description: `Caffè Nero, 1997 yılında Gerry Ford tarafından Londra'da kurulan ve dünya çapında faaliyet gösteren bir kahve zinciridir. Marka, Avrupa'nın en büyük bağımsız kahve zincirlerinden biridir ve özellikle İtalyan kahve kültürünü modern bir yaklaşımla sunmaktadır.

Caffè Nero, "Siyah Kahve" anlamına gelen İtalyanca ismiyle, İtalyan espresso kültürünü dünya çapında yaymayı hedeflemektedir. Marka, özenle seçilmiş kahve çekirdeklerini kullanmakta, geleneksel İtalyan kavurma tekniklerini uygulamakta ve her fincanda kaliteli bir kahve deneyimi sunmaktadır.

Zincir, dünya çapında binlerce şubeye sahiptir ve özellikle Avrupa, Orta Doğu ve Asya pazarlarında güçlü bir varlık göstermektedir. Caffè Nero şubeleri, İtalyan tarzı dekorasyon ve atmosferiyle dikkat çekmekte ve müşterilere sıcak ve samimi bir ortam sunmaktadır.

Caffè Nero, geniş bir menü sunmaktadır. Marka, espresso bazlı içeceklerden filtre kahvelere, soğuk kahve çeşitlerinden özel harmanlara kadar geniş bir yelpazede ürün sunmaktadır. Ayrıca, pastane ürünleri, sandviçler ve hafif yemek seçenekleriyle de müşterilerine kapsamlı bir deneyim sağlamaktadır.

Marka, kalite ve tutarlılığa büyük önem vermektedir. Caffè Nero, tüm şubelerinde aynı kalite standartlarını uygulamakta ve müşterilere her zaman aynı lezzet garantisini sunmaktadır. Bu yaklaşım, markanın güvenilirliğini ve popülerliğini artırmaktadır.`,
      country: "Birleşik Krallık",
      website: "https://www.caffenero.com/tr",
      img: "/caffe-nero.png",
      isBoycotted: "onerilmiyor",
      boycottReason:
        "Caffè Nero, yabancı ülke menşeli bir marka olduğu için önerilmemektedir. Türk kahve markalarını tercih etmek, yerel ekonomiyi desteklemek ve milli değerleri korumak açısından önemlidir.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Kocatepe",
      slug: "kocatepe",
      foundedYear: 1919,
      founder: "Madam Marysia",
      owner: "Tuncay Ailesi",
      description: `Kocatepe 1949 Kahve Evi, Türkiye'nin ilk kahve zinciri olma özelliğini taşıyan ve köklü bir geçmişe sahip olan önemli bir Türk kahve markasıdır. Marka, 1919 yılında Madam Marysia tarafından Ankara'nın Kocatepe Mahallesi'nde kurulmuş ve o zamandan beri Türk kahve kültürünün önemli bir parçası olmuştur.

Kocatepe markası, 1949 yılında Nurettin Tuncay ile birlikte market raflarında yerini almış ve Türkiye'de paketlenmiş kahve satışının öncülerinden biri olmuştur. Bu dönem, Türk kahve endüstrisinde önemli bir dönüm noktasıdır ve Kocatepe, bu değişimin öncüsü olmuştur.

1996 yılında Haluk Tuncay önderliğinde marka, Türkiye'nin ilk kahve evi konseptlerinden biri olarak yeniden yapılanmıştır. Bu yeniden yapılanma, sadece kahve satışı değil, aynı zamanda kahve içme deneyimi sunan bir konsept yaratmıştır. Kocatepe Kahve Evi, müşterilere sıcak bir ortamda kaliteli kahve deneyimi sunmayı hedeflemektedir.

Kocatepe, geleneksel Türk kahvesi kültürünü modern bir yaklaşımla sunmaktadır. Marka, özenle seçilmiş kahve çekirdeklerini kullanmakta, geleneksel kavurma tekniklerini uygulamakta ve her fincanda otantik bir Türk kahvesi deneyimi sunmaktadır. Ayrıca, modern kahve çeşitleri ve pastane ürünleriyle de müşterilerine geniş bir seçenek sunmaktadır.

Marka, Türkiye genelinde şubeleri bulunan bir zincir haline gelmiştir. Kocatepe Kahve Evi şubeleri, sıcak ve samimi atmosferleriyle dikkat çekmekte ve müşterilere rahat bir ortam sunmaktadır. Her şube, geleneksel Türk kahve kültürünü yaşatmakta ve bu kültürel mirası gelecek nesillere aktarmayı hedeflemektedir.

Kocatepe, boykot dışıdır. Tamamen yerli sermaye ile faaliyet gösteren ve Türkiye'nin kültürel mirasının önemli bir parçası olan marka, İsrail bağlantısı bulunmayan köklü bir Türk markasıdır.`,
      country: "Türkiye",
      website: "https://www.kocatepekahveevi.com.tr/",
      img: "/kocatepe.png",
      isBoycotted: "boykot-degil",
      alternative_products: [
        "espressolab",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Kahve Dünyası",
      slug: "kahve-dunyasi",
      foundedYear: 2004,
      founder: "Altınkılıç Ailesi",
      owner: "Altınmarka Grubu",
      description: `Kahve Dünyası, 2004 yılında Altınkılıç Ailesi tarafından kurulan ve Altınmarka Grubu'na bağlı olan Türkiye'nin önde gelen kahve zincirlerinden biridir. Marka, başlangıçtan itibaren hızlı bir büyüme kaydetmiş ve Türkiye genelinde yüzlerce şubeye ulaşmıştır.

Kahve Dünyası, geniş bir ürün yelpazesi sunmaktadır. Marka, geleneksel Türk kahvesinden espresso bazlı içeceklere, soğuk kahve çeşitlerinden özel harmanlara kadar geniş bir menü ile müşterilerine hizmet vermektedir. Ayrıca, pastane ürünleri, dondurma, çikolata ve diğer tatlı çeşitleriyle de kapsamlı bir deneyim sunmaktadır.

Marka, modern ve şık şube tasarımlarıyla dikkat çekmektedir. Kahve Dünyası şubeleri, sıcak ve samimi atmosferleriyle müşterilere rahat bir ortam sunmakta ve hem bireysel hem de grup kullanımına uygun alanlar sağlamaktadır. Her şube, kaliteli hizmet ve tutarlı lezzet garantisi sunmaktadır.

Kahve Dünyası, özellikle şehirli ve modern tüketicilere hitap etmektedir. Marka, sosyal medya ve dijital pazarlama stratejileriyle güçlü bir varlık göstermekte ve özellikle genç nesil arasında popülerdir. Ayrıca, özel etkinlikler, kahve atölyeleri ve kültürel aktivitelerle de müşterilerine değer katmaktadır.

Ancak, Kahve Dünyası markası, Altınmarka Grubu'na bağlı yerli bir marka olmasına rağmen, İsrail ile ilişkilendirilen Hamursuz Bayramı kutlaması ve İsrail politikalarına dair destek algısı nedeniyle boykot çağrılarıyla karşılaşmaktadır. Bu nedenle, marka boykot listesinde yer almaktadır.`,
      country: "Türkiye",
      website: "https://www.kahvedunyasi.com/",
      img: "/kahve-dunyasi.png",
      isBoycotted: "boykot",
      boycottReason:
        "Kahve Dünyası markası, Altınmarka Grubu'na bağlı yerli bir marka olmasına rağmen, İsrail ile ilişkilendirilen Hamursuz Bayramı kutlaması ve İsrail politikalarına dair destek algısı nedeniyle boykot kapsamına alınmıştır. Altınmarka Grubu'nun İsrail ile olan ilişkileri ve bu kutlamalara verdiği destek, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Kahve Dünyası'nın ürünlerinin satın alınması önerilmemektedir. Kahve Dünyası markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Jacobs",
      slug: "jacobs",
      foundedYear: 1895,
      founder: "Johann Jacobs",
      owner: "Mondelez International",
      description: `Jacobs, 1895 yılında Johann Jacobs tarafından Almanya'nın Bremen kentinde kurulan ve dünyanın en köklü kahve markalarından biridir. Marka, başlangıçta küçük bir kahve dükkanı olarak faaliyet gösterirken, hızlı bir büyüme kaydederek global bir kahve markası haline gelmiştir.

Jacobs, özellikle hazır kahve ve filtre kahve kategorilerinde güçlü bir konuma sahiptir. Marka, çeşitli kahve harmanları, hazır kahve ürünleri ve kapsül kahve seçenekleri sunmaktadır. Jacobs, farklı zevklere hitap eden geniş bir ürün yelpazesi ile dünya çapında milyonlarca tüketiciye ulaşmaktadır.

Marka, 1990 yılında Kraft Foods tarafından satın alınmış, 2012 yılında ise Mondelez International'ın bünyesine katılmıştır. Mondelez International, dünyanın en büyük gıda şirketlerinden biridir ve Jacobs, şirketin önemli kahve markalarından biridir.

Jacobs, özellikle Avrupa pazarında güçlü bir konuma sahiptir. Marka, Almanya, İtalya, Fransa ve diğer Avrupa ülkelerinde en çok satan kahve markalarından biridir. Ayrıca, dünya çapında birçok ülkede de aktif olarak faaliyet göstermektedir.

Marka, kalite ve tutarlılığa büyük önem vermektedir. Jacobs, özenle seçilmiş kahve çekirdeklerini kullanmakta, gelişmiş kavurma teknikleri uygulamakta ve her pakette aynı lezzet garantisini sunmaktadır. Bu yaklaşım, markanın güvenilirliğini ve popülerliğini artırmaktadır.

Ancak, Jacobs markası, Mondelez International çatısı altında faaliyet göstermektedir ve ana şirketin İsrail'deki girişimleri ve ekonomik ilişkileri nedeniyle marka boykot listelerinde yer almaktadır. Mondelez International'ın İsrail'deki yatırımları ve iş ortaklıkları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Jacobs ürünlerinin satın alınması önerilmemektedir.`,
      country: "Almanya",
      website: "https://www.jacobscoffee.com.tr/",
      img: "/jacobs.png",
      isBoycotted: "boykot",
      boycottReason:
        "Jacobs markası, Mondelez International çatısı altında faaliyet gösteren bir markadır. Mondelez International, İsrail'deki yatırımları, iş ortaklıkları ve ekonomik ilişkileri nedeniyle boykot kapsamına alınmıştır. Mondelez International'ın İsrail'deki faaliyetleri ve iş ortaklıkları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Mondelez International'a ait tüm markaların ürünlerinin satın alınması önerilmemektedir. Jacobs markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Starbucks",
      slug: "starbucks",
      foundedYear: 1971,
      founder: "Jerry Baldwin, Zev Siegl, Gordon Bowker",
      owner: "Starbucks Corporation",
      description: `Starbucks, 1971 yılında Jerry Baldwin, Zev Siegl ve Gordon Bowker tarafından Amerika Birleşik Devletleri'nin Seattle kentinde kurulan ve dünyanın en büyük kahve zincirlerinden biridir. Marka, başlangıçta küçük bir kahve dükkanı olarak faaliyet gösterirken, hızlı bir büyüme kaydederek dünya çapında on binlerce şubeye ulaşmıştır.

Starbucks, ikinci dalga kahve hareketinin öncülerinden biridir ve specialty coffee (özel kahve) kültürünü dünya çapında yaygınlaştırmıştır. Marka, özenle seçilmiş kahve çekirdeklerini kullanmakta, farklı kavurma profilleri sunmakta ve geniş bir menü ile müşterilerine hizmet vermektedir. Starbucks, espresso bazlı içeceklerden filtre kahvelere, soğuk kahve çeşitlerinden özel harmanlara kadar geniş bir yelpazede ürün sunmaktadır.

Marka, sadece kahve değil, aynı zamanda bir yaşam tarzı markası olarak konumlandırılmıştır. Starbucks şubeleri, "üçüncü mekan" konseptiyle müşterilere ev ve işyeri dışında rahat bir ortam sunmaktadır. Her şube, modern ve şık tasarımlarıyla dikkat çekmekte ve müşterilere sıcak bir atmosfer sağlamaktadır.

Starbucks, dünya çapında binlerce şubeye sahiptir ve farklı ülkelerde faaliyet göstermektedir. Marka, her ülkede yerel pazara uyum sağlamakta ve kültürel farklılıklara saygı göstermektedir. Türkiye'de de aktif olarak faaliyet gösteren marka, yerel ihtiyaçlara uyum sağlamakta ve Türk kahve kültürüne saygı göstermektedir.

Marka, sosyal sorumluluk projelerine de önem vermektedir. Starbucks, kahve üreticilerini desteklemekte, sürdürülebilir kahve üretimini teşvik etmekte ve çevre dostu uygulamalar geliştirmektedir. Ayrıca, eğitim, sağlık ve toplumsal kalkınma projelerine de katkıda bulunmaktadır.

Ancak, Starbucks markası, küresel operasyonları süresince İsrail'e yönelik destek açıklamaları ve İsrail yanlısı yardımlarla anılmakta, sendikalaşma sürecindeki açıklamaları sebebiyle boykot edilmektedir. Şirketin İsrail'deki faaliyetleri ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Starbucks ürünlerinin satın alınması önerilmemektedir.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.starbucks.com.tr/",
      img: "/starbucks.jpg",
      isBoycotted: "boykot",
      boycottReason:
        "Starbucks markası, küresel operasyonları süresince İsrail'e yönelik destek açıklamaları ve İsrail yanlısı yardımlarla anılmaktadır. Şirketin İsrail'deki faaliyetleri, İsrail'e verdiği destekler ve sendikalaşma sürecindeki açıklamaları nedeniyle boykot kapsamına alınmıştır. Starbucks'ın İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Starbucks'ın ürünlerinin satın alınması önerilmemektedir. Starbucks markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Tchibo",
      slug: "tchibo",
      foundedYear: 1949,
      founder: "Carl Tchilinghiryan ve Max Herz",
      owner: "Tchibo GmbH (Herz Ailesi)",
      description: `Tchibo, 1949 yılında Carl Tchilinghiryan ve Max Herz tarafından Almanya'nın Hamburg kentinde kurulan ve dünyanın en büyük kahve ve genel tüketim ürünleri şirketlerinden biridir. Marka, başlangıçta sadece kahve satışı yaparken, zamanla geniş bir ürün yelpazesi sunan bir perakende zinciri haline gelmiştir.

Tchibo, özellikle kahve kategorisinde güçlü bir konuma sahiptir. Marka, çeşitli kahve harmanları, hazır kahve ürünleri, kapsül kahve seçenekleri ve filtre kahve ürünleri sunmaktadır. Tchibo, özenle seçilmiş kahve çekirdeklerini kullanmakta ve gelişmiş kavurma teknikleri uygulamaktadır.

Marka, sadece kahve değil, aynı zamanda genel tüketim ürünleri de satmaktadır. Tchibo, "Her Hafta Yeni Bir Dünya" sloganıyla haftalık olarak değişen ürün koleksiyonları sunmakta ve müşterilerine çeşitli kategorilerde ürünler sağlamaktadır. Bu yaklaşım, markanın ayırt edici özelliklerinden biridir.

Tchibo, özellikle Almanya ve Avrupa pazarında güçlü bir konuma sahiptir. Marka, Almanya'nın en büyük kahve perakendecilerinden biridir ve binlerce şubeye sahiptir. Ayrıca, dünya çapında birçok ülkede de aktif olarak faaliyet göstermektedir.

Marka, kalite ve tutarlılığa büyük önem vermektedir. Tchibo, tüm ürünlerinde aynı kalite standartlarını uygulamakta ve müşterilere her zaman aynı lezzet garantisini sunmaktadır. Bu yaklaşım, markanın güvenilirliğini ve popülerliğini artırmaktadır.

Ancak, Tchibo markası, Almanya merkezli bir marka olup sahibi Herz ailesinin İsrail'e verdiği destek açıklamaları nedeniyle eleştirilmektedir. İsrail'deki faaliyetleri ve açıklamalarına tepki olarak boykot çağrılarına konu olmaktadır. Herz ailesinin İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Tchibo ürünlerinin satın alınması önerilmemektedir.`,
      country: "Almanya",
      website: "https://www.tchibo.com.tr/",
      img: "/tchibo.png",
      isBoycotted: "boykot",
      boycottReason:
        "Tchibo markası, Almanya merkezli bir marka olup sahibi Herz ailesinin İsrail'e verdiği destek açıklamaları ve faaliyetleri nedeniyle boykot kapsamına alınmıştır. Herz ailesinin İsrail'deki faaliyetleri ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Tchibo'nun ürünlerinin satın alınması önerilmemektedir. Tchibo markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Cafe Crown",
      slug: "cafe-crown",
      foundedYear: null,
      founder: "Yıldız Holding",
      owner: "Yıldız Holding",
      description: `Cafe Crown, Yıldız Holding bünyesinde faaliyet gösteren ve Türkiye'de önemli bir konuma sahip olan kahve zinciridir. Marka, Yıldız Holding'in güçlü altyapısı ve deneyimi sayesinde hızlı bir büyüme kaydetmiş ve Türkiye genelinde şubeler açmıştır.

Cafe Crown, geniş bir ürün yelpazesi sunmaktadır. Marka, geleneksel Türk kahvesinden espresso bazlı içeceklere, soğuk kahve çeşitlerinden özel harmanlara kadar geniş bir menü ile müşterilerine hizmet vermektedir. Ayrıca, pastane ürünleri, sandviçler ve hafif yemek seçenekleriyle de kapsamlı bir deneyim sunmaktadır.

Marka, modern ve şık şube tasarımlarıyla dikkat çekmektedir. Cafe Crown şubeleri, sıcak ve samimi atmosferleriyle müşterilere rahat bir ortam sunmakta ve hem bireysel hem de grup kullanımına uygun alanlar sağlamaktadır. Her şube, kaliteli hizmet ve tutarlı lezzet garantisi sunmaktadır.

Cafe Crown, özellikle şehirli ve modern tüketicilere hitap etmektedir. Marka, sosyal medya ve dijital pazarlama stratejileriyle güçlü bir varlık göstermekte ve özellikle genç nesil arasında popülerdir. Ayrıca, özel etkinlikler ve kültürel aktivitelerle de müşterilerine değer katmaktadır.

Yıldız Holding, Türkiye'nin en büyük holdinglerinden biridir ve birçok sektörde faaliyet göstermektedir. Cafe Crown, bu güçlü altyapı sayesinde kaliteli ürünler ve hizmetler sunmaktadır. Ancak, Cafe Crown markası, Yıldız Holding bünyesinde yer almasına rağmen İsrail'deki yatırımlarla ilişkilendirildiği gerekçesiyle boykot edilmektedir. Yıldız Holding'in İsrail'deki yatırımları ve iş ortaklıkları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Cafe Crown ürünlerinin satın alınması önerilmemektedir.`,
      country: "Türkiye",
      website: "https://www.cafecrown.com/",
      img: "/cafe-crown.webp",
      isBoycotted: "boykot",
      boycottReason:
        "Cafe Crown markası, Yıldız Holding bünyesinde faaliyet gösteren bir markadır. Yıldız Holding'in İsrail'deki yatırımları ve iş ortaklıkları nedeniyle, Yıldız Holding'e bağlı tüm şirketler ve markalar boykot kapsamına alınmıştır. Yıldız Holding'in İsrail'deki yatırımları ve iş ortaklıkları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Yıldız Holding'e ait tüm markaların ürünlerinin satın alınması önerilmemektedir. Cafe Crown markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Nespresso",
      slug: "nespresso",
      foundedYear: 1986,
      founder: "Nestle",
      owner: "Nestle",
      description: `Nespresso, 1986 yılında Nestle grubu tarafından kurulan ve dünyanın en prestijli kapsül kahve markalarından biridir. Marka, özellikle premium segmentte faaliyet göstermekte ve yüksek kaliteli kapsül kahve sistemleri sunmaktadır.

Nespresso, kapsül kahve kategorisinde öncü konumdadır. Marka, özenle seçilmiş kahve çekirdeklerini kullanmakta, gelişmiş kavurma teknikleri uygulamakta ve her kapsülde tutarlı bir lezzet garantisi sunmaktadır. Nespresso, çeşitli kavurma profilleri ve harmanlar sunmakta ve farklı zevklere hitap eden geniş bir ürün yelpazesi sunmaktadır.

Marka, sadece kapsül kahve değil, aynı zamanda özel kahve makineleri de üretmektedir. Nespresso makineleri, modern tasarımları ve kullanıcı dostu özellikleriyle dikkat çekmektedir. Her makine, mükemmel bir espresso deneyimi sunmak için özel olarak tasarlanmıştır.

Nespresso, premium bir marka olarak konumlandırılmıştır. Marka, lüks ambalajlar, özel koleksiyonlar ve sınırlı üretim serileriyle dikkat çekmektedir. Nespresso, sadece bir kahve markası değil, aynı zamanda bir yaşam tarzı markası olarak da tanımlanmaktadır.

Marka, sürdürülebilirlik konusunda da önemli adımlar atmaktadır. Nespresso, kullanılmış kapsülleri geri dönüştürmekte, sürdürülebilir kahve üretimini teşvik etmekte ve çevre dostu uygulamalar geliştirmektedir. Ayrıca, kahve üreticilerini desteklemek için çeşitli projeler yürütmektedir.

Nespresso, dünya çapında milyonlarca tüketiciye ulaşmaktadır. Marka, özellikle Avrupa, Kuzey Amerika ve Asya pazarlarında güçlü bir konuma sahiptir. Türkiye'de de aktif olarak faaliyet gösteren marka, premium kahve arayan tüketicilere hitap etmektedir.

Ancak, Nespresso markası, Nestle grubuna aittir ve Nestle'nin İsrail'deki Ar-Ge merkezleri ve iş birliği yaptığı yatırımlar nedeniyle marka boykot çağrılarında anılmaktadır. Nestle'nin İsrail'deki yatırımları ve iş ortaklıkları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Nespresso ürünlerinin satın alınması önerilmemektedir.`,
      country: "İsviçre",
      isBoycotted: "boykot",
      website: "https://www.nespresso.com/tr/tr",
      img: "/nespresso.png",
      boycottReason:
        "Nespresso markası, Nestle grubuna ait bir markadır. Nestle'nin İsrail'deki Ar-Ge merkezleri, yatırımları ve iş birlikleri nedeniyle, Nestle bünyesindeki tüm markalar boykot kapsamına alınmıştır. Nestle'nin İsrail'deki yatırımları ve iş ortaklıkları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Nestle'ye ait tüm markaların ürünlerinin satın alınması önerilmemektedir. Nespresso markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Nescafé",
      slug: "nescafe",
      foundedYear: 1938,
      founder: "Nestle (Max Morgenthaler)",
      owner: "Nestle",
      description: `Nescafé, 1938 yılında Nestle tarafından İsviçre'de geliştirilen ve dünyanın en çok satan hazır kahve markalarından biridir. Marka, Max Morgenthaler liderliğindeki bir ekip tarafından geliştirilmiş ve ilk kez 1938 yılında piyasaya sürülmüştür. Nescafé, hazır kahve kategorisinin öncülerinden biri olarak kabul edilmektedir.

Nescafé, özellikle hazır kahve kategorisinde güçlü bir konuma sahiptir. Marka, çeşitli hazır kahve ürünleri, filtre kahve seçenekleri, kapsül kahve ürünleri ve özel harmanlar sunmaktadır. Nescafé, farklı zevklere hitap eden geniş bir ürün yelpazesi ile dünya çapında milyonlarca tüketiciye ulaşmaktadır.

Marka, özellikle pratiklik ve kolaylık açısından öne çıkmaktadır. Nescafé, sıcak su ile karıştırıldığında anında hazır olan kahve ürünleri sunmakta ve tüketicilere pratik bir kahve deneyimi sağlamaktadır. Bu yaklaşım, özellikle hızlı yaşam tarzına sahip tüketiciler arasında popülerdir.

Nescafé, dünya çapında en çok satan kahve markalarından biridir. Marka, özellikle Avrupa, Asya, Latin Amerika ve Afrika pazarlarında güçlü bir konuma sahiptir. Türkiye'de de aktif olarak faaliyet gösteren marka, geniş bir müşteri kitlesine hitap etmektedir.

Marka, kalite ve tutarlılığa büyük önem vermektedir. Nescafé, özenle seçilmiş kahve çekirdeklerini kullanmakta, gelişmiş işleme teknikleri uygulamakta ve her pakette aynı lezzet garantisini sunmaktadır. Bu yaklaşım, markanın güvenilirliğini ve popülerliğini artırmaktadır.

Nescafé, sadece hazır kahve değil, aynı zamanda çeşitli kahve kategorilerinde de faaliyet göstermektedir. Marka, filtre kahve, kapsül kahve ve özel harmanlar sunmakta ve farklı kullanım senaryolarına uygun ürünler geliştirmektedir.

Ancak, Nescafé markası, Nestle çatısı altında faaliyet gösteren global bir kahve markasıdır ve Nestle'nin İsrail'deki yatırımları ve iş birlikleri nedeniyle marka boykot listelerinde yer almaktadır. Nestle'nin İsrail'deki yatırımları ve iş ortaklıkları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Nescafé ürünlerinin satın alınması önerilmemektedir.`,
      country: "İsviçre",
      website: "https://www.nescafe.com/tr",
      img: "/nescafe.png",
      isBoycotted: "boykot",
      boycottReason:
        "Nescafé markası, Nestle çatısı altında faaliyet gösteren global bir kahve markasıdır. Nestle'nin İsrail'deki yatırımları ve iş birlikleri nedeniyle, Nestle bünyesindeki tüm markalar boykot kapsamına alınmıştır. Nestle'nin İsrail'deki yatırımları ve iş ortaklıkları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Nestle'ye ait tüm markaların ürünlerinin satın alınması önerilmemektedir. Nescafé markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Dolce Gusto",
      slug: "dolce-gusto",
      foundedYear: 2006,
      founder: "Nestle",
      owner: "Nestle",
      description: `Dolce Gusto, 2006 yılında Nestle tarafından geliştirilen ve dünya çapında faaliyet gösteren bir kapsül kahve markasıdır. Marka, özellikle çeşitlilik ve esneklik açısından öne çıkmakta ve sadece kahve değil, aynı zamanda çay, sıcak çikolata ve diğer sıcak içecek seçenekleri de sunmaktadır.

Dolce Gusto, kapsül kahve kategorisinde önemli bir konuma sahiptir. Marka, özenle seçilmiş kahve çekirdeklerini kullanmakta, gelişmiş kavurma teknikleri uygulamakta ve her kapsülde tutarlı bir lezzet garantisi sunmaktadır. Dolce Gusto, çeşitli kavurma profilleri ve harmanlar sunmakta ve farklı zevklere hitap eden geniş bir ürün yelpazesi sunmaktadır.

Markanın en önemli özelliklerinden biri, sadece kahve değil, aynı zamanda çeşitli sıcak içecek seçenekleri sunmasıdır. Dolce Gusto, espresso, cappuccino, latte, çay, sıcak çikolata ve diğer özel içecekler için kapsüller sunmaktadır. Bu yaklaşım, tüketicilere tek bir makine ile geniş bir içecek yelpazesi sunmaktadır.

Dolce Gusto makineleri, modern tasarımları ve kullanıcı dostu özellikleriyle dikkat çekmektedir. Her makine, mükemmel bir içecek deneyimi sunmak için özel olarak tasarlanmıştır. Makineler, kolay kullanım, hızlı hazırlama ve temizlik kolaylığı gibi özelliklerle donatılmıştır.

Marka, özellikle genç ve modern tüketicilere hitap etmektedir. Dolce Gusto, renkli ve şık ambalajları, çeşitli lezzet seçenekleri ve uygun fiyatlarıyla dikkat çekmektedir. Marka, sosyal medya ve dijital pazarlama stratejileriyle güçlü bir varlık göstermektedir.

Dolce Gusto, dünya çapında milyonlarca tüketiciye ulaşmaktadır. Marka, özellikle Avrupa, Asya ve Latin Amerika pazarlarında güçlü bir konuma sahiptir. Türkiye'de de aktif olarak faaliyet gösteren marka, geniş bir müşteri kitlesine hitap etmektedir.

Ancak, Dolce Gusto markası, Nestle çatısı altında üretilen kapsül kahve markasıdır ve ana şirketin İsrail'deki yatırımları ve iş birlikleri sebebiyle boykot edilmektedir. Nestle'nin İsrail'deki yatırımları ve iş ortaklıkları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Dolce Gusto ürünlerinin satın alınması önerilmemektedir.`,
      country: "İsviçre",
      img: "/dolce_gusto.png",
      isBoycotted: "boykot",
      boycottReason:
        "Dolce Gusto markası, Nestle çatısı altında üretilen bir kapsül kahve markasıdır. Nestle'nin İsrail'deki yatırımları ve iş birlikleri nedeniyle, Nestle bünyesindeki tüm markalar boykot kapsamına alınmıştır. Nestle'nin İsrail'deki yatırımları ve iş ortaklıkları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Nestle'ye ait tüm markaların ürünlerinin satın alınması önerilmemektedir. Dolce Gusto markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Costa Coffee",
      slug: "costa-coffee",
      foundedYear: 1971,
      founder: "Sergio Costa ve Bruno Costa",
      owner: "Coca-Cola Company",
      description: `Costa Coffee, 1971 yılında Sergio Costa ve Bruno Costa kardeşler tarafından İngiltere'de kurulan ve dünyanın en büyük kahve zincirlerinden biridir. Marka, başlangıçta küçük bir aile işletmesi olarak faaliyet gösterirken, hızlı bir büyüme kaydederek dünya çapında binlerce şubeye ulaşmıştır.

Costa Coffee, özellikle İtalyan espresso kültürünü İngiltere'ye getiren öncü markalardan biridir. Marka, özenle seçilmiş kahve çekirdeklerini kullanmakta, geleneksel İtalyan kavurma tekniklerini uygulamakta ve her fincanda kaliteli bir kahve deneyimi sunmaktadır. Costa Coffee, espresso bazlı içeceklerden filtre kahvelere, soğuk kahve çeşitlerinden özel harmanlara kadar geniş bir yelpazede ürün sunmaktadır.

Marka, 2019 yılında Coca-Cola Company tarafından satın alınmıştır. Bu satın alma, Costa Coffee'nin global genişlemesini hızlandırmış ve markanın dünya çapındaki varlığını güçlendirmiştir. Coca-Cola'nın güçlü altyapısı ve pazarlama gücü sayesinde Costa Coffee, yeni pazarlara açılmış ve büyümesini sürdürmüştür.

Costa Coffee, dünya çapında binlerce şubeye sahiptir ve özellikle İngiltere, Avrupa, Asya ve Orta Doğu pazarlarında güçlü bir varlık göstermektedir. Marka, her ülkede yerel pazara uyum sağlamakta ve kültürel farklılıklara saygı göstermektedir. Türkiye'de de aktif olarak faaliyet gösteren marka, yerel ihtiyaçlara uyum sağlamaktadır.

Costa Coffee şubeleri, modern ve şık tasarımlarıyla dikkat çekmektedir. Her şube, sıcak ve samimi atmosferiyle müşterilere rahat bir ortam sunmakta ve hem bireysel hem de grup kullanımına uygun alanlar sağlamaktadır. Ayrıca, pastane ürünleri, sandviçler ve hafif yemek seçenekleriyle de kapsamlı bir deneyim sunmaktadır.

Marka, kalite ve tutarlılığa büyük önem vermektedir. Costa Coffee, tüm şubelerinde aynı kalite standartlarını uygulamakta ve müşterilere her zaman aynı lezzet garantisini sunmaktadır. Bu yaklaşım, markanın güvenilirliğini ve popülerliğini artırmaktadır.

Ancak, Costa Coffee markası, Coca-Cola Company bünyesinde faaliyet göstermektedir ve Coca-Cola'nın İsrail'deki yatırımları ve askeri birliklere sağladığı destek iddiaları nedeniyle marka boykot çağrılarıyla karşılaşmaktadır. Coca-Cola'nın İsrail'deki faaliyetleri ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Costa Coffee ürünlerinin satın alınması önerilmemektedir.`,
      country: "Birleşik Krallık",
      website: "https://www.costa.co.uk/",
      img: "/costa-coffee.jpg",
      isBoycotted: "boykot",
      boycottReason:
        "Costa Coffee markası, Coca-Cola Company bünyesinde faaliyet gösteren bir markadır. Coca-Cola'nın İsrail'deki yatırımları, askeri birliklere sağladığı destek iddiaları ve İsrail'e verdiği destekler nedeniyle, Coca-Cola bünyesindeki tüm markalar boykot kapsamına alınmıştır. Coca-Cola'nın İsrail'deki faaliyetleri ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Coca-Cola'ya ait tüm markaların ürünlerinin satın alınması önerilmemektedir. Costa Coffee markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Caribou Coffee",
      slug: "caribou-coffee",
      foundedYear: 1992,
      founder: "John Puckett",
      owner: "JAB Holdings",
      description: `Caribou Coffee, 1992 yılında John Puckett tarafından Amerika Birleşik Devletleri'nin Minnesota eyaletinde kurulan ve dünyanın önde gelen kahve zincirlerinden biridir. Marka, başlangıçta küçük bir kahve dükkanı olarak faaliyet gösterirken, hızlı bir büyüme kaydederek dünya çapında binlerce şubeye ulaşmıştır.

Caribou Coffee, özellikle premium kahve deneyimi sunmakta ve specialty coffee (özel kahve) kategorisinde faaliyet göstermektedir. Marka, özenle seçilmiş kahve çekirdeklerini kullanmakta, farklı kavurma profilleri sunmakta ve geniş bir menü ile müşterilerine hizmet vermektedir. Caribou Coffee, espresso bazlı içeceklerden filtre kahvelere, soğuk kahve çeşitlerinden özel harmanlara kadar geniş bir yelpazede ürün sunmaktadır.

Marka, 2012 yılında JAB Holdings tarafından satın alınmıştır. JAB Holdings, dünyanın en büyük kahve şirketlerinden biridir ve Caribou Coffee'nin yanı sıra Peet's Coffee, Keurig Dr Pepper ve diğer önemli kahve markalarına da sahiptir. Bu satın alma, Caribou Coffee'nin global genişlemesini hızlandırmıştır.

Caribou Coffee şubeleri, sıcak ve samimi atmosferleriyle dikkat çekmektedir. Her şube, rahat bir ortam sunmakta ve müşterilere hem bireysel hem de grup kullanımına uygun alanlar sağlamaktadır. Ayrıca, pastane ürünleri, sandviçler ve hafif yemek seçenekleriyle de kapsamlı bir deneyim sunmaktadır.

Marka, özellikle Kuzey Amerika pazarında güçlü bir konuma sahiptir. Caribou Coffee, Amerika Birleşik Devletleri ve Kanada'da binlerce şubeye sahiptir ve bu pazarlarda önemli bir pazar payına sahiptir. Ayrıca, dünya çapında birçok ülkede de aktif olarak faaliyet göstermektedir.

Caribou Coffee, kalite ve tutarlılığa büyük önem vermektedir. Marka, tüm şubelerinde aynı kalite standartlarını uygulamakta ve müşterilere her zaman aynı lezzet garantisini sunmaktadır. Bu yaklaşım, markanın güvenilirliğini ve popülerliğini artırmaktadır.

Ancak, Caribou Coffee markası, JAB Holdings tarafından yönetilen ve İsrail'deki projelere destek verdiği bildirilen bir zincirdir. JAB Holdings'in İsrail'deki faaliyetleri ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu bağlantılar sebebiyle boykot listelerine girmiştir ve Caribou Coffee ürünlerinin satın alınması önerilmemektedir.`,
      country: "Amerika Birleşik Devletleri",
      website: "https://www.cariboucoffee.com.tr/",
      img: "/caribou.png",
      isBoycotted: "boykot",
      boycottReason:
        "Caribou Coffee markası, JAB Holdings tarafından yönetilen bir kahve zinciridir. JAB Holdings'in İsrail'deki projelere verdiği destek iddiaları ve İsrail'e verdiği destekler nedeniyle, JAB Holdings bünyesindeki tüm markalar boykot kapsamına alınmıştır. JAB Holdings'in İsrail'deki faaliyetleri ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, JAB Holdings'e ait tüm markaların ürünlerinin satın alınması önerilmemektedir. Caribou Coffee markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Illy",
      slug: "illy",
      foundedYear: 1933,
      founder: "Francesco Illy",
      owner: "Illycaffè S.p.A.",
      description: `Illy, 1933 yılında Francesco Illy tarafından İtalya'nın Trieste kentinde kurulan ve dünyanın en prestijli kahve markalarından biridir. Marka, özellikle premium espresso kategorisinde faaliyet göstermekte ve yüksek kaliteli kahve çekirdekleri kullanarak üretim yapmaktadır. Illy, İtalyan kahve kültürünün önemli bir temsilcisi olarak kabul edilmektedir.

Illy, özellikle espresso kategorisinde uzmanlaşmıştır ve dünya çapında milyonlarca tüketiciye ulaşmaktadır. Marka, özenle seçilmiş kahve çekirdeklerini kullanmakta, gelişmiş kavurma teknikleri uygulamakta ve her pakette tutarlı bir lezzet garantisi sunmaktadır. Illy, sadece kahve çekirdekleri değil, aynı zamanda hazır kahve ürünleri ve kapsül kahve seçenekleri de sunmaktadır.

Marka, dünya çapında özellikle restoranlar, kafeler ve otellerde yaygın olarak kullanılmaktadır. Illy, premium segmentte faaliyet göstermekte ve yüksek kaliteli kahve deneyimi arayan tüketicilere hitap etmektedir. Marka, özellikle Avrupa, Kuzey Amerika ve Asya pazarlarında güçlü bir konuma sahiptir.

Illy, sürdürülebilir kahve üretimi konusunda da önemli adımlar atmaktadır. Marka, kahve üreticilerini desteklemekte, sürdürülebilir tarım uygulamalarını teşvik etmekte ve çevre dostu ambalajlama çözümleri geliştirmektedir. Ayrıca, kahve kültürünü yaymak için çeşitli eğitim programları ve etkinlikler düzenlemektedir.

Ancak, Illy markası, Coca-Cola ile yaptığı stratejik iş birliği ve ürünlerinin İsrail tesislerinde üretilip pazarlanması nedeniyle eleştirilmektedir. Coca-Cola'nın İsrail'deki yatırımları ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Illy ürünlerinin satın alınması önerilmemektedir.`,
      country: "İtalya",
      website: "https://illy.barista.com.tr/",
      img: "/illy.png",
      isBoycotted: "boykot",
      boycottReason:
        "Illy markası, Coca-Cola ile yaptığı stratejik iş birliği ve ürünlerinin İsrail tesislerinde üretilip pazarlanması nedeniyle boykot kapsamına alınmıştır. Illy'nin Coca-Cola ile olan iş birliği ve İsrail'deki üretim/pazarlama faaliyetleri, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Coca-Cola'nın İsrail'deki yatırımları ve İsrail'e verdiği destekler de bu boykotun nedenleri arasındadır. Bu nedenle, Illy'nin ürünlerinin satın alınması önerilmemektedir. Illy markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Pret A Manger",
      slug: "pret-a-manger",
      foundedYear: 1983,
      founder: "Julian Metcalfe ve Sinclair Beecham",
      owner: "JAB Holdings",
      description: `Pret A Manger, 1983 yılında Julian Metcalfe ve Sinclair Beecham tarafından İngiltere'de kurulan ve dünya çapında faaliyet gösteren bir gıda ve kahve zinciridir. Marka, başlangıçta küçük bir sandviç dükkanı olarak faaliyet gösterirken, hızlı bir büyüme kaydederek dünya çapında binlerce şubeye ulaşmıştır.

Pret A Manger, özellikle taze ve doğal ürünler sunmasıyla tanınmaktadır. Marka, günlük olarak taze hazırlanan sandviçler, salatalar, çorbalar ve kahve ürünleri sunmaktadır. Pret A Manger, "hazır yemek" anlamına gelen Fransızca ismiyle, müşterilerine hızlı ama kaliteli yemek seçenekleri sunmayı hedeflemektedir.

Zincir, özellikle şehir merkezlerinde ve iş yerlerinin yakınlarında konumlanmış şubeleriyle dikkat çekmektedir. Pret A Manger şubeleri, modern ve şık tasarımlarıyla müşterilere rahat bir ortam sunmakta ve hem bireysel hem de grup kullanımına uygun alanlar sağlamaktadır. Her şube, günlük olarak taze hazırlanan ürünlerle müşterilerine hizmet vermektedir.

Marka, kahve kategorisinde de aktif olarak faaliyet göstermektedir. Pret A Manger, özenle seçilmiş kahve çekirdeklerini kullanmakta, espresso bazlı içeceklerden filtre kahvelere kadar geniş bir menü sunmaktadır. Kahve, markanın önemli gelir kaynaklarından biridir ve müşterilerin günlük rutinlerinin önemli bir parçası haline gelmiştir.

Pret A Manger, 2018 yılında JAB Holdings tarafından satın alınmıştır. JAB Holdings, dünyanın en büyük kahve şirketlerinden biridir ve Caribou Coffee, Peet's Coffee, Keurig Dr Pepper ve diğer önemli kahve markalarına da sahiptir. Bu satın alma, Pret A Manger'in global genişlemesini hızlandırmıştır.

Ancak, Pret A Manger markası, JAB Holdings'e aittir ve şirketin sahipleri Reimann ailesinin siyonist yatırımlarla anılması nedeniyle marka boykot edilmektedir. Reimann ailesinin İsrail'deki yatırımları ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Pret A Manger ürünlerinin satın alınması önerilmemektedir.`,
      country: "Birleşik Krallık",
      website: "https://www.pret.com/en-US",
      img: "/pret.png",
      isBoycotted: "boykot",
      boycottReason:
        "Pret A Manger markası, JAB Holdings'e ait bir markadır. JAB Holdings'in sahipleri Reimann ailesinin siyonist yatırımlarla anılması ve İsrail'e verdiği destekler nedeniyle, JAB Holdings bünyesindeki tüm markalar boykot kapsamına alınmıştır. Reimann ailesinin İsrail'deki yatırımları ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, JAB Holdings'e ait tüm markaların ürünlerinin satın alınması önerilmemektedir. Pret A Manger markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Tassimo",
      slug: "tassimo",
      foundedYear: 2004,
      founder: "Kraft Foods (şimdi Jacobs Douwe Egberts)",
      owner: "Jacobs Douwe Egberts",
      description: `Tassimo, 2004 yılında Kraft Foods tarafından geliştirilen ve dünya çapında faaliyet gösteren bir kapsül kahve sistemidir. Marka, özellikle çeşitlilik ve esneklik açısından öne çıkmakta ve sadece kahve değil, aynı zamanda çay, sıcak çikolata ve diğer sıcak içecek seçenekleri de sunmaktadır.

Tassimo, kapsül kahve kategorisinde önemli bir konuma sahiptir. Marka, özenle seçilmiş kahve çekirdeklerini kullanmakta, gelişmiş kavurma teknikleri uygulamakta ve her kapsülde tutarlı bir lezzet garantisi sunmaktadır. Tassimo, çeşitli kavurma profilleri ve harmanlar sunmakta ve farklı zevklere hitap eden geniş bir ürün yelpazesi sunmaktadır.

Markanın en önemli özelliklerinden biri, Bosch tarafından geliştirilen özel Tassimo makineleridir. Bu makineler, her kapsülün üzerindeki barkodları okuyarak otomatik olarak doğru sıcaklık, basınç ve hazırlama süresini ayarlamaktadır. Bu teknoloji, mükemmel bir içecek deneyimi sunmak için özel olarak tasarlanmıştır.

Tassimo makineleri, modern tasarımları ve kullanıcı dostu özellikleriyle dikkat çekmektedir. Her makine, kolay kullanım, hızlı hazırlama ve temizlik kolaylığı gibi özelliklerle donatılmıştır. Makineler, hem ev kullanımı hem de küçük ofisler için ideal boyutlarda üretilmektedir.

Marka, sadece kahve değil, aynı zamanda çeşitli sıcak içecek seçenekleri sunmaktadır. Tassimo, espresso, cappuccino, latte, çay, sıcak çikolata ve diğer özel içecekler için kapsüller sunmaktadır. Bu yaklaşım, tüketicilere tek bir makine ile geniş bir içecek yelpazesi sunmaktadır.

Tassimo, 2015 yılında Kraft Foods'un kahve bölümünün ayrılmasıyla Jacobs Douwe Egberts (JDE) çatısı altına geçmiştir. JDE, dünyanın en büyük kahve şirketlerinden biridir ve Tassimo'nun yanı sıra Jacobs, Douwe Egberts, Senseo ve diğer önemli kahve markalarına da sahiptir.

Ancak, Tassimo markası, Jacobs Douwe Egberts çatısı altında faaliyet göstermektedir ve şirketin İsrail ile ikili ticari ilişkileri ve destekleri gerekçe gösterilerek boykot edilmektedir. JDE'nin İsrail'deki faaliyetleri ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Tassimo ürünlerinin satın alınması önerilmemektedir.`,
      country: "Almanya",
      website: "https://www.tassimo.com/",
      img: "/tassimo.webp",
      isBoycotted: "boykot",
      boycottReason:
        "Tassimo markası, Jacobs Douwe Egberts (JDE) çatısı altında faaliyet gösteren bir kapsül kahve markasıdır. Jacobs Douwe Egberts'in İsrail ile ikili ticari ilişkileri ve İsrail'e verdiği destekler nedeniyle, JDE bünyesindeki tüm markalar boykot kapsamına alınmıştır. JDE'nin İsrail'deki faaliyetleri ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Jacobs Douwe Egberts'e ait tüm markaların ürünlerinin satın alınması önerilmemektedir. Tassimo markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Venado Coffee",
      slug: "venado-coffee",
      foundedYear: null,
      founder: "Yıldız Holding",
      owner: "Yıldız Holding",
      description: `Venado Coffee, Yıldız Holding bünyesinde faaliyet gösteren ve Türkiye'de önemli bir konuma sahip olan kahve markalarından biridir. Marka, Yıldız Holding'in güçlü altyapısı ve deneyimi sayesinde hızlı bir büyüme kaydetmiş ve Türkiye pazarında aktif olarak faaliyet göstermektedir.

Venado Coffee, geniş bir ürün yelpazesi sunmaktadır. Marka, geleneksel Türk kahvesinden espresso bazlı içeceklere, soğuk kahve çeşitlerinden özel harmanlara kadar geniş bir menü ile müşterilerine hizmet vermektedir. Ayrıca, kahve çekirdekleri, filtre kahve ve hazır kahve ürünleri de sunmaktadır.

Marka, özellikle premium segmentte faaliyet göstermektedir. Venado Coffee, özenle seçilmiş kahve çekirdeklerini kullanmakta, gelişmiş kavurma teknikleri uygulamakta ve her pakette tutarlı bir lezzet garantisi sunmaktadır. Marka, kaliteli ve güvenilir ürünler sunmayı hedeflemekte ve tüketici memnuniyetini ön planda tutmaktadır.

Venado Coffee, Türkiye pazarında hem perakende satış noktalarında hem de online platformlarda müşterilerine ulaşmaktadır. Marka, özellikle kaliteli kahve arayan tüketiciler arasında popülerlik kazanmaktadır ve geniş bir müşteri kitlesine hitap etmektedir.

Yıldız Holding, Türkiye'nin en büyük holdinglerinden biridir ve birçok sektörde faaliyet göstermektedir. Venado Coffee, bu güçlü altyapı sayesinde kaliteli ürünler ve hizmetler sunmaktadır. Ancak, Venado Coffee markası, Yıldız Holding bünyesinde yer almasına rağmen şirket yönetiminin İsrail'e yönelik övgüleri ve iş birlikleri nedeniyle boykot çağrılarına konu olmuştur.

Yıldız Holding'in İsrail'deki yatırımları ve iş ortaklıkları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Şirket yönetiminin İsrail'e dair övgüleri ve iş birliği iddiaları, markanın boykot listelerinde yer almasına neden olmaktadır. Bu nedenle, Venado Coffee ürünlerinin satın alınması önerilmemektedir.`,
      country: "Türkiye",
      website: "https://venado.com.tr/",
      img: "/venado.png",
      isBoycotted: "boykot",
      boycottReason:
        "Venado Coffee markası, Yıldız Holding bünyesinde faaliyet gösteren bir markadır. Yıldız Holding yönetiminin İsrail'e dair övgüleri ve iş birliği iddiaları nedeniyle, Yıldız Holding'e bağlı tüm şirketler ve markalar boykot kapsamına alınmıştır. Yıldız Holding'in İsrail'deki yatırımları, iş ortaklıkları ve yönetimin İsrail'e dair açıklamaları, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Yıldız Holding'e ait tüm markaların ürünlerinin satın alınması önerilmemektedir. Venado Coffee markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Coffy",
      slug: "coffy",
      foundedYear: null,
      founder: "Pizza Restoranları A.Ş.",
      owner: "Pizza Restoranları A.Ş.",
      description: `Coffy, Domino's Pizza Türkiye operasyonlarını yürüten Pizza Restoranları A.Ş. bünyesinde faaliyet gösteren ve Türkiye'de önemli bir konuma sahip olan kahve zinciridir. Marka, pizza zincirinin yanında kahve kategorisinde de faaliyet göstermekte ve müşterilerine geniş bir ürün yelpazesi sunmaktadır.

Coffy, özellikle hızlı servis restoranları konseptinde faaliyet göstermektedir. Marka, espresso bazlı içeceklerden filtre kahvelere, soğuk kahve çeşitlerinden özel harmanlara kadar geniş bir menü ile müşterilerine hizmet vermektedir. Ayrıca, pastane ürünleri, sandviçler ve hafif yemek seçenekleriyle de kapsamlı bir deneyim sunmaktadır.

Marka, özellikle şehir merkezlerinde ve alışveriş merkezlerinde konumlanmış şubeleriyle dikkat çekmektedir. Coffy şubeleri, modern ve şık tasarımlarıyla müşterilere rahat bir ortam sunmakta ve hem bireysel hem de grup kullanımına uygun alanlar sağlamaktadır. Her şube, kaliteli hizmet ve tutarlı lezzet garantisi sunmaktadır.

Coffy, özellikle genç ve modern tüketicilere hitap etmektedir. Marka, sosyal medya ve dijital pazarlama stratejileriyle güçlü bir varlık göstermekte ve özellikle şehirli tüketiciler arasında popülerdir. Ayrıca, özel etkinlikler ve kampanyalarla da müşterilerine değer katmaktadır.

Pizza Restoranları A.Ş., Domino's Pizza Türkiye operasyonlarını yürüten şirkettir ve Coffy markası bu şirket bünyesinde faaliyet göstermektedir. Şirket, Türkiye genelinde geniş bir şube ağına sahiptir ve hem pizza hem de kahve kategorisinde müşterilerine hizmet vermektedir.

Ancak, Coffy markası, Pizza Restoranları A.Ş.'ye bağlıdır ve şirket hisselerinin İsrail destekçisi kuruluşlara ait olduğu iddiaları nedeniyle marka boykot edilmektedir. Domino's Pizza Türkiye hisselerinin İsrail destekçileriyle ilişkilendirilmesi, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Coffy ürünlerinin satın alınması önerilmemektedir.`,
      country: "Türkiye",
      website: "https://coffy.com.tr/",
      img: "/coffy.jpeg",
      isBoycotted: "boykot",
      boycottReason:
        "Coffy markası, Domino's Pizza Türkiye operasyonlarını yürüten Pizza Restoranları A.Ş. bünyesinde faaliyet gösteren bir kahve zinciridir. Pizza Restoranları A.Ş.'nin hisselerinin İsrail destekçisi kuruluşlara ait olduğu iddiaları nedeniyle, şirket bünyesindeki tüm markalar boykot kapsamına alınmıştır. Domino's Pizza Türkiye hisselerinin İsrail destekçileriyle ilişkilendirilmesi, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Pizza Restoranları A.Ş.'ye ait tüm markaların ürünlerinin satın alınması önerilmemektedir. Coffy markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Lavazza",
      slug: "lavazza",
      foundedYear: 1895,
      founder: "Luigi Lavazza",
      owner: "Lavazza Group",
      description: `Lavazza, 1895 yılında Luigi Lavazza tarafından İtalya'nın Torino kentinde kurulan ve dünyanın en köklü kahve markalarından biridir. Marka, 130 yılı aşkın tarihiyle İtalyan kahve kültürünün önemli bir parçasıdır ve nesiller boyunca aktarılan bir gelenektir.

Lavazza, özellikle espresso kategorisinde güçlü bir konuma sahiptir. Marka, özenle seçilmiş kahve çekirdeklerini kullanmakta, geleneksel İtalyan kavurma tekniklerini uygulamakta ve her pakette tutarlı bir lezzet garantisi sunmaktadır. Lavazza, çeşitli kavurma profilleri ve harmanlar sunmakta ve farklı zevklere hitap eden geniş bir ürün yelpazesi sunmaktadır.

Marka, sadece kahve çekirdekleri değil, aynı zamanda hazır kahve ürünleri, kapsül kahve seçenekleri ve özel koleksiyonlar da sunmaktadır. Lavazza, dünya çapında milyonlarca tüketiciye ulaşmakta ve özellikle restoranlar, kafeler ve otellerde yaygın olarak kullanılmaktadır.

Lavazza, dünya çapında özellikle Avrupa, Kuzey Amerika ve Asya pazarlarında güçlü bir konuma sahiptir. Marka, İtalya'nın en büyük kahve üreticilerinden biridir ve dünya çapında 90'dan fazla ülkede faaliyet göstermektedir. Türkiye'de de aktif olarak faaliyet gösteren marka, geniş bir müşteri kitlesine hitap etmektedir.

Marka, sürdürülebilir kahve üretimi konusunda da önemli adımlar atmaktadır. Lavazza, kahve üreticilerini desteklemekte, sürdürülebilir tarım uygulamalarını teşvik etmekte ve çevre dostu ambalajlama çözümleri geliştirmektedir. Ayrıca, kahve kültürünü yaymak için çeşitli eğitim programları ve etkinlikler düzenlemektedir.

Lavazza, sanat ve kültür alanında da aktif olarak yer almaktadır. Marka, fotoğraf sergileri, müzik etkinlikleri ve kültürel projelerle İtalyan kültürünü dünya çapında tanıtmaktadır. Bu yaklaşım, Lavazza'nın sadece bir kahve markası değil, aynı zamanda bir kültürel marka olarak konumlandırılmasını sağlamaktadır.

Ancak, Lavazza markası, İsrail'de faaliyet gösteren spor kulüplerine verilen destek ve İsrail yatırımları nedeniyle eleştirilmektedir. Lavazza'nın İsrail'deki faaliyetleri ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu sebeplerle boykot listelerindeki yerini almıştır ve Lavazza ürünlerinin satın alınması önerilmemektedir.`,
      country: "İtalya",
      website: "https://www.lavazza.com/en",
      img: "/Lavazza.png",
      isBoycotted: "boykot",
      boycottReason:
        "Lavazza markası, İsrail'de faaliyet gösteren spor kulüplerine verilen destek ve İsrail yatırımları nedeniyle boykot kapsamına alınmıştır. Lavazza'nın İsrail'deki faaliyetleri, spor kulüplerine verdiği destekler ve İsrail'e verdiği destekler, İsrail'in Filistin topraklarındaki işgal politikalarına dolaylı olarak destek sağlamaktadır. Bu nedenle, Lavazza'nın ürünlerinin satın alınması önerilmemektedir. Lavazza markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "VIP Kahve",
      slug: "vip-kahve",
      foundedYear: null,
      founder: "BİM",
      owner: "BİM",
      description: `VIP Kahve, BİM (Birleşik Mağazalar A.Ş.) marketlerinde satılan özel marka (private label) bir kahve ürünüdür. Marka, BİM'in geniş mağaza ağı sayesinde Türkiye'nin dört bir yanındaki tüketicilere ulaşmakta ve uygun fiyatlı kaliteli kahve seçenekleri sunmaktadır.

VIP Kahve, BİM'in özel marka stratejisinin bir parçasıdır. BİM, müşterilerine uygun fiyatlı ürünler sunmak için özel marka ürünleri geliştirmekte ve VIP Kahve de bu stratejinin kahve kategorisindeki temsilcilerinden biridir. Marka, geniş bir müşteri kitlesine hitap etmekte ve erişilebilir fiyatlarla kaliteli kahve deneyimi sunmaktadır.

VIP Kahve, farklı kahve türleri ve harmanları ile geniş bir ürün yelpazesi sunmaktadır. Marka, hem geleneksel Türk kahvesi hem de modern kahve çeşitleri üretmekte ve farklı zevklere hitap eden ürünler geliştirmektedir. Ürünler, BİM mağazalarında özel marka olarak satılmakta ve tüketicilere uygun fiyatlı seçenekler sunmaktadır.

Marka, özellikle fiyat-performans dengesi arayan tüketicilere hitap etmektedir. VIP Kahve, geniş bir müşteri kitlesine hitap etmekte ve erişilebilir fiyatlarla kaliteli kahve deneyimi sunmaktadır. Ürünler, BİM'in güçlü altyapısı ve tedarik zinciri sayesinde uygun fiyatlarla tüketicilere sunulmaktadır.

BİM, Türkiye'nin en büyük perakende zincirlerinden biridir ve binlerce mağazasıyla Türkiye genelinde faaliyet göstermektedir. VIP Kahve, bu geniş mağaza ağı sayesinde milyonlarca tüketiciye ulaşmakta ve Türkiye'nin kahve pazarında önemli bir konuma sahiptir.

Ancak, VIP Kahve markası, BİM marketlerinde satılan özel bir ürün olması nedeniyle BİM'e yönelik boykot çağrıları kapsamında marka da boykot edilen ürünler arasına eklenmiştir. BİM'e yönelik boykot çağrıları, şirketin çeşitli nedenlerle eleştirilmesi sonucunda ortaya çıkmıştır. Bu nedenle, VIP Kahve ürünlerinin satın alınması önerilmemektedir.`,
      country: "Türkiye",
      img: "/vip.png",
      isBoycotted: "boykot",
      boycottReason:
        "VIP Kahve markası, BİM (Birleşik Mağazalar A.Ş.) marketlerinde satılan özel marka (private label) bir kahve ürünüdür. BİM'e yönelik boykot çağrıları kapsamında, BİM'in özel marka ürünleri de boykot kapsamına alınmıştır. BİM'e yönelik boykot çağrıları, şirketin çeşitli nedenlerle eleştirilmesi sonucunda ortaya çıkmıştır. Bu nedenle, BİM'in özel marka ürünlerinin satın alınması önerilmemektedir. VIP Kahve markası da bu kapsamda boykot listesinde yer almaktadır.",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
    {
      name: "Gua Coffee",
      slug: "gua-coffee",
      foundedYear: 2021,
      founder: "Bilinmiyor",
      owner: "Bilinmiyor",
      description: `Gua Coffee, 2021 yılında Türkiye'de kurulan modern bir kahve markasıdır. Marka, kaliteli kahve çekirdekleri ve özel harmanları ile Türkiye kahve pazarında yerini almıştır. Gua Coffee, hem online platform hem de fiziksel satış noktaları aracılığıyla müşterilerine hizmet vermektedir.

Marka, çeşitli kahve türleri ve harmanları sunarak farklı zevklere hitap etmektedir. Gua Coffee, modern kahve kültürünü Türkiye'ye getirmeyi hedefleyen genç bir marka olarak öne çıkmaktadır. Marka, özellikle specialty coffee (özel kahve) segmentinde faaliyet göstermekte ve kaliteli kahve deneyimi sunmayı amaçlamaktadır.

Gua Coffee, Türkiye merkezli bir marka olarak yerli kahve üretimini desteklemekte ve Türk kahve kültürüne modern bir yaklaşım getirmektedir. Marka, hem geleneksel Türk kahvesi hem de modern espresso bazlı içecekler sunarak geniş bir müşteri kitlesine hitap etmektedir.

Marka, boykot dışıdır. Tamamen yerli sermaye ile faaliyet gösteren Gua Coffee, Türkiye'nin yerli kahve markaları arasında yer almaktadır ve İsrail bağlantısı bulunmamaktadır.`,
      country: "Türkiye",
      img: "/gua.png",
      isBoycotted: "boykot-degil",
      website: "https://guacoffeecompany.com/",
      alternative_products: [
        "espressolab",
        "kocatepe",
        "gloria-jeans",
        "caffe-nero",
        "mahmood",
        "gold-cup",
        "kurukahveci-mehmet-efendi",
      ],
    },
  ],
};

export default kahveCategory;
