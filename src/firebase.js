import { initializeApp } from 'firebase/app';
import { getAuth, deleteUser } from 'firebase/auth';

import { goto } from '$app/navigation';
import { getFirestore, collection, getDocs, setDoc, doc, getDoc } from 'firebase/firestore';

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

export async function addUser(user) {
	const docRef = doc(db, 'users', user.uid);
	await setDoc(docRef, {
		displayName: user.displayName,
		email: user.email,
		uid: user.uid,
		exams: {}
	});
}

export async function delUser(user) {
	deleteUser(user)
		.then(() => {
			goto('./');
		})
		.catch((error) => {
			console.log(error);
			return error;
		});
}

export async function getUserDoc(userUid) {
	const docRef = doc(db, 'users', userUid);
	const docUser = getDoc(docRef);

	const response = (await docUser).data();
	// console.log(response);
	return response;
}
