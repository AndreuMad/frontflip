import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { moduleName as authModuleName, signOut } from '../ducks/auth';
import ProtectedRoute from './common/ProtectedRoute';

import AdminPage from '../screens/AdminPage';
import AuthPage from '../screens/AuthPage';
import PeoplePage from '../screens/PeoplePage';

class Root extends Component {
  render() {
    const {
      signedIn,
      signOut,
    } = this.props;

    const $authBtn = signedIn
      ? <button onClick={signOut}>Sign out</button>
      : <Link to="/auth/sign-in">Sign in</Link>;

    return (
      <div>
        <div>{$authBtn}</div>
        <Switch>
          <ProtectedRoute path="/admin" component={AdminPage} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/people" component={PeoplePage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  signedIn: !!state[authModuleName].user,
}), { signOut })(Root));
