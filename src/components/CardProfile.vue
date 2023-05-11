<template>
  <CBox maxW="450px" w="100%" h="600px">
    <CBox
      bg="blackAlpha.600"
      rounded="1rem"
      overflow="hidden"
      :bgImage="profile.beers[showPhotoNumber].link"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="contain"
      h="100%"
    >
      <CFlex w="100%" h="100%" direction="column" position="relative">
        <CBox flex="1" p="0.5rem" px="1rem">
          <CFlex gap="2" justify="center" align="center" h="10px">
            <CBox
              v-for="(photo, index) in photos"
              :key="photo"
              :class="
                showPhotoNumber === index ? 'animationShow' : 'animationNotShow'
              "
              :bg="showPhotoNumber === index ? 'yellow.200' : 'blackAlpha.400'"
              :h="showPhotoNumber === index ? '8px' : '4px'"
              w="100%"
              rounded="50rem"
            >
              <div class="animation"></div>
            </CBox>
          </CFlex>
        </CBox>
        <CBox flex="1">
          <CFlex
            h="100%"
            justify="space-between"
            align="center"
            color="blackAlpha.400"
          >
            <CIconButton
              size="lg"
              icon="chevron-left"
              variantColor="yellow"
              :_hover="{ transform: 'scale(1.3)', color: 'blackAlpha.800' }"
              @click="prevPhoto()"
              ariaLabel="prev-photo"
            />
            <CIconButton
              size="lg"
              icon="chevron-right"
              variantColor="yellow"
              :_hover="{ transform: 'scale(1.3)', color: 'blackAlpha.800' }"
              @click="nextPhoto()"
              ariaLabel="next-photo"
            />
          </CFlex>
        </CBox>
        <CBox flex="1" />
        <CBox
          position="absolute"
          bottom="0"
          bgGradient="linear(to-b, #ffffff00 0%, black 70%)"
          w="100%"
        >
          <CFlex p="1rem" py="2rem" justify="space-between">
            <CBox>
              <CHeading size="lg"
                >{{ profile.username }}, {{ profile.age }}</CHeading
              >
              <CText fontSize="sm">
                {{ profile.location.label.split(",")[0] }}
              </CText>
            </CBox>
            <CIconButton
              icon="circle-info"
              size="lg"
              bg=""
              @click="showDescription = !showDescription"
              :color="showDescription ? 'yellow.200' : null"
              :transform="showDescription ? 'scale(1.3)' : null"
              :_hover="{ transform: 'scale(1.3)' }"
              ariaLabel="show-description"
            />
          </CFlex>
          <CCollapse :isOpen="showDescription" v-if="removeFirstShow">
            <CText px="1rem" pb="1rem">
              {{ profile.description }}
            </CText>
          </CCollapse>
        </CBox>
      </CFlex>
    </CBox>
  </CBox>
</template>

<script>
import {
  CBox,
  CFlex,
  CGrid,
  CGridItem,
  CIconButton,
  CHeading,
  CText,
  CCollapse,
} from "@chakra-ui/vue";

export default {
  name: "CardProfile",
  components: {
    CCollapse,
    CHeading,
    CText,
    CFlex,
    CBox,
    CGrid,
    CGridItem,
    CIconButton,
  },

  data() {
    return {
      showDescription: false,
      photos: [],
      showPhotoNumber: 0,
      removeFirstShow: false,
    };
  },

  methods: {
    prevPhoto() {
      if (this.showPhotoNumber > 0) {
        this.showPhotoNumber--;
      }
    },

    nextPhoto() {
      if (this.showPhotoNumber < this.photos.length - 1) {
        this.showPhotoNumber++;
      }
    },
  },

  props: ["profile"],

  mounted() {

    this.photos = this.profile.beers.map((b) => b.link);
  },

  watch: {
    showDescription() {
      if (!this.removeFirstShow) {
        this.removeFirstShow = true;
      }
    },
  },
};
</script>

<style scoped>
.animationShow {
  animation: show 0.05s linear;
}

.animationNotShow {
  animation: notShow 0.05s linear;
}

@keyframes show {
  from {
    height: 3px;
  }
  to {
    height: 6px;
  }
}

@keyframes notShow {
  from {
    height: 6px;
  }
  to {
    height: 3px;
  }
}
</style>
