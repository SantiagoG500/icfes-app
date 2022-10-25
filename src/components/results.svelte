<script>
	import { getUserDoc } from '../firebase.js';
	import { user } from '../stores.js';
	import { onMount } from "svelte";

	onMount(async () => {
		const xd = await getUserDoc($user.uid)
		// console.log(xd.exams);
	})
</script>

{#await getUserDoc($user.uid)}
	<h1 class="title">Espera un minuto, por favor...</h1>
{:then response}

	{#each response.exams as exam}
		<section class="section">
			<h2 class="title">{exam.examName}</h2>
			{#each exam.setProblems as setProblem}
				<p class="text">{setProblem.problem.problem}</p>
				<br>
				<br>
				<br>
				{#each setProblem.setQuestions as setQuestion}
					<p>{setQuestion.question}</p>
					<ul class="answers">
						{#each setQuestion.answers as answer}

							{#if answer === setQuestion.userAnswer}
								{#if setQuestion.userAnswer !== setQuestion.correctAnswer}
									<li class="answers__answer answers__answer--incorrect">{answer}</li>
								{:else}
									<li class="answers__answer answers__answer--correct">{answer}</li>
								{/if}
							{:else}
								{#if answer === setQuestion.correctAnswer}
									<li class="answers__answer answers__answer--correct">{answer}</li>
								{:else}
									<li class="answers__answer">{answer}</li>
								{/if}
							{/if}
							<!-- {#if setQuestion.userAnswer === setQuestion.correctAnswer}
								<li class="answers__answer answers__answer--correct">{answer}</li>
							{:else if setQuestion.userAnswer !== setQuestion.correctAnswer}	
								<li class="answers__answer answers__answer--incorrect">{answer}</li>
							{:else}
								<li class="answers__answer answers__answer--incorrect">{answer}</li>
							{/if}
							 -->
						{/each}
					</ul>
				{/each}

			{/each}
		</section>
	{/each}
{/await}


<style>
	.answers {
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
</style>
