module.exports = (app) => {
    const basicObjects = require('../controllers/basic.controller.js');

    // Create a new Note
    app.post('/objects', basicObjects.create);

    // Retrieve all Notes
    app.get('/objects', basicObjects.findAll);

    // Retrieve a single Note with noteId
    app.get('/objects/:boId', basicObjects.findOne);

    // Update a Note with noteId
    app.put('/objects/:boId', basicObjects.update);

    // Delete a Note with noteId
    app.delete('/objects/:boId', basicObjects.delete);
}