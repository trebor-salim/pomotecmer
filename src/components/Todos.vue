<template>
  <div>
    <p v-show="tasks.length > 0" class="font-weight-bold text-left ml-5">
      <span v-if="title === undefined">Todos</span>
      <span v-else>{{ title }}</span>
      <v-btn
        icon
        :disabled="tasks.length===0"
        @click="removeCompletedTasks"
        title="Remove completed"
        :color="$vuetify.theme.themes.light.primary"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </p>
    <v-card v-show="tasks.length > 0" tile style="max-height: 440px; overflow-y: auto">
      <v-list flat>
        <v-list-item-group>
          <v-list-item v-for="(task, index) in tasks" :key="index">
            <v-list-item-action title="Is done">
              <v-checkbox v-model="task.done" @click.native="saveTasks(task)"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <div v-if="task.done" class="text-left task-done">{{ task.title }}</div>
              <v-text-field
                v-else-if="editedTaskIndex === index"
                class="text-left"
                autofocus
                hide-details
                height="16px"
                v-model="task.title"
                @input="saveTasks"
              ></v-text-field>
              <div v-else class="text-left">
                {{ task.title }}
                <v-btn icon @click="task.doing=!task.doing;saveTasks()" title="Is doing">
                  <v-progress-circular :indeterminate="task.doing" :value="0" size="20"></v-progress-circular>
                </v-btn>
              </div>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                :disabled="task.done"
                icon
                @click="editedTaskIndex !== index ? editedTaskIndex = index: editedTaskIndex = -1"
                title="Toggle edit mode"
              >
                <v-icon small>mdi-pencil</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action>
              <v-btn icon @click="removeTask(index)" title="Delete">
                <v-icon small>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-text-field v-model="newTask" label="What's to do?" @keypress.enter="addTask"></v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Storage } from "@/storage";

export default Vue.extend({
  props: ["title"],
  data: () => ({
    newTask: "",
    tasks: new Array<{ title: string; doing: boolean; done: boolean }>(),
    editedTaskIndex: -1
  }),
  mounted() {
    this.tasks = Storage.read("tasks", this.tasks);
  },
  methods: {
    addTask(): void {
      if (this.newTask.trim().length > 0) {
        this.tasks.push({ title: this.newTask, doing: false, done: false });
        this.newTask = "";
        this.saveTasks();
      }
    },
    removeCompletedTasks(): void {
      let i: number;
      for (i = this.tasks.length - 1; i >= 0; i--) {
        if (this.tasks[i].done) {
          this.tasks.splice(i, 1);
        }
      }
      this.saveTasks();
    },
    removeTask(index: number): void {
      this.tasks.splice(index, 1);
      this.saveTasks();
    },
    saveTasks(taskDone?: { doing: boolean; done: boolean }): void {
      if (taskDone !== undefined) {
        if (taskDone.done && taskDone.doing) {
          taskDone.doing = false;
        }
      }
      Storage.write("tasks", this.tasks);
    }
  }
});
</script>

<style scoped>
.task-done {
  text-decoration: line-through;
}
</style>
