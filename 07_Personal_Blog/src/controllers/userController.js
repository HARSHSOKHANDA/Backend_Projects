import {
    getPaginatedPosts,
    getPostById,
    searchPosts
} from "../services/userService.js";

// ================= HOME =================

export const getAllPost = async (req, res) => {
    try {
        const perPage = 5;
        const page = parseInt(req.query.page, 10) || 1;

        const { data, count } = await getPaginatedPosts(page, perPage);

        const totalPages = Math.max(1, Math.ceil(count / perPage));

        res.render("frontend/index", {
            data,
            current: page,
            totalPages,
            prevPage: page > 1 ? page - 1 : null,
            nextPage: page < totalPages ? page + 1 : null,
            currentPath: "/"
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ================= ABOUT =================

export const getAboutPage = (req, res) => {
    res.render("frontend/about", {
        currentPath: "/about"
    });
};

// ================= CONTACT =================

export const getContactPage = (req, res) => {
    res.render("frontend/contact", {
        currentPath: "/contact"
    });
};

// ================= SINGLE POST =================

export const getPost = async (req, res) => {
    try {
        const data = await getPostById(req.params.id);

        res.render("frontend/post", {
            data,
            currentPath: `/post/${req.params.id}`
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ================= SEARCH =================

export const searchPost = async (req, res) => {
    try {
        const data = await searchPosts(req.body.searchTerm);

        res.render("frontend/search", {
            data
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};