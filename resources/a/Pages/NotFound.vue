<template>
    <main>
        <div class="notfound-message-wrapper">
            <div>
                Não foi possível encontrar esta página! 
                <div class="wrapper">Você será redirecionado em... </div>
                <div class="wrapper"><h5 class="timer" v-bind:innerHTML="timer"></h5></div>
            </div>
        </div>
    </main>
</template>

<script>
import router from '../Router';
export default {
    name: "notFound",
    components: {

    },
    data:() => ({
        timer: 5,
    }),
    methods: {
        timerTick(){
            this.timer -= 1;
            if(this.timer > 0){
                setTimeout(this.timerTick, 1000);
            }
            else{
                router.push("/");
            }
        }       
    },
    mounted(){
        //this.timerTick();
    }
}

</script>

<style scoped>
    .notfound-message-wrapper{
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>