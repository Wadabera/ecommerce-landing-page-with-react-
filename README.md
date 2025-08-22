Single Page Scroll - React (One Component)

A simple single-page React application built entirely in one component. It features smooth scrolling navigation and active link highlighting while scrolling.

Table of Contents

Demo

Features

Technologies

Installation

Usage

Project Structure

How it Works

Contributing

License

Demo

(Optional: Add screenshot or GIF of the app showing smooth scroll and active link highlight)

Features

Single React Component: All navigation and sections in one component

Smooth scrolling on navigation link click

Active link highlighting when scrolling manually

Fully responsive

Technologies

React (v18+)

JavaScript (ES6+)

HTML5 & CSS3

react-scroll
 library for smooth scrolling

Installation

Clone the repository:

git clone https://github.com/YOUR_USERNAME/single-page-scroll.git
cd single-page-scroll


Install dependencies:

npm install


Start the app:

npm start


Open your browser at http://localhost:3000/ to see the app.

Usage

Click any navigation link to scroll to the corresponding section smoothly.

Scroll manually with mouse/trackpad — the active link updates automatically.

Add new sections by adding more <div> blocks in the component and updating navigation links.

Project Structure

Since it’s a one-component project, the main files are:

single-page-scroll/
│
├─ public/
│   └─ index.html
│
├─ src/
│   ├─ App.js       # Single React component with all navigation & sections
│   ├─ index.js     # Entry point of the React app
│   └─ App.css      # Styles for navigation and sections
│
├─ package.json
└─ README.md

How it Works

Navigation Links

Clicking a link uses react-scroll to move smoothly to the section.

Scroll Detection

The component listens to the window.scroll event to determine which section is in view.

Updates activeSection state to highlight the current link.

Active Link Highlighting

CSS class active is applied to the current section’s link.

Helps users easily see where they are on the page.

Contributing

Even as a single-component project, you can:

Add more sections

Improve styling and responsiveness

Replace react-scroll with custom scroll behavior

Report bugs or issues

Please submit a pull request or open an issue before contributing.

License

This project is open source under the MIT License
