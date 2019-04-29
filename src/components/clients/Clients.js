import React from 'react';
import styled from 'styled-components';


import {Btn} from '../../styles/Button';

const clients = [
  {
    id: '121212',
    firstName: 'Wooowooo',
    lastName: 'Laalaaa',
    email: 'wl@wl.wl',
    phone: '222-222-2222',
    balance: '30',
  },
  {
    id: '121213',
    firstName: 'Nooonooo',
    lastName: 'Naanaaa',
    email: 'wl@wl.wl',
    phone: '333-222-2222',
    balance: '40',
  },
];

const ClientsRaw = styled.div`
    display: flex;
`;

const Table = styled.table`
    display: table;
    border-collapse: collapse;
    border: 2px solid pink;

    & thead {
        background: yellow;
    }
    & tbody {
        & tr:nth-child(even)  {
            background: lightyellow;
        }
        & tr:nth-child(odd) {
            background: #fff;
        }
        & td {
            padding: .75rem;
            vertical-align: center;
        }   
  
    }
`;

const ClientLink = styled (Btn)`
    background: ${props => props.theme.secondary};
    color: ${props => props.theme.black};
    margin: auto 0;

    &:hover {
        background-color: ${props => props.theme.black};
        color: ${props => props.theme.white};
        border-color: #0062cc;
    }
`;

const Client = props => {
  if (clients) {
    return (
      <div>
        <ClientsRaw>
          <div>
            <h2>
              <span role="img" aria-label="Guy using a laptop">👨‍💻</span>
              {' '}
              Clients
            </h2>
          </div>
        </ClientsRaw>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Balance</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {clients.map (client => (
              <tr key={client.id}>
                <td>{client.firstName} {client.lastName}</td>
                <td>{client.email}</td>
                <td>${parseFloat (client.balance).toFixed (2)}</td>
                <td>
                  <ClientLink to={`/client/${client.id}`}>
                    -> Details
                  </ClientLink>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Client;
