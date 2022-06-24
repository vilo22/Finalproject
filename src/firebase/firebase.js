import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB1cgdK5Lq7sy5UNayJcdC4lzA8Y8oT6Tw",
    authDomain: "shop2022-be0da.firebaseapp.com",
    projectId: "shop2022-be0da",
    storageBucket: "shop2022-be0da.appspot.com",
    messagingSenderId: "204628655117",
    appId: "1:204628655117:web:3b898c96d680d63cd3e944"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}