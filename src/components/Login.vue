<template>
  <CFlex w="100%" minH="100vh" align="center" justify="center">
    <CBox
      borderColor="yellow.400"
      borderWidth="1px"
      bg="gray.800"
      p="3rem"
      rounded="0.5rem"
      minW="400px"
    >
      <CHeading as="h1" size="md" mb="2rem">Zaloguj się</CHeading>
      <CFormControl>
        <CFormLabel for="email">Email</CFormLabel>
        <CInput
          borderColor="yellow.400"
          v-model="email"
          type="email"
          id="email"
          mb="2rem"
        />

        <CFormLabel for="password">Hasło</CFormLabel>
        <CInput
          borderColor="yellow.400"
          v-model="password"
          type="password"
          id="password"
          mb="2rem"
        />

        <CButton variant-color="yellow" variant="outline">Zaloguj</CButton>
      </CFormControl>
    </CBox>
  </CFlex>
</template>

<script>
import {
  CButton,
  CFlex,
  CBox,
  CFormControl,
  CFormLabel,
  CInput,
  CHeading,
} from "@chakra-ui/vue";

export default {
  name: "Login",
  components: {
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
