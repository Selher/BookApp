


import { getFirestore, collection,
} from 'firebase/firestore';


// my apps firebase config
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

// initialize firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


// reference to the collection
const booksFirebaseCollectionRef = 'books';
const booksCollection = collection(db, booksFirebaseCollectionRef);

export {db, booksCollection, booksFirebaseCollectionRef, auth};



