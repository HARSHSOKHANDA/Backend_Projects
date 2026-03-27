# Backend Projects

This directory contains a collection of backend projects built using Node.js and Express.js. Each project demonstrates different concepts and features of backend development, such as routing, middleware, form handling, and working with external packages.

## Projects

### 1. BRAND_NAME_GENERATOR

A simple web application that generates a brand name by combining a user's street name and pet name. Built with Express.js and serves a static HTML form.

### 2. QR_CODE_Project

A Node.js CLI tool that generates a QR code image from a user-provided URL using the `qr-image` package. The URL is also saved to a text file.

### 3. SECRET

A password-protected page built with Express.js. Users must enter the correct password to access the secret content.

### 4. Band Name Generator (EJS)

A fun web app that generates random band names by combining a random adjective and noun. Built with Node.js, Express, and EJS templating.

## Features

- Generates a new random band name on each button click
- Uses EJS for dynamic HTML rendering
- Stylish UI with custom CSS
- Arrays of adjectives and nouns for endless combinations

### 5. API PROJECT

A simple RESTful API built with Express.js that provides endpoints for basic CRUD operations. It serves as a foundation for understanding API development. example - authentication, data validation, and error handling.

### 6. CRUD Application

A full-stack application that demonstrates Create, Read, Update, and Delete operations using Express.js and a database (e.g., MongoDB). It includes user authentication and session management.

### 7. Personal Blog Application
A Node.js + Express backend for a personal blog with admin authentication, post CRUD, and server‑rendered pages using EJS. It uses MongoDB with Mongoose, JWT in cookies for auth, and a service‑controller architecture for clean, maintainable code.

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm

### Installation

1. Clone this repository or copy the project folder.
2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   node index.js
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Usage

- Click the "Generate Name" button to get a new random band name.
- The name is displayed in the center of the page.

## Project Structure

- `index.js` - Main server file (Express + EJS logic)
- `views/` - EJS templates
- `public/styles/main.css` - CSS styling

## License

MIT
