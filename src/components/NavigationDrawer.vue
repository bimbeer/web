<template>
  <div v-if="getItem('user')">
    <CBox v-if="getItem('myProfile')">
      <CIconButton
        icon="bars"
        @click="isOpen = true"
        bg="none"
        size="lg"
        color="yellow.200"
        ariaLabel="menu"
        :_hover="{ transform: 'scale(1.2)' }"
      />
    </CBox>
    <CButton
      v-else
      size="sm"
      variant-color="yellow"
      variant="outline"
      rounded="1rem"
      :_hover="{ transform: 'scale(1.2)' }"
      @click="log()"
    >
      Logout
    </CButton>

    <CDrawer :isOpen="isOpen" placement="left" :on-close="close">
      <CDrawerOverlay />
      <CDrawerContent
        :minW="{ base: '100%', sm: '100%', md: '50%', lg: '30%' }"
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
              :_hover="{ transform: 'scale(1.2)' }"
            />
          </CFlex>
          <CFlex justify="space-between" align="center" direction="row">
            <CText>{{
              getItem("myProfile") ? getItem("myProfile").username : ""
            }}</CText>
            <CButton
              size="sm"
              variant-color="yellow"
              variant="outline"
              rounded="1rem"
              :_hover="{ transform: 'scale(1.2)' }"
              @click="log()"
            >
              Logout
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
import { logout } from "@/firebase/authFirebase.js";
import { getItem } from "@/helpers/localStorage.js";

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
    log() {
      logout();
      this.$router.push({ name: "welcome" });
      this.close();
    },
    close() {
      this.isOpen = false;
    },
    logout,
    getItem,
  },

  watch: {
    "$route.path": function (newPath, oldPath) {
      this.pathname = newPath;
    },
  },
};
</script>

<style></style>
