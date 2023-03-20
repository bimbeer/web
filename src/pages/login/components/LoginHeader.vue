<template>
  <div>
    <CBox p="1rem" minW="100%" bg="gray.800" mb="2rem">
      <CFlex justify="center" align="center">
        <CLink as="router-link" to="/"><MyLogo class="svg" /></CLink>
      </CFlex>
    </CBox>
  </div>
</template>

<script>
import { CBox, CFlex, CImage, CLink } from "@chakra-ui/vue";
import MyLogo from "@/assets/graphics/logo.svg";

export default {
  name: "LoginHeader",
  components: {
    CBox,
    CLink,
    CFlex,
    CImage,
    MyLogo,
  },
};
</script>

<style scoped>
.svg {
  width: 6rem;
  height: 6rem;
}
</style>
