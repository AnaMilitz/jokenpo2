<template>
    <div id="gameCourtain">
        <div id="gameContainer">
            <div id="choiceContainer">
                <div class="choiceBox" v-for="choice in choices" v-bind:key="choice.id">
                    <img v-bind:src="'../images/'+choice.img" class="choice-img" @click="choose(choice.id)"/>
                    <b v-bind:style="{color: choice.color}" >{{choice.name}}</b>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "game",
    props: ['bot'],
    data(){
        return{
            choices: [
                {id: 1, name: "Pedra", img: "pedra.png", color: "#F99712", win: [3, 4]},
                {id: 2, name: "Papel", img: "papel.png", color: "#FF4646",win: [1, 5]},
                {id: 3, name: "Tesoura", img: "tesoura.png", color: "#AB0BE3",win: [2, 4]},
                {id: 4, name: "Lagarto", img: "lagarto.png", color: "#93E83E",win: [2, 5]},
                {id: 5, name: "Spock", img: "spock.png", color: "#0D6DF5",win: [1, 3]}
                ],
            plays: [

            ],
            play:{
                player_choice: null,
                bot_choice: null,
                winner: null,
            }
        }
    },
    methods:{
        choose(id){
            this.play.player.choice = this.choices.find(choiceId => id == choiceId);
        },
        botPlay(){
            if(Math.random() < bot.int){
                this.play.bot_choice = this.play.player_choice.win[Math.floor(Math.random() * 2)];
            }else{                
                this.play.bot_choice = Math.floor(Math.random() * (choices.length));
            }
        },
        checkResult(){
            if(this.play.player_choice.win.find(id => id == this.play.bot_choice.id)){
                this.play.winner == "p";
            } 
            else if(this.play.player_choice.id == this.play.bot_choice.id){
                this.play.winner = "t";
            }
            else{
                this.play.winner == "b";
            }
                
            this.plays.push(Object.assign({}, this.play));

            if(winner == "t")
            {
                this.play = {
                    player: null,
                    bot: null,
                    winner: null,
                }                
            }else{
                console.log(this.play.winner + " venceu!")
            }
        }
    },
}
</script>

<style>
#gameCourtain{
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(85, 85, 85, 0.6);
}
#gameContainer{
    height: 600px;
    width: 800px;
    background: rgb(187, 187, 187);
    border: 1px black solid;
}
#choiceContainer{
    height: 100px;
    width: 100%;
    padding: 10px 100px;
    display: flex;
    justify-content: space-evenly;
}
.choiceBox{
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: center;
}
.choice-img{
    height: 80px;
    width: 80px;
    transition: 0.5s 0s ease;
}
.choice-img:hover{
    height: 100px;
    width: 100px;
    cursor: pointer;
}
</style>