<template>
  <div class="fluid pa-0 signup__box d-flex align-center justify-center mt-16 mx-4">
    <v-card class="signup__card" :loading="isLoading"  text="">
      <h1>Sign Up</h1>
        <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="signUp">
        <v-text-field
          class="field"
          type="email"
          v-model="signupData.email"
          placeholder="Email"
          variant="underlined"
        ></v-text-field>
        <v-text-field
            class="field"
            v-model="signupData.username"
            placeholder="Username"
            variant="underlined"
          ></v-text-field>
        <v-text-field
          class="field"
          v-model="signupData.password"
          placeholder="Password"
          variant="underlined"
        ></v-text-field>

        <v-btn id="sub" type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
    <div id="log-div">
      <label for="signup">Already have an account?</label>
      <RouterLink :to="{name:'login'}"><h4>Log in</h4></RouterLink>
    </div>
    </v-card>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
    name:'signup',
  data() {
    return{
      isLoading:false,
      signupData:{
        email:'',
        username:'',
        password:''
      }
    }
  },
  methods:{
    async signUp(){
          this.isLoading=true;
      await axios.post(import.meta.env.VITE_BASE_URL + 'user/register',this.signupData)
         .then((response) =>{
        if(response.status==201)
        {
            this.$router.push({name:'home'})
        }
        console.log(response);
      })
      .catch(error =>{
        console.log('error is : ' + error);
      });
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');

.signup__box{
  position:relative;
  top:100px;
}

.signup__card{
  font-family: 'Open Sans', sans-serif;
  border-radius: 15px;
  width:416px;
  background-color: #37373d;
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

#log-div{
  display: flex;
  justify-content: center;
  margin-top: 18px;
  margin-right: 16px; 
  margin-bottom: 8px;
  padding:20px;
  color:white;
  font-size: 0.9rem;
}
#sub{
  background-color: #8658c0;
}
@media screen and (max-width:560px){
  html{
    overflow:hidden;
  }
.signup__box{
  margin-top:40%;
}
}
</style>