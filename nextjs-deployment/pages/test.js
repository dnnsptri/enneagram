import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Mock vragen voor de demo
// In productie zou je de vragen van je API halen
const mockQuestions = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  text: `Dit is een voorbeeldvraag ${i + 1} voor de Enneagram test.`,
  type: (i % 9) + 1
}));

export default function Test() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const questionsPerPage = 5;

  useEffect(() => {
    // In een echte implementatie zou je je API aanroepen
    // fetch('/api/questions')
    //   .then(res => res.json())
    //   .then(data => {
    //     setQuestions(data);
    //     setLoading(false);
    //   });
    
    // Voor de demo gebruiken we de mock vragen
    setQuestions(mockQuestions);
    setLoading(false);
  }, []);

  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const handleAnswer = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    } else {
      // Test is voltooid, bereken resultaat
      submitTest();
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const submitTest = () => {
    // In een echte implementatie zou je de antwoorden naar je API sturen
    // fetch('/api/results', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ answers })
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     router.push({
    //       pathname: '/results',
    //       query: { id: result.id }
    //     });
    //   });

    // Voor de demo gaan we direct naar de resultaten
    console.log('Antwoorden:', answers);
    
    // Berekening voor de demo resultaten
    // In een echte implementatie zou dit op de server gebeuren
    const scores = Array(9).fill(0);
    
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      if (question) {
        scores[question.type - 1] += answer;
      }
    });
    
    const primaryType = scores.indexOf(Math.max(...scores)) + 1;
    
    router.push({
      pathname: '/results',
      query: { type: primaryType }
    });
  };

  const progress = Math.round((currentPage / (totalPages - 1)) * 100);

  if (loading) {
    return <div className="text-center p-12">Vragen laden...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Enneagram Test</title>
        <meta name="description" content="Aan het testen - Enneagram Persoonlijkheidstest" />
      </Head>

      <main className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Enneagram Persoonlijkheidstest</h1>
          <p className="text-gray-600">
            Vraag {currentPage * questionsPerPage + 1} - {Math.min((currentPage + 1) * questionsPerPage, questions.length)} van {questions.length}
          </p>
          
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-8">
          {currentQuestions.map(question => (
            <div key={question.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl mb-4">{question.text}</h2>
              
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map(value => (
                  <button
                    key={value}
                    onClick={() => handleAnswer(question.id, value)}
                    className={`py-3 px-4 border rounded-md transition-colors ${
                      answers[question.id] === value
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {value === 0 ? 'Oneens' : value === 1 ? 'Deels' : 'Eens'}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            className={`px-6 py-2 rounded-md ${
              currentPage === 0
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            Vorige
          </button>
          
          <button
            onClick={goToNextPage}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {currentPage === totalPages - 1 ? 'Voltooien' : 'Volgende'}
          </button>
        </div>
      </main>
    </div>
  );
}