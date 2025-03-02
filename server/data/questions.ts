
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
  {
    id: 5,
    text: "Ik merk snel op wat verbeterd kan worden",
    type: 1
  },
  {
    id: 6,
    text: "Ik vind het moeilijk om fouten te maken",
    type: 1
  },
  {
    id: 7,
    text: "Ik vind het belangrijk om dingen op de juiste manier te doen",
    type: 1
  },
  {
    id: 8,
    text: "Ik kan kritisch zijn over mezelf en anderen",
    type: 1
  },
  {
    id: 9,
    text: "Ik ben vaak bezorgd over het maken van fouten",
    type: 1
  },
  {
    id: 10,
    text: "Ik heb hoge verwachtingen van mezelf",
    type: 1
  },
  {
    id: 11,
    text: "Ik voel me verantwoordelijk om dingen te verbeteren",
    type: 1
  },
  {
    id: 12,
    text: "Ik kan soms moeilijk ontspannen totdat alles perfect is",
    type: 1
  },
  {
    id: 13,
    text: "Ik raak gefrustreerd wanneer anderen niet aan mijn standaarden voldoen",
    type: 1
  },
  {
    id: 14,
    text: "Ik kan intens zijn in mijn streven naar het juiste",
    type: 1
  },

  // Type 2 - De Helper
  {
    id: 15,
    text: "Ik voel me verantwoordelijk voor het welzijn van anderen",
    type: 2
  },
  {
    id: 16,
    text: "Ik help anderen graag met hun problemen",
    type: 2
  },
  {
    id: 17,
    text: "Ik vind het moeilijk om 'nee' te zeggen als iemand om hulp vraagt",
    type: 2
  },
  {
    id: 18,
    text: "Ik wil graag nodig zijn voor anderen",
    type: 2
  },
  {
    id: 19,
    text: "Ik voel intuïtief aan wat anderen nodig hebben",
    type: 2
  },
  {
    id: 20,
    text: "Ik stel de behoeften van anderen vaak boven die van mijzelf",
    type: 2
  },
  {
    id: 21,
    text: "Ik vind het belangrijk om geliefd te zijn",
    type: 2
  },
  {
    id: 22,
    text: "Ik heb de neiging om voor anderen te zorgen",
    type: 2
  },
  {
    id: 23,
    text: "Ik voel me goed wanneer ik anderen kan helpen",
    type: 2
  },
  {
    id: 24,
    text: "Ik kan moeilijk mijn eigen behoeften uiten",
    type: 2
  },
  {
    id: 25,
    text: "Ik vind het moeilijk om hulp te vragen voor mezelf",
    type: 2
  },
  {
    id: 26,
    text: "Ik voel me soms onbegrepen wanneer mijn hulp niet gewaardeerd wordt",
    type: 2
  },
  {
    id: 27,
    text: "Ik vind het moeilijk om grenzen te stellen in relaties",
    type: 2
  },
  {
    id: 28,
    text: "Ik kan me schuldig voelen als ik niet aan de verwachtingen van anderen voldoe",
    type: 2
  },

  // Type 3 - De Presteerder
  {
    id: 29,
    text: "Ik ben ambitieus en wil graag succesvol zijn",
    type: 3
  },
  {
    id: 30,
    text: "Ik ben gefocust op het bereiken van mijn doelen",
    type: 3
  },
  {
    id: 31,
    text: "Ik vind het belangrijk wat anderen van mij vinden",
    type: 3
  },
  {
    id: 32,
    text: "Ik werk hard om de beste te zijn in wat ik doe",
    type: 3
  },
  {
    id: 33,
    text: "Ik ben efficiënt en resultaatgericht",
    type: 3
  },
  {
    id: 34,
    text: "Ik pas me gemakkelijk aan aan wat in een situatie verwacht wordt",
    type: 3
  },
  {
    id: 35,
    text: "Ik ben goed in het presenteren van mezelf",
    type: 3
  },
  {
    id: 36,
    text: "Ik ben competitief ingesteld",
    type: 3
  },
  {
    id: 37,
    text: "Ik vind het moeilijk om stil te zitten en niets te doen",
    type: 3
  },
  {
    id: 38,
    text: "Ik meet mijn waarde af aan mijn prestaties",
    type: 3
  },
  {
    id: 39,
    text: "Ik voel me soms leeg wanneer ik niet productief ben",
    type: 3
  },
  {
    id: 40,
    text: "Ik kan me sterk identificeren met mijn werk of carrière",
    type: 3
  },
  {
    id: 41,
    text: "Ik vermijd situaties waarin ik zou kunnen falen",
    type: 3
  },
  {
    id: 42,
    text: "Ik vind het belangrijk om erkend te worden voor mijn inspanningen",
    type: 3
  },

  // Type 4 - De Individualist
  {
    id: 43,
    text: "Ik voel me vaak anders dan anderen",
    type: 4
  },
  {
    id: 44,
    text: "Ik ben op zoek naar mijn unieke identiteit",
    type: 4
  },
  {
    id: 45,
    text: "Ik ervaar emoties intenser dan de meeste mensen",
    type: 4
  },
  {
    id: 46,
    text: "Ik verlang naar diepgang en authenticiteit in relaties",
    type: 4
  },
  {
    id: 47,
    text: "Ik word aangetrokken tot het melancholische of het nostalgische",
    type: 4
  },
  {
    id: 48,
    text: "Ik ben gevoelig voor schoonheid en kunst",
    type: 4
  },
  {
    id: 49,
    text: "Ik kan me snel afgewezen of onbegrepen voelen",
    type: 4
  },
  {
    id: 50,
    text: "Ik voel me regelmatig onvervuld of dat er iets ontbreekt in mijn leven",
    type: 4
  },
  {
    id: 51,
    text: "Ik heb een rijke verbeelding en innerlijke wereld",
    type: 4
  },
  {
    id: 52,
    text: "Ik kan me moeilijk verbinden met oppervlakkige gesprekken",
    type: 4
  },
  {
    id: 53,
    text: "Ik voel me soms zowel bijzonder als tekortschietend",
    type: 4
  },
  {
    id: 54,
    text: "Ik vergelijk mezelf vaak met anderen",
    type: 4
  },
  {
    id: 55,
    text: "Ik ben op zoek naar een diepere betekenis in het leven",
    type: 4
  },
  {
    id: 56,
    text: "Ik kan verlangen naar wat ik niet heb in plaats van te waarderen wat ik wel heb",
    type: 4
  },

  // Type 5 - De Waarnemer
  {
    id: 57,
    text: "Ik observeer liever dan dat ik direct deelneem",
    type: 5
  },
  {
    id: 58,
    text: "Ik heb behoefte aan veel tijd alleen",
    type: 5
  },
  {
    id: 59,
    text: "Ik analyseer situaties grondig voordat ik handel",
    type: 5
  },
  {
    id: 60,
    text: "Ik verzamel graag kennis over onderwerpen die mij interesseren",
    type: 5
  },
  {
    id: 61,
    text: "Ik bescherm mijn privacy en persoonlijke ruimte",
    type: 5
  },
  {
    id: 62,
    text: "Ik voel me soms overspoeld door emotionele situaties",
    type: 5
  },
  {
    id: 63,
    text: "Ik ben terughoudend in het delen van persoonlijke informatie",
    type: 5
  },
  {
    id: 64,
    text: "Ik heb een sterke behoefte om competent en kundig te zijn",
    type: 5
  },
  {
    id: 65,
    text: "Ik waardeer intellectuele diepgang",
    type: 5
  },
  {
    id: 66,
    text: "Ik kan me terugtrekken wanneer ik me onder druk voel staan",
    type: 5
  },
  {
    id: 67,
    text: "Ik ben spaarzaam met mijn energie en middelen",
    type: 5
  },
  {
    id: 68,
    text: "Ik vind het uitdagend om mijn gevoelens direct te uiten",
    type: 5
  },
  {
    id: 69,
    text: "Ik kan gefascineerd raken door complexe ideeën of theorieën",
    type: 5
  },
  {
    id: 70,
    text: "Ik ben vaak in mijn hoofd en denk veel na",
    type: 5
  },

  // Type 6 - De Loyalist
  {
    id: 71,
    text: "Ik denk vaak na over wat er mis zou kunnen gaan",
    type: 6
  },
  {
    id: 72,
    text: "Ik ben voorzichtig en let op gevaren",
    type: 6
  },
  {
    id: 73,
    text: "Ik heb moeite om belangrijke beslissingen te nemen",
    type: 6
  },
  {
    id: 74,
    text: "Ik zoek bevestiging en steun bij anderen",
    type: 6
  },
  {
    id: 75,
    text: "Ik ben loyaal aan mensen en groepen die ik vertrouw",
    type: 6
  },
  {
    id: 76,
    text: "Ik ben gevoelig voor de intenties van anderen",
    type: 6
  },
  {
    id: 77,
    text: "Ik heb een sterk rechtvaardigheidsgevoel",
    type: 6
  },
  {
    id: 78,
    text: "Ik test mensen soms om te zien of ze betrouwbaar zijn",
    type: 6
  },
  {
    id: 79,
    text: "Ik kan zowel meegaand als rebels zijn, afhankelijk van de situatie",
    type: 6
  },
  {
    id: 80,
    text: "Ik bereid me voor op het ergste scenario",
    type: 6
  },
  {
    id: 81,
    text: "Ik ben goed in het zien van potentiële problemen",
    type: 6
  },
  {
    id: 82,
    text: "Ik kan snel angstig worden in onzekere situaties",
    type: 6
  },
  {
    id: 83,
    text: "Ik vind veiligheid en zekerheid belangrijk",
    type: 6
  },
  {
    id: 84,
    text: "Ik heb de neiging om autoriteit zowel te respecteren als te wantrouwen",
    type: 6
  },

  // Type 7 - De Enthousiasteling
  {
    id: 85,
    text: "Ik houd van nieuwe ervaringen en avontuur",
    type: 7
  },
  {
    id: 86,
    text: "Ik heb veel verschillende interesses en projecten",
    type: 7
  },
  {
    id: 87,
    text: "Ik focus me liever op positieve mogelijkheden dan op problemen",
    type: 7
  },
  {
    id: 88,
    text: "Ik vind het moeilijk om me te beperken tot één ding",
    type: 7
  },
  {
    id: 89,
    text: "Ik ben optimistisch en enthousiast over de toekomst",
    type: 7
  },
  {
    id: 90,
    text: "Ik vermijd pijnlijke gevoelens of negatieve situaties",
    type: 7
  },
  {
    id: 91,
    text: "Ik kan me snel vervelen met routines",
    type: 7
  },
  {
    id: 92,
    text: "Ik zie overal mogelijkheden en kansen",
    type: 7
  },
  {
    id: 93,
    text: "Ik waardeer vrijheid en onafhankelijkheid",
    type: 7
  },
  {
    id: 94,
    text: "Ik ben spontaan en hou van improvisatie",
    type: 7
  },
  {
    id: 95,
    text: "Ik kan moeite hebben met het nakomen van verplichtingen",
    type: 7
  },
  {
    id: 96,
    text: "Ik ben goed in het bedenken van nieuwe ideeën en plannen",
    type: 7
  },
  {
    id: 97,
    text: "Ik heb de neiging om dingen te overidealiseren",
    type: 7
  },
  {
    id: 98,
    text: "Ik vind het moeilijk om mijn verlangens te begrenzen",
    type: 7
  },

  // Type 8 - De Uitdager
  {
    id: 99,
    text: "Ik neem graag de leiding in situaties",
    type: 8
  },
  {
    id: 100,
    text: "Ik zeg direct waar het op staat",
    type: 8
  },
  {
    id: 101,
    text: "Ik bescherm mensen die ik belangrijk vind",
    type: 8
  },
  {
    id: 102,
    text: "Ik houd van uitdagingen en confrontaties",
    type: 8
  },
  {
    id: 103,
    text: "Ik ben assertief en maak mijn aanwezigheid voelbaar",
    type: 8
  },
  {
    id: 104,
    text: "Ik vertrouw op mijn eigen instincten en kracht",
    type: 8
  },
  {
    id: 105,
    text: "Ik vind het belangrijk om controle te hebben over mijn eigen leven",
    type: 8
  },
  {
    id: 106,
    text: "Ik kan intens zijn in mijn reacties",
    type: 8
  },
  {
    id: 107,
    text: "Ik wil rechtvaardigheid voor mensen die benadeeld worden",
    type: 8
  },
  {
    id: 108,
    text: "Ik kan moeilijk mijn kwetsbaarheid tonen",
    type: 8
  },
  {
    id: 109,
    text: "Ik wil sterk overkomen en vermijd zwakte",
    type: 8
  },
  {
    id: 110,
    text: "Ik ben bereid om voor anderen op te komen",
    type: 8
  },
  {
    id: 111,
    text: "Ik kan dominant zijn in relaties",
    type: 8
  },
  {
    id: 112,
    text: "Ik waardeer eerlijkheid boven tactvolle communicatie",
    type: 8
  },

  // Type 9 - De Vredestichter
  {
    id: 113,
    text: "Ik vermijd conflicten en onaangename situaties",
    type: 9
  },
  {
    id: 114,
    text: "Ik vind het prettig als alles rustig en harmonieus is",
    type: 9
  },
  {
    id: 115,
    text: "Ik pas me gemakkelijk aan anderen aan",
    type: 9
  },
  {
    id: 116,
    text: "Ik heb moeite om prioriteiten te stellen en keuzes te maken",
    type: 9
  },
  {
    id: 117,
    text: "Ik kan goed verschillende standpunten begrijpen",
    type: 9
  },
  {
    id: 118,
    text: "Ik word kalm in stressvolle situaties",
    type: 9
  },
  {
    id: 119,
    text: "Ik ga soms te veel op in anderen en verlies mezelf",
    type: 9
  },
  {
    id: 120,
    text: "Ik vind het moeilijk om nee te zeggen",
    type: 9
  },
  {
    id: 121,
    text: "Ik vind innerlijke vrede en rust belangrijk",
    type: 9
  },
  {
    id: 122,
    text: "Ik kan passief worden als ik onder druk sta",
    type: 9
  },
  {
    id: 123,
    text: "Ik vermijd het uiten van woede of negatieve gevoelens",
    type: 9
  },
  {
    id: 124,
    text: "Ik stel dingen vaak uit",
    type: 9
  },
  {
    id: 125,
    text: "Ik kan gemakkelijk afgeleid raken van wat ik aan het doen ben",
    type: 9
  },
  {
    id: 126,
    text: "Ik vind het fijn om anderen tevreden te stellen",
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
    description: "Type Drie is ambitieus, enthousiast en zelfverzekerd. Ze zijn resultaatgericht, pragmatisch en efficiënt. Ze zijn op hun best wanneer ze hun talenten inzetten om waardevolle bijdragen te leveren. Ze worstelen met de vrees om waardeloos te zijn. Ze kunnen zich zo identificeren met hun imago dat ze het contact met hun eigen gevoelens verliezen. In hun beste vorm zijn Drieën authentiek, zelfaccepterend en een ware inspiratie voor anderen.",
    strengths: ["Ambitieus", "Efficiënt", "Aanpassingsvermogen", "Gemotiveerd", "Optimistisch", "Charmant"],
    weaknesses: ["Imago-gericht", "Workaholic", "Competitief", "Oppervlakkig", "Statusgericht", "Vermijdt falen"]
  },
  {
    id: 4,
    name: "Type 4 - De Individualist",
    description: "Type Vier is gevoelig, introvert en eigenzinnig. Ze zijn creatief, persoonlijk en kunnen diepgaand over zichzelf reflecteren. Ze streven naar authenticiteit en zoeken betekenis in het leven. Ze hebben een rijk innerlijk leven en vinden het belangrijk om emoties volledig te ervaren. Ze worstelen met gevoelens van melancholie en het gevoel anders te zijn dan anderen. In hun beste vorm zijn ze inspirerend, authentiek en in staat tot diepe verbinding met zichzelf en anderen.",
    strengths: ["Creatief", "Empathisch", "Authentiek", "Diepgaand", "Zelfbewust", "Emotioneel rijk"],
    weaknesses: ["Melancholisch", "Zelfkritisch", "Jaloers", "Overmatig gevoelig", "Teruggetrokken", "Dramatisch"]
  },
  {
    id: 5,
    name: "Type 5 - De Waarnemer",
    description: "Type Vijf is objectief, nieuwsgierig en analytisch. Ze zijn onafhankelijk, innovatief en in staat om complexe problemen op te lossen. Ze hechten waarde aan kennis, privacy en onafhankelijkheid. Ze worstelen met de vrees onvoldoende voorbereid of incompetent te zijn en trekken zich terug om energie te besparen en te observeren. In hun beste vorm kunnen ze diepgaande inzichten bieden, innovatief denken en complex begrip ontwikkelen.",
    strengths: ["Analytisch", "Objectief", "Onafhankelijk", "Innovatief", "Geconcentreerd", "Observerend"],
    weaknesses: ["Teruggetrokken", "Afstandelijk", "Gereserveerd", "Geïsoleerd", "Intellectualiserend", "Angstig"]
  },
  {
    id: 6,
    name: "Type 6 - De Loyalist",
    description: "Type Zes is betrouwbaar, hardwerkend en verantwoordelijk. Ze zijn goed in het identificeren van problemen en kunnen zowel gezaghebbend als rebels zijn. Ze zijn loyaal aan mensen, principes en groepen die ze vertrouwen. Ze worstelen met angst en twijfel en zoeken zekerheid. Ze kunnen moeite hebben met vertrouwen en autoriteit. In hun beste vorm zijn ze moedig, ondersteunend en betrouwbare partners in het leven.",
    strengths: ["Loyaal", "Verantwoordelijk", "Voorbereid", "Beschermend", "Probleemoplossend", "Samenwerking"],
    weaknesses: ["Angstig", "Besluiteloos", "Wantrouwend", "Rigide", "Zelfkritisch", "Autoriteitsproblemen"]
  },
  {
    id: 7,
    name: "Type 7 - De Enthousiasteling",
    description: "Type Zeven is optimistisch, veelzijdig en spontaan. Ze zijn avontuurlijk, geïnspireerd en productief, altijd op zoek naar nieuwe ervaringen. Ze zijn vaardig in het zien van positieve opties en mogelijkheden. Ze worstelen met de vrees beperkt te worden en iets te missen. Ze kunnen moeite hebben om zich te verbinden en negatieve emoties te verwerken. In hun beste vorm zijn ze dankbaar, tevreden en in staat om diep van het leven te genieten.",
    strengths: ["Optimistisch", "Enthousiast", "Veelzijdig", "Creatief", "Avontuurlijk", "Spontaan"],
    weaknesses: ["Impulsief", "Verstrooid", "Ongeduldig", "Oppervlakkig", "Vermijdend", "Overcommitment"]
  },
  {
    id: 8,
    name: "Type 8 - De Uitdager",
    description: "Type Acht is zelfverzekerd, besluitvaardig en wilskrachtig. Ze zijn beschermend, krachtig en in staat om dingen voor elkaar te krijgen. Ze zijn direct, zelfverzekerd en sterk aanwezig. Ze worstelen met kwetsbaarheid en kunnen confronterend worden om controle te houden. Ze hebben een sterk rechtvaardigheidsgevoel en strijden voor de zwakkeren. In hun beste vorm zijn ze grootmoedig, heldhaftig en gebruiken ze hun kracht om anderen te beschermen.",
    strengths: ["Krachtig", "Beschermend", "Besluitvaardig", "Direct", "Moedig", "Rechtvaardig"],
    weaknesses: ["Dominant", "Confronterend", "Ongeduldig", "Controlerend", "Intimiderend", "Vermijdt kwetsbaarheid"]
  },
  {
    id: 9,
    name: "Type 9 - De Vredestichter",
    description: "Type Negen is accepterend, vertrouwend en stabiel. Ze zijn geduldig, ondersteunend en kunnen goed luisteren. Ze streven naar innerlijke en uiterlijke vrede en harmonie. Ze worstelen met passiviteit en kunnen belangrijke beslissingen uitstellen. Ze zien meerdere perspectieven, wat tot besluiteloosheid kan leiden. In hun beste vorm zijn ze bemiddelend, verenigend en in staat om innerlijke rust te vinden zonder de buitenwereld te negeren.",
    strengths: ["Geduldig", "Kalm", "Ondersteunend", "Harmonieus", "Accepterend", "Inclusief"],
    weaknesses: ["Passief", "Besluiteloos", "Vermijdend", "Zelfontkennend", "Uitstelgedrag", "Koppig"]
  }
];
