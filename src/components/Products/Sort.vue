
  <template>
    <div>
      <sort-filter-controls :elements="memoryModules"
                            sort-attribute="shortName"
                            sort-order="asc"/>
      <products-helper :elements="filteredMemoryModules"
                       name-field="shortName"
                       price-field="clubPrice"
                       preview-page-name="MemoryModulesPreview"/>
    </div>
  </template>
  <script>
    import ProductsHelper from "@/components/Products/ProductsHelper.vue";
    import http from "@/api/http.js";
    import SortFilterControls from "@/components/Products/SortFilterControls.vue";

    export default {
      name: "MemoryModules",
      components: {SortFilterControls, ProductsHelper},
      data() {
        return {
          loading: false,
          memoryModules: []
        }
      },
      computed: {
        filteredMemoryModules() {
          return this.$children[0].filteredCards;
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