import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import FullScreenContent from '../../layouts/FullScreenContent';
import Login from '../../components/Login';


class LoginScreen extends Component {
  render() {
    return (
        <FullScreenContent>
          <Login/>
        </FullScreenContent>
    );
  }
}

LoginScreen.propTypes = {};
LoginScreen.defaultProps = {};

export default LoginScreen;
