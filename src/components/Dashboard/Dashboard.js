import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Statstics from '../Statistics';

class Dashboard extends Component {


  render() {
    return (
        <div>
          <Statstics/>
        </div>
    );
  }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
