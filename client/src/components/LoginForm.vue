<template>
  <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center" style="font-size: 40px;">Sign In</h5>
              <form class="form-signin" @submit.prevent="loginHandler">
                <div class="form-label-group">
                  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email">
                  <label for="inputEmail">Email address</label>
                </div>

                <div class="form-label-group">
                  <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password">
                  <label for="inputPassword">Password</label>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                  <input type="checkbox" class="custom-control-input" id="customCheck1">
                  <label class="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign
                  in</button>
                <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i
                    class="fab fa-google mr-2"></i> Sign in with Google</button>
                <hr class="my-4">
                <p>Dont have Account ?</p>
                <button class="btn btn-lg btn-success btn-block text-uppercase" type="submit" @click.prevent="registerPage">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "LoginForm",
    data(){
        return{
            email: '',
            password: '',
        }
    },
    methods: {
        loginHandler(){
            axios
                .post('http://localhost:3000/login',{
                    email: this.email,
                    password: this.password
                })
                .then(({data})=>{
                    this.$emit('changePage','home')
                    localStorage.setItem('access_token',data.access_token)
                })
                .catch(err=>{
                    console.log(err)
                })
                .then(()=>{
                    this.email = ''
                    this.password = ''
                })
        },
        registerPage(){
            this.$emit('changePage','register')
        }
    }
}
</script>

<style>

</style>