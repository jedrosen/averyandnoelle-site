const roster = [
  { number: "3", name: "Hunter Batesko", pos: "M", grade: "Fr." },
  { number: "9", name: "Robert Gossett", pos: "LSM", grade: "Sr." },
  { number: "22", name: "Jack Siddron", pos: "D", grade: "Sr." },
  { number: "24", name: "Chris Sammarro", pos: "—", grade: "Sr." },
  { number: "26", name: "Zach Lesko", pos: "DM", grade: "Sr." },
  { number: "30", name: "Paul Kimmelman", pos: "G", grade: "Sr." },
  { number: "44", name: "Christian Cuccinello", pos: "A", grade: "Sr." },
  { number: "48", name: "John Spagnola", pos: "D", grade: "Sr." },
  { number: "—", name: "Ian Nordfors", pos: "LSM", grade: "Sr." },
];

export default function GuestList() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mb-3">
          Mountain Lakes Lakers · 2013–14 · Boys Varsity Lacrosse
        </p>
        <h1 className="font-serif text-5xl font-bold text-stone-800">
          You&apos;re All Invited.
        </h1>
        <p className="text-stone-400 mt-4 text-sm">
          Head Coach: Tim Flynn · Season Record: 17–4
        </p>
      </div>

      <div className="border border-stone-100 rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-100 bg-stone-50">
              <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-stone-400 font-normal w-12">
                #
              </th>
              <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-stone-400 font-normal">
                Name
              </th>
              <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-stone-400 font-normal w-16">
                Pos
              </th>
              <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-stone-400 font-normal w-16">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            {roster.map((player, i) => (
              <tr
                key={player.name}
                className={`border-b border-stone-50 last:border-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-stone-50/50"
                }`}
              >
                <td className="px-4 py-3 font-mono text-stone-400">
                  {player.number}
                </td>
                <td className="px-4 py-3 font-medium text-stone-800">
                  {player.name}
                </td>
                <td className="px-4 py-3 text-stone-500">{player.pos}</td>
                <td className="px-4 py-3 text-stone-500">{player.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center text-stone-400 text-xs italic mt-8">
        Dress code: formal. Cleats are not formal.
      </p>
    </div>
  );
}
