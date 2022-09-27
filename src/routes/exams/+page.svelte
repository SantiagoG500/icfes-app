<main>
	<h1 class="title">Inicia tu prueba</h1>
	<article class="courses">
		<section class="section course">
			<h2 class="title-course">Matemáticas</h2>
			<img class="course__img" src="https://picsum.photos/100/100" alt="matematicas img" />
			<a class="link" href="../math-exam">
				<button class="btn"> Inicia la prueba </button>
			</a>
		</section>
		<!-- 
		<section class="section course">
			<h2 class="title-course">Lectura crítica</h2>
			<img class="course__img" src="https://picsum.photos/100/100" alt="matematicas img" />
			<a class="link" href="../language-exam">
				<button class="btn"> Inicia la prueba </button>
			</a>
		</section>

		<section class="section course">
			<h2 class="title-course">Ingles</h2>
			<img class="course__img" src="https://picsum.photos/100/100" alt="matematicas img" />
			<a class="link" href="../english-exam">
				<button class="btn"> Inicia la prueba </button>
			</a>
		</section>

		<section class="section course">
			<h2 class="title-course">Ciencias sociales</h2>
			<img class="course__img" src="https://picsum.photos/100/100" alt="matematicas img" />
			<a class="link" href="../social-sciences-exam">
				<button class="btn"> Inicia la prueba </button>
			</a>
		</section> -->
	</article>
</main>

<style>
	.title-course {
		text-align: center;
		font-size: 1rem;
	}
	.courses {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
		padding: 0px 2rem;
	}
	.course {
		margin-top: 1rem;
	}
	.course__img {
		display: block;
		margin: 1rem auto;
	}
</style>
