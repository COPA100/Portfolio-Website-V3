# Portfolio Website V3

## About
This website is essentially my resume presented in a minimal way with a creative touch. It also highlights technologies I utilized for this project, which includes HTML, CSS, Tailwind CSS, JavaScript, React.js, Vite, and Node.js.

The site demonstrates my focus on optimal UI/UX design, accessibility, responsiveness, and clean code practices. I also utilized React.js to make reusable components and separated data into `my-project/src/data` to allow easier changes to website content. Overall, this project shows my ability to make aesthetic and functional websites.

## Features

- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- **Smooth Animations** - Custom fade-in animations using Intersection Observer API
- **Glassmorphism UI** - Modern frosted glass effects throughout the interface
- **Interactive Elements** - Hover effects, smooth scrolling, and animated hamburger menu
- **Performance Optimized** - Built with Vite for fast loading and development
- **Modular Architecture** - Reusable React components and organized data structure

## Tech Stack

- **Frontend**: React.js, HTML5, CSS3
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **Runtime**: Node.js
- **Deployment**: Github Pages, domain from Namecheap.com

## Project Structure

```
my-project/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Main page sections
│   ├── data/           # Content data (easy to update)
│   ├── hooks/          # Custom React hooks
│   └── assets/         # Images and static files
├── public/             # Public assets
└── package.json        # Dependencies and scripts
```

## Customization

All content can be easily updated by modifying the files in the `src/data/` directory:

- `about.js` - About section content
- `experience.js` - Work experience details
- `projects.jsx` - Project showcase items
- `navLinks.js` - Navigation menu items
- `socialLinks.jsx` - Social media links