import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';
import { COLORS } from '@assets/theme/theme';
import BG from '@assets/img/sea.jpg';
import {
  useCurrentUser,
  useDispatchCurrentUser,
} from '@assets/utils/CurrentUser';

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
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const PageTitle = styled.div`
  display: flex;
  color: black;
  font-size: 30px;
  padding: 10px 0px;
`;

const Caption = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 30px 0px;
  font-size: 18px;
`;

const SubmitButton = styled.button`
  margin: 10px 0px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: ${COLORS.orange};
  color: white;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.8;
  }
`;

const LogInButton = styled.a`
  margin: 0px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100px;
  border-radius: 5px;
  background-color: ${COLORS.green};
  color: white;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const Label = styled.label`
  font-size: 18px;
  color: black;
  margin: 2px 0px;
  position: relative;
`;

const StyledInput = styled.input`
  margin: 6px 0px;
  color: black;
  padding: 5px;
  width: 300px;
`;

const SignUp = () => {
  const [first_name, setFirst_name] = useState('');
  const [user_email, setUser_email] = useState('');
  const [user_password, setUser_password] = useState('');
  const [repeat_password, setRepeat_password] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailing = {
        username: first_name, 
        email: user_email, 
        password: user_password};

    fetch('http://localhost:1337/auth/local/register', {
        method: 'POST',
        headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(mailing)
    }).then(() => {
      console.log('new user added');
    });
    setRedirect(true);
  };

  useEffect(() => {
    if (redirect == true) {
      window.location.assign('/newlogin');
    }
  }, [redirect]);

  return (
    <>
      <NavBar />
      <BodyWrapper>
        <Container>
          <FormContainer action={"/signup"} method={"POST"} onSubmit={handleSubmit}>
            <PageTitle>Sign Up</PageTitle>
            <Label>Full Name</Label>
            <StyledInput
              type='text'
              placeholder='Name'
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
            />
            <Label>Email:</Label>
            <StyledInput
              type='email' 
              placeholder='Email'
              value={user_email}
              onChange={(e) => setUser_email(e.target.value)}
            />
            <Label>Password:</Label>
            <StyledInput
              type='password' 
              placeholder='Password'
              value={user_password}
              onChange={(e) => setUser_password(e.target.value)}
            />
            <SubmitButton type='submit' value='register'>
              SUBMIT
            </SubmitButton>
          </FormContainer>
          <ContentContainer>
            <Caption>
              Fill out your details and become part of the crew!
            </Caption>
            <Caption>Already registered? Log in to your account below.</Caption>
            <LogInButton href='/login'>LOG IN</LogInButton>
          </ContentContainer>
        </Container>
      </BodyWrapper>
      <Footer />
    </>
  );
};

export default SignUp;
