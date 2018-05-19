import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UsersIcon from '../../assets/all/Group Copy.png';
import PlusIcon from '../../assets/all/Group 3 Copy.png';
import OkIcon from '../../assets/all/Group 2 Copy.png';
import LikeIcon from '../../assets/all/Group 4 Copy.png';

const List = styled.div`
  display: flex;
  flex-flow: row nowrap;
  & > *{
    border: 1px solid #979797;
    border-left: 0;
  }
  & > *:first-child{
    border-left: 1px solid #979797;
    border-radius: 6px 0 0 6px;
  }
  & > *:last-child{
    border-radius: 0 6px 6px 0;
    //border-right: 0;
  }
  margin-bottom: 25px;
`;
const Item = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  padding: 25px;
  height: 114px;
  background-color: #FFFFFF;
  box-shadow: inset 0 0 1px 0 rgba(0,0,0,0.50);
  &:hover{
    background-color: #F0F0F0;
    cursor: pointer;
  }
  &.active{
    background-color: #F0F0F0;
  }
`;

const ItemTitle = styled.div`
  margin-left: 25px;
  span{
    display: block;
    font-family: "Muller", sans-serif;
    font-weight: bold;
    font-size: 36px;
    color: #1F2F46;
    letter-spacing: 0;
  }
  span:last-child{
      opacity: 0.5;
      font-family: "Muller", sans-serif;
      font-weight: normal;
      font-size: 18px;
      color: #1F2F46;
      letter-spacing: 0;
    }
`;

const Icon = styled.img`
  width: auto;
  height: 62px;
`;

class Statistics extends Component {
  getStatistics = (data) => {
    return {
      activated: data.filter((item)=>item.status === "activated").length,
      applied: data.filter((item)=>item.status === "applied").length,
      total: data.length,
      totalXp: data.reduce(function(previousItem, currentItem) {
        return Number(previousItem) + Number(currentItem.xp);
      }, 0)
    }
  };
  render() {
    const { data } = this.props;
    console.log(data);
    const statisticsData = this.getStatistics(data);
    return (
        <List>
          <Item>
            <Icon src={UsersIcon}/>
            <ItemTitle>
              <span>{statisticsData.total}</span>
              <span>Total</span>
            </ItemTitle>
          </Item>
          <Item>
            <Icon src={PlusIcon}/>
            <ItemTitle>
              <span>{statisticsData.applied}</span>
              <span>Applied</span>
            </ItemTitle>
          </Item>
          <Item>
            <Icon src={OkIcon}/>
            <ItemTitle>
              <span>{statisticsData.activated}</span>
              <span>Activated</span>
            </ItemTitle>
          </Item>
          <Item>
            <Icon src={LikeIcon}/>
            <ItemTitle>
              <span>{statisticsData.totalXp}</span>
              <span>Total XP</span>
            </ItemTitle>
          </Item>
        </List>
    );
  }
}

Statistics.propTypes = {};
Statistics.defaultProps = {
  data: []
};

export default Statistics;
