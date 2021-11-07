const mongoose = require('mongoose');
const {ObjectId} = require("bson");

const BasicObject = mongoose.Schema({
    _id: ObjectId,
    student_id: Number,
    scores: Array,
    class_id: Number
}
// ,
//     {
//     timestamps: true
// }
);

module.exports = mongoose.model('BasicObject', BasicObject, "grades");