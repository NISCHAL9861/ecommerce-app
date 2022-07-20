import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDDLwHBaIN9gzx4OfGW5kUWr4W7pXLxtIw",
    authDomain: "hamro-market.firebaseapp.com",
    projectId: "hamro-market",
    storageBucket: "hamro-market.appspot.com",
    messagingSenderId: "660869892819",
    appId: "1:660869892819:web:f2abe4c2874038e47ce226"
  };
  const firebaseApp = firebase.initilizeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()

  export default {db,auth};