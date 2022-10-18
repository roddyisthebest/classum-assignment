import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9hDXaRL3r8F7cqVU5KAs_H0G4f7QM314',
  authDomain: 'classum-assignment-e971b.firebaseapp.com',
  projectId: 'classum-assignment-e971b',
  storageBucket: 'classum-assignment-e971b.appspot.com',
  messagingSenderId: '68003982983',
  appId: '1:68003982983:web:31a8b27974c009f5cb1222',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
