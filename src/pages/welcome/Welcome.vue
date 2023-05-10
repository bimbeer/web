<template>
  <div>
    <WelcomeCard />
  </div>
</template>

<script>
import WelcomeCard from "./components/WelcomeCard.vue";
import { getItem } from "@/helpers/localStorage";

export default {
  name: "Welcome",
  components: {
    WelcomeCard,
  },
  created() {
    if (getItem("myProfile")) {
      this.$router.push({ name: "main/recs" });
      return;
    }

    if (getItem("user")) {
      this.$router.push({ name: "main/profile" });
      return;
    }
  },
};
</script>

<style></style>
