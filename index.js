/**
 * Title: The opening file
 * Description: All main functions
 * Author: Ekram Ullah
 * Data: 12.07.2022
 */

// depnedencies
const dotenv = require('dotenv');
const app = require('./app');

// module scaffolding
const server = {};

// path of env file
dotenv.config({
    path: './config.env',
});

// create Server
server.create = () => {
    app.listen(process.env.RUNNING_PORT, () => {
        console.log(`server is running at ${process.env.RUNNING_PORT}`);
    });
};
// run the app
server.create();
