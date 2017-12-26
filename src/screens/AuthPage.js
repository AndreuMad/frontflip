import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

class AuthPage extends Component {
  handleSignIn = (values) => {
    console.log(values);
  };

  handleSignUp = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <div>
          <NavLink to="/auth/sing-in" component={SignIn}>Sign In</NavLink>
          <NavLink to="/auth/sing-up" component={SignUp}>Sign Up</NavLink>
        </div>
        <div>
          <Switch>
            <Route path="/auth/sing-in" render={() => <SignIn onSubmit={this.handleSignIn} />} />
            <Route path="/auth/sing-up" render={() => <SignUp onSubmit={this.handleSignUp} />} />
            <Redirect from="/auth" to="/auth/sing-in" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AuthPage;
