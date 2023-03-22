<template>
  <CFlex align="center" p="1rem" bg="gray.800" maxH="15vh">
    <div v-if="logged">
      <NavigationDrawer />
    </div>
    <CFlex w="100%" justify="center">
      <div v-if="!logged">
        <CLink as="router-link" to="/"><MyLogo class="svg" /></CLink>
      </div>
      <div v-else>
        <MyLogo class="svg" />
      </div>
    </CFlex>
  </CFlex>
</template>

<script>
import NavigationDrawer from "./NavigationDrawer.vue";

import { CFlex, CLink } from "@chakra-ui/vue";

import MyLogo from "@/assets/graphics/logo.svg";

export default {
  name: "Header",
  components: {
    CLink,
    NavigationDrawer,
    CFlex,
    MyLogo,
  },

  data() {
    return {
      logged: true,
    };
  },
};
</script>

<style scoped>
.svg {
  width: 5rem;
  height: 5rem;
}
</style>
