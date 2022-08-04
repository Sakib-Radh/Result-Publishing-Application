<template>
  <section class="" style="background-color: #eee;">
    <!-- <div class="container h-100"> -->
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">REGISTRATION</p>

                <div v-show="!userPass" class="alert alert-danger" role="alert">
                  Password doesn't match with confirm password
                </div>

                <div v-show="userName == false" class="alert alert-danger" role="alert">
                  Please Provide Name
                </div>

                <div v-show="!userRoll" class="alert alert-danger" role="alert">
                  Please Provide Roll
                </div>

                <div v-show="!userEmail" class="alert alert-danger" role="alert">
                  Please Provide Email
                </div>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">

                      <label class="form-label" for="form3Example1c">Your Name</label>
                      <input type="text" id="form3Example1c" class="form-control" v-model="user.name" />

                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">

                      <label class="form-label" for="form3Example1c">Your Roll</label>
                      <input type="text" id="form3Example1c" class="form-control" v-model="user.roll" />

                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">

                      <label class="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" class="form-control" v-model="user.email" />

                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">

                      <label class="form-label" for="form3Example4c">Password</label>
                      <input type="password" id="form3Example4c" class="form-control" v-model="user.password" />

                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">

                      <label class="form-label" for="form3Example4c">Confirm Password</label>
                      <input type="password" id="form3Example4c" class="form-control" v-model="confirmPass" />

                    </div>
                  </div>

                  <div class="row mb-4">
                    <button type="button" class="btn btn-primary btn-lg" @click="submitVerification()">Register</button>
                    <div class="admin-or-user">
                      <router-link :to="{name: 'AdminOrUser'}">Go Back</router-link>
                    </div>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
import { useRouter } from 'vue-router';
import store from '../store'

const router = useRouter();

export default{
  name:'RegisterIndex',
  data()
  {
      return{

        user: {
          'name': '',
          'email': '',
          'password': '',
          'roll' : ''
        },
        confirmPass: '',
        userPass: true,
        userName: true,
        userRoll: true,
        userEmail: true
      }
  },

    methods:
    {
        // async register()
        // {
        //     let result = await axios.post(
        //         'http://127.0.0.1:8000/api/register', {
        //           name: this.user.name,
        //           password: this.user.password,
        //           email: this.user.email
        //         }
        //     );
        //      let res = JSON.stringify(result)
        //      console.log(res)
            
        // },

      submitVerification(){
        if(this.user.password != this.confirmPass){
          this.userPass = false
          return false
        }
        if(this.user.name == ''){
          this.userName = false
          return false
        }
        if(this.user.roll == ''){
          this.userRoll = false
          return false
        }
        if(this.user.email == ''){
          this.userEmail = false
          return false
        }
        return true
      },  

      register(ev) {
        if(!this.submitVerification){
          return
        }
        ev.preventDefault();
        store
          .dispatch("register", this.user)
          .then(() => {
            router.push({
              name: "DashboardIndex",
            });
          })
          
      }
    },

};

</script>

<style scoped>
.container.border.border-danger{
  background: whitesmoke!important;
}
label{
  color: black;
}
a{
  padding: 10px;
}
</style>