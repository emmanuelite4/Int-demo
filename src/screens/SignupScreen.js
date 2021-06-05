import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { signupStart } from "../redux/user/user.slice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import { css } from "@emotion/css";
import Input from "../components/Input/Input";
import formValidator from "../utils/formValidator";
import Stepper from "../components/Stepper";
import { addNewBrand } from "../redux/brand/brand.slice";
import { v4 as uuidv4 } from "uuid";
import ErrorAlert from "../components/ErrorAlert/ErrorAlert";

const SignupScreen = () => {
  const dispatch = useDispatch();
  const { signupError } = useSelector((state) => state.users);

  const [userInputValues, setUserInputValue] = useState({
    type: "customer",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [brandInputValues, setBrandInputValues] = useState({
    name: "",
    logoUrl: "",
    symbol: "",
    maxPoints: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const [stepperIndex, setStepperIndex] = useState(1);

  const handleUserFormChange = useCallback(({ target }) => {
    setUserInputValue((prev) => ({ ...prev, [target.name]: target.value }));
  }, []);

  const handleBrandFormInputChange = useCallback(({ target }) => {
    setBrandInputValues((prev) => ({ ...prev, [target.name]: target.value }));
  }, []);

  const handleBrandLogoChange = useCallback(() => {
    const file = document.getElementById("logoUploadForm").files[0];
    const reader = new FileReader();

    reader.onload = (r) => {
      setBrandInputValues((prev) => ({ ...prev, logoUrl: r.target.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      let userId = uuidv4();
      let brandId = uuidv4();

      // User Form handler
      let { isValid, errors } = formValidator(userInputValues);
      setFormErrors((prev) => ({ ...prev, ...errors }));
      if (!isValid) {
        return;
      } else if (userInputValues.type === "customer") {
        dispatch(signupStart({ user: userInputValues }));
        return;
      } else if (userInputValues.type === "brand" && stepperIndex === 1) {
        nextStep();
        return;
      }
      // User Form processing ends here

      // Brand Form handler
      let { isValid: isBrandFormValid, errors: brandFormError } =
        formValidator(brandInputValues);

      setFormErrors((prev) => ({ ...prev, ...brandFormError }));
      if (!isBrandFormValid) {
        return;
      } else if (userInputValues.type === "brand" && stepperIndex === 2) {
        let userObject = { ...userInputValues, id: userId, brandId: brandId };
        let brandObject = {
          ...brandInputValues,
          maxPoints: parseInt(brandInputValues.maxPoints),
          id: brandId,
          userId: userId,
        };
        dispatch(signupStart({ user: userObject, brand: brandObject }));
        // dispatch(addNewBrand(brandObject));
      }
    },
    [userInputValues, brandInputValues, stepperIndex]
  );

  const nextStep = useCallback(() => {
    setStepperIndex((prev) => prev + 1);
  }, []);

  const prevStep = useCallback(() => {
    setStepperIndex((prev) => prev - 1);
  }, []);

  return (
    <div
      className={css`
        padding-top: 30px;
      `}
    >
      <form onSubmit={handleSubmit} noValidate>
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
              onChange={handleUserFormChange}
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
                onChange={handleUserFormChange}
                required
                error={formErrors["firstName"]}
                defaultValue={userInputValues["firstName"]}
              />
              <Input
                label="Last name"
                name="lastName"
                onChange={handleUserFormChange}
                required
                error={formErrors["lastName"]}
                defaultValue={userInputValues["lastName"]}
              />
              <Input
                label="Email address"
                type="email"
                name="email"
                onChange={handleUserFormChange}
                data-testid="email"
                required
                error={formErrors["email"]}
                defaultValue={userInputValues["email"]}
              />
              <Input
                label="Your password"
                type="password"
                name="password"
                onChange={handleUserFormChange}
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
                <Button label="Next" />
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
                  onChange={handleBrandFormInputChange}
                  required
                  error={formErrors["name"]}
                  defaultValue={brandInputValues["name"]}
                />
              </div>
              <div
                className={css`
                  grid-column: 1 / 3;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 100%;
                  `}
                >
                  <div>
                    <label htmlFor="logoUploadForm">
                      <span
                        // onClick={handleBrandLogoChange}
                        className={css`
                          font-size: 14px;
                          cursor: pointer;
                          border: none;
                          font-weight: 600;
                          background-color: var(--primary-color-one);
                          padding: 3px 20px;
                          height: 35px;
                          color: rgb(255, 255, 255);
                          border-radius: 5px;
                          font-size: 14px;
                          line-height: 19px;
                          transition: all 0.3s ease 0s;
                          outline: none;
                        `}
                      >
                        Upload Image
                      </span>
                    </label>
                    <input
                      type="file"
                      name="logoUrl"
                      id="logoUploadForm"
                      hidden
                      onChange={handleBrandLogoChange}
                    />
                    {formErrors["logoUrl"] && (
                      <span
                        className={css`
                          color: var(--warning-color);
                          font-size: 10px;
                          display: block;
                          margin-top: 4px;
                        `}
                      >
                        {formErrors["logoUrl"]}
                      </span>
                    )}
                  </div>
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
              </div>
              <Input
                label="Brand Symbol"
                name="symbol"
                onChange={handleBrandFormInputChange}
                required
                error={formErrors["symbol"]}
                defaultValue={brandInputValues["symbol"]}
              />
              <Input
                label="Brand Max Loyalty Points"
                name="maxPoints"
                onChange={handleBrandFormInputChange}
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
                onClick={prevStep}
              >
                Prev
              </button>
            </div>
          </div>
        )}

        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0px 40px 40px;
          `}
        >
          <Link
            to="/login"
            className={css`
              color: var(--primary-color-one);
              text-decoration: none;
              cursor: pointer;
              font-weight: 600;
              font-size: 12px;
            `}
          >
            Log in
          </Link>
          {(userInputValues.type === "customer" || stepperIndex === 2) && (
            <Button type="submit" label="Sign up" />
          )}
        </div>
      </form>
    </div>
  );
};

export default SignupScreen;
