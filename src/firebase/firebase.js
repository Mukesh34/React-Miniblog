//import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import * as firebase from 'firebase';



const config = {
    apiKey: "AIzaSyAsF7iObEtT9GciaWLA4Wl9Kx1byujnKWk",
  authDomain: "myblog-c8899.firebaseapp.com",
  databaseURL: "https://myblog-c8899.firebaseio.com",
  projectId: "myblog-c8899",
  storageBucket: "myblog-c8899.appspot.com",
  messagingSenderId: "539608550260",
  appId: "1:539608550260:web:5ec514164b45c8188c3a21",
  measurementId: "G-86HD1MHEXE"
};



if (!firebase.apps.length) {
  firebase.initializeApp(config);
  
}


firebase.firestore();






const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider, firebase };
