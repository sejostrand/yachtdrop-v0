import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';
import FieldInput from './objects/FieldInput';
import { COLORS } from '@assets/theme/theme';
import BG from '@assets/img/sea.jpg';

const BodyWrapper = styled.div`
  margin-top: 52px;
  display: flex;
  width: 100%;
  height: 80vh;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-image: url(${BG});
  background-position: center bottom;
  background-size: auto 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: #f8faf7;
  padding: 30px;
  border-radius: 20px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: start;
  width: auto;
  background-color: #f8faf7;
  padding: 30px;
  border-radius: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const PageTitle = styled.div`
  display: flex;
  color: black;
  font-size: 30px;
  padding: 10px;
`;

const Caption = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
`;

const SubmitButton = styled.div`
  padding: 10px 15px;
  margin: 0px;
  border-radius: 5px;
  background-color: ${COLORS.orange};
  color: white;
  font-size: 18px;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.8;
  }
`;

const LogInButton = styled.div`
  padding: 10px 15px;
  margin: 0px;
  border-radius: 5px;
  background-color: ${COLORS.green};
  color: white;
  font-size: 18px;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.8;
  }
`;

const SignUp = () => {
  const [first_name, setFirst_name] = useState('');
  const [user_email, setUser_email] = useState('');
  const [user_password, setUser_password] = useState('');
  const [repeat_password, setRepeat_password] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailing = {
      username: first_name,
      email: user_email,
      password: user_password,
    };

    fetch('http://localhost:1337/auth/local/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailing),
    }).then(() => {
      console.log('new user added');
    });
  };

  return (
    <>
      <NavBar />
      <BodyWrapper>
        <Container>
          <FormContainer
            action={'/signup'}
            method={'POST'}
            onSubmit={handleSubmit}
          >
            <PageTitle>Sign Up</PageTitle>
            <FieldInput
              type='text'
              placeholder='Name'
              label='Full Name:'
              value={first_name}
              onChange={(e) => setFirst_name(e.taget.value)}
            />
            <FieldInput
              label='Email:'
              type='email'
              placeholder='Email'
              value={user_email}
              onChange={(e) => setUser_email(e.target.value)}
            />
            <FieldInput
              label='Password:'
              type='password'
              placeholder='Password'
              value={user_password}
              onChange={(e) => setUser_password(e.target.value)}
            />
            <FieldInput
              label='Password:'
              type='password'
              placeholder='Repeat password'
              value={repeat_password}
              onChange={(e) => setRepeat_password(e.target.value)}
            />
            <ButtonContainer>
              <SubmitButton type='submit'>SUBMIT</SubmitButton>
              <LogInButton href='/login'>LOG IN</LogInButton>
            </ButtonContainer>
          </FormContainer>
          <ContentContainer>
            <Caption>Fill out your details and set sail!</Caption>
          </ContentContainer>
        </Container>
      </BodyWrapper>
      <Footer />
    </>
  );
};

export default SignUp;
