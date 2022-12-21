import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFe15qNTWuOfOJMkEJKeCw5AjFluL_ezc",
  authDomain: "olx-clone-df9d6.firebaseapp.com",
  projectId: "olx-clone-df9d6",
  storageBucket: "olx-clone-df9d6.appspot.com",
  messagingSenderId: "1027832715265",
  appId: "1:1027832715265:web:b0993690cf9334aaf60800",
  measurementId: "G-JQYLNFKLGP",
};

export default firebase.initializeApp(firebaseConfig);
