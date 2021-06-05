import { css } from "@emotion/css";
import "./Input.css";
import PropTypes from "prop-types";

function Input(props) {
  const { label, error, ...other } = props;
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column-reverse;
        `}
      >
        <input
          className={`input-input ${error ? "input-input--error" : ""}`}
          data-testid="input"
          max={200}
          {...other}
        />

        <label
          className={`input-label input-label-sec ${
            error ? "input-label--error" : ""
          }`}
          data-testid="label"
        >
          {label}
        </label>
      </div>
      {error && (
        <small
          className={css`
            color: var(--warning-color);
            font-size: 10px;
          `}
          data-testid="error-label"
        >
          {error}
        </small>
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
