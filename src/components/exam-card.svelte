<script>
	export let examTitle;
	export let examLInk
	export let examImg;
	export let examImgAlt;
</script>

<a class="link-container" href={examLInk}>
	<main class="card">
		<h2 class="card__title title">{examTitle}</h2>
		<img class="card__img" src={examImg} alt={examImgAlt}>
	</main>
</a>

<style>
  
  .link-container{
    text-decoration: none;
  }
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
  
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
    /* padding-top: 1rem; */
    padding-bottom: 1rem;

    border: 4px solid var(--gray4);
    border-radius: .5rem;

    background-color: var(--gray5);
  }
  .card::before{
    display: block;
    content: '';

    left: 0px;
    top: 0px;

    width: 100%;
    height: 10px;

    background-color: var(--gray4);
  }

  .card__title{
    color: var(--gray3);
    margin-top: 0px;
  }

  @media (hover: hover){
    .card:hover{
      border-color: var(--black-cyan);
    }
    .card:hover::before{
      background-color: var(--black-cyan);
    }
  }
</style>