import React from "react";
import { FormikProps, FormikValues, useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  className: string;
  label?: string;
  labelClassName?: string;
  inputContainerClassName?: string;
  checked?: boolean;
}

const Input = ({
  type,
  name,
  placeholder,
  className = "",
  label = "",
  labelClassName = "",
  inputContainerClassName = "",
  checked,
}: InputProps) => {
  const {
    errors,
    touched,
    values,
    handleChange,
    handleBlur,
  }: FormikProps<FormikValues> = useFormikContext();

  return (
    <div className={`flex flex-col ${inputContainerClassName}`}>
      <div className="flex gap-2 items-center">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`rounded-full px-4 py-2 ${className}`}
          checked={checked}
        />
        {label && <label className={labelClassName}>{label}</label>}
      </div>
      {errors && (
        <ErrorMessage
          message={errors[name]}
          visible={touched[name]}
          className="transform translate-x-2 mt-1"
        />
      )}
    </div>
  );
};

export default Input;
