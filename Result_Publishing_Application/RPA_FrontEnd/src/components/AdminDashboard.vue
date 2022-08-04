<template>

    <div class="container">
        <div class="table-container">
            <div class="form-outline mb-4">
                <input type="search" class="form-control" id="datatable-search-input">
                <label class="form-label" for="datatable-search-input">Search</label>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Roll</th>
                        <th scope="col">Name</th>
                        <th scope="col">CGPA</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in allItem" :key="row">
                        <td>{{ row.roll }}</td>
                        <td>{{ row.name }}</td>
                        <td>{{ row.cgpa }}</td>
                        <td><button class="btn btn-primary" @click="details(row)">Details</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <footer class="text-center">
            <div class="footer-button logout">
                <button class="btn btn-primary" @click="adminLogout">Logout</button>
            </div>
        </footer>

    </div>


</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import StudentDetails from './StudentDetails.vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'


export default {
    name: "AdminDashboard",
    data() {
        return {
            allItem: [],
            selectedStudent: {},
            isUpdateModalVisible: false,
        };
    },
    components: {
        StudentDetails
    },

    computed: {
        ...mapGetters["user"]
    },

    created() {
        this.getData();
    },

     setup(){
        const store = useStore();
        const router = useRouter();
        function adminLogout(){
            store.commit('adminLogout')
            router.push({
                name: 'AdminLogin'
            })
        }

        return{
            adminLogout
        }
    },

    methods: {
        async getData() {
            const result = await axios.get("http://127.0.0.1:8000/api/admin/all");
            if (result) {
                this.allItem = result.data;
            }
        },
        details(data) {
            this.selectedStudent = data;
            this.isUpdateModalVisible = true;
            this.$router.push({
                name: 'StudentDetails',
                query: {
                    roll: data.roll,
                    name: data.name
                }
            })
            
        }
    },
}
</script>

<style>


    .container{
        height: 100%;
        width: 100%;
        margin-top: 50px;
        
    }
    .title {
    justify-content: center!important;
    margin: auto;
    margin-left: 450px;
    }
    .modal-footer{
    justify-content: center!important;
    margin-top: 200px;
    margin-bottom: 10px;
    }
    .modal-btn{
    height: 40px;
    width: 300px;
    }
    .update{
        margin-right: 10px;
    }
     .btn-outline-primary{
        background-color: #FFFFFF;
        border: #FFFFFF 1px solid;
        color: #8A9099;
    }
    .btn:hover{
        background-color: #6c95dc;
        color: #8A9099;
    }   
    .footer-button.logout {
        margin-bottom: 10px;
    }

</style>