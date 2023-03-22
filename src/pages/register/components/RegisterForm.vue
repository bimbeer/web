<template>
  <CBox w="100%">
    <Card>
      <template #heading> Zarejestruj się </template>
      <template #body>
        <CBox mb="1rem">
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

        <CBox mb="1rem">
          <CFormControl
            id="password-replay"
            :isInvalid="errors.passwordReplay.status"
          >
            <CFormLabel>Powtórz hasło</CFormLabel>
            <CInput
              v-model="form.passwordReplay"
              type="password"
              placeholder="Powtórz hasło"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage>{{
              errors.passwordReplay.message
            }}</CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox my="2rem" w="100%">
          <CButton
            w="100%"
            variant-color="yellow"
            rounded="1rem"
            size="lg"
            variant="solid"
            :disabled="
              registerButtonDisable.email ||
              registerButtonDisable.password ||
              registerButtonDisable.passwordReplay
            "
          >
            Zarejestruj się
          </CButton>
        </CBox>
        <CBox mt="2rem">
          <CText>
            Masz już konto? Zaloguj się
            <CLink as="router-link" to="/login" color="yellow.200">
              tutaj
            </CLink>
            .
          </CText>
        </CBox>
      </template></Card
    >
  </CBox>
</template>

<script>
import {
  CBox,
  CInput,
  CFormControl,
  CFormLabel,
  CButton,
  CText,
  CLink,
  CFormErrorMessage,
} from "@chakra-ui/vue";

import Card from "@/components/Card.vue";

export default {
  name: "RegisterForm",
  components: {
    CText,
    CLink,
    CButton,
    CBox,
    CInput,
    CFormControl,
    CFormLabel,
    CFormErrorMessage,
    Card,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
        passwordReplay: "",
      },

      errors: {
        password: { status: false, message: "" },
        passwordReplay: { status: false, message: "" },
        email: { status: false, message: "" },
      },

      registerButtonDisable: {
        email: true,
        password: true,
        passwordReplay: true,
      },
    };
  },

  methods: {
    verifyEmail() {
      if (!this.form.email.includes("@") || !this.form.email.includes(".")) {
        this.registerButtonDisable.email = true;
        this.errors.email.status = true;
        this.errors.email.message = "Nieprawidłowy adres email";
        return;
      }
      this.errors.email.status = false;
      this.registerButtonDisable.email = false;
    },

    verifyPassword() {
      if (this.form.password.length < 8) {
        this.registerButtonDisable.password = true;
        this.errors.password.status = true;
        this.errors.password.message = "Hasło musi posiadać minimum 8 znaków";
        return;
      }
      this.errors.password.status = false;
      this.registerButtonDisable.password = false;
    },

    verifyPasswordReplay() {
      if (
        this.form.password !== this.form.passwordReplay &&
        this.form.passwordReplay.length > 0
      ) {
        this.registerButtonDisable.passwordReplay = true;
        this.errors.passwordReplay.status = true;
        this.errors.passwordReplay.message = "Hasła się nie zgadzają";
        return;
      }
      this.errors.passwordReplay.status = false;
      this.registerButtonDisable.passwordReplay = false;
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
    "form.passwordReplay": {
      handler() {
        this.verifyPasswordReplay();
      },
    },
  },
};
</script>

<style></style>
