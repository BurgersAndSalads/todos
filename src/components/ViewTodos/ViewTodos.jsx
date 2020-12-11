import React, { Component } from 'react';
import axios from 'axios';
import DeleteTodos from '../DeleteTodos/DeleteTodos';

export default class ViewTodos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/todos/')
            .then(res => {
                this.setState({todos: res.data});
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:3001/todos')
            .then(res => {
                this.setState({todos: res.data});
            })
            .catch(function (err) {
                console.log(err);
            })
    }
 
    all() {
        return this.state.todos.map((t, i) => {
            return <DeleteTodos todo={t} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Details</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.all() }
                    </tbody>
                </table>
            </div>
        );
    }
}