<script>
	import ExamCard  from "../../components/exam-card.svelte";
</script>

<main>
	<h1 class="title">Inicia tu prueba</h1>
	<article class="courses">

		<ExamCard examTitle={'Matemáticas'} examImg={'https://picsum.photos/100/100'} examImgAlt={'Matemàticas img'}
		 examLInk={'/math-exam'}/>

		<!-- <ExamCard examTitle={'Inglés'} examImg={'https://picsum.photos/100/100'} examImgAlt={'Inglés img'}
		 examLInk={'/english-exam'}/> -->
	</article>
</main>