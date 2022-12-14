import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: #000;
  &.active {
    color: #f00;
  }
`;
