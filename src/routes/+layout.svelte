<script>
	import { user, isLoggedIn } from '../stores.js';
</script>

<header>
	esto es un header

	<nav class="nav-bar">
		{#if $isLoggedIn}
			<li><a href="courses/">Inicia tu examen</a></li>
			<li><a href="home/">Home</a></li>
			<li><a href="account/">Perfil</a></li>
			<li><a href="./">Log Out</a></li>
		{:else}
			<li><a href="home/">Home</a></li>
			<li><a href="login/">Inicia sesión</a></li>
		{/if}
	</nav>
</header>

<slot />

<footer>esto es un footer</footer>
