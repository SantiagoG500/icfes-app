<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import { auth, getDocuments, addUser } from '../../firebase.js';
	import { user, isLoggedIn } from '../../stores';
	import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';

	const login = async () => {
		const googleProvider = new GoogleAuthProvider();
		const userCredentials = await signInWithPopup(auth, googleProvider);

		$user = userCredentials.user;
		$isLoggedIn = true;

		const users = await getDocuments('users');
		const foundUser = users.find((currentUser) => currentUser.uid === $user.uid);

		if (foundUser) console.log(`Usuario "{$user.displayName}" está registrado`);
		else addUser($user);

		goto('account/');
	};
</script>

<main>
	{#if $isLoggedIn}
		<h1>Usuario {$user.displayName} esta logeado</h1>
	{:else}
		<h1>login</h1>
		<p>Usa Nuestra opción de logeo</p>
		<button on:click={login}>Loggin with google</button>
	{/if}
</main>
