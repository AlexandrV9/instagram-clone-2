import Profile from "../Profile/Profile";
import CardList from "../CardList/CardList";
import Header from "../Header/Header";
import firebase from "firebase";
import React from "react";

const MyAccount = ({
  onCardClick,
  onClose,
  handleVisiblePopup,
  handleSignOut,
  loggedIn,
  location,
  myUserUid,
}) => {

  const [cards, setCards] = React.useState([]);
  const [userProfile, setUserProfile] = React.useState([])
  const userUid = location.pathname;

  const getInitialCard = () => {
    firebase.database().ref("users/"  + userUid + '/cards').once('value', snapshot => setCards(snapshot.val())); 
  }

  const getUserProfile = () => {
    firebase.database().ref("users/"  + userUid).once('value', snapshot => setUserProfile(snapshot.val()));
  }

  React.useEffect(() => {
    getInitialCard();
    getUserProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
        <>
          <Header 
            myUserUid={myUserUid}
            userUid={userUid}
            userProfile={userProfile}
            handleVisiblePopup={handleVisiblePopup}
            handleSignOut={handleSignOut}
          />
          <Profile 
            userUid={userUid}
            userProfile={userProfile}
          />
          <CardList 
            userUid={userUid}
            userProfile={userProfile}
            loggedIn={loggedIn}
            cards={cards}
            onCardClick={onCardClick}
            onClose={onClose}
          />
        </>
      )
}

export default MyAccount;