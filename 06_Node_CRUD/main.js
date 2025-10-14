// import .env file
import 'dotenv/config.js';
const PORT = process.env.PORT || 4000;

// import pakages
import express from "express";
import mongoose from 'mongoose';
import session from 'express-session';
import router from "./routes/routes.js";

/* `const app = express();` is creating an instance of the Express framework, which is a web
application framework for Node.js. This instance `app` will be used to configure and define routes,
middleware, and other settings for the web application. */
const app = express();

// database connection
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection

// check connection is done
db.on("error", (error) => console.log(error));
db.once("open", () => {
    console.log("MongoDB connection is open");
});

// Testing server work or not
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });


// Middleware
// This middleware reads that data and converts it into a JavaScript object and the data insert into req.body.
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false
}));

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});


app.use(express.static("uploads"));

// set template engine
app.set("view engine", "ejs");

// Router prefix
app.use("", router);


app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
console.log("🔥 main.js started");