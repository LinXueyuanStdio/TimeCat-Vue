<template>
    <div class="g-content">
        <p>时光猫主页</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                qrcode: require('assets/images/qrcode.jpg')
            }
        },
        created(){
            // 设置面包屑路径
            this.$store.commit('SET_BREADCRUMB', [{ name: '首页', path: '/Home' }]);
        }
    }
</script>

<style>
</style>
