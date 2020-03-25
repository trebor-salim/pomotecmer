<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="ma-1">{{ appName }}</span>
      </v-toolbar-title>
      <p>{{ appVersion }}</p>
      <v-spacer></v-spacer>
      <v-btn text href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">
        <span class="mr-2">Pomodoro Technique timer</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Layout />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "./components/Layout.vue";

export default Vue.extend({
  name: "App",
  components: {
    Layout
  },
  data: () => ({
    appName: "Pomótecmer",
    appVersion: "v0.2.4"
  })
});
</script>
