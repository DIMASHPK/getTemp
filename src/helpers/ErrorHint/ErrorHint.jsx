import React from "react";
import Css from "./ErrorHint.module.css";

const ErrorHint = ({ message }) => <p className={Css.errorHint}>{message}</p>;

export default ErrorHint;
