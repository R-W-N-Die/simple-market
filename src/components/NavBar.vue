<template>
  <v-app-bar height="100">
    <template v-slot:prepend>
      <v-img
          @click = "redirectToMain"
          class="nav-bar-logo"
          src="https://bs-soft.ru/templates/Default/images/icon7.png"
          height="80"
          width="80"
      />
    </template>
    <v-app-bar-title>
      My Market
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  name: "NavBar",
  methods: {
    redirectToMain () {
      this.$router.push({ name: 'Main' })
    }
  },
  data() {
    return {
      links: [
        'GraphicCards'
      ]
    }
  }
}
</script>

<style scoped>
.nav-bar-logo:hover {
  cursor: pointer;
}
</style>
