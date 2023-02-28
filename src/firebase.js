import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyDfU6mOcDHfBQKcufkg6cmCNGiFIkAsLZo",
  authDomain: "twitter-database-a9d09.firebaseapp.com",
  projectId: "twitter-database-a9d09",
  storageBucket: "twitter-database-a9d09.appspot.com",
  messagingSenderId: "211773134489",
  appId: "1:211773134489:web:7fec9611ca83be06400a08",
  measurementId: "G-12873YS1ZY",
};

firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export default firebase;
