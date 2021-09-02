import './App.css'
import React from 'react';
import { Route, Switch, useHistory } from 'react-router';
import MyAccount from '../MyAccount/MyAccount';
import Publications from '../Publications/Publications';
import firebase from 'firebase';
import PopupCreateCard from '../PopupCreateCard/PopupCreateCard';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PageNotFound from '../PageNotFound/PageNotFound';
import Subscribers from '../Subscribers/Subscribers';

import * as Auth from '../utils/Auth';

function App() {

  const [loggedIn, setloggedIn] = React.useState(false);

  const [userUid, setUserUid] = React.useState('');

  const [isOpenPopupCreateCard, setIsOpenPopupCreateCard] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const history = useHistory();

  const handleVisiblePopup = () => {
    document.body.classList.toggle('page_lock');
    setIsOpenPopupCreateCard(!isOpenPopupCreateCard);
  }

  const handleSignOut = () => {
    Auth
    .signOut()
    .then(() => {
      console.log('Вы вышли из аккаунта');
      setCards([]);
      setloggedIn(false);
      setUsers('');
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    })
  }

  const handleLogin = ({email, password}) => {
    Auth
    .login({email, password})
    .then((userCredential) => {
      console.log('Вы вошли в систему!')
      setUserUid(userCredential.user.uid);
      setloggedIn(true);
      history.push(`/${userCredential.user.uid}`);
    }).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
   });
  }

  const handleAddCard = ({
    link,
    textLocation,
    textDescription
  }) => {
    
    firebase.database().ref("users/"  + userUid + '/cards/' + cards.length).set({
      _id: cards.length,
      link,
      textLocation,
      textDescription,  
      likes: 0,
    }).then(() => {
      setIsOpenPopupCreateCard(false);   
      firebase.database().ref("users/"  + userUid + '/cards/' + cards.length).on('value', (elem) => { setCards([...cards, elem.val()]) })
    });
  }



  return (
    <>
    <Switch>

      <ProtectedRoute path={`/publications/`}
        userUid={userUid}
        loggedIn={loggedIn}
        component={Publications} 
      />

      <ProtectedRoute exact path="/subscribers"
        users={users}
        loggedIn={loggedIn}
        component={Subscribers}
        userUid={userUid}
      />

      <Route path="/signin">
        <Login
          onLogin={handleLogin}
        />
      </Route>

      <ProtectedRoute path="/:id"
        loggedIn={loggedIn}
        handleSignOut={handleSignOut}
        component={MyAccount}
        handleVisiblePopup = {handleVisiblePopup}
      />

      <Route path="*">
        <PageNotFound />
      </Route>

    </Switch>

    <PopupCreateCard
      handleVisiblePopup = {handleVisiblePopup}
      isOpenPopupCreateCard ={isOpenPopupCreateCard}
      onAddCard={handleAddCard}
    />
    </>
    // {/* <div>Автор иконок: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> */}

  );
}

export default App;
