import * as firebase from 'firebase';
require('@firebase/firestore')


const firebaseConfig = {
  apiKey: "AIzaSyCNWqbVmMKTMoUVrNg_a5YXHIebUyYJI2w",
  authDomain: "booksanta-e028d.firebaseapp.com",
  databaseURL: "https://booksanta-e028d.firebaseio.com",
  projectId: "booksanta-e028d",
  storageBucket: "booksanta-e028d.appspot.com",
  messagingSenderId: "882288978862",
  appId: "1:882288978862:web:9e6ef9be2e7c9732fc363f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();