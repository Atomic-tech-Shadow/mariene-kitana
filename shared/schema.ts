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
    bio1: "Passionnée par la beauté et l'art depuis mon plus jeune âge, j'ai développé une expertise unique dans la création de contenus visuels mémorables et inspirants.",
    bio2: "Mon approche allie élégance naturelle et créativité artistique pour donner vie à des projets qui marquent et captivent. Chaque création est pensée pour raconter une histoire de beauté authentique.",
    bio3: "Aujourd'hui, je partage ma passion pour l'art visuel et la mode à travers mes créations, toujours en quête de perfection et d'authenticité."
  },
  contact: {
    email: "mariene.kitana@email.com",
    phone: "+33 6 12 34 56 78",
    location: "Paris, France"
  },
  stats: {
    projects: "100+",
    clients: "50+"
  }
};
