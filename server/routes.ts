import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertNewsletterSubscriberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog routes
  app.get("/api/blog", async (_req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPost(slug);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Games routes
  app.get("/api/games", async (_req, res) => {
    try {
      const games = await storage.getGames();
      res.json(games);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch games" });
    }
  });

  app.get("/api/games/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const game = await storage.getGame(slug);
      
      if (!game) {
        return res.status(404).json({ message: "Game not found" });
      }
      
      res.json(game);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch game" });
    }
  });

  app.get("/api/games/featured", async (_req, res) => {
    try {
      const game = await storage.getFeaturedGame();
      
      if (!game) {
        return res.status(404).json({ message: "No featured game found" });
      }
      
      res.json(game);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured game" });
    }
  });

  // Contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ message: "Message sent successfully", id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriberSchema.parse(req.body);
      
      // Check if email is already subscribed
      const isSubscribed = await storage.isEmailSubscribed(validatedData.email);
      if (isSubscribed) {
        return res.status(409).json({ message: "Email is already subscribed" });
      }
      
      const subscriber = await storage.subscribeToNewsletter(validatedData);
      res.status(201).json({ 
        message: "Successfully subscribed to newsletter", 
        id: subscriber.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid email format", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
