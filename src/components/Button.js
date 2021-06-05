import { css } from "@emotion/css";
import PropTypes from "prop-types";

function Button(props) {
  const { label, onClick, ...others } = props;
  return (
    <button
      className={css`
        cursor: pointer;
        border: none;
        font-weight: 600;
        background-color: var(--primary-color-one);
        padding: 8px 20px;
        height: 35px;
        box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
        color: rgb(255, 255, 255);
        border-radius: 5px;
        font-size: 14px;
        line-height: 19px;
        transition: all 0.3s ease 0s;
        outline: none;
        &:disabled {
          background-color: #ccf0ff;
          box-shadow: none;
        }
      `}
      onClick={onClick}
      {...others}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
