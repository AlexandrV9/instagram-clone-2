import React from 'react';
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component,  ...props }) => {
  const loggedInUser = useSelector((state) => state.loggedInUser.value);
  return (
    <Route>
      {
        () => loggedInUser  ? 
          <Component { ...props } />
          :
          <Redirect to="/signin" />
      }
    </Route>
  );
}

export default ProtectedRoute;