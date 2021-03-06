import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import TextField from '../common/TextField';

class SignIn extends Component {
  render() {
    const {
      handleSubmit,
    } = this.props;

    return (
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            component={TextField}
          />
          <Field
            name="password"
            component={TextField}
            type="password"
          />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

SignIn.propTypes = {};
SignIn.defaultProps = {};

export default reduxForm({ form: 'auth' })(SignIn);
