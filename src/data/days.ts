export interface DaySection {
  heading: string;
  items: string[];
}

export interface Day {
  id: number;
  roman: string;
  title: string;
  photo: string;
  sections: DaySection[];
}

export const days: Day[] = [
  {
    id: 1,
    roman: "Den I.",
    title: "Příjezd a Horní Planá",
    photo: "/images/program/day-1-photo.png",
    sections: [
      {
        heading: "Doprava",
        items: [
          "Vlak 6:09 Přelouč → 9:54 Český Krumlov — 246 Kč / osoba",
          "Vlak 13:00 Český Krumlov → 13:53 Horní Planá — 46 Kč / osoba",
          "Chůze 13:53 Horní Planá → 15:00 kemp U Kukačků",
        ],
      },
      {
        heading: "Program",
        items: [
          "Trasa: kolečko kolem Horní Plané přes rozhledny",
          "Délka: cca 3 h",
          "Nákup zásob v Horní Plané — obchod zavírá v 19:00",
        ],
      },
    ],
  },
  {
    id: 2,
    roman: "Den II.",
    title: "Třístoličník",
    photo: "/images/program/day-2-photo.png",
    sections: [
      {
        heading: "Doprava",
        items: ["Vlak 6:58 Horní Planá → 7:41 Nové Údolí — 37 Kč / osoba"],
      },
      {
        heading: "Program",
        items: [
          "Trasa: Nové Údolí → Třístoličník → Plechý → kemp U Kukačků",
          "Délka: cca 8 h",
        ],
      },
    ],
  },
  {
    id: 3,
    roman: "Den III.",
    title: "Varianta Linz / varianta Rožmberk",
    photo: "/images/program/day-4-photo.png",
    sections: [
      {
        heading: "Společný začátek",
        items: ["Bus 6:45 Horní Planá → 7:31 Vyšší Brod, žel. st."],
      },
      {
        heading: "Varianta A — Linz (stihneme přestup)",
        items: [
          "Vlak 7:32 Vyšší Brod klášter → 7:54 Rybník",
          "Vlak 8:28 Rybník → 10:06 Linz Hbf — 211 Kč / osoba (tam)",
          "Program: výlet Linz",
        ],
      },
      {
        heading: "Návrat — skupina A",
        items: [
          "Vlak 15:54 Linz Hbf → 17:02 Rybník",
          "Vlak 17:03 Rybník → 17:25 Vyšší Brod klášter",
          "Bus 17:38 Vyšší Brod → 18:26 Horní Planá — 211 Kč / osoba (zpět)",
        ],
      },
      {
        heading: "Návrat — skupina B",
        items: [
          "Vlak 13:30 Linz / Donau Urfahr → 14:59 Aigen-Schlägl — 194 Kč / osoba",
          "Trasa: Aigen-Schlägl → rozhledna → kemp U Kukačků",
          "Délka: cca 5 h",
        ],
      },
      {
        heading: "Varianta B — bez Linze",
        items: [
          "Trasa: Vyšší Brod → hrad Rožmberk → Rybník",
          "Délka: cca 5 h",
          "Vlak 15:04 Rybník → 15:26 Vyšší Brod klášter",
          "Bus 15:38 Vyšší Brod žel. st. → 16:26 Horní Planá",
        ],
      },
    ],
  },
  {
    id: 4,
    roman: "Den IV.",
    title: "Frymburk a Vítkův Kámen",
    photo: "/images/program/day-3-photo.png",
    sections: [
      {
        heading: "Doprava",
        items: ["Bus 7:40 Horní Planá → 8:05 Frymburk"],
      },
      {
        heading: "Program",
        items: [
          "Trasa: Frymburk → Vítkův Kámen → zpět",
          "Přívoz tam: 9:00, přívoz zpět: 15:05 — 70 Kč / osoba",
        ],
      },
      {
        heading: "Návrat",
        items: ["Bus 16:00 Frymburk → 16:25 Horní Planá"],
      },
    ],
  },
  {
    id: 5,
    roman: "Den V.",
    title: "Rožmberk / návrat",
    photo: "/images/program/day-5-photo.png",
    sections: [
      {
        heading: "Doprava",
        items: ["Bus 7:40 Horní Planá → 8:29 Vyšší Brod"],
      },
      {
        heading: "Program podle 3. dne — pokud byl Linz",
        items: [
          "Trasa: Vyšší Brod → hrad Rožmberk → Rybník",
          "Délka: cca 5 h",
          "Vlak 15:08 Rybník → 19:52 Přelouč — 265 Kč / osoba",
        ],
      },
    ],
  },
];

export function getDay(id: number): Day | undefined {
  return days.find((day) => day.id === id);
}
