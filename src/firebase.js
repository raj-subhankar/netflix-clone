import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD5qNuP6VgVwceecmYngtm1p8Df4L-1IxY",
    authDomain: "netflix-clone-8a26f.firebaseapp.com",
    projectId: "netflix-clone-8a26f",
    storageBucket: "netflix-clone-8a26f.appspot.com",
    messagingSenderId: "1045050624742",
    appId: "1:1045050624742:web:6df90416acb2dc776d8927"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { auth }
  export default db