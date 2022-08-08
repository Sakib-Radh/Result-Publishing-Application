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
                <h1>Update The CGPA</h1>
            </div>
            <div class="student-info">
                <h2>{{studentInfo.name}}</h2>
                <h2>{{studentInfo.roll}}</h2>
            </div>
            <label for="cgpa" class="cgpa">CGPA</label>
            <div class="form-group">
                <input type="text" v-model="cgpa">
            </div>
            <div class="footer">
                <button class="btn btn-primary" @click="update">Submit</button>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'StudentDetails',
    data(){
        return{
            studentInfo: {
                'roll': this.$route.query.roll,
                'name': this.$route.query.name
            },
            cgpa: '',
            isSubmitted: false,
            isNotNumber: false
            
        }
    },

    methods: {
       async update(){
            if(isNaN(this.cgpa)){
                this.isNotNumber = true;
                return
            }
            if(this.cgpa > 4 || this.cgpa <= 0){
                this.isNotNumber = true
                return
            }
            this.isNotNumber = false
            const result = await axios.put("http://127.0.0.1:8000/api/admin/all/update/"+ this.studentInfo.roll,
            {cgpa: this.cgpa}
            )
            if(result){
                this.isSubmitted = true,
                setTimeout(this.routerPush, 1000)
            }
        },

        routerPush(){
            this.$router.push({
                name: "AdminDashboard"
             })
        }
    }
}
</script>

<style>

.body{
    justify-content: center;
    margin: auto !important;
    text-align: center;
    padding: 100px;
}
.container{
    height: fit-content;
}
.footer{
    padding: 10px;
}
input{
    width: 60px;
    padding: 10px;
}
</style>