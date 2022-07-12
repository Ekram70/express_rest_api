/**
 * Title: Hello controller
 * Description: A basic controller to test the app
 * Author: Ekram Ullah
 * Data: 12.07.2022
 */

// depnedencies

// module scaffolding
const HelloController = {};

// request and response
HelloController.Hello = (req, res) => {
    res.status(200).json({ status: 'success', data: 'Hello this is my first express rest api' });
};

// export the module
module.exports = HelloController;
