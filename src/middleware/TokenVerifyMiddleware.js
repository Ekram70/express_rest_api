/**
 * Title: JWT Token verify Middleware
 * Description: This is for jwt token verification
 * Author: Ekram Ullah
 * Data: 13.07.2022
 */

// depnedencies
const jwt = require('jsonwebtoken');

// module scaffolding
const jwtMiddleware = {};

// token verify
jwtMiddleware.tokenVerify = (req, res, next) => {
    const { token } = req.headers;
    jwt.verify(token, 'SecretKey123', (error) => {
        if (!error) {
            next();
        } else {
            res.status(401).json({ status: 'invalid token', data: error });
        }
    });
};

// export the module
module.exports = jwtMiddleware;
