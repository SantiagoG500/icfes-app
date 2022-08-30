<script>
	export let title = undefined;
	export let content = undefined;
	export let srcImg = unefined;
	export let imgAltTxt = '';
</script>

<article class="card">
	<header class="card__header">
		<h3 class="title--subtitle">{title}</h3>
	</header>
	<section class="card__section">
		{content}
	</section>
	<img class="card__img" src={srcImg} alt={imgAltTxt} />
</article>

<style>
	.card {
		position: relative;

		padding: 1em;
		margin-top: 1rem;
		margin-bottom: 1rem;

		height: min-content;

		border-radius: 0.5rem;
		overflow: hidden;
		background-color: var(--gray4);
	}
	.card::before {
		display: block;

		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;

		content: '';

		height: 5px;
		background-color: cyan;
	}

	.card__img {
		display: block;

		margin-top: 1rem;
		margin-left: auto;
	}

	.title--subtitle {
		margin-top: 0px;
	}
</style>
