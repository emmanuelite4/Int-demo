import React from "react";
// import Button from "../components/Button";
import { css } from "@emotion/css";
import Input from "../Input/Input";
// import Stepper from "../components/Stepper";
// import ErrorAlert from "../components/ErrorAlert/ErrorAlert";
import useSignUpForm from "../../hooks/useSignUpForm";
import ErrorAlert from "../ErrorAlert/ErrorAlert";
import Stepper from "../Stepper";
import Button from "../Button";
import { LOG_IN_URL } from "../../../constants/navigation";
import AuthContainerFooter from "../AuthContainerFooter/AuthContainerFooter";

const SignupForm = () => {
  const [
    formErrors,
    userInputValues,
    brandInputValues,
    stepperIndex,
    signupError,
    onBrandFormChange,
    onPrevStep,
    onSubmit,
    onUserFormChange,
  ] = useSignUpForm();

  return (
    <div
      className={css`
        padding-top: 30px;
      `}
    >
      <form onSubmit={onSubmit} noValidate>
        {signupError && (
          <div
            className={css`
              padding: 0px 40px 20px;
              color: var(--warning-color);
              font-size: 12px;
              text-align: center;
            `}
          >
            <ErrorAlert label={signupError} />
          </div>
        )}

        {stepperIndex === 1 && (
          <div
            className={css`
              width: 100%;
              padding: 0px 40px 20px;
            `}
          >
            <label
              className={css`
                font-size: 10px;
                font-weight: 600;
              `}
            >
              Account Type
            </label>
            <select
              className={css`
                width: 100%;
                border-radius: 5px;
                padding: 0px 7px;
                height: 30px;
                font-size: 14px;
                outline: none;
                border: 1px solid var(--gray-color);
              `}
              value={userInputValues.type}
              onChange={onUserFormChange}
              name="type"
            >
              <option value="customer">Customer</option>
              <option value="brand">Brand</option>
            </select>
          </div>
        )}
        {userInputValues.type === "brand" && (
          <div
            className={css`
              grid-column: 1 / 3;
              display: flex;
              justify-content: center;
            `}
          >
            <Stepper index={stepperIndex} />
          </div>
        )}
        {stepperIndex === 1 && (
          <div>
            <div
              className={css`
                padding: 40px;
                display: grid;
                grid-template-rows: repeat(2, max-content);
                grid-template-columns: 1fr 1fr;
                gap: 20px 20px;
              `}
            >
              <Input
                label="First name"
                name="firstName"
                onChange={onUserFormChange}
                required
                error={formErrors["firstName"]}
                defaultValue={userInputValues["firstName"]}
              />
              <Input
                label="Last name"
                name="lastName"
                onChange={onUserFormChange}
                required
                error={formErrors["lastName"]}
                defaultValue={userInputValues["lastName"]}
              />
              <Input
                label="Email address"
                type="email"
                name="email"
                onChange={onUserFormChange}
                data-testid="email"
                required
                error={formErrors["email"]}
                defaultValue={userInputValues["email"]}
              />
              <Input
                label="Your password"
                type="password"
                name="password"
                onChange={onUserFormChange}
                data-testid="password"
                required
                error={formErrors["password"]}
                defaultValue={userInputValues["password"]}
              />
            </div>
            {userInputValues.type === "brand" && stepperIndex === 1 && (
              <div
                className={css`
                  text-align: right;
                  padding-right: 40px;
                  padding-bottom: 20px;
                `}
              >
                <Button>Next</Button>
              </div>
            )}
          </div>
        )}
        {stepperIndex === 2 && (
          <div>
            <div
              className={css`
                padding: 40px;
                display: grid;
                grid-template-rows: repeat(2, max-content);
                grid-template-columns: 1fr 1fr;
                gap: 20px 20px;
              `}
            >
              <div
                className={css`
                  grid-column: 1 / 3;
                `}
              >
                <Input
                  label="Brand Name"
                  name="name"
                  onChange={onBrandFormChange}
                  required
                  error={formErrors["name"]}
                  defaultValue={brandInputValues["name"]}
                />
              </div>
              <div
                className={css`
                  grid-column: 1 / 3;
                  display: flex;
                  align-items: center;
                `}
              >
                <Input
                  label="Brand logo url"
                  name="logoUrl"
                  onChange={onBrandFormChange}
                  required
                  error={formErrors["logoUrl"]}
                  defaultValue={brandInputValues["logoUrl"]}
                />
                {brandInputValues.logoUrl && (
                  <img
                    src={brandInputValues.logoUrl}
                    alt=""
                    className={css`
                      width: 52px;
                      height: 52px;
                      object-fit: cover;
                      margin-left: 10px;
                    `}
                  />
                )}
              </div>
              <Input
                label="Brand Symbol"
                name="symbol"
                onChange={onBrandFormChange}
                required
                error={formErrors["symbol"]}
                defaultValue={brandInputValues["symbol"]}
              />
              <Input
                label="Brand Max Loyalty Points"
                name="maxPoints"
                onChange={onBrandFormChange}
                required
                type="number"
                error={formErrors["maxPoints"]}
                defaultValue={brandInputValues["maxPoints"]}
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
              <button
                className={css`
                  color: var(--primary-color-one);
                  text-decoration: none;
                  cursor: pointer;
                  font-weight: 600;
                  font-size: 12px;
                  outline: none;
                  border: none;
                  background: transparent;
                `}
                type="button"
                onClick={onPrevStep}
              >
                Prev
              </button>
            </div>
          </div>
        )}

        <AuthContainerFooter
          to={LOG_IN_URL}
          linkName="Login"
          buttonName="Sign Up"
          buttonDisabled={
            !(userInputValues.type === "customer" || stepperIndex === 2)
          }
        />
      </form>
    </div>
  );
};

export default SignupForm;
