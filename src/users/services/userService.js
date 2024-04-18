import useForm from "../../forms/useForm.js";
import { onInputChange } from "../../forms/utils/formMethods.js";
import {
  LOGIN_EMAIL,
  LOGIN_EMAIL_ERROR,
  LOGIN_PASSWORD,
  LOGIN_PASSWORD_ERROR,
  LOGIN_SUBMIT_BTN,
  SIGHNUP_EMAIL,
  SIGHNUP_EMAIL_ERROR,
  SIGHNUP_NAME,
  SIGHNUP_NAME_ERROR,
  SIGHNUP_PASSWORD,
  SIGHNUP_PASSWORD_ERROR,
  SIGHUP_CANCEL_BTN,
  SIGHUP_SUBMIT_BTN,
  SIGHNUP_ADDRESS,
  SIGHNUP_ADDRESS_ERROR,
  SIGHNUP_PHONE,
  SIGHNUP_PHONE_ERROR,
} from "../../services/domService.js";
import { onReset } from "../../forms/utils/formMethods.js";
import User from "../models/User.js";

// const arrayOfInpust = [LOGIN_EMAIL, LOGIN_PASSWORD];
// const arrayOfErrors = [LOGIN_EMAIL_ERROR, LOGIN_PASSWORD_ERROR];
export const login = () => {
  const LOGIN_SCHEMA = { email: "email", password: "password" };
  const LOGIN_INITIALFORM = { email: "", password: "" };

  const handleLoginSubmit = (data) => console.log(data);

  const { ...rest } = useForm(
    LOGIN_INITIALFORM,
    LOGIN_SCHEMA,
    handleLoginSubmit
  );

  LOGIN_EMAIL.addEventListener("input", (event) =>
    onInputChange(
      event,
      LOGIN_EMAIL_ERROR,
      LOGIN_SUBMIT_BTN,
      rest.handleInputChange,
      rest.handleDisableSubmitBtn
    )
  );
  LOGIN_PASSWORD.addEventListener("input", (event) =>
    onInputChange(
      event,
      LOGIN_PASSWORD_ERROR,
      LOGIN_SUBMIT_BTN,
      rest.handleInputChange,
      rest.handleDisableSubmitBtn
    )
  );
  LOGIN_SUBMIT_BTN.addEventListener("click", rest.onSubmit);
};
/////// reregisterService////////
export const signup = () => {
  const SIGHNUP_ARRAY_OF_INPUTS = [
    SIGHNUP_EMAIL,
    SIGHNUP_NAME,
    SIGHNUP_PASSWORD,
    SIGHNUP_ADDRESS,
    SIGHNUP_PHONE,
  ];

  const SIGHNUP_ARRAY_OF_ERRORS = [
    SIGHNUP_EMAIL_ERROR,
    SIGHNUP_NAME_ERROR,
    SIGHNUP_PASSWORD_ERROR,
    SIGHNUP_ADDRESS_ERROR,
    SIGHNUP_PHONE_ERROR,
  ];
  const SIGHUP_INITIALFORM = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  };
  const SIGHUP_SCHEMA = {
    name: "string",
    email: "email",
    password: "password",
    phone: "number",
    address: "required",
  };
  const handleSignupSubmit = (data) => {
    try {
      data.user_id = "123456";
      const user1 = new User(data, users);
      console.log(user1);
      onReset(
        SIGHNUP_ARRAY_OF_INPUTS,
        SIGHNUP_ARRAY_OF_ERRORS,
        registerService.handleReset
      );
      users.push(user1);
    } catch (error) {
      console.log(error);
    }
  };
  const { ...registerService } = useForm(
    SIGHUP_INITIALFORM,
    SIGHUP_SCHEMA,
    handleSignupSubmit
  );

  SIGHNUP_EMAIL.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGHNUP_EMAIL_ERROR,
      SIGHUP_SUBMIT_BTN,
      registerService.handleInputChange,
      registerService.handleDisableSubmitBtn
    )
  );
  SIGHNUP_NAME.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGHNUP_NAME_ERROR,
      SIGHUP_SUBMIT_BTN,
      registerService.handleInputChange,
      registerService.handleDisableSubmitBtn
    )
  );
  SIGHNUP_PASSWORD.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGHNUP_PASSWORD_ERROR,
      SIGHUP_SUBMIT_BTN,
      registerService.handleInputChange,
      registerService.handleDisableSubmitBtn
    )
  );
  SIGHNUP_ADDRESS.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGHNUP_ADDRESS_ERROR,
      SIGHUP_SUBMIT_BTN,
      registerService.handleInputChange,
      registerService.handleDisableSubmitBtn
    )
  );
  SIGHNUP_PHONE.addEventListener("input", (event) =>
    onInputChange(
      event,
      SIGHNUP_PHONE_ERROR,
      SIGHUP_SUBMIT_BTN,
      registerService.handleInputChange,
      registerService.handleDisableSubmitBtn
    )
  );
  SIGHUP_CANCEL_BTN.addEventListener("click", () =>
    onReset(
      SIGHNUP_ARRAY_OF_INPUTS,
      SIGHNUP_ARRAY_OF_ERRORS,
      registerService.handleReset
    )
  );
  SIGHUP_SUBMIT_BTN.addEventListener("click", registerService.onSubmit);
};
