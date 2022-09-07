<script>
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
</script>

<form class="section">
	<p>problema: {dataStructure.problem}</p>

	{#each dataStructure.questions as setQuestion}
		<p>Pregunta {setQuestion.question}</p>

		<fieldset class="fieldset">
			<ul class="ul">
				{#each setQuestion.answers as answer}
					<li class="li"><label> <input name="answer" type="radio" /> {answer}</label></li>
				{/each}
			</ul>
		</fieldset>
	{/each}
</form>

<style>
	.fieldset {
		display: flex;
		flex-direction: column;

		border: none;
	}
	.ul {
		list-style: lower-latin;
	}
</style>
