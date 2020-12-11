import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBarComponent from '../../components/NavBar/NavBar';

import ViewTodos from '../../components/ViewTodos/ViewTodos';
import EditTodos from '../../components/EditTodos/EditTodos';
import CreateTodos from '../../components/CreateTodos/CreateTodos';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }


  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }


  render() {
    return (
      <div>
        <NavBarComponent
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
        <Route path="/" exact component={ViewTodos} />
        <Route path="/edit/:id" component={EditTodos} />
        <Route path="/create" component={CreateTodos} />
      </div>
    );
  } 
}