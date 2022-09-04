<script>
	let xd = {
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
</script>

<form class="form">
	<p>problema: {xd.problem}</p>

	{#each xd.questions as setQuestion}
		<p>Pregunta {setQuestion.question}</p>

		<fieldset class="fieldset">
			{#each setQuestion.answers as answer}
				<label> <input name="answer" type="radio" /> {answer}</label>
			{/each}
		</fieldset>
	{/each}
</form>

<style>
	.form {
		width: 80%;
		margin-left: auto;
		margin-right: auto;

		padding: 1.5em 1em;
		border-radius: 1em;
		background-color: var(--gray5);
	}
	.fieldset {
		display: flex;
		flex-direction: column;

		border: none;
	}
</style>
