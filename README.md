# K Rajtilak's Portfolio Website 🌟

[![Open in Browser](https://img.shields.io/badge/Status%20-Live-brightgreen?style=for-the-badge&logo=googlechrome)](https://krajtilak.vercel.app)

Welcome to the GitHub repository for my personal portfolio website. This repository contains the source code and project structure for my portfolio, which showcases my skills, projects, services, and blog.

## Table of Contents 📚
- Overview
- Features
- Technology Stack
- Project Structure
- Deployment
- Development Guide
- System Architecture
- Contributing
- License

## Overview 🌐
This portfolio website serves as a professional and interactive platform to present my:
- Personal Introduction ✍️
- Projects and Skills 🚀
- Blog Posts 📝
- Services Offered 💼

The website uses modern web development practices and a responsive design to ensure compatibility across devices.

## Features ✨
- **Dynamic Hero Section:** An animated introduction with a typed effect showcasing my roles (Developer, Freelancer, Designer).
- **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.
- **Project Showcase:** Dedicated section displaying featured projects with descriptions and links.
- **Services Section:** Highlights the technical services I provide.
- **Blog Integration:** A blog platform for sharing articles and insights.
- **Social Links:** Integrated links to GitHub, LinkedIn, Twitter, and Instagram.

## Technology Stack 🛠️
- **Frontend:**
  - HTML5: Markup structure.
  - CSS3: Styling with responsive design using Flexbox and Grid.
  - JavaScript: Interactivity and animations.
- **Hosting:**
  - Vercel: For deployment and CDN.

## Project Structure 📂
```plaintext
Directory structure:
└── rajtilak-2020-k-rajtilak_s-portfolio-v2/
    ├── README.md
    ├── LICENSE
    ├── index.html
    └── assets/
        ├── css/
        │   └── main.css
        ├── img/
        │   ├── Raj.webp
        │   └── about.webp
        ├── js/
        │   └── main.js
        └── vendor/
            ├── aos/
            │   └── aos.js
            ├── bootstrap-icons/
            │   ├── bootstrap-icons.css
            │   ├── bootstrap-icons.json
            │   └── fonts/
            │       └── bootstrap-icons.woff2
            ├── email-form/
            │   └── validate.js
            ├── glightbox/
            │   └── js/
            │       └── glightbox.js
            ├── imagesloaded/
            ├── isotope-layout/
            ├── purecounter/
            │   └── purecounter_vanilla.js
            ├── typed.js/
            │   └── typed.umd.js
            └── waypoints/
                └── noframework.waypoints.js

```

## Deployment 🚀
The website is deployed on Vercel for seamless performance and accessibility. 

[![Live Demo](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel)](https://krajtilak.vercel.app)

### Steps to Deploy
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Use `vercel` CLI or connect the repo to Vercel for deployment.

## Development Guide 🛠️
### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or above)
- npm or yarn

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally 🖥️
Start the development server:
```bash
npm run dev
```
The website will be available at `http://localhost:3000`.

### Building for Production 📦
To create a production build:
```bash
npm run build
```
The optimized build will be located in the `dist` folder.

## 🔧 System Architecture

```mermaid
graph TD
    A[K Rajtilak's Website] 
    A --> B[README.md]
    A --> C[LICENSE]
    A --> D[index.html]
    A --> E[assets/]
    E --> F[css/]
    F --> F1[main.css]
    E --> G[img/]
    G --> G1[Raj.webp]
    G --> G2[about.webp]
    E --> H[js/]
    H --> H1[main.js]
    E --> I[vendor/]
    I --> J[aos/]
    J --> J1[aos.js]
    I --> K[bootstrap-icons/]
    K --> K1[bootstrap-icons.css]
    K --> K2[bootstrap-icons.json]
    K --> K3[fonts/]
    K3 --> K31[bootstrap-icons.woff2]
    I --> L[email-form/]
    L --> L1[validate.js]
    I --> M[glightbox/]
    M --> M1[js/]
    M1 --> M11[glightbox.js]
    I --> N[imagesloaded/]
    I --> O[isotope-layout/]
    I --> P[purecounter/]
    P --> P1[purecounter_vanilla.js]
    I --> Q[typed.js/]
    Q --> Q1[typed.umd.js]
    I --> R[waypoints/]
    R --> R1[noframework.waypoints.js]
```


## Contributing 🤝
Contributions are welcome! Please fork this repository and create a pull request with your enhancements. 

### Guidelines
- Follow consistent code formatting.
- Add descriptive commit messages.

## License 📄
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
