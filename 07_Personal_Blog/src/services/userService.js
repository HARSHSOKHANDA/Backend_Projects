import Post from "../models/Posts.js";

// Pagination + all posts
export const getPaginatedPosts = async (page, perPage) => {
    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
        .skip(perPage * page - perPage)
        .limit(perPage)
        .exec();

    const count = await Post.countDocuments();

    return { data, count };
};

// Single post
export const getPostById = async (id) => {
    return await Post.findById(id);
};

// Search
export const searchPosts = async (searchTerm) => {
    const cleanTerm = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    return await Post.find({
        $or: [
            { title: { $regex: cleanTerm, $options: "i" } },
            { body: { $regex: cleanTerm, $options: "i" } }
        ]
    });
};