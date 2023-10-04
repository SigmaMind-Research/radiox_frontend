<template>
  <div class="greetings">
    <h1 class="main-head">Welcome to <br><span>RadioX</span></h1>
    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem Ipsum Generator.
</p>

  </div>
  <div class="backgroung-wrapper">
       <div class="wave"></div>
       <div class="wave"></div>
       <div class="wave"></div>
  </div>
  <div class="fluid pa-0 login__box d-flex justify-end align-stretch">
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
    </v-sheet>
  </div>
    <div class="circle-design">
          <!-- Circle and Text Container -->
          <div class="circle-text-container">
            <div class="circle large-circle">
              <div class="circle small-circle"></div>
              <div class="curve top-left"></div>
              <div class="curve top-right"></div>
              <div class="curve bottom-left"></div>
              <div class="curve bottom-right"></div>
            </div>
            <p class="circle-text">SigmaMind</p>
          </div>
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

html{
  overflow: hidden;
}
body{
  padding:0;
  margin:0;
  background-color: #1B4D3E;
}
.main-head{
  text-align: left;
  margin-left: 10%;
}
.greetings{
  position: absolute;
  font-size: 3.7rem;
  width: 70%;
  line-height: 1.2;
  margin-top: 10%;
}
.greetings p{
  font-size: 1.5rem;
  margin:1% 11%;
  opacity: 0.7;
  width: 70%;
}
h1 span{
  font-size: 8rem;
  color: #e7e3c0;
  letter-spacing: 3px;
}

.v-sheet{
  background:none;
}

.wave {
  background: transparent;
  border-radius: 1000% 1000% 0 0;
  position: fixed;
  width: 200%;
  height: 12em;
  animation: wave 10s -3s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
  bottom: 0;
  left: 0;
  z-index: -1;
  box-shadow: 0px -100px 24px -16px rgba(0,0,10,0.1);
}
.wave:nth-of-type(2) {
  bottom: -1.25em;
  animation: wave 15s linear reverse infinite;
  opacity: 0.8;
}
.wave:nth-of-type(3) {
    bottom: -2.5em;
    animation: wave 20s -1s reverse infinite;
    opacity: 0.9;
}
@keyframes wave {
  2% {
      transform: translateX(1);
  }
  25% {
      transform: translateX(-25%);
  }
  50% {
      transform: translateX(-50%);
  }
  75% {
      transform: translateX(-25%);
  }
  100% {
      transform: translateX(1);
  }
}

.login__box{
  position:relative;
  font-size: 1.5rem;
}

.login__card{
  font-family: 'Open Sans', sans-serif;  
  width: 30%;
  height: 100vh;
  background-color: rgb(10,10,10,0.95);
  color: #fff;
}

.login_cont{
  margin-top: 50%;
}

.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: .5;
  margin:20px 0;
}

.hr-text::before {
  content: '';
  background: linear-gradient(to right, transparent, white, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
  
.hr-text::after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;
  padding: 0 .5em;
  line-height: 1.5em;
  color: rgb(218, 216, 216);
  background-color: #3a3845;
}
#google-btn{
  color:black;
  background-color:#e3dcdc;
  padding: 20px;
  font-size: large;
}

img{
  padding-right: 12px;
}

#test{
 height: 300px;
 margin-left: -75px;
 margin-bottom: 4%;
}

.field input{
  text-align: center;
  border-radius: 4px;  
}

h1{
  color:white;
  text-align: center;
  margin: 16px;
}

h4{
  padding:0 5px;
  color: #a9d6e5;
  text-transform: capitalize;
}
#sign-div{
  display:flex;
  justify-content: center;
  margin-top: 16px;
  margin-right: 16px; 
  margin-bottom: 8px;
  padding:20px;
  color:white;
  font-size: 0.9rem;
}
#sub{
  background-color: #5692ab;
  margin:20px 0;
}
.circle-design {
  display: flex;
  position: relative;
  flex-direction: column;
  left:35%;
}

.circle-text-container {
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  position: fixed;
  bottom:-15px;
  margin-top: 10px; /* Adjust as needed */
}

.circle-text {
  position:relative;
  bottom:45px;
  left:75%;
  font-size: 1.3rem; /* Adjust the font size for the text */
  color: #fff;
}

.circle {
    width: 60px;
    height: 60px;
    border: 3px solid #074214;
    border-radius: 50%;
    position: relative;
}

.small-circle {
    width: 20px;
    height: 20px;
    background-color: #074214;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.curve {
    width: 30px;
    height: 30px;
    position: absolute;
    border: 2px solid #074214;
    border-radius: 50%;
}

.top-left {
    top: -10px;
    left: -10px;
    border-top: none;
    border-left: none;
}

.top-right {
    top: -10px;
    right: -10px;
    border-top: none;
    border-right: none;
}

.bottom-left {
    bottom: -10px;
    left: -10px;
    border-bottom: none;
    border-left: none;
}

.bottom-right {
    bottom: -10px;
    right: -10px;
    border-bottom: none;
    border-right: none;
}
</style>