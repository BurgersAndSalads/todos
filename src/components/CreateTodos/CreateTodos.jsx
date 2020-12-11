import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreateTodos.css';

export default class CreateTodos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoName: '',
            todoDetails: '',
            todoCheck: false,
        }
    }

    onChangeTodoName = (e) => {
        this.setState({
            todoName: e.target.value
        });
    }

    onChangeTodoDetails = (e) => {
        this.setState({
            todoDetails: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            todoName: this.state.todoName,
            todoDetails: this.state.todoDetails,
            todoCheck: this.state.todoCheck,
        }

        axios.post('https://minimal-todos.herokuapp.com/api/todos/create', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todoName: '',
            todoDetails: '',
            todoCheck: false,
        })
    }

    render() {
        return(
            <div className="container">
                <h1>New Todo</h1>
                <form onSubmit={this.onSubmit} >
                    <div className="input-group mb-3">
                        <label>Todo Name:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todoName}
                                onChange={this.onChangeTodoName}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <label>Todo Details: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todoDetails}
                                onChange={this.onChangeTodoDetails}
                        />
                    </div>
                    <Button variant="primary" type="submit">Add Todo</Button>
                </form>

            </div>
        );
    }
}

