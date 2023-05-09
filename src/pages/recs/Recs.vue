<template>
  <CFlex justify="center" align="center" direction="column">
    <CardProfile :profile="profile" v-if="profile" />
    <CBox>
      <CFlex align="center" justify="center" gap="12" p="3rem">
        <CIconButton
          type="button"
          ariaLabel="not-like"
          icon="xmark"
          variant-color="red"
          variant="outline"
          size="lg"
          rounded="50rem"
          transform="scale(1.2)"
          :_hover="{
            transform: 'scale(1.5)',
          }"
          @click.prevent="notLike"
        />
        <CIconButton
          type="button"
          ariaLabel="like"
          icon="heart"
          variant-color="green"
          variant="outline"
          size="lg"
          rounded="50rem"
          transform="scale(1.2)"
          :_hover="{
            transform: 'scale(1.5)',
          }"
          @click.prevent="like"
        />
      </CFlex>
    </CBox>
  </CFlex>
</template>

<script>
import { CBox, CFlex, CStack, CIconButton } from "@chakra-ui/vue";
import CardProfile from "@/components/CardProfile.vue";
import { getProfiles } from "@/firebase/profilesFirebase.js";
import { onBeforeMount } from "vue";

export default {
  name: "Recs",
  components: {
    CBox,
    CFlex,
    CStack,
    CIconButton,
    CardProfile,
  },

  data() {
    return {
      profiles: [],
      profile: null,
      profileNumber: 0,
    };
  },

  methods: {
    nextProfile() {
      if (this.profileNumber < this.profiles.length - 1) {
        this.profileNumber++;
        this.profile = this.profiles[this.profileNumber];
        return;
      }
    },
    like() {
      this.nextProfile();
      console.log("Like");
    },
    notLike() {
      this.nextProfile();

      console.log("NotLike");
    },
    async fetch() {},
  },

  async mounted() {
    this.profiles = await getProfiles();
    this.profile = this.profiles[this.profileNumber];
  },
};
</script>

<style></style>
