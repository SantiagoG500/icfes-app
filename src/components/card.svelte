<script>
	export let title = undefined;
	export let content = undefined;
	export let srcImg = undefined;
</script>

<article class="card">
	<header class="card__header">
		{title}
	</header>
	<section class="card__section">
		{content}
	</section>
	<img src={srcImg} alt="" />
</article>

<style>
	.card {
		background-color: rebeccapurple;
	}
</style>
