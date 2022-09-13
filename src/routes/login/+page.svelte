<script>
	import { goto } from '$app/navigation';

	import { auth, getDocuments, addUser } from '../../firebase.js';
	import { user, isLoggedIn } from '../../stores';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

	const login = async () => {
		const googleProvider = new GoogleAuthProvider();
		const userCredentials = await signInWithPopup(auth, googleProvider);

		$user = userCredentials.user;
		$isLoggedIn = true;

		const users = await getDocuments('users');
		const foundUser = users.find((currentUser) => currentUser.uid === $user.uid);

		if (foundUser) console.log(`Usuario "${$user.displayName}" está registrado`);
		else addUser($user);

		goto('account/');
	};
</script>

<main class="section">
	{#if $isLoggedIn}
		<h1 class="title">Usuario {$user.displayName} esta logeado</h1>
		<a href="../home/">
			<button class="btn"> regresa al inicio </button>
		</a>
	{:else}
		<h1 class="title">login</h1>
		<p>Usa Nuestra opción de logeo</p>
		<button class="btn" on:click={login}>Loggin with google</button>
		<p class="disclaimer">Habilita las ventanas emergentes para esta página</p>
	{/if}
</main>

<style>
	.disclaimer {
		margin-top: 1.5rem;
		font-size: 0.7rem;
	}
	.section {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1.5rem;
	}
</style>
