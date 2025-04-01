/**
 * Simple test for the Enneagram scoring system
 */

import { questions, enneagramTypes } from './server/data/questions';

// Create a simplified set of answers that heavily favors one type
function createAnswersForType(targetType: number): number[] {
  return questions.map(q => q.type === targetType ? 2 : 0);
}

// Calculate scores just like in the test.tsx file
function calculateScores(answers: number[]): number[] {
  const typeScores = new Array(9).fill(0);
  const typeCounts = new Array(9).fill(0);

  answers.forEach((answer, index) => {
    if (index < questions.length) {
      const type = questions[index].type;
      typeScores[type - 1] += answer;
      typeCounts[type - 1]++;
    }
  });

  return typeScores.map((score, index) => 
    typeCounts[index] > 0 ? score / typeCounts[index] : 0
  );
}

function calculatePrimaryType(scores: number[]): number {
  // Debug output to see the scores array
  console.log("Debug - scores array:", scores);
  
  const maxScore = Math.max(...scores);
  console.log("Debug - max score:", maxScore);
  
  if (maxScore === 0) return 1;
  
  // Find the index of the max score
  const primaryIndex = scores.indexOf(maxScore);
  console.log("Debug - primary index:", primaryIndex);
  
  return primaryIndex + 1;
}

// Test for a specific type
function testType(type: number) {
  const answers = createAnswersForType(type);
  const scores = calculateScores(answers);
  
  console.log(`\n==== Test for Type ${type} ====`);
  console.log("Scores:");
  
  scores.forEach((score, index) => {
    console.log(`Type ${index + 1}: ${score.toFixed(2)}`);
  });
  
  const primaryType = calculatePrimaryType(scores);
  console.log(`\nDetected Primary Type: ${primaryType}`);
  console.log(`Expected Type: ${type}`);
  console.log(`Test ${primaryType === type ? 'PASSED' : 'FAILED'}`);
  
  return primaryType === type;
}

// Run tests for all types
function runTests() {
  console.log("ENNEAGRAM SCORING SYSTEM TEST");
  console.log(`Testing with ${questions.length} questions`);
  
  let passCount = 0;
  
  for (let type = 1; type <= 9; type++) {
    if (testType(type)) {
      passCount++;
    }
  }
  
  console.log(`\n==== Test Results ====`);
  console.log(`${passCount} out of 9 tests passed`);
}

runTests();