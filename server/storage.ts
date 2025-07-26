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
        title: "Séance Photo Glamour",
        description: "Collection de portraits artistiques mettant en valeur l'élégance naturelle et la beauté authentique.",
        category: "photo",
        imageUrl: "/01.jpg",
        projectUrl: "#"
      },
      {
        title: "Shooting Mode Élégant",
        description: "Série de photos mode showcasing différents styles et looks avec une approche sophistiquée.",
        category: "mode",
        imageUrl: "/02.jpg",
        projectUrl: "#"
      },
      {
        title: "Portrait Artistique",
        description: "Création artistique mêlant lumière naturelle et composition créative pour un rendu unique.",
        category: "photo",
        imageUrl: "/03.jpg",
        projectUrl: "#"
      },
      {
        title: "Collection Beauté",
        description: "Mise en valeur de la beauté naturelle à travers des portraits raffinés et intemporels.",
        category: "beaute",
        imageUrl: "/04.jpg",
        projectUrl: "#"
      },
      {
        title: "Style Moderne",
        description: "Exploration de tendances mode contemporaines avec une touche personnelle et unique.",
        category: "mode",
        imageUrl: "/05.jpg",
        projectUrl: "#"
      },
      {
        title: "Élégance Parisienne",
        description: "Capture de l'esprit parisien à travers des poses naturelles et une esthétique raffinée.",
        category: "photo",
        imageUrl: "/06.jpg",
        projectUrl: "#"
      },
      {
        title: "Beauté Naturelle",
        description: "Série mettant l'accent sur la beauté authentique et la grâce naturelle.",
        category: "beaute",
        imageUrl: "/07.jpg",
        projectUrl: "#"
      },
      {
        title: "Mode Contemporaine",
        description: "Expression créative à travers la mode et les accessoires avec un style contemporain.",
        category: "mode",
        imageUrl: "/09.jpg",
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
      projectUrl: insertProject.projectUrl || null,
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
