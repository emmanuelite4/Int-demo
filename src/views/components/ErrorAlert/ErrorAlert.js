import styled from "@emotion/styled";
import PropTypes from "prop-types";

function ErrorAlert({ label }) {
  return <Holder>{label}</Holder>;
}

ErrorAlert.propTypes = {
  label: PropTypes.string,
};

export default ErrorAlert;

const Holder = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--warning-color);
  border-radius: 2;
  font-size: 14px;
  padding: 4px 20px;
  color: #fff;
  margin: 5px 0px;
`;
