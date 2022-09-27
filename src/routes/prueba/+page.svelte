<script>
	import { getDocuments } from '../../firebase.js';
	import { onMount } from 'svelte';
	import { getDoc, doc, setDoc, collection } from 'firebase/firestore';
	import { db } from '../../firebase';

	const addUserPrueba = async () => {
		const person = {
			name: 'Mi tio pepe',
			age: 'no tengo ni idea xd'
		};
		const docRef = doc(db, 'prueba', person.name);
		await setDoc(docRef, { ...person }).catch((error) => console.log(error));

		console.log('persona añadida');
	};

	// setDoc()
	// let setProblems = [];
	// onMount(async () => {
	// 	try {
	// 		setProblems = [...(await getDocuments('matematicas'))];
	// 		// console.log(setProblems);
	// 	} catch (error) {
	// 		setProblems = error;
	// 	}
	// });

	// const pruebaReference = collection(db, 'prueba');

	// function updateData() {
	// 	const docRef = doc(db, 'prueba', 'wLphCO7f82Y8OUPyhSye');
	// 	getDoc(docRef).then((response) => console.log(response.data()));
	// }

	// async function getUserByEmail(email) {
	//  // Make the initial query
	//  const query = await db.collection('users').where('email', '==', email).get();

	//   if (!query.empty) {
	// 	  const snapshot = query.docs[0];
	// 	  const data = snapshot.data();
	// 	} else {
	//    // not found
	// 	}
	// }
</script>

<button on:click={addUserPrueba}>Presioname</button>
