import Vue from 'vue'
import Router from 'vue-router'
import pullDown from '@/view/pullDown.vue'
Vue.use(Router)

export default new Router({
    routes: [
        /* { path: '*', component: NotFoundComponent },//404页面 */
        {
            path: '/',
            name: 'pullDown',
            component: pullDown,
            title: '下拉'
        }
    ]
})
