/**
 * Title: Basic route
 * Description: A basic route to test the app
 * Author: Ekram Ullah
 * Data: 12.07.2022
 */

// depnedencies
const express = require('express');
const { Hello } = require('../controllers/HelloController');
const {
    InsertStudent,
    ReadStudent,
    UpdateStudent,
    DeleteStudent,
} = require('../controllers/StudentsController');

// module scaffolding
const router = express.Router();

// this is my first get routing
router.get('/hello-get', Hello);
router.post('/hello-post', Hello);

// mongoose
router.post('/insertStudent', InsertStudent);
router.get('/readStudent', ReadStudent);
router.put('/updateStudent/:roll', UpdateStudent);
router.delete('/updateStudent/:roll', DeleteStudent);

// export the module
module.exports = router;
