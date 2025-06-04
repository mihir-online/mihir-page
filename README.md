# Mihir.page - Personal Portfolio & Project Hub

Welcome to the source code repository for [mihir.page](https://mihir.page), my personal portfolio website and project management hub. This repository serves as both a showcase of my work and a central location for managing frontend development of my various projects.

## 🎯 Project Overview


It is WIP, so wait for full Deployment.

This website is designed with a unique notebook-inspired interface, leveraging the `.page` TLD concept. The design features:
- A notebook-style layout with bookmarks and notes
- Page-flip transitions for navigation
- A clean, professional aesthetic
- Responsive design for all devices

## 🏗️ Technical Stack

- **Framework**: React + TypeScript
- **Build Tool**: Vite
- **Deployment**: Netlify
- **Domain Management**: Cloudflare
- **Version Control**: GitHub
- **Design Tools**: Figma (for UI/UX design)

## 📁 Repository Structure

The Dream:
```
mihir-page/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── common/         # Shared components (buttons, inputs, etc.)
│   │   ├── layout/         # Layout-specific components
│   │   └── features/       # Feature-specific components
│   ├── pages/              # Page components
│   │   ├── home/          # Home page components
│   │   ├── projects/      # Projects page components
│   │   ├── blog/      # Projects page components
│   │   └── info/          # Blog/Notes page components
│   ├── layouts/            # Layout components
│   │   ├── MainLayout/    # Main layout wrapper
│   │   ├── NotebookLayout/ # Layout for Page Like View
|   |   └── BasicLayout/    # Easy to build Layout to start with. Contains Navigation, Sidebar and Header
│   ├── styles/             # Global styles and themes
│   │   ├── themes/        # Theme configurations
│   │   │   ├── _variables.scss    # Global SCSS variables
│   │   │   ├── _colors.scss       # Color definitions
│   │   │   └── _typography.scss   # Typography settings
│   │   ├── global/        # Global styles
│   │   │   ├── _reset.scss       # CSS reset
│   │   │   ├── _base.scss        # Base styles
│   │   │   └── main.scss         # Main SCSS entry point
│   │   ├── component/     # Component styles
│   │   └── mixins/        # Style mixins and utilities
│   ├── assets/            # Source assets (processed by build)
│   │   ├── images/        # Image assets
│   │   ├── icons/         # Icon assets
│   │   ├── fonts/         # Font files
│   │   └── animations/    # Animation files
│   ├── public/            # Static assets (copied as-is)
│   │   ├── favicon/       # Favicon files
│   │   ├── robots.txt     # SEO configuration
│   │   └── manifest.json  # PWA manifest
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   │   ├── api/          # API utilities
│   │   ├── helpers/      # Helper functions
│   │   │   ├── animations/    # Animation utilities
│   │   │   ├── formatting/    # Data formatting functions
│   │   │   └── validation/    # Validation functions
│   │   ├── hooks/        # Custom hooks for shared logic
│   ├── constants/         # Application constants
│   │   ├── routes.ts     # Route definitions
│   │   ├── config.ts     # App configuration
│   │   └── enums.ts      # TypeScript enums
│   ├── types/            # TypeScript type definitions
│   │   ├── api/         # API types
│   │   ├── models/      # Data models
│   │   └── props/       # Component prop types
│   ├── services/         # Service layer
│   │   ├── api/         # API services
│   │   └── storage/     # Storage services
│   └── context/          # React Context providers
├── docs/                 # Documentation
│   ├── planning/        # Project planning documents
│   ├── hld/            # High-Level Design documents
│   └── lld/            # Low-Level Design documents
├── tests/               # Test files
│   ├── unit/           # Unit tests
│   ├── integration/    # Integration tests
│   └── e2e/            # End-to-end tests
├── scripts/            # Build and utility scripts
├── .github/            # GitHub specific files
│   └── workflows/      # GitHub Actions workflows
├── .gitignore         # Git ignore rules
├── eslint.config.js   # ESLint configuration
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript base configuration
├── tsconfig.app.json  # TypeScript app configuration
├── tsconfig.node.json # TypeScript Node configuration
├── package.json       # Project dependencies and scripts
└── index.html         # Entry HTML file

## 🚀 Deployment Setup

### Domain Configuration
- Domain: mihir.page
- Registrar: Cloudflare
- DNS Management: Cloudflare
- SSL: Cloudflare SSL/TLS

### Deployment Process
1. Push code to GitHub repository
2. Netlify automatically builds and deploys from main branch
3. Custom domain configuration in Netlify
4. SSL certificate management through Cloudflare

## 📋 Development Roadmap

### Phase 1: Foundation
- [ ] Basic React + TypeScript setup
- [ ] Notebook-style layout implementation
- [ ] Page transition animations
- [ ] Responsive design implementation
- [ ] Basic content structure

### Phase 2: Core Features
- [ ] Project showcase section
- [ ] Blog/Notes section
- [ ] Contact form
- [ ] SEO optimization
- [ ] Performance optimization

### Phase 3: Advanced Features
- [ ] Interactive notebook elements
- [ ] Project management dashboard
- [ ] Dark/Light theme
- [ ] Analytics integration
- [ ] Content management system

## 🔧 Local Development

1. Clone the repository:
```bash
git clone https://github.com/mihir-online/mihir-page.git
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📝 Documentation

Detailed documentation can be found in the `docs` directory:
- `docs/planning/`: Project planning and roadmap
- `docs/hld/`: High-Level Design documents
- `docs/lld/`: Low-Level Design documents

## 🤝 Contributing

While this is primarily a personal project, suggestions and improvements are welcome. Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- GitHub: [@mihir-online](https://github.com/mihir-online)
- Website: [mihir.page](https://mihir.page)

---


### Asset Organization Guidelines

1. **src/assets/**
   - Use for assets that need processing by the build system
   - Images that need optimization
   - SVGs that need to be imported as components
   - Fonts that need to be processed
   - Files that need to be hashed for cache busting

2. **public/**
   - Use for static assets that should be served as-is
   - Files that need to be referenced by absolute URL
   - Files that need to be accessible at a specific path
   - Large files that don't need processing
   - Files that need to be referenced in HTML (like favicon)


*This README will be continuously updated as the project evolves.*
