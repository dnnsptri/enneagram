/**
 * Automated test for the Enneagram test scoring system
 * This script simulates taking the test with answers biased toward specific types
 * to verify that the scoring algorithm produces expected results.
 */

import { questions, enneagramTypes } from './server/data/questions';

interface TestResult {
  typeName: string;
  primaryType: number;
  primaryScore: number;
  wingType: number;
  wingScore: number;
  triType: number[];
}

// Helper function to get a consistent set of answers biased toward a specific type
function generateTypeBiasedAnswers(targetType: number): number[] {
  // Initialize answers array with default answers for all questions
  const answers: number[] = [];
  
  // For each question, assign an answer based on question type
  for (const question of questions) {
    // Give high scores (2) to questions for the target type
    if (question.type === targetType) {
      answers.push(2); // "Eens" = 2 points
    } 
    // Give moderate scores (1) to questions for wing types
    else if (question.type === getLeftWing(targetType) || question.type === getRightWing(targetType)) {
      answers.push(1); // "Deels" = 1 point
    }
    // Give low scores (0) to all other types
    else {
      answers.push(0); // "Oneens" = 0 points
    }
  }
  
  return answers;
}

// Get the left wing type
function getLeftWing(type: number): number {
  return type === 1 ? 9 : type - 1;
}

// Get the right wing type
function getRightWing(type: number): number {
  return type === 9 ? 1 : type + 1;
}

// Calculate scores for each Enneagram type based on answers
function calculateScores(answers: number[]): number[] {
  // Initialize arrays to store scores and counts for each type (1-9)
  const typeScores = new Array(9).fill(0);
  const typeCounts = new Array(9).fill(0);

  // Process each answer
  answers.forEach((answer, index) => {
    if (answers[index] !== undefined && index < questions.length) {
      const type = questions[index].type;
      typeScores[type - 1] += answer;
      typeCounts[type - 1]++;
    }
  });

  // Calculate average scores
  return typeScores.map((score, index) => 
    typeCounts[index] > 0 ? score / typeCounts[index] : 0
  );
}

// Calculate primary Enneagram type based on scores
function calculatePrimaryType(scores: number[]): number {
  const maxScore = Math.max(...scores);
  if (maxScore === 0) return 1;
  return scores.indexOf(maxScore) + 1;
}

// Calculate wing type based on scores and primary type
function calculateWingType(scores: number[], primaryType: number): number {
  const primaryIndex = primaryType - 1;
  const leftWing = primaryIndex === 0 ? 8 : primaryIndex - 1;
  const rightWing = primaryIndex === 8 ? 0 : primaryIndex + 1;
  return scores[leftWing] >= scores[rightWing] ? leftWing + 1 : rightWing + 1;
}

// Calculate tri-type
function calculateTriType(scores: number[]): number[] {
  // Define the centers
  const gutTypes = [8, 9, 1];
  const heartTypes = [2, 3, 4];
  const headTypes = [5, 6, 7];
  
  // Create score objects with type info for each center
  const gutScores = gutTypes.map(type => ({ score: scores[type-1], type }))
                          .sort((a, b) => b.score - a.score);
  const heartScores = heartTypes.map(type => ({ score: scores[type-1], type }))
                             .sort((a, b) => b.score - a.score);
  const headScores = headTypes.map(type => ({ score: scores[type-1], type }))
                           .sort((a, b) => b.score - a.score);
  
  // Get top type from each center
  const primaryGut = gutScores[0].type;
  const primaryHeart = heartScores[0].type;
  const primaryHead = headScores[0].type;
  
  // Determine which center has the top primary type
  const primaryType = scores.indexOf(Math.max(...scores)) + 1;
  
  // Order tri-type with primary type first
  let triType: number[] = [];
  
  if (gutTypes.includes(primaryType)) {
    triType = [primaryType, 
             scores[primaryHeart-1] >= scores[primaryHead-1] ? primaryHeart : primaryHead, 
             scores[primaryHeart-1] >= scores[primaryHead-1] ? primaryHead : primaryHeart];
  } else if (heartTypes.includes(primaryType)) {
    triType = [primaryType, 
             scores[primaryGut-1] >= scores[primaryHead-1] ? primaryGut : primaryHead, 
             scores[primaryGut-1] >= scores[primaryHead-1] ? primaryHead : primaryGut];
  } else {
    triType = [primaryType, 
             scores[primaryGut-1] >= scores[primaryHeart-1] ? primaryGut : primaryHeart, 
             scores[primaryGut-1] >= scores[primaryHeart-1] ? primaryHeart : primaryGut];
  }
  
  return triType;
}

// Run a test with answers biased toward a specific type
function runTest(targetType: number): TestResult {
  const typeName = enneagramTypes.find(t => t.id === targetType)?.name || `Type ${targetType}`;
  console.log(`\n==== Testing for ${typeName} (Type ${targetType}) ====`);
  
  // Generate answers biased toward target type
  const answers = generateTypeBiasedAnswers(targetType);
  
  // Calculate scores
  const scores = calculateScores(answers);
  
  // Get primary and wing types
  const primaryType = calculatePrimaryType(scores);
  const wingType = calculateWingType(scores, primaryType);
  const triType = calculateTriType(scores);
  
  // Format scores for display
  const formattedScores = scores.map((score, index) => 
    `Type ${index + 1}: ${score.toFixed(2)}`
  ).join(', ');
  
  console.log('Calculated scores:');
  console.log(formattedScores);
  
  console.log(`Primary Type: ${primaryType} (${enneagramTypes.find(t => t.id === primaryType)?.name})`);
  console.log(`Wing Type: ${wingType} (${enneagramTypes.find(t => t.id === wingType)?.name})`);
  console.log(`Tri-Type: ${triType.join('-')} (${triType.map(t => enneagramTypes.find(et => et.id === t)?.name).join(', ')})`);
  
  const primaryScore = scores[primaryType - 1];
  const wingScore = scores[wingType - 1];
  
  return {
    typeName,
    primaryType,
    primaryScore,
    wingType,
    wingScore,
    triType
  };
}

// Test for each Enneagram type
function runAllTests() {
  console.log('Starting Enneagram Scoring System Tests');
  console.log(`Total questions in test: ${questions.length}`);
  
  const results: TestResult[] = [];
  
  // Test for each type
  for (let type = 1; type <= 9; type++) {
    results.push(runTest(type));
  }
  
  // Summary
  console.log('\n==== Test Summary ====');
  const passCount = results.filter(r => r.primaryType === parseInt(r.typeName.split(' ')[0])).length;
  
  console.log(`Tests passed: ${passCount} / 9`);
  
  // Check failed tests
  const failedTests = results.filter(r => r.primaryType !== parseInt(r.typeName.split(' ')[0]));
  if (failedTests.length > 0) {
    console.log('\nFailed tests:');
    failedTests.forEach(test => {
      console.log(`Expected: ${test.typeName}, Got: Type ${test.primaryType}`);
    });
  }
}

runAllTests();