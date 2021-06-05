import { css } from "@emotion/css";

function Card({ children }) {
  return (
    <div
      className={css`
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(204, 204, 204);
        border-radius: 5px;
      `}
    >
      {children}
    </div>
  );
}

export default Card;
