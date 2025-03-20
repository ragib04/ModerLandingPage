import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import cors from "cors";

export async function registerRoutes(app: Express): Promise<Server> {
  // Enable CORS for API routes
  app.use("/api", cors());

  // Add API routes here
  app.get("/api/users", async (req, res) => {
    try {
      // Proxy the request to JSONPlaceholder API
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }
      
      const users = await response.json();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, message, consent } = req.body;
      
      // Validate required fields
      if (!name || !email || !message || !consent) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // In a real app, you would send an email or store in database
      // For now, just return success
      res.status(200).json({ message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
