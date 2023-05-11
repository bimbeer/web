<template>
  <CFlex justify="center">
    <CFlex maxW="450px" w="100%" direction="column">
      <CList v-if="pairs?.length > 0">
        <CListItem v-for="pair in pairs" :key="pair.id" pb="1rem">
          <router-link :to="`message/${pair.pairId}`">
            <CFlex
              rounded="1rem"
              justify="space-between"
              p="1rem"
              bg="gray.800"
            >
              <CFlex align="center">
                <CAvatar :name="pair.username" mr="0.5rem" />
                <CText
                  >{{ pair.username }}, {{ pair.age }},
                  {{ pair.location.label.split(",")[0] }}</CText
                >
              </CFlex>
            </CFlex>
          </router-link>
        </CListItem>
      </CList>
      <CText v-if="!pairs" textAlign="center"

        >You don't have beer buddies yet</CText

      >
    </CFlex>
  </CFlex>
</template>

<script>
import {
  CFlex,
  CBox,
  CList,
  CListItem,
  CText,
  CAvatar,
  CIconButton,
} from "@chakra-ui/vue";
import { getPairs } from "@/firebase/pairFirebase.js";
import { getItem } from "@/helpers/localStorage.js";
import { getAllLike, unpairUser } from "@/firebase/matchFirebase.js";
export default {
  components: {
    CIconButton,
    CAvatar,
    CListItem,
    CText,
    CFlex,
    CBox,
    CList,
  },
  data() {
    return {
      pairs: [],
    };
  },

  methods: {
    getPairs,
  },

  async mounted() {
    this.pairs = await getPairs(await getAllLike(await getItem("user").uid));
  },
};
</script>

<style></style>
