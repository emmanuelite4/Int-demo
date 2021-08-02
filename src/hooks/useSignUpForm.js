import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { signupStart } from "../../application/user/user.slice";
import formValidator from "../utils/formValidator";

const initialUserValue = {
  type: "customer",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const initialBrandValue = {
  name: "",
  logoUrl: "",
  symbol: "",
  maxPoints: "",
};

const useSignUpForm = () => {
  const dispatch = useDispatch();

  const { signupError } = useSelector((state) => state.users);

  const [userInputValues, setUserInputValue] = useState(initialUserValue);

  const [brandInputValues, setBrandInputValues] = useState(initialBrandValue);
  const [formErrors, setFormErrors] = useState({});

  const [stepperIndex, setStepperIndex] = useState(1);

  const onUserFormChange = ({ target }) => {
    setUserInputValue((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const onBrandFormChange = ({ target }) => {
    setBrandInputValues((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const onSubmit = (e) => {
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
  };

  const nextStep = () => {
    setStepperIndex((prev) => prev + 1);
  };

  const onPrevStep = () => {
    setStepperIndex((prev) => prev - 1);
  };

  return [
    formErrors,
    userInputValues,
    brandInputValues,
    stepperIndex,
    signupError,
    onBrandFormChange,
    onPrevStep,
    onSubmit,
    onUserFormChange,
  ];
};

export default useSignUpForm;
