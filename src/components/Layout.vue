<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <Tomato />
      </v-col>
      <v-col cols="12" md="8">
        <Todos title="Pomodoro todos"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import Tomato from "./Tomato.vue";
import Todos from "./Todos.vue";

export default Vue.extend({
  components: {
    Tomato,
    Todos
  }
});
</script>
