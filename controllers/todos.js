const Todo = require('../models/todo');

module.exports = {
    getAll,
    create,
    edit,
    delete: deleteTodo,
    getOne,
}

async function getAll(req, res) {
    Todo.find({}, function(err, todo) {
        res.json(todo);
    });
}

async function create(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('todo not saved');
        });
}

async function edit(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo) res.status(404).send('no todo found');
        else {
            todo.todoName = req.body.todoName;
            todo.todoDetails = req.body.todoDetails;
            todo.todoCheck = req.body.todoCheck;
            todo.save().then(todo => {
                res.json('updated successfully.')
            })
            .catch(err => {
                res.status(400).send('update unsuccessful')
            })
        }
    });
}

async function deleteTodo(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        todo.remove();
    });
}

async function getOne(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        res.json(todo);
    });
}