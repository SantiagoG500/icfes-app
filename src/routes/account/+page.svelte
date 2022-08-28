<script>
	import { user, isLoggedIn } from '../../stores';
	import { auth } from '../../firebase.js';
	import { signOut } from 'firebase/auth';
	const logOut = () => {
		signOut(auth);
		$user = {};
		$isLoggedIn = false;
	};
</script>

<main>
	<h1>account</h1>
	{#if $isLoggedIn}
		<img src={$user.photoURL} alt="profile url" referrerpolicy="no-referrer" />
		<p>{$user.displayName}</p>
		<p>{$user.email}</p>
		<button on:click={logOut}>Cerrar sesión</button>
	{:else}
		<h2>Not logged In</h2>
	{/if}
</main>
