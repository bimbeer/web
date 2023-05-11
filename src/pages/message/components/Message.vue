<template>
  <CFlex w="100%" :justify="msg.uid === getItem('user').uid ? 'right' : 'left'">
    <CFlex
      :bg="msg.uid === getItem('user').uid ? 'gray.700' : 'yellow.800'"
      p="1rem"
      mb="0.25rem"
      rounded="1rem"
      direction="column"
    >
      <CText fontSize="md">
        {{ msg.text }}
      </CText>
      <CFlex :justify="msg.uid === getItem('user').uid ? 'right' : 'left'">
        <!-- <CText fontSize="xs" color="whiteAlpha.500">{{
          new Date(msg.createdAt.toDate()).toLocaleString()
        }}</CText> -->
      </CFlex>
    </CFlex>
  </CFlex>
</template>

<script>
import { CFlex, CText } from "@chakra-ui/vue";
import { getItem } from "@/helpers/localStorage.js";
export default {
  components: {
    CFlex,
    CText,
  },
  methods: {
    getItem,
  },

  props: ["msg"],
};
</script>

<style></style>
