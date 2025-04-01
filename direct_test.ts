/**
 * Direct test for Enneagram scoring calculation
 */

// Mock questions for different types
const mockQuestions = [
  { id: 1, text: "Question 1 for Type 1", type: 1 },
  { id: 2, text: "Question 2 for Type 1", type: 1 },
  { id: 3, text: "Question 1 for Type 2", type: 2 },
  { id: 4, text: "Question 2 for Type 2", type: 2 },
  { id: 5, text: "Question 1 for Type 3", type: 3 },
  { id: 6, text: "Question 2 for Type 3", type: 3 },
  { id: 7, text: "Question 1 for Type 4", type: 4 },
  { id: 8, text: "Question 2 for Type 4", type: 4 },
  { id: 9, text: "Question 1 for Type 5", type: 5 },
  { id: 10, text: "Question 2 for Type 5", type: 5 },
  { id: 11, text: "Question 1 for Type 6", type: 6 },
  { id: 12, text: "Question 2 for Type 6", type: 6 },
  { id: 13, text: "Question 1 for Type 7", type: 7 },
  { id: 14, text: "Question 2 for Type 7", type: 7 },
  { id: 15, text: "Question 1 for Type 8", type: 8 },
  { id: 16, text: "Question 2 for Type 8", type: 8 },
  { id: 17, text: "Question 1 for Type 9", type: 9 },
  { id: 18, text: "Question 2 for Type 9", type: 9 },
];

// Mock answers that heavily favor type 1
const mockAnswersType1 = [
  2, 2, // Type 1 questions (Eens = 2 points)
  0, 0, // Type 2 questions (Oneens = 0 points)
  0, 0, // Type 3 questions
  0, 0, // Type 4 questions
  0, 0, // Type 5 questions
  0, 0, // Type 6 questions
  0, 0, // Type 7 questions
  0, 0, // Type 8 questions
  0, 0, // Type 9 questions
];

// Calculate scores for each type
function calculateScores(answers: number[], questions: typeof mockQuestions): number[] {
  // Initialize arrays with exactly 9 elements (for 9 types)
  const typeScores = Array(9).fill(0);
  const typeCounts = Array(9).fill(0);

  // Process each answer
  answers.forEach((answer, index) => {
    const type = questions[index].type;
    typeScores[type - 1] += answer;
    typeCounts[type - 1]++;
  });

  // Calculate average scores
  return typeScores.map((score, index) => 
    typeCounts[index] > 0 ? score / typeCounts[index] : 0
  );
}

// Find the primary type based on scores
function calculatePrimaryType(scores: number[]): number {
  const maxScore = Math.max(...scores);
  return scores.indexOf(maxScore) + 1;
}

// Run test for Type 1
function runTest() {
  console.log("DIRECT TEST FOR TYPE 1");
  
  const scores = calculateScores(mockAnswersType1, mockQuestions);
  
  console.log("Scores (should favor Type 1):");
  scores.forEach((score, index) => {
    console.log(`Type ${index + 1}: ${score.toFixed(2)}`);
  });
  
  const primaryType = calculatePrimaryType(scores);
  console.log(`\nDetected Primary Type: ${primaryType}`);
  console.log(`Expected Type: 1`);
  console.log(`Test ${primaryType === 1 ? 'PASSED' : 'FAILED'}`);
}

runTest();