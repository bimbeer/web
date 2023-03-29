<template>
  <CFlex justify="center">
    <Card>
      <template #heading> Profile location </template>
      <template #body>
        <ProfileLocationCity :form="form" />

        <CBox mb="1rem">
          <CFormControl id="range">
            <CFormLabel
              >Range <strong>{{ form.range }}</strong> km</CFormLabel
            >
            <CSlider
              :step="50"
              color="yellow"
              :min="20"
              :max="200"
              v-model="form.range"
              :defaultValue="form.range"
            >
              <CSliderTrack />
              <CSliderFilledTrack />
              <CSliderThumb />
            </CSlider>
          </CFormControl>
        </CBox>

        <CFlex mb="1rem" direction="row" gap="1rem">
          <CButton
            rounded="1rem"
            size="lg"
            variantColor="yellow"
            variant="outline"
            type="button"
            ariaLabel="back"
            @click="prevStep"
            w="50%"
          >
            Back
          </CButton>
          <CButton
            rounded="1rem"
            size="lg"
            type="button"
            ariaLabel="next"
            @click="finalStep"
            w="50%"
            variantColor="yellow"
          >
            Create
          </CButton>
        </CFlex>
      </template>
    </Card>
  </CFlex>
</template>

<script>
import Card from "@/components/Card.vue";
import ProfileLocationCity from "./ProfileLocationCity.vue";

import {
  CBox,
  CButton,
  CFlex,
  CSlider,
  CSliderTrack,
  CSliderFilledTrack,
  CSliderThumb,
  CFormControl,
  CFormLabel,
  CInput,
} from "@chakra-ui/vue";

export default {
  components: {
    ProfileLocationCity,
    CButton,
    Card,
    CFlex,
    CBox,
    CSlider,
    CSliderTrack,
    CSliderFilledTrack,
    CSliderThumb,
    CFormControl,
    CFormLabel,
    CInput,
  },

  props: ["form", "finalStep", "prevStep"],

  mounted() {
    this.form.range = 50;
  },
};
</script>

<style></style>
