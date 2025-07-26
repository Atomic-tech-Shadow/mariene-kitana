import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  projectUrl: text("project_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

// User data schema for portfolio content
export const portfolioData = {
  user: {
    name: "Marie Dubois",
    title: "Designer créative passionnée par l'art visuel et l'expérience utilisateur. Je transforme les idées en créations uniques et mémorables.",
    bio1: "Passionnée par le design depuis mon plus jeune âge, j'ai développé une expertise unique dans la création d'expériences visuelles mémorables et fonctionnelles.",
    bio2: "Mon approche allie créativité artistique et rigueur technique pour donner vie à des projets qui marquent et inspirent. Chaque création est pensée pour raconter une histoire unique.",
    bio3: "Aujourd'hui, je collabore avec des clients visionnaires pour transformer leurs idées en réalités visuelles impactantes, toujours en quête d'innovation et d'excellence."
  },
  contact: {
    email: "marie.dubois@email.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France"
  },
  stats: {
    projects: "50+",
    clients: "30+"
  }
};
