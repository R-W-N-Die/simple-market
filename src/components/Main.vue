<template>
  <v-container class="w-100">
    <v-row>
      <v-col cols="2">
        <v-card>
          <v-list
              :lines="false"
              density="compact"
              nav
          >
            <router-link v-for="(item, i) in items"
                         :key="i"
                         :to="{ name: item.routeName }"
                         class="link"
            >
              <v-list-item
                  :value="item"
                  active-color="primary"
              >
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <router-view></router-view>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      drawer: false,
      items: [
        { text: 'Graphic Cards', icon: 'mdi-expansion-card', routeName: 'GraphicCards' },
        { text: 'Memory Modules', icon: 'mdi-sd', routeName: 'MemoryModules' },
        { text: 'Mother Boards', icon: 'mdi-developer-board', routeName: 'MotherBoards' }
      ],
    }
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
  color: inherit;
  user-select: none;
}
</style>
