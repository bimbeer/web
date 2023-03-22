<template>
  <CFlex
    align="center"
    p="0.25rem"
    justify="space-between"
    px="1rem"
    bg="gray.800"
    mb="1rem"
    w="100%"
  >
    <CBox flex="1">
      <NavigationDrawer />
    </CBox>
    <CLink as="router-link" to="/" flex="1" _hover="">
      <CFlex justify="center" gap="0.5rem">
        <CIcon color="yellow.200" size="1.5rem" name="beer-mug-empty" />
        <CText>Bimbeer</CText>
      </CFlex>
    </CLink>

    <CBox flex="1"></CBox>
  </CFlex>
</template>

<script>
import NavigationDrawer from "./NavigationDrawer.vue";

import { CFlex, CBox, CIcon, CText, CLink } from "@chakra-ui/vue";

export default {
  name: "Header",
  components: {
    NavigationDrawer,
    CFlex,
    CLink,
    CBox,
    CIcon,
    CText,
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
  width: 3rem;
  height: 3rem;
}
</style>
