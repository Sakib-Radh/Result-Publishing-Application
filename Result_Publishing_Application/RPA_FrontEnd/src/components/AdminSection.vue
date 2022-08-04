<template>
    <div class="container border border-success">
        <router-view></router-view>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
    .container.border.border-success{
        border-radius: 50px;
        border-width: 2px!important;
    }
</style>