import Vue from 'vue'
import App from './components/main/App.vue'
import router from './router'
import store from './store'

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

// import theme from 'muse-ui/lib/theme';
// import custom from './assets/js/theme'
// theme.add('custom', custom, 'dark');
// theme.use('custom');

Vue.use(MuseUI);

// import 'muse-ui/lib/styles/base.less';
// import 'muse-ui/lib/styles/theme.less';
// import {Button, AppBar, Icon, LoadMore, Tabs, Snackbar, Dialog, DataTable} from 'muse-ui';
//
// Vue.use(Button)
// Vue.use(AppBar)
// Vue.use(Icon)
// Vue.use(LoadMore)
// Vue.use(Tabs)
// Vue.use(Snackbar)
// Vue.use(Dialog)
// Vue.use(DataTable)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
