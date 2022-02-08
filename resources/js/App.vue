<template>
    <router-view />
</template>


<script>
//import Navbar from './Components/Navbar.vue';
//import Footer from './Components/Footer.vue';
export default {
    name: "app",
    components: {
        //Navbar,
        //Footer
    }
}
</script>


<style>
*
{
    padding: 0;
    margin: 0;
    font-family: 'Rubik';
    font-size: 15px;
    --main-color: #21376B;
    --second-color: #395EB7;
    --light-shadow: gainsboro;
    --login-gray: #B5AEAE;
}
input:focus
{
    outline: none;
}
html
{
    height: 100%;
}
body
{
    min-height: 100vh;
    height: 100%;
    background-color: #F7F9FD;
}
main{
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-flow: column;
}

</style>
