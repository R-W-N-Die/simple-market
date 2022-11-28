<template>
  <div class="register-container">
    <h1 class="register-header">Welcome to my project!</h1>
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
          <v-btn class="mr-3" @click="tryRegister">Sign up</v-btn>
          <v-btn  @click="$router.push({ name: 'Login' })">Log in</v-btn>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import register from "@/api/register.js";
import router from "@/router.js";

export default {
  name: "Register",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    tryRegister() {
      register.register(this.email, this.password)
    }
  }
}
</script>

<style scoped>
.register-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.register-header {
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