import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAb1USkkOQ3H3lV6RuxUbZdiHzj-XPTvIo',
  authDomain: 'crown-db-eb508.firebaseapp.com',
  databaseURL: 'https://crown-db-eb508.firebaseio.com',
  projectId: 'crown-db-eb508',
  storageBucket: 'crown-db-eb508.appspot.com',
  messagingSenderId: '936258475653',
  appId: '1:936258475653:web:ac40a755b875d0712dfbec',
  measurementId: 'G-RJ2FYLR51V'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
