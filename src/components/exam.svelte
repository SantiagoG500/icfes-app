<script>
	import { user } from '../stores';
	import { onMount } from 'svelte';
	import { getDocuments, db } from '../firebase.js';
	import { doc, updateDoc } from 'firebase/firestore';

	export let examName;
	let setProblems = [];

	onMount(async () => {
		try {
			setProblems = [...(await getDocuments(examName))];
			// console.log(examName);
		} catch (error) {
			setProblems = error;
		}
	});

	let questions = [];
	const addAnswer = (event) => {
		const targetValue = event.target.value;
		const targetName = event.target.name;
		const id = event.target.dataset.id;
		const problems = [...setProblems];

		for (const setProblem of problems) {
			const { problem, setQuestions } = setProblem;
			const foundSetQuestion = setQuestions.find(
				(setQuestion) => setQuestion.question === targetName
			);

			if (foundSetQuestion) {
				const currentQuestion = { ...foundSetQuestion, userAnswer: targetValue };
				const latestQuestion = questions.find(
					(question) => question.question === currentQuestion.question
				);

				if (questions.length === 0 || latestQuestion === undefined)
					questions.push({ ...currentQuestion, problem, id });
				else if (currentQuestion.userAnswer !== latestQuestion.userAnswer) {
					const latestQuestionIndex = questions.indexOf(latestQuestion);
					questions.splice(latestQuestionIndex, 1, { ...currentQuestion, problem, id });
				}
			}
		}
	};

	const sendData = () => {
		const userAnswers = [...setProblems];

		for (const userAnswer of userAnswers) {
			const filteredQuestions = questions.filter((question) => question.id === userAnswer.id);
			userAnswer.setQuestions = [...filteredQuestions].sort((a, b) => a.index - b.index);
		}

		const docRef = doc(db, 'users', $user.uid);
		updateDoc(docRef, {
			exams: [{ exam: examName, setProblems: [...userAnswers] }]
		}).catch((error) => console.log(`ERROR (updateDoc): ${error}`));
	};
</script>

<form class="section form" on:submit|preventDefault={sendData}>
	{#each setProblems as setProblem}
		<p>{setProblem.problem}</p>
		{#each setProblem.setQuestions as setQuestion}
			<fieldset class="form__fieldset">
				<p>{setQuestion.question}</p>

				<ul class="questions">
					{#each setQuestion.answers as answer}
						<div>
							<li class="questions__question">
								<label>
									<input
										required
										on:click={(e) => addAnswer(e)}
										type="radio"
										name={setQuestion.question}
										value={answer}
										data-id={setProblem.id}
									/>
									{answer}
								</label>
							</li>
						</div>
					{/each}
				</ul>
			</fieldset>
		{/each}
	{/each}
	<button class="btn">Finalizar Prueba</button>
</form>

<style>
	.form__fieldset {
		border: none;
	}
	.questions {
		list-style: upper-alpha inside;
		padding-left: 0px;
	}

	.questions__question {
		margin-top: 1rem;
		padding-left: 1.5rem;
	}

	label {
		display: inline-block;
		width: 92%;
		cursor: pointer;
	}

	div {
		height: 4rem;

		margin-top: 1rem;
		padding-top: auto;
		padding-bottom: auto;

		border-radius: 0.5rem;
		border: 2px solid var(--gray0);
	}
</style>
