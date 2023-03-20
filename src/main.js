import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import Chakra, {
  CThemeProvider,
  CColorModeProvider,
  CBox,
  CReset,
} from "@chakra-ui/vue";

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

Vue.use(VueRouter);

// Import Chakra UI Plugin and register it.
Vue.use(Chakra, {
  extendTheme: {
    fonts: {
      heading: '"Poppins"',
      body: '"Poppins"',
      mono: '"Poppins"',
    },
  },
});

new Vue({
  router: router,
  render(h) {
    // Mount our application inside the
    // ThemeProvider and ColorModeProvider components :)

    // You can also do this inside the App.vue file if you wish :)
    // See example at https://github.com/chakra-ui/chakra-ui-vue#usage
    return h(CThemeProvider, [
      h(CColorModeProvider, [h(CBox, [h(CReset), h(App)])]),
    ]);
  },
}).$mount("#app");
