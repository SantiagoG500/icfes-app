import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCLHhJSwd8iFZUz7c9RyrjJ4WT2O9cRm_U',
	authDomain: 'icfes-ap.firebaseapp.com',
	projectId: 'icfes-ap',
	storageBucket: 'icfes-ap.appspot.com',
	messagingSenderId: '1095825350746',
	appId: '1:1095825350746:web:5e25a3c33db5a914eab863'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
