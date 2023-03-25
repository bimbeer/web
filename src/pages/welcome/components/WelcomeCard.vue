<template>
  <CFlex justify="center" align="center">
    <Card>
      <template #heading>
        Witaj na stronie Bimbeer gdzie znajdziesz idealnego kompana do
        smakowania browaru.
      </template>
      <template #body>
        <CStack my="1rem">
          <CLink as="router-link" to="/login" :_hover="{}">
            <CButton variant-color="yellow" rounded="1rem" size="lg" w="100%">
              Zaloguj się
            </CButton>
          </CLink>
          <CLink as="router-link" to="/register" :_hover="{}">
            <CButton
              rounded="1rem"
              size="lg"
              variant-color="yellow"
              variant="outline"
              w="100%"
              >Zarejestruj się</CButton
            >
          </CLink>
          <CBox pb="1rem" />
          <CDivider />
          <CText fontSize="sm" textAlign="center">lub</CText>
          <CDivider />
          <CBox pb="1rem" />
          <CLink href="/?" is-external :_hover="{}">
            <CButton
              variant-color="yellow"
              variant="outline"
              rounded="1rem"
              size="lg"
              w="100%"
              >Pobierz na komputer</CButton
            >
          </CLink>
          <CLink href="/?" is-external :_hover="{}">
            <CButton
              rounded="1rem"
              size="lg"
              variant-color="yellow"
              variant="outline"
              w="100%"
              >Pobierz na smartfon</CButton
            >
          </CLink>
        </CStack>
      </template>
    </Card>
  </CFlex>
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
