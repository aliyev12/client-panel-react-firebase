import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import menu from '../../static/menu.svg';

const Header = styled.header`
grid-area: header;
background: ${props => props.theme.black};
color: ${props => props.theme.white};
padding: 20px;
display: flex;
align-items: center;
`;

const StyledLink = styled (Link)`
    text-decoration: none;
    color: ${props => props.theme.white};
    &:hover {
        color: ${props => props.theme.red};
    }
    transition: all 0.3s;
`;

const NavLink = styled (Link)`
    color: red;
`;

const ButtonToggler = styled.button`
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
`;

const BurgerMenu = styled.span`
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
    background-image: url(${menu});
`;

const Collapsable = styled.div`
    color: green;
`;

const Ul = styled.ul`
    list-style: none;
    margin: 0 auto;
    padding: 0;
`;

const Li = styled.li`
    background: blue;
`;

const AppNavbar = props => {
  return (
    <Header>
      <StyledLink to="/">
        ClientPanel
      </StyledLink>
      <ButtonToggler type="button"><BurgerMenu /></ButtonToggler>
      <Collapsable>
        <Ul>
          <Li>
            <NavLink to="/">Dashboard</NavLink>
          </Li>
        </Ul>
      </Collapsable>
    </Header>
  );
};

export default AppNavbar;
