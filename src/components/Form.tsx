import React from "react";
import { Form, Formik } from "formik";

interface FormProps {
  initialValues: object;
  validationSchema: object;
  onSubmit: any;
  children: React.ReactNode;
}

const CustomForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: FormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
};

export default CustomForm;
