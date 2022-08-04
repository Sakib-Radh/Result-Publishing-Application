<template>
    <div class="container border border-danger">
        <div class="body">
            <div class="header">
                <h1>WELCOME TO RESULT PUBLISHING WEBSITE</h1>
            </div>
                

            <div class="footer d-flex">
                <div class="admin-button">
                    
                    <label for="admin-button">ADMIN LOGIN</label><br>
                    <button class="btn btn-light" @click="admin">Admin</button>
                </div>
                <div class="student-button">
                    <label for="student-login">STUDENT LOGIN</label><br>
                    <button class="btn btn-light" @click="student">Student</button>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'AdminOrUser',

    methods:{
        admin(){
            this.$router.push({
                name: 'AdminLogin'
            })
        },

        student(){
            this.$router.push({
                name: 'LoginIndex'
            })
        }
    }
}
</script>

<style scoped>
    .body{
    justify-content: center;
    margin: auto !important;
    text-align: center;
    padding: 100px;
}
.container{
    border-radius: 50px;
    margin-top: 50px;
    height: 600px;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(76,76,137,1) 35%, rgba(0,212,255,1) 100%);
}
.footer{
    padding: 10px;
    margin-top: 150px;
    justify-content: center;
}
.header{
    color: white;
}
.admin-button{
    padding: 10px;
}
.student-button{
    padding: 10px;
}
.btn-light{
    width: 150px;
}
label {
    display: inline-block;
    margin-bottom: 10px;
    color: antiquewhite;
}
h1{
  font-variant-caps: all-petite-caps;
}
</style>