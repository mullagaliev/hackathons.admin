import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Dashboard from '../../components/Dashboard';

class DashboardScreen extends Component {
  render() {
    return (
        <Fragment>
          <div className='PageTitle'>
            <h1 className='PageTitle__title'>Dashboard</h1>
            <span className='PageTitle__subtitle'>Welcome back, User_1</span>
          </div>

          <Dashboard/>
        </Fragment>
    );
  }
}

DashboardScreen.propTypes = {};
DashboardScreen.defaultProps = {};

export default DashboardScreen;
