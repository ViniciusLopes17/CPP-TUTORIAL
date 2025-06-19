# C++ Programming Tutorial

## 🌐 Live Demo
Access the interactive tutorial here:  
👉 [https://cpp-tutorial-omega.vercel.app/](https://cpp-tutorial-omega.vercel.app/)

## 📌 Overview
Interactive C++ tutorial website covering fundamental to advanced concepts with clean code examples and responsive design.

## ✨ Key Features
- **Structured Learning Path**
  - 🏠 Home: Introduction & setup guide
  - 📚 Basics: Syntax, variables, loops
  - 🧩 OOP: Classes, inheritance, polymorphism
  - 🚀 Advanced: Templates, STL, concurrency

- **Interactive Elements**
  - Dynamic content loading (no page refresh)
  - Syntax-highlighted code snippets
  - Bootstrap-powered responsive layout

## 🛠 Technologies
| Category      | Technologies Used       |
|---------------|-------------------------|
| Core          | HTML5, CSS3, JavaScript |
| UI Framework  | Bootstrap 5             |
| Icons         | Bootstrap Icons         |
| Design        | Custom responsive CSS   |

## 🎯 Target Audience
- Beginner programmers
- Developers transitioning to C++
- Experienced coders needing quick reference

## 📂 File Structure
project/
├── index.html # Main entry point
├── script.js # All tutorial content + navigation logic
├── styles.css # Custom styling
└── README.md # This documentation

## 🚀 Quick Start
1. Clone repository
2. Open `index.html` in browser
3. Navigate using top menu

## 🌟 Key Code Samples
```javascript
// Dynamic content loading example
function showSection(sectionId) {
  const section = tutorialData[sectionId];
  document.getElementById('main-content').innerHTML = `
    <h1>${section.title}</h1>
    ${section.sections.map(sec => `
      <section id="${sec.id}">
        <h2>${sec.title}</h2>
        ${sec.content}
      </section>
    `).join('')}
  `;
}

tutorialData = {
  home: {
    title: "Master C++",
    sections: [
      {
        id: "intro",
        title: "Welcome to C++",
        content: "<div>...</div>"
      }
      // ... more sections
    ]
  }
  // ... more categories
}

👥 Contributors
Agnaldo Cuchaba

Jhonatan Pereira

Vinicius Lopes

https://cpp-tutorial-omega.vercel.app/