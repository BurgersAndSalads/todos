import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            user: this.props.user,
        })
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    

    deleteTodo() {
        axios.post('http://localhost:3001/api/todos/delete/' + this.props.todo._id)
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
                    <Link to={'/edit/'+this.props.todo._id}>Edit</Link>
                    <button onClick={this.deleteTodo}>Delete</button>
                </td>
            </tr>
    
        );
    }
}