<template>
  <CFlex justify="center" align="center">
    <Card>
      <template #heading> Login </template>
      <template #body>
        <CBox mb="1rem">
          <CFormControl id="email" :isInvalid="!errors.email.status">
            <CFormLabel>Email</CFormLabel>
            <CInput
              v-model="form.email"
              type="email"
              placeholder="Enter your email address"
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
            <CFormLabel>Password</CFormLabel>
            <CInput
              v-model="form.password"
              type="password"
              placeholder="Enter password"
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
            Login
          </CButton>
          <CBox p="0.5rem"></CBox>
          <CButton
            variant-color="yellow"
            rounded="1rem"
            size="lg"
            variant="outline"
            @click="signInWithGoogle"
          >
            Login with Google
          </CButton>

        </CStack>
        <CBox mt="2rem">
          <CText>
            You do not have an account? Signup
            <CLink as="router-link" to="/register" color="yellow.200">
              here
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


    loginButtonDisableSet() {
      if (!this.form.email || !this.form.password) {
        this.loginButtonDisable = true;
        return;
      }

      if (!this.errors.email.status) {
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
        this.loginButtonDisableSet();
      },
    },

  },
};
</script>

<style></style>
