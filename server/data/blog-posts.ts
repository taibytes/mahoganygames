import { BlogPost } from "@shared/schema";
import { randomUUID } from "crypto";

export const blogPostsData: BlogPost[] = [
  {
    id: randomUUID(),
    title: "UI Polish & Character Animations",
    slug: "ui-polish-character-animations",
    excerpt: "This week we focused on polishing the café interface and adding delightful character animations that bring our NPCs to life...",
    content: `# UI Polish & Character Animations

This week has been all about bringing life to our cozy café! I've been working on two major areas: polishing the user interface and adding character animations that make our NPCs feel more alive.

## Interface Improvements

The café management interface has received a significant overhaul. The new design features:

- **Cleaner menu layouts** with better visual hierarchy
- **Improved accessibility** with better contrast ratios and keyboard navigation
- **Smoother transitions** between different interface states
- **Mobile-friendly** touch controls for tablet players

## Character Animation System

One of the most exciting developments this week has been implementing our character animation system. Each café visitor now has:

- **Unique idle animations** that reflect their personality
- **Contextual reactions** to different drink orders
- **Smooth movement** between café areas
- **Expressive facial animations** during conversations

The system is built to be expandable, so adding new character types and animations will be straightforward as we grow our cast of café visitors.

## Technical Details

For those interested in the technical side, I'm using Godot's AnimationPlayer nodes with a custom state machine to manage character behaviors. This approach gives us fine control over timing while keeping the system performant.

## What's Next?

Next week, I'll be focusing on:
- Sound design and ambient café audio
- Save system implementation
- Tutorial sequence polishing

Stay tuned for more updates!`,
    category: "Dev Update",
    publishedAt: new Date("2024-12-15"),
    author: "Tai",
    readTime: 4,
    published: true
  },
  {
    id: randomUUID(),
    title: "Creating Cozy: The Art of Atmosphere",
    slug: "creating-cozy-art-of-atmosphere",
    excerpt: "How we approach creating that warm, inviting feeling that makes players want to stay in our café world...",
    content: `# Creating Cozy: The Art of Atmosphere

What makes a game feel "cozy"? It's a question I've been exploring deeply while developing Sip & Serve, and I've discovered it's about much more than just warm colors and soft music.

## The Psychology of Cozy

Cozy games tap into our fundamental need for safety, comfort, and belonging. They create digital spaces where we can decompress from the stresses of daily life. In Sip & Serve, every design decision is filtered through this lens.

## Visual Design Principles

### Warm Color Palette
Our color scheme centers around warm mahogany browns, soft creams, and gentle golden highlights. These colors psychologically evoke feelings of warmth and comfort.

### Soft Lighting
Lighting in the café changes throughout the day, from the gentle morning glow to the warm evening ambiance. This dynamic lighting helps players feel connected to the natural rhythm of the day.

### Organic Shapes
Sharp angles and harsh lines are minimized in favor of rounded corners and organic shapes that feel more natural and inviting.

## Audio Atmosphere

The soundscape is just as important as the visuals:

- **Ambient café sounds**: The gentle hum of conversation, coffee brewing, and pages turning
- **Seasonal audio**: Rain on windows in autumn, birds chirping in spring
- **Lo-fi background music** that enhances rather than distracts

## Interaction Design

Even our interaction design supports the cozy feeling:

- **No rush mechanics**: Players are never forced to hurry
- **Gentle feedback**: Success and failure are communicated softly
- **Player agency**: Every interaction feels meaningful and chosen

## The Result

When all these elements work together, they create something greater than the sum of their parts: a digital space that feels like home.`,
    category: "Design",
    publishedAt: new Date("2024-12-08"),
    author: "Tai",
    readTime: 6,
    published: true
  },
  {
    id: randomUUID(),
    title: "Building Inclusive Gaming Experiences",
    slug: "building-inclusive-gaming-experiences",
    excerpt: "Our commitment to making games that everyone can enjoy, featuring colorblind-friendly design and intuitive controls...",
    content: `# Building Inclusive Gaming Experiences

Accessibility isn't an afterthought at Mahogany Games—it's a core principle that guides every aspect of our development process. Here's how we're making sure Sip & Serve can be enjoyed by as many players as possible.

## Visual Accessibility

### Colorblind-Friendly Design
- All important information is conveyed through multiple visual cues, not just color
- High contrast mode available for players with low vision
- Customizable UI scaling from 75% to 150%

### Text and Typography
- Clear, readable fonts with sufficient contrast ratios
- Adjustable text size options
- Support for screen readers

## Motor Accessibility

### Control Options
- Full keyboard support for all interactions
- Customizable key bindings
- Mouse sensitivity adjustment
- One-handed control schemes

### Interaction Design
- Large, clearly defined clickable areas
- No precision-demanding mechanics
- Hold/toggle options for sustained actions

## Cognitive Accessibility

### Clear Interface Design
- Consistent visual language throughout
- Minimal cognitive load in menu navigation
- Optional tutorial mode that can be revisited

### Flexible Pacing
- No time pressure mechanics
- Ability to pause at any time
- Save anywhere functionality

## Testing and Feedback

We're working with accessibility consultants and conducting regular testing sessions with players who have different accessibility needs. This feedback is invaluable in identifying issues we might miss.

## Beyond Compliance

Our goal isn't just to meet accessibility guidelines—it's to create genuinely welcoming experiences. When we design with accessibility in mind from the start, we often discover that these features improve the experience for all players.

## Community Input

We're always looking for feedback from the community. If you have specific accessibility needs or suggestions, please don't hesitate to reach out. Your input helps us build better games for everyone.`,
    category: "Accessibility",
    publishedAt: new Date("2024-11-28"),
    author: "Tai",
    readTime: 5,
    published: true
  }
];
