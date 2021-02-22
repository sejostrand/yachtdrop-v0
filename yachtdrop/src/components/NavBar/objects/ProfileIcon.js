import React from 'react';
import styled from 'styled-components';
import Profile from '../../../assets/img/profile-icon.png';

const StyledProfileIcon = styled.img`
  width: 2.5rem;
  cursor: pointer;
  align-items: space-between;
  justify-items: center;
  margin-inline: 1rem;
`;

const ProfileIcon = () => {
  return <StyledProfileIcon src={Profile} />;
};

export default ProfileIcon;
