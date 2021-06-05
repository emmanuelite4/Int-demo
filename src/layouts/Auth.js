import { css } from "@emotion/css";

function Auth({ children, title }) {
  return (
    <div
      className={css`
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        className={css`
          background-color: #fff;
          border-radius: 15px;
          box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.2);
          width: 450px;
        `}
      >
        <div>
          <div
            className={css`
              padding: 40px 40px 20px;
            `}
          >
            <p
              className={css`
                font-size: 20px;
                color: rgb(45, 45, 45);
                font-weight: bold;
                margin: 0 !important;
              `}
            >
              {title}
            </p>
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
        </div>
        {children}
      </div>
    </div>
  );
}

export default Auth;
