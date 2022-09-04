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

<main class="section">
	<h1 class="title">account</h1>
	{#if $isLoggedIn}
		<img class="profile-img" src={$user.photoURL} alt="profile url" referrerpolicy="no-referrer" />

		<div class="profile-filed">
			<p class="profile-field__text">Usuario:</p>
			<p class="profile-field__text">{$user.displayName}</p>
		</div>

		<div class="profile-filed">
			<p class="profile-field__text">Email:</p>
			<p class="profile-field__text">{$user.email}</p>
		</div>

		<button class="btn" on:click={logOut}>Cerrar sesión</button>
	{:else}
		<h2>Not logged In</h2>
	{/if}
</main>

<style>
	.section {
		margin-top: 1rem;
	}
	.profile-img {
		display: block;
		margin: 0 auto;

		border-radius: 1rem;
		overflow: hidden;
	}
</style>
