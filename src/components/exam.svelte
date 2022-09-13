<script>
	import { getDocuments } from '../firebase.js';
	import { onMount } from 'svelte';

	let dataStructure = {
		problem: 'problema de placeholder (las respuestas correctas son emojis)',
		questions: [
			{
				question: 'pregunta de placeholder',
				correctAnswer: '🍓',
				answers: ['respuesta incorrecta', 'respuesta incorrecta', '🍓', 'respuesta incorrecta']
			},
			{
				question: 'pregunta de placeholder',
				correctAnswer: '🐸',
				answers: ['respuesta incorrecta', 'respuesta incorrecta', '🐸', 'respuesta incorrecta']
			},
			{
				question: 'pregunta de placeholder',
				correctAnswer: '🐱',
				answers: ['respuesta incorrecta', 'respuesta incorrecta', '🐱', 'respuesta incorrecta']
			}
		]
	};

	export let examName;
	let setProblems = [];

	onMount(async () => {
		try {
			setProblems = [...(await getDocuments(examName))];
			// console.log(setProblems);
		} catch (error) {
			setProblems = error;
		}
	});

	const addAnswer = (event) => {
		// const answers  []
		const userAnswer = event.target;

		for (const setProblem of setProblems) {
			const setQuestions = setProblem.setQuestions;

			const foundQuestion = setQuestions.find(
				(setQuestion) => setQuestion.question === userAnswer.name
			);
			foundQuestion.userAnswer = userAnswer.value;

			// hacer push a la respuesta (eliminar datos duplicados de un arreglo)

			// console.log(userAnswer.value);
			console.log(foundQuestion);
		}
	};
</script>

<form class="section form">
	{#each setProblems as setProblem}
		<p>{setProblem.problem}</p>
		{#each setProblem.setQuestions as setQuestion}
			<fieldset class="form__fieldset">
				<p>{setQuestion.question}</p>

				<ul class="questions">
					{#each setQuestion.answers as answer}
						<li class="questions__question">
							<label>
								<input
									on:click={(e) => addAnswer(e)}
									type="radio"
									name={setQuestion.question}
									value={answer}
								/>
								{answer}
							</label>
						</li>
					{/each}
				</ul>
			</fieldset>
		{/each}
	{/each}
	<button type="submit" class="btn">Finalizar prueba</button>
</form>

<style>
	.form__fieldset {
		border: none;
	}
	.questions {
		list-style-type: lower-alpha;
	}
</style>
