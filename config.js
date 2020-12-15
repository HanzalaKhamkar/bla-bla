import firebase from 'firebase'
require("firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBH30P4DyQz7tYwC0BRnyAEhkUa-tqgGqk",
  authDomain: "newsletter-c0b5c.firebaseapp.com",
  projectId: "newsletter-c0b5c",
  storageBucket: "newsletter-c0b5c.appspot.com",
  messagingSenderId: "650624864292",
  appId: "1:650624864292:web:6016653d3c014dc8bb08b1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   