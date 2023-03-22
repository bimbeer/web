<template>
  <CBox minH="85vh">
    <router-view></router-view>
  </CBox>
</template>

<script>
import { CBox } from "@chakra-ui/vue";
export default {
  components: {
    CBox,
  },
};
</script>

<style></style>
