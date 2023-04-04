<template>
  <CFlex justify="center">
    <Card>
      <template #heading> Profile beers </template>
      <template #body>
        <CBox mb="1rem"> </CBox>

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
            @click="nextStep"
            w="50%"
            variantColor="yellow"
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

import { CBox, CButton, CFlex } from "@chakra-ui/vue";

export default {
  components: { CButton, Card, CFlex, CBox },
  props: ["nextStep", "prevStep", "profile"],
};
</script>

<style></style>
