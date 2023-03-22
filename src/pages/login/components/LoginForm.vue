<template>
  <Card>
    <template #heading> Zaloguj się </template>
    <template #body>
      <CBox mb="2rem">
        <CFormControl id="email" :isInvalid="errors.email.status">
          <CFormLabel>Email</CFormLabel>
          <CInput
            v-model="form.email"
            type="email"
            placeholder="Wpisz adres email"
            p="1rem"
            rounded="1rem"
            mb="0.25rem"
            size="lg"
          />
          <CFormErrorMessage>{{ errors.email.message }}</CFormErrorMessage>
        </CFormControl>
      </CBox>

      <CBox mb="1rem">
        <CFormControl id="password" :isInvalid="errors.password.status">
          <CFormLabel>Hasło</CFormLabel>
          <CInput
            v-model="form.password"
            type="password"
            placeholder="Wpisz hasło"
            p="1rem"
            rounded="1rem"
            mb="0.25rem"
            size="lg"
          />
          <CFormErrorMessage>{{ errors.password.message }}</CFormErrorMessage>
        </CFormControl>
      </CBox>

      <CStack>
        <CButton
          variant-color="yellow"
          rounded="1rem"
          size="lg"
          variant="solid"
          :disabled="loginButtonDisable.email || loginButtonDisable.password"
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
  CFormErrorMessage,
} from "@chakra-ui/vue";

export default {
  name: "LoginForm",
  components: {
    Card,
    CStack,
    CFormErrorMessage,
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
      form: {
        email: "",
        password: "",
      },
      errors: {
        email: { status: false, message: "" },
        password: { status: false, message: "" },
      },
      loginButtonDisable: {
        email: true,
        password: true,
      },
    };
  },

  inject: [],

  methods: {
    verifyEmail() {
      if (!this.form.email.includes("@") || !this.form.email.includes(".")) {
        this.loginButtonDisable.email = true;
        this.errors.email.status = true;
        this.errors.email.message = "Nieprawidłowy adres email";
        return;
      }
      this.loginButtonDisable.email = false;
      this.errors.email.status = false;
    },

    verifyPassword() {
      if (this.form.password.length < 8) {
        this.loginButtonDisable.password = true;
        this.errors.password.status = true;
        this.errors.password.message = "Hasło musi posiadać minimum 8 znaków";
        return;
      }
      this.loginButtonDisable.password = false;
      this.errors.password.status = false;
    },
  },

  watch: {
    "form.email": {
      handler() {
        this.verifyEmail();
      },
    },
    "form.password": {
      handler() {
        this.verifyPassword();
      },
    },
  },
};
</script>

<style></style>
