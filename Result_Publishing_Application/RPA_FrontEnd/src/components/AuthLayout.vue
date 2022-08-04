<template>
    <div class="container border border-danger">
        <div class="body">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
/* .container{
    background:   rgb(122,187,108);
} */

.container{
    border-radius: 50px;
    background: whitesmoke;
    margin-top: 50px;
}

</style>