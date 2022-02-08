<template>
    <header>
        <div v-if="isMobile" v-on:click="dropDown"  id="nav-menu">
            <img src="..\..\img\comp_navbar/hamburguer.png"/>
        </div>
        <div class="img-wrapper">
            <router-link to="/home"> <img src="..\..\img\comp_navbar/universityEmblem.png" id="universityEmblem" alt="Emblema UFSM" /> </router-link>
        </div>
        <div class='nav-box-pages' v-bind:class="{open: dropMenu, mobile: isMobile}"> 
            <span><router-link to="/panel"> Painel </router-link></span> 
            <span><router-link to="/courses"> Cursos </router-link></span>
            <span><router-link to="/about"> Sobre </router-link></span>
            <span><router-link to="/doubts"> Dúvidas </router-link></span>
        </div>
        <div class='nav-box-login' v-if="loggedIn">
            <!--FOTO-->
        </div>
        <div class='nav-box-login' v-else>            
            <span><router-link to="/login"> Entrar </router-link></span>
            <span v-if="!isMobile" class='register-btn'><router-link  to="/register"> Cadastrar </router-link></span>
        </div>
    </header>
</template>

<script>
export default{
    name: "Navbar",
    data() {
        return {
            dropMenu: false,
            windowWidth: window.innerWidth,
        }
    },
    methods: {
        onResize(){
            this.windowWidth = window.innerWidth;
        },
        dropDown(){
            var nav = document.getElementById("nav-container");
            this.dropMenu = !this.dropMenu;
            if(this.dropMenu){
                console.log("Aberto")
            }
            else{
                console.log("Fechado")
            }
        },
    },
    computed: {
        isMobile(){
            console.log(this.windowWidth);
            return this.windowWidth < 860;
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    }
}
</script>

<style>
#universityEmblem
{
    margin-left: 50px;
    width: 120px;
}
header
{
    position: relative;
    top: 0;
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
    background: var(--main-color);
    margin-left: 0px;
}
.nav-box-pages
{
    margin-left: 20px;
    height: 100px;
    width: inherit;
    padding-top: 38px;
    float: left;
}
.nav-box-pages.mobile{
    display: none;
}
.nav-box-pages.open{
    display: block;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow:column;
    background-color: var(--main-color);
    border-right: 2px var(--second-color) solid;
    border-bottom: 2px var(--second-color) solid;
    width: 180px;
    height: 240px;
    margin-left: 0;
    padding: 0;
    position:absolute;
    top: 80px;
    left: 0;
}
.nav-box-login
{
    font-size: 16px;
    min-width: 75px;
    margin: 0 10px;
    height: 75px;
    display: flex;
    align-items: center;    
    float: right;
    justify-content: center;
}
.register-btn
{
    margin-left: 20px;
    margin-right: 40px;
    border-radius: 15px;    
    background-color:var(--second-color);
    padding: 20px;
    padding-top: 2px;
    padding-bottom: 2px;
    text-decoration: none;    
    height: auto;
}     
.nav-box-pages > span
{
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    font-size: 14pt;
    text-decoration: none;    
    height: auto;
    color: white;
    transition: 0.25s 0s ease;
    position: relative;
}
.nav-box-pages > span::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0px;
    left: 50%;
    background-color: #FFFFFFFF;
    transition: all 0.3s ease;
    border-radius: 207px;
  }
.nav-box-pages > span:hover::after 
{
    opacity: 100%;
    left: 15%;
    height: 5px;
    width: 68%;
}
.nav-box-login > span
{
    font-size: 14pt;
    text-decoration: none;    
    height: auto;
    color: white;
    transition: 0.25s 0s ease;
}
.nav-box-login > span:hover
{    
    color: rgb(182, 182, 182);
}
#nav-menu{
    min-width: 75px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#nav-menu > img{
    width: 28px;
}
@media (max-width: 860px){
    .img-wrapper{
        width: 100%;
        text-align: center;
    }
    #universityEmblem{
        margin-left: 0;
    }
}
</style>
