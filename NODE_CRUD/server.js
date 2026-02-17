// import .env file
import 'dotenv/config';
const PORT = process.env.PORT || 4000;

// import pakages
import express from "express";
import session from 'express-session';
import connectDB from "./config/db.js";
import router from "./routes/usersRoutes.js";
import expressEjsLayouts from 'express-ejs-layouts';

/* `const app = express();` is creating an instance of the Express framework, which is a web
application framework for Node.js. This instance `app` will be used to configure and define routes,
middleware, and other settings for the web application. */
const app = express();

// database connection
connectDB();

// Testing server work or not
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });


// Middleware
// This middleware reads that data and converts it into a JavaScript object and the data insert into req.body.
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


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
app.set('views', './views');
app.use(expressEjsLayouts);
app.set("layout", "./layout/main");
app.set("view engine", "ejs");

// Mount router with prefix
app.use("/api/posts", router);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: http://localhost:${PORT}/api/posts`);
});
console.log("🔥 main.js started");
