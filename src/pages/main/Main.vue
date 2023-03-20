<template>
  <CStack>
    <MainDrawer :pathname="pathname" />
    <!-- <MainContent v-if="pathname === '/main'" /> -->
    <div v-if="pathname === '/main'">Main page</div>
    <router-view v-else></router-view>
  </CStack>
</template>

<script>
import MainContent from "./components/MainContent.vue";
import MainDrawer from "./components/MainDrawer.vue";

import { CStack, CBox } from "@chakra-ui/vue";

export default {
  components: {
    MainContent,
    MainDrawer,
    CStack,
    CBox,
  },
  data() {
    return {
      pathname: this.$route.path,
    };
  },
  methods: {},

  watch: {
    "$route.path": function (newPath, oldPath) {
      this.pathname = newPath;
    },
  },
};
</script>

<style></style>
