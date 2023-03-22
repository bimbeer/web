// imports
import Vue from "vue";
import VueRouter from "vue-router";
import Chakra, {
  CThemeProvider,
  CColorModeProvider,
  CBox,
  CReset,
} from "@chakra-ui/vue";

import {
  faBars,
  faHeart,
  faXmark,
  faChevronLeft,
  faChevronRight,
  faBeerMugEmpty,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";
import routes from "./routes";

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

Vue.use(VueRouter);

Vue.use(Chakra, {
  extendTheme: {
    fonts: {
      heading: '"Poppins"',
      body: '"Poppins"',
      mono: '"Poppins"',
    },
  },
  icons: {
    iconPack: "fa",
    iconSet: {
      faBars,
      faXmark,
      faHeart,
      faChevronLeft,
      faChevronRight,
      faBeerMugEmpty,
    },
  },
});

new Vue({
  router: router,
  render(h) {
    return h(CThemeProvider, [
      h(CColorModeProvider, [h(CBox, [h(CReset), h(App)])]),
    ]);
  },
}).$mount("#app");
