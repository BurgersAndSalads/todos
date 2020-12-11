const { NavbarText } = require('bootstrap-react');
const Todo = require('../models/todo');

module.exports = {
    getAll,
    create,
    edit,
    delete: deleteTodo,
}

async function getAll(req, res) {
    Todo.find((err, todo) => {
        if (err) {
            return next(error);
        } else {
            res.json(todo);
        }
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
    Todo.findByIdAndRemove(req.params.id, function(err, todo) {
        if (err) {
            return next(todo);
        } else {
            res.status(200).json({
                msg: todo
            });
        }
    });
}
