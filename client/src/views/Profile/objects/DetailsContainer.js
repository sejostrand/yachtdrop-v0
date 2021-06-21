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

const DetailsContainer = () => {
  const user = useCurrentUser();
  return (
    <Container>
      <Field>{user.user}</Field>
      <Field>Welcome {user.firstName}!</Field>
      <br />
      <Field>Here are your details:</Field>
      <br />
      <Field>Email: {user.email}</Field>
      <Field>Contact number: {user.contactNumber}</Field>
    </Container>
  );
};

export default DetailsContainer;
