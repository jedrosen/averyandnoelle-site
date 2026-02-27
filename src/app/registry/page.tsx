const chains = [
  {
    name: "Martine Ali Evie Curb Chain",
    price: "$295",
    url: "https://www.martineali.com/products/evie-curb-silver-chain-necklace",
    img: "https://www.martineali.com/cdn/shop/files/EVIECURBCHAINNECKLACE01MARTINEALISILVERJEWELRY.jpg?v=1771563386&width=800",
    note: "worn by every DJ at Boiler Room",
  },
  {
    name: "Martine Ali Raider Chain",
    price: "$325",
    url: "https://www.martineali.com/products/raider-chain",
    img: "https://www.martineali.com/cdn/shop/files/HSRAIDERCHAINSILVERMARTINEALI.jpg?v=1771563363&width=800",
    note: "the 'I play b2b sets' chain",
  },
  {
    name: "Chrome Hearts Cross Pendant Necklace",
    price: "$2,200",
    url: "https://www.fashionphile.com/products/chrome-hearts-sterling-silver-cross-pendant-necklace-1679095",
    img: "https://www.fashionphile.com/cdn/shop/files/b449545d07de2ebe07a58f449cf4e9b5.jpg?v=1755630405",
    note: "sterling silver, you're not a sell-out",
  },
  {
    name: "Tom Wood Rope Chain",
    price: "$490",
    url: "https://www.tomwoodproject.com/jewellery/necklaces/",
    img: "https://cdn.tomwoodproject.com/api/v1.1/file/public_files/pim/assets/80/4b/f6/62/62f64b8027a67b0001abc63b/images/74/f3/b7/68/68b7f37459490eaf09a2a528/101562-.Rope.Chain.09237.jpg",
    note: "Nordic minimalism, maximum drip",
  },
];

const rings = [
  {
    name: "Alexander McQueen Skull Ring",
    price: "$450",
    url: "https://www.alexandermcqueen.com/en-us/jewellery/rings",
    img: "https://www.revogue.com/cdn/shop/products/front_992b4242-8f6b-46f3-886a-b7533e21611b.jpg?v=1613202198",
    note: "mandatory for DJs",
  },
  {
    name: "Tom Wood Kay Ring Satin",
    price: "$340",
    url: "https://www.tomwoodproject.com/jewellery/rings/",
    img: "https://cdn.tomwoodproject.com/api/v1.1/file/public_files/pim/assets/80/4b/f6/62/62f64b8027a67b0001abc63b/images/7b/fe/11/69/6911fe7bc5715ee6319f2dc3/100568-.Kay.Ring.Satin.37528.jpg",
    note: "stack three, minimum",
  },
  {
    name: "Tom Wood Kay Ring Black Larvikite",
    price: "$390",
    url: "https://www.tomwoodproject.com/jewellery/rings/",
    img: "https://cdn.tomwoodproject.com/api/v1.1/file/public_files/pim/assets/80/4b/f6/62/62f64b8027a67b0001abc63b/images/dc/6f/49/68/68496fdc07df354984a49fbe/101486-.Kay.Ring.Black.Larvikite.71409.jpg",
    note: "it's a rare Norwegian stone, obviously",
  },
  {
    name: "Tom Wood Kay Ring Tiger Eye",
    price: "$390",
    url: "https://www.tomwoodproject.com/jewellery/rings/",
    img: "https://cdn.tomwoodproject.com/api/v1.1/file/public_files/pim/assets/80/4b/f6/62/62f64b8027a67b0001abc63b/images/06/c8/ea/66/66eac8061ae79b83e1fe5692/101438-1.Kay.Ring.Tiger.Eye.37239.jpg",
    note: "the 'I read independent bookshop zines' ring",
  },
];

const skis = [
  {
    name: "Porsche × Head 7 Series Racing Skis",
    price: "$2,425",
    note: "",
    img: "https://factionskis.com/cdn/shop/files/Faction-Skis-2025-Agent-1-White-Topsheet-1x1.jpg?v=1719497977",
    url: "https://www.head.com/en_US/porsche-7-series-313633-set.html",
  },
  {
    name: "Bomber × Bentley Black Diamond Edition",
    price: "$2,750",
    note: "",
    img: "https://factionskis.com/cdn/shop/files/Faction-Skis-2526-Agent-1-X-Topsheet-1x1.jpg?v=1750410856",
    url: "https://www.bomber.com",
  },
  {
    name: "Bogner 90-Year Anniversary Skis",
    price: "$3,900.90",
    note: "",
    img: "https://factionskis.com/cdn/shop/files/Faction-Skis-2526-Agent-3-Topsheet-1x1.jpg?v=1750408747",
    url: "https://www.bogner.com",
  },
  {
    name: "Faction × Prada Linea Rossa Prodigy 1.0",
    price: "$4,500",
    note: "",
    img: "https://factionskis.com/cdn/shop/files/Faction-Skis-Anttoi-LTD-1x1.jpg?v=1764856819",
    url: "https://factionskis.com/en-us/collections/limited-edition",
  },
  {
    name: "Balenciaga Skiwear Skis",
    price: "$6,290",
    note: "bindings not included",
    img: "https://factionskis.com/cdn/shop/files/Faction-Skis-2526-Dancer-1-Gray-Topsheet-1x1.jpg?v=1746198813",
    url: "https://www.balenciaga.com",
  },
  {
    name: "ZEGNA Black Zai",
    price: "$7,540",
    note: "",
    img: "https://factionskis.com/cdn/shop/files/Faction-Skis-2526-Dancer-3-Turq-Topsheet-1x1.jpg?v=1746199213",
    url: "https://www.zegna.com",
  },
  {
    name: "Zai Saint Laurent Skis",
    price: "$12,500",
    note: "",
    img: "https://factionskis.com/cdn/shop/files/Faction-Skis-2526-Dancer-79-Pink-Topsheet-1x1.jpg?v=1750775750",
    url: "https://www.zai.ski",
  },
];

const supplements = [
  {
    name: "Optimum Nutrition Gold Standard 100% Whey",
    flavor: "Double Rich Chocolate, 5 lbs",
    price: "$89",
    url: "https://www.optimumnutrition.com/en-us/products/gold-standard-100-whey-protein-powder",
    img: "https://www.optimumnutrition.com/cdn/shop/files/on-1158131_Image_01.png",
    note: "for the groom's 5am lifting sessions",
  },
  {
    name: "Thorne Creatine",
    flavor: "Unflavored, 90 servings",
    price: "$42",
    url: "https://www.thorne.com/products/dp/creatine",
    img: "https://cdn11.bigcommerce.com/s-35tuw7jhw2/images/stencil/500x659/products/22668/33474/creatine-powder-90svgs-thorne__37911.1720808888.jpg?c=1",
    note: "5g per day, every day, no excuses",
  },
  {
    name: "Optimum Nutrition Serious Mass",
    flavor: "Chocolate, 6 lbs",
    price: "$79",
    url: "https://www.optimumnutrition.com/en-us/products/serious-mass-weight-gainer-protein-powder",
    img: "https://www.optimumnutrition.com/cdn/shop/files/US_ON_SeriousMass_6lb_Chocolate_6069584-2000x2000-064a3d6.png?v=1761675246",
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
      <div className="aspect-square bg-stone-100 overflow-hidden">
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
        {note && <p className="text-stone-400 text-xs italic mt-1">{note}</p>}
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
        <p className="text-stone-400 text-sm mt-3 italic">We have simple tastes.</p>
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
        <h2 className="font-serif text-2xl text-stone-800 mb-2 pb-2 border-b border-stone-100">
          Skis
        </h2>
        <p className="text-stone-400 text-xs italic mb-6">tasteful</p>
        <div className="grid grid-cols-2 gap-4">
          {skis.map((item) => (
            <ProductCard
              key={item.name}
              name={item.name}
              price={item.price}
              url={item.url}
              img={item.img}
              note={item.note || undefined}
            />
          ))}
        </div>
      </section>

      {/* Supplements */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-stone-800 mb-2 pb-2 border-b border-stone-100">
          Supplements
        </h2>
        <p className="text-stone-400 text-xs italic mb-6">
          the most important registry section
        </p>
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
