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

export class DatabaseStorage implements IStorage {
  async getQuestions(): Promise<Question[]> {
    // Return questions in their original order
    return questions;
  }

  async getTypes(): Promise<EnneagramType[]> {
    return enneagramTypes;
  }

  async saveResult(insertResult: InsertResult): Promise<Result> {
    // Ensure scores is an array before inserting
    if (!Array.isArray(insertResult.scores)) {
      console.error('Invalid scores format, attempting to convert to array');
      insertResult = {
        ...insertResult,
        scores: Array.isArray(insertResult.scores) ? insertResult.scores : Object.values(insertResult.scores)
      };
    }
    
    try {
      const [result] = await db
        .insert(results)
        .values(insertResult)
        .returning();
      return result;
    } catch (error) {
      console.error('Error saving result to database:', error);
      throw error;
    }
  }

  async getResult(id: number): Promise<Result | undefined> {
    try {
      const [result] = await db
        .select()
        .from(results)
        .where(eq(results.id, id));
      
      return result || undefined;
    } catch (error) {
      console.error('Error fetching result from database:', error);
      throw error;
    }
  }
}

// Use DatabaseStorage to persist data between server restarts
export const storage = new DatabaseStorage();