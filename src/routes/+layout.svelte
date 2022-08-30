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

<header class="header">
	<nav class="nav-bar">
		<ul class="nav__ul">
			{#if $isLoggedIn}
				<li class="nav__li"><a class="link link--nav" href="home/">Home</a></li>
				<li class="nav__li"><a class="link link--nav" href="courses/">Inicia tu examen</a></li>
				<li class="nav__li"><a class="link link--nav" href="account/">Perfil</a></li>
			{:else}
				<li class="nav__li"><a class="link link--nav" href="home/">Home</a></li>
				<li class="nav__li"><a class="link link--nav" href="login/">Inicia sesión</a></li>
			{/if}
		</ul>
	</nav>
</header>

<slot />

<footer class="footer">
	<h2 class="title">Nombre de la empresa</h2>
	<section class="info">
		<h3 class="title">A cerca de</h3>
		<ul class="footer__ul">
			<li class="footer__li"><a href="./" class="link">Facebook</a></li>
			<li class="footer__li"><a href="./" class="link">Twitter</a></li>
		</ul>

		<h3 class="title">Legal</h3>
		<ul class="footer__ul">
			<li class="footer__li"><a href="./" class="link">Tus derechos</a></li>
			<li class="footer__li"><a href="./" class="link">Leyes de protección de datos</a></li>
		</ul>
	</section>
</footer>

<style>
	:global(*),
	:global(*)::after,
	:global(*)::before{
		box-sizing: border-box;
	}
	:global(:root) {
		--gray0: #f8f8f8;
    --gray1: #dbe1e8;
    --gray2: #b2becd;
    --gray3: #6c7983;
    --gray4: #454e56;
    --gray5: #2a2e35;
    --gray6: #12181b;

		--font-light: 200,
		--font-medium: 400,
		--font-bold: 700,
	}
	:global(body) {
		margin: 0px;
		
		color: var(--gray2);
		background-color: var(--gray6);

		font-family: 'Nunito Sans', -apple-system, sans-serif, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
	:global(.link) {
		text-decoration: none;
		font-weight: 500;
		
		color: var(--text);
	}

	
	:global(.title),
	:global(.title--subtitle)	{
		font-weight: 700;
	}
	:global(.title){
		text-align: center;
	}
	
	
	:global(.header--section){
		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 1rem;
		text-align: center;
	}
	:global(.section){
		width: 90%;
		margin-right: auto;
		margin-left: auto;
		
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-right: 2rem;
		padding-left: 2rem;

		border-radius: 1rem;
		background-color: var(--gray5);
	}
	/* global styles ☝ */


	/* navbar and footer styles */
	.header,
	.footer{
		width: 100%;
		background-color: var(--gray5);
	}
	.header{
		padding-top: 1rem; 
		padding-bottom: 1rem; 
	}
	.footer{
		margin-top: 2rem;
		padding-top: 1em;
		padding-bottom: 1em;
	}

	.footer__ul,
	.nav__ul {
		display: flex;
		justify-content: space-evenly;

		margin: 0px;
		padding: 0px;
	}
	.footer__li,
	.nav__li {
		list-style: none;
	}
	.link--nav{
		font-weight: 700;
	}

	.footer__ul{
		flex-direction: column;
		align-items: center;
	}
	/* navbar and footer styles */


	/* meadia queries */

	@media (hover:hover){
		:global(.link):hover{
			color: var(--gray0);
			text-decoration: underline;
		}
	}

	/* meadia queries */
</style>
