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
  accept?: string;
  readonly?: boolean
  value?: string
}

const Input = ({
  type,
  name,
  accept,
  placeholder,
  className = "",
  label = "",
  labelClassName = "",
  inputContainerClassName = "",
  checked,
  readonly,
  value,
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
          accept={accept}
          placeholder={placeholder}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`rounded-full px-4 py-2 ${className}`}
          checked={checked}
          readOnly={readonly}
        />
        {label && <label className={labelClassName}>{label}</label>}
      </div>
      {errors && (
        <ErrorMessage
          message={errors[name]}
          visible={touched[name]}
          className="transform translate-x-2 mt-1 text-black"
        />
      )}
    </div>
  );
};

export default Input;
