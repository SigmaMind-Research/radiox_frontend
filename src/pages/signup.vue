<template>
  <div class="signup__box">
    <v-card class="signup__card" location="center" :loading="isLoading"  text="" variant="tonal">
      <h1>Sign-up</h1>
        <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="signUp">
        <v-text-field
          type="email"
          v-model="signupData.email"
          label="email"
        ></v-text-field>

        <v-text-field
            v-model="signupData.username"
            label="username"
          ></v-text-field>

        <v-text-field
          v-model="signupData.password"
          label="Password"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
    </v-sheet>
      <RouterLink :to="{name:'login'}"><h3>Log in</h3></RouterLink>
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
      await axios.post('https://radiox.onrender.com/user/register',this.signupData)
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
.signup__card{
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