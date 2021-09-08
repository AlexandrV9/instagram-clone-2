import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/pages/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDrt1C2Dmq4_CZU1kvbBCWiOhIqFigjbjg",
  authDomain: "fir-instagram-clone-2.firebaseapp.com",
  databaseURL: "https://fir-instagram-clone-2-default-rtdb.firebaseio.com",
  projectId: "fir-instagram-clone-2",
  storageBucket: "fir-instagram-clone-2.appspot.com",
  messagingSenderId: "719234908721",
  appId: "1:719234908721:web:eaf7ae0b3f71943370cb10"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
