<template>
  <div>
    <CBox p="1rem" minW="100%" bg="gray.800" mb="2rem">
      <CFlex justify="center" align="center">
        <MyLogo class="svg" />
      </CFlex>
    </CBox>
  </div>
</template>

<script>
import { CBox, CFlex, CImage } from "@chakra-ui/vue";
import MyLogo from "@/assets/graphics/logo.svg";

export default {
  name: "WelcomeHeader",
  components: {
    CBox,
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
