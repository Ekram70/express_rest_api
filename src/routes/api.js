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
const { CreateToken, DecodeToken } = require('../controllers/JWTPractice');
const { tokenVerify } = require('../middleware/TokenVerifyMiddleware');
const { tokenIssue } = require('../controllers/TokenIssueController');

// module scaffolding
const router = express.Router();

// this is my first get routing
router.get('/hello-get', Hello);
router.post('/hello-post', Hello);

// mongoose crud & apply jwt token
router.post('/tokenIssue', tokenIssue);
router.post('/insertStudent', tokenVerify, InsertStudent);
router.get('/readStudent', tokenVerify, ReadStudent);
router.put('/updateStudent/:roll', tokenVerify, UpdateStudent);
router.delete('/deleteStudent/:roll', tokenVerify, DeleteStudent);

// JWT token
router.get('/createToken', CreateToken);
router.get('/decodeToken', DecodeToken);

// export the module
module.exports = router;
