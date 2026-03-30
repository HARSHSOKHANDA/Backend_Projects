// we need to create a schema - Schema defines the structure of documents within a collection So every Product/user you 
// insert must follow this structure

import mongoose from "mongoose";
const schema = mongoose.Schema;

const postSchema = new schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

// we need to now create an model - It is created from a schema and provides an interface to interact with the database.
// Export model → So it can be used in other files.
export default mongoose.model("Post", postSchema);