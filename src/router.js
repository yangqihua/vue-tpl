import Vue from 'vue'
import Router from 'vue-router'
import Frame from './components/main/Frame'
import Example from './views/Example'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/', component: Frame,
            children: [
                {
                    path: '/',
                    name: 'example',
                    component: Example,
                    meta: {
                        title: 'Example',
                    }
                },
            ]
        },
        {
            path: '*',
            name: 'not-found',
            component: () => import(/* webpackChunkName: "NotFound" */ './views/error/NotFound.vue'),
            meta: {
                title: '404 not found',
            }
        },
    ]
})
