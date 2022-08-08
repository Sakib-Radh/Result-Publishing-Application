<template>

  <div>
    <form>
      <!-- Email input -->
      <div class="header">
        <h1>ADMIN LOGIN</h1>
      </div>
      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">Email address</label>
        <input type="email" id="form2Example1" class="form-control" v-model="admin.email" />

      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">Password</label>
        <input type="password" id="form2Example2" class="form-control" v-model="admin.password" />
      </div>

      <div>
        <button type="button" class="btn btn-light" @click="login">Sign In</button><br><br>
        <!-- <button class="btn btn-light" @click="$router.push({name: 'AdminOrUser'})">Back</button> -->
        <div class="admin-or-user">
          <router-link :to="{name: 'AdminOrUser'}">Go Back</router-link>
        </div>

      </div>

    </form>
  </div>


</template>

<script>
import store from '../store'
import { mapGetters } from 'vuex';

export default {
    name: 'AdminLogin',

    data(){
      return{

        admin: {
          'password': '',
          'email': '',
        }
      }
    },
    computed: {
        ...mapGetters(["role"])
    },
    methods:{
      login(ev){
        ev.preventDefault();
        store
          .dispatch("adminLogin", this.admin)
          .then(() => {
            this.$router.push({
              name: "AdminDashboard",
            });
          })
      }
    }
}
</script>

<style scoped>
.header {
    margin-bottom: 50px;
}
.container{
    margin-top: 60px;
}
/* .btn{
    margin-left: 430px;
} */
.register{
  justify-content: center!important;
}
h1{
  font-variant-caps: all-petite-caps;
  color: black;
}
label{
  color: black;
}
a{
  color: black;
}

button.btn.btn-light:hover {
    background: blueviolet;
    color: white;
}
button.btn.btn-light {
    width: 100%;
}
</style>
