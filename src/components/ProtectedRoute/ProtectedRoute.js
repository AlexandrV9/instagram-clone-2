import React from 'react';
import { Route, Redirect } from "react-router";

const ProtectedRoute = ({ component: Component,  ...props }) => {
  return (
    <Route>
      {
        () => props.myUserUid  ? 
          <Component { ...props } />
          :
          <Redirect to="/signin" />
      }
    </Route>
  );
}

export default ProtectedRoute;