import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddPeopleForm from '../components/people/AddPeopleForm';

import { addPersonRequest } from '../ducks/people';

class PeoplePage extends Component {
  handleAddPerson = (person) => {
    this.props.addPersonRequest(person);
  };

  render() {
    return (
      <div>
        <AddPeopleForm onSubmit={this.handleAddPerson} />
      </div>
    );
  }
}

PeoplePage.propTypes = {};
PeoplePage.defaultProps = {};

export default connect(null, { addPersonRequest })(PeoplePage);
