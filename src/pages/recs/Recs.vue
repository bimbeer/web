<template>
  <CBox>
    <CStack>
      <CBox>
        <CardProfile />
      </CBox>
      <CBox w="100%">
        <CFlex w="100%" align="center" justify="center" gap="12" p="1rem">
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
    </CStack>
  </CBox>
</template>

<script>
import { CBox, CFlex, CStack, CIconButton } from "@chakra-ui/vue";
import CardProfile from "@/components/CardProfile.vue";

export default {
  name: "Recs",
  components: {
    CBox,
    CFlex,
    CStack,
    CIconButton,
    CardProfile,
  },

  methods: {
    like() {
      console.log("Like");
    },
    notLike() {
      console.log("NotLike");
    },
  },
};
</script>

<style></style>
