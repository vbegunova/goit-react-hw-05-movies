import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 200px;
  padding-right: 200px;
`;

export const Header = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 2px 0px 10px 1px rgb(50, 45, 67, 0.5);
  font-weight: 500;
`;

export const StyledLink = styled(NavLink)`
  padding: 5px 20px;
  color: black;
  text-decoration: none;

  &.active {
    color: orangered;
  }
`;
