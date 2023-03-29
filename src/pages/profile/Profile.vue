<template>
  <div>
    <!-- <ProfileInfo :form="form" :nextStep="nextStep" v-if="step === 1" />
    <ProfileAvatar
      :form="form"
      :nextStep="nextStep"
      :prevStep="prevStep"
      v-if="step === 2"
    />
    <ProfileBeers
      :form="form"
      :nextStep="nextStep"
      :prevStep="prevStep"
      v-if="step === 3"
    /> -->
    <ProfileLocation
      :form="form"
      :finalStep="finalStep"
      :prevStep="prevStep"
      v-if="step === 1"
    />
  </div>
</template>

<script>
import ProfileInfo from "./components/ProfileInfo.vue";
import ProfileAvatar from "./components/ProfileAvatar.vue";
import ProfileBeers from "./components/ProfileBeers.vue";
import ProfileLocation from "./components/ProfileLocation.vue";
import useCoordinatesCalculate from "@/hooks/useCoordinatesCalculate";

export default {
  components: {
    ProfileInfo,
    ProfileAvatar,
    ProfileBeers,
    ProfileLocation,
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
        range: null,
        avatar: "",
        beers: [],
        city: {
          label: "",
          position: {
            lat: null,
            lng: null,
          },
        },
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

    finalStep() {
      console.log(
        this.coordinatesCalculate(
          this.form.city.position.lat,
          this.form.city.position.lng,
          this.form.range
        )
      );
    },
  },

  mounted() {
    this.coordinatesCalculate = useCoordinatesCalculate();
  },
};
</script>

<style></style>
