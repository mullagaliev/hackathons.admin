import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BreadcrumbsContainer = styled.div`
  background: #FFFFFF;
  height: 40px;
  line-height: 40px;
  padding: 0 25px;
  *{
    font-family: .AppleSystemUIFont;
    font-size: 14px;
    color: #1F2F46;
    letter-spacing: 0;
    &:after{
      content: '/';
      padding: 5px;
      opacity: 0.5;
    }
    &:last-child{
      &:after{
        content: none;
      }
    }
  }
  & > .current{
    opacity: 0.5;
  }
`;

class Breadcrumbs extends Component {
  render() {
    return (
        <BreadcrumbsContainer>
          <a href="/">Home</a>
          <a className='current'>dashboard</a>
        </BreadcrumbsContainer>
    );
  }
}

Breadcrumbs.propTypes = {};
Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
