<template>
  <CFlex justify="center">
    <Card>
      <template #heading> Profile avatar </template>
      <template #body>
        <CFlex
          mb="1rem"
          direction="column"
          justify="center"
          align="center"
          gap="2rem"
        >
          <img v-if="localFileUrl" :src="localFileUrl" class="avatar-preview" />
          <CAvatar
            :name="profile.username"
            v-if="!localFileUrl"
            class="avatar-preview"
          />

          <input
            type="file"
            @change="handleAvatar"
            accept="image/png, image/jpeg"
            ref="avatarFile"
            :style="{ display: 'none' }"
          />

          <CButton
            @click="handleAvatarSelect"
            rounded="1rem"
            size="lg"
            variantColor="yellow"
            variant="solid"
            type="button"
          >
            Select avatar
          </CButton>
        </CFlex>

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

import { CBox, CButton, CFlex, CInput, CAvatar, CImage } from "@chakra-ui/vue";

export default {
  components: { CButton, Card, CFlex, CBox, CInput, CAvatar, CImage },
  props: ["nextStep", "prevStep", "profile"],

  data() {
    return {
      localFileUrl: null,
    };
  },

  methods: {
    handleAvatar(e) {
      console.log(e.target.files[0]);
      this.localFileUrl = URL.createObjectURL(e.target.files[0]);
      console.log(this.localFileUrl);
    },

    handleAvatarSelect() {
      this.$refs.avatarFile.click();
    },
  },
};
</script>

<style scoped>
.avatar-preview {
  border-radius: 9999px;
  width: 200px;
  height: 200px;
  font-size: 4rem;
  object-fit: cover;
}
</style>
