<template>
    <div class="mx-auto col-xs-4 col-sm-6 col-md-10 col-lg-10 text-center" id="end">
        <h3 class="mt-5 mb-4 text-center">Well done, you have completed the Quiz!</h3>
        <h5 class="mt-2 mb-3 text-center">Your score is {{score}}</h5>
        <button class="btn hvr-pulse mt-3 mb-5" @click="redirect">Play again</button>
    </div>
</template>

<script>
    export default {
        props: ['score'],
        name: "End.vue",
        methods: {
            redirect: function () {
                this.$router.push('game');
            }
        }
    }
</script>

<style>
    #end {
        background-color: white;
        border-color: black;
        border-style: solid;
        border-width: 3px;
        border-radius: 25px;
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

    .btn {
        background-color: royalblue;
        border-radius: 25px;
        border-color: darkblue;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
    }
</style>
