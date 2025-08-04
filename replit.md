# Overview

Mahogany Games is a cozy indie game development studio focused on creating inclusive, meaningful gaming experiences with a nature-gaming aesthetic. The project is a full-stack web application built with React (frontend) and Express.js (backend), showcasing the studio's games, development blog, and community features. The site beautifully merges gaming culture with natural, organic elements using forest greens (#708f3c) and rich browns (#6f453a), emphasizing eco-friendly gaming, accessibility, and community engagement through a development journal and newsletter subscription.

## Recent Achievements (January 2025)
- Successfully implemented exact color specifications throughout the site with perfect accessibility compliance
- Created thematic SVG system: green icons for Active games (growing plants), amber/brown for Coming Soon (seeds in dirt)
- Achieved clean, solid color design removing all unwanted green tinge overlays
- Fixed all navigation accessibility issues with proper single tab stops
- Completed comprehensive button and badge contrast improvements meeting WCAG AA standards

# User Preferences

Preferred communication style: Simple, everyday language.

## Design Preferences
- **Color Scheme**: Exact colors specified by user for nature-gaming aesthetic
  - Green: #708f3c (forest/olive green)
  - Brown: #6f453a (rich brown)
- **Aesthetic**: Nature-gaming theme combining technology with organic elements
- **Background**: Wood texture background (user loves this feature)
- **Accessibility**: Site must meet accessibility standards with proper contrast ratios

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and caching
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom mahogany color palette and cozy design tokens
- **Build System**: Vite with hot module replacement and TypeScript support

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Storage Pattern**: Interface-based storage abstraction (IStorage) with in-memory implementation
- **API Design**: RESTful endpoints for blog posts, games, contact messages, and newsletter subscriptions
- **Development Setup**: Custom Vite integration for full-stack development experience
- **Error Handling**: Centralized error middleware with structured error responses

## Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Strongly typed schema definitions with Zod validation
- **Tables**: Users, blog posts, games, contact messages, and newsletter subscribers
- **Migrations**: Database migrations managed through Drizzle Kit

## Key Features
- **Blog System**: Development journal with categories, search, and filtering
- **Game Portfolio**: Showcase of current and upcoming games with progress tracking
- **Contact System**: Form handling for user inquiries with validation
- **Newsletter**: Email subscription system for community updates
- **Analytics**: Google Analytics integration for user behavior tracking

## Design System
- **Color Palette**: Custom nature-gaming color scheme using exact user specifications:
  - Primary Green: #708f3c (Forest/olive green for eco-friendly gaming themes)
  - Primary Brown: #6f453a (Rich brown connecting to natural wood elements)
  - Accessibility: WCAG AA compliant contrast ratios with dedicated accessible color variants
  - Wood Texture: Enhanced background pattern combining both colors for nature aesthetic
- **Typography**: Playfair Display for headings, system fonts for body text
- **Components**: Reusable UI components with consistent styling and behavior
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Enhanced focus states, high contrast colors, and proper semantic markup

# External Dependencies

## Core Framework Dependencies
- **React**: Frontend framework with TypeScript support
- **Express.js**: Backend web server framework
- **Vite**: Build tool and development server
- **TanStack React Query**: Server state management and data fetching

## Database and Storage
- **Drizzle ORM**: Type-safe database operations and schema management
- **@neondatabase/serverless**: PostgreSQL database driver for serverless environments
- **Drizzle Kit**: Database migration and schema management tools

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library for consistent iconography

## Development and Analytics
- **Google Analytics**: User behavior tracking and analytics
- **Replit**: Development environment integration and deployment
- **TypeScript**: Type safety across frontend and backend

## Form Handling and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Additional Tools
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional CSS class composition
- **wouter**: Lightweight routing for React applications