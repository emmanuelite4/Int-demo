import { css } from "@emotion/css";
import PropTypes from "prop-types";

function ErrorAlert({ label }) {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        background-color: var(--warning-color);
        border-radius: 2;
        font-size: 14px;
        padding: 4px 20px;
        color: #fff;
        margin: 5px 0px;
      `}
      data-testid="label"
    >
      {label}
    </div>
  );
}

ErrorAlert.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ErrorAlert;
