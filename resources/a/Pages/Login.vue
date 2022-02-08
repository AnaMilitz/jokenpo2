<template>
  <main>
    <div id="loginBox">
      <h1> Faça seu login </h1>
      <div class="login">
        <input id="user" placeholder="E-mail" type="email" v-model="user.email" required/>
        <input id="pass" placeholder="Senha" type="password" v-model="user.password" required/>
      </div>
      <div class="pass-remember">
        <input type="checkbox" id="check-box"/>
        <label for="check-box"> Lembrar minha senha </label>
      </div>
      <button id="loginBtn" v-on:click="login()"> Entrar </button>
      <div id="forgotWrapper">
        <router-link to="a"><a id="forgotPass"> Esqueceu a senha? </a></router-link>
      </div>
      <b> Login com </b>
      <div id="socialLogin">
        <div class="social-box"><img src="..\..\img\icons\google_login.png" /></div>
        <div class="social-box"><img src="..\..\img\icons\facebook_login.png" /></div>
        <div class="social-box"><img src="..\..\img\icons\apple_login.png" /></div>
      </div>
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
      <router-link to="/register"><button id="createBtn"> Criar conta </button></router-link>
    </div>
  </main>
</template>

<script>
import { RouterLink } from 'vue-router';
import Swal from 'sweetalert2'
export default {
  data(){
    return {
      user: {
        email: "",
        password: "",
      },
    }
  },
  methods:{
    async login(){
      var res = await axios.post("/api/auth/login", this.user);
      console.log(res);
      this.$store.commit("setToken", res.data);
      Swal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            icon: 'success',
            iconColor: 'var(--second-color)',
            title: 'Login Successful'
        });
        this.$router.push('/')
    },
  }
}

</script>

<style scoped>
  #loginBox{
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
  #loginBox > *{
    margin: 10px 0;
  }
  h1{
    min-width: max-content;
    font-style: normal;
    font-size: 30px;
  }
  .login{
    display: flex;
    align-items: center;
    flex-flow: column;
  }
  .login > input{
    width: 350px;
    box-sizing: border-box;
    margin: 5px 0;
    background-color: white;
    border: 1px solid rgba(12, 20, 39, 0.25);
    padding: 10px 15px;
    border-radius: 20px;
  }
  #mainContainer > #loginBox > .pass-remember{
    display: flex;
    align-items: center;
    color: #B5AEAE;
    width: 100%;
    font-size: 20px;
    margin-left: 10px;
    margin-top: -4px;
  }
  input[type="checkbox"]{
    appearance: none;
    border-radius: 4px;
    border: 1px inset gainsboro;
    cursor: pointer;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    box-shadow: inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(156, 156, 156, 0.48);
  }
  input[type="checkbox"]:checked:before{
    font: arial;
    font-style: oblique;
    content: '\2714';
    display: block;
    text-align: center;
    margin-top: -3px;
    margin-left: -3px;
    color: var(--second-color);
    font-weight: bold;
  }
  #loginBtn{
    width: 350px;
    color: white;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: var(--second-color);
    padding: 10px 15px;
    box-shadow: 0 4px 3px var(--light-shadow);
  }
  #loginBtn:hover{
    cursor: pointer;
    color: rgb(182, 182, 182);
  }
  #forgotWrapper{
    display: flex;
    width: 100%;
    justify-content: flex-end;
    color: var(--second-color);
    font-weight: bold;
    margin-right: 20px;
  }
  #socialLogin{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .social-box{
    box-sizing: border-box;
    border: 1px solid #ECECEC;
    border-radius: 20px;
    height: 55px;
    width: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 3px var(--light-shadow);
    cursor: pointer;
  }
  #ou{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
  }
  #ou span{
    margin: 0 20px;
    color: var(--login-gray);
  }
  #createBtn{
    color: var(--second-color);
    font-weight: 600;
    width: 350px;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 10px 15px;
    background-color: white;
    box-shadow: 0 4px 3px var(--light-shadow);
  }
  #createBtn:hover{
    cursor: pointer;
  }
</style>