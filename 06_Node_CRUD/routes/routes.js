// Import model inside router → Because routers handle requests, and they need the model to interact with MongoDB.
import User from "../models/users.js"
import express from "express";
import multer from "multer";
import fs from "fs";
const router = express.Router();


// image upload
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

let upload = multer({
  storage: storage,
}).single("image");



// Get all users routes
router.get("/", async (req, res) => {
  try {
    const alltheUser = await User.find();
    res.render("index", { title: "Home Page", users: alltheUser });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/add", (req, res) => {
  res.render("add_user", { title: "Add Users" });
});

// insert an newUser into database route
router.post("/add", upload, async (req, res) => {
  try {
    const newUser = new User({
      // new User({...}): Creates a new MongoDB document based on your User schema.
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      image: req.file.filename,
    });
    await newUser.save();
    req.session.message = {
      type: "success",
      message: "User added successfully!"
    };
    res.redirect("/");
  } catch (err) {
    res.json({ message: err.message, type: "danger" });
  }
});

// Edit an user route
router.get("/edit/:id", async (req, res) => {
  try {
    let id = req.params.id;

    // Wait for MongoDB to return the user
    const findUser = await User.findById(id);

    if (!findUser) {
      // If no user found, redirect to home
      return res.redirect("/");
    }

    // If user found, render edit page
    res.render("edit_users", {
      title: "Edit User",
      user: findUser,
    });

  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
});

// Update user
router.post("/update/:id", upload, async (req, res) => {
  try {
    const id = req.params.id;
    let new_image = "";

    if (req.file) {
      new_image = req.file.filename;

      // delete old image if exists
      try {
        if (req.body.old_img) {
          fs.unlinkSync("./uploads/" + req.body.old_img);
        }
      } catch (error) {
        console.error("Error deleting old image:", error);
      }
    } else {
      new_image = req.body.old_image;
    }

    await User.findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      image: new_image,
    });

    req.session.message = {
      type: "success",
      message: "User updated successfully!",
    };

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, type: "danger" });
  }
});

// Delete user by id
router.get("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // also delete old image if it exists
    if (user.image) {
      try {
        fs.unlinkSync("./uploads/" + user.image);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }

    req.session.message = {
      type: "success",
      message: "User deleted successfully!",
    };

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, type: "danger" });
  }
})

/* `export default router;` is exporting the `router` object from this module. This allows other
modules to import and use the `router` object defined in this file. It makes the `router` object
accessible for use in other parts of the application. */
export default router; 
