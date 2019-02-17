<template>
    <div class="mx-auto col-xs-4 col-sm-6 col-md-10 col-lg-10 text-center" id="start">
        <div class="mt-4">
            <h1 class="mt-2 text-center">Welcome to the general knowledge Quiz</h1>
            <hr id="line"/>
            <div id="rules">
                <h4 class="mt-2 mb-3">How to play: </h4>
                <h6> You will be presented with 15 questions and a choice of 3 answers for each question. </h6>
                <h6>You have 5 seconds to pick a correct answer.</h6>
                <h6 class="mt-4">Click on the button below to begin.</h6>
                <router-link to="/game">
                    <button type="button" class="mt-2 mb-5 btn btn-info hvr-pulse">Start the Game</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Start.vue"
    }
</script>

<style scoped>
    #start {
        background-color: white;
        border-color: black;
        border-style: solid;
        border-width: 3px;
        border-radius: 25px;
    }

    h1, h3 {
        font-family: 'Roboto', sans-serif;
        color: #000a12;
        text-shadow: 1px 1px 2px gainsboro;
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

    @-webkit-keyframes hvr-pulse {
        25% {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
        75% {
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }
    }

    @keyframes hvr-pulse {
        25% {
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
        75% {
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
        }
    }

    .hvr-pulse {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }

    .hvr-pulse:hover, .hvr-pulse:focus, .hvr-pulse:active {
        -webkit-animation-name: hvr-pulse;
        animation-name: hvr-pulse;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }
</style>
