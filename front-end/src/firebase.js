// import * as firebase from 'firebase/app'
// import 'firebase/auth'



// const app = firebase.initializeApp(
//    {
//    apiKey: "AIzaSyDDuUVKbbO3WUBgULorkQb4o63hzimXVOY",
//    authDomain: "auth-dev-bazar.firebaseapp.com",
//    projectId: "auth-dev-bazar",
//    storageBucket: "auth-dev-bazar.appspot.com",
//    messagingSenderId: 916354228901,
//    appId: "1:916354228901:web:8ae1bc0feb6a64eb6de34c"
// }
// )


// export const auth = app.auth()
// export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDuUVKbbO3WUBgULorkQb4o63hzimXVOY",
  authDomain: "auth-dev-bazar.firebaseapp.com",
  projectId: "auth-dev-bazar",
  storageBucket: "auth-dev-bazar.appspot.com",
  messagingSenderId: "916354228901",
  appId: "1:916354228901:web:8ae1bc0feb6a64eb6de34c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
