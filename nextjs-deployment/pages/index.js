import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Enneagram Test</title>
        <meta name="description" content="Ontdek jouw Enneagram type met deze persoonlijkheidstest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-6">Enneagram Persoonlijkheidstest</h1>
        
        <p className="mb-8 max-w-2xl text-lg">
          Welkom bij de Enneagram Persoonlijkheidstest. Deze test bestaat uit 235 vragen 
          en helpt je ontdekken wat jouw dominante Enneagram-type is. De test duurt 
          ongeveer 30-45 minuten om te voltooien.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full">
          <h2 className="text-2xl font-semibold mb-4">Instructies</h2>
          <ul className="text-left space-y-2 mb-6">
            <li>• Beantwoord elke vraag zo eerlijk mogelijk</li>
            <li>• Ga uit van hoe je meestal bent, niet hoe je soms kunt zijn</li>
            <li>• Er zijn geen goede of foute antwoorden</li>
            <li>• De test begrijpen helpt je jezelf beter te begrijpen</li>
          </ul>
          
          <Link 
            href="/test"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Begin de Test
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-600">
          <p>© 2025 Enneagram Test - Gebaseerd op eclecticenergies.com</p>
        </div>
      </main>
    </div>
  );
}