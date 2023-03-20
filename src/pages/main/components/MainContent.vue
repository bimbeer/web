<template>
  <CFlex align="center" justify="center" w="100%" minH="80vh">
    <CBox
      maxW="400px"
      w="100%"
      h="70vh"
      rounded="1rem"
      bg="gray.800"
      :bgImage="require('@/assets/graphics/test.png')"
      bgPos="top"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <CFlex
        direction="column"
        rounded="1rem"
        h="100%"
        bgGradient="linear(to-b, whiteAlpha.50 60%, blackAlpha.900 100%)"
        justify="space-between"
      >
        <CBox></CBox>
        <CStack p="1rem">
          <CHeading size="md"
            >{ profileName }, { profileAge }
            <CText fontSize="xs">{ profileCity } </CText></CHeading
          >

          <CText
            fontSize="xs"
            lineHeight="1.2rem"
            :maxH="showMore ? '' : '2.4rem'"
            :overflow="showMore ? '' : 'hidden'"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            obcaecati quibusdam impedit, dolore nostrum possimus! Non quam
            reiciendis unde, labore blanditiis tenetur, perferendis modi
            impedit, soluta error officiis iusto cupiditate.
          </CText>
          <CButton size="sm" @click="showMore = !showMore">{{
            showMore ? "mniej" : "wiecej"
          }}</CButton>
        </CStack>
      </CFlex>
    </CBox>
  </CFlex>
</template>

<script>
import { CFlex, CBox, CStack, CText, CButton } from "@chakra-ui/vue";
export default {
  components: {
    CFlex,
    CText,
    CBox,
    CStack,
    CButton,
  },
  data() {
    return {
      showMore: false,
    };
  },
};
</script>

<style></style>
