import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoName: '',
            todoDetails: '',
            todoCheck: false,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/todos/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    todoName: res.data.todoName,
                    todoDetails: res.data.todoDetails,
                    todoCheck: res.data.todoCheck,
                })
            })
            .catch(err => console.log(err));
    }

    onChangeTodoName = e => {
        this.setState({
            todoName: e.target.value
        });
    }

    onChangeTodoDetails = e => {
        this.setState({
            todoDetails: e.target.value
        });
    }

    onChangeTodoChecked = e => {
        this.setState({
            todoCheck: !this.state.todoCheck
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const todoObj = {
            todoName: this.state.todoName,
            todoDetails: this.state.todoDetails,
            todoCheck: this.state.todoCheck,
        }
        axios.post('http://localhost:3001/todos/edit/'+this.props.match.params.id, todoObj)
            .then(res => console.log(res.data));
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Edit Todo</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Todo Name:</label>
                        <input type="text" value={this.state.todoName} onChange={this.onChangeTodoName} />
                    </div>
                    <div>
                        <label>Todo Details:</label>
                        <input type="text" value={this.state.todoDetails} onChange={this.onChangeTodoDetails} />
                    </div>
                    <div>
                        <input type="checkbox" value={this.state.todoCheck} onChange={this.onChangeTodoChecked} checked={this.state.todoCheck}/>
                        <label>Checked</label>
                    </div>
                    <div>
                        <input type="submit" value="Commit" />
                    </div>
                </form>
            </div>
        );
    }
}