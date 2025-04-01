import fs from 'fs';

// Read the questions from the text file
const questionsText = fs.readFileSync('fixed_questions.txt', 'utf8');
const lines = questionsText.split('\n').filter(line => line.trim() !== '');

// Parse each line and convert to the Question format
const questions = lines.map(line => {
  const [id, text, type] = line.split('|');
  return {
    id: parseInt(id, 10),
    text,
    type: parseInt(type, 10)
  };
});

// Sort questions by id to ensure they are in the correct order
questions.sort((a, b) => a.id - b.id);

// Generate the output format for questions.ts
const output = `import { Question, EnneagramType } from "./types";

export const questions: Question[] = ${JSON.stringify(questions, null, 2)};

export const enneagramTypes: EnneagramType[] = [
  {
    id: 1,
    name: "De Perfectionist",
    description: "Perfectionisten zijn rationeel en principieel met een sterk gevoel voor goed en fout. Ze streven ernaar om hun idealen na te leven, fouten te vermijden en hun wereld te verbeteren.",
    strengths: [
      "Betrouwbaar en verantwoordelijk",
      "Gedisciplineerd en georganiseerd",
      "Eerlijk en ethisch",
      "Streven naar verbetering en kwaliteit",
      "Principieel en rechtvaardig"
    ],
    weaknesses: [
      "Kunnen te kritisch zijn (voor zichzelf en anderen)",
      "Moeite met flexibiliteit",
      "Perfectionism leidt tot frustratie",
      "Onderdrukte woede en ergernis",
      "Moeite met ontspannen"
    ]
  },
  {
    id: 2,
    name: "De Helper",
    description: "Helpers zijn empathisch, oprecht en warm. Ze zijn zorgzaam en geven graag hulp en ondersteuning aan anderen, maar kunnen hun eigen behoeftes uit het oog verliezen.",
    strengths: [
      "Warm en zorgzaam",
      "Empathisch en attent",
      "Relationeel sterk",
      "Ondersteunend en helpend",
      "Emotioneel expressief"
    ],
    weaknesses: [
      "Kunnen manipulatief worden om waardering te krijgen",
      "Neiging tot zelfopoffering",
      "Verwachten dankbaarheid en erkenning",
      "Verdringen eigen behoeften",
      "Moeite met 'nee' zeggen"
    ]
  },
  {
    id: 3,
    name: "De Presteerder",
    description: "Presteerders zijn ambitieus, aanpassingsgericht en gedreven. Ze streven naar succes en erkenning, en waarderen efficiëntie en resultaten boven alles.",
    strengths: [
      "Energiek en ambitieus",
      "Optimistisch en zelfverzekerd",
      "Efficiënt en resultaatgericht",
      "Aanpassingsvermogen",
      "Inspirerend voor anderen"
    ],
    weaknesses: [
      "Workaholic-neigingen",
      "Imago-bewust tot obsessie",
      "Identiteit gekoppeld aan prestaties",
      "Authenticiteit versus succes",
      "Emotionele disconnectie"
    ]
  },
  {
    id: 4,
    name: "De Individualist",
    description: "Individualisten zijn introspectief, gevoelig en expressief. Ze voelen emoties intens en streven naar authenticiteit en betekenis in hun leven.",
    strengths: [
      "Creatief en expressief",
      "Diepgaand en betekenisvol",
      "Emotioneel bewust en intuïtief",
      "Authentiek en uniek",
      "Compassievol bij lijden"
    ],
    weaknesses: [
      "Melancholisch en somber",
      "Zelf-absorptie en dramatisering",
      "Neiging tot isolement",
      "Gevoelig voor afwijzing",
      "Zwart-wit denken in relaties"
    ]
  },
  {
    id: 5,
    name: "De Onderzoeker",
    description: "Onderzoekers zijn alert, nieuwsgierig en onafhankelijk. Ze verzamelen kennis om zich zeker te voelen en benaderen de wereld op een analytische, afstandelijke manier.",
    strengths: [
      "Analytisch en scherp",
      "Onafhankelijk en zelfvoorzienend",
      "Objectief en nuchter",
      "Observerend en perceptief",
      "Respectvol voor andermans grenzen"
    ],
    weaknesses: [
      "Afstandelijk en teruggetrokken",
      "Extreme behoefte aan privacy",
      "Intellectualiseren van emoties",
      "Minimalistische levensstijl",
      "Moeite met praktische zaken"
    ]
  },
  {
    id: 6,
    name: "De Loyalist",
    description: "Loyalisten zijn verantwoordelijk, betrouwbaar en veiligheidsgericht. Ze anticiperen op problemen en bouwen sterke, loyale relaties met anderen.",
    strengths: [
      "Loyaal en betrouwbaar",
      "Verantwoordelijk en plichtsgetrouw",
      "Vooruitdenkend en voorzichtig",
      "Ondersteunend en samenwerkend",
      "Moedig wanneer het echt nodig is"
    ],
    weaknesses: [
      "Angst en bezorgdheid",
      "Wantrouwen en twijfel",
      "'Worst case scenario' denken",
      "Afhankelijk van autoriteit of rebellie",
      "Besluiteloosheid"
    ]
  },
  {
    id: 7,
    name: "De Enthousiasteling",
    description: "Enthousiastelingen zijn spontaan, veelzijdig en optimistisch. Ze zoeken naar positieve ervaringen en avontuur, en willen mogelijkheden openhouden.",
    strengths: [
      "Energiek en enthousiast",
      "Optimistisch en vrolijk",
      "Creatief en idealistisch",
      "Veelzijdig en flexibel",
      "Avontuurlijk en spontaan"
    ],
    weaknesses: [
      "Moeite met focus en committeren",
      "Vermijden van negatieve emoties",
      "Impulsief en onrustig",
      "Oppervlakkigheid",
      "Overplanning en FOMO"
    ]
  },
  {
    id: 8,
    name: "De Uitdager",
    description: "Uitdagers zijn krachtig, besluitvaardig en zelfverzekerd. Ze streven naar controle over hun omgeving en beschermen zichzelf en anderen tegen zwakte en onrecht.",
    strengths: [
      "Sterk en beschermend",
      "Direct en eerlijk",
      "Besluitvaardig en daadkrachtig",
      "Rechtvaardig en principieel",
      "Moedig en zelfverzekerd"
    ],
    weaknesses: [
      "Confronterend en intimiderend",
      "Controlerend en dominant",
      "Moeite met kwetsbaarheid tonen",
      "Zwart-wit denken",
      "Excessieve onafhankelijkheid"
    ]
  },
  {
    id: 9,
    name: "De Vredestichter",
    description: "Vredestichters zijn ontspannen, accepterend en stabiel. Ze creëren harmonie in hun omgeving en vermijden conflicten om innerlijke vrede te bewaren.",
    strengths: [
      "Geduldig en kalmerend",
      "Accepterend en tolerant",
      "Diplomatiek en bemiddelend",
      "Empathisch en meelevend",
      "Stabiel en betrouwbaar"
    ],
    weaknesses: [
      "Passiviteit en uitstelgedrag",
      "Vermijden van conflict",
      "Onduidelijk in standpunten",
      "Zelfvervreemding",
      "Koppigheid in verandering"
    ]
  }
];`;

// Write the output to a file
fs.writeFileSync('questions_output.ts', output);

console.log('Questions processed successfully!');
console.log(`Total questions processed: ${questions.length}`);