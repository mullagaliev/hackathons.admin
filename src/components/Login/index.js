import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoginButton = styled.button`
  display: block;
  margin: 0 auto;
`;

const LoginForm = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h2{
  text-align: center;
  }
  label{
    margin-bottom: 5px;
    display: inline-block;
  }
`;

const Input  = styled.input`
  min-height: 30px;
  border: 1px solid #DFDDDD;
  border-radius: 4px;
  line-height: 30px;
  padding: 0 10px;
  width: 100%;
  margin-bottom: 10px;
`;

class Login extends Component {
  render() {
    return (
        <React.Fragment>
          <LoginForm>
            <h2>Welcome!</h2>
            <label>Username</label>
            <Input placeholder='User'/>
            <label>Password</label>
            <Input placeholder='******' type='password'/>
            <LoginButton type='submit'>Login</LoginButton>
          </LoginForm>
        </React.Fragment>
    );
  }
}

Login.propTypes = {};
Login.defaultProps = {};

export default Login;
