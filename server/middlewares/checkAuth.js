const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
    try {
        const decodedToken = jwt.verify(req.body.token, process.env.JWT_KEY);
        console.log(token);
        req.userData = decodedToken;
        next();

    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

module.exports = checkAuth;