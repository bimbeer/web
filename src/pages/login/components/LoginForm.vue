<template>
  <Card>
    <template #heading> Zaloguj się </template>
    <template #body>
      <CFormControl>
        <CBox mb="2rem">
          <CFormLabel for="email">Email</CFormLabel>
          <CInput
            v-model="email"
            type="email"
            id="email"
            placeholder="Wpisz adres email"
            p="1rem"
            rounded="1rem"
            mb="0.25rem"
            size="lg"
          />
        </CBox>

        <CBox mb="1rem">
          <CFormLabel for="password">Hasło</CFormLabel>
          <CInput
            v-model="password"
            type="password"
            id="password"
            placeholder="Wpisz hasło"
            p="1rem"
            rounded="1rem"
            mb="0.25rem"
            size="lg"
          />
        </CBox>

        <CStack>
          <CButton
            variant-color="yellow"
            rounded="1rem"
            size="lg"
            variant="solid"
          >
            Zaloguj
          </CButton>
          <CBox p="0.5rem"></CBox>
          <CButton
            variant-color="yellow"
            rounded="1rem"
            size="lg"
            variant="outline"
          >
            Zaloguj przez Google
          </CButton>

          <CButton
            variant-color="yellow"
            rounded="1rem"
            size="lg"
            variant="outline"
          >
            Zaloguj przez Facebook
          </CButton>
        </CStack>
      </CFormControl>
      <CBox mt="2rem">
        <CText>
          Nie masz konta? Zarejestruj się
          <CLink as="router-link" to="/register" color="yellow.200">
            tutaj
          </CLink>
          .
        </CText>
      </CBox>
    </template>
  </Card>
</template>

<script>
import Card from "@/components/Card.vue";

import {
  CButton,
  CFlex,
  CBox,
  CFormControl,
  CFormLabel,
  CInput,
  CHeading,
  CStack,
  CLink,
  CText,
} from "@chakra-ui/vue";

export default {
  name: "LoginForm",
  components: {
    Card,
    CStack,
    CLink,
    CText,
    CHeading,
    CButton,
    CFlex,
    CBox,
    CFormControl,
    CFormLabel,
    CInput,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },

  inject: [],

  methods: {},
};
</script>

<style></style>
