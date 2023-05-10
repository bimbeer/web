<template>
  <CFlex justify="center">
    <Card>
      <template #heading> Profile information </template>
      <template #body>
        <CBox mb="1rem">
          <CFormControl id="name" :isInvalid="errors.firstName.status">
            <CFormLabel>First name</CFormLabel>
            <CInput
              v-model="profile.firstName"
              type="text"
              placeholder="Enter first name"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage>{{
              errors.firstName.message
            }}</CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="lastname" :isInvalid="errors.lastName.status">
            <CFormLabel>Last name</CFormLabel>
            <CInput
              v-model="profile.lastName"
              type="text"
              placeholder="Enter last name"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage>{{ errors.lastName.message }}</CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="username" :isInvalid="errors.username.status">
            <CFormLabel>Username</CFormLabel>
            <CInput
              v-model="profile.username"
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
              v-model="profile.age"
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
              v-model="profile.description"
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
            <CRadioGroup v-model="profile.gender">
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
  firstName: {
    status: false,
    message: "",
  },

  lastName: {
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
      validator: new Validator(),

      errors: { ...cleanErrors },
    };
  },

  props: ["profile", "nextStep"],

  methods: {
    handleNext() {
      this.errors = { ...cleanErrors };

      let isErr = false;

      for (let property in this.profile) {
        let propStr = property.toString();
        if (propStr in this.errors) {
          if (this.validator.isEmpty(this.profile[propStr])) {
            isErr = true;
            this.errors[propStr] = {
              status: true,
              message: `${propStr} can't be empty`,
            };
          }
        }
      }

      if (this.validator.isAgeLessThanMature(this.profile.age)) {
        this.errors.age = {
          status: true,
          message: "You must be 18 years old to create a profile",
        };
      }

      // description
      const minDescLen = 50;
      const maxDescLen = 200;

      if (this.validator.isLessThan(this.profile.description, minDescLen)) {
        this.errors.description = {
          status: true,
          message: `The description must contain at least ${minDescLen} characters`,
        };
        isErr = true;
      }

      if (this.validator.isMoreThan(this.profile.description, maxDescLen)) {
        this.errors.description = {
          status: true,
          message: `The description can contain up to ${maxDescLen} characters`,
        };
        isErr = true;
      }

      // implement check if username is in database

      if (isErr) return;

      this.profile.normalize();
      console.log(this.profile);

      this.nextStep();
    },
  },
};
</script>

<style></style>
