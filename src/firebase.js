import firebase from 'firebase';
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB6o9QcRIT2rT7jERq89AHxl4nem0EM3dA",
    authDomain: "messenger-clone-90f92.firebaseapp.com",
    projectId: "messenger-clone-90f92",
    storageBucket: "messenger-clone-90f92.appspot.com",
    messagingSenderId: "107632865624",
    appId: "1:107632865624:web:50f42be16531313bc1f52d",
    measurementId: "G-0X9ZY5QHZG"
});
const db = firebaseConfig.firestore();
export default db;