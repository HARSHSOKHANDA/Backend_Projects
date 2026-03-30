import Post from "../models/Posts.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

// ================= AUTH =================

export const loginAdmin = async (username, password) => {
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error("Invalid username or password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error("Invalid username or password");
    }

    return user;
};

export const registerAdmin = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({
            username,
            password: hashedPassword
        });

        return user;
    } catch (error) {
        if (error.code === 11000) {
            throw new Error("Username already exists");
        }
        throw new Error("Internal Server Error");
    }
};

// ================= POSTS =================

export const getAllPosts = async () => {
    return await Post.find();
};

export const createPost = async (title, body) => {
    return await Post.create({ title, body });
};

export const getPostById = async (id) => {
    return await Post.findById(id);
};

export const updatePost = async (id, title, body) => {
    return await Post.findByIdAndUpdate(id, {
        title,
        body,
        updatedAt: Date.now()
    });
};

export const deletePostById = async (id) => {
    return await Post.deleteOne({ _id: id });
};