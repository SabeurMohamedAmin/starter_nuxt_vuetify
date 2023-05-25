// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
//import "vuetify/styles";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import myTheme from "@/plugins/themes/simpleTheme.js";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    directives,
    components,
    ssr: true,
    treeShake: true,
    theme: {
      defaultTheme: "myTheme",
      themes: {
        myTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
