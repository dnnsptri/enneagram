import { Question, EnneagramType } from "./types";

export const questions: Question[] = [
  {
    "id": 1,
    "text": "Ik heb een sterk gevoel voor goed en fout en handel daar consequent naar.",
    "type": 1
  },
  {
    "id": 2,
    "text": "Ik ben kritisch op mezelf en op anderen als iets niet volgens de regels of normen verloopt.",
    "type": 1
  },
  {
    "id": 3,
    "text": "Ik streef naar perfectie en heb moeite met fouten accepteren.",
    "type": 1
  },
  {
    "id": 4,
    "text": "Ik voel me verantwoordelijk voor het verbeteren van de wereld om me heen.",
    "type": 1
  },
  {
    "id": 5,
    "text": "Ik heb een innerlijke stem die me voortdurend aanspoort om het juiste te doen.",
    "type": 1
  },
  {
    "id": 6,
    "text": "Ik vind het lastig om te ontspannen als er nog dingen niet af zijn of niet kloppen.",
    "type": 1
  },
  {
    "id": 7,
    "text": "Ik geloof dat hard werken en discipline noodzakelijk zijn voor succes.",
    "type": 1
  },
  {
    "id": 8,
    "text": "Ik kan frustratie voelen als anderen slordig, inconsequent of onverantwoordelijk zijn.",
    "type": 1
  },
  {
    "id": 9,
    "text": "Ik heb hoge ethische en morele standaarden die ik belangrijk vind om na te leven.",
    "type": 1
  },
  {
    "id": 10,
    "text": "Ik kan me schuldig voelen als ik niet aan mijn eigen hoge verwachtingen voldoe.",
    "type": 1
  },
  {
    "id": 11,
    "text": "Ik wil graag dat dingen georganiseerd en geordend zijn, anders raak ik geïrriteerd.",
    "type": 1
  },
  {
    "id": 12,
    "text": "Ik heb moeite met spontaniteit omdat ik graag alles plan en controleer.",
    "type": 1
  },
  {
    "id": 13,
    "text": "Ik voel me ongemakkelijk bij chaos of onduidelijkheid.",
    "type": 1
  },
  {
    "id": 14,
    "text": "Ik vind het lastig om kritiek te ontvangen, omdat ik al erg streng ben voor mezelf.",
    "type": 1
  },
  {
    "id": 15,
    "text": "Ik waardeer eerlijkheid en integriteit enorm en verwacht dat ook van anderen.",
    "type": 1
  },
  {
    "id": 16,
    "text": "Ik heb de neiging om dingen beter te weten en wil anderen graag corrigeren als ze ongelijk hebben.",
    "type": 1
  },
  {
    "id": 17,
    "text": "Ik voel me het gelukkigst wanneer ik anderen kan helpen.",
    "type": 2
  },
  {
    "id": 17,
    "text": "Ik vind het belangrijk om te leven volgens duidelijke morele principes.",
    "type": 1
  },
  {
    "id": 18,
    "text": "Ik heb de neiging om andermans behoeften boven die van mezelf te stellen.",
    "type": 2
  },
  {
    "id": 18,
    "text": "Ik voel me ongemakkelijk als regels worden genegeerd of omzeild.",
    "type": 1
  },
  {
    "id": 19,
    "text": "Ik voel me gewaardeerd als mensen me laten weten dat ik belangrijk voor hen ben.",
    "type": 2
  },
  {
    "id": 19,
    "text": "Ik kan me ergeren aan onzorgvuldigheid of slordigheid van anderen.",
    "type": 1
  },
  {
    "id": 20,
    "text": "Ik heb moeite met het zeggen van 'nee' omdat ik anderen niet wil teleurstellen.",
    "type": 2
  },
  {
    "id": 20,
    "text": "Ik heb de neiging om situaties in te delen in 'goed' of 'fout'.",
    "type": 1
  },
  {
    "id": 21,
    "text": "Ik wil graag nodig zijn en voel me soms overbodig als anderen mij niet om hulp vragen.",
    "type": 2
  },
  {
    "id": 21,
    "text": "Ik voel een constante drang om mezelf en alles om me heen te verbeteren.",
    "type": 1
  },
  {
    "id": 22,
    "text": "Ik ben goed in het aanvoelen van andermans emoties en behoeften.",
    "type": 2
  },
  {
    "id": 22,
    "text": "Ik leg de lat hoog voor mezelf en anderen.",
    "type": 1
  },
  {
    "id": 23,
    "text": "Ik haal veel voldoening uit het verzorgen en ondersteunen van anderen.",
    "type": 2
  },
  {
    "id": 23,
    "text": "Ik word regelmatig door anderen ervaren als principieel of streng.",
    "type": 1
  },
  {
    "id": 24,
    "text": "Ik heb de neiging om cadeaus, aandacht of hulp aan te bieden zonder dat iemand daarom heeft gevraagd.",
    "type": 2
  },
  {
    "id": 24,
    "text": "Ik vind het moeilijk om compromissen te sluiten op gebieden die ik belangrijk vind.",
    "type": 1
  },
  {
    "id": 25,
    "text": "Ik voel me gekwetst als ik het gevoel heb dat mijn inzet niet wordt erkend.",
    "type": 2
  },
  {
    "id": 25,
    "text": "Ik heb een sterk rechtvaardigheidsgevoel en streef naar eerlijkheid.",
    "type": 1
  },
  {
    "id": 26,
    "text": "Ik wil graag geliefd worden en doe veel moeite om dat te bereiken.",
    "type": 2
  },
  {
    "id": 26,
    "text": "Ik ben vaak bezig met het naleven van regels en procedures.",
    "type": 1
  },
  {
    "id": 27,
    "text": "Ik kan soms manipulatief zijn om ervoor te zorgen dat anderen mij waarderen.",
    "type": 2
  },
  {
    "id": 28,
    "text": "Ik geef veel liefde en steun, maar vind het moeilijk om dat zelf te ontvangen.",
    "type": 2
  },
  {
    "id": 29,
    "text": "Ik kan jaloers worden als iemand anders meer aandacht krijgt dan ik.",
    "type": 2
  },
  {
    "id": 30,
    "text": "Ik heb moeite om hulp te vragen, omdat ik niet als zwak of afhankelijk wil overkomen.",
    "type": 2
  },
  {
    "id": 31,
    "text": "Ik ben erg loyaal en zal er altijd voor de mensen zijn die ik liefheb.",
    "type": 2
  },
  {
    "id": 32,
    "text": "Ik voel me soms uitgeput door alles wat ik voor anderen doe, maar wil niet klagen.",
    "type": 2
  },
  {
    "id": 33,
    "text": "Ik wil succesvol zijn en ben bereid hard te werken om dat te bereiken.",
    "type": 3
  },
  {
    "id": 34,
    "text": "Ik meet mijn eigenwaarde vaak af aan wat ik heb bereikt.",
    "type": 3
  },
  {
    "id": 35,
    "text": "Ik ben competitief en wil de beste zijn in wat ik doe.",
    "type": 3
  },
  {
    "id": 36,
    "text": "Ik voel me ongemakkelijk als ik niet productief of bezig ben.",
    "type": 3
  },
  {
    "id": 37,
    "text": "Ik pas me gemakkelijk aan aan mijn omgeving om een goede indruk te maken.",
    "type": 3
  },
  {
    "id": 38,
    "text": "Ik houd ervan om erkenning en waardering te krijgen voor mijn prestaties.",
    "type": 3
  },
  {
    "id": 39,
    "text": "Ik ben resultaatgericht en verlies zelden mijn doelen uit het oog.",
    "type": 3
  },
  {
    "id": 40,
    "text": "Ik vind het belangrijk om succesvol over te komen, ook als ik me onzeker voel.",
    "type": 3
  },
  {
    "id": 41,
    "text": "Ik geloof dat mensen mij waarderen om wat ik doe, niet om wie ik ben.",
    "type": 3
  },
  {
    "id": 42,
    "text": "Ik voel me rusteloos als ik geen duidelijke doelen heb om naartoe te werken.",
    "type": 3
  },
  {
    "id": 43,
    "text": "Ik ben efficiënt en houd van praktische oplossingen.",
    "type": 3
  },
  {
    "id": 44,
    "text": "Ik vermijd falen en zal er alles aan doen om succesvol te blijven.",
    "type": 3
  },
  {
    "id": 45,
    "text": "Ik kan moeite hebben met het tonen van kwetsbaarheid.",
    "type": 3
  },
  {
    "id": 46,
    "text": "Ik ben gefocust op imago en hoe anderen mij zien.",
    "type": 3
  },
  {
    "id": 47,
    "text": "Ik voel me ongemakkelijk als ik niet goed presteer of als iemand anders beter is dan ik.",
    "type": 3
  },
  {
    "id": 48,
    "text": "Ik kan ongeduldig worden als anderen niet net zo hard werken als ik.",
    "type": 3
  },
  {
    "id": 49,
    "text": "Ik voel me anders dan anderen en heb het gevoel dat niemand me echt begrijpt.",
    "type": 4
  },
  {
    "id": 50,
    "text": "Ik hecht veel waarde aan authenticiteit en wil trouw blijven aan mezelf.",
    "type": 4
  },
  {
    "id": 51,
    "text": "Ik ervaar mijn emoties diep en intens, zowel de mooie als de pijnlijke.",
    "type": 4
  },
  {
    "id": 52,
    "text": "Ik heb een sterk verlangen naar een diepere betekenis in het leven.",
    "type": 4
  },
  {
    "id": 53,
    "text": "Ik voel me soms aangetrokken tot melancholie en nostalgie.",
    "type": 4
  },
  {
    "id": 54,
    "text": "Ik kan me intens gelukkig voelen, maar ook diep bedroefd, soms op dezelfde dag.",
    "type": 4
  },
  {
    "id": 55,
    "text": "Ik wil graag uniek en bijzonder zijn, niet zoals iedereen.",
    "type": 4
  },
  {
    "id": 56,
    "text": "Ik heb de neiging mezelf te vergelijken met anderen en voel me dan soms tekortschieten.",
    "type": 4
  },
  {
    "id": 57,
    "text": "Ik ben creatief en zoek vaak expressie in kunst, muziek of schrijven.",
    "type": 4
  },
  {
    "id": 58,
    "text": "Ik voel me aangetrokken tot schoonheid en diepgang in kunst, literatuur en muziek.",
    "type": 4
  },
  {
    "id": 59,
    "text": "Ik kan me terugtrekken als ik me onbegrepen of afgewezen voel.",
    "type": 4
  },
  {
    "id": 60,
    "text": "Ik heb de neiging om intens naar een diepe connectie te verlangen, maar voel me soms alsnog eenzaam.",
    "type": 4
  },
  {
    "id": 61,
    "text": "Ik ben me erg bewust van mijn emoties en kan ze moeilijk loslaten.",
    "type": 4
  },
  {
    "id": 62,
    "text": "Ik kan jaloers worden als ik het gevoel heb dat anderen hebben wat ik mis.",
    "type": 4
  },
  {
    "id": 63,
    "text": "Ik verlang ernaar gezien en erkend te worden in mijn uniekheid.",
    "type": 4
  },
  {
    "id": 64,
    "text": "Ik voel me vaak een buitenstaander, zelfs in groepen waar ik deel van uitmaak.",
    "type": 4
  },
  {
    "id": 65,
    "text": "Ik voel me het meest op mijn gemak als ik voldoende tijd alleen kan doorbrengen.",
    "type": 5
  },
  {
    "id": 66,
    "text": "Ik wil de wereld begrijpen en ben altijd op zoek naar kennis.",
    "type": 5
  },
  {
    "id": 67,
    "text": "Ik heb moeite met het uiten van mijn emoties en geef de voorkeur aan logica.",
    "type": 5
  },
  {
    "id": 68,
    "text": "Ik voel me snel overweldigd als mensen te veel van me vragen.",
    "type": 5
  },
  {
    "id": 69,
    "text": "Ik observeer liever dan dat ik actief deelneem aan sociale situaties.",
    "type": 5
  },
  {
    "id": 70,
    "text": "Ik wil het liefst onafhankelijk zijn en niet afhankelijk van anderen.",
    "type": 5
  },
  {
    "id": 71,
    "text": "Ik heb een grote behoefte aan privacy en persoonlijke ruimte.",
    "type": 5
  },
  {
    "id": 72,
    "text": "Ik trek me terug in mijn gedachten en kan urenlang nadenken over een onderwerp.",
    "type": 5
  },
  {
    "id": 73,
    "text": "Ik geef de voorkeur aan diepgang boven oppervlakkige gesprekken.",
    "type": 5
  },
  {
    "id": 74,
    "text": "Ik heb liever een paar diepgaande relaties dan veel oppervlakkige contacten.",
    "type": 5
  },
  {
    "id": 75,
    "text": "Ik spaar energie door sociale interacties te beperken en mijn tijd verstandig te besteden.",
    "type": 5
  },
  {
    "id": 76,
    "text": "Ik voel me ongemakkelijk als ik moet inspelen op emotionele situaties.",
    "type": 5
  },
  {
    "id": 77,
    "text": "Ik kan gefrustreerd raken als mensen zonder reden op mijn persoonlijke ruimte inbreken.",
    "type": 5
  },
  {
    "id": 78,
    "text": "Ik geef er de voorkeur aan om informatie te verzamelen voordat ik een beslissing neem.",
    "type": 5
  },
  {
    "id": 79,
    "text": "Ik ben meer een waarnemer dan een deelnemer in sociale settings.",
    "type": 5
  },
  {
    "id": 80,
    "text": "Ik ben gevoelig voor uitputting als ik te veel tijd met anderen doorbreng.",
    "type": 5
  },
  {
    "id": 81,
    "text": "Ik denk vaak na over mogelijke risico's en bereid me goed voor op het ergste.",
    "type": 6
  },
  {
    "id": 82,
    "text": "Ik hecht veel waarde aan veiligheid en stabiliteit in mijn leven.",
    "type": 6
  },
  {
    "id": 83,
    "text": "Ik ben loyaal aan de mensen en groepen die ik vertrouw.",
    "type": 6
  },
  {
    "id": 84,
    "text": "Ik heb moeite met autoriteit: ik volg het soms, maar kan het ook wantrouwen.",
    "type": 6
  },
  {
    "id": 85,
    "text": "Ik voel me vaak onrustig als er geen duidelijke structuur of richtlijnen zijn.",
    "type": 6
  },
  {
    "id": 86,
    "text": "Ik ben alert op tekenen van gevaar, zelfs als anderen die niet zien.",
    "type": 6
  },
  {
    "id": 87,
    "text": "Ik twijfel regelmatig aan mijn eigen beslissingen en zoek bevestiging bij anderen.",
    "type": 6
  },
  {
    "id": 88,
    "text": "Ik stel veel vragen om zeker te weten dat ik de juiste informatie heb.",
    "type": 6
  },
  {
    "id": 89,
    "text": "Ik voel me verantwoordelijk voor het welzijn van mijn omgeving.",
    "type": 6
  },
  {
    "id": 90,
    "text": "Ik heb een sterk rechtvaardigheidsgevoel en kom op voor wat eerlijk is.",
    "type": 6
  },
  {
    "id": 91,
    "text": "Ik kan me zorgen maken over dingen die nog niet eens gebeurd zijn.",
    "type": 6
  },
  {
    "id": 92,
    "text": "Ik zoek vaak houvast in regels, systemen of overtuigingen.",
    "type": 6
  },
  {
    "id": 93,
    "text": "Ik heb de neiging om eerst achterdochtig te zijn voordat ik iemand volledig vertrouw.",
    "type": 6
  },
  {
    "id": 94,
    "text": "Ik werk goed in teamverband en ben een trouwe vriend of collega.",
    "type": 6
  },
  {
    "id": 95,
    "text": "Ik voel me veiliger als ik weet dat iemand anders verantwoordelijkheid draagt.",
    "type": 6
  },
  {
    "id": 96,
    "text": "Ik merk snel tegenstrijdigheden in wat mensen zeggen of doen.",
    "type": 6
  },
  {
    "id": 97,
    "text": "Ik hou van avontuur en ben altijd op zoek naar nieuwe ervaringen.",
    "type": 7
  },
  {
    "id": 98,
    "text": "Ik wil niet vastzitten in routine of beperkingen.",
    "type": 7
  },
  {
    "id": 99,
    "text": "Ik denk vaak vooruit naar wat het volgende spannende ding is dat ik kan doen.",
    "type": 7
  },
  {
    "id": 100,
    "text": "Ik voel me ongemakkelijk als ik te lang stilsta bij negatieve emoties.",
    "type": 7
  },
  {
    "id": 101,
    "text": "Ik wil het leven voluit leven en niets missen.",
    "type": 7
  },
  {
    "id": 102,
    "text": "Ik raak snel verveeld als iets saai of voorspelbaar wordt.",
    "type": 7
  },
  {
    "id": 103,
    "text": "Ik kan moeilijk 'nee' zeggen tegen leuke uitnodigingen of kansen.",
    "type": 7
  },
  {
    "id": 104,
    "text": "Ik ben altijd optimistisch en zie de positieve kant van dingen.",
    "type": 7
  },
  {
    "id": 105,
    "text": "Ik ben snel enthousiast, maar kan ook snel weer mijn interesse verliezen.",
    "type": 7
  },
  {
    "id": 106,
    "text": "Ik zie het leven als een eindeloze bron van mogelijkheden.",
    "type": 7
  },
  {
    "id": 107,
    "text": "Ik heb moeite met het afronden van dingen, omdat ik alweer aan iets nieuws denk.",
    "type": 7
  },
  {
    "id": 108,
    "text": "Ik kan ongeduldig worden als dingen te langzaam gaan.",
    "type": 7
  },
  {
    "id": 109,
    "text": "Ik hou ervan om plannen te maken, ook al voer ik ze niet altijd uit.",
    "type": 7
  },
  {
    "id": 110,
    "text": "Ik praat snel en denk nog sneller.",
    "type": 7
  },
  {
    "id": 111,
    "text": "Ik probeer negatieve emoties weg te duwen door afleiding te zoeken.",
    "type": 7
  },
  {
    "id": 112,
    "text": "Ik kan moeite hebben met diepgang in relaties, omdat ik snel doorga naar het volgende.",
    "type": 7
  },
  {
    "id": 113,
    "text": "Ik ben graag in controle over mijn eigen leven en beslissingen.",
    "type": 8
  },
  {
    "id": 114,
    "text": "Ik vertrouw op mijn eigen kracht en kom op voor mezelf.",
    "type": 8
  },
  {
    "id": 115,
    "text": "Ik laat niet graag mijn kwetsbaarheid zien.",
    "type": 8
  },
  {
    "id": 116,
    "text": "Ik kan snel reageren als ik onrecht zie.",
    "type": 8
  },
  {
    "id": 117,
    "text": "Ik ben direct en zeg wat ik denk, zonder eromheen te draaien.",
    "type": 8
  },
  {
    "id": 118,
    "text": "Ik respecteer mensen die eerlijk en sterk zijn.",
    "type": 8
  },
  {
    "id": 119,
    "text": "Ik word ongeduldig van mensen die twijfelen of onzeker zijn.",
    "type": 8
  },
  {
    "id": 120,
    "text": "Ik wil niet afhankelijk zijn van anderen.",
    "type": 8
  },
  {
    "id": 121,
    "text": "Ik bescherm de mensen om wie ik geef met alles wat ik heb.",
    "type": 8
  },
  {
    "id": 122,
    "text": "Ik ben een natuurlijke leider en neem graag de leiding.",
    "type": 8
  },
  {
    "id": 123,
    "text": "Ik kan soms als intimiderend overkomen zonder dat ik dat zo bedoel.",
    "type": 8
  },
  {
    "id": 124,
    "text": "Ik vind het moeilijk om toe te geven als ik ongelijk heb.",
    "type": 8
  },
  {
    "id": 125,
    "text": "Ik heb veel energie en ben altijd in beweging.",
    "type": 8
  },
  {
    "id": 126,
    "text": "Ik haat het als mensen proberen mij te controleren.",
    "type": 8
  },
  {
    "id": 127,
    "text": "Ik kan fel reageren als ik me aangevallen voel.",
    "type": 8
  },
  {
    "id": 128,
    "text": "Ik heb een sterke drang om onafhankelijk te zijn.",
    "type": 8
  },
  {
    "id": 129,
    "text": "Ik wil het liefst dat iedereen goed met elkaar overweg kan.",
    "type": 9
  },
  {
    "id": 130,
    "text": "Ik voel me ongemakkelijk bij conflicten en probeer ze te vermijden.",
    "type": 9
  },
  {
    "id": 131,
    "text": "Ik pas me vaak aan anderen aan om de vrede te bewaren.",
    "type": 9
  },
  {
    "id": 132,
    "text": "Ik voel me prettig in een rustige, harmonieuze omgeving.",
    "type": 9
  },
  {
    "id": 133,
    "text": "Ik stel beslissingen vaak uit omdat ik alle kanten wil overwegen.",
    "type": 9
  },
  {
    "id": 134,
    "text": "Ik vind het moeilijk om mijn eigen behoeften op de eerste plaats te zetten.",
    "type": 9
  },
  {
    "id": 135,
    "text": "Ik kan me verliezen in dagelijkse routines en vergeet soms mijn eigen doelen.",
    "type": 9
  },
  {
    "id": 136,
    "text": "Ik heb de neiging om me terug te trekken in mijn eigen wereld als het te druk wordt.",
    "type": 9
  },
  {
    "id": 137,
    "text": "Ik voel me aangetrokken tot eenvoudige en vertrouwde dingen.",
    "type": 9
  },
  {
    "id": 138,
    "text": "Ik houd van een gevoel van balans en stabiliteit in mijn leven.",
    "type": 9
  },
  {
    "id": 139,
    "text": "Ik ben een goede luisteraar en mensen voelen zich vaak op hun gemak bij mij.",
    "type": 9
  },
  {
    "id": 140,
    "text": "Ik vermijd confrontaties, zelfs als ik ergens echt een mening over heb.",
    "type": 9
  },
  {
    "id": 141,
    "text": "Ik heb moeite met het uiten van mijn eigen verlangens en meningen.",
    "type": 9
  },
  {
    "id": 142,
    "text": "Ik ben goed in het zien van verschillende perspectieven, waardoor ik soms moeilijk keuzes kan maken.",
    "type": 9
  },
  {
    "id": 143,
    "text": "Ik vind het moeilijk om mijn eigen grenzen aan te geven en nee te zeggen.",
    "type": 9
  },
  {
    "id": 144,
    "text": "Ik heb de neiging om in een comfortabele routine te blijven, zelfs als die niet ideaal is.",
    "type": 917
  }
];

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
];