<template>
  <CDarkMode>
    <div>
      <WelcomeHeader />
      <WelcomeCard />
      <WelcomeFooter />
    </div>
  </CDarkMode>
</template>

<script>
import { CDarkMode } from "@chakra-ui/vue";

import WelcomeCard from "./components/WelcomeCard.vue";
import WelcomeHeader from "./components/WelcomeHeader.vue";
import WelcomeFooter from "./components/WelcomeFooter.vue";

export default {
  name: "Welcome",
  components: {
    WelcomeHeader,
    WelcomeCard,
    WelcomeFooter,
    CDarkMode,
  },
};
</script>

<style></style>
