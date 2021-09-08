import React from 'react';
import { Route, Switch, useHistory } from 'react-router';

import './App.css'

import MyAccount from '../MyAccount/MyAccount';
import Publications from '../Publications/Publications';
import Login from '../../pages/Login/Login';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Subscribers from '../Subscribers/Subscribers';
import * as api from '../../utils/api';

function App() {

  const history = useHistory();

  const [myUserUid, setMyUserUid] = React.useState('');

  const handleLogin = async ({ email, password }) => {
    const userId = await api.login({ email, password });
    await setMyUserUid(userId);
    await history.push(`/${userId}`);
  }

  const handleSignOut = async () => {
    api.signOut();
    setMyUserUid('');  
  }

  return (
    <>
      <Switch>

        <ProtectedRoute path={`/publications/`}
          myUserUid={myUserUid}
          component={Publications} 
        />

        <ProtectedRoute exact path="/subscribers"
          myUserUid={myUserUid}
          component={Subscribers}
        />

        <Route path="/signin">
          <Login
            onLogin={handleLogin}
          />
        </Route>

        <ProtectedRoute path="/:id"
          myUserUid={myUserUid}
          handleSignOut={handleSignOut}
          component={MyAccount}
        />

        <ProtectedRoute path="*"
          component={PageNotFound}
        />

      </Switch>


    </>
  );
}

export default App;
