<template>
  <main>
    <div id="registerBox">
      <h1> Nova conta </h1>
      <div class="register">
        <input placeholder="E-mail" type="email" required/>
        <input placeholder="Senha" type="password" required/>
        <input placeholder="Confirmar senha" type="password" required/>
        <h2> Outras informações </h2>
        <input placeholder="Nome completo" type="text" required/>
        <input placeholder="CPF" type="number" required />
        <input placeholder="Cidade/Município" type="text" required/>
        <select name="UF" id="UF">
          <option value="none">Selecionar estado</option>
          <option value="AC"> AC </option>
          <option value="AL"> AL </option>
          <option value="AP"> AP </option>
          <option value="AM"> AM </option>
          <option value="BA"> BA </option>
          <option value="CE"> CE </option>
          <option value="DF"> DF </option>
          <option value="ES"> ES </option>
          <option value="GO"> GO </option>
          <option value="MA"> MA </option>
          <option value="MT"> MT </option>
          <option value="MS"> MS </option>
          <option value="MG"> MG </option>
          <option value="PA"> PA </option>
          <option value="PB"> PB </option>
          <option value="PR"> PR </option>
          <option value="PE"> PE </option>
          <option value="PI"> PI </option>
          <option value="RJ"> RJ </option>
          <option value="RN"> RN </option>
          <option value="RS"> RS </option>
          <option value="RO"> RO </option>
          <option value="RR"> RR </option>
          <option value="SC"> SC </option>
          <option value="SP"> SP </option>
          <option value="SE"> SE </option>
          <option value="TO"> TO </option>
        </select>
        <button id="createBtn"> Criar conta </button>
        <div id="ou">
        <svg width="140" height="2" viewBox="0 0 184 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.499777">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1L183 1L1 1Z" fill="#B5AEAE"/>
          <path d="M1 1L183 1" stroke="#A6A1A1" stroke-width="2" stroke-linecap="square"/>
          </g>
        </svg>
        <span> ou </span>
        <svg width="140" height="2" viewBox="0 0 184 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.499777">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1L183 1L1 1Z" fill="#B5AEAE"/>
          <path d="M1 1L183 1" stroke="#A6A1A1" stroke-width="2" stroke-linecap="square"/>
          </g>
        </svg>
      </div>
        <router-link to="/login"><button id="loginBtn"> Entrar </button></router-link>
      </div>
    </div>
    <h3> O nome completo será exibido nas emissões de certificados </h3>
  </main>
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
main{
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-flow: column;
}
#registerBox{
    margin: 50px 0;
    display: flex;
    align-items: center;
    flex-flow: column;
    background-color: white;
    box-sizing: border-box;
    border: 1px solid #ECECEC;
    border-radius: 20px;
    padding: 20px 50px;
}
h1{
    min-width: max-content;
    font-style: normal;
    font-size: 30px;
}
h2{
    margin-top: 20px;
    min-width: max-content;
    font-style: normal;
    font-size: 20px;
}
h3{
  margin-top: 35px;
  font-weight: normal;
  color: var(--login-gray);
}
.register{
    display: flex;
    align-items: center;
    flex-flow: column;
}
.register > input, select{
    width: 350px;
    box-sizing: border-box;
    margin: 5px 0;
    background-color: white;
    border: 1px solid rgba(12, 20, 39, 0.25);
    padding: 10px 15px;
    border-radius: 20px;
}
#createBtn{
    margin-top: 20px;
    width: 350px;
    color: white;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: var(--second-color);
    padding: 10px 15px;
    box-shadow: 0 4px 3px var(--light-shadow);
}
#createBtn:hover{
    cursor: pointer;
    color: rgb(182, 182, 182);
}
#loginBtn{
    color: var(--second-color);
    font-weight: 600;
    width: 350px;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 10px 15px;
    background-color: white;
    box-shadow: 0 4px 3px var(--light-shadow);
}
#loginBtn:hover{
    cursor: pointer;
  }
#ou{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  margin: 20px 0;
}
#ou span{
  margin: 0 20px;
  color: var(--login-gray);
}
.register > select{
  padding-left: 11px;
}
</style>