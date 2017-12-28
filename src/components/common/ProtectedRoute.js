import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import UnAthorized from './UnAthorized';
import { moduleName } from '../../ducks/auth';

class ProtectedRoute extends Component {
  renderProtected = (routeProps) => {
    const {
      authorized,
      component: ProtectedComponent,
    } = this.props;

    return authorized ? <ProtectedComponent {...routeProps} /> : <UnAthorized />;
  };

  render() {
    const { component, ...rest } = this.props;

    return (
      <Route {...rest} render={this.renderProtected} />
    );
  }
}

ProtectedRoute.propTypes = {};
ProtectedRoute.defaultProps = {};

export default connect(state => ({
  authorized: !!state[moduleName].user,
}), null, null, { pure: false })(ProtectedRoute);
