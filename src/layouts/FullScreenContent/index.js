import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FullScreenContainer = styled.div`
  background-color: #ededed;
  position: absolute;
  top: -74px;
  left: 0;
  right: 0;
  bottom: 0;
`;

class FullScreen extends Component {
  render() {
    return (
        <FullScreenContainer>
          {this.props.children}
        </FullScreenContainer>
    );
  }
}

FullScreen.propTypes = {};
FullScreen.defaultProps = {};

export default FullScreen;
