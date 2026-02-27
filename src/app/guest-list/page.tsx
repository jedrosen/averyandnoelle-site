const roster = [
  { number: "3",  name: "Hunter Batesko",      pos: "M",   grade: "Fr.", goals: "—",  assists: "—"  },
  { number: "9",  name: "Robert Gossett",       pos: "LSM", grade: "Sr.", goals: "—",  assists: "—"  },
  { number: "22", name: "Jack Siddron",         pos: "D",   grade: "Sr.", goals: "—",  assists: "—"  },
  { number: "24", name: "Chris Sammarro",       pos: "M",   grade: "Sr.", goals: "—",  assists: "—"  },
  { number: "26", name: "Zach Lesko",           pos: "DM",  grade: "Sr.", goals: "—",  assists: "—"  },
  { number: "30", name: "Paul Kimmelman",       pos: "G",   grade: "Sr.", goals: "—",  assists: "—"  },
  { number: "44", name: "Christian Cuccinello", pos: "A",   grade: "Sr.", goals: "69", assists: "39" },
  { number: "48", name: "John Spagnola",        pos: "D",   grade: "Sr.", goals: "—",  assists: "—"  },
  { number: "—",  name: "Ian Nordfors",         pos: "LSM", grade: "Sr.", goals: "—",  assists: "—"  },
  { number: "—",  name: "Jason Wolpov",         pos: "A",   grade: "Sr.", goals: "—",  assists: "—"  },
  { number: "—",  name: "Eli Mehl",             pos: "M",   grade: "Sr.", goals: "—",  assists: "—"  },
  { number: "—",  name: "Brad Smith",           pos: "A",   grade: "Jr.", goals: "45", assists: "38" },
];

export default function GuestList() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
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
              <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-stone-400 font-normal w-10">
                #
              </th>
              <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-stone-400 font-normal">
                Name
              </th>
              <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-stone-400 font-normal w-14">
                Pos
              </th>
              <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-stone-400 font-normal w-14">
                Grade
              </th>
              <th className="text-right px-4 py-3 text-xs uppercase tracking-widest text-stone-400 font-normal w-14">
                G
              </th>
              <th className="text-right px-4 py-3 text-xs uppercase tracking-widest text-stone-400 font-normal w-14">
                A
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
                <td className="px-4 py-3 text-stone-500 text-right font-mono">
                  {player.goals}
                </td>
                <td className="px-4 py-3 text-stone-500 text-right font-mono">
                  {player.assists}
                </td>
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
