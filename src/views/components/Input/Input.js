import styled from "@emotion/styled";
import { COLOR_WARNING } from "../../contants/style";

function Input(props) {
  const { label, error, ...other } = props;
  return (
    <InputHolder>
      <Label error={error && COLOR_WARNING} data-testid="label">
        {label}
      </Label>

      <InputBase
        error={error && COLOR_WARNING}
        data-testid="input"
        max={200}
        {...other}
      />
      {error && <Error data-testid="error-label">{error}</Error>}
    </InputHolder>
  );
}

export default Input;

const Error = styled.small`
  color: var(--warning-color);
  font-size: 10px;
`;

const InputBase = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 0px 7px;
  height: 30px;
  font-size: 14px;
  outline: none;
  border: 1px solid ${(props) => props.error || "var(--gray-color)"};
`;

const InputHolder = styled.div`
  width: 100%;
`;

const Label = styled.label`
  font-size: 10px;
  font-weight: 600;
  color: ${(props) => props.error || "rgb(0,0,0)"};
`;
