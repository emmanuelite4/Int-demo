import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart } from "../redux/user/user.slice";
import { Link } from "react-router-dom";
import formValidator from "../utils/formValidator";
import Button from "../components/Button";
import { css } from "@emotion/css";
import Input from "../components/Input/Input";
import ErrorAlert from "../components/ErrorAlert/ErrorAlert";

function LoginScreen() {
  const dispatch = useDispatch();
  const { loginError } = useSelector((state) => state.users);

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = useCallback(({ target }) => {
    setInputValue((prev) => ({ ...prev, [target.name]: target.value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let { isValid, errors } = formValidator(inputValue);

    setFormErrors((prev) => ({ ...prev, ...errors }));
    if (!isValid) {
      return;
    }

    e.target.className += " was-validated";
    if (inputValue.email && inputValue.password) {
      dispatch(loginStart(inputValue));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div
          className={css`
            padding: 40px;
          `}
        >
          {loginError && <ErrorAlert label={loginError} />}
          <Input
            label="Your email address"
            type="email"
            name="email"
            onChange={handleChange}
            error={formErrors["email"]}
            value={inputValue.email}
            data-testid="email"
            required
          />
          <br />
          <Input
            label="Your password"
            type="password"
            name="password"
            onChange={handleChange}
            error={formErrors["password"]}
            value={inputValue.password}
            data-testid="password"
            required
          />
        </div>
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 40px 40px;
          `}
        >
          <Link
            to="/signup"
            className={css`
              color: var(--primary-color-one);
              text-decoration: none;
              cursor: pointer;
              font-weight: 600;
              font-size: 12px;
            `}
            data-testid="signup-btn"
          >
            Sign Up
          </Link>
          <Button type="submit" label="Login" />
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
