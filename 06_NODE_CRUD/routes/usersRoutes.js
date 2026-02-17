// Only handles routes
import express from "express";
import multer from "multer";
import { getAllUsers, addUser, editUser, updateUser, deleteUser } from "../controllers/usersController.js";

const router = express.Router();

// Image upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
});
const upload = multer({ storage }).single("image");

// Routes
router.get("/", getAllUsers);
router.get("/add", (req, res) => res.render("add_user", { title: "Add Users" }));
router.post("/add", upload, addUser);

router.get("/edit/:id", editUser);
router.post("/update/:id", upload, updateUser);
router.get("/delete/:id", deleteUser);

export default router;