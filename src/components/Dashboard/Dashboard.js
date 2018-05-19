import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Statistics from '../Statistics';
import UserList from '../UsersList';
import { connect } from "react-redux";
import { getParticipants } from "../../redux/actions/participantsActions";


class Dashboard extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.getParticipants();
    }, 100);
  };

  render() {
    const { data } = this.props;
    return (
        <div>
          <Statistics data={data}/>
          <UserList data={data}/>
        </div>
    );
  }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default connect((state) => {
  return { data: state.participants.data }
}, { getParticipants })(Dashboard);

