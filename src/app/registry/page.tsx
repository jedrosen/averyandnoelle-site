const rings = [
  {
    name: "Cartier Love Bracelet",
    price: "$7,350",
    url: "https://www.cartier.com",
  },
  {
    name: "Van Cleef & Arpels Alhambra Necklace",
    price: "$5,400",
    url: "https://www.vancleefarpels.com",
  },
  {
    name: "Tiffany T Chain Necklace",
    price: "$3,800",
    url: "https://www.tiffany.com",
  },
  {
    name: "Bulgari Serpenti Chain",
    price: "$9,200",
    url: "https://www.bulgari.com",
  },
  {
    name: "Harry Winston Diamond Band",
    price: "$15,000+",
    url: "https://www.harrywinston.com",
  },
];

const skis = [
  {
    name: "Porsche × Head 7 Series Racing Skis",
    price: "$2,425",
    note: "",
  },
  {
    name: "Bomber × Bentley Black Diamond Edition",
    price: "$2,750",
    note: "",
  },
  {
    name: "Bogner 90-Year Anniversary Skis",
    price: "$3,900.90",
    note: "",
  },
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
  {
    name: "ZEGNA Black Zai",
    price: "$7,540",
    note: "",
  },
  {
    name: "Zai Saint Laurent Skis",
    price: "$12,500",
    note: "",
  },
];

export default function Registry() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
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

      {/* Chains & Rings */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-stone-800 mb-6 pb-2 border-b border-stone-100">
          Chains & Rings
        </h2>
        <div className="space-y-0">
          {rings.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between py-4 border-b border-stone-50"
            >
              <div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-800 hover:text-stone-500 transition-colors font-medium"
                >
                  {item.name} ↗
                </a>
              </div>
              <span className="text-stone-500 text-sm font-mono shrink-0 ml-4">
                {item.price}
              </span>
            </div>
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

      <p className="text-center text-stone-400 text-xs italic">
        Cash contributions also accepted. Venmo: @[TBD]
      </p>
    </div>
  );
}
