<template>
  <div class="section-main-title">
        Dúvidas frequentes
  </div>
  <div class="question-container">
      <!--<div class=".question-box-wrapperr">-->
          <div class="question-box" v-for="q in questions" v-bind:key="q.id" v-bind:class="{ hidden: !q.show }" v-on:click="toggleHideElement(q)">
              <div class="question-title"> {{q.title}} </div>
              <div class="question-body"> {{q.content}} </div>              
          </div>
      <!--</div>-->
  </div>
</template>



<script>
export default {
  data(){
    return {
      questions: [
        {
          id: 0,
          title: 'Como faço para me cadastrar?',
          content: `Clique no botão "cadastrar", na canto superior direito da pagina.
            Em seguida, preencha as informações solicitadas com seus dados e
            clique em "criar conta".`,
          show: false,
        },
        {
          id: 1,
          title: 'Como me inscrevo em um curso?',
          content: `No seção "cursos", do menu, selecione uma área do conhecimento, encontre um curso de sua preferência e clique no botão "inscreva-me!".`,
          show: false,
        },
        {
          id: 2,
          title: 'Não sou aluno da UFSM, posso me inscrever mesmo assim?',
          content: `Sim, os cursos são abertos para qualquer pessoa.`,
          show: false,
        },
        {
          id: 3,
          title: 'Os cursos são gratuitos?',
          content: `Sim, todos os cursos e certificados da plataforma são gratuitos.`,
          show: false,
        },
        {
          id: 4,
          title: 'Esqueci meu login ou senha. E agora?',
          content: ` Para recuperar seu login ou senha, acesse a página de login (botão no canto superior direito da pagina), clique em "esqueceu sua senha?" e siga as instruções.`,
          show: false,
        },
        {
          id: 5,
          title: 'Em quanto tempo preciso terminar um curso?',
          content: `A quantidade de tempo varia de curso para curso e pode ser encontrada na seção “requisitos” do curso selecionado.`,
          show: false,
        },
        {
          id: 6,
          title: 'Como pego meu certificado?',
          content: `Tendo completado o curso com aprovação, o aluno pode confirmar seus dados
            na página do curso que realizou e, em seguida, clicar em "gerar certificado".`,
          show: false,
        },
        {
          id: 7,
          title: 'Como cancelo minha inscrição em um curso?',
          content: `Na página do curso selecionado, clique em "cancelar inscrição".`,
          show: false,
        },
        {
          id: 8,
          title: 'Como mudar meu nome ou CPF no certificado?',
          content: `Se você já emitiu seu certificado, entre em contato com
            suporte@ufsmooc.ufsm.br`,
          show: false,
        },
      ],
    }
  },
  methods: {
    toggleHideElement(q){
      q.show = !q.show;
    }
  },
}
</script>





<style>
body
{
    min-height: 600px;
}
input:focus
{
    outline: none;
}
.questions-link::before 
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
    padding-top: 80px;
    height: inherit;
}
.section-main-title
{
    height: 60px;
    width: 100%;
    font-weight: bold;
    font-size: 28pt;
    display: flex;
    justify-content: center;
    color: #2754be;
}
.question-container
{
    padding: 20px;
    padding-bottom: 80px;
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    flex-wrap: wrap;
}
/*
.question-box-wrapper
{
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
    flex-wrap: wrap;
}*/
.question-box
{
    margin-top: 40px;
    padding: 50px 20px 50px 20px ;
    min-width: 300px;
    width: 400px;
    background: #F3F3FA;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0.2px 0.2px 0.2px -0.3px rgba(0, 0, 0, 0.25), 0px 0px 1px #FFFFFF, 0px 0px 1px rgba(31, 42, 139, 0.48);
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    transition: .5s .5s ease;
}
.question-title
{
    color: black;
    transition: .3s ease;
    font-size: 17pt;
    font-weight: bold;
}
.question-box:hover
{
    cursor: pointer;
    background: #d5d5d5;
    box-sizing: border-box;
}
.question-box:hover > .question-title
{
    color: #21376B;
}
.question-box.hidden
{    
    transition: 0.5s 0.0s ease;
}
.question-box > .question-body
{
    word-wrap: break-word;
    width: 100%;
    transition: 0.5s ease;
    opacity: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s 0s ease, 0.25s 0.25s ease opacity;
}
.question-box.hidden > .question-body
{ 
    height: 0;
    opacity: 0;
    transition: 0.5s 0.25s ease, 0.25s 0s ease opacity;
}
</style>