/**
    * Middleware to verify JWT token for protected routes
    * This middleware checks for the presence of a JWT token in the cookies, verifies it, 
    * and allows access to protected routes if the token is valid. If the token is missing 
    * or invalid, it redirects the user to the admin login page.
    * Usage: This middleware can be applied to any route that requires authentication by including 
    * it in the route definition, for example: router.get("/dashboard", verifyToken, getDashboard);
    * Note: Ensure that the JWT_SECRET environment variable is set in your .env file for token verification to work correctly.
 */

import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/admin");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.redirect("/admin");
    }
};

export default verifyToken;