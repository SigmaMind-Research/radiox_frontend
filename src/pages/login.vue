<template>
  <div class="backgroung-wrapper">
       <div class="wave"></div>
       <div class="wave"></div>
       <div class="wave"></div>
  </div>
  <div class="fluid pa-0 login__box d-flex justify-end align-stretch">
   <div class="greetings">
    <div id="animation">
     <h1>RadioX <span>.</span><span>.</span><span>.</span></h1>
     </div>
     <p>Where cutting-edge AI meets medical expertise to deliver accurate diagnostic reports, empowering healthcare professionals and enhancing patient care..</p>
  </div>

    <v-card class="login__card" :loading="isLoading">
      <div class="login_cont">
        <h1>Get Started</h1>

        <v-sheet width="300" class="mx-auto">
          <!-- <v-form fast-fail @submit.prevent="userLogin">
        <label v-if="err" for="error">email or password does not match.</label>
        <v-text-field
          class="field"
          type="email"
          v-model="loginData.email"
          placeholder="Email"
          variant="underlined"
          ></v-text-field>
          <v-text-field
          class="field"
          type ="password"
          v-model="loginData.password"
          placeholder="Password"
          variant="underlined"
          ></v-text-field>
          <v-btn id="sub" type="submit" block class="mt-2 sub">Submit</v-btn>
        </v-form>
        <hr class="hr-text" data-content="OR">   -->
        <v-btn id="google-btn" @click="loginWithGoogle" block class="mt-2"><img src="/google.png" >Sign in with Google</v-btn>
        <div class="footer-text">
          <img src="/favicon.png" alt="">
          <p>SigmaMind</p>
        </div>
    </v-sheet>
  </div>
  </v-card>
</div>
</template>

<script>
  import axios from 'axios'
  export default {
    name:'login',
    data() {
      return{
        isLoading:false,
        err:false,
        loginData:{
          email:'',
        password:''
      }
    }
  },
  methods:{
    async userLogin(){
      this.isLoading = true;
      localStorage.clear()
       axios.post(import.meta.env.VITE_BASE_URL + 'auth/login/',this.loginData)
      .then((response) =>{
        if(response.status==200){  // or 201
          const key0 = response.data.Authorization[0];  // accesss token
          const key1 = response.data.Authorization[1];  // referesh token
          const exp = Date.now() + 1000*60*60*24;
          localStorage.setItem('token0',key0)
          localStorage.setItem('token1', key1)
          localStorage.setItem('expire',exp)
          this.$router.push({ name: 'home' })
        }
      })
      .catch(error => {
        this.err=true;
        this.isLoading = false;
        this.loginData.password=null;
        if(error.response.data.message='email or password does not match.'){
          console.log(error.response.data.message);
        }
      })
    },
    async loginWithGoogle() {
      window.open(import.meta.env.VITE_BASE_URL + "/auth/google-login/", '_blank');
      window.addEventListener('message', (event) => {
          const tokens = event.data.tokens;
          localStorage.setItem('token0', tokens[0])
          localStorage.setItem('token1', tokens[1])

          this.$router.push({ name: 'home' })
      });
    },
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');
@import url('/asset/loginstyle.css');

</style>