# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React and Create React App. The site showcases Connor Underwood's projects, experience, and resume in an interactive single-page application with animated UI elements.

## Common Development Commands

### Development
```bash
npm start              # Run dev server at http://localhost:3000
npm test               # Run test suite in watch mode
npm test -- --coverage # Run tests with coverage report
npm run build          # Build production bundle to /build
```

### Testing
The project uses React Testing Library and Jest (via react-scripts). Tests are located alongside components with `.test.js` or `.spec.js` extensions.

## Architecture

### Component Structure

The app uses a single-route architecture (all content on one page):

- **App.js**: Root component with React Router setup (currently only `/` route)
- **Home.jsx**: Main page layout composed of TopHalf, BottomHalf, and Footer
  - **TopHalf.jsx**: Hero section with Vanta.js animated background, profile photo, typewriter effect, and contact buttons
  - **BottomHalf.jsx**: Contains Projects and Resume sections with scroll-triggered animations
  - **Footer.jsx**: Site footer

### Key Sections

**Projects Section** (`src/components/Projects/`):
- Tab-based navigation for different project categories (Internships, Research, Software Engineering, Machine Learning)
- Project data is defined in separate JS files: `internships.js`, `research.js`, `sweprojects.js`, `mlprojects.js`
- Cards rendered via `WebsiteCard.jsx` and `MLCard.jsx` components
- To add a new project: Edit the relevant data file with project metadata (image, href, title, description, tags)

**Resume Section** (`src/components/Resume/`):
- Simple component displaying resume as an image with download link
- Resume PDF and image stored in `/public` directory

### Theming System

The app uses a custom theming system that works alongside Tailwind's dark mode:

- **Theme definitions**: `src/themes/darkTheme.js` and `src/themes/lightTheme.js`
- **Theme utilities**: `src/utils/applyTheme.js` exports `applyTheme()` and `createTheme()` functions
- **CSS variables**: Themes set custom CSS variables (`--theme-text`, `--theme-bg`, `--theme-secondary-bg`, `--theme-primary`)
- **Tailwind integration**: `tailwind.config.js` maps these CSS variables to Tailwind classes (`main-text`, `main-bg`, `secondary-bg`)
- **Dark mode**: Configured via Tailwind's `class` strategy (see `darkMode: "class"` in tailwind.config.js)

### Animation Libraries

- **Framer Motion**: Used for scroll-triggered animations and component transitions
- **Vanta.js**: Provides animated background effect in TopHalf (birds animation)
- **react-intersection-observer**: Detects when components enter viewport to trigger animations
- **typewriter-effect**: Creates typing animation for role titles in hero section

### Styling

- **Primary framework**: Tailwind CSS with custom configuration
- **Plugins**: Typography, Forms, Line Clamp (note: line-clamp is now built into Tailwind v3.3+)
- **Responsive design**: Uses Tailwind's responsive utilities and dark mode classes
- **Color scheme**: Primary color is indigo (`#6366f1`)

## Important Implementation Notes

### Adding New Projects

1. Navigate to the appropriate file in `src/components/Projects/` (e.g., `sweprojects.js` for software projects)
2. Add a new object to the array with:
   - `image`: Import path to project image (stored in `src/assets/`)
   - `href`: Link to project (GitHub, live site, etc.)
   - `title`: Project name
   - `description`: Brief description
   - `tags`: Array of technology tags
   - `color` and `bg`: Tailwind classes for styling

### Static Assets

- Resume files: Place in `/public` directory (e.g., `Connor_Underwood_2026_Resume.pdf`)
- Images: Import from `src/assets/` directory
- Public assets are accessible at root path (e.g., `./resume.pdf`)

### State Management

- Uses React's built-in `useState` and `useEffect` hooks
- Dark mode preference stored in localStorage with key `connor-underwood-dark`
- No external state management library (Redux, etc.)

### Browser Compatibility

Configured for modern browsers via `browserslist` in package.json:
- Production: >0.2% usage, not dead browsers
- Development: Latest Chrome, Firefox, Safari
