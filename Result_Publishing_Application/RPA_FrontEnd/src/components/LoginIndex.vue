<template>


  <form>
    <!-- Email input -->
    <div class="header">
      <h1>STUDENT LOGIN</h1>
    </div>
    <div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" v-model="user.email" />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
      <input type="password" id="form2Example2" class="form-control" v-model="user.password" />
      <label class="form-label" for="form2Example2">Password</label>
    </div>

    <!-- 2 column grid layout for inline styling -->


    <div class="row mb-4">

        <button type="button" class="btn btn-light login-button" @click="login">Sign in</button>
        <button type="button" class="btn btn-light" @click="$router.push({name: 'RegisterIndex'})">Register</button>
      
      

      <div class="forget-pass">
        <router-link :to="{name: 'AdminOrUser'}">Forget Password?</router-link>
      </div>

      <div class="admin-or-user">
        <router-link :to="{name: 'AdminOrUser'}">Go Back</router-link>
      </div>
    </div>


  </form>

</template>

<script>
import store from '../store'
import { mapGetters } from 'vuex';
// import { useRouter } from 'vue-router'

// const router = useRouter()


export default {
    name: "LoginIndex",
    data(){
      return{

        user: {
          'password': '',
          'email': '',
        }
      }
    },
    computed: {
    ...mapGetters(["user"]),
    },
    methods:{
      login(ev){
        ev.preventDefault();
        store
          .dispatch("login", this.user)
          .then((res) => {

            this.$router.push({
              name: "DashboardIndex",
              query: {
                id: res.user.id,
                roll: res.user.roll
              }
            });
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
    margin-top: 60px;
}
/* .btn{
    margin-left: 430px;
} */
.register{
  justify-content: center!important;
  padding: 10px;
}
a{
  color: white;
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

.header {
    margin-bottom: 50px;
}

.forget-pass {
    padding: 20px;
}

.login-button{
  margin-bottom: 10px;
}
</style>