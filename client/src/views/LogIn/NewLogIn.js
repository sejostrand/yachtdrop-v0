import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  useCurrentUser,
  useDispatchCurrentUser,
} from '@assets/utils/CurrentUser';
import { useHistory } from 'react-router-dom';
import { callApi } from '../../utils';
import { COLORS } from '@assets/theme/theme';
import BG from '@assets/img/sea.jpg';
import SearchBar from '@components/SearchBar/SearchBar';

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: white;
  background-size: auto 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #f8faf7;
  padding: 30px;
  border-radius: 20px;
  margin: 15vh 0px;
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

const SubmitButton = styled.input`
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

const LogInButton = styled.button`
  margin: 10px 0px;
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

  &:hover {
    opacity: 0.8;
  }
`;

const SignUpButton = styled.a`
  margin: 0px;
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
  text-transform: capitalize;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

const Label = styled.div`
  font-size: 18px;
  color: black;
  margin: 2px 0px;
  position: relative;
`;

const StyledInput = styled.input`
  margin: 6px 0px;
  padding: 5px;
  width: 300px;
`;

export default function NewLogIn() {
  const dispatch = useDispatchCurrentUser();
  const currentUser = useCurrentUser();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (currentUser.isAuthenticated) {
      history.push('/shoppage');
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    try {
      const data = await callApi('/auth/local', 'POST', {
        identifier: emailRef.current.value,
        password: passwordRef.current.value,
      });

      if (!data.user) {
        throw 'Cannot login. Please try again.';
      }

      dispatch({ type: 'LOGIN', user: data.user });
      history.push('/login');
    } catch (err) {
      setErrorMsg(err);
    }
  };

  return (
    <>
      {/* <SearchBar disabled={true} /> */}
      <BodyWrapper>
        <Container>
          {errorMsg && <p>{errorMsg}</p>}
          <FormContainer style={{}} onSubmit={handleSubmit}>
            <PageTitle>Log In</PageTitle>

            <Label for='email-address'>Email</Label>
            <StyledInput
              ref={emailRef}
              type='email'
              name='email-address'
              id='email-address'
            />
            <Label className='db fw6 lh-copy f6' for='password'>
              Password
            </Label>
            <StyledInput
              ref={passwordRef}
              type='password'
              name='password'
              id='password'
            />

            <LogInButton type='submit'>LOG IN</LogInButton>

            <a href='#0'>Forgot your password?</a>
          </FormContainer>
          <ContentContainer>
            <Caption>
              You've signed up succesfully! <br />
              <br />
              Please log in to your account.
            </Caption>
          </ContentContainer>
        </Container>
      </BodyWrapper>
    </>
  );
}
