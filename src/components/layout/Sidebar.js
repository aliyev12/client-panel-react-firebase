import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {Btn} from '../../styles/Button';

const StyledLink = styled (Btn)`
    background: ${props => props.theme.primary};
    color: ${props => props.theme.white};

    &:hover {
        background-color: #0069d9;
        border-color: #0062cc;
    }
`;

const Sidebar = props => {
    return (
        <StyledLink to="/client/add">
            + New
        </StyledLink>
    )
}

export default Sidebar;