
import { storage } from "./server/storage";

async function testStorage() {
  console.log("Testing storage functionality...");
  
  try {
    // Test getting questions
    console.log("Testing getQuestions...");
    const questions = await storage.getQuestions();
    console.log(`Got ${questions.length} questions successfully.`);
    
    // Test getting enneagram types
    console.log("Testing getTypes...");
    const types = await storage.getTypes();
    console.log(`Got ${types.length} enneagram types successfully.`);
    
    // Test saving a result
    console.log("Testing saveResult...");
    const testResult = {
      scores: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      primaryType: 1,
      wingType: 2,
      triType: [1, 2, 3],
      timestamp: new Date().toISOString()
    };
    
    const savedResult = await storage.saveResult(testResult);
    console.log("Result saved successfully:", savedResult);
    
    // Test getting a result
    console.log("Testing getResult...");
    const retrievedResult = await storage.getResult(savedResult.id);
    console.log("Result retrieved successfully:", retrievedResult);
    
    if (retrievedResult) {
      console.log("Test PASSED: All storage operations successful");
    } else {
      console.log("Test FAILED: Could not retrieve saved result");
    }
  } catch (error) {
    console.error("Test FAILED with error:", error);
  }
}

// Run the test
testStorage();
