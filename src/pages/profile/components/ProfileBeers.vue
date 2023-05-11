<template>
  <CFlex justify="center">
    <Card>
      <template #heading> Profile beers </template>
      <template #body>
        <CBox mb="1rem">
          <CSimpleGrid minChildWidth="150px" spacing="1rem">
            <div v-for="beer in beersList" :key="beer.link">
              <CButton
                h="100%"
                minW="100%"
                p="1rem"
                :variant="selectList.includes(beer.name) ? 'solid' : 'unstyled'"
                variantColor="yellow"
                @click="select(beer.link, beer.name)"
              >
                <CFlex align="center" justify="center" direction="column">
                  <img :src="beer.link" class="beer-preview" />
                  <CBox mt="0.5rem" text-align="center">{{ beer.name }}</CBox>
                </CFlex>
              </CButton>
            </div>
          </CSimpleGrid>
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
import beersList from "@/beersList.js";
import LikeBeerModel from "@/models/LikeBeerModel.js";

import { CBox, CButton, CFlex, CSimpleGrid } from "@chakra-ui/vue";

export default {
  data() {
    return {
      beersList: beersList,
      selectList: [],
      selectNumber: 0,
    };
  },

  components: { CButton, Card, CFlex, CBox, CSimpleGrid },
  props: ["nextStep", "prevStep", "profile"],
  methods: {
    select(beerLink, beerName) {
      let likedBeers = this.profile.getLikedBeers();
      for (let i = 0; i < likedBeers.length; i++) {
        if (likedBeers[i].name === beerName) {
          this.profile.removeLikeBeer(beerName);
          this.selectList = this.selectList.filter((bn) => bn !== beerName);
          this.selectNumber = this.selectList.length;
          return;
        }
      }
      this.profile.addLikeBeer(new LikeBeerModel(beerLink, beerName));
      this.selectList.push(beerName);
      this.selectNumber = this.selectList.length;
    },
  },
  mounted() {
    this.selectList = this.profile.getLikedBeers().map((lb) => lb.name);
    this.selectNumber = this.selectList.length;
  },
};
</script>

<style scoped>
.beer-preview {
  border-radius: 0.25rem;
  height: 200px;
  font-size: 4rem;
  object-fit: cover;
}
</style>
