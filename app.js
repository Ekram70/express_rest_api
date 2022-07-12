/**
 * Title: Main app
 * Description: All the configuration relation stuffs
 * Author: Ekram Ullah
 * Data: 12.07.2022
 */

// depnedencies
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./src/routes/api');

// module scaffolding
const app = express();

// security middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(bodyParser.json());

// request rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

app.use(limiter);

// mongodb database connection
const URI = 'mongodb://127.0.0.1:27017';
const database = 'school';
const options = { user: '', pass: '' };

mongoose.connect(`${URI}/${database}`, options, (connecError) => {
    if (!connecError) {
        console.log('Connection Successful');
    } else {
        console.log(connecError);
    }
});

// routing
app.use('/api/v1', router);

// undefined route
app.use('*', (req, res) => {
    res.status(404).json({ status: 'failed', data: 'Not Found' });
});

// export the module
module.exports = app;
