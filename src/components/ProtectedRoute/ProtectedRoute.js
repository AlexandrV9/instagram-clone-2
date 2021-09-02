import React from 'react';
import { Route, Redirect } from "react-router";

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log(props);
  return (
    <Route>
      {
        () => props.loggedIn === true ? <Component { ...props } /> : <Redirect to="/signin" />
      }
    </Route>
  );
}

export default ProtectedRoute;