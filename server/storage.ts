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
  private memStorage = new MemStorage();
  private dbConnectionFailed = false;

  async getQuestions(): Promise<Question[]> {
    return questions;
  }

  async getTypes(): Promise<EnneagramType[]> {
    return enneagramTypes;
  }

  async saveResult(insertResult: InsertResult): Promise<Result> {
    if (this.dbConnectionFailed) {
      console.log('Using in-memory storage for saveResult due to previous DB connection failure');
      return this.memStorage.saveResult(insertResult);
    }

    try {
      const [result] = await db
        .insert(results)
        .values(insertResult)
        .returning();
      return result;
    } catch (error) {
      console.error('Error saving result to database:', error);
      this.dbConnectionFailed = true;
      console.log('Falling back to in-memory storage');
      return this.memStorage.saveResult(insertResult);
    }
  }

  async getResult(id: number): Promise<Result | undefined> {
    if (this.dbConnectionFailed) {
      console.log('Using in-memory storage for getResult due to previous DB connection failure');
      return this.memStorage.getResult(id);
    }

    try {
      const [result] = await db
        .select()
        .from(results)
        .where(eq(results.id, id));
      return result;
    } catch (error) {
      console.error('Error fetching result from database:', error);
      this.dbConnectionFailed = true;
      console.log('Falling back to in-memory storage');
      return this.memStorage.getResult(id);
    }
  }
}

export const storage = new DatabaseStorage();