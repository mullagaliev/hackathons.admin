import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LeftMenuContent from '../../components/LeftMenu';
import Breadcrumbs from '../../components/Breadcrumbs';

import MenuIcon from '../../assets/all/menu.svg';
import NotificationIcon from '../../assets/all/notification.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
`;

const Header = styled.header`
  //line-height: 76px;
  height: 76px;
  background: #4385F5;
  *{
    color: #eff5fe;
    font-family: .AppleSystemUIFont;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-transform: uppercase;
    cursor: pointer;
  }
  padding: 25px;
`;

const NavItems = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    *{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      font-family: "Muller", sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-transform: uppercase;
      cursor: pointer;
      span{
        display: block;
        height: 16px;
      }
    }
`;

const ContentContainer = styled.section`
   flex: 0 1 auto;
   height: 100vh;
   position: relative;
   background-color: #ededed;
   display: flex;
   flex-flow: row nowrap;
`;

const LeftMenu = styled.section`
  display: ${props => props.visible ? 'block' : 'none'};
  width: 200px;
  height: 100%;
  background: #1F2F46;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
`;

const Content = styled.section`
   flex: 0 1 auto;
   height: 100%;
   width: 100%;
   overflow: auto;
`;

const ContentInside = styled.div`
   padding: 1em;
   max-height: calc(100% - 40px - 71px);
   overflow: auto;
`;

const Icon = styled.img`
  display: inline-block;
  width: auto;
  height: 15px;
  margin-right: 20px;
`;

class BaseScreen extends Component {
  state = {
    menuVisible: true
  };

  render() {
    return (
        <Wrapper>
          <Header>
            <NavItems>
              <span onClick={() => {
                this.setState({ menuVisible: !this.state.menuVisible });
              }}>
                <Icon src={MenuIcon} style={{ marginRight: '25px' }}/>
                <span>
                  hackathon management
                </span>
              </span>
              <span>
                <Icon src={NotificationIcon} style={{ marginRight: '25px' }}/>
              </span>
            </NavItems>
          </Header>
          <ContentContainer>
            <LeftMenu visible={this.state.menuVisible}>
              <LeftMenuContent/>
            </LeftMenu>
            <Content>
              <Breadcrumbs/>
              <ContentInside>
                {this.props.children}
              </ContentInside>
            </Content>
          </ContentContainer>
        </Wrapper>
    );
  }
}

BaseScreen.propTypes = {};
BaseScreen.defaultProps = {};

export default BaseScreen;
