<template>
  <products-helper :elements="memoryModules"
                   name-field="shortName"
                   price-field="clubPrice"
                   preview-page-name="MemoryModulesPreview"/>
</template>

<script>
import ProductsHelper from "@/components/Products/ProductsHelper.vue";
import http from "@/api/http.js";

export default {
  name: "MemoryModules",
  components: {ProductsHelper},
  data() {
    return {
      loading: false,
      memoryModules: []
    }
  },
  mounted() {
    this.loading = true;
    http.get('memoryModules').then(response => {
      this.memoryModules = response.data;
      this.loading = false;
    })
  }
}
</script>

<style scoped>

</style>