import React from 'react';
import styled from 'styled-components';
import {
  useCurrentUser,
  useDispatchCurrentUser,
} from '@assets/utils/CurrentUser';
import ICON from '@assets/img/profile-icon.png';

const Icon = styled.img`
  margin: 1px 10px;
  height: 40px;
  width: auto;
`;

const Link = styled.a`
  display: flex;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const ProfileLink = () => {
  const user = useCurrentUser();

  return (
    user.isAuthenticated && (
      <Link>
        <Icon src={ICON} href='/profile' />
      </Link>
    )
  );
};

export default ProfileLink;
