# Portfolio Application

## Overview

This is a modern portfolio website built with React, TypeScript, and Express.js. The application showcases a creative designer's work through an elegant, animated interface with project galleries, contact forms, and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth transitions and animations
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API endpoints
- **Development**: Hot module replacement via Vite integration
- **Error Handling**: Centralized error middleware with structured responses

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling and mobile menu
- **Hero Section**: Animated landing area with call-to-action buttons
- **Projects Gallery**: Filterable project showcase with category-based filtering
- **About Section**: Personal information with animated skill progress bars
- **Contact Section**: Form with validation and social media links
- **UI Library**: Complete set of reusable components (buttons, cards, forms, etc.)

### Backend Components
- **Route Handlers**: RESTful endpoints for projects and contact management
- **Storage Layer**: Abstract storage interface with memory-based implementation
- **Middleware**: Request logging, JSON parsing, static file serving
- **Development Tools**: Vite integration for hot reloading

### Shared Components
- **Schema Definitions**: Zod validation schemas and TypeScript types
- **Database Models**: Drizzle table definitions for projects and contacts
- **Portfolio Data**: Static content configuration for user information

## Data Flow

### Project Data Flow
1. Projects are stored in memory storage (development) or PostgreSQL (production)
2. Frontend fetches projects via `/api/projects` endpoint
3. Projects can be filtered by category using `/api/projects/category/:category`
4. React Query manages caching and synchronization

### Contact Form Flow
1. User submits contact form with validation
2. Frontend sends POST request to `/api/contact`
3. Server validates data using Zod schemas
4. Contact is stored and success response returned
5. UI shows success toast notification

### Static Content Flow
1. Portfolio content is defined in shared schema
2. Components import and display static user information
3. Images are served from external URLs (Unsplash)

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI components, Lucide icons
- **Styling**: Tailwind CSS, Class Variance Authority
- **Animations**: Framer Motion
- **Validation**: Zod with React Hook Form
- **Database**: Drizzle ORM, Neon Database serverless driver

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Development**: tsx for TypeScript execution
- **Tooling**: PostCSS, Autoprefixer

### Optional Integrations
- **Analytics**: Replit development banner integration
- **Error Tracking**: Replit runtime error modal

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static files in `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Setup**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses tsx for hot reloading and Vite dev server
- **Production**: Serves static files and runs compiled Express server
- **Database**: Requires `DATABASE_URL` environment variable for PostgreSQL

### File Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend
├── shared/          # Shared types and schemas
├── dist/            # Build output directory
└── migrations/      # Database migration files
```

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database access
- Environment variables for database connection
- Static file serving capability

The application is designed to be deployed on platforms like Replit, Vercel, or any Node.js hosting service with PostgreSQL support.