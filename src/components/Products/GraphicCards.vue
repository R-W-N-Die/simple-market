<template>
  <Dialog></Dialog>
  <AddGraphicCard class="ma-5"/>
  <products-helper :elements="graphicCards"
                name-field="shortName"
                price-field="clubPrice"
                preview-page-name="GraphicCardsPreview"/>
</template>

<script>
import http from "@/api/http.js";
import ProductsHelper from "@/components/Products/ProductsHelper.vue";
import AddGraphicCard from "@/components/Products/AddGraphicCard.vue";
import Dialog from "@/components/utils/Dialog.vue";

export default {
  name: "GraphicCards",
  components: {Dialog, AddGraphicCard, ProductsHelper },
  data() {
    return {
      loading: false,
      graphicCards: []
      }
    },
    mounted() {
      this.loading = true;
      http.get('graphicCards').then(response => {
        this.graphicCards = response.data;
        this.loading = false;
      })
    }
  }
</script>

<style scoped>

</style>
