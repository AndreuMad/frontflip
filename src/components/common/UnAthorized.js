import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class UnAthorized extends Component {
  render() {
    return (
      <div>
        <h2>Unathorized, please, <Link to="/auth/signin">Sign in</Link></h2>
      </div>
    );
  }
}

UnAthorized.propTypes = {};
UnAthorized.defaultProps = {};

export default UnAthorized;
