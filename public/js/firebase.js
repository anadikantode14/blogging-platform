let firebaseConfig = {
    apiKey: "AIzaSyBbEuVHABEEFSq3HuF5xOxHDo93ZlED6ig",
    authDomain: "blogging-website-b09e4.firebaseapp.com",
    projectId: "blogging-website-b09e4",
    storageBucket: "blogging-website-b09e4.appspot.com",
    messagingSenderId: "616716613085",
    appId: "1:616716613085:web:9c3e821bd243046469b234"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let auth = firebase.auth();

  const logoutUser = () => {
    auth.signOut();
    location.reload();
  }