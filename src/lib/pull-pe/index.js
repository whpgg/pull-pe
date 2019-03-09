import keyboard from './vue-pull-pe.vue'
const vuePullPe = {
    install (Vue, options) {
        Vue.component('pullPe', keyboard)
    }
}

export default vuePullPe