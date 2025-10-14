# SECRET

A simple password-protected web page built with Node.js and Express.js.

## Features

- Serves a login form where users can enter a password.
- Grants access to a secret page if the correct password is entered.
- Redirects back to the login page if the password is incorrect.

## How to Run

1. Install dependencies:

   ```
   npm install
   ```

2. Start the server:

   ```
   node index.js
   ```

3. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Project Structure

- `index.js` – Main server file.
- `public/index.html` – Login form.
- `public/secret.html` – Secret content page.

## Default Password

The default password to access the secret page is:

```
ILoveProgramming
```
