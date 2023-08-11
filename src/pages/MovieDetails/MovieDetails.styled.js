import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const InfoContainer = styled.div`
  padding-bottom: 30px;
  display: flex;
  gap: 30px;
`;

export const AddInfo = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const AddTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
`;

export const LinkList = styled.ul`
  padding-top: 20px;
  margin-bottom: 30px;
  display: flex;
  gap: 10px;
`;

export const StyledListItemLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  color: black;

  &.active {
    color: orangered;
  }
`;

export const DefaultImage = styled.div`
  width: 300px;
  height: 450px;
  background-color: grey;
`;
