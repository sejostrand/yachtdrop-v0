import React from 'react';
import styled from 'styled-components';
import NavBar from '@components/NavBar/NavBar';

const Container = styled.div`
  display: flex;
`;

const Profile = () => {
  return (
    <>
      <NavBar />
      <Container></Container>
    </>
  );
};

export default Profile;
