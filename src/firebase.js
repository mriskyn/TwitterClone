import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmr09OgrmC1zg3dBsnz8drKw_IHnbFsyw",
  authDomain: "simple-twitter-clone.firebaseapp.com",
  projectId: "simple-twitter-clone",
  storageBucket: "simple-twitter-clone.appspot.com",
  messagingSenderId: "828694020944",
  appId: "1:828694020944:web:94e32b7c8387f49ea4a255",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
