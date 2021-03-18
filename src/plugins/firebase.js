import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    ///この間を自分のアプリ情報に変える
    apiKey: "AIzaSyC_DPW5Tsck6gecLab7pNND6NLkScnHg7g",
    authDomain: "sepak-life-image-store.firebaseapp.com",
    projectId: "sepak-life-image-store",
    storageBucket: "sepak-life-image-store.appspot.com",
    messagingSenderId: "846832154881",
    appId: "1:846832154881:web:f18df0063dde387eb00300",
    measurementId: "G-P10F2RB7YH"
    //-------------------------------
  })
  
}

export default firebase