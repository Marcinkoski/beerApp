const BasicObject = require('../model/basicClass.model.js');

// Create and Save a new BO
exports.create = (req, res) => {

};

// Retrieve and return all BO from the database.
exports.findAll = (req, res) => {
    BasicObject.find()
        .then(basicObjects => {
            res.send(basicObjects);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving objects."
        });
    });
};

// Find a single bo with a BOid
exports.findOne = (req, res) => {

};

// Update a note identified by the BOid in the request
exports.update = (req, res) => {

};

// Delete a note with the specified BOid in the request
exports.delete = (req, res) => {

};