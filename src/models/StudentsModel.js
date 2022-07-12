/**
 * Title: Student Model
 * Description: A schema for studens collection
 * Author: Ekram Ullah
 * Data: 13.07.2022
 */

// depnedencies
const mongoose = require('mongoose');

// module scaffolding
const model = {};

model.DataSchema = mongoose.Schema(
    {
        Name: { type: String, default: 'XYZ' },
        Roll: {
            type: String,
            default: '000',
            required: true,
            unique: true,
        },
        class: {
            type: Number,
            required: true,
            min: [1, 'Minimum class is 1 but supplied value is ={VALUE}'],
            max: [10, 'Maximum class is 10 but supplied value is ={VALUE}'],
        },
        Mobile: {
            type: String,
            validate: {
                validator: (value) => {
                    if (value.length === 11) {
                        return true;
                    }
                    return false;
                },
                message: 'Please give an 11 digit mobile number',
            },
            required: true,
        },
        Remarks: { type: String, default: 'Just Student' },
    },

    // eslint-disable-next-line comma-dangle
    { versionKey: false }
);

model.StudentsModel = mongoose.model('students', model.DataSchema);

// export the module
module.exports = model;
