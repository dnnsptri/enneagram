import { Question, EnneagramType } from "./types";

export const questions: Question[] = [
  // Type 1 - De Perfectionist
  {
    id: 1,
    text: "Ik ben georganiseerd en houd van structuur",
    type: 1
  },
  {
    id: 2,
    text: "Ik streef naar perfectie in alles wat ik doe",
    type: 1
  },
  {
    id: 3,
    text: "Ik heb een sterk ontwikkeld geweten",
    type: 1
  },
  {
    id: 4,
    text: "Ik heb duidelijke principes waar ik naar leef",
    type: 1
  },

  // Type 2 - De Helper
  {
    id: 5,
    text: "Ik voel me verantwoordelijk voor het welzijn van anderen",
    type: 2
  },
  {
    id: 6,
    text: "Ik help anderen graag met hun problemen",
    type: 2
  },
  {
    id: 7,
    text: "Ik vind het moeilijk om 'nee' te zeggen als iemand om hulp vraagt",
    type: 2
  },
  {
    id: 8,
    text: "Ik wil graag nodig zijn voor anderen",
    type: 2
  },

  // Type 3 - De Presteerder
  {
    id: 9,
    text: "Ik ben ambitieus en wil graag succesvol zijn",
    type: 3
  },
  {
    id: 10,
    text: "Ik ben gefocust op het bereiken van mijn doelen",
    type: 3
  },
  {
    id: 11,
    text: "Ik vind het belangrijk wat anderen van mij vinden",
    type: 3
  },
  {
    id: 12,
    text: "Ik werk hard om de beste te zijn in wat ik doe",
    type: 3
  },

  // Type 4 - De Individualist
  {
    id: 13,
    text: "Ik voel me vaak anders dan anderen",
    type: 4
  },
  {
    id: 14,
    text: "Ik ben op zoek naar mijn unieke identiteit",
    type: 4
  },
  {
    id: 15,
    text: "Ik ervaar emoties intenser dan de meeste mensen",
    type: 4
  },
  {
    id: 16,
    text: "Ik verlang naar diepgang en authenticiteit in relaties",
    type: 4
  },

  // Type 5 - De Waarnemer
  {
    id: 17,
    text: "Ik observeer liever dan dat ik direct deelneem",
    type: 5
  },
  {
    id: 18,
    text: "Ik heb behoefte aan veel tijd alleen",
    type: 5
  },
  {
    id: 19,
    text: "Ik analyseer situaties grondig voordat ik handel",
    type: 5
  },
  {
    id: 20,
    text: "Ik verzamel graag kennis over onderwerpen die mij interesseren",
    type: 5
  },

  // Type 6 - De Loyalist
  {
    id: 21,
    text: "Ik denk vaak na over wat er mis zou kunnen gaan",
    type: 6
  },
  {
    id: 22,
    text: "Ik ben voorzichtig en let op gevaren",
    type: 6
  },
  {
    id: 23,
    text: "Ik heb moeite om belangrijke beslissingen te nemen",
    type: 6
  },
  {
    id: 24,
    text: "Ik zoek bevestiging en steun bij anderen",
    type: 6
  },

  // Type 7 - De Enthousiasteling
  {
    id: 25,
    text: "Ik houd van nieuwe ervaringen en avontuur",
    type: 7
  },
  {
    id: 26,
    text: "Ik heb veel verschillende interesses en projecten",
    type: 7
  },
  {
    id: 27,
    text: "Ik focus me liever op positieve mogelijkheden dan op problemen",
    type: 7
  },
  {
    id: 28,
    text: "Ik vind het moeilijk om me te beperken tot één ding",
    type: 7
  },

  // Type 8 - De Uitdager
  {
    id: 29,
    text: "Ik neem graag de leiding in situaties",
    type: 8
  },
  {
    id: 30,
    text: "Ik zeg direct waar het op staat",
    type: 8
  },
  {
    id: 31,
    text: "Ik bescherm mensen die ik belangrijk vind",
    type: 8
  },
  {
    id: 32,
    text: "Ik houd van uitdagingen en confrontaties",
    type: 8
  },

  // Type 9 - De Vredestichter
  {
    id: 33,
    text: "Ik vermijd conflicten en onaangename situaties",
    type: 9
  },
  {
    id: 34,
    text: "Ik vind het prettig als alles rustig en harmonieus is",
    type: 9
  },
  {
    id: 35,
    text: "Ik pas me gemakkelijk aan anderen aan",
    type: 9
  },
  {
    id: 36,
    text: "Ik heb moeite om prioriteiten te stellen en keuzes te maken",
    type: 9
  }
];

export const enneagramTypes: EnneagramType[] = [
  {
    id: 1,
    name: "Type 1 - De Perfectionist",
    description: "De rationele, idealistisch ingestelde type. Streeft naar perfectie en verbetering, gedreven door een sterk ethisch besef.",
    strengths: ["Ethisch", "Georganiseerd", "Betrouwbaar", "Verantwoordelijk"],
    weaknesses: ["Perfectionistisch", "Kritisch", "Inflexibel", "Zelfkritisch"]
  },
  {
    id: 2,
    name: "Type 2 - De Helper",
    description: "De zorgzame, mensen-georiënteerde type. Voelt zich geroepen om anderen te helpen en wil graag gewaardeerd worden.",
    strengths: ["Zorgzaam", "Empathisch", "Attent", "Behulpzaam"],
    weaknesses: ["Zelfopofferend", "Afhankelijk van waardering", "Indirect met eigen behoeften"]
  },
  {
    id: 3,
    name: "Type 3 - De Presteerder",
    description: "De succesvolle, pragmatische type. Gemotiveerd door prestaties en het maken van een goede indruk.",
    strengths: ["Efficiënt", "Ambitieus", "Aanpassingsvermogen", "Resultaatgericht"],
    weaknesses: ["Imago-bewust", "Workaholic", "Competitief"]
  },
  {
    id: 4,
    name: "Type 4 - De Individualist",
    description: "De gevoelige, introspectieve type. Zoekt naar authenticiteit en diepere betekenis in het leven.",
    strengths: ["Creatief", "Authentiek", "Empathisch", "Zelfinzicht"],
    weaknesses: ["Stemmingswisselingen", "Zelfgerichtheid", "Melancholisch"]
  },
  {
    id: 5,
    name: "Type 5 - De Waarnemer",
    description: "De objectieve, onderzoekende type. Verzamelt kennis en observeert de wereld vanuit een afstand.",
    strengths: ["Analytisch", "Onafhankelijk", "Innovatief", "Observerend"],
    weaknesses: ["Afstandelijk", "Teruggetrokken", "Intellectualiserend"]
  },
  {
    id: 6,
    name: "Type 6 - De Loyalist",
    description: "De toegewijde, veiligheid-zoekende type. Anticiperend op problemen en zoekend naar zekerheid.",
    strengths: ["Loyaal", "Verantwoordelijk", "Voorbereid", "Samenwerkend"],
    weaknesses: ["Angstig", "Besluiteloos", "Wantrouwend"]
  },
  {
    id: 7,
    name: "Type 7 - De Enthousiasteling",
    description: "De optimistische, avontuurlijke type. Op zoek naar positieve ervaringen en nieuwe mogelijkheden.",
    strengths: ["Enthousiast", "Veelzijdig", "Spontaan", "Creatief"],
    weaknesses: ["Ongeconcentreerd", "Impulsief", "Vermijdend"]
  },
  {
    id: 8,
    name: "Type 8 - De Uitdager",
    description: "De krachtige, dominante type. Neemt graag controle en komt op voor zichzelf en anderen.",
    strengths: ["Zelfverzekerd", "Beschermend", "Direct", "Daadkrachtig"],
    weaknesses: ["Confronterend", "Dominant", "Controlerend"]
  },
  {
    id: 9,
    name: "Type 9 - De Vredestichter",
    description: "De rustige, harmonie-zoekende type. Streeft naar innerlijke en uiterlijke vrede.",
    strengths: ["Bemiddelend", "Geduldig", "Begripvol", "Kalmerend"],
    weaknesses: ["Conflictvermijdend", "Besluiteloos", "Passief"]
  }
];