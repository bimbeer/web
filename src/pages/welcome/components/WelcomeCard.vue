<template>
  <CFlex justify="center" align="center">
    <Card>
      <template #heading>
        Welcome to the Bimbeer website where you will find the perfect companion
        for tasting the brewery.
      </template>
      <template #body>
        <CStack my="1rem">
          <CLink as="router-link" to="/login" :_hover="{}">
            <CButton variant-color="yellow" rounded="1rem" size="lg" w="100%">
              Login
            </CButton>
          </CLink>
          <CLink as="router-link" to="/register" :_hover="{}">
            <CButton
              rounded="1rem"
              size="lg"
              variant-color="yellow"
              variant="outline"
              w="100%"
              >Signup</CButton
            >
          </CLink>
          <CBox pb="1rem" />
          <CDivider />
          <CText fontSize="sm" textAlign="center">or</CText>
          <CDivider />
          <CBox pb="1rem" />
          <CLink href="/?" is-external :_hover="{}">
            <CButton
              variant-color="yellow"
              variant="outline"
              rounded="1rem"
              size="lg"
              w="100%"
              >Download for PC</CButton
            >
          </CLink>
          <CLink href="/?" is-external :_hover="{}">
            <CButton
              rounded="1rem"
              size="lg"
              variant-color="yellow"
              variant="outline"
              w="100%"
              >Download for smartphone</CButton
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
