import React, { Component } from 'react';
import { func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import emailValidator from 'email-validator';

import TextField from '../common/TextField';

class SignUp extends Component {
  render() {
    const {
      handleSubmit,
    } = this.props;

    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="email"
              component={TextField}
            />
          </div>
          <div>
            <Field
              name="password"
              component={TextField}
              type="password"
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  handleSubmit: func,
};
SignUp.defaultProps = {};

const validate = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = 'Please, enter an email';
  } else if (!emailValidator.validate(email)) {
    errors.email = 'Invalid email';
  }

  if (!password) {
    errors.password = 'Please, enter password';
  } else if (password.length < 6) {
    errors.password = '6 symbols minimum';
  }

  return errors;
};

export default reduxForm({ form: 'signUp', validate })(SignUp);
