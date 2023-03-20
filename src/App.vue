<template>
  <CBox minH="100vh" minW="100%" v-bind="mainStyles[colorMode]">
    <router-view></router-view>
  </CBox>
</template>

<script>
import { CBox } from "@chakra-ui/vue";
import Welcome from "./pages/welcome/Welcome.vue";

export default {
  name: "App",
  components: {
    CBox,
    Welcome,
  },
  data() {
    return {
      mainStyles: {
        selectedMode: "",
        dark: {
          bg: "gray.900",
          color: "whiteAlpha.900",
        },
        light: {
          bg: "white",
          color: "gray.900",
        },
      },
    };
  },

  inject: ["$chakraColorMode", "$toggleColorMode"],

  provide() {
    return {
      mainStyles: this.mainStyles,
    };
  },

  methods: {},

  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
  },

  mounted() {
    if (this.colorMode === "light") {
      this.$toggleColorMode();
      this.mainStyles.selectedMode = "dark";
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}
</style>
