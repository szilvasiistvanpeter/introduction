# Introduction

## Creating the the basic application with
```pnpm create vite@latest projekt-neve --template react-ts```

## About the Project
This project is a CV site built using React and TypeScript. The goal is to create a modern, responsive, and interactive platform to showcase professional experience, skills, and achievements.

## Why React?
React is a popular JavaScript library for building user interfaces. It allows developers to create reusable components, manage application state efficiently, and build dynamic and interactive web applications. React's ecosystem and community support make it an excellent choice for modern web development.

## Why PNPM?
PNPM (Performant NPM) is a fast, disk-efficient package manager. It is chosen for this project because:
- It uses a unique symlink-based approach to save disk space and speed up installations.
- It ensures consistent dependency resolution, reducing potential issues in collaborative environments.
- It is compatible with npm and Yarn, making it easy to integrate into existing workflows.

By combining React, TypeScript, and PNPM, this project leverages modern tools to deliver a high-quality CV site.

## UI Framework: Material UI (MUI)
To achieve a professional and consistent look, this project utilizes **Material UI**. It provides a robust set of ready-to-use components following Google's Material Design principles.

### Key UI Features
- **Responsive Layout:** Using MUI's Grid and Container systems for mobile-first design.
- **Theming:** Custom color palette to avoid the "standard Google look" and match professional branding.
- **Iconography:** Integrated Material Icons for visual cues in the skills and contact sections.

## Installation

After cloning the repository, install the dependencies using pnpm:

```bash
pnpm install @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto
```

## Getting Started

1. **Setup Theme:** Wrap your application in the `ThemeProvider` to enable custom branding.
2. **Import Fonts:** Add the Roboto fonts in your `main.tsx`:
   ```typescript
   import '@fontsource/roboto/300.css';
   import '@fontsource/roboto/400.css';
   import '@fontsource/roboto/500.css';
   import '@fontsource/roboto/700.css';
   ```
3. **Run Development Server:**
   ```bash
   pnpm dev
   ```

## Project Structure
- `src/components`: Reusable UI elements (Navbar, ProjectCards, etc.)
- `src/theme`: Custom MUI theme configuration
- `src/assets`: Images and professional documents (CV PDF)
