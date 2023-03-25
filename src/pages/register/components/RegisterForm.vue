<template>
  <CFlex justify="center" align="center">
    <Card>
      <template #heading> Zarejestruj się </template>
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

        <CBox mb="1rem">
          <CFormControl
            id="password-replay"
            :isInvalid="!errors.passwordReplay.status"
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
            <CFormErrorMessage
              v-for="message in errors.passwordReplay.messageArray"
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
            :disabled="registerButtonDisable"
          >
            Zarejestruj się
          </CButton>
        </CStack>
        <CText>
          Masz już konto? Zaloguj się
          <CLink as="router-link" to="/login" color="yellow.200"> tutaj </CLink>
          .
        </CText>
      </template>
    </Card>
  </CFlex>
</template>

<script>
import {
  CBox,
  CFlex,
  CInput,
  CFormControl,
  CFormLabel,
  CButton,
  CText,
  CLink,
  CFormErrorMessage,
  CStack,
} from "@chakra-ui/vue";

import Card from "@/components/Card.vue";
import Validator from "@/helpers/Validator";

export default {
  name: "RegisterForm",
  components: {
    CStack,
    CText,
    CLink,
    CButton,
    CBox,
    CInput,
    CFormControl,
    CFormLabel,
    CFormErrorMessage,
    CFlex,
    Card,
  },
  data() {
    return {
      validator: new Validator(),
      form: {
        email: "",
        password: "",
        passwordReplay: "",
      },

      errors: {
        password: { status: true },
        passwordReplay: { status: true },
        email: { status: true },
      },

      registerButtonDisable: true,
    };
  },

  methods: {
    verifyEmail() {
      this.errors.email = this.validator.email(this.form.email);
    },

    verifyPassword() {
      this.errors.password = this.validator.password(this.form.password);
    },

    verifyPasswordReplay() {
      this.errors.passwordReplay = this.validator.passwordEqual(
        this.form.password,
        this.form.passwordReplay
      );
    },

    registerButtonDisableSet() {
      if (
        !this.form.email ||
        !this.form.password ||
        !this.form.passwordReplay
      ) {
        this.registerButtonDisable = true;
        return;
      }
      if (
        !this.errors.email.status ||
        !this.errors.password.status ||
        !this.errors.passwordReplay.status
      ) {
        this.registerButtonDisable = true;
        return;
      }

      this.registerButtonDisable = false;
    },
  },

  watch: {
    "form.email": {
      handler() {
        this.verifyEmail();
        this.registerButtonDisableSet();
      },
    },
    "form.password": {
      handler() {
        this.verifyPassword();
        this.registerButtonDisableSet();
      },
    },
    "form.passwordReplay": {
      handler() {
        this.verifyPasswordReplay();
        this.registerButtonDisableSet();
      },
    },
  },
};
</script>

<style></style>
