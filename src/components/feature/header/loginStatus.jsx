import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import ProfileIconDark from "../../assets/icons/dark/icon-profile-dark.svg";
import ProfileIconDark from "../../../assets/icons/dark/icon-profile-dark.svg";

const LoginStatus = ({ setLoginOpen }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      {user.email ? (
        <NavLink to="/profile">
          <div className="flex items-center">
            <img src={ProfileIconDark} alt="Profile" />
            <span>{user.first_name}</span>
          </div>
        </NavLink>
      ) : (
        <NavLink to="#" onClick={() => setLoginOpen(true)}>
          <img src={ProfileIconDark} alt="Profile" />
        </NavLink>
      )}
    </>
  );
};

export default LoginStatus;
