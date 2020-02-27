import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('S4fnrIOJquYkqPEMfuLa')
  .collection('cartItems')
  .doc('7r1FylLG2I8HQ5YSRvj2');
