<template>
  <CFlex justify="center" align="center" direction="column">
    <CardProfile :profile="profile" v-if="profile && show" />
    <CBox v-else>No new profiles</CBox>
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
import { checkMatch, getAllLike } from "@/firebase/matchFirebase.js";
import { getItem } from "@/helpers/localStorage.js";
import { getPairsProfiles } from "@/firebase/pairFirebase.js";

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
      show: true,
    };
  },

  methods: {
    checkMatch,
    getItem,
    getAllLike,
    getPairsProfiles,
    nextProfile() {
      if (this.profileNumber < this.profiles.length - 1) {
        this.profileNumber++;
        this.profile = this.profiles[this.profileNumber];
        return;
      } else {
        this.show = false;
      }
    },
    showToast() {
      this.$toast({
        title: "We have a beer buddy!",
        description: 'You can check it out in the "Beer buddys" tab',
        status: "info",
        duration: 5000,
      });
    },
    async like() {
      const myProfile = getItem("user");
      const match = await checkMatch(myProfile.uid, this.profile.id, "like");
      console.log(match);
      if (match) this.showToast();
      this.nextProfile();
      console.log("Like");
    },
    async notLike() {
      const myProfile = getItem("user");
      const match = await checkMatch(myProfile.uid, this.profile.id, "dislike");
      this.nextProfile();
      console.log("NotLike");
    },
  },

  async mounted() {
    this.profiles = await getProfiles();
    this.profile = this.profiles[this.profileNumber];
  },
};
</script>

<style></style>
