import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

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

export async function getDocuments(collName) {
	const collRef = collection(db, collName);
	const querySnapshot = await getDocs(collRef).then((response) => response.docs);
	const data = [];
	for (const i of querySnapshot) data.push({ ...i.data() });
	return data;
}

export function addUser(user) {
	const collRef = collection(db, 'users');
	addDoc(collRef, {
		displayName: user.displayName,
		email: user.email,
		uid: user.uid,
		exams: {}
	});
}

// https://www.youtube.com/watch?v=2yNyiW_41H8
