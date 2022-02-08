<template>
  <button @click="toMain"> Logar </button>
</template>

<script>
export default {    
    name: "home",
    components: {
        //Navbar,
        //Footer
    },
    methods:{
        toMain(){
            this.$router.push("/main")
        }
    },
}
</script>

<style scoped>

</style>
