<template>
  <v-app>
    <v-app-bar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="ma-1">{{ appName }}</span>
      </v-toolbar-title>
      <p>{{ appVersion }}</p>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        target="_blank"
      >
        <span class="mr-2 d-none d-sm-inline">Pomodoro Technique timer</span>
        <v-icon title="Pomodoro Technique timer">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Layout :appName="appName" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "./components/Layout.vue";

export default Vue.extend({
  name: "App",
  components: {
    Layout,
  },
  data: () => ({
    appName: "Pomótecmer",
    appVersion: "v0.3.0",
  }),
});
</script>
