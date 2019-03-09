<template>
    <div class="pullDown">
        <pull-pe :bottom-load-method="loadmore">
            <ul class="pullUl">
                <li v-for="item in dataList">{{item}}</li>
            </ul>
        </pull-pe>
    </div>
</template>
<script>
export default {
    name: 'pullDown',//待受理页面点击拒绝受理时弹出
    props: [],
    data() {
        return {
            dataList:[0,1,2,3,4,5,6,7,8,9]
        }
    },
    mounted(){

    },
    methods: {
        loadmore(loaded) {
            setTimeout(() => {
                this.dataList = this.dataList.concat(this.dataList);
            loaded('done');
            }, 2000);
        }
    },
    watch:{
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
    .pullDown{
        background: white;
        width: 100%;
        height: 100%;
    }
    .pullUl{
        height: 100%;
        li{
            background-color: gray;
            height: 10%;
            font-size: 50px;
            text-align: center;
        }
    }
</style>
