import { css } from "@emotion/css";
import React from "react";

const activeStepStyle = css`
  background: rgb(0, 160, 227);
  border: 1px solid rgb(255, 255, 255);
  opacity: 1;
  top: 60px;
  left: 644px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
`;

const inactiveStepStyle = css`
  background: rgb(245, 245, 245);
  border: 1px solid rgb(45, 45, 45);
  opacity: 1;
  top: 60px;
  left: 644px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-weight: bold;
`;

function Step({ label, value, index }) {
  const active = value === index;
  return (
    <div
      className={css`
        position: relative;
        display: flex;
        justify-content: center;
      `}
    >
      <div className={active ? activeStepStyle : inactiveStepStyle}>
        <p>{value}</p>
      </div>
      <p
        className={css`
          position: absolute;
          font-size: 12px;
          color: ${active ? "rgb(0, 160, 227)" : "rgb(45, 45, 45)"};
          font-weight: ${active ? "bold" : "normal"};
          bottom: -30px;
          white-space: nowrap;
        `}
      >
        {label}
      </p>
    </div>
  );
}

function Stepper({ index }) {
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin-bottom: 30px;
      `}
    >
      <div
        className={css`
          display: grid;
          grid-template-columns: max-content 1fr max-content;
          width: 280px;
        `}
      >
        <Step label="User Registration" index={index} value={1} />
        <div
          className={css`
            height: 1px;
            background-color: rgb(0, 0, 0);
            align-self: center;
          `}
        />
        <Step label="Brand Creation" index={index} value={2} />
      </div>
    </div>
  );
}

export default Stepper;
