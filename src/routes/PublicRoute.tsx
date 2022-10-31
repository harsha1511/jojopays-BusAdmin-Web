import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  Component: () => JSX.Element;
  restricted: boolean;
}

const PublicRoute = ({ Component, restricted }: Props) => {
  return restricted ? <Navigate to="/" /> : <Component />;
};

export default PublicRoute;
