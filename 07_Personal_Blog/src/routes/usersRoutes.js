import express from "express";
import { getAllPost, getPost, searchPost, getAboutPage, getContactPage } from "../controllers/userController.js";
const router = express.Router();

// Get all the posts
router.get("/", getAllPost);

// Get the home Page
router.get("/about", getAboutPage);

// Get the contact Page
router.get("/contact", getContactPage);

// Get a single post by id
router.get("/post/:id", getPost);

router.post("/search", searchPost);

export default router;
