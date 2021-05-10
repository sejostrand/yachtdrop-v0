import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentUser, useDispatchCurrentUser } from './CurrentUser';
import { callApi } from '../../utils';

const Header = () => {
  const dispatch = useDispatchCurrentUser();
  const user = useCurrentUser();

  console.log(user);

  const handleLogout = async () => {
    await callApi('/logout', 'POST');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <header>
      <nav>
        {user.isAuthenticated && <Link onClick={handleLogout}>Logout</Link>}
        {!user.isAuthenticated && <Link>Login</Link>}
      </nav>
    </header>
  );
};

export default Header;
