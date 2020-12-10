import React, { Component } from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router-dom';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';

export default class App extends Component {



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
        <NavBar />
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
            <Route exact path='/high-scores' render={() => 
              userService.getUser() ? 
                <h1>Logged In</h1>
              :
                <Redirect to='/login'/>
            }/>
          </Switch>
      </div>
    );
  } 
}


