<template>
  <div class="login__box">
    <v-card class="login__card bck-color" :loading="isLoading" location="center"  text="">
      <h1>Log in</h1>
      <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="userLogin" class="bck-color">
          <label v-if="err" for="error">email or password does not match.</label>

        <v-text-field
          id="field"
          type="email"
          v-model="loginData.email"
          placeholder="Email"
          variant="underlined"
          ></v-text-field>
        <v-text-field
          id="field"
          type ="password"
          v-model="loginData.password"
          placeholder="Password"
          variant="underlined"
        ></v-text-field>
        <v-btn id="sub" type="submit" block class="mt-2 sub">Submit</v-btn>
        <hr class="hr-text" data-content="OR">  
      </v-form>
      <v-btn id="google-btn" @click="loginWithGoogle" block class="mt-2"><img src="/google.png" >Sign in with Google</v-btn>
    </v-sheet>
    <div id="sign-div">
      <label for="signup">Don't have an account?</label>
      <RouterLink :to="{name:'signup'}"><h4>sign up</h4></RouterLink>
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

.login__card{
  font-family: 'Open Sans', sans-serif;  
  border-radius: 15px;
  width:416px;
  margin-top: 24%;
}
.bck-color{
  background-color:#37373d;
}

/* hr{
  width:80%;
  margin-left: 30px;
  margin-bottom:20px;
} */
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
    background-color: #37373d;
  }
.v-sheet{
  background: none;
}
#google-btn{
  color:black;
  background-color:#e3dcdc;
  margin:20px 0;
}
img{
  padding-right: 12px;
}

#field{
  text-align: center;
}

h1{
  color:white;
  text-align: center;
  margin: 16px;
}

h4{
  padding:0 5px;
  color: #D7BBF5;
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
  background-color: #8758c0;
  margin:20px 0;
}
</style>