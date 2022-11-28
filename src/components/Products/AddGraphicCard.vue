<template>
  <v-row justify="">
    <v-dialog
        v-model="dialog"
        persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn
            color="primary"
            v-bind="props"
        >
          Add new
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="ma-auto pt-4">
          <span class="text-h5">Add new graphic card</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-text-field
                    label= "Name"
                    required
                    v-model="cardName"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-text-field
                    label="Videochipset"
                    required
                    v-model="cardChipset"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-text-field
                    label="Brand"
                    persistent-hint
                    required
                    v-model="cardBrand"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-text-field
                    label="Price"
                    required
                    v-model="cardPrice"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-text-field
                    label="Old price"
                    required
                    v-model="cardOldPrice"
                ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                  <v-text-field
                      label="Club price"
                      required
                      v-model="cardClubPrice"
                  ></v-text-field>
                </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-text-field
                    label="Image"
                    hint="Image url"
                    v-model="cardImage"
                    required
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-text-field
                    label="Memory"
                    required
                    v-model="cardMemory"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-text-field
                    label="Technology process"
                    required
                    v-model="cardTechProcess"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-text-field
                    label="Interface"
                    required
                    v-model="cardInterface"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-text-field
                    label="Connectors"
                    required
                    v-model="cardConnectors"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-text-field
                    label="Power supply"
                    required
                    v-model="cardPowerSupply"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue-darken-1"
              text
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              color="blue-darken-1"
              text
              @click="addCard"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import http from "@/api/http.js";

export default {
  name: "AddGraphicCard",
  data () {
    return {
      dialog: false,
      cardName: '',
      cardBrand: '',
      cardMemory: '',
      cardPrice: '',
      cardClubPrice: '',
      cardOldPrice: '',
      cardImage: '',
      cardChipset: '',
      cardTechProcess: '',
      cardInterface: '',
      cardConnectors: '',
      cardPowerSupply: ''
    }
  },
  methods: {
    addCard(){
      this.dialog = false
      http.post('graphicCards', {
        categoryId: 29,
        price: this.cardPrice,
        oldPrice: this.cardOldPrice,
        shortName: this.cardName,
        categoryName: "Видеокарты",
        brandName: this.cardBrand,
        clubPrice: this.cardClubPrice,
        image: this.cardImage,
        data: [
          {
            name: "Видеочипсет:",
            value: this.cardChipset
          },
          {
            name: "Память:",
            value: this.cardMemory
          },
          {
            name: "Интерфейс:",
            value: this.cardInterface
          },
          {
            name: "Техпроцесс:",
            value: this.cardTechProcess
          },
          {
            name: "Разъемы:",
            value: this.cardConnectors
          },
          {
            name: "Питание:",
            value: this.cardPowerSupply
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>