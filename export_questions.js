import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the current questions.ts file
const questionsFilePath = join(__dirname, 'server', 'data', 'questions.ts');
const questionsFileContent = fs.readFileSync(questionsFilePath, 'utf8');

// Extract the questions array using regex
const questionsMatch = questionsFileContent.match(/export const questions: Question\[\] = \[([\s\S]*?)\];/);
if (!questionsMatch) {
  console.error('Could not find questions array in the file');
  process.exit(1);
}

// Parse the questions array content
const questionsArrayContent = questionsMatch[1];

// Extract each question using regex
const questionRegex = /{\s*id:\s*(\d+),\s*text:\s*"([^"]+)",\s*type:\s*(\d+)\s*}/g;
let match;
const questions = [];

while ((match = questionRegex.exec(questionsArrayContent)) !== null) {
  const [_, id, text, type] = match;
  questions.push({ id: parseInt(id), text, type: parseInt(type) });
}

// Sort questions by ID
questions.sort((a, b) => a.id - b.id);

// Create the text file content
const textContent = questions.map(q => `${q.id}|${q.text}|${q.type}`).join('\n');

// Write to the export file
fs.writeFileSync('current_questions.txt', textContent);

console.log(`Successfully exported ${questions.length} questions to current_questions.txt`);