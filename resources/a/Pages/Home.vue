<template>
  <div id="mainContainer">    
    <main>
      <h1> O que você gostaria de aprender?</h1>
      <p> Faça cursos online gratuitamente e receba certificados pela Universidade Federal de Santa Maria </p>
      <div class="courses-btn-wrapper">
        <router-link class="courses-btn" to="/courses"> Ver cursos </router-link>
      </div>
    </main>
    <img class="ufsm-people" src="..\..\img\landing\ufsmPeople.png" alt="UFSM photo" />
  </div>
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

<style scoped>
  
  .courses-btn{  
    color: white;
    background-color:var(--second-color);
    padding: 16px 20px;
    text-decoration: none;    
    height: auto;
    border-radius: 15px;   
    box-shadow: 0 4px 3px var(--light-shadow);
  }
  .courses-btn:hover{
    cursor: pointer;
    color: rgb(182, 182, 182);
  }
  .courses-btn-wrapper{
    margin: 16px 0px;
  }
  @media (max-width: 768px){    
  
  }
  @media (max-width: 1083px){    
    main{
      height: 400px;
      width: 320px;
      padding: 0px 50px;
      display: flex;
      align-content: center;
      flex-flow: column;
    }
    .ufsm-people {
      height: 300px;
    }
    #mainContainer{
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column-reverse;
    }
    .main-container > *{      
      margin-top: 20px;
    }
  }
  @media (min-width: 1084px){    
    .ufsm-people {
      height: 350px;
    }
    #mainContainer{
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    main{
      height: 600px;
      width: 780px;
      padding-left: 50px;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-flow: column;
    }
    main > *{
      margin-bottom: 25px;
    }
    h1{
      max-width: 70%;
      font-size: 50px;
      font-weight: bold;
    }
    p{
      max-width: 70%;
      line-height: 24px;
      font-size: 20px;
    }
  }
  @media (max-width: 1400px){
    main{      
      width: 730px;
    }
    h1{
      font-size: 40px;
    }
    p{
      font-size: 16px;
    }
  }
</style>
