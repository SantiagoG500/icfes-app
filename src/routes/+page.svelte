<script>
	import Card from '../components/card.svelte';
</script>

<main>
	<header class="header--section">
		<!-- <img src="%sveltekit.assets%/logo-sena-phare.png" alt="Logo Phare" /> -->

		<h1 class="title">PHARE</h1>
		<p>en este sitio ofrecemos una forma de practicar para las pruebas saber 11°</p>
	</header>

	<main class="section">
		<h2 class="title title--subtitle">¿Que es lo que ofrecemos?</h2>
		<section class="card-container">
			<Card
				title={'Misión:'}
				content={'Acercar a nuestros usuarios a su proyecto de vida dándoles elementos con los que poder ponerse a prueba, y mejorar en el proceso'}
				srcImg={'icons/Teaching.png'}
				imgAltTxt={'Misión img'}
			/>
				<!-- content={'Proporcionar elementos al estudiante para la realización de sus pruebas o autoevaluación y el desarrollo de su proyecto de vida'} -->

			<Card
				title={'Visión'}
				content={'Darnos a conocer como emprendedores, lograr ayudar a mejorar el desempeño de las personas, proporcionar un buen servicio al cliente y favorecer un gran servicio con nuestra idea emprendedora y ayudar a prepararlos.'}
				srcImg={'icons/vision.png'}
				imgAltTxt={'Visión img'}
			/>
	</section>
		<h2 class="title title--subtitle">Nuestra identidad</h2>
		<p class="text">
			Phare. Es una palabra francesa que se a traduce como "faro" en español, un faro es un sìmbolo de
			una guìa. De la misma manera en la que un faro evita que los barcos se pierdan en un día brumoso,
			o en una noche. Nosotros, bajo este mismo principio buscamos guiar a nuestros usuarios, encaminándolos
			hacia sus proyectos de vida, preparándolos con un simulacro del tipo ICFES para que puedan afrontar la
			prueba de la mejor manera posible
		</p>
	</main>
</main>

<style>
	/* .card-container {
		--auto-grid-min-size: 16rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--auto-grid-min-size), 1fr));
		grid-gap: 1rem;
	} */
	.card-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1rem;
		/* grid-template-columns: repeat(auto-fit, minmax(var(--auto-grid-min-size), 1fr)); */
	}
</style>
