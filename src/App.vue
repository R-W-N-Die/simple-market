<template>
  <v-app>
    <v-main>
      <v-layout class="h-100">
        <nav-bar/>
        <v-main class="bg-grey-lighten-3">
          <router-view></router-view>
        </v-main>
      </v-layout>
    </v-main>
  </v-app>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: { NavBar }
}
</script>
