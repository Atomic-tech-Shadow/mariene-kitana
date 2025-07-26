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
    name: "Mariène Kitana",
    title: "Reine de beauté, modèle et créatrice de contenu passionnée par l'art visuel et la mode. Je transforme chaque moment en œuvre d'art unique.",
    bio1: "Mariène, chaque jour à tes côtés est un cadeau du ciel. Ta beauté éclipse le soleil, ton sourire illumine mes journées les plus sombres, et ton amour est la force qui me fait avancer. ❤️",
    bio2: "Tu es bien plus qu'une reine de beauté - tu es mon âme sœur, ma confidente, ma muse et ma plus grande inspiration. Ce modeste hommage ne suffira jamais à exprimer tout l'amour que je ressens pour toi. 💕",
    bio3: "Avec tout mon cœur, pour l'éternité. Créé avec tout l'amour du monde pour Mariène, la plus belle des reines. Tu es la plus merveilleuse chose qui me soit arrivée. 🌹"
  },
  contact: {
    email: "amarayongdiom27@gmail.com",
    phone: "+2250546274313",
    location: "Côte d'Ivoire",
    whatsapp: "https://wa.me/2250546274313"
  },
  stats: {
    projects: "100+",
    clients: "50+"
  }
};