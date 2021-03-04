import firebase from 'firebase/app';
import '@firebase/firestore';



  const app = firebase.initializeApp ({
    apiKey: "AIzaSyD34Lm6yt2ACO1GysK6NKkJ9eco4IT1RE8",
    authDomain: "ecommerce-coder-b8ed4.firebaseapp.com",
    projectId: "ecommerce-coder-b8ed4",
    storageBucket: "ecommerce-coder-b8ed4.appspot.com",
    messagingSenderId: "384790071203",
    appId: "1:384790071203:web:2ead60b1544bdd3122fc16",
    measurementId: "G-F53FZSVMNL"
  });


  export const getFirebase = () => {
      return app;
  }

  export const getFirestore = () => {
      
      return firebase.firestore(app)
  }


  