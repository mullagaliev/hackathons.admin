import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from "react-redux";
import { loginByUsername } from '../../redux/actions/loginActions';
import { setAuth } from '../../redux/actions/authActions';

import {
  Redirect
} from 'react-router-dom';

const LoginButton = styled.button`
  display: block;
  margin: 0 auto;
`;

const LoginForm = styled.form`
  width: 40%;
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

const Input = styled.input`
  min-height: 30px;
  border: 1px solid #DFDDDD;
  border-radius: 4px;
  line-height: 30px;
  padding: 0 10px;
  width: 100%;
  margin-bottom: 10px;
`;

class Login extends Component {
  handlerSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    if (login !== '' && password !== '') {
      this.props.loginByUsername(login, password);
    }
  };
  state = {
    login: '',
    password: ''
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.success) {
      this.props.setAuth(nextProps.token);
    }
  };

  render() {
    const { login, password } = this.state;
    if (this.props.success)
      return <Redirect to='/dashboard'/>;
    return (
        <React.Fragment>
          <LoginForm onSubmit={this.handlerSubmit}>
            <h2>Welcome!</h2>
            <label>Username</label>
            <Input placeholder='User' name='login' value={login}
                   onChange={this.handleInputChange}/>
            <label>Password</label>
            <Input placeholder='******' type='password' value={password} name='password'
                   onChange={this.handleInputChange}/>
            <LoginButton type='submit'>Login</LoginButton>
          </LoginForm>
        </React.Fragment>
    );
  }
}

Login.propTypes = {};
Login.defaultProps = {};

// export default Login;
export default connect((state) => {
  return { success: state.login.success, token: state.login.data ? state.login.data.token : "" }
}, { loginByUsername, setAuth })(Login);
