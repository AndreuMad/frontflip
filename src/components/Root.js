import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ProtectedRoute from './common/ProtectedRoute';

import AdminPage from '../screens/AdminPage';
import AuthPage from '../screens/AuthPage';

class Root extends Component {
  render() {
    return (
      <div>
        <ProtectedRoute path="/admin" component={AdminPage} />
        <Route path="/auth" component={AuthPage} />
      </div>
    );
  }
}

export default Root;
