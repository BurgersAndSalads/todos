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
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
})

module.exports = mongoose.model('Todo', todoSchema)