import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDucTPu4Y1I1N2m5jrYqplQ7xGfrmZJj7M',
  authDomain: 'classum-assignment-2e3aa.firebaseapp.com',
  projectId: 'classum-assignment-2e3aa',
  storageBucket: 'classum-assignment-2e3aa.appspot.com',
  messagingSenderId: '786674511686',
  appId: '1:786674511686:web:89cf8cc27f3011e5a9bf47',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
