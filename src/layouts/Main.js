import React from "react";
import { css } from "@emotion/css";
import SideMenu from "../components/SideMenu/SideMenu";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user/user.slice";
import { selectCurrentUser } from "../redux/user/user.selector";

function Main({ children }) {
  const dispatch = useDispatch();
  const { firstName, lastName, type } = useSelector((state) =>
    selectCurrentUser(state)
  );

  const handleLogout = () => {
    dispatch(logout());
  };
  const config = { firstName, lastName, type, onLogout: handleLogout };
  return (
    <div
      className={css`
        display: flex;
        align-items: stretch;
        height: 100%;
        background-color: #ebebeb;
      `}
    >
      <SideMenu {...config} />
      <div
        className={css`
          flex: 1;
          padding: 40px;
          height: 100%;
          overflow: auto;
        `}
      >
        {children}
      </div>
    </div>
  );
}

export default Main;
