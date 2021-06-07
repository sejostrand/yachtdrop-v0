import React from 'react';
import styled from 'styled-components';
import { useCurrentUser } from '@assets/utils/CurrentUser';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 30px;
  color: black;
`;

const Field = styled.div`
  display: flex;
`;

const DetailsContainer = () => {
  const user = useCurrentUser();
  return (
    <Container>
      <Field>Username: {user.user}</Field>
      <Field>Email: {user.email}</Field>
      <Field>First name: {user.firstName}</Field>
      <Field>Contact number: {user.contactNumber}</Field>
    </Container>
  );
};

export default DetailsContainer;
