import React from 'react';
import { Route, Switch, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import './App.css'

import MyAccount from '../MyAccount/MyAccount';
import Publications from '../Publications/Publications';
import Login from '../../pages/Login/Login';
import ProtectedRoute from '../../ProtectedRoute/ProtectedRoute';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Subscribers from '../Subscribers/Subscribers';
import * as api from '../../../utils/api';
import { addLoggedInUser } from '../../../features/loggedInUser/loggedInUserSlice';
import { persistor } from '../../../store/store';

function App() {

  const history = useHistory();
  const dispatch = useDispatch();

  const [isActivePreloader, setIsActivePreloader ] = React.useState(false);

  const handleLogin = async ({ email, password }) => {
    const userId = await api.login({ email, password });
    dispatch(addLoggedInUser(userId));
    history.push(`/${userId}`);
    setIsActivePreloader(true);
  }

  const handleSignOut = () => {
    persistor.purge();
    api.signOut();
    history.push('/signin');
  }

  return (
    <>
      <Switch>

        <ProtectedRoute path={`/publications/`}
          component={Publications} 
        />

        <ProtectedRoute exact path="/subscribers"
          component={Subscribers}
        />

        <Route path="/signin">
          <Login
            onLogin={handleLogin}
          />
        </Route>

        <ProtectedRoute path="/:id"
          isActivePreloader={isActivePreloader}
          setIsActivePreloader={setIsActivePreloader}
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
