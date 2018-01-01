import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Loader from '../components/common/Loader';

import { signUp, moduleName } from '../ducks/auth';

class AuthPage extends Component {
  handleSignIn = (values) => {
    console.log(values);
  };

  handleSignUp = ({ email, password }) => {
    this.props.signUp(email, password);
  };

  render() {
    const { loading } = this.props;

    return (
      <div>
        <div>
          <NavLink to="/auth/sign-in" component={SignIn}>Sign In</NavLink>
          <NavLink to="/auth/sign-up" component={SignUp}>Sign Up</NavLink>
        </div>
        <div>
          <Switch>
            <Route path="/auth/sign-in" render={() => <SignIn onSubmit={this.handleSignIn}/>}/>
            <Route path="/auth/sign-up" render={() => <SignUp onSubmit={this.handleSignUp}/>}/>
            <Redirect from="/auth" to="/auth/sign-in" />
          </Switch>
        </div>
        {loading && <Loader />}
      </div>
    );
  }
}

export default connect(state => ({
  loading: state[moduleName].loading,
}), { signUp })(AuthPage);
