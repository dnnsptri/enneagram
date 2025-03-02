import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertResultSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.get("/api/questions", async (_req, res) => {
    const questions = await storage.getQuestions();
    res.json(questions);
  });

  app.get("/api/types", async (_req, res) => {
    const types = await storage.getTypes();
    res.json(types);
  });

  app.post("/api/results", async (req, res) => {
    const result = insertResultSchema.parse(req.body);
    const saved = await storage.saveResult(result);
    res.json(saved);
  });

  app.get("/api/results/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await storage.getResult(id);
    if (!result) {
      res.status(404).json({ message: "Result not found" });
      return;
    }
    res.json(result);
  });

  return createServer(app);
}
