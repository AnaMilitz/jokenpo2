<template>
    <game v-if="game" v-bind:bot="selectedBot" />
    <button @click="setGame"> Jogar </button>
</template>

<script>
import Game from "../Components/Game.vue"
export default {
    name: "main",
    data(){
        return{
            game: false,
            bots: [
                {name: "Penny", img: "penny.png", int: 0.0, unlocked: true, select: false},
                {name: "Leonard", img: "leonard.png", int: 0.15, unlocked: true, select: false},
                {name: "Howard", img: "howard.png", int: 0.3, unlocked: true, select: false},
                {name: "Raji", img: "raji.png", int: 0.5, unlocked: false, select: false},
                {name: "Amy", img: "amy.png", int: 0.75, unlocked: true, select: true},
                {name: "Sheldon", img: "sheldon.png", int: 0.9, unlocked: false, select: false},
            ], 
        }
    },
    components: {
        Game
    },
    methods:{
        setGame(){
            this.game = true;
        }
    },
    computed: {
        selectedBot(){
            return this.bots.find(bot => bot.selected == true);
        }
    }
}
</script>

<style>

</style>