<template>
  <div class="sort-controls">
    <button @click="sortData('shortName')">Sort by Name</button>
    <button @click="sortData('clubPrice')">Sort by Price</button>
  </div>
  <div class="price-range-controls">
    <label for="minPrice">Min Price:</label>
    <input type="number" id="minPrice" v-model.number="minPrice"/>
    <label for="maxPrice">Max Price:</label>
    <input type="number" id="maxPrice" v-model.number="maxPrice"/>
  </div>
  <ProductsHelper :elements="filteredCards"
                  name-field="shortName"
                  price-field="clubPrice"
                  preview-page-name="GraphicCardsPreview"/>
</template>
<script>
import http from "@/api/http.js";
import ProductsHelper from "@/components/Products/ProductsHelper.vue";

export default {
  name: "GraphicCards",
  components: {ProductsHelper },
  data() {
    return {
      loading: false,
      graphicCards: [],
      sortAttribute: 'shortName',
      sortOrder: 'asc',
      minPrice: 0,
      maxPrice: Number.MAX_SAFE_INTEGER
    }
  },
  mounted() {
    this.loading = true;
    http.get('graphicCards').then(response => {
      this.graphicCards = response.data;
      this.loading = false;
    })
  },
  computed: {
    sortedCards() {
      return this.graphicCards.sort((a, b) => {
        if (this.sortAttribute === 'shortName') {
          if (this.sortOrder === 'asc') {
            return a[this.sortAttribute].localeCompare(b[this.sortAttribute]);
          }
          return b[this.sortAttribute].localeCompare(a[this.sortAttribute]);
        }
        if (this.sortOrder === 'asc') {
          return a[this.sortAttribute] - b[this.sortAttribute];
        }
        return b[this.sortAttribute] - a[this.sortAttribute];
      });
    },
    filteredCards() {
      return this.sortedCards.filter(card => card.clubPrice >= this.minPrice && card.clubPrice <= this.maxPrice);
    }
  },
  methods: {
    sortData(sortAttribute) {
      if (this.sortAttribute === sortAttribute) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortAttribute = sortAttribute;
        this.sortOrder = 'asc';
      }
    }
  }
}
</script>
<style scoped>
.sort-controls {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.sort-controls button {
  padding: 10px 20px;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;
}

.price-range-controls {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.price-range-controls label {
  margin: 0 10px;
}

.price-range-controls input[type="number"] {
  width: 60px;
}
</style>
