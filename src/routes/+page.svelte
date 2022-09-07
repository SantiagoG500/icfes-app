<script>
	import Card from '../components/card.svelte';
</script>

<main>
	<header class="header--section">
		<h1 class="title">PHARE</h1>
		<p>en este sitio ofrecemos una forma de practicar para las pruebas saber 11°</p>
	</header>

	<main class="section">
		<h2 class="title title--subtitle">¿Que es lo que ofrecemos?</h2>
		<section class="card-container">
			<Card
				title={'Un sitio interactivo'}
				content={'Proveemos de una plataforma en la que el estudiante pueda practicar cómodamente.'}
				srcImg={'https://picsum.photos/100/100'}
				imgAltTxt={'imagen random xd '}
			/>

			<Card
				title={'Pocos tiempos de espera'}
				content={'A la hora de registrarte puedes realizar practicas inmediatamente'}
				srcImg={'https://picsum.photos/100/100'}
				imgAltTxt={'imagen random xd '}
			/>

			<Card
				title={'Aprendizaje a tu ritmo'}
				content={'Los resultados de tu examen podrán ser consultados en todo momento'}
				srcImg={'https://picsum.photos/100/100'}
				imgAltTxt={'imagen random xd '}
			/>
		</section>
		<h2 class="title title--subtitle">Nuestra identidad</h2>
		<p>
			Phare (palabra francesa que signfica "faro"), es un proyecto con la premisa de ser una
			plataforma interactiva que guíe a los estudiantes para obtener el mejor resultado posible en
			las pruebas saber 11.
		</p>

		<p>
			El concepto de ser una guia fue lo que dio origen a la identidad de este proyecto, de la mima
			manera en la que un faro es una guia para los barcos cuando estos no pueden ver el camino,
			nuestro proyecto pretende ser ese faro que guie el camino del estudiante al camino indicado.
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
