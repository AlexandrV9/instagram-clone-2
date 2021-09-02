import firebase from 'firebase';

const login = ({email, password}) => firebase.auth().signInWithEmailAndPassword(email, password);

const signOut = () => firebase.auth().signOut();

export {
  login,
  signOut,
}