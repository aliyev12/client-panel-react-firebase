import React from 'react';
import styled from 'styled-components';
import Clients from '../clients/Clients';
import Sidebar from '../layout/Sidebar';

const DashboardContainer = styled.div`
    grid-area: dashboard;
    justify-content: space-between;
`;

const ClientsNew = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Dashboard = props => {
  return (
    <DashboardContainer>
      <ClientsNew>
        <Clients />
        <Sidebar />
      </ClientsNew>
    </DashboardContainer>
  );
};

export default Dashboard;
