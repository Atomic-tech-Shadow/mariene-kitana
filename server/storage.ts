import { type Project, type InsertProject, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.projects = new Map();
    this.contacts = new Map();
    this.initializeProjects();
  }

  private initializeProjects() {
    const initialProjects: InsertProject[] = [
      {
        title: "Interface E-commerce",
        description: "Création d'une interface moderne et intuitive pour une boutique en ligne, optimisée pour l'expérience utilisateur.",
        category: "design",
        imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        projectUrl: "#"
      },
      {
        title: "Identité Visuelle",
        description: "Développement d'une identité de marque complète incluant logo, charte graphique et supports de communication.",
        category: "branding",
        imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        projectUrl: "#"
      },
      {
        title: "App Mobile",
        description: "Conception d'une application mobile innovante avec une interface utilisateur fluide et engageante.",
        category: "web",
        imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        projectUrl: "#"
      },
      {
        title: "Design Print",
        description: "Collection de supports print élégants alliant esthétique moderne et fonctionnalité pratique.",
        category: "design",
        imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        projectUrl: "#"
      },
      {
        title: "Site Portfolio",
        description: "Développement d'un site portfolio interactif mettant en valeur le travail d'un photographe professionnel.",
        category: "web",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        projectUrl: "#"
      },
      {
        title: "Design Packaging",
        description: "Création d'un packaging innovant qui reflète les valeurs de la marque tout en captivant l'attention du consommateur.",
        category: "branding",
        imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        projectUrl: "#"
      }
    ];

    initialProjects.forEach(async (project) => {
      await this.createProject(project);
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    const allProjects = await this.getProjects();
    return allProjects.filter(project => project.category === category);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = {
      ...insertProject,
      id,
      createdAt: new Date()
    };
    this.projects.set(id, project);
    return project;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }
}

export const storage = new MemStorage();
