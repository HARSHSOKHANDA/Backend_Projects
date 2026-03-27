import jwt from "jsonwebtoken";
import {
    loginAdmin,
    registerAdmin,
    getAllPosts,
    createPost,
    getPostById,
    updatePost,
    deletePostById
} from "../services/adminService.js";

const adminLayout = "layouts/admin";

// ================= LOGIN =================

export const getAdminLogin = async (req, res) => {
    res.render("admin/login", {
        layout: adminLayout
    });
};

export const doAdminLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await loginAdmin(username, password);

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

        res.cookie("token", token, { httpOnly: true });

        req.session.message = {
            type: "success",
            text: "Login successful!"
        };

        res.redirect("/admin/dashboard");

    } catch (error) {
        req.session.message = {
            type: "error",
            text: error.message
        };

        res.redirect("/admin");
    }
};

// ================= DASHBOARD =================

export const getDashboard = async (req, res) => {
    try {
        const data = await getAllPosts();

        res.render("admin/dashboard", {
            layout: adminLayout,
            data
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

// ================= CREATE POST =================

export const getCreatePost = (req, res) => {
    res.render("admin/createPost", {
        layout: adminLayout
    });
};

export const doCreatePost = async (req, res) => {
    try {
        await createPost(req.body.title, req.body.body);

        req.session.message = {
            type: "success",
            text: "Post created successfully!"
        };

        res.redirect("/admin/dashboard");

    } catch (error) {
        res.status(500).send(error.message);
    }
};

// ================= EDIT POST =================

export const findThePost = async (req, res) => {
    try {
        const data = await getPostById(req.params.id);

        res.render("admin/editPost", {
            layout: adminLayout,
            data
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const getEditPost = async (req, res) => {
    try {
        await updatePost(req.params.id, req.body.title, req.body.body);

        req.session.message = {
            type: "success",
            text: "Post updated successfully!"
        };

        res.redirect("/admin/dashboard");

    } catch (error) {
        req.session.message = {
            type: "error",
            text: "Something went wrong!"
        };

        res.redirect(`/admin/edit-post/${req.params.id}`);
    }
};

// ================= DELETE =================

export const deletePost = async (req, res) => {
    try {
        await deletePostById(req.params.id);

        req.session.message = {
            type: "success",
            text: "Post deleted!"
        };

        res.redirect("/admin/dashboard");

    } catch (error) {
        res.status(500).send(error.message);
    }
};

// ================= REGISTER =================

// export const doAdminRegister = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         await registerAdmin(username, password);

//         res.status(201).json({ message: "Admin registered successfully" });

//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// ================= LOGOUT =================

export const doAdminLogout = (req, res) => {
    res.clearCookie("token");

    req.session.message = {
        type: "success",
        text: "Logged out successfully!"
    };

    res.redirect("/");
};