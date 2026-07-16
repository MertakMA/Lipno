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
      { name: "Matěj", role: "Role", avatar: "images/landing/clovek-1.svg" },
      { name: "Štěpán", role: "Role", avatar: "images/landing/clovek-2.svg" },
      { name: "Šutovec", role: "Role", avatar: "images/landing/clovek-3.svg" },
      { name: "Jáchym", role: "Role", avatar: "images/landing/clovek-1.svg" },
      { name: "Vašek", role: "Role", avatar: "images/landing/clovek-2.svg" },
    ],
  },
  {
    title: "Protektorát",
    members: [
      { name: "Kája", role: "Role", avatar: "images/landing/clovek-3.svg" },
      { name: "Natka", role: "Role", avatar: "images/landing/clovek-1.svg" },
      { name: "Anežka", role: "Role", avatar: "images/landing/clovek-2.svg" },
    ],
  },
];
