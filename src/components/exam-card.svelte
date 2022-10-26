<script>
  import { getUserDoc } from "../firebase.js";
  import { onMount } from "svelte";
  import { user } from "../stores.js";

  let userExams = []
  let examList = [
      {examName: 'matematicas', route: '/math-exam', img: 'icons/matematicas.png'},
      {examName: 'ingles', route: '/english-exam', img: 'icons/ingles.png'},
      {examName: 'ciencias sociales', route: '/social-sciences-exam', img: 'icons/sociales.png'},
      {examName: 'lectura critica', route: '/language-exam', img: 'icons/lenguaje.png'},
    ]
    

  onMount(async () =>{
    const userDoc = await getUserDoc($user.uid)
    const {exams} = userDoc
  
    for (const exam of exams) userExams.push(exam.examName)
    
    userExams.forEach(exam =>{
      const index = examList.find(examItem => examItem.examName === exam)
      examList.splice(examList.indexOf(index), 1)
    })
    examList = [...examList]
  })
</script>

{#if examList.length === 0}
  <h1 class="title">¡¡¡Ya has finalizado tu prueba!!!</h1>
{:else}
  {#each examList as exam}
    <a class="link-container" href={exam.route}>
      <main class="card">
        <h2 class="card__title title">{exam.examName}</h2>
        <img class="card__img" src={exam.img} alt={exam.examName}>
      </main>
    </a>
  {/each}
{/if}

<style>
  
  .link-container{
    text-decoration: none;
  }
  .card{
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    position: relative;
    display: flex;
  
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 1rem;
    padding-top: 1rem;

    max-width: 20rem;
    min-height: 20rem;


    border: 4px solid var(--gray4);
    border-radius: .5rem;

    background-color: var(--gray5);
  }
  .card::before{
    position: absolute;
    display: block;
    content: '';

    top: 0px;
    width: 100%;
    height: 10px;

    background-color: var(--gray4);
  }

  .card__title{
    color: var(--gray3);
    margin-top: 0px;
  }
  .card__img{
    width: 200px;
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