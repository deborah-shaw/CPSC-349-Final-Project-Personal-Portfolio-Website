
# Deborah Shaw: Personal Website

Welcome to the personal website of **Deborah Shaw**, a software engineer focused on front-end development, user-centered design, and continuous learning. This site showcases Deborah's projects, skills, and background in web development and software engineering.

## 🌐 Website Overview

This responsive, multi-page website was built using HTML5, CSS3, and JavaScript. It includes:

- A homepage with a personal introduction and inspirational quote.
- A dynamic project gallery showcasing real-world applications.
- Dedicated pages for skills, about, and contact.
- A clean, consistent navigation bar across all pages.
- Academic branding elements related to California State University, Fullerton.

## 🚀 Features

- **Responsive design** with CSS3 media queries to support multiple screen sizes.
- **Interactive form inputs** using JavaScript for a dynamic user experience.
- **API integration** to fetch U.S. state, city, and county data.

## 🛠️ Technologies Used

- **Languages:** JavaScript, Python, Java
- **Web Development:** HTML5, CSS3, Tailwind CSS, React.js, Node.js
- **Databases:** MySQL, MongoDB
- **Tools & Platforms:** Git, GitHub, VS Code, Postman
- **Other:** REST APIs, Responsive Design, Debugging, Agile/Scrum

## ⚡ JavaScript Functionality

The project includes a custom JavaScript file that adds interactivity and dynamic data fetching via external APIs:

- **`displayStates()`**: Automatically populates the state dropdown menu with all U.S. states when the page loads.
- **`displayCity()`**: When a user enters a ZIP code, the app fetches and displays the corresponding city, latitude, and longitude.
- **`displayCounties()`**: Upon selecting a state, the app fetches and displays all counties within that state based on its USPS abbreviation.

All data interactions are handled asynchronously using the `fetch()` API and `async/await` syntax for clean, efficient execution.

## 📁 Project Structure

```
project-folder/
│
├── index.html
├── about.html
├── contact.html
├── projects.html
├── skills.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── img/
│   └── (images used in the project)
│
└── README.md
```

## 🚀 Featured Projects

### 🔹 [Semantic Web Explorer](project1.html)
An interactive tool that visualizes RDF data and enables SPARQL querying for semantic web exploration. Integrates with external APIs like Expedia for added utility.

### 🔹 [Recipe Explorer](project2.html)
A recipe discovery app with ingredient and cuisine filtering, user authentication, and favorites tracking. Built using Flask, SQLAlchemy, and public APIs.

### 🔹 [Movie Rating Service](project3.html)
A real-time movie rating site leveraging MongoDB and dynamic front-end rendering. Allows users to browse, rate, and review movies interactively.

## 🎓 Academic Context

This website was created as part of the coursework for **CPSC 349 - Web Front-End Engineering** at **California State University, Fullerton (CSUF)**. It demonstrates skills in front-end development, project documentation, and personal branding through code.

> **Disclaimer:** This project is for academic purposes only.

## 🏃‍♂️ How to Use

1. Clone or download the repo.
2. Open `index.html` in any web browser.
3. Ensure you have an internet connection to access the APIs.

## 📫 Contact

Want to collaborate or say hi? Visit the [Contact Page](https://mkt989.github.io/CPSC-349-Final-Project-Personal-Portfolio-Website/contact.html) or connect via GitHub.

---

©2025 Deborah Shaw
