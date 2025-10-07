# AB Massage Website

A modern, single-page React website for a massage business built with Vite and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Deploying to Vercel

This project is configured for Vercel deployment.

### Option 1: Deploy via Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 2: Deploy via Vercel Dashboard
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in your Vercel dashboard
3. Vercel will automatically detect the settings and deploy

The `vercel.json` file is already configured with the correct build settings.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and development server (faster than Create React App)
- **Tailwind CSS** - Utility-first CSS framework for styling
- **PostCSS** - CSS processing (required for Tailwind)

## Project Structure

```
abmassage/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind directives
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── vercel.json          # Vercel deployment configuration
```

## Customization

The content placeholders in `src/App.jsx` are ready for you to fill in with your massage business details. The layout includes:

- Header with navigation
- Hero section
- Services section (3 service cards)
- About section
- Contact form
- Footer

All sections use Tailwind CSS classes for styling, making it easy to customize colors, spacing, and layout.
