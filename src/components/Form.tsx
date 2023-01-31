import React from "react";
import { Form, Formik, ErrorMessage } from "formik";

interface FormProps {
  initialValues: object;
  validationSchema: object;
  onSubmit: any;
  children: React.ReactNode;
  validationOnChange?: any;
}

const CustomForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  validationOnChange,
}: FormProps) => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={validationOnChange}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
};

export default CustomForm;
