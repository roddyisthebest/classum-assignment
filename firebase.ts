import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBKdFFjAzVsbY0HtRta4JCRqqlZAg4BMDc',
  authDomain: 'classum-assignment-57c89.firebaseapp.com',
  projectId: 'classum-assignment-57c89',
  storageBucket: 'classum-assignment-57c89.appspot.com',
  messagingSenderId: '578004364428',
  appId: '1:578004364428:web:617c2bb396d95f561edfa9',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
