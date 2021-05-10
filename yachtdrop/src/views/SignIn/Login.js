import React, { useEffect, useRef, useState } from 'react';
import { useCurrentUser, useDispatchCurrentUser } from './CurrentUser';
import { useHistory } from 'react-router-dom';
import { callApi } from '../../utils';
import Header from './Header';
import styled from 'styled-components';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f8faf7;
`;

export default function LogIn() {
  const dispatch = useDispatchCurrentUser();
  const currentUser = useCurrentUser();
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState(null);

  /* useEffect(() => {
    if(currentUser.isAuthenticated) {
      history.push("/shoppage")
    }
  }, [currentUser]); */

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
      <Header />
      <Main>
        {errorMsg && <p>{errorMsg}</p>}
        <form style={{}} onSubmit={handleSubmit}>
          <fieldset id='sign_up'>
            <legend>Sign In</legend>
            <div>
              <label for='email-address'>Email</label>
              <input
                ref={emailRef}
                type='email'
                name='email-address'
                id='email-address'
              />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' for='password'>
                Password
              </label>
              <input
                ref={passwordRef}
                type='password'
                name='password'
                id='password'
              />
            </div>
          </fieldset>
          <div>
            <input type='submit' value='Sign in' />
          </div>
          <div className='lh-copy mt3'>
            <a href='#0'>Sign up</a>
            <a href='#0'>Forgot your password?</a>
          </div>
        </form>
      </Main>
    </>
  );
}
