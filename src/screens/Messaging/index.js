import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Chat from '../../components/Chat';

class DashboardScreen extends Component {
  render() {
    return (
        <Fragment>
          <div className='PageTitle'>
            <h1 className='PageTitle__title'>Messaging</h1>
            <span className='PageTitle__subtitle'>Push-notifications for participants</span>
          </div>
          <Chat/>
        </Fragment>
    );
  }
}

DashboardScreen.propTypes = {};
DashboardScreen.defaultProps = {};

export default DashboardScreen;
