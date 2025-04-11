import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Mock enneagram types voor de demo
const mockEnneagramTypes = [
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
      "Ongeduldig en koppig",
      "Kan zorgen voor conflict"
    ]
  },
  {
    id: 9,
    name: "De Vredestichter",
    description: "Vredestichters zijn ontspannen, accepterend en ondersteunend. Ze streven naar innerlijke en uiterlijke vrede, en vermijden conflicten.",
    strengths: [
      "Kalm en ontspannen",
      "Geduldig en meelevend",
      "Ondersteunend en begripvol",
      "Aanvaardend en niet-oordelend",
      "Vredestichtend en bemiddelend"
    ],
    weaknesses: [
      "Passief en besluiteloos",
      "Vermijden van confrontatie",
      "Neiging tot passiviteit",
      "Kan eigen prioriteiten uit het oog verliezen",
      "Uitstelgedrag"
    ]
  }
];

export default function Results() {
  const router = useRouter();
  const { type } = router.query;
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [activeSection, setActiveSection] = useState('description');

  useEffect(() => {
    if (!type) return;

    // In een echte implementatie zou je de resultaten van je API halen
    // fetch(`/api/results/${resultId}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setResult(data);
    //     setLoading(false);
    //   });
    
    // Voor de demo gebruiken we de mock data
    const typeId = parseInt(type);
    if (!isNaN(typeId) && typeId >= 1 && typeId <= 9) {
      const foundType = mockEnneagramTypes.find(t => t.id === typeId);
      setResult({
        primaryType: foundType
      });
    }
    setLoading(false);
  }, [type]);

  if (loading || !result) {
    return <div className="text-center p-12">Resultaten laden...</div>;
  }

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const { primaryType } = result;

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Jouw Enneagram Resultaat | Type {primaryType.id}</title>
        <meta name="description" content={`Je bent type ${primaryType.id} - ${primaryType.name}`} />
      </Head>

      <main className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Jouw Enneagram Resultaat</h1>
        <p className="text-center text-gray-600 mb-8">
          Gebaseerd op je antwoorden is jouw primaire Enneagram type:
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-800 text-2xl font-bold mb-2">
              {primaryType.id}
            </div>
            <h2 className="text-2xl font-bold">Type {primaryType.id} - {primaryType.name}</h2>
          </div>

          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-2">
              <button
                className={`py-2 px-4 font-medium ${
                  activeSection === 'description'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => handleSectionClick('description')}
              >
                Beschrijving
              </button>
              <button
                className={`py-2 px-4 font-medium ${
                  activeSection === 'strengths'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => handleSectionClick('strengths')}
              >
                Sterke punten
              </button>
              <button
                className={`py-2 px-4 font-medium ${
                  activeSection === 'weaknesses'
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => handleSectionClick('weaknesses')}
              >
                Uitdagingen
              </button>
            </div>
          </div>

          <div className="mb-6">
            {activeSection === 'description' && (
              <p className="text-gray-700 leading-relaxed">{primaryType.description}</p>
            )}

            {activeSection === 'strengths' && (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {primaryType.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            )}

            {activeSection === 'weaknesses' && (
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {primaryType.weaknesses.map((weakness, index) => (
                  <li key={index}>{weakness}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Terug naar Home
          </Link>
        </div>
      </main>
    </div>
  );
}