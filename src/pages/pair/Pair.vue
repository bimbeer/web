<template>
  <CFlex justify="center">
    <CFlex maxW="450px" w="100%" direction="column">
      <CList v-if="pairs?.length > 0">
        <CListItem v-for="pair in pairs" :key="pair.id" pb="1rem">
          <CFlex rounded="1rem" justify="space-between" p="1rem" bg="gray.800">
            <CFlex align="center">
              <CAvatar :name="pair.username" mr="0.5rem" />
              <CText
                >{{ pair.username }}, {{ pair.age }},
                {{ pair.location.label.split(",")[0] }}</CText
              >
            </CFlex>
            <CIconButton
              type="button"
              ariaLabel="not-like"
              icon="xmark"
              variant-color="red"
              variant="outline"
              size="lg"
              rounded="50rem"
              @click="handleUnpair(pair.id)"
            /> </CFlex
        ></CListItem>
      </CList>
      <CText v-if="!pairs" textAlign="center"
        >You don't have beer buddys yet</CText
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
import { getPairsProfiles } from "@/firebase/pairFirebase.js";
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
    getPairsProfiles,
    async handleUnpair(pairId) {
      const currentUserId = await getItem("user").uid;
      const rm = await unpairUser(currentUserId, pairId);
      this.pairs = await getPairsProfiles(await getAllLike(currentUserId));
    },
  },

  async mounted() {
    this.pairs = await getPairsProfiles(
      await getAllLike(await getItem("user").uid)
    );
  },
};
</script>

<style></style>
