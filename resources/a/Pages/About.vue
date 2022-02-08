<template>
  <div class='space'></div>
  <div class="info-container">
      <div class='info-title'>
          Sobre a UFSM
      </div>
      <div class='info-box'>
          A Universidade Federal de Santa Maria é uma universidade pública brasileira, considerada, pelo Índice Geral de Cursos (IGC), de 2019, a 3ª melhor universidade do estado do Rio Grande do Sul e 17ª melhor universidade do Brasil. Além disso, é conceituada, pelo Ranking Universitário Folha (RUF) de 2020, como a 15ª melhor universidade do país no quesito ensino.
      </div>
  </div>    
  <div class='space'></div>
  <div class='space'></div>
  <div class="info-container">
      <div class='info-title'>
          Sobre a plataforma
      </div>
      <div class='info-box'>
          plataforma de cursos, da UFSM, foi desenvolvida em parceria com estudantes e professores da universidade, com o intuito de disseminar conhecimento e fornecer especialização profissional de maneira equitativa. <p />
          Todos os cursos são ofertados gratuitamente e seguem o formato de ensino MOOC (Massive Open Online Courses). Assim, são realizados individualmente, em um ambiente virtual de aprendizado, por meio de vídeos, de materiais de leitura e de atividades. Ao final de cada curso, é concedido um certificado gratuito, com o número de horas estudadas.
      </div>
  </div>
  <div class='space'></div>
  <div class='space'></div> 
</template>






<script>
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title);
  }
}
</script>






<style>
.about-link::before 
{
    content: "";
    position: absolute;
    bottom: 0px;
    background-color: #f19a59;
    transition: all 0.3s ease;
    opacity: 100%;
    left: 0;
    height: 5px;
    width: 100%;
}
.section-main
{
    padding-top: 20px;
    padding-bottom: 80px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.space
{
    height: 30px;
    width: 100%;
}
.info-container
{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.info-title
{
    color: #2754be;
    margin-bottom: 20px;
    height: 50px;
    font-size: 30pt;
    font-weight: bold;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.info-box
{
    font-size: 20pt;
    padding: 80px;
    width: 80%;
    background: #F3F3FA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}
.extra-info
{
    width: 90%;
    display: flex;
    font-size: 16pt;    
    font-weight: bold;
}
.extra-info-start
{
    width: 50%;    
}
.extra-info-start > div
{
    width: 100%;    
}
.extra-info-start > div > a
{
    margin-right: 10px;
    text-decoration: none;
    color: #2754be;
    transition: .3s ease;
}
.extra-info-start > div > a:hover
{
    margin-left: 10px;
    text-decoration: none; 
    color: #f48838;
}
.extra-info-end
{
    width: 50%;
    display: flex;
    justify-content: flex-end;
}
.extra-info-knowmore
{
    min-width: 400px;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
}
.extra-info-knowmore > div
{    
    display: flex;
    justify-content: flex-end;
    width: 100%;    
}

</style>