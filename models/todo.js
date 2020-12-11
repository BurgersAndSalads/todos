const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todoName: {
        type: String,
    },
    todoDetails: {
        type: String,
    },
    todoCheck: {
        type: Boolean,
    },
})

module.exports = mongoose.model('Todo', todoSchema)