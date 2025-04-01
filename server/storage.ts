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
      const [result] = await db
        .insert(results)
        .values(insertResult)
        .returning();
      return result;
    } catch (error) {
      console.error('Error saving result to database:', error);
      // Create a MemStorage instance for this specific operation
      const memStorage = new MemStorage();
      return memStorage.saveResult(insertResult);
    }
  }

  async getResult(id: number): Promise<Result | undefined> {
    try {
      const [result] = await db
        .select()
        .from(results)
        .where(eq(results.id, id));
      return result;
    } catch (error) {
      console.error('Error fetching result from database:', error);
      return undefined;
    }
  }
}

export const storage = new DatabaseStorage();