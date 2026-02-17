# NODE_CRUD - User Management Application

A Node.js CRUD (Create, Read, Update, Delete) application built with Express.js, EJS templating, and MongoDB. 
This project demonstrates a full-stack web application following the MVC (Model-View-Controller) architectural pattern.

---

## 🎯 PROJECT OVERVIEW

**What is NODE_CRUD?**

- A Node.js web application that manages users
- Uses Express.js for building the server
- Uses MongoDB as the database
- Uses EJS as the template engine to generate HTML pages
- Follows MVC (Model-View-Controller) architecture
- Allows CREATE, READ, UPDATE, DELETE operations on user data

**Tech Stack:**

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** EJS (HTML templates)
- **File Handling:** Multer (for image uploads)

---

## Features

✅ **User Management**
- Create new users
- Read/View all users
- Update user information
- Delete users

✅ **File Uploads**
- Support for user profile images and documents
- File storage in the `uploads/` directory

✅ **Session Management**
- Express sessions for user authentication
- Flash message support for user feedback

✅ **Modern Web Stack**
- Express.js for routing and middleware
- EJS with express-ejs-layouts for template rendering
- MongoDB with Mongoose ODM
- Organized MVC structure
- Multer for file upload handling

## Project Structure

```
NODE_CRUD/
├── config/
│   └── db.js                 # Database connection configuration
├── controllers/
│   └── usersController.js    # Business logic for user operations
├── models/
│   └── users.js              # User schema and database model
├── routes/
│   └── usersRoutes.js        # API routes for CRUD operations
├── views/
│   ├── index.ejs             # Home page - users list
│   ├── add_user.ejs          # Form to add new user
│   ├── edit_users.ejs        # Form to edit existing user
│   └── layout/
│       ├── header.ejs        # Header template
│       └── footer.ejs        # Footer template
├── uploads/                  # Directory for uploaded files
├── .env                      # Environment variables
├── server.js                 # Express app entry point
├── package.json              # Project dependencies
├── package-lock.json         # Locked dependency versions
└── readme.md                 # This file
```

## How It Works

| File | Purpose |
|------|---------|
| `server.js` | Initializes Express app, connects to MongoDB, configures middleware, and starts the server |
| `config/db.js` | Establishes MongoDB connection using Mongoose |
| `models/users.js` | Defines the User schema with fields like name, email, phone, etc. |
| `controllers/usersController.js` | Contains handler functions for all CRUD operations |
| `routes/usersRoutes.js` | Defines API endpoints and maps them to controller functions |
| `views/*.ejs` | EJS templates for rendering the user interface |

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas cloud)
- npm or yarn package manager

### Step 1: Install Dependencies
```sh
npm install
```

### Step 2: Configure Environment Variables
Create a `.env` file in the root directory:
```
PORT=4000
MONGODB_URI=mongodb://localhost:27017/node_crud
SESSION_SECRET=my_secret_key
```

### Step 3: Start MongoDB
If using local MongoDB:
```sh
mongod
```

### Step 4: Run the Application

**Development mode** (with hot reload):
```sh
npm run dev
```

**Production mode**:
```sh
npm start
```

### Step 5: Access the Application
Open your browser and navigate to:
```
http://localhost:4000/api/posts
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts/` | View all users |
| GET | `/api/posts/add` | Show add user form |
| POST | `/api/posts/add` | Create a new user |
| GET | `/api/posts/edit/:id` | Show edit user form |
| POST | `/api/posts/update/:id` | Update user details |
| GET | `/api/posts/delete/:id` | Delete a user |

## Dependencies

```json
{     // Environment variable management
  "ejs": "^4.0.1",               // Template engine
  "express": "^5.2.1",           // Web framework
  "express-ejs-layouts": "^2.5.1", // EJS layout system
  "express-session": "^1.19.0",  // Session management
  "mongoose": "^9.2.1",          // MongoDB ODM
  "multer": "^2.0.2",            // File upload handling
  "nodemon": "^3.1.11"           // File upload handling
  "nodemon": "^3.1.11"      // Development auto-reload
}
```

## Usage Example

### Adding a User
1. Click "Add User" button on the homepage
2. Fill in the form with user details (name, email, phone, etc.)
3. Optionally upload a profile image
4. Click "Submit"

### Editing a User
1. Click the "Edit" button next to a user
2. Modify the desired fields
3. Click "Update"

### Deleting a User
1. Click the "Delete" button next to a user
2. Confirm the deletion

## Development Tips

- Use `npm run dev` during development for automatic server restarts
- Check `notes.txt` for additional project notes and documentation
- MongoDB collections are automatically created on first insert
- Uploaded files are stored in the `uploads/` directory

## Troubleshooting

**Connection Failed to MongoDB**
- Ensure MongoDB is running (`mongod`)
- Check your `MONGODB_URI` in `.env`
- Verify MongoDB server is accessible

**Port Already in Use**
- Change the `PORT` variable in `.env`
- Or kill the process using the port

**File Upload Issues**
- Ensure `uploads/` directory exists and is writable
- Check file size limits in multer configuration

## License

This project is for learning purposes.


## 🎓 PRACTICE QUESTIONS FOR YOUR PRESENTATION

1. "What is a Schema and why do we need it?"
   - Answer: Blueprint that defines structure of data

2. "What happens when user uploads an image?"
   - Answer: Multer middleware saves it to `uploads` folder

3. "Why use async/await?"
   - Answer: Database operations take time; await prevents code running before data is ready

4. "What's the difference between route and controller?"
   - Answer: Route defines URL, controller has the logic

5. "How does flash message work?"
   - Answer: Stored in session, shown once, then deleted

---