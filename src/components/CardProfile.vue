<template>
  <CBox w="100%" h="75vh">
    <CFlex w="100%" h="100%" align="center" justify="center">
      <CBox
        :w="{
          base: `${(70 / 4) * 3}vh`,
        }"
        :h="{
          base: `${70}vh`,
        }"
      >
        <CBox
          w="100%"
          h="100%"
          bg="black"
          rounded="1rem"
          overflow="hidden"
          :bgImage="require('@/assets/graphics/test.png')"
          bgPos="top"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <CFlex h="100%" w="100%" direction="column">
            <CFlex w="100%" p="1rem" gap="2" h="10%">
              <CBox
                maxH="4px"
                borderWidth="2px"
                rounded="10rem"
                borderColor="whiteAlpha.600"
                w="100%"
              />
              <CBox
                maxH="6px"
                borderWidth="3px"
                rounded="10rem"
                borderColor="whiteAlpha.800"
                w="100%"
              />
              <CBox
                maxH="4px"
                borderWidth="2px"
                rounded="10rem"
                borderColor="whiteAlpha.700"
                w="100%"
              />
            </CFlex>
            <CFlex justify="space-between" align="center" h="65%">
              <CIconButton size="lg" bg="none" icon="chevron-left" />
              <CIconButton size="lg" bg="none" icon="chevron-right" />
            </CFlex>

            <CFlex
              p="1rem"
              pt="3rem"
              h="25%"
              bgGradient="linear(to-b, #00000000 0%, blackAlpha.900 70%)"
              direction="column"
              overflow="hidden"
            >
              <CFlex direction="column" gap="1rem">
                <CHeading size="md">{ profileName }, { profileAge }</CHeading>
                <CText font-size="sm">
                  { profileDesc } Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Velit natus fugiat rerum error, deleniti
                  laborum nemo aperiam odio incidunt temporibus repellendus nam
                  pariatur aliquid nisi maxime blanditiis explicabo animi
                  voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Eum nulla voluptatum dolorem quas quidem voluptate,
                  cupiditate repellendus ad sint, vero velit consequatur magnam
                  perferendis ducimus dolores inventore, repellat a similique.
                </CText>
              </CFlex>
            </CFlex>
          </CFlex>
        </CBox>
      </CBox>
    </CFlex>
  </CBox>
</template>

<script>
import {
  CBox,
  CFlex,
  CGrid,
  CGridItem,
  CIconButton,
  CHeading,
  CText,
} from "@chakra-ui/vue";

export default {
  name: "CardProfile",
  components: {
    CHeading,
    CText,
    CFlex,
    CBox,
    CGrid,
    CGridItem,
    CIconButton,
  },

  data() {
    return {
      startDragPos: null,
    };
  },

  methods: {},
};
</script>

<style></style>
