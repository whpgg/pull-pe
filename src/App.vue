<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {};
    },
    components: {},
    created() {},
    mounted() {
    },
    methods: {}
};
</script>

<style lang="scss">
/* 全局resetCss 重置 */
@import "./assets/css/resetCss.css";
html,body{
    width: 100%;
    height: 100%;
    font-family: 'PingFangSC-Regular';
    background: #efeff4;
}
#app{
    height: 100%;
}
</style>
