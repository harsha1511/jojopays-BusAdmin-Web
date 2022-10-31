import React from "react";
import PropTypes from "prop-types";
import { FormikErrors, FormikTouched } from "formik";

interface ErrorMessageProps {
  visible: FormikErrors<unknown> | boolean | undefined;
  message: FormikTouched<unknown> | string | undefined;
  className: string;
}

const ErrorMessage = ({ visible, message, className }: ErrorMessageProps) => {
  if (!visible || !message) return null;

  return (
    <label className={`text-xs text-red-500 ${className}`}>{}</label>
  );
};

ErrorMessage.propTypes = {
  visible: PropTypes.bool,
  message: PropTypes.string,
  className: PropTypes.string,
};

export default ErrorMessage;
