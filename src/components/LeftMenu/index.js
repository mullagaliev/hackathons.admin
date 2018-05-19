import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NoteIcon from '../../assets/all/note.svg';
import ChatIcon from '../../assets/all/chat.svg';
import AvatarIcon from '../../assets/img/org.jpeg';

const LinkItem = styled(NavLink)`
   display: flex;
   flex-flow: row nowrap;
   align-items: center;
   height: 60px;
   line-height: 20px;
   padding-left: 25px;
   background-color: transparent;
   text-decoration: none;
   &:hover{
     background-color: #172334;
   }
   &.active {
    background-color: #172334;
   }
   font-family: "Muller", sans-serif;
   font-weight: 400;
   font-size: 14px;
   color: #FFFFFF;
   letter-spacing: 0;
`;

const Icon = styled.img`
  display: inline-block;
  width: auto;
  height: 20px;
  margin-right: 20px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  height: 85px;
  border: 3px solid #19273A;
  padding: 20px;
  img{
    height: 40px;
    width: auto;
    margin-right: 20px;
  }
  span{
    font-family: "Muller", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
  }
`;

class LeftMenu extends Component {
  render() {
    return (
        <Fragment>
          <UserProfile>
            <img src={AvatarIcon} alt="Avatar"/>
            <span>AI<br/>community</span>
          </UserProfile>
          <nav>
            <LinkItem to="/dashboard">
              <Icon src={NoteIcon} alt="Note"/>
              Dashboard
            </LinkItem>
            <LinkItem to="/messaging">
              <Icon src={ChatIcon} alt="Chat"/>
              Messaging
            </LinkItem>
          </nav>
        </Fragment>
    );
  }
}

LeftMenu.propTypes = {};
LeftMenu.defaultProps = {};

export default LeftMenu;
