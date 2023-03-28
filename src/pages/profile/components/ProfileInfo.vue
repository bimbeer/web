<template>
  <CFlex justify="center">
    <Card>
      <template #heading> Profile information </template>
      <template #body>
        <CBox mb="1rem">
          <CFormControl id="name" :isInvalid="errors.name.status">
            <CFormLabel>Name</CFormLabel>
            <CInput
              v-model="form.name"
              type="text"
              placeholder="Enter name"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage>{{ errors.name.message }}</CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="lastname" :isInvalid="errors.lastname.status">
            <CFormLabel>Lastname</CFormLabel>
            <CInput
              v-model="form.lastname"
              type="text"
              placeholder="Enter lastname"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage>{{ errors.lastname.message }}</CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="username" :isInvalid="errors.username.status">
            <CFormLabel>Username</CFormLabel>
            <CInput
              v-model="form.username"
              type="text"
              placeholder="Enter username"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage>{{ errors.username.message }}</CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="age" :isInvalid="errors.age.status">
            <CFormLabel>Age</CFormLabel>
            <CInput
              v-model="form.age"
              type="number"
              placeholder="Enter age"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage>{{ errors.age.message }}</CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="description" :isInvalid="errors.description.status">
            <CFormLabel>Description</CFormLabel>
            <CTextarea
              v-model="form.description"
              type="text"
              placeholder="Write something about yourself"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage>{{
              errors.description.message
            }}</CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="gender" :isInvalid="errors.gender.status">
            <CFormLabel>Gender</CFormLabel>
            <CRadioGroup v-model="form.gender">
              <CRadio value="male">Male</CRadio>
              <CRadio value="female">Female</CRadio>
              <CRadio value="other">Other</CRadio>
            </CRadioGroup>
            <CFormErrorMessage>{{ errors.gender.message }}</CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CFlex mb="1rem" direction="row" gap="1rem">
          <CBox w="50%"></CBox>
          <CButton
            rounded="1rem"
            size="lg"
            @click="handleNext"
            type="button"
            variantColor="yellow"
            w="50%"
          >
            Next
          </CButton>
        </CFlex>
      </template>
    </Card>
  </CFlex>
</template>

<script>
import Card from "@/components/Card.vue";
import Normalizer from "@/helpers/Normalizer";
import Validator from "@/helpers/Validator";
import {
  CLink,
  CBox,
  CFlex,
  CFormControl,
  CFormLabel,
  CFormErrorMessage,
  CInput,
  CButton,
  CStack,
  CText,
  CTextarea,
  CRadioGroup,
  CRadio,
} from "@chakra-ui/vue";

const cleanErrors = {
  name: {
    status: false,
    message: "",
  },

  lastname: {
    status: false,
    message: "",
  },

  username: {
    status: false,
    message: "",
  },
  age: {
    status: false,
    message: "",
  },
  description: {
    status: false,
    message: "",
  },
  gender: {
    status: false,
    message: "",
  },
};

export default {
  components: {
    CLink,
    CBox,
    CText,
    Card,
    CFlex,
    CFormControl,
    CFormLabel,
    CFormErrorMessage,
    CInput,
    CButton,
    CStack,
    CTextarea,
    CRadioGroup,
    CRadio,
  },

  data() {
    return {
      normalizer: new Normalizer(),
      validator: new Validator(),

      errors: { ...cleanErrors },
    };
  },

  props: ["form", "nextStep"],

  methods: {
    handleNext(e) {
      this.errors = { ...cleanErrors };

      let isErr = false;

      for (let key in this.form) {
        if (this.validator.isEmpty(this.form[key])) {
          isErr = true;
          this.errors[key] = {
            status: true,
            message: `${this.normalizer.firstLetterCapital(
              key
            )} can't be empty`,
          };
        }
      }

      if (this.validator.isAgeLessThanMature(this.form.age)) {
        this.errors.age = {
          status: true,
          message: "You must be 18 years old to create a profile",
        };
      }

      // description
      const minDescLen = 50;
      const maxDescLen = 200;

      if (this.validator.isLessThan(this.form.description, minDescLen)) {
        this.errors.description = {
          status: true,
          message: `The description must contain at least ${minDescLen} characters`,
        };
      }

      if (this.validator.isMoreThan(this.form.description, maxDescLen)) {
        this.errors.description = {
          status: true,
          message: `The description can contain up to ${maxDescLen} characters`,
        };
      }

      // implement check if username is in database

      // if (isErr) return;

      this.form.name = this.normalizer.firstLetterCapital(this.form.name);
      this.form.lastname = this.normalizer.firstLetterCapital(
        this.form.lastname
      );

      this.nextStep();
    },
  },
};
</script>

<style></style>
