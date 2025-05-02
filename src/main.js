import './styles/main.css';
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify setup
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myTheme",
    themes: {
      myTheme: {
        dark: false,
        colors: {
          secondary: "#282828",
          background: "#ffffff",
          //   error: "#f44336",
        },
      },
    },
  },
  defaults: {
    global: {
      style: {
        fontFamily: "Inter, sans-serif !important",
      },
    },
  },
});

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
