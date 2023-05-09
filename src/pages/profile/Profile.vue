<template>
  <div>
    <ProfileInfo :profile="profile" :nextStep="nextStep" v-if="step === 1" />
    <ProfileAvatar
      :profile="profile"
      :nextStep="nextStep"
      :prevStep="prevStep"
      v-if="step === 2"
    />
    <ProfileBeers
      :profile="profile"
      :nextStep="nextStep"
      :prevStep="prevStep"
      v-if="step === 3"
    />
    <ProfileLocation
      :profile="profile"
      :nextStep="nextStep"
      :prevStep="prevStep"
      v-if="step === 4"
    />
    <ProfileCreate :profile="profile" v-if="step === 5" />
  </div>
</template>

<script>
import ProfileInfo from "./components/ProfileInfo.vue";
import ProfileAvatar from "./components/ProfileAvatar.vue";
import ProfileBeers from "./components/ProfileBeers.vue";
import ProfileLocation from "./components/ProfileLocation.vue";
import ProfileCreate from "./components/ProfileCreate.vue";
import ProfileModel from "@/models/ProfileModel";

export default {
  components: {
    ProfileInfo,
    ProfileAvatar,
    ProfileBeers,
    ProfileLocation,
    ProfileCreate,
  },

  data() {
    return {
      step: 1,
      profile: new ProfileModel(),
    };
  },

  methods: {
    nextStep() {
      this.step++;
    },

    prevStep() {
      this.step--;
    },
  },
};
</script>

<style></style>
