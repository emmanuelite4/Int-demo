import React from "react";
import { css } from "@emotion/css";
import SideMenu from "../../../views/components/SideMenu";

function Main({ children }) {
  return (
    <div
      className={css`
        display: flex;
        align-items: stretch;
        height: 100%;
        background-color: #ebebeb;
      `}
    >
      <SideMenu />
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
