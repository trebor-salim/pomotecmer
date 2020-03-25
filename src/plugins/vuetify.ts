import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#800000",
        secondary: "#800000",
        accent: "#800000",
        error: "#ffa500"
      }
    }
  }
});
