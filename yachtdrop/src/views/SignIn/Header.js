import React from "react";
import { Link } from "react-router-dom";
import { useCurrentUser, useDispatchCurrentUser } from "./CurrentUser";
import { callApi } from "../../utils";

const Header = () => {
  const dispatch = useDispatchCurrentUser();
  const user = useCurrentUser();

  console.log(user)

  const handleLogout = async () => {
    await callApi("/logout", "POST");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
      <nav className="f6 fw6 ttu tracked">
        {user.isAuthenticated && (
          <Link className="link dim white dib mr3" onClick={handleLogout}>
            Logout
          </Link>
        )}
        {!user.isAuthenticated && (
          <Link className="link dim white dib mr3" to="/login">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;