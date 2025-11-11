const teknolojiCategory = {
  order: 19,
  name: "Teknoloji",
  slug: "teknoloji",
  iconKey: "cpu",
  description: "Elektronik ve yazılım ekosistemindeki markalar.",
  brands: [
    {
      name: "Apple",
      slug: "apple",
      description: "Tüketici elektroniği ve yazılım şirketi.",
      country: "ABD",
      website: "https://www.apple.com",
      img: "/apple.png",
      isBoycotted: false,
    },
    {
      name: "TechSphere",
      slug: "techsphere",
      description:
        "Kurgu teknoloji üreticisi ve kampanyalarda adı geçen marka.",
      country: "Türkiye",
      img: "/techsphere.png",
      isBoycotted: true,
      boycottReason:
        "Fazla mesai ödemeleri ve sendikal faaliyetlere dair şikayetler.",
    },
  ],
};

export default teknolojiCategory;
