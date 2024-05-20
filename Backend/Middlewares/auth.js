const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

const verifyToken = (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ error: 'A token is required for authentication' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), secretKey);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid Token' });
    }
};

module.exports = verifyToken;
