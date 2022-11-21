import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    // apiKey: "AIzaSyC9R1kA4b5bXsvUH3M8xOshqi9DQjy42Bw",
    // authDomain: "deliveryg62.firebaseapp.com",
    databaseURL: "https://woomen-shop-default-rtdb.europe-west1.firebasedatabase.app/",
    // projectId: "deliveryg62",
    // storageBucket: "deliveryg62.appspot.com",
    // messagingSenderId: "143680312422",
    // appId: "1:143680312422:web:f8576ce8d84fb5e97a89a7"
};

firebase.initializeApp(firebaseConfig);

export default firebase;