import firebase from 'firebase';
require('@firebase/firestore');

  // Your web app's Firebase configuration
  const firebaseConfig = {
    // apiKey: "AIzaSyCu5AjwQ-tfv_sKroiBN4mlmMCtWb5oXgA",
    // authDomain: "advanced-trex-game-1.firebaseapp.com",
    // databaseURL: "https://advanced-trex-game-1.firebaseio.com",
    // projectId: "advanced-trex-game-1",
    // storageBucket: "advanced-trex-game-1.appspot.com",
    // messagingSenderId: "869261029098",
    // appId: "1:869261029098:web:23c937e8feafa5b8327193"


    apiKey: "AIzaSyDWaEV2MSAqGJx8OBh9sc2hSpKtyBQt_MU",
    authDomain: "password-encrypt-35ac5.firebaseapp.com",
     databaseURL: "https://password-encrypt-35ac5.firebaseio.com",
    projectId: "password-encrypt-35ac5",
    storageBucket: "password-encrypt-35ac5.appspot.com",
    messagingSenderId: "816144724370",
    appId: "1:816144724370:web:81302fa6c63bf37ee2d14b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();