/**
 * Title: Token issue controller
 * Description: Controller for jwt token creation
 * Author: Ekram Ullah
 * Data: 13.07.2022
 */

// depnedencies
const jwt = require('jsonwebtoken');

// module scaffolding
const jwtToken = {};

// create the token
jwtToken.tokenIssue = (req, res) => {
    const payload = {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        ...req.body,
    };
    const token = jwt.sign(payload, 'SecretKey123');

    res.send(token);
};

// export the module
module.exports = jwtToken;
