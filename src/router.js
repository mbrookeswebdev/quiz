import Vue from 'vue'
import Router from 'vue-router'
import Start from './components/Start.vue'
import Game from './components/Game.vue'
import End from './components/End.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'start',
            component: Start
        },
        {
            path: '/game',
            name: 'game',
            component: Game
        },
        {
            path: '/end',
            name: 'end',
            component: End,
            props: true
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
