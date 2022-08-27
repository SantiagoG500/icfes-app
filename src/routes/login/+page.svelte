<script>
	import { auth } from '../../firebase.js';
	import { user, isLoggedIn } from '../../stores';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { goto } from '$app/navigation';

	const login = async () => {
		const googleProvider = new GoogleAuthProvider();
		const userCredentials = await signInWithPopup(auth, googleProvider);

		$user = userCredentials.user;
		$isLoggedIn = true;

		goto('account/');

		// user.update(userCredentials.user);
		// isLoggedIn.update(true);
	};
</script>

<main>
	<h1>login</h1>
	<p>Usa Nuestra opción de logeo</p>
	<button on:click={login}>Loggin with google</button>
</main>
