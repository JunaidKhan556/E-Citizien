import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCijI3WyQrPCSzzHO1AwWPqW4qHgL6hs48",
    authDomain: "e-citizen.firebaseapp.com",
    databaseURL: "https://e-citizen.firebaseio.com",
    projectId: "e-citizen",
    storageBucket: "e-citizen.appspot.com",
    messagingSenderId: "136538787169"
  };
  firebase.initializeApp(config);

  export default firebase;