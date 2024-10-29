




// my apps firebase config
import { initializeApp } from 'firebase/app';

import { getFirestore, collection,
} from 'firebase/firestore';

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA3DWBQ_VfquVTR7_8D3I3xaESmhf2sd-c",
  authDomain: "bookapp-e54b9.firebaseapp.com",
  projectId: "bookapp-e54b9",
  storageBucket: "bookapp-e54b9.appspot.com",
  messagingSenderId: "58865368208",
  appId: "1:58865368208:web:83170b4ecddb0bd2edac15"
  };

// initialize firebase app

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


// reference to the collection
const booksCollection = collection(db, 'books');

export {db, booksCollection, auth};




