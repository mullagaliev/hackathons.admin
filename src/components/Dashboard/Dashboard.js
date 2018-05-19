import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Statistics from '../Statistics';
import UserList from '../UsersList';

class Dashboard extends Component {
  render() {
    return (
        <div>
          <Statistics/>
          <UserList/>
        </div>
    );
  }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
