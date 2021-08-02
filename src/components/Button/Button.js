import styled from "@emotion/styled";
import PropTypes from "prop-types";

function Button(props) {
  const { onClick, ...others } = props;

  return (
    <ButtonHolder onClick={!props.disabled ? onClick : null} {...others}>
      {props.children}
    </ButtonHolder>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;

const ButtonHolder = styled.button`
  cursor: pointer;
  border: none;
  font-weight: 600;
  background-color: #00a0e3;
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
`;
