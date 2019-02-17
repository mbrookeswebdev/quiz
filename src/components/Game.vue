<template>
    <div class="mx-auto col-xs-4 col-sm-6 col-md-10 col-lg-10 text-center" id="game">

        <h2 class="mt-3 text-center">Question no {{ questionNo }}</h2>

        <h4 class="mt-3 text-center">{{ question }}</h4>

        <div id="chosenAnswer" class="mt-4 mb-5" v-if="chosenAnswer"><h4>You selected: {{chosenAnswer}}</h4></div>

        <h4 class="text-danger text-center" id="outOfTime" v-if="timeOut && !chosenAnswer">You are out of time!</h4>

        <button v-if="((!gameOver && timeOut) || (!gameOver && chosenAnswer))" @click="calculateScore"
                class="mt-3 mb-4 btn">NEXT
        </button>

        <h4 class="mt-3 mb-3 mx-auto col-lg-2" id="cd" v-if="(!timeOut && chosenAnswer == null)">{{ count }}</h4>

        <div id="answers" class="mx-auto col-xs-2 col-sm-4 col-md-6 col-lg-6 mt-4 mb-4 pl-4 text-left"
             v-if="(!timeOut && chosenAnswer == null)">

            <div class="row">

                <div class="col"></div>

                <div class="col-xs-auto col-sm-auto col-md-auto col-lg-auto">

                    <h5><input type="radio" id="a1"
                               name="answer" :value="answers[0]" :disabled="timeOut" v-model="chosenAnswer">
                        <label for="a1">{{ answers[0] }}</label></h5>

                    <h5><input type="radio" id="a2"
                               name="answer" :value="answers[1]" :disabled="timeOut" v-model="chosenAnswer">
                        <label for="a2">{{ answers[1] }}</label></h5>

                    <h5><input type="radio" id="a3"
                               name="answer" :value="answers[2]" :disabled="timeOut" v-model="chosenAnswer">
                        <label for="a3">{{ answers[2] }}</label></h5>
                </div>

                <div class="col"></div>

            </div>
        </div>
    </div>

</template>

<script>

    import questions from '../data/questions.js'

    export default {
        name: "Game.vue",
        data: function () {
            return {
                questions,
                index: 0,
                questionNo: 0,
                answers: [],
                question: '',
                correctAnswer: '',
                incorrectAnswer1: '',
                incorrectAnswer2: '',
                chosenAnswer: null,
                gameOver: false,
                timeOut: false,
                score: 0,
                count: 0,
                interval: null
            }
        },

        created: function () {
            this.loadNewQuestion();
        },

        methods: {

            gameTimer: function () {

                let time = this;
                time.count = 10;

                time.interval = setInterval(function () {

                        if (time.count > 0) {
                            time.count--;
                        }

                        else {
                            clearInterval(time.interval);
                            time.timeOut = true;
                        }
                    }
                    , 1000);

            },

            shuffleResults: function () {

                // Fisher-Yates shuffle
                let m = this.answers.length, t, i;
                // While there elements to shuffle
                while (m) {
                    // Pick a remaining element
                    i = Math.floor(Math.random() * m--);

                    // And swap it with the current element.
                    t = this.answers[m];
                    this.answers[m] = this.answers[i];
                    this.answers[i] = t;
                }
            },

            loadNewQuestion: function () {

                this.timeOut = false;

                if (this.questionNo === this.questions.length) {
                    this.gameOver = true;
                    this.redirect();
                }
                else {
                    this.question = this.questions[this.index].question;
                    this.correctAnswer = this.questions[this.index].answers[0].text;
                    this.incorrectAnswer1 = this.questions[this.index].answers[1].text;
                    this.incorrectAnswer2 = this.questions[this.index].answers[2].text;
                    this.answers.push(this.correctAnswer, this.incorrectAnswer1, this.incorrectAnswer2);
                    this.shuffleResults();

                }
                this.questionNo++;
                this.index++;
                this.gameTimer();
            },

            calculateScore: function () {

                clearInterval(this.interval);

                if (this.correctAnswer === this.chosenAnswer) {
                    this.score++;
                    this.answers.length = 0;
                    this.chosenAnswer = null;
                    this.loadNewQuestion();
                }

                else {
                    this.answers.length = 0;
                    this.chosenAnswer = null;
                    this.loadNewQuestion();
                }
            },

            redirect: function () {
                this.$router.push({name: 'end', params: {score: this.score}});
            }
        }
    }
</script>

<style scoped>
    #game {
        background-color: white;
        border-color: black;
        border-style: solid;
        border-width: 3px;
        border-radius: 25px;
    }

    h1, h3 {
        font-family: 'Roboto', sans-serif;
        color: #000a12;
    }

    h4 {
        margin-top: 3%;
        font-family: 'Roboto', serif;
        color: #263238;
    }

    .btn {
        background-color: royalblue;
        border-radius: 25px;
        border-color: darkblue;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
    }

    #cd {
        background-color: pink;
        border-radius: 25px;
    }
</style>
