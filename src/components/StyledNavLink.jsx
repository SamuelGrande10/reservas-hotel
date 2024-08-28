import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  color: white;
  background-color: #70a9a1;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.10s ease;

  &:hover {
    background-color: #40798c;
  }
`;