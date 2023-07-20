<template>
  <div class="login__box">
    <v-card class="login__card" :loading="isLoading" location="center"  text="" variant="tonal">
      <h1>Log in</h1>
        <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="userLogin">
          <label v-if="err" for="error">email or password does not match.</label>
        <v-text-field
          type="email"
          v-model="loginData.email"
          label="email"
          ></v-text-field>
        <v-text-field
          type ="password"
          v-model="loginData.password"
          label="Password"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
      <RouterLink :to="{name:'signup'}"><h3>sign up</h3></RouterLink>
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
       axios.post('https://radiox-api.wonderfulsea-1d4ac329.southeastasia.azurecontainerapps.io/auth/login',this.loginData)
      .then((response) =>{
        if(response.status==200){  // or 201
          this.$router.push({ name: 'home' })
          const key0 = response.data.Authorization[0];  // accesss token
          const key1 = response.data.Authorization[1];  // referesh token
          const exp = Date.now() + 10000;
          localStorage.setItem('token0',key0)
          localStorage.setItem('token1', key1)
          localStorage.setItem('expire',exp)
          localStorage.setItem('test','"jaysairwa"')
          console.log(localStorage.getItem('test'));
          console.log(localStorage.getItem('token0'));
        }
        console.log("message is:" + response.status);
      })
      .catch(error => {
        this.err=true;
        this.isLoading = false;
        this.loginData.password=null;
        if(error.response.data.message='email or password does not match.'){
          console.log(error.response.data.message);
        }
      })
    }
  },
}
</script>

<style>
.login__card{
  /* align-self: center; */
  width:500px;
  margin-top: 24%;
}

  h1{
    text-align: center;
    margin: 16px;
  }

h3{
  margin-top: 16px;
  margin-right: 16px; 
  margin-bottom: 8px;
  text-align: end;
}
</style>