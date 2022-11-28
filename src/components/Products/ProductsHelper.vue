<template>
  <v-overlay v-if="loading" v-model="loading" class="align-center justify-center" contained>
    <v-progress-circular indeterminate/>
  </v-overlay>
  <v-container class="pa-10">
    <v-row>
      <v-col v-for="elem in elements" :key="elem.id" cols="4">
        <v-card class="bg-grey-lighten-3">
          <router-link :to="{ name: previewPageName, params: { id: elem.id } }">
            <v-img
                :src="elem.image"
                :aspect-ratio="2"
                cover/>
          </router-link>
          <v-card-title>{{ elem[nameField] }}</v-card-title>
          <v-card-text>{{ elem[priceField] }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProductView",
  props: {
    nameField: String,
    priceField: String,
    previewPageName: String,
    elements: Array,
  },
  data () {
    return {
      loading: false
    }
  }
}
</script>

<style scoped>

</style>