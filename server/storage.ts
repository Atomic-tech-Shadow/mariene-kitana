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
        title: "Ma reine Kitana rayonnante de beauté",
        description: "Ma reine éternelle dans toute sa splendeur. Son sourire illumine ma vie chaque jour.",
        category: "photo",
        imageUrl: "/attached_assets/kitana/06.jpg",
        projectUrl: "#"
      },
      {
        title: "Élégance naturelle",
        description: "Ma bien-aimée Mariène dans un moment de pure élégance. La beauté à l'état pur.",
        category: "beaute",
        imageUrl: "/attached_assets/kitana/00.jpg",
        projectUrl: "#"
      },
      {
        title: "Ton sourire illumine ma vie",
        description: "Ce sourire qui fait battre mon cœur plus fort à chaque fois. Tu es ma joie de vivre.",
        category: "photo",
        imageUrl: "/attached_assets/kitana/01.jpg",
        projectUrl: "#"
      },
      {
        title: "Beauté mystérieuse",
        description: "Mariène dans un regard captivant qui me transporte dans un autre monde.",
        category: "photo",
        imageUrl: "/attached_assets/kitana/02.jpg",
        projectUrl: "#"
      },
      {
        title: "Joie pure",
        description: "Ma reine dans un moment de bonheur authentique. Sa joie est contagieuse.",
        category: "beaute",
        imageUrl: "/attached_assets/kitana/03.jpg",
        projectUrl: "#"
      },
      {
        title: "Pensées profondes",
        description: "Mariène pensive et magnifique. Même dans ses réflexions, elle reste sublime.",
        category: "photo",
        imageUrl: "/attached_assets/kitana/04.jpg",
        projectUrl: "#"
      },
      {
        title: "Beauté naturelle",
        description: "Ma bien-aimée au naturel. Aucun artifice ne peut rivaliser avec sa beauté authentique.",
        category: "beaute",
        imageUrl: "/attached_assets/kitana/05.jpg",
        projectUrl: "#"
      },
      {
        title: "Élégance royale",
        description: "Vraiment une reine dans toute sa splendeur. Elle mérite une couronne.",
        category: "mode",
        imageUrl: "/attached_assets/kitana/07.jpg",
        projectUrl: "#"
      },
      {
        title: "Radiante",
        description: "Mariène rayonnante comme un soleil. Elle éclaire tout sur son passage.",
        category: "beaute",
        imageUrl: "/attached_assets/kitana/09.jpg",
        projectUrl: "#"
      },
      {
        title: "Charme irrésistible",
        description: "Ce charme naturel qui m'a conquis dès le premier regard. Irrésistible Kitana.",
        category: "photo",
        imageUrl: "/attached_assets/kitana/10.jpg",
        projectUrl: "#"
      },
      {
        title: "Magnifique sous tous les angles",
        description: "Peu importe l'angle, Mariène est toujours parfaite. Une beauté sans faille.",
        category: "beaute",
        imageUrl: "/attached_assets/kitana/11.jpg",
        projectUrl: "#"
      },
      {
        title: "Grâce naturelle",
        description: "La grâce incarnée. Chaque geste de Mariène est empreint d'une élégance naturelle.",
        category: "photo",
        imageUrl: "/attached_assets/kitana/12.jpg",
        projectUrl: "#"
      },
      {
        title: "Regard captivant",
        description: "Ces yeux dans lesquels je me perds chaque jour. Un regard qui parle d'amour.",
        category: "photo",
        imageUrl: "/attached_assets/kitana/13.jpg",
        projectUrl: "#"
      },
      {
        title: "Beauté ensoleillée",
        description: "Ma reine sous les rayons du soleil. Elle brille plus fort que tous les astres.",
        category: "beaute",
        imageUrl: "/attached_assets/kitana/14.jpg",
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
