<template>
  <Card>
    <template #heading> Zaloguj się </template>
    <template #body>
      <CFormControl>
        <CFormLabel for="email">Email</CFormLabel>
        <CInput
          v-model="email"
          type="email"
          id="email"
          mb="2rem"
          rounded="2rem"
          placeholder="Wpisz adres email"
        />

        <CFormLabel for="password">Hasło</CFormLabel>
        <CInput
          v-model="password"
          type="password"
          id="password"
          mb="2rem"
          rounded="2rem"
          placeholder="Wpisz hasło"
        />

        <CStack>
          <CButton variant-color="yellow" rounded="2rem" variant="solid">
            Zaloguj
          </CButton>
          <CButton variant-color="yellow" rounded="2rem" variant="outline">
            Zaloguj przez Google
          </CButton>

          <CButton variant-color="yellow" rounded="2rem" variant="outline">
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
