// All logic about database and request handling
import User from "../models/users.js";
import fs from "fs";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.render("index", { title: "Home Page", users: allUsers });
  } catch (err) {
    res.json({ message: err.message });
  }
};

// Add a new user
export const addUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      image: req.file.filename,
    });
    await newUser.save();
    req.session.message = { type: "success", message: "User added successfully!" };
    res.redirect("/api/posts");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
};


// Edit user (render page)
export const editUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.redirect("/api/posts");
    res.render("edit_users", { title: "Edit User", user });
  } catch (err) {
    console.error(err);
    res.redirect("/api/posts");
  }
};

// Update user
export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    let new_image = req.file ? req.file.filename : req.body.old_image;

    if (req.file && req.body.old_image) {
      try { fs.unlinkSync("./uploads/" + req.body.old_image); } catch (err) { console.error(err); }
    }

    await User.findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      image: new_image,
    });

    req.session.message = { type: "success", message: "User updated successfully!" };
    res.redirect("/api/posts");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message, type: "danger" });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.image) {
      try { fs.unlinkSync("./uploads/" + user.image); } catch (err) { console.error(err); }
    }

    req.session.message = { type: "success", message: "User deleted successfully!" };
    res.redirect("/api/posts");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message, type: "danger" });
  }
};
