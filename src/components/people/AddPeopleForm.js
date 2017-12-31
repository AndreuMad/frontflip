import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import TextField from '../common/TextField';

class AddPeopleForm extends Component {
  render() {
    const {
      handleSubmit,
    } = this.props;

    return (
      <div>
        <h2>Add new person</h2>
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            component={TextField}
          />
          <Field
            name="lastName"
            component={TextField}
          />
          <Field
            name="email"
            type="email"
            component={TextField}
          />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

AddPeopleForm.propTypes = {};
AddPeopleForm.defaultProps = {};

export default reduxForm({ form: 'people' })(AddPeopleForm);
