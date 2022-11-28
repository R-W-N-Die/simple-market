<template>
  <v-overlay v-if="loading" v-model="loading" class="align-center justify-center" contained>
    <v-progress-circular indeterminate/>
  </v-overlay>
  <v-container class="w-100 d-flex justify-center">
    <v-card v-if="card" width="800">
      <v-img :src="card.image"/>
      <v-card-text>
        <v-table>
          <tbody>
          <tr v-for="pair in card.data" :key="pair.value">
            <td>{{ pair.name }}</td>
            <td>{{ pair.value }}</td>
          </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import http from "@/api/http.js";

export default {
  name: "MemoryModulesPreview",
  data() {
    return {
      card: null,
      loading: false,
    }
  },
  mounted() {
    this.loading = true;
    http.get('memoryModules').then(response => {
      this.loading = false
      this.card = response.data.find(card => card.id === Number(this.$route.params.id))
      console.log(this.card)
    })
  }
}
</script>

<style scoped>

</style>
