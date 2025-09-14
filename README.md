# Candy Xie - Portfolio Website

A modern, responsive portfolio website showcasing work projects, personal projects, and professional information.

## 🌟 Features

- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Modern UI**: Clean, professional design with smooth animations
- **Project Showcase**: Dedicated sections for work and personal projects
- **Navigation**: Smooth scrolling navigation between sections
- **Contact Integration**: Easy-to-update contact information and social links

## 🚀 Live Site

Visit the live website at: [https://candpixie.github.io](https://candpixie.github.io)

## 📁 Structure

```
.
├── index.html          # Main website file
├── assets/
│   ├── images/         # Profile photos and project images
│   └── Resume_CandyXie_2025Sep.pdf  # CV/Resume file
└── README.md          # This file
```

## ✏️ Customization Guide

### 1. Personal Information
Edit the following sections in `index.html`:

- **Profile Photo**: Replace `assets/images/111F417C-4CA6-45AE-9B92-23C87B318B22_4_5005_c.jpeg` with your photo
- **Name & Title**: Update the `<h1>` and subtitle in the hero section
- **Bio**: Modify the intro paragraph to reflect your background
- **CV/Resume**: Replace `assets/Resume_CandyXie_2025Sep.pdf` with your resume

### 2. Adding Projects

#### Work Projects
Find the "Work & Academic Projects" section and replace the template cards:

```html
<div class="project-card">
    <h3>Your Project Title</h3>
    <p>Project description...</p>
    <div class="project-tags">
        <span class="tag">Technology</span>
        <span class="tag">Category</span>
    </div>
    <div class="project-links">
        <a href="your-project-url" class="project-link">View Project</a>
        <a href="your-github-url" class="project-link">GitHub</a>
    </div>
</div>
```

#### Personal Projects
Similarly, update the "Personal Projects" section with your own projects.

### 3. Contact Information
Update the contact section with your actual details:

```html
<p>
    <a href="mailto:your-actual-email@domain.com">your-actual-email@domain.com</a> • 
    <a href="https://linkedin.com/in/your-profile">LinkedIn</a> • 
    <a href="https://github.com/your-username">GitHub</a>
</p>
```

### 4. Colors & Styling
The website uses a cohesive color scheme. Main colors:
- Primary: `#d16ba5` (pink/purple)
- Secondary: `#6d597a` (muted purple)
- Background: `#ffe4ec` (light pink)

To change colors, update the CSS variables in the `<style>` section.

## 🛠️ Development

### Local Development
1. Clone the repository
2. Serve the files using any HTTP server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using VS Code Live Server extension
   ```
3. Open `http://localhost:8000` in your browser

### GitHub Pages Deployment
This site is automatically deployed via GitHub Pages. Any changes pushed to the main branch will be live within a few minutes.

## 📱 Responsive Features

- Mobile-first design approach
- Flexible grid layout for project cards
- Touch-friendly navigation
- Optimized typography for all screen sizes

## 🎨 Design Highlights

- **Glassmorphism Effects**: Semi-transparent sections with backdrop blur
- **Smooth Animations**: Hover effects and transitions
- **Professional Typography**: Clean, readable font hierarchy
- **Visual Hierarchy**: Clear section separation and content organization

## 🤝 Contributing

Feel free to suggest improvements or report issues!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
