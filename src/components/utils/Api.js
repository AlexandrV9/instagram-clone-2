import firebase from 'firebase';

const showError = (error) => {
  console.log(error.code);
  console.log(error.message);
}

const signOut = () => {
  return firebase
  .auth()
  .signOut()
  .then(() => {
    console.log('Вы вышли из аккаунта :(');
  })
  .catch(showError)
}

const login = ({email, password}) => {
  return firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log('Вы вошли в систему! :)');
    return (userCredential.user.uid);
  }).catch(showError);
}

const addCard = ({
  link,
  textLocation,
  textDescription,
  cards,
  myUserUid,
}) => {
  
  return firebase
  .database()
  .ref(`users/${myUserUid}/cards/${cards.length}`)
  .set({
    _id: cards.length,
    link,
    textLocation,
    textDescription,  
    likes: 0,
  }).then(() => {
    return firebase
    .database()
    .ref(`users/${myUserUid}/cards/${cards.length}`)
    .once('value')
    .then(snapshot => snapshot.val())
    .catch(showError);
  });
}

const getAllCards = (userUid) => {
  return firebase
  .database()
  .ref(`users${userUid}/cards`)
  .once('value')
  .then(snapshot => snapshot.val())
  .catch(showError);
}

const getUserProfile = (userUid) => {
  return firebase
  .database()
  .ref(`users/${userUid}`)
  .once('value')
  .then(snapshot => snapshot.val())
  .catch(showError);
}

const getOtherUser = () => {
  return firebase
  .database()
  .ref("users")
  .once('value')
  .then(snapshot => snapshot.val())
  .catch(showError);
}

const updateNumberOfLikes = (card, userUid, currentNumberLikes) => {
  return firebase
  .database()
  .ref(`/users/${userUid}/cards/${card._id}`)
  .update({
    likes: currentNumberLikes,
  })
  .catch(showError);
}

export {
  signOut,
  login,
  addCard,
  getAllCards,
  getUserProfile,
  getOtherUser,
  updateNumberOfLikes,
}