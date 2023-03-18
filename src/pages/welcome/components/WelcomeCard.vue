<template>
  <CBox w="100%" minH="100%">
    <CFlex justify="center" align="center" minH="100%">
      <CStack maxW="400px" p="2rem" borderRadius="1rem" bg="gray.800">
        <CHeading size="lg" pb="2rem" textAlign="center">
          Witaj na stronie Bimbeer gdzie znajdziesz idealnego kompana do
          smakowania browaru.
        </CHeading>
        <CStack spacing="1rem" align="center" w="100%">
          <CButton
            maxW="200px"
            variant-color="yellow"
            variant="solid"
            rounded="2rem"
            >Zaloguj się
          </CButton>
          <CButton
            maxW="200px"
            variant-color="yellow"
            variant="outline"
            rounded="2rem"
            >Zarejestruj się</CButton
          >

          <CDivider w="100%" />
          <CText fontSize="sm">lub</CText>
          <CDivider w="100%" />
          <CButton
            maxW="200px"
            variant-color="yellow"
            variant="outline"
            rounded="2rem"
            >Pobierz na komputer</CButton
          >
          <CButton
            maxW="200px"
            variant-color="yellow"
            variant="outline"
            rounded="2rem"
            >Pobierz na smartfon</CButton
          >
        </CStack>
      </CStack>
    </CFlex>
  </CBox>
</template>

<script>
import {
  CBox,
  CFlex,
  CButton,
  CStack,
  CText,
  CHeading,
  CDarkMode,
  CDivider,
} from "@chakra-ui/vue";

export default {
  name: "WelcomeCard",
  components: {
    CBox,
    CFlex,
    CButton,
    CStack,
    CText,
    CHeading,
    CDarkMode,
    CDivider,
  },
};
</script>

<style></style>
