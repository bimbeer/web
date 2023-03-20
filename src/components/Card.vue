<template>
  <CFlex justify="center" align="center" w="100%">
    <CBox maxW="400px" w="100%">
      <CStack p="2rem" borderRadius="1rem" bg="gray.800">
        <CHeading size="lg" pb="2rem" textAlign="center">
          <slot name="heading"></slot>
        </CHeading>
        <CBox>
          <slot name="body"></slot>
        </CBox>
      </CStack>
    </CBox>
  </CFlex>
</template>

<script>
import { CBox, CFlex, CHeading, CStack } from "@chakra-ui/vue";
export default {
  name: "Card",
  components: {
    CBox,
    CFlex,
    CHeading,
    CStack,
  },
};
</script>

<style></style>
