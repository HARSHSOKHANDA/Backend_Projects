# Blog API Project (Frontend)

This project is a frontend server for a simple Blog API, built with Node.js, Express, and EJS. It interacts with a backend API (expected to run on `http://localhost:4000`) to perform CRUD operations on blog posts.

## Features

- View all blog posts
- Create a new post
- Edit an existing post
- Delete a post

## Folder Structure

```
Blog+API+Project/
  index.js
  package.json
  server.js
  public/
    styles/
      main.css
  views/
    index.ejs
    modify.ejs
```

## Getting Started

### Prerequisites

- Node.js (v14 or above recommended)
- Backend API running on `http://localhost:4000` (not included in this folder)

### Installation

1. Clone the repository or copy the project folder.
2. Install dependencies:
   ```
   npm install
   ```

### Running the Frontend Server

```
npm start
```

Or, if not configured in `package.json`:

```
node server.js
```

The server will run on [http://localhost:3000](http://localhost:3000).

### Usage

- Visit `/` to see all posts.
- Click "New Post" to create a post.
- Click "Edit" on a post to update it.
- Click "Delete" to remove a post.

## API Endpoints Used

- `GET /posts` - Fetch all posts
- `GET /posts/:id` - Fetch a single post
- `POST /posts` - Create a new post
- `PATCH /posts/:id` - Update a post
- `DELETE /posts/:id` - Delete a post

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Axios
- Body-Parser

## Notes

- This project is only the frontend server. The backend API must be running separately.
- Make sure the backend API supports the endpoints listed above.

## License

This project is for learning purposes.
