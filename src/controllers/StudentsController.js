/**
 * Title: Student Controller
 * Description: A controller for studens collection
 * Author: Ekram Ullah
 * Data: 13.07.2022
 */

// depnedencies
const { StudentsModel } = require('../models/StudentsModel');

// module scaffolding
const StudentsController = {};

// create student
StudentsController.InsertStudent = (req, res) => {
    const reqBody = req.body;

    StudentsModel.create(reqBody, (createError, data) => {
        if (!createError) {
            res.status(201).json({ status: 'success', data });
        } else {
            res.status(400).json({ status: 'Failed', data: createError });
            console.log(createError);
        }
    });
};

// Read student
StudentsController.ReadStudent = (req, res) => {
    const Query = req.query;
    const Projection = 'Name Remarks';
    StudentsModel.find(Query, Projection, (findError, data) => {
        if (!findError) {
            res.status(201).json({ status: 'success', data });
        } else {
            res.status(400).json({ status: 'Failed', data: findError });
            console.log(findError);
        }
    });
};

// update student
StudentsController.UpdateStudent = (req, res) => {
    const { roll } = req.params;
    const Query = { Roll: roll };
    const reqBody = req.body;

    StudentsModel.updateOne(Query, reqBody, (updateError, data) => {
        if (!updateError) {
            res.status(201).json({ status: 'success', data });
        } else {
            res.status(400).json({ status: 'Failed', data: updateError });
            console.log(updateError);
        }
    });
};

// delete student
StudentsController.DeleteStudent = (req, res) => {
    const { roll } = req.params;
    const Query = { Roll: roll };

    StudentsModel.deleteOne(Query, (deleteError, data) => {
        if (!deleteError) {
            res.status(201).json({ status: 'success', data });
        } else {
            res.status(400).json({ status: 'Failed', data: deleteError });
            console.log(deleteError);
        }
    });
};

// export the module
module.exports = StudentsController;
