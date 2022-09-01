<main>
	<h1 class="title">Cursos</h1>

	<section class="course">
		<h2 class="course__title">Prueba de matematicas</h2>
		<img src="https://picsum.photos/100/100" alt="math ilustration" class="course__img" />
		<a href="../math-exam">
			<button class="course__btn">Acceder al curso</button>
		</a>
	</section>

	<section class="course">
		<h2 class="course__title">Sociales y cuidadanías</h2>
		<img src="https://picsum.photos/100/100" alt="math ilustration" class="course__img" />
		<a href="../social-sciences-exam/">
			<button class="course__btn">Acceder al Curso</button>
		</a>
	</section>

	<section class="course">
		<h2 class="course__title">Lectura critica</h2>
		<img src="https://picsum.photos/100/100" alt="math ilustration" class="course__img" />
		<a href="../language-exam">
			<button class="course__btn">Acceder al Curso</button>
		</a>
	</section>

	<section class="course">
		<h2 class="course__title">Inglés</h2>
		<img src="https://picsum.photos/100/100" alt="math ilustration" class="course__img" />
		<a href="english-exam/">
			<button class="course__btn">Acceder al Curso</button>
		</a>
	</section>
</main>

<style>
	.course {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 80%;

		margin-left: auto;
		margin-right: auto;
		margin-top: 3rem;
		margin-bottom: 3rem;

		padding-top: 1rem;
		padding-bottom: 1rem;

		border-radius: 0.5rem;

		background-color: var(--gray4);
	}
	.course__img {
		display: block;
		margin-bottom: 2rem;
	}

	.course__btn {
		padding: 0.5em 1em;
		border: none;
		border-radius: 0.5rem;
		background-color: var(--gray2);
	}
	@media (hover: hover) {
		.course__btn:hover {
			background-color: var(--gray0);
		}
	}
</style>
