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
    description: "Type Eén is consciëntieus en ethisch, met een sterk gevoel voor goed en fout. Ze zijn leraren, verbeteraars en idealisten die altijd dingen beter willen maken, alles volgens een hoge standaard van hun overtuigingen. Ze zijn principieel, doelgericht, en willen leven met een gevoel van missie, en zijn bang om fouten te maken. Ze worstelen vaak met ongeduld en boosheid. In hun beste vorm zijn ze wijs, onderscheidend, realistisch en nobele idealisten die de wereld beter kunnen maken.",
    strengths: ["Ethisch", "Georganiseerd", "Betrouwbaar", "Verantwoordelijk", "Verbeterend", "Rationeel"],
    weaknesses: ["Perfectionistisch", "Kritisch", "Inflexibel", "Zelfkritisch", "Ongeduldig", "Moraliserend"]
  },
  {
    id: 2,
    name: "Type 2 - De Helper",
    description: "Type Twee is zorgzaam en ondersteunend, empathisch en oprecht bezorgd om anderen. Ze zijn vriendelijk, grootmoedig en zelfopofferend, maar kunnen ook sentimenteel, vleiend en opdringerig worden. Ze zijn gedreven door de behoefte om geliefd te zijn en nodig te zijn. In hun best vorm geven Tweeën onvoorwaardelijke liefde aan zichzelf en anderen. Ze zijn meelevend, attent en hebben een warm hart.",
    strengths: ["Zorgzaam", "Empathisch", "Attent", "Behulpzaam", "Warm", "Genereus"],
    weaknesses: ["Zelfopofferend", "Afhankelijk van waardering", "Indirect met eigen behoeften", "Manipulatief", "Opdringerig"]
  },
  {
    id: 3,
    name: "Type 3 - De Presteerder",
    description: "Type Drie is ambitieus, aanpassingsvermogen en imago-bewust. Ze zijn charmante, energieke mensen die gedreven worden door de behoefte aan erkenning en succes. Ze zijn diplomatiek en bekwaam, maar kunnen ook te veel focussen op taken en presteren, soms ten koste van hun persoonlijke relaties. Ze zijn erg effectief maar kunnen hun identiteit verliezen in hun verlangen naar erkenning. In hun beste vorm zijn ze authentiek, zelfaccepterend en een voorbeeld voor anderen.",
    strengths: ["Efficiënt", "Ambitieus", "Aanpassingsvermogen", "Resultaatgericht", "Energiek", "Doelgericht"],
    weaknesses: ["Imago-bewust", "Workaholic", "Competitief", "Obsessief over succes", "Vermijden van kwetsbaarheid"]
  },
  {
    id: 4,
    name: "Type 4 - De Individualist",
    description: "Type Vier is gevoelig, introvert en expressief, vaak creatief en persoonlijk. Ze zijn emotioneel eerlijk, authentiek en gereserveerd, op zoek naar uniekheid en diepgang in hun relaties. Ze bezitten een diep bewustzijn van persoonlijke emoties. Ze kunnen echter ook chaotisch en humeurig zijn, en zich soms afgescheiden voelen van anderen. In hun beste vorm zijn ze geïnspireerd en creatief, in staat om hun persoonlijke ervaringen om te zetten in iets waardevols voor anderen.",
    strengths: ["Creatief", "Authentiek", "Empathisch", "Zelfinzicht", "Expressief", "Diepgang"],
    weaknesses: ["Stemmingswisselingen", "Zelfgerichtheid", "Melancholisch", "Gevoel van ontoereikendheid", "Afgunst"]
  },
  {
    id: 5,
    name: "Type 5 - De Waarnemer",
    description: "Type Vijf is alert, scherpzinnig en nieuwsgierig. Ze zijn in staat om zich te concentreren en zich te verdiepen in het ontwikkelen van complexe ideeën en vaardigheden. Ze zijn onafhankelijk, innovatief en vindingrijk, vaak intens bezig met hun gedachten en intellectuele interesses. Ze streven naar kennis en begrip en kunnen soms afstandelijk en gedetacheerd worden, zich terugtrekken in hun gedachten. In hun beste vorm zijn ze visionair, objectief en wijs.",
    strengths: ["Analytisch", "Objectief", "Perceptief", "Intellectueel", "Onafhankelijk", "Vooruitdenkend"],
    weaknesses: ["Gedetacheerd", "Afstandelijk", "Geïsoleerd", "Verwaarlozend van fysieke behoeften", "Gevoelsmatig afgestompt"]
  },
  {
    id: 6,
    name: "Type 6 - De Loyalist",
    description: "Type Zes is verantwoordelijk, betrouwbaar en hardwerkend. Ze zijn trouw, van nature angstig en wantrouwend, maar ook toegewijd, beschermend en ondersteunend. Ze hebben een sterk gevoel van loyaliteit en verdedigen hun geliefden, maar kunnen ook defensief, angstig en soms paranoïde zijn. In hun beste vorm zijn ze moedig, coöperatief en creatief probleemoplossers, in staat om vertrouwen op te bouwen ondanks hun angsten.",
    strengths: ["Loyaal", "Verantwoordelijk", "Probleemoplossend", "Voorzichtig", "Betrouwbaar", "Werkethiek"],
    weaknesses: ["Angstig", "Wantrouwig", "Besluiteloos", "Defensive", "Controlerend", "Zwart-wit denken"]
  },
  {
    id: 7,
    name: "Type 7 - De Enthousiasteling",
    description: "Type Zeven is veelzijdig, optimistisch en spontaan. Ze zijn levendig, veelzijdig en bezield, op zoek naar positieve ervaringen. Ze houden van plezier en nieuwe uitdagingen. Ze benaderen het leven met enthousiasme en kunnen veel activiteiten en plannen tegelijk uitvoeren. Aan de andere kant kunnen ze impulsief, ongedisciplineerd en rusteloze worden. In hun beste vorm kanaliseren ze hun energie in waardevolle activiteiten en brengen ze vreugde aan anderen.",
    strengths: ["Optimistisch", "Enthousiast", "Veelzijdig", "Spontaan", "Vindingrijk", "Avontuurlijk"],
    weaknesses: ["Impulsief", "Ongeconcentreerd", "Escapistisch", "Oppervlakkig", "Vermijden van pijn", "Verspreid in aandacht"]
  },
  {
    id: 8,
    name: "Type 8 - De Uitdager",
    description: "Type Acht is zelfverzekerd, sterk en assertief. Ze zijn beschermend, doortastend en besluitvaardig, belast met de behoefte om impact te hebben op de wereld om hen heen. Ze hebben een sterke intuïtie en reageren instinctief op situaties. Ze beschermen graag de kwetsbaren, maar kunnen ook dominant, intimiderend en confronterend zijn. In hun beste vorm gebruiken ze hun kracht om anderen te verdedigen en te verheffen.",
    strengths: ["Zelfverzekerd", "Besluitvaardig", "Beschermend", "Sterk", "Assertief", "Rechtvaardig"],
    weaknesses: ["Dominant", "Controlerend", "Confronterend", "Intimiderend", "Ongeduldig", "Wantrouwend"]
  },
  {
    id: 9,
    name: "Type 9 - De Vredestichter",
    description: "Type Negen is accepterend, vertrouwend en stabiel. Ze zijn rustig, ontspannen en ondersteunend, met een sterk vermogen om conflicten te bemiddelen en verschillende perspectieven te zien. Ze zoeken naar harmonie en vrede in hun omgeving. Aan de andere kant kunnen ze ook passief en afgeleid raken, en hun eigen prioriteiten negeren. In hun beste vorm zijn ze geaard, in vrede met zichzelf en in staat om echte verbinding met zichzelf en anderen te creëren.",
    strengths: ["Vreedzaam", "Aanvaardend", "Geduldig", "Bemiddelend", "Kalm", "Medelevend"],
    weaknesses: ["Passief", "Indecisief", "Ontwijkend van conflict", "Koppig", "Zelfvergeten", "Uitstelgedrag"]
  }
];