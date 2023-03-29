<template>
  <CFlex justify="center">
    <Card>
      <template #heading> Profile location </template>
      <template #body>
        <ProfileLocationCity :form="form" :errors="errors" />

        <CBox mb="1rem">
          <CFormControl>
            <CSwitch
              color="yellow"
              mr="1rem"
              @change="form.local = !form.local"
              :defaultValue="form.local"
            />
            <CFormLabel v-if="form.local">Search profile in radius</CFormLabel>
            <CFormLabel v-else>Search profile globaly</CFormLabel>
          </CFormControl>
          <CCollapse mt="1rem" :isOpen="form.local" v-if="removeFirstShow">
            <CFormControl id="range">
              <CFormLabel>
                Radius <strong>{{ form.range }}</strong> km
              </CFormLabel>
              <CBox px="1rem">
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
              </CBox>
            </CFormControl>
          </CCollapse>
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
            @click="handleNextStep"
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
import Validator from "@/helpers/Validator";

import {
  CCollapse,
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
  CSwitch,
} from "@chakra-ui/vue";

export default {
  components: {
    CCollapse,
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
    CSwitch,
  },

  props: ["form", "nextStep", "prevStep"],

  mounted() {
    this.form.range = 50;
  },

  data() {
    return {
      validator: new Validator(),
      removeFirstShow: false,
      errors: {
        city: {
          status: false,
          message: "",
        },
      },
    };
  },

  methods: {
    handleNextStep() {
      if (this.validator.isEmpty(this.form.city.label)) {
        this.errors.city.status = true;
        this.errors.city.message = "City can't be empty";
        return;
      }
      this.nextStep();
    },
  },

  watch: {
    "form.local": {
      handler() {
        if (!this.removeFirstShow) {
          this.removeFirstShow = true;
        }
      },
    },
  },
};
</script>

<style></style>
