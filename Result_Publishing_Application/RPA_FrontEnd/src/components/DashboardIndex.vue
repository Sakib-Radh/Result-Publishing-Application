<template>
     <div class="container">
        <div class="body">
            <div v-if="isSubmitted" class="alert alert-success" role="alert">
                Successfully Updated CGPA
            </div>
            <div v-if="isNotNumber" class="alert alert-danger" role="alert">
                Please Enter Valid CGPA
            </div>
            <div class="header">
                <h1></h1>
            </div>
            <div class="student-info">
                <h2>Hello {{studentInfo.name}}</h2>
                <h2>Your Current CGPA is {{studentInfo.cgpa}}</h2>
            </div>
           
            <div class="footer">
                 <button class="btn btn-primary" @click="logout">Logout</button>
            </div>
        </div>

    </div>

   
</template>

<script>

import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import {  mapState } from 'vuex';
import axios from 'axios';

export default {
    name: "DashboardIndex",
    data(){
        return{
            id: this.$route.query.id,
            roll: this.$route.query.roll,
            studentInfo: {
                'name' : '',
                'roll' : '',
                'cgpa' : ''
            }
        }
    },
    computed: {
    // ...mapGetters(["user"]),
    ...mapState(["user"])
    },
    methods:{
        async getData(){
        //   const result =  await axios.get('http://127.0.0.1:8000/api/get/2/radh@gmail.com')

        const result = await axios({
            url: 'http://127.0.0.1:8000/api/get/' + this.id + '/' + this.roll,
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })  
        
            this.studentInfo.name = result.data[0].name
            this.studentInfo.roll = result.data[0].roll
            this.studentInfo.cgpa = result.data[0].cgpa
        }
    },
    created(){
        this.getData()
    },
    setup(){
        const store = useStore();
        const router = useRouter();
        function logout(){
            store.commit('logout')
            router.push({
                name: 'LoginIndex'
            })
        }

        return{
            logout
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
    height: 600px;
}
.footer{
    padding: 10px;
    margin-top: 180px;
    margin-left: 267px;
}
input{
    width: 60px;
    padding: 10px;
}
</style>
