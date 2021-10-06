import React from 'react';
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component,  ...props }) => {
  const loggedInUser = useSelector((state) => state.loggedInUser.value);
  console.log(loggedInUser);
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

// const ProtectedRoute = ({ component: Component,  ...props }) => {
//   return (
//     <Route>
//       {
//         () => props.myUserUid  ? 
//           <Component { ...props } />
//           :
//           <Redirect to="/signin" />
//       }
//     </Route>
//   );
// }
// export default ProtectedRoute;