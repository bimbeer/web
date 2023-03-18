<template>
  <CBox bg="gray.800" minW="100%" p="1rem" mt="2rem">
    <CFlex align="center" justify="center">
      <CText> footer </CText>
    </CFlex>
  </CBox>
</template>

<script>
import { CBox, CText, CFlex } from "@chakra-ui/vue";
export default {
  name: "WelcomeFooter",
  components: {
    CBox,
    CText,
    CFlex,
  },
};
</script>

<style></style>
