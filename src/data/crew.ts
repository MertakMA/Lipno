export interface CrewMember {
  name: string;
  role: string;
  avatar: string;
}

export interface CrewGroup {
  title: string;
  members: CrewMember[];
}

// TODO: nahradit skutečnými jmény, rolemi (např. "Vedoucí", "Kuchař", "Navigátor") a názvy skupin
export const crewGroups: CrewGroup[] = [
  {
    title: "Žebráci",
    members: [
      { name: "Účastník 1", role: "Role", avatar: "images/landing/clovek-1.svg" },
      { name: "Účastník 2", role: "Role", avatar: "images/landing/clovek-2.svg" },
      { name: "Účastník 3", role: "Role", avatar: "images/landing/clovek-3.svg" },
      { name: "Účastník 4", role: "Role", avatar: "images/landing/clovek-1.svg" },
      { name: "Účastník 5", role: "Role", avatar: "images/landing/clovek-2.svg" },
    ],
  },
  {
    title: "Protektorát",
    members: [
      { name: "Účastník 6", role: "Role", avatar: "images/landing/clovek-3.svg" },
      { name: "Účastník 7", role: "Role", avatar: "images/landing/clovek-1.svg" },
      { name: "Účastník 8", role: "Role", avatar: "images/landing/clovek-2.svg" },
    ],
  },
];
