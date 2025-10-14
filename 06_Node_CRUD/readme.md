# Node_CRUD

A simple Node.js CRUD (Create, Read, Update, Delete) application using Express, EJS, and MongoDB.

## Features

- Add, view, edit, and delete users
- File upload support (e.g., user images)
- EJS templating for dynamic HTML rendering
- Organized code structure with MVC pattern

## Project Structure

```
Node_CRUD/
│   main.js               # Entry point, sets up server and routes
│   package.json          # Project metadata and dependencies
│   Notes.txt             # Project notes
│
├── models/
│     users.js            # User schema/model (Mongoose)
│
├── routes/
│     routes.js           # Route definitions for CRUD operations
│
├── uploads/              # Uploaded files (images, etc.)
│
└── views/                # EJS templates
      add_user.ejs
      edit_users.ejs
      index.ejs
      layout/
```

## How It Works

- `main.js` initializes the Express app, connects to MongoDB, and sets up middleware and routes.
- `routes/routes.js` defines endpoints for user CRUD operations and renders EJS templates.
- `models/users.js` defines the user schema and handles database interactions.
- `views/` contains EJS templates for rendering the UI.
- `uploads/` stores user-uploaded files.

## Getting Started

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd Node_CRUD
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start MongoDB server (if not running):
   ```sh
   mongod
   ```
4. Run the application:
   ```sh
   node main.js
   ```
5. Open your browser and go to `http://localhost:3000`

## Dependencies

- express
- mongoose
- ejs
- multer (for file uploads)

## License

This project is for learning purposes.
