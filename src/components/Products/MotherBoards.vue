<template>
  <products-helper :elements="motherBoards"
                   name-field="shortName"
                   price-field="clubPrice"
                   preview-page-name="MotherBoardsPreview"/>
</template>

<script>
import http from "@/api/http.js";
import ProductsHelper from "@/components/Products/ProductsHelper.vue";

export default {
  name: "MotherBoards",
  components: { ProductsHelper },
  data() {
    return {
      loading: false,
      motherBoards: []
    }
  },
  mounted() {
    this.loading = true;
    http.get('motherBoards').then(response => {
      this.motherBoards = response.data;
      this.loading = false;
    })
  }
}
</script>

<style scoped>

</style>