# Personal_Blog Backend

A Node.js + Express backend for a personal blog with admin authentication, CRUD for posts, and server-rendered views using EJS.

## Features
- Admin login with JWT (stored in HTTP-only cookies)
- Create, edit, delete posts
- Public pages (home, post detail, about, contact, search)
- MongoDB with Mongoose
- EJS layouts for reusable UI

## Tech Stack
- Node.js, Express
- MongoDB, Mongoose
- EJS + express-ejs-layouts
- JWT, bcrypt, sessions (connect-mongo)

## Project Structure
```
Personal_Blog
+-- server
¦   +-- app.js          # Express app setup
¦   +-- server.js       # Server start
+-- src
¦   +-- config          # DB config
¦   +-- controllers     # Request handlers
¦   +-- middlewares     # Auth middleware
¦   +-- models          # Mongoose models
¦   +-- routes          # Routes
¦   +-- services        # Business logic
¦   +-- utils           # Helpers
+-- views               # EJS templates
+-- public              # Static assets
+-- docs                # Notes
```

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Setup environment variables
Create a `.env` file in the project root:
```
PORT=4000
DB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
SESSION_SECRET=your_session_secret
JWT_SECRET=your_jwt_secret
```

### 3) Run the project
```bash
npm run dev
```
Open: `http://localhost:4000`

## Scripts
- `npm run dev` – start with nodemon
- `npm start` – start in production mode

## Notes
- Admin routes are under `/admin`
- If you see `Cannot GET /admin`, the login page is at `/admin/login`

## License
ISC
