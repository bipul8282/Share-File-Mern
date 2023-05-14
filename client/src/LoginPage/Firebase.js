import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const myApp=firebase.initializeApp({
    apiKey: "AIzaSyBgJkkz6NTxcK3t2N0SSi6aSaR4BDs6orI",
  authDomain: "share-me-b36a7.firebaseapp.com",
  projectId: "share-me-b36a7",
  storageBucket: "share-me-b36a7.appspot.com",
  messagingSenderId: "731209190653",
  appId: "1:731209190653:web:650cc1f0bb863a94d00294"
})

export const auth=firebase.auth()
const googleProvider=new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle= ()=> {
    auth.signInWithPopup(googleProvider).then((res)=>{
        console.log(res.user)
    }).catch((error)=>{
        console.log(error.message);
    })
}