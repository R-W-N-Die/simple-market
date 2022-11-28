<template>
  <div class="login-container">
    <h1 class="login-header">Welcome to my project!</h1>
    <v-card width="600">
      <v-form>
        <v-container>
          <v-text-field
              label="Email"
              v-model="email"
              outlined
              required
          ></v-text-field>
          <v-text-field
              label="Password"
              v-model="password"
              type="password"
              outlined
              required
          ></v-text-field>
          <v-btn class="mr-3" @click="tryLogin">Log in</v-btn>
          <v-btn @click="$router.push({ name: 'Register' })">Sign up</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import http from "@/api/http";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    tryLogin() {
      http.post('auth/login', {
        email: this.email,
        password: this.password
      }).then(response => {
        localStorage.setItem('token', response.data.access_token)
        this.$router.push({ name: 'Main' })
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-header {
  color: white;
  font-size: 3em;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 3px 3px 0 rgb(79 79 79);
}
.btn {
  margin-right: 10px;
}
</style>
