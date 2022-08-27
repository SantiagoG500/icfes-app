<script>
	import { user, isLoggedIn } from '../../stores';
	console.log($user);
</script>

<main>
	<h1>account</h1>
	{#if $isLoggedIn}
		<img src={$user.photoURL} alt="profile url" referrerpolicy="no-referrer" />
		<p>{$user.displayName}</p>
		<p>{$user.email}</p>
	{:else}
		<h2>Not logged In</h2>
	{/if}
</main>
