# Mahogany Games

A cozy indie game development studio focused on creating inclusive, meaningful gaming experiences with a nature-gaming aesthetic.

## 🌲 About

Mahogany Games beautifully merges gaming culture with natural, organic elements using our signature forest greens (#708f3c) and rich browns (#6f453a). We emphasize eco-friendly gaming, accessibility, and community engagement through our development journal and interactive experiences.

## ✨ Features

- **Game Portfolio**: Showcase of current and upcoming games with progress tracking
- **Development Blog**: Regular updates on our game development journey
- **Contact System**: Direct communication with our team
- **Newsletter**: Stay updated with the latest studio news
- **Accessibility First**: WCAG AA compliant design with proper contrast ratios
- **Responsive Design**: Beautiful experience across all devices

## 🛠️ Tech Stack

### Frontend
- **React** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** with custom nature-gaming design system
- **shadcn/ui** components for consistent UI
- **TanStack React Query** for server state management
- **Wouter** for lightweight routing

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** with PostgreSQL
- **Zod** for runtime validation
- **Interface-based storage** abstraction

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mahogany-games.git
cd mahogany-games
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy example environment file
cp .env.example .env

# Configure your database and other settings
```

4. Run database migrations:
```bash
npm run db:migrate
```

5. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                # Backend Express application
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── data/              # Sample data
├── shared/                # Shared types and schemas
└── docs/                  # Documentation
```

## 🎨 Design System

Our design system centers around the nature-gaming aesthetic:

- **Forest Green**: `#708f3c` - Represents growth, active games, and eco-friendly gaming
- **Rich Brown**: `#6f453a` - Connects to natural wood elements and upcoming projects
- **Wood Texture**: Subtle background pattern combining both signature colors
- **Accessibility**: WCAG AA compliant contrast ratios throughout

## 🎮 Game Status Icons

- **🌱 Active Games**: Light green icons representing growing plants
- **🌰 Coming Soon**: Amber/brown icons representing seeds planted in earth
- **⚪ Concept Phase**: Neutral colors for early development stages

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## 🤝 Contributing

We welcome contributions to Mahogany Games! Please read our contributing guidelines and code of conduct.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌿 Connect With Us

- Website: [Your Website]
- GitHub: [@yourusername](https://github.com/yourusername)
- Twitter: [@yourusername](https://twitter.com/yourusername)

---

*Creating cozy, inclusive, and meaningful gaming experiences that connect nature and technology to warm the heart and inspire the soul.*