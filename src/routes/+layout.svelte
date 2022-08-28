<script>
	import { user, isLoggedIn } from '../stores.js';
	import { auth } from '../firebase';
	import { onAuthStateChanged } from 'firebase/auth';

	onAuthStateChanged(auth, (currentUser) => {
		if (currentUser) {
			$user = currentUser;
			$isLoggedIn = true;
		} else {
			$user = {};
			$isLoggedIn = false;
		}
	});
</script>

<header>
	esto es un header

	<nav class="nav-bar">
		{#if $isLoggedIn}
			<li><a href="courses/">Inicia tu examen</a></li>
			<li><a href="home/">Home</a></li>
			<li><a href="account/">Perfil</a></li>
		{:else}
			<li><a href="home/">Home</a></li>
			<li><a href="login/">Inicia sesión</a></li>
		{/if}
	</nav>
</header>

<slot />

<footer>esto es un footer</footer>

<style>
	:global(body) {
		background-color: black;
		color: white;
	}
</style>
