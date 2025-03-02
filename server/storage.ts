import { type Result, type InsertResult } from "@shared/schema";
import { questions, enneagramTypes } from "./data/questions";
import { type Question, type EnneagramType } from "./data/types";

export interface IStorage {
  getQuestions(): Promise<Question[]>;
  getTypes(): Promise<EnneagramType[]>;
  saveResult(result: InsertResult): Promise<Result>;
  getResult(id: number): Promise<Result | undefined>;
}

export class MemStorage implements IStorage {
  private results: Map<number, Result>;
  private currentId: number;

  constructor() {
    this.results = new Map();
    this.currentId = 1;
  }

  async getQuestions(): Promise<Question[]> {
    return questions;
  }

  async getTypes(): Promise<EnneagramType[]> {
    return enneagramTypes;
  }

  async saveResult(insertResult: InsertResult): Promise<Result> {
    const id = this.currentId++;
    const result = { ...insertResult, id };
    this.results.set(id, result);
    return result;
  }

  async getResult(id: number): Promise<Result | undefined> {
    return this.results.get(id);
  }
}

export const storage = new MemStorage();
