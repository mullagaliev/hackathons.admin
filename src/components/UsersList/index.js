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
    height: 40px;
    &.-odd{
      background-color: rgba(248, 248, 248, 0) !important;
    }
    &.-even{
      background-color: rgba(248, 248, 248, 1) !important; 
    }
  }
  .rt-th, .rt-td{
    height: 40px;
    line-height: 20px;
    text-align: left;
    padding: 10px !important;
    padding-left: 45px !important;
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
`;


export function makeData() {
  return [
    {
      "id": 5,
      "username": "Ivan Kamakin",
      "pic": "https://api.telegram.org/file/bot594797323:AAGaXnxv_lMjtMJHun5_4VuVVJnzEZFNA7k/photos/file_2.jpg",
      "contactPhone": null,
      "email": "ivkamakin@gmail.com",
      "status": "activated",
      "skills": [
        "Blockchain"
      ],
      "tgProfileLink": "https://t.me/van0k",
      "isSearchable": true,
      "xp": "0"
    },
    {
      "id": 8,
      "username": "Alex Naumov",
      "pic": "https://api.telegram.org/file/bot594797323:AAGaXnxv_lMjtMJHun5_4VuVVJnzEZFNA7k/photos/file_8.jpg",
      "contactPhone": null,
      "email": "aderhjf@gmail.com",
      "status": "applied",
      "skills": [
        "Designer"
      ],
      "tgProfileLink": "https://t.me/pomidorosos",
      "isSearchable": true,
      "xp": "0"
    },
    {
      "id": 10,
      "username": "Andrew Mullagaliev",
      "pic": "https://api.telegram.org/file/bot593557429:AAGIWo2p9VbdWdvNNZf0o2GfgLrCH8zAMdU/photos/file_3.jpg",
      "contactPhone": null,
      "email": "email",
      "status": "applied",
      "skills": [
        "Frontend"
      ],
      "tgProfileLink": "https://t.me/mullagaliev",
      "isSearchable": true,
      "xp": "0"
    },
    {
      "id": 9,
      "username": "Grigory Novikov",
      "pic": "https://api.telegram.org/file/bot593557429:AAGIWo2p9VbdWdvNNZf0o2GfgLrCH8zAMdU/photos/file_2.jpg",
      "contactPhone": null,
      "email": "Mail@mail.ru",
      "status": "applied",
      "skills": [
        "Blockchain"
      ],
      "tgProfileLink": "https://t.me/legendary_emperor",
      "isSearchable": false,
      "xp": "0"
    },
    {
      "id": 6,
      "username": "Roma Maltsev",
      "pic": "https://api.telegram.org/file/bot594797323:AAGaXnxv_lMjtMJHun5_4VuVVJnzEZFNA7k/photos/file_3.jpg",
      "contactPhone": null,
      "email": "No",
      "status": "activated",
      "skills": [
        "Backend"
      ],
      "tgProfileLink": "https://t.me/peramor",
      "isSearchable": false,
      "xp": "0"
    },
    {
      "id": 7,
      "username": "Maksim Diakov",
      "pic": "https://api.telegram.org/file/bot594797323:AAGaXnxv_lMjtMJHun5_4VuVVJnzEZFNA7k/photos/file_6.jpg",
      "contactPhone": null,
      "email": "Maximka@gaymail.com",
      "status": "applied",
      "skills": [
        "Frontend",
        "Designer"
      ],
      "tgProfileLink": "https://t.me/diakov2100",
      "isSearchable": false,
      "xp": "0"
    }
  ];
}

class UsersList extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }

  render() {
    const { data } = this.state;
    return (
        <Table
            data={data}
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
                Header: 'Phone',
                accessor: 'contactPhone'
              },
              {
                Header: 'Email',
                accessor: 'email'
              },
              {
                Header: 'Email',
                accessor: 'email'
              },
              {
                Header: 'Status',
                accessor: 'status'
              },
              {
                Header: 'Skills',
                accessor: 'skills'
              },
              {
                Header: 'telegram Profile',
                accessor: 'tgProfileLink'
              },
              {
                Header: 'isSearchable',
                accessor: 'isSearchable'
              },
              {
                Header: 'Xp',
                accessor: 'xp'
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
        />
    );
  }
}

UsersList.propTypes = {};
UsersList.defaultProps = {};

export default UsersList;
