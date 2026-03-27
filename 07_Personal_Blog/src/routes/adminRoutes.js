import express from "express";
import verifyToken  from "../middlewares/authMiddleware.js";
import {
    getAdminLogin,
    doAdminLogin,
    // doAdminRegister,
    getDashboard,
    getCreatePost,
    doCreatePost,
    findThePost,
    getEditPost,
    deletePost,
    doAdminLogout
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/", getAdminLogin);
router.post("/", doAdminLogin);
// router.post("/register", verifyToken, doAdminRegister);
router.get("/dashboard", verifyToken, getDashboard);
router.get("/add-post", verifyToken, getCreatePost);
router.post("/add-post", verifyToken, doCreatePost);
router.get("/edit-post/:id", verifyToken, findThePost);
router.put("/edit-post/:id", verifyToken, getEditPost);
router.delete("/delete-post/:id", verifyToken, deletePost);
router.get("/logout", verifyToken, doAdminLogout);

export default router;
