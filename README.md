# 🚀 React Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases projects, skills, and provides a way to get in touch.

![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.8-06B6D4?logo=tailwindcss)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Beautiful gradient backgrounds and smooth animations with Framer Motion
- 🧭 **React Router** - Smooth client-side navigation between pages
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **Component-Based** - Modular and maintainable code structure
- 🎭 **Interactive Animations** - Engaging user experience with Framer Motion
- 📧 **Contact Form** - Easy way for visitors to get in touch

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 4.1.8
- **Routing:** React Router DOM 7.6.2
- **Animations:** Framer Motion 12.18.1
- **Icons:** React Icons 5.5.0
- **Linting:** ESLint 9.25.0

## 📁 Project Structure

```
react-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skillssection.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── assets/          # Images and other assets
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Lasara2001/react-portfolio.git
```

2. Navigate to the project directory
```bash
cd react-portfolio
```

3. Install dependencies
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## 📄 Available Pages

- **Home** - Landing page with introduction
- **About** - Personal information and background
- **Skills** - Technical skills and competencies
- **Projects** - Portfolio of completed projects
- **Contact** - Contact form and information

## 🎨 Customization

### Colors

The project uses a gradient color scheme defined in `App.jsx`:
```jsx
bg-gradient-to-br from-blue-950 via-purple-700 to-pink-400
```

You can customize these colors in the Tailwind CSS classes throughout the components.

### Content

Update the content in each component file under `src/components/` to personalize your portfolio:
- `Home.jsx` - Your introduction and tagline
- `About.jsx` - Your background and story
- `Skillssection.jsx` - Your technical skills
- `Projects.jsx` - Your portfolio projects
- `Contact.jsx` - Your contact information

## 📦 Dependencies

### Production Dependencies
- `react` - UI library
- `react-dom` - React DOM renderer
- `react-router-dom` - Client-side routing
- `framer-motion` - Animation library
- `react-icons` - Icon library
- `tailwindcss` - Utility-first CSS framework

### Dev Dependencies
- `vite` - Build tool and dev server
- `eslint` - Code linting
- `autoprefixer` - PostCSS plugin
- `@vitejs/plugin-react` - Vite React plugin

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Lasara2001/react-portfolio/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👤 Author

**Lasara2001**
- GitHub: [@Lasara2001](https://github.com/Lasara2001)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ using React and Vite
