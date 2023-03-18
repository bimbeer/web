<template>
  <div class="container">
    <CBox v-bind="mainStyles[colorMode]">
      <Login />
    </CBox>
  </div>
</template>

<script>
import { CBox } from "@chakra-ui/vue";

import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    CBox,
    Login,
  },
  data() {
    return {
      mainStyles: {
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

  methods: {},

  computed: {
    colorMode() {
      return this.$chakraColorMode();
    },
  },

  mounted() {
    this.$toggleColorMode();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
</style>
