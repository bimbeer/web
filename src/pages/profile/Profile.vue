<template>
  <div>
    <ProfileInfo :form="form" :nextStep="nextStep" v-if="step === 1" />
    <ProfileAvatar
      :form="form"
      :nextStep="nextStep"
      :prevStep="prevStep"
      v-if="step === 2"
    />
  </div>
</template>

<script>
import ProfileInfo from "./components/ProfileInfo.vue";
import ProfileAvatar from "./components/ProfileAvatar.vue";

export default {
  components: {
    ProfileInfo,
    ProfileAvatar,
  },

  data() {
    return {
      step: 1,
      form: {
        name: "",
        lastname: "",
        username: "",
        age: "",
        description: "",
        gender: "",
      },
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
