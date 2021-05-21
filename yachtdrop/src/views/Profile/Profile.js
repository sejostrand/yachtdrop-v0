import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  useCurrentUser,
  useDispatchCurrentUser,
} from '@assets/utils/CurrentUser';
import { useHistory } from 'react-router-dom';
import { callApi } from '../../utils';
import { COLORS } from '@assets/theme/theme';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';
import BG from '@assets/img/sea.jpg';
import SearchBar from '@components/SearchBar/SearchBar';

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-image: url(${BG});
  background-position: center bottom;
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

const Profile = () => {
  return (
    <>
      {/* <SearchBar disabled={true} /> */}
      <BodyWrapper>
        <Container>
          <ContentContainer></ContentContainer>
        </Container>
      </BodyWrapper>
    </>
  );
};

export default Profile;
