<script>
	import { getUserDoc } from '../firebase.js';
	import { user } from '../stores.js';
</script>

<section>
	{#await getUserDoc($user.uid)}
		<p>espera xd</p>
	{:then response}
		{#each response.exams as setExam}
			<h2 class="title">{setExam.exam}</h2>

			{#each setExam.setProblems as setProblem}
				<h2 class="title--subtitle">{setProblem.problem}</h2>

				{#each setProblem.setQuestions as setQuestion}
					<p>{setQuestion.question}</p>

					<ul class="answers">
						{#each setQuestion.answers as answer}
							<li class="answers__answer">
								<span>{answer}</span>
								{#if answer === setQuestion.userAnswer}
									{#if answer !== setQuestion.correctAnswer}
										<span class="answer answer--incorrect">Tu respuesta</span>
									{:else}
										<span class="answer answer--correct">Tu respuesta</span>
									{/if}
								{/if}
							</li>
						{/each}
					</ul>
				{/each}
			{/each}
		{/each}
	{/await}
</section>

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

	.answer {
		display: inline-block;

		padding: 0 0.5em;
		margin-top: 0.5rem;

		font-size: 0.8rem;
		font-weight: var(--font-bold);

		border: 1px solid var(--gray0);
	}
	.answer--correct {
		background-color: hsl(90, 90%, 40%);
		color: var(--gray0);
	}
	.answer--incorrect {
		background-color: hsl(0, 90%, 40%);
		color: var(--gray0);
	}
</style>
