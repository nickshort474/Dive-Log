import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import app from 'firebase/app';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC5-6Amb_GSHpaV9Altf3CaSKzX-Gm4uok",
    authDomain: "dive-log-5ae6a.firebaseapp.com",
    databaseURL: "https://dive-log-5ae6a.firebaseio.com",
    projectId: "dive-log-5ae6a",
    storageBucket: "dive-log-5ae6a.appspot.com",
    messagingSenderId: "716655001556",
    appId: "1:716655001556:web:932759a416fcae18d12041",
    measurementId: "G-14W0D8W3KP"
  };
  // Initialize Firebase
app.initializeApp(firebaseConfig);
//app.analytics();



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
