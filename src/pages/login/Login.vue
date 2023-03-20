<template>
  <CDarkMode>
    <div>
      <LoginHeader />
      <LoginForm />
    </div>
  </CDarkMode>
</template>

<script>
import { CDarkMode } from "@chakra-ui/vue";

import LoginForm from "./components/LoginForm.vue";
import LoginHeader from "./components/LoginHeader.vue";
export default {
  components: {
    CDarkMode,
    LoginForm,
    LoginHeader,
  },
};
</script>

<style></style>
