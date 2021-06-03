import React from 'react';
import styled from 'styled-components';

const NavAdminWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`;

const NavAdmin = ({ children }) => {
  return <NavAdminWrap>{children}</NavAdminWrap>;
};

export default NavAdmin;
