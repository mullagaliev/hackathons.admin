import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import UserItem from './UserItem';
import ReactTable from "react-table";
import "react-table/react-table.css";
import namor from "namor";
import styled from 'styled-components';

const Table = styled(ReactTable)`
  width: 100%;
  border: 0 !important;
  .rt-thead{
    background-color: #F0F0F0;
    box-shadow: none !important;
    border-radius: 6px 6px 0 0;
  }
  background: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.50);
  border-radius: 6px;
  *{
    outline: none;
  }
  .rt-tr{
    min-height: 40px;
    &.-odd{
      background-color: rgba(248, 248, 248, 0) !important;
    }
    &.-even{
      background-color: rgba(248, 248, 248, 1) !important; 
    }
  }
  .rt-th, .rt-td{
    min-height: 40px;
    line-height: 20px;
    text-align: left;
    padding: 10px !important;
    padding-left: 25px !important;
    padding-right: 25px !important;
    border-right: 0 !important;
  }
  .rt-resizable-header-content{
    line-height: 20px;
  }
  *{
    font-family: "Muller", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #1F2F46;
    letter-spacing: 0;
  }
  .-sort-asc{
    box-shadow: inset 0 3px 0 0 rgba(44,203,112,1) !important;
  }
  .-sort-desc{
    box-shadow: inset 0 -3px 0 0 rgba(244,67,54,1) !important;
  }
  .number{
  text-align: center !important;
  }
`;


function makeData() {
  return
}

class UsersList extends Component {
  constructor() {
    super();
  }

  render() {
    const { data } = this.props;
    return (
        <Table
            data={data}
            defaultResized={
              [
                {
                  "id": "id",
                  "value": 70
                },
                {
                  "id": "username",
                  "value": 180
                },
                {
                  "id": "email",
                  "value": 210
                },
                {
                  "id": "status",
                  "value": 160
                },
                {
                  "id": "tgProfileLink",
                  "value": 280
                },
                {
                  "id": "isSearchable",
                  "value": 170
                },
                {
                  "id": "xp",
                  "value": 70
                }
              ]
            }
            columns={[
              {
                Header: 'Id',
                accessor: 'id'
              },
              {
                Header: 'Username',
                accessor: 'username'
              },
              {
                Header: 'Xp',
                accessor: 'xp',
                Cell: props => <div className='number'>{props.value}</div>
              },
              {
                Header: 'Status',
                accessor: 'status',
                Cell: props => {
                  props.value ? "Yes" : "No";
                  switch (props.value) {
                    case 'participated':
                      return <span>{props.value} ☑️</span>;
                    case 'activated':
                      return <span>{props.value} ✅</span>;
                    default:
                      return <span>{props.value}</span>;
                  }
                }
              },
              {
                Header: 'Skills',
                accessor: 'skills',
                Cell: props => props.value.length > 0 ? props.value.map((skill) => <div
                    className='number'>{skill}</div>) : null
              },
              {
                Header: 'telegram Profile',
                accessor: 'tgProfileLink',
                Cell: props => <a href={props.value} target="_blank">{props.value}</a>
              },
              {
                Header: 'Email',
                accessor: 'email',
                Cell: props => props.value.indexOf('@') > 0 ?
                    <a href={props.value} target="_blank">{props.value}</a> : props.value
              },
              {
                Header: 'is Searchable',
                accessor: 'isSearchable',
                Cell: props => props.value ? "Yes" : "No"
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
  }
}

UsersList.propTypes = {};
UsersList.defaultProps = {
  data: []
};

export default UsersList;
