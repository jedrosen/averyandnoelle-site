const chains = [
  {
    name: "Martine Ali Roberto Chain (Gold)",
    price: "$350",
    url: "https://www.ssense.com/en-us/women/product/martine-ali/gold-roberto-chain/9957441",
    img: "https://img.ssense.com/app/img/product/9957441_1.jpg",
    note: "worn by every DJ at Boiler Room",
  },
  {
    name: "Tom Wood XL Curb Chain Necklace",
    price: "$490",
    url: "https://tomwood.no/collections/necklaces",
    img: "https://tomwood.no/cdn/shop/files/N11929DCHRS925.jpg",
    note: "because you're a Scandinavian minimalist at heart",
  },
  {
    name: "Chrome Hearts 22\" Foti Cross Necklace",
    price: "$5,500",
    url: "https://www.ssense.com/en-us/men/chrome-hearts",
    img: "https://img.ssense.com/app/img/product/11693117_1.jpg",
    note: "sterling silver, you're not a sell-out",
  },
  {
    name: "Ambush Safety Pin Chain Necklace",
    price: "$810",
    url: "https://www.ssense.com/en-us/women/ambush",
    img: "https://img.ssense.com/app/img/product/7975283_1.jpg",
    note: "Tokyo avant-garde energy",
  },
];

const rings = [
  {
    name: "Alexander McQueen Double Skull Ring",
    price: "$450",
    url: "https://www.alexandermcqueen.com",
    img: "https://img.ssense.com/app/img/product/3427813_1.jpg",
    note: "mandatory for DJs",
  },
  {
    name: "Chrome Hearts Cemetery Cross Ring",
    price: "$780",
    url: "https://www.ssense.com/en-us/men/chrome-hearts",
    img: "https://img.ssense.com/app/img/product/11693127_1.jpg",
    note: "wear it on the pinky",
  },
  {
    name: "Tom Wood Cushion Ring Sterling Silver",
    price: "$240",
    url: "https://tomwood.no/collections/rings",
    img: "https://tomwood.no/cdn/shop/files/R1139DCHR925.jpg",
    note: "the 'I read independent bookshop zines' ring",
  },
  {
    name: "Maple Signet Ring (Sterling Silver)",
    price: "$195",
    url: "https://www.maplestore.co",
    img: "https://img.ssense.com/app/img/product/10573783_1.jpg",
    note: "obscure enough to explain at parties",
  },
];

const skis = [
  { name: "Porsche × Head 7 Series Racing Skis", price: "$2,425", note: "" },
  { name: "Bomber × Bentley Black Diamond Edition", price: "$2,750", note: "" },
  { name: "Bogner 90-Year Anniversary Skis", price: "$3,900.90", note: "" },
  {
    name: "Faction × Prada Linea Rossa Prodigy 1.0",
    price: "$4,500",
    note: "",
  },
  {
    name: "Balenciaga Skiwear Skis",
    price: "$6,290",
    note: "bindings not included",
  },
  { name: "ZEGNA Black Zai", price: "$7,540", note: "" },
  { name: "Zai Saint Laurent Skis", price: "$12,500", note: "" },
];

const supplements = [
  {
    name: "Optimum Nutrition Gold Standard 100% Whey",
    flavor: "Double Rich Chocolate, 5 lbs",
    price: "$89",
    url: "https://www.optimumnutrition.com/en-us/Products/Protein/Whey-Protein/GOLD-STANDARD-100%25-WHEY/p/GOLD-STANDARD-100-WHEY",
    img: "https://www.optimumnutrition.com/cdn/shop/files/gold-standard-100-whey-double-rich-chocolate-5lb.png",
    note: "for the groom's 5am lifting sessions",
  },
  {
    name: "Thorne Creatine",
    flavor: "Unflavored, 16 oz",
    price: "$42",
    url: "https://www.thorne.com/products/dp/creatine",
    img: "https://www.thorne.com/cdn/shop/products/creatine-16oz.jpg",
    note: "5g per day, every day, no excuses",
  },
  {
    name: "Optimum Nutrition Serious Mass",
    flavor: "Chocolate, 12 lbs",
    price: "$79",
    url: "https://www.optimumnutrition.com/en-us/Products/Weight-Gainers/SERIOUS-MASS/p/SERIOUS-MASS-WEIGHT-GAINER-PROTEIN-POWDER",
    img: "https://www.optimumnutrition.com/cdn/shop/files/serious-mass-chocolate-12lb.png",
    note: "1,250 calories per serving. respect.",
  },
];

function ProductCard({
  name,
  price,
  url,
  img,
  note,
  sub,
}: {
  name: string;
  price: string;
  url: string;
  img: string;
  note?: string;
  sub?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-stone-100 rounded-lg overflow-hidden hover:border-stone-300 hover:shadow-md transition-all"
    >
      <div className="aspect-square bg-stone-100 overflow-hidden relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <p className="text-stone-800 font-medium text-sm leading-snug">{name}</p>
        {sub && <p className="text-stone-400 text-xs mt-0.5">{sub}</p>}
        {note && (
          <p className="text-stone-400 text-xs italic mt-1">{note}</p>
        )}
        <p className="text-stone-600 font-mono text-sm mt-2">{price}</p>
      </div>
    </a>
  );
}

export default function Registry() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
          Your generosity is appreciated
        </p>
        <h1 className="font-serif text-5xl font-bold text-stone-800">
          Registry
        </h1>
        <p className="text-stone-400 text-sm mt-3 italic">
          We have simple tastes.
        </p>
      </div>

      {/* Chains */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-stone-800 mb-2 pb-2 border-b border-stone-100">
          Chains
        </h2>
        <p className="text-stone-400 text-xs italic mb-6">thick, silver, meaningful</p>
        <div className="grid grid-cols-2 gap-4">
          {chains.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </div>
      </section>

      {/* Rings */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-stone-800 mb-2 pb-2 border-b border-stone-100">
          Rings
        </h2>
        <p className="text-stone-400 text-xs italic mb-6">multiple at once, always</p>
        <div className="grid grid-cols-2 gap-4">
          {rings.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </div>
      </section>

      {/* Skis */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-stone-800 mb-6 pb-2 border-b border-stone-100">
          Skis
        </h2>
        <div className="space-y-0">
          {skis.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-4 border-b border-stone-50"
            >
              <div>
                <span className="text-stone-800 font-medium">{item.name}</span>
                {item.note && (
                  <span className="text-stone-400 text-xs italic ml-2">
                    ({item.note})
                  </span>
                )}
              </div>
              <span className="text-stone-500 text-sm font-mono shrink-0 ml-4">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Supplements */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-stone-800 mb-2 pb-2 border-b border-stone-100">
          Supplements
        </h2>
        <p className="text-stone-400 text-xs italic mb-6">the most important registry section</p>
        <div className="grid grid-cols-3 gap-4">
          {supplements.map((item) => (
            <ProductCard
              key={item.name}
              name={item.name}
              price={item.price}
              url={item.url}
              img={item.img}
              note={item.note}
              sub={item.flavor}
            />
          ))}
        </div>
      </section>

      <p className="text-center text-stone-400 text-xs italic">
        Cash contributions also accepted. Venmo: @[TBD]
      </p>
    </div>
  );
}
