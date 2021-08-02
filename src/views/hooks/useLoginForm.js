import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginStart } from "../../application/user/user.slice";
import formValidator from "../utils/formValidator";

const initialState = {
  email: "",
  password: "",
};

const useLoginForm = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(initialState);

  const [formErrors, setFormErrors] = useState({});

  const handleChange = useCallback(({ target }) => {
    setInputValue((prev) => ({ ...prev, [target.name]: target.value }));
  }, []);

  const handleSubmit = (e) => {
    let { isValid, errors } = formValidator(inputValue);

    setFormErrors((prev) => ({ ...prev, ...errors }));
    if (!isValid) {
      return;
    }

    if (inputValue.email && inputValue.password) {
      dispatch(loginStart(inputValue));
    }
  };

  return [inputValue, formErrors, handleChange, handleSubmit];
};

export default useLoginForm;
