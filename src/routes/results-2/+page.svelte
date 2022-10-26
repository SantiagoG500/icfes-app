<script>
	import ExamsCard  from "../../components/exam-card.svelte";
	import { getUserDoc } from '../../firebase.js';
	import { user } from '../../stores.js';
</script>

{#await getUserDoc($user.uid)}
		<h1 class="title">Espera un minuto, por favor...</h1>
{:then response}

	<h1 class="title">Resultados</h1>	
	<h2 class="title title--subtitle">Desliza a los lados para ver los resultados de otras pruebas</h2>


	{#each response.exams as exam}
	<section class="section">
		<h2 class="title">{exam.examName}</h2>
		{#each exam.setProblems as setProblem}
			<p class="text">{setProblem.problem.problem}</p>
			
			{#each setProblem.setQuestions as setQuestion}
				<p class="question">{setQuestion.question}</p>
				<ul class="answers">
					{#each setQuestion.answers as answer}

						{#if answer === setQuestion.userAnswer}
							{#if setQuestion.userAnswer !== setQuestion.correctAnswer}
								<li class="answers__answer answers__answer--incorrect">
									{answer}
									<div class="user-answer user-answer--incorrect">Tu respuesta</div>
								</li>
								{:else}
								<li class="answers__answer answers__answer--correct">
									{answer}
									<div class="user-answer user-answer--correct">Tu respuesta</div>
								</li>
							{/if}
							{:else}
							{#if answer === setQuestion.correctAnswer}
							<li class="answers__answer answers__answer--correct">
								{answer}
								<div class="user-answer user-answer--correct">Respuesta Correcta</div>
							</li>
							{:else}
								<li class="answers__answer">{answer}</li>
							{/if}
						{/if}
					{/each}
				</ul>
			{/each}

		{/each}
	</section>
{/each}

	<h2 class="title title--subtitle">Mira tus resultados o continúa con tu prueba</h2>
	<section class="section exams-select">
		<ExamsCard/>
	</section>
{/await}

<style>
	.answers {
		padding-left: 1rem;
		list-style: none;
	}
	.answers__answer {
		display: flex;
		flex-flow: column wrap;
		align-items: flex-start;

		/* display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-wrap: wrap; */

		padding: 0.5em 1em;
		margin-top: 1em;

		border-radius: 0.5rem;
		border: 3px solid var(--gray0);
	}

	.answers__answer--incorrect{
		border-color: hsl(0, 54%, 48%);
	}

	.answers__answer--correct{
		border-color: hsl(121, 54%, 48%);
	}

	.question{
		padding-left: 1rem;
		margin-bottom: 1.5rem;

		display: list-item;
		list-style-position: inside;
	}

	.exams-container{
		display: flex;
		overflow-x: scroll;

		width: 95%;
		margin-top: 2rem;
		margin-left: auto;
		margin-right: auto;
	}
	.exam-container{
		background-color: var(--gray5);

		min-width: 100%;
		max-height: 90vh;

		margin-right: 2rem;
		padding-left: 1rem;
		padding-right: 1rem;


		overflow-y: scroll;
	}

	.title{
		margin-top: 2rem;
	}

	.exams-select{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1rem;
	}
</style>
