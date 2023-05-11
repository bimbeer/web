<template>
  <CFlex justify="center" align="center">
    <Card>
      <template #heading> Zaloguj się </template>
      <template #body>
        <CBox mb="1rem">
          <CFormControl id="email" :isInvalid="!errors.email.status">
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
            <CFormErrorMessage
              v-for="message in errors.email.messageArray"
              :key="message"
            >
              {{ message }}
            </CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="password" :isInvalid="!errors.password.status">
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
            <CFormErrorMessage
              v-for="message in errors.password.messageArray"
              :key="message"
            >
              {{ message }}
            </CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CStack my="2rem">
          <CButton
            variant-color="yellow"
            rounded="1rem"
            size="lg"
            variant="solid"
            :disabled="loginButtonDisable"
            @click="signIn(form.email, form.password)"
          >
            Zaloguj
          </CButton>
          <CBox p="0.5rem"></CBox>
          <CButton
            variant-color="yellow"
            rounded="1rem"
            size="lg"
            variant="outline"
            @click="signInWithGoogle"
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
  </CFlex>
</template>

<script>
import Card from "@/components/Card.vue";
import Validator from "@/helpers/Validator";
import { signInWithGoogle, signIn } from "@/firebase/authFirebase";

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
      validator: new Validator(),
      form: {
        email: "",
        password: "",
      },
      errors: {
        email: { status: true },
        password: { status: true },
      },

      loginButtonDisable: true,
    };
  },

  methods: {
    signInWithGoogle,
    signIn,

    verifyEmail() {
      this.errors.email = this.validator.email(this.form.email);
    },

    verifyPassword() {
      this.errors.password = this.validator.password(this.form.password);
    },
    loginButtonDisableSet() {
      if (!this.form.email || !this.form.password) {
        this.loginButtonDisable = true;
        return;
      }
      if (!this.errors.email.status || !this.errors.password.status) {
        this.loginButtonDisable = true;
        return;
      }

      this.loginButtonDisable = false;
    },
  },

  watch: {
    "form.email": {
      handler() {
        this.verifyEmail();
        this.loginButtonDisableSet();
      },
    },
    "form.password": {
      handler() {
        this.verifyPassword();
        this.loginButtonDisableSet();
      },
    },
  },
};
</script>

<style></style>
