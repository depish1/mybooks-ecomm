import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAULltWnvALiVGgaS9yXpa2k8zUsytVl68',
  authDomain: 'mybooks-9a46f.firebaseapp.com',
  projectId: 'mybooks-9a46f',
  storageBucket: 'mybooks-9a46f.appspot.com',
  messagingSenderId: '199980756005',
  appId: '1:199980756005:web:48f1e97251f1eb625823cc',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
