/**
 * Title: JWT Practice
 * Description: Some basic operation with JWT
 * Author: Ekram Ullah
 * Data: 13.07.2022
 */

// depnedencies
const jwt = require('jsonwebtoken');

// module scaffolding
const jwtToken = {};

// createToken
jwtToken.CreateToken = (req, res) => {
    const payload = {
        exp: Math.floor(Date.now() / 1000) + 20,
        ...req.body,
    };
    const token = jwt.sign(payload, 'SecretKey123');

    res.send(token);
};

// decode Token
jwtToken.DecodeToken = (req, res) => {
    const { token } = req.headers;
    jwt.verify(token, 'SecretKey123', (error, decoded) => {
        if (!error) {
            res.status(200).json({ status: 'Success', data: decoded });
        } else {
            res.status(401).json({ status: 'invalid token', data: error });
        }
    });
};

// export the module
module.exports = jwtToken;
