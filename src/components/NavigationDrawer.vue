<template>
  <div>
    <CBox p="1rem" ariaLabel="main-drawer" maxH="20vh">
      <CIconButton
        icon="bars"
        @click="isOpen = true"
        bg="none"
        size="lg"
        color="yellow.200"
        ariaLabel="menu"
      />
    </CBox>

    <CDrawer :isOpen="isOpen" placement="left" :on-close="close">
      <CDrawerOverlay />
      <CDrawerContent
        :maxW="{ base: '100%', sm: '100%', md: '50%', lg: '30%' }"
      >
        <CDrawerHeader p="1rem">
          <CFlex justify="left">
            <CIconButton
              icon="xmark"
              ariaLabel="close"
              @click="isOpen = false"
              mb="1rem"
              bg="none"
              color="yellow.200"
              size="lg"
            />
          </CFlex>
          <CFlex justify="space-between" align="center" direction="row">
            <CText> {nickname} </CText>
            <CButton
              size="sm"
              variant-color="yellow"
              variant="outline"
              rounded="1rem"
            >
              Wyloguj
            </CButton>
          </CFlex>
        </CDrawerHeader>

        <CDrawerBody p="1rem">
          <CList>
            <CListItem v-for="link in links" :key="link.to">
              <router-link :to="link.to">
                <CBox
                  :color="pathname === `${link.to}` ? 'gray.900' : ''"
                  :bg="pathname === `${link.to}` ? 'yellow.200' : ''"
                  :_hover="{
                    bg: 'yellow.100',
                    ml: '1rem',
                    color: 'gray.900',
                  }"
                  transition="all 0.15s ease-in"
                  p="1rem"
                  rounded="1rem"
                  mb="0.25rem"
                >
                  {{ link.label }}
                </CBox>
              </router-link>
            </CListItem>
          </CList>
        </CDrawerBody>

        <CDrawerFooter> </CDrawerFooter>
      </CDrawerContent>
    </CDrawer>
  </div>
</template>

<script>
import links from "./NavigationDrawerLinks";

import {
  CButton,
  CDarkMode,
  CIconButton,
  CList,
  CListItem,
  CListIcon,
  CBox,
  CDrawer,
  CDrawerOverlay,
  CDrawerCloseButton,
  CDrawerBody,
  CDrawerContent,
  CDrawerFooter,
  CDrawerHeader,
  CFlex,
  CText,
} from "@chakra-ui/vue";

export default {
  name: "NavigationDrawer",
  components: {
    CDarkMode,
    CIconButton,
    CFlex,
    CText,
    CButton,
    CList,
    CListItem,
    CListIcon,
    CBox,
    CDrawer,
    CDrawerOverlay,
    CDrawerCloseButton,
    CDrawerBody,
    CDrawerContent,
    CDrawerFooter,
    CDrawerHeader,
  },
  data() {
    return {
      pathname: this.$route.path,
      isOpen: false,
      links: links,
    };
  },

  methods: {
    close() {
      this.isOpen = false;
    },
  },

  watch: {
    "$route.path": function (newPath, oldPath) {
      this.pathname = newPath;
    },
  },
};
</script>

<style></style>
