# Component Structure Documentation

This document outlines the refactored component structure for the Lupo Oluwatobi Portfolio website.

## Overview

The portfolio has been refactored from a single large file into a modular component-based architecture. This makes the code more maintainable, reusable, and easier to understand.

## Component Structure

```
components/
├── index.ts                 # Main export file for all components
├── layout/                  # Layout components
│   ├── Navigation.tsx       # Navigation bar with mobile menu
│   ├── Footer.tsx          # Footer component
│   ├── CustomCursor.tsx    # Custom cursor animation
│   └── LoadingScreen.tsx   # Loading animation
├── sections/               # Main page sections
│   ├── HeroSection.tsx     # Hero/landing section
│   ├── AboutSection.tsx    # About me section
│   ├── SkillsSection.tsx   # Skills showcase
│   ├── ProjectsSection.tsx # Projects showcase
│   └── ContactSection.tsx  # Contact information
└── ui/                     # Reusable UI components
    ├── SkillCard.tsx       # Individual skill card
    ├── ProjectCard.tsx     # Individual project card
    └── ContactCard.tsx     # Individual contact card
```

## Data Structure

```
lib/
└── data.ts                 # Centralized data for skills and projects
```

## Component Details

### Layout Components

#### Navigation.tsx
- **Purpose**: Main navigation bar with logo, menu items, and mobile responsiveness
- **Props**: 
  - `activeSection`: Current active section for highlighting
  - `scrollToSection`: Function to scroll to specific sections
- **Features**: 
  - Responsive design with mobile menu
  - Active section highlighting
  - Smooth scroll navigation

#### Footer.tsx
- **Purpose**: Footer with branding and copyright information
- **Features**: 
  - Animated entrance
  - Responsive layout

#### CustomCursor.tsx
- **Purpose**: Custom cursor animation that follows mouse movement
- **Features**: 
  - Spring physics for smooth movement
  - Gradient styling

#### LoadingScreen.tsx
- **Purpose**: Loading animation shown while page loads
- **Props**: 
  - `isLoaded`: Boolean to control visibility
- **Features**: 
  - Spinning animation
  - Fade out transition

### Section Components

#### HeroSection.tsx
- **Purpose**: Main landing section with introduction and call-to-action
- **Props**: 
  - `heroRef`: Ref for scroll detection
  - `heroY`: Parallax effect value
  - `heroOpacity`: Opacity for scroll effect
  - `scrollToSection`: Function for navigation
- **Features**: 
  - Parallax scrolling effects
  - Animated background elements
  - Floating tech icons
  - Call-to-action buttons

#### AboutSection.tsx
- **Purpose**: About me section with personal information
- **Props**: 
  - `aboutRef`: Ref for scroll detection
- **Features**: 
  - Information cards
  - Animated entrance effects

#### SkillsSection.tsx
- **Purpose**: Skills showcase with technology cards
- **Props**: 
  - `skillsRef`: Ref for scroll detection
  - `skills`: Array of skill data
- **Features**: 
  - Grid layout of skill cards
  - Hover animations
  - Category badges

#### ProjectsSection.tsx
- **Purpose**: Projects showcase with detailed project information
- **Props**: 
  - `projectsRef`: Ref for scroll detection
  - `projects`: Array of project data
- **Features**: 
  - Alternating layout
  - Project images with overlays
  - Technology stack display
  - Project metadata

#### ContactSection.tsx
- **Purpose**: Contact information and call-to-action
- **Props**: 
  - `contactRef`: Ref for scroll detection
- **Features**: 
  - Contact cards with social links
  - Call-to-action buttons
  - Animated background

### UI Components

#### SkillCard.tsx
- **Purpose**: Individual skill display card
- **Props**: 
  - `skill`: Skill object with name, icon, category, and color
  - `index`: Index for staggered animations
- **Features**: 
  - Hover effects
  - Gradient backgrounds
  - Icon display

#### ProjectCard.tsx
- **Purpose**: Individual project display card
- **Props**: 
  - `project`: Project object with all project details
  - `index`: Index for layout alternation
- **Features**: 
  - Image with hover overlay
  - Technology badges
  - Project metadata
  - Action buttons

#### ContactCard.tsx
- **Purpose**: Individual contact method card
- **Props**: 
  - `contact`: Contact object with icon, title, subtitle, action, and link
  - `index`: Index for staggered animations
- **Features**: 
  - Icon display
  - Link functionality
  - Hover effects

## Data Structure

### Skills Data
```typescript
interface Skill {
  name: string
  icon: LucideIcon
  category: string
  color: string
}
```

### Projects Data
```typescript
interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  github: string
  live: string
  featured: boolean
  category: string
  year: string
  duration: string
  team: string
}
```

## Usage

### Importing Components
```typescript
import {
  Navigation,
  Footer,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
} from "@/components"
```

### Importing Data
```typescript
import { skills, projects } from "@/lib/data"
```

## Benefits of This Structure

1. **Modularity**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused across different pages
3. **Maintainability**: Changes to specific sections only require editing the relevant component
4. **Readability**: The main page is now clean and easy to understand
5. **Scalability**: Easy to add new sections or modify existing ones
6. **Testing**: Individual components can be tested in isolation
7. **Performance**: Components can be optimized individually

## Adding New Features

To add new features:

1. **New Section**: Create a new component in `components/sections/`
2. **New UI Component**: Create a new component in `components/ui/`
3. **New Data**: Add to `lib/data.ts`
4. **Update Exports**: Add to `components/index.ts`
5. **Update Main Page**: Import and use in `app/page.tsx`

This structure makes the codebase much more organized and maintainable while preserving all the original functionality and animations. 