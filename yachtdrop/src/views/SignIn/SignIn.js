import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';

const BodyWrapper = styled.body`
  padding-top: 97px;
  width: 100%;
  height: auto;
  display: flex;
`;

const SignUpWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f8faf7;
`;

const SignUpInput = styled.input`
  width: 40%;
  height: 10%;
  text-align: center;
  margin: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  background-color: lightblue;
  color: black;
  font-size: 18px;
`;

const SignUp = () => {
  const [first_name, setFirst_name] = useState('');
  const [user_email, setUser_email] = useState('');
  const [user_password, setUser_password] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailing = {
      identifier: user_email,
      password: user_password,
    };

    fetch('http://localhost:1337/auth/local', {
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
        <SignUpWrapper
          action={'/signup'}
          method={'POST'}
          onSubmit={handleSubmit}
        >
          <h1>Email</h1>
          <SignUpInput
            type='email'
            placeholder='Email'
            value={user_email}
            onChange={(e) => setUser_email(e.target.value)}
          />
          <h1>Password</h1>
          <SignUpInput
            type='password'
            placeholder='Password'
            value={user_password}
            onChange={(e) => setUser_password(e.target.value)}
          />
          <SubmitButton type='submit'>Submit</SubmitButton>
          <a href='/signin'>Sign In</a>
        </SignUpWrapper>
      </BodyWrapper>
      <Footer />
    </>
  );
};

export default SignUp;
