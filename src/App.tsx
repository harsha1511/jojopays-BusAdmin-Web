import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Loader from "./components/Loader";
import routes from "./data/routes";
import PublicRoute from "./routes/PublicRoute";
import { RootState } from "./store";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const auth = useSelector((state: RootState) => state.auth);

  console.log(auth);

  const handleAutoLogin = () => {
    try {
      if (localStorage.getItem("token")) {
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => handleAutoLogin(), []);

  if (isLoading) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sign-in"
          element={
            <PublicRoute Component={SignIn} restricted={auth.isLoggedIn} />
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicRoute Component={SignUp} restricted={auth.isLoggedIn} />
          }
        />
        <Route path="/" element={<Dashboard />}>
          {routes.map(({ path, Element }) => (
            <Route path={path} element={<Element />} key={path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
