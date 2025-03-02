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
    return questions;
  }

  async getTypes(): Promise<EnneagramType[]> {
    return enneagramTypes;
  }

  async saveResult(insertResult: InsertResult): Promise<Result> {
    try {
      const [result] = await db
        .insert(results)
        .values([insertResult]) // Wrap in array to fix type error
        .returning();
      return result;
    } catch (error) {
      console.error('Error saving result:', error);
      throw new Error('Failed to save test result');
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
      console.error('Error fetching result:', error);
      return undefined;
    }
  }
}

export const storage = new DatabaseStorage();