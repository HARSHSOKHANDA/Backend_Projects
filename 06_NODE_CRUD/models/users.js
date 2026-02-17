// we need to create a schema - Schema defines the structure of documents within a collection So every Product/user you 
// insert must follow this structure
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    created: {
        type: Date,
        require: true,
        default: Date.now(),
    }
});

// we need to now create an model - It is created from a schema and provides an interface to interact with the database.
// Export model → So it can be used in other files.
export default mongoose.model("User", userSchema);