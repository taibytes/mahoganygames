import { 
  type User, 
  type InsertUser, 
  type BlogPost, 
  type InsertBlogPost,
  type ContactMessage,
  type InsertContactMessage,
  type NewsletterSubscriber,
  type InsertNewsletterSubscriber,
  type Game,
  type InsertGame
} from "@shared/schema";
import { randomUUID } from "crypto";
import { blogPostsData } from "./data/blog-posts";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  
  subscribeToNewsletter(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  isEmailSubscribed(email: string): Promise<boolean>;
  
  getGames(): Promise<Game[]>;
  getGame(slug: string): Promise<Game | undefined>;
  getFeaturedGame(): Promise<Game | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogPosts: Map<string, BlogPost>;
  private contactMessages: Map<string, ContactMessage>;
  private newsletterSubscribers: Map<string, NewsletterSubscriber>;
  private games: Map<string, Game>;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.contactMessages = new Map();
    this.newsletterSubscribers = new Map();
    this.games = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Initialize blog posts
    blogPostsData.forEach(post => {
      this.blogPosts.set(post.slug, post);
    });

    // Initialize featured game
    const sipAndServe: Game = {
      id: randomUUID(),
      title: "Sip & Serve",
      slug: "sip-and-serve",
      description: "Manage a peaceful café, serve warm drinks, and unwind in this cozy simulation game. Experience the joy of creating the perfect atmosphere where every customer feels at home.",
      shortDescription: "Cozy café management with heartwarming stories and peaceful gameplay.",
      category: "Simulation",
      status: "active",
      progress: 65,
      engine: "Godot Engine",
      featured: true,
      releaseDate: null,
      features: ["Craft Specialty Drinks", "Heartwarming Stories", "Customize Your Café", "Lo-fi Soundtrack"]
    };
    this.games.set(sipAndServe.slug, sipAndServe);

    // Add future games
    const voidColony: Game = {
      id: randomUUID(),
      title: "Void Colony",
      slug: "void-colony",
      description: "After a mysterious cataclysm fractured the known galaxy, only fragments of ancient alien civilizations remain. As the last Overseer of the Void Colonization Initiative, your mission is clear: rebuild your alien species from the stardust, reclaim lost knowledge, and create a thriving interstellar empire from nothing. Start with a single pod on a barren asteroid. Harvest exotic resources, awaken specialized alien workers, and build strange, beautiful structures that automate your growth. Unlock powerful technologies, discover abandoned relics, and expand to new planets—each with their own challenges, mysteries, and alien biomes. In Void Colony, the universe is quiet, strange, and full of opportunity. Whether you're a casual tapper or a methodical strategist, this idle experience lets you build at your own pace—and shape the future of your kind.",
      shortDescription: "Rebuild. Evolve. Expand. A relaxing, addictive idle strategy game set in the remnants of a forgotten galaxy.",
      category: "Strategy",
      status: "coming_soon",
      progress: 25,
      engine: "Godot Engine",
      featured: false,
      releaseDate: null,
      features: ["🪐 Idle Strategy", "Alien Civilizations", "Resource Automation", "Galactic Expansion"]
    };
    this.games.set(voidColony.slug, voidColony);

    const hollowed: Game = {
      id: randomUUID(),
      title: "Hollowed",
      slug: "hollowed",
      description: "Once a sanctuary for Black families during segregation, Lakefall Retreat was a place of laughter, healing, and community—until a fire in 1978 left it charred and abandoned. Now, over 40 years later, a group of descendants returns to the forgotten grounds for a weekend of restoration and remembrance. But something has been waiting. Watching. Hollowed by grief, betrayal, and blood. As the line between memory and madness begins to blur, old secrets claw their way to the surface. Rituals once meant to protect now beckon something darker. You control the choices of seven characters, each haunted by more than just their past—and every decision you make will shape who survives, who suffers, and who becomes part of the Hollowed.",
      shortDescription: "A psychological horror game exploring generational trauma through the lens of seven descendants returning to an abandoned retreat.",
      category: "Horror",
      status: "concept",
      progress: 10,
      engine: "Godot Engine",
      featured: false,
      releaseDate: null,
      features: ["Psychological Horror", "Multiple Characters", "Choice-driven Narrative", "Historical Context"]
    };
    this.games.set(hollowed.slug, hollowed);
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.published)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  async getBlogPost(slug: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { 
      ...insertPost, 
      id,
      author: insertPost.author || "Tai",
      readTime: insertPost.readTime || 5,
      published: insertPost.published !== undefined ? insertPost.published : true
    };
    this.blogPosts.set(post.slug, post);
    return post;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      createdAt: new Date(),
      responded: false
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async subscribeToNewsletter(insertSubscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const id = randomUUID();
    const subscriber: NewsletterSubscriber = {
      ...insertSubscriber,
      id,
      subscribedAt: new Date(),
      active: true
    };
    this.newsletterSubscribers.set(subscriber.email, subscriber);
    return subscriber;
  }

  async isEmailSubscribed(email: string): Promise<boolean> {
    const subscriber = this.newsletterSubscribers.get(email);
    return subscriber ? subscriber.active : false;
  }

  async getGames(): Promise<Game[]> {
    return Array.from(this.games.values());
  }

  async getGame(slug: string): Promise<Game | undefined> {
    return this.games.get(slug);
  }

  async getFeaturedGame(): Promise<Game | undefined> {
    return Array.from(this.games.values()).find(game => game.featured);
  }
}

export const storage = new MemStorage();
