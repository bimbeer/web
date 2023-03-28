<template>
  <CFlex justify="center">
    <Card>
      <template #heading> Informacje o profilu </template>
      <template #body>
        <CBox mb="1rem">
          <CFormControl id="name">
            <CFormLabel>Imię</CFormLabel>
            <CInput
              v-model="form.name"
              type="text"
              placeholder="Wpisz imię"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage></CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="lastname">
            <CFormLabel>Nazwisko</CFormLabel>
            <CInput
              v-model="form.lastname"
              type="text"
              placeholder="Wpisz nazwisko"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage></CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="username">
            <CFormLabel>Nazwa użytkownika</CFormLabel>
            <CInput
              v-model="form.username"
              type="text"
              placeholder="Wpisz nazwę użytkownika"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage></CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="age">
            <CFormLabel>Wiek</CFormLabel>
            <CInput
              v-model="form.age"
              type="number"
              placeholder="Wpisz wiek"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage></CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="username">
            <CFormLabel>Opis</CFormLabel>
            <CTextarea
              v-model="form.description"
              type="text"
              placeholder="Napisz coś o sobie"
              p="1rem"
              rounded="1rem"
              mb="0.25rem"
              size="lg"
            />
            <CFormErrorMessage></CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CBox mb="1rem">
          <CFormControl id="username">
            <CFormLabel>Płeć</CFormLabel>
            <CRadioGroup v-model="form.gender">
              <CRadio value="man">Mężczyzna</CRadio>
              <CRadio value="woman">Kobieta</CRadio>
              <CRadio value="other">Inna</CRadio>
            </CRadioGroup>
            <CFormErrorMessage></CFormErrorMessage>
          </CFormControl>
        </CBox>

        <CFlex mb="1rem" direction="row">
          <CBox w="50%"></CBox>
          <CButton type="button" variantColor="yellow" w="50%"> Dalej </CButton>
        </CFlex>
      </template>
    </Card>
  </CFlex>
</template>

<script>
import Card from "@/components/Card.vue";
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
};
</script>

<style></style>
