import express from "express";
import expressEjsLayouts from 'express-ejs-layouts';
import methodOverride from "method-override";
import userRoutes from '../src/routes/usersRoutes.js';
import adminRoutes from '../src/routes/adminRoutes.js';
import connectDB from '../src/config/db.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { isActiveRoute } from '../src/utils/routeHelpers.js';

const app = express();

// DB connection
connectDB();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DB_URI,
    dbName: process.env.DB_NAME,
    collectionName: 'sessions',
  })
}));

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

// Static
app.use(express.static('public'));

// Views
app.set('views', './views');
app.use(expressEjsLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.locals.isActiveRoute = isActiveRoute;

// Routes
app.use("/", userRoutes);
app.use("/admin", adminRoutes);

export default app;
