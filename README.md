# Sandy Thomas - Portfolio Website

A modern, responsive portfolio website built with React, featuring a light teal blue and lime green color scheme.

## About

This portfolio showcases Sandy Thomas, a Computer Science student and Jordan Wings Scholar at California Baptist University.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Modern UI**: Clean and modern interface with smooth animations and transitions
- **Color Scheme**: Beautiful gradient designs using light teal blue (#5fd3d1, #4fd1c5) and lime green (#84cc16, #a3e635)
- **Smooth Navigation**: Smooth scrolling between sections for better user experience

## Sections

- **Hero/Landing**: Introduction with name, titles, and call-to-action
- **About**: Detailed information about background, achievements, and education

## Tech Stack

- React 18.2.0
- Create React App
- CSS3 with CSS Grid and Flexbox
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000)

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build files will be in the `build` directory, ready for deployment.

## Deployment Options

This app can be deployed to various platforms:
- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build folder to S3 bucket

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   └── About.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Customization

- Colors can be adjusted in `src/App.css` using CSS variables
- Content can be modified in component files
- Add new sections by creating components in `src/components/`

## License

This project is open source and available for personal use.

---

Built with ❤️ by Sandy Thomas

