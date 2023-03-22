<template>
  <CStack>
    <!-- <MainContent v-if="pathname === '/main'" /> -->
    <div v-if="pathname === '/main'">Main page</div>
    <router-view v-else></router-view>
  </CStack>
</template>

<script>
import MainContent from "./components/MainContent.vue";

import { CStack, CBox } from "@chakra-ui/vue";

export default {
  components: {
    MainContent,
    CStack,
    CBox,
  },

  methods: {},
};
</script>

<style></style>
