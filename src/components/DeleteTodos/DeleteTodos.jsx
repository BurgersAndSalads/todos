import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DeleteTodos.css'

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            user: this.props.user,
        })
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    

    deleteTodo() {
        axios.post('https://minimal-todos.herokuapp.com/api/todos/delete/' + this.props.todo._id)
            .then((res) => {
                console.log('todo deleted')
            }).catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <tr>
                <td className={this.props.todo.todoCheck ? 'checked' : ''}>{this.props.todo.todoName}</td>
                <td className={this.props.todo.todoCheck ? 'checked' : ''}>{this.props.todo.todoDetails}</td>
                <td>
                    <Button variant="info" id="edit-btn">
                        <Link to={'/edit/'+this.props.todo._id} id="edit-link">Edit</Link>
                    </Button>
                    <Button variant="secondary" id="delete-btn" onClick={this.deleteTodo}>Delete</Button>
                </td>
            </tr>
    
        );
    }
}