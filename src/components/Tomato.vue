<template>
  <div class="text-center">
    <v-row dense>
      <v-col>
        <v-img
          v-if="timerId === 0"
          :src="require('../assets/tomato.png')"
          class="my-3"
          contain
          height="120"
        ></v-img>
        <v-progress-circular
          v-else
          :rotate="360"
          :size="145"
          :width="25"
          :value="position"
          :color="$vuetify.theme.themes.light.primary"
        >{{ Math.floor(position) }}%</v-progress-circular>
      </v-col>
    </v-row>
    <v-row dense v-show="isPomodoroEnded">
      <v-col>
        <p>{{ whichPomodoroHasBeenEnded }}</p>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-form @submit.prevent>
          <v-text-field
            type="number"
            label="Duration"
            v-model.number="duration"
            :disabled="timerId !== 0"
            ref="refToDuration"
            :rules="[v => v.length > 0 || (parseInt(v, 10) > 2 && parseInt(v, 10) < 31) || 'Duration must be a valid number greater than 2 and lesser than 31!']"
          ></v-text-field>
        </v-form>
      </v-col>
      <v-col cols="1">
        <v-progress-circular
          v-show="timerId != 0"
          indeterminate
          :color="$vuetify.theme.themes.light.primary"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-btn small @click="start" :disabled="timerId !== 0" title="Start">
          <v-icon>mdi-play</v-icon>
        </v-btn>
        <v-btn small @click="pause" :disabled="timerId === 0" title="Pause">
          <v-icon>mdi-pause</v-icon>
        </v-btn>
        <v-btn small @click="stop" :disabled="timerId === 0" title="Stop">
          <v-icon>mdi-stop</v-icon>
        </v-btn>
        <v-btn small @click="next" :disabled="timerId !== 0" title="Next">
          <v-icon>mdi-skip-next</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-container>
          <v-row>
            <v-col v-for="p in pomodorosCounter" :key="p" cols="3">
              <v-img
                :src="require('../assets/tomato.png')"
                class="my-3"
                contain
                :height="(p*10) + 15"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-form @submit.prevent>
          <v-row>
            <v-col cols="4" align="center">
              <v-text-field style="width:65px" disabled label="Pomodoro" :value="pomodoro"></v-text-field>
            </v-col>
            <v-col cols="4" align="center">
              <v-text-field
                style="width:65px"
                type="number"
                label="Short brake"
                v-model.number="shortBrake"
                :disabled="timerId !== 0"
                ref="refToShortBrake"
                :rules="[v => v.length > 0 || (parseInt(v, 10) > 2 && parseInt(v, 10) < 6) || 'Short brake must be a valid number greater than 2 and lesser than 6!']"
              ></v-text-field>
            </v-col>
            <v-col cols="4" align="center">
              <v-text-field
                style="width:65px"
                type="number"
                label="Long brake"
                v-model.number="longBrake"
                :disabled="timerId !== 0"
                ref="refToLongBrake"
                :rules="[v => v.length > 0 || (parseInt(v, 10) > 14 && parseInt(v, 10) < 31) || 'Long brake must be a valid number greater than 14 and lesser than 31!']"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Storage } from "@/storage";

export default Vue.extend({
  data: () => ({
    duration: 25,
    timerId: 0,
    position: 0,
    maxPosition: 100,
    increase: 1,
    isPomodoroEnded: false,
    whichPomodoroHasBeenEnded: "",
    pomodorosCounter: 0,
    audio: new Audio("alarm.mp3"),
    pomodoro: 25,
    shortBrake: 5,
    longBrake: 30
  }),
  mounted() {
    this.pomodorosCounter = Storage.read(
      "pomodorosCounter",
      this.pomodorosCounter
    );
    this.shortBrake = Storage.read("shortBrake", this.shortBrake);
    this.longBrake = Storage.read("longBrake", this.longBrake);
    this.audio.loop = true;
  },
  watch: {
    shortBrake() {
      Storage.write("shortBrake", this.shortBrake);
    },
    longBrake() {
      Storage.write("longBrake", this.longBrake);
    }
  },
  methods: {
    start(): void {
      if (
        (this.$refs.refToDuration as any).validate() &&
        (this.$refs.refToShortBrake as any).validate() &&
        (this.$refs.refToLongBrake as any).validate()
      ) {
        if (this.isPomodoroEnded === true) {
          this.position = 0;
          this.audio.pause();
          this.audio.currentTime = 0;
        }
        this.isPomodoroEnded = false;
        this.increase = (this.maxPosition * (1 / this.duration)) / 6;
        this.timerId = setInterval(this.frame, 10000);
      }
    },
    pause(): void {
      if (this.timerId !== 0) {
        clearInterval(this.timerId);
        this.timerId = 0;
      }
    },
    stop(): void {
      this.pause();
      this.position = 0;
    },
    frame(): void {
      if (this.position + this.increase > this.maxPosition) {
        this.position = this.maxPosition;
      } else {
        this.position += this.increase;
      }
      if (this.position === this.maxPosition) {
        this.pause();
        if (this.duration === this.pomodoro) {
          this.whichPomodoroHasBeenEnded = "Pomodoro ended!";
        } else if (this.duration === this.shortBrake) {
          this.whichPomodoroHasBeenEnded = "Short brake ended!";
        } else if (this.duration === this.longBrake) {
          this.whichPomodoroHasBeenEnded = "Long brake ended!";
        } else {
          this.whichPomodoroHasBeenEnded = "Timer ended!";
        }
        this.isPomodoroEnded = true;
        if (this.duration === this.pomodoro) {
          this.pomodorosIncrease(false);
        } else if (this.duration === this.longBrake) {
          this.pomodorosReset();
        }
        this.audio.play();
      }
    },
    next(event: any): void {
      if (this.isPomodoroEnded === true) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
      if (this.timerId === 0) {
        if (event.ctrlKey) {
          this.pomodorosIncrease(true);
        } else if (this.duration === this.pomodoro) {
          if (this.pomodorosCounter === 4) {
            this.duration = this.longBrake;
          } else {
            this.duration = this.shortBrake;
          }
        } else {
          this.duration = this.pomodoro;
        }
      }
    },
    pomodorosIncrease(byClick: boolean): void {
      if (this.pomodorosCounter < 4) {
        this.pomodorosCounter++;
      } else {
        this.pomodorosCounter = byClick ? 0 : 1;
      }
      this.savePomodorosCounter();
    },
    pomodorosReset(): void {
      this.pomodorosCounter = 0;
      this.savePomodorosCounter();
    },
    savePomodorosCounter(): void {
      Storage.write("pomodorosCounter", this.pomodorosCounter);
    }
  }
});
</script>
