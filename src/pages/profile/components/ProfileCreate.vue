<template>
  <CFlex justify="center">
    <Card>
      <template #heading> Creating your profile </template>
      <template #body>
        <CFlex mb="1rem" align="center" justify="center">
          <CIcon
            name="spinner"
            size="2rem"
            color="yellow.200"
            class="spinner"
          />
        </CFlex>
      </template>
    </Card>
  </CFlex>
</template>

<script>
import Card from "@/components/Card.vue";
import { CBox, CButton, CFlex, CIcon } from "@chakra-ui/vue";
import { addProfile } from "@/firebase/profileFirebase";
import { setItem as myProfile } from "@/helpers/localStorage";

export default {
  components: { CButton, Card, CFlex, CBox, CIcon },
  props: ["profile"],
  mounted() {
    addProfile(this.profile);
    myProfile(this.profile.getAllData(), "myProfile");
    this.$router.push({ path: "/main/recs" });
  },
};
</script>

<style scoped>
.spinner {
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.3) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}
</style>
