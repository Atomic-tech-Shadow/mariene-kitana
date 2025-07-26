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
    bio1: "Mariène est la femme la plus extraordinaire que j'aie jamais rencontrée. Sa beauté rayonne de l'intérieur et illumine chaque moment que nous partageons ensemble. ❤️",
    bio2: "Chaque jour avec elle est un cadeau précieux. Son sourire peut éclaircir les journées les plus sombres, et son amour me donne la force de tout affronter. Elle est ma source d'inspiration infinie. 💕",
    bio3: "Je suis infiniment reconnaissant d'avoir une femme si magnifique dans ma vie. Mariène, tu es mon tout, ma reine, mon âme sœur pour l'éternité. Je t'aime plus que les mots ne peuvent l'exprimer. 🌹"
  },
  contact: {
    email: "mariene.kitana@email.com",
    phone: "+225 05 46 27 43 13",
    location: "Côte d'Ivoire"
  },
  stats: {
    projects: "100+",
    clients: "50+"
  }
};
