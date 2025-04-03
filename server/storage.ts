import { type Result, type InsertResult } from "@shared/schema";
import { results } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { questions, enneagramTypes } from "./data/questions";
import { type Question, type EnneagramType } from "./data/types";

export interface IStorage {
  getQuestions(): Promise<Question[]>;
  getTypes(): Promise<EnneagramType[]>;
  saveResult(result: InsertResult): Promise<Result>;
  getResult(id: number): Promise<Result | undefined>;
}

// In-memory fallback storage
class MemStorage implements IStorage {
  private results: Result[] = [];
  private nextId = 1;

  async getQuestions(): Promise<Question[]> {
    // Return questions in their original order
    return questions;
  }

  async getTypes(): Promise<EnneagramType[]> {
    return enneagramTypes;
  }

  async saveResult(insertResult: InsertResult): Promise<Result> {
    // Ensure scores is an array before storing
    if (!Array.isArray(insertResult.scores)) {
      console.error('MemStorage: Invalid scores format, attempting to convert to array');
      insertResult = {
        ...insertResult,
        scores: Array.isArray(insertResult.scores) ? insertResult.scores : Object.values(insertResult.scores)
      };
    }
    
    const result = {
      ...insertResult,
      id: this.nextId++,
    } as Result;
    
    this.results.push(result);
    return result;
  }

  async getResult(id: number): Promise<Result | undefined> {
    return this.results.find(r => r.id === id);
  }
}

// Create a single MemStorage instance to use across the application
const memStorage = new MemStorage();

export class DatabaseStorage implements IStorage {
  async getQuestions(): Promise<Question[]> {
    // Return questions in their original order
    return questions;
  }

  async getTypes(): Promise<EnneagramType[]> {
    return enneagramTypes;
  }

  async saveResult(insertResult: InsertResult): Promise<Result> {
    try {
      // Ensure scores is an array before inserting
      if (!Array.isArray(insertResult.scores)) {
        console.error('Invalid scores format, attempting to convert to array');
        insertResult = {
          ...insertResult,
          scores: Array.isArray(insertResult.scores) ? insertResult.scores : Object.values(insertResult.scores)
        };
      }
      
      const [result] = await db
        .insert(results)
        .values(insertResult)
        .returning();
      return result;
    } catch (error) {
      console.error('Error saving result to database:', error);
      // Use the memStorage as fallback
      return memStorage.saveResult(insertResult);
    }
  }

  async getResult(id: number): Promise<Result | undefined> {
    try {
      const [result] = await db
        .select()
        .from(results)
        .where(eq(results.id, id));
      
      if (result) {
        return result;
      }
      
      // If not found in database, try memory storage
      return memStorage.getResult(id);
    } catch (error) {
      console.error('Error fetching result from database:', error);
      // Use memStorage as fallback
      return memStorage.getResult(id);
    }
  }
}

// Use DatabaseStorage to persist data between server restarts
export const storage = new DatabaseStorage();