<template>
  <CFlex
    align="center"
    p="0.25rem"
    justify="space-between"
    px="1rem"
    bg="gray.800"
    mb="1rem"
  >
    <CBox flex="1">
      <NavigationDrawer />
    </CBox>
    <CLink as="router-link" to="/" _hover="" flex="1">
      <CFlex
        justify="center"
        gap="0.5rem"
        p="1rem"
        @mouseover="showLogoAnimation = true"
        @mouseout="showLogoAnimation = false"
      >
        <CIcon
          color="yellow.200"
          size="1.5rem"
          name="beer-mug-empty"
          transition="all 0.2s"
          :transform="showLogoAnimation ? 'rotate(15deg) scale(1.2)' : ''"
        />
        <CText
          transition="all 0.2s"
          :transform="showLogoAnimation ? 'scale(1.1)' : ''"
          >Bimbeer</CText
        >
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
      showLogoAnimation: false,
    };
  },
  methods: {
    a(event) {
      console.log(event);
    },
  },
};
</script>

<style scoped>
.svg {
  width: 3rem;
  height: 3rem;
}
</style>
