import React from "react";
import { css } from "@emotion/css";

import SideBarLink from "../SideBarLink/SideBarLink";

export function FirstLastNameCap({ first, last }) {
  return (
    <div
      className={css`
        background-image: linear-gradient(
          to bottom,
          var(--primary-color-one),
          var(--primary-color-two)
        );
        width: 36px;
        height: 36px;
        border-radius: 18px;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
      `}
      data-testid="first-last-name-cap"
    >{`${first}${last}`}</div>
  );
}

function SideMenu(props) {
  const { firstName, lastName, type, onLogout } = props;

  const handleLogout = () => {
    onLogout();
  };
  return (
    <div
      className={css`
        background-color: #ffffff;
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <div
        className={css`
          height: 60px;
          padding-left: 15px;
          display: flex;
          align-items: center;
        `}
      >
        <FirstLastNameCap first={firstName[0]} last={lastName[0]} />
        <div
          className={css`
            padding-left: 10px;
            display: flex;
            align-items: center;
            flex-direction: column;
          `}
        >
          <p
            className={css`
              font-size: 14px;
              color: rgb(45, 45, 45);
              font-weight: 600;
              margin: 0;
            `}
          >
            {firstName}
          </p>
          <p
            className={css`
              margin: 0;
              font-size: 12px;
            `}
          >
            {lastName}
          </p>
        </div>
      </div>
      <div
        className={css`
          background-image: linear-gradient(
            to right,
            var(--primary-color-one),
            var(--primary-color-two)
          );
          width: 100%;
          height: 2px;
        `}
      />
      <div
        className={css`
          flex: 1;
        `}
      >
        <SideBarLink
          label="Dashboard"
          to={type === "customer" ? "/dashboard-customer" : "/dashboard-brand"}
        />
      </div>
      <div>
        <div
          role="button"
          className={css`
            font-size: 14px;
            color: var(--black-color);
            padding: 10px 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          `}
          onClick={handleLogout}
        >
          Logout
        </div>
      </div>
      <div
        className={css`
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top: 1px solid var(--primary-background-color);
        `}
      >
        <span
          className={css`
            font-size: 12px;
          `}
        >
          Powered By qiibee
        </span>
        <img
          src="/assets/images/logo.png"
          alt="Qiibee"
          height="20"
          width="20"
        />
      </div>
    </div>
  );
}

export default SideMenu;
