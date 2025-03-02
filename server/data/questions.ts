import { Question, EnneagramType } from "./types";

export const questions: Question[] = [
  // Type 1 - De Perfectionist
  {
    id: 1,
    text: "Ik streef ernaar alles perfect te doen",
    type: 1
  },
  {
    id: 2,
    text: "Ik heb een sterk gevoel voor wat juist en onjuist is",
    type: 1
  },
  {
    id: 3,
    text: "Ik ben kritisch op mezelf en anderen",
    type: 1
  },
  {
    id: 4,
    text: "Ik voel me verantwoordelijk om dingen te verbeteren",
    type: 1
  },

  // Type 2 - De Helper
  {
    id: 5,
    text: "Ik vind het belangrijk om anderen te helpen",
    type: 2
  },
  {
    id: 6,
    text: "Ik stel de behoeften van anderen vaak boven die van mijzelf",
    type: 2
  },
  {
    id: 7,
    text: "Ik wil graag gewaardeerd worden voor mijn zorg voor anderen",
    type: 2
  },
  {
    id: 8,
    text: "Ik voel me verantwoordelijk voor het geluk van anderen",
    type: 2
  },

  // Type 3 - De Presteerder
  {
    id: 9,
    text: "Ik wil graag succesvol zijn en erkenning krijgen",
    type: 3
  },
  {
    id: 10,
    text: "Ik ben competitief en resultaatgericht",
    type: 3
  },
  {
    id: 11,
    text: "Ik pas me aan om een goede indruk te maken",
    type: 3
  },
  {
    id: 12,
    text: "Ik ben efficiënt en doelgericht",
    type: 3
  },

  // Type 4 - De Individualist
  {
    id: 13,
    text: "Ik voel me anders dan anderen",
    type: 4
  },
  {
    id: 14,
    text: "Ik ben gevoelig en creatief",
    type: 4
  },
  {
    id: 15,
    text: "Ik ervaar emoties intens",
    type: 4
  },
  {
    id: 16,
    text: "Ik zoek naar authenticiteit en diepere betekenis",
    type: 4
  },

  // Type 5 - De Waarnemer
  {
    id: 17,
    text: "Ik heb behoefte aan tijd alleen om na te denken",
    type: 5
  },
  {
    id: 18,
    text: "Ik verzamel graag kennis en informatie",
    type: 5
  },
  {
    id: 19,
    text: "Ik observeer liever dan dat ik deelneem",
    type: 5
  },
  {
    id: 20,
    text: "Ik heb moeite met emotionele eisen van anderen",
    type: 5
  },

  // Type 6 - De Loyalist
  {
    id: 21,
    text: "Ik maak me vaak zorgen over wat er mis kan gaan",
    type: 6
  },
  {
    id: 22,
    text: "Ik zoek zekerheid en veiligheid",
    type: 6
  },
  {
    id: 23,
    text: "Ik ben loyaal aan mensen en groepen",
    type: 6
  },
  {
    id: 24,
    text: "Ik twijfel vaak aan mijn beslissingen",
    type: 6
  },

  // Type 7 - De Enthousiasteling
  {
    id: 25,
    text: "Ik hou van nieuwe ervaringen en avontuur",
    type: 7
  },
  {
    id: 26,
    text: "Ik vermijd liever negatieve gevoelens",
    type: 7
  },
  {
    id: 27,
    text: "Ik ben optimistisch en enthousiast",
    type: 7
  },
  {
    id: 28,
    text: "Ik heb moeite met kiezen omdat ik niets wil missen",
    type: 7
  },

  // Type 8 - De Uitdager
  {
    id: 29,
    text: "Ik neem graag de leiding",
    type: 8
  },
  {
    id: 30,
    text: "Ik kom op voor mezelf en anderen",
    type: 8
  },
  {
    id: 31,
    text: "Ik zeg direct wat ik denk",
    type: 8
  },
  {
    id: 32,
    text: "Ik hou van uitdagingen en confrontatie",
    type: 8
  },

  // Type 9 - De Vredestichter
  {
    id: 33,
    text: "Ik vermijd conflicten",
    type: 9
  },
  {
    id: 34,
    text: "Ik pas me makkelijk aan anderen aan",
    type: 9
  },
  {
    id: 35,
    text: "Ik vind het moeilijk om prioriteiten te stellen",
    type: 9
  },
  {
    id: 36,
    text: "Ik zoek naar harmonie en vrede",
    type: 9
  }
];

export const enneagramTypes: EnneagramType[] = [
  {
    id: 1,
    name: "De Perfectionist",
    description: "Ethisch en consciëntieus, met een sterk gevoel voor goed en fout. Streeft naar verbetering en het juiste doen.",
    strengths: ["Verantwoordelijk", "Verbeterend", "Ethisch", "Georganiseerd"],
    weaknesses: ["Kritisch", "Perfectionistisch", "Oordelend", "Inflexibel"]
  },
  {
    id: 2,
    name: "De Helper",
    description: "Zorgzaam en interpersoonlijk, gericht op het helpen en ondersteunen van anderen.",
    strengths: ["Zorgzaam", "Genereus", "Empathisch", "Verbindend"],
    weaknesses: ["Zelfopofferend", "Indirect", "Afhankelijk van waardering"]
  },
  {
    id: 3,
    name: "De Presteerder",
    description: "Succesgericht en aanpassend, streeft naar prestatie en erkenning.",
    strengths: ["Ambitieus", "Efficiënt", "Zelfverzekerd", "Doelgericht"],
    weaknesses: ["Imago-gericht", "Competitief", "Workaholic"]
  },
  {
    id: 4,
    name: "De Individualist",
    description: "Gevoelig en expressief, op zoek naar authenticiteit en betekenis.",
    strengths: ["Creatief", "Intuïtief", "Authentiek", "Diepgaand"],
    weaknesses: ["Melancholisch", "Dramatisch", "Zelfgericht"]
  },
  {
    id: 5,
    name: "De Waarnemer",
    description: "Intens en cerebraal, gericht op kennis en begrip.",
    strengths: ["Analytisch", "Objectief", "Onderzoekend", "Intelligent"],
    weaknesses: ["Teruggetrokken", "Afstandelijk", "Gereserveerd"]
  },
  {
    id: 6,
    name: "De Loyalist",
    description: "Toegewijd en waakzaam, zoekt veiligheid en zekerheid.",
    strengths: ["Loyaal", "Voorbereid", "Verantwoordelijk", "Voorzichtig"],
    weaknesses: ["Angstig", "Twijfelend", "Wantrouwend"]
  },
  {
    id: 7,
    name: "De Enthousiasteling",
    description: "Spontaan en veelzijdig, zoekt positieve ervaringen en mogelijkheden.",
    strengths: ["Optimistisch", "Avontuurlijk", "Veelzijdig", "Energiek"],
    weaknesses: ["Oppervlakkig", "Ongeduldig", "Onrustig"]
  },
  {
    id: 8,
    name: "De Uitdager",
    description: "Krachtig en dominant, gericht op controle en rechtvaardigheid.",
    strengths: ["Sterk", "Beschermend", "Besluitvaardig", "Direct"],
    weaknesses: ["Controlerend", "Confronterend", "Intimiderend"]
  },
  {
    id: 9,
    name: "De Vredestichter",
    description: "Accepterend en harmonieus, streeft naar vrede en eenheid.",
    strengths: ["Diplomatiek", "Kalmerend", "Geduldig", "Begripvol"],
    weaknesses: ["Passief", "Besluiteloos", "Conflictvermijdend"]
  }
];