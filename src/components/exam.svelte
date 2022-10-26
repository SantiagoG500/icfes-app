<script> 
	import { user } from '../stores';
	import { onMount } from 'svelte';

	import { goto } from "$app/navigation";

	import { getDocuments, db, addUserExam } from '../firebase.js';
	import { doc } from 'firebase/firestore';

	export let examName;
	let setProblems = [];

	onMount(async () => {
		try {
			setProblems = [...(await getDocuments(examName))];


			// const xd = await getUserDoc($user.uid)
			// console.log(xd.exams);

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

		console.log(userAnswers);
		const docRef = doc(db, 'users', $user.uid);
		const dateNow = Date.now()

		const setExam = {date: dateNow, examName: examName, setProblems: [...userAnswers]}
		
		addUserExam(docRef, {...setExam}, $user.uid)
		goto('/results-2')
	};
</script>

<form class="section form" on:submit|preventDefault={sendData}>
	{#each setProblems as setProblem}
		{#if setProblem.problem.instructions}
			<h2 class="form__title title">{setProblem.problem.instructions}</h2>	
		{/if}
		<p>{setProblem.problem.problem}</p>

		<ul class="questions">
			{#each setProblem.setQuestions as setQuestion}
				<li class="questions__question">{setQuestion.question}</li>
				
				<ul class="questions__answers">
					{#each setQuestion.answers as answer }
						<li class="questions__answer">
							<label class="answer-label">
								<input 
									required
									value={answer}
									name={setQuestion.question}
									data-id={setProblem.id}
									type="radio"
									on:click={e=> addAnswer(e)}
								>
								{answer}
							</label>
						</li>	
					{/each}
				</ul>

			{/each}
		</ul>
	{/each}
	<button class="btn">Finalizar Prueba</button>
</form>

<style>
	.form__title{
		font-size: 1rem;
	}

	.questions{
		padding-left: 1rem;

		list-style-position: inside;
		list-style: decimal;
	}
	.questions__question{
		margin-bottom: 1rem;
	}


	.questions__answers{
		padding-left: 0px;

		list-style: none;
	}
	.questions__answer{		
		height: min-content;
		
		margin-bottom: 1rem;
		padding-left: 1rem;

		border-radius: .5rem;
		border: 3px solid var(--gray0);
	}
	.answer-label{
		position: relative;
		display: inline-block;
		
		width: 90%;
		height: 100%;
		padding-top: .3rem;
		padding-bottom: .3rem;

		word-break: keep-all;
		white-space: pre-wrap;

		cursor: pointer;
	}
</style>