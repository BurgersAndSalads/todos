import React, { Component } from 'react';
import axios from 'axios';

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

        axios.post('http://localhost:3001/todos/create', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todoName: '',
            todoDetails: '',
            todoCheck: false,
        })
    }

    render() {
        return(
            <div>
                <h1>New Todo</h1>
                <form onSubmit={this.onSubmit} >
                    <div>
                        <label>Todo Name</label>
                        <input  type="text"
                                value={this.state.todoName}
                                onChange={this.onChangeTodoName}
                        />
                    </div>
                    <div>
                        <label>Todo Details</label>
                        <input  type="text"
                                value={this.state.todoDetails}
                                onChange={this.onChangeTodoDetails}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Add Todo"/>
                    </div>
                </form>

            </div>
        );
    }
}

