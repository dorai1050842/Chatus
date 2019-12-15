import firebase from 'firebase/app';
import firestore from 'firebase/firestore';


// require("firebase/firestore");

var config = {
  apiKey: "AIzaSyC3WorKMoFFNLj-iPXxCHqHHCE-AMRc2o8",
  authDomain: "vue-chat-693f4.firebaseapp.com",
  databaseURL: "https://vue-chat-693f4.firebaseio.com",
  projectId: "vue-chat-693f4",
  storageBucket: "vue-chat-693f4.appspot.com",
  messagingSenderId: "710922291185",
  appId: "1:710922291185:web:4b602634209165fb7c2650",
  measurementId: "G-SKT4SP4QD4"
};


const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true});

export default firebaseApp.firestore();
