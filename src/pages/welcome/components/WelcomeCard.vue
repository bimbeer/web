<template>
  <CBox w="100%" minH="100%">
    <Card>
      <template #heading>
        Witaj na stronie Bimbeer gdzie znajdziesz idealnego kompana do
        smakowania browaru.
      </template>
      <template #body>
        <CStack spacing="1rem" align="center" w="100%">
          <CLink as="router-link" to="/login">
            <CButton
              maxW="200px"
              variant-color="yellow"
              variant="solid"
              rounded="2rem"
              >Zaloguj się
            </CButton>
          </CLink>
          <CLink as="router-link" to="/register">
            <CButton
              maxW="200px"
              variant-color="yellow"
              variant="outline"
              rounded="2rem"
              >Zarejestruj się</CButton
            >
          </CLink>
          <CDivider w="100%" />
          <CText fontSize="sm">lub</CText>
          <CDivider w="100%" />
          <CLink href="/?" is-external>
            <CButton
              maxW="200px"
              variant-color="yellow"
              variant="outline"
              rounded="2rem"
              >Pobierz na komputer</CButton
            >
          </CLink>
          <CLink href="/?" is-external>
            <CButton
              maxW="200px"
              variant-color="yellow"
              variant="outline"
              rounded="2rem"
              >Pobierz na smartfon</CButton
            >
          </CLink>
        </CStack>
      </template>
    </Card>
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
  CLink,
} from "@chakra-ui/vue";

import Card from "@/components/Card.vue";

export default {
  name: "WelcomeCard",
  components: {
    Card,
    CLink,
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
