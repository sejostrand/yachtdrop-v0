import React from 'react';
import styled from 'styled-components';
import { useCurrentUser } from '@assets/utils/CurrentUser';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 30px;
  color: black;
  justify-content: center;
`;

const Field = styled.div`
  display: flex;
  font-weight: 500;
`;

const EmailField = styled.h2`
  font-size: 22px;
  margin: 20px 0; 
`;

const NameField = styled.h1`
  font-size: 26px;
  margin: 40px 0px;
`;

const DetailsContainer = () => {
  const user = useCurrentUser();
  return (
    <Container>
      <Field>{user.user}</Field>
      <NameField>Welcome {user.firstName}!</NameField>
      <br />
      <Field>Here are your details:</Field>
      <EmailField>Your Email: {user.email}</EmailField>
      <EmailField>Your contact number: {user.contactNumber}</EmailField>
    </Container>
  );
};

export default DetailsContainer;
