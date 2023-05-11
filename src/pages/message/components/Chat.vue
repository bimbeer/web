<template>
  <CFlex w="100%" justify="center">
    <CFlex maxW="400px" w="100%" direction="column">
      <CList maxH="70svh" overflowY="scroll" class="list" v-chat-scroll>
        <CListItem v-for="(msg, index) in messages" :key="index">
          <Message :msg="msg" />
        </CListItem>
      </CList>
      <form @submit.prevent="handleSendMsg">
        <CFlex mt="0.5rem">
          <CInput
            v-model="message"
            type="text"
            placeholder="Type in message"
            p="1rem"
            rounded="1rem"
            mr="0.25rem"
            size="lg"
          />
          <CButton
            variant-color="yellow"
            rounded="1rem"
            size="lg"
            variant="solid"
            type="submit"
          >
            Send
          </CButton>
        </CFlex>
      </form>
    </CFlex>
  </CFlex>
</template>

<script>
import { CInput, CFlex, CButton, CList, CListItem } from "@chakra-ui/vue";
import { getMessage, sendMessage } from "@/firebase/chatFirebase.js";
import { getItem } from "@/helpers/localStorage.js";
import Message from "./Message.vue";
export default {
  components: {
    Message,
    CList,
    CInput,
    CFlex,
    CListItem,
    CButton,
  },
  data() {
    return {
      message: "",
      messages: [],
    };
  },

  methods: {
    getMessage,
    sendMessage,
    async handleSendMsg() {
      if (!this.message) return;
      await sendMessage(
        this.message,
        this.$route.params.pairId,
        getItem("user").uid
      );
      this.message = "";
    },
  },

  async mounted() {
    await getMessage(this.$route.params.pairId, this.messages);
  },
};
</script>

<style scoped>
.spinner {
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.3) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}

.list::-webkit-scrollbar {
  width: 8px;
}

.list::-webkit-scrollbar-track {
  background: none;
}

.list::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: #2d3748;
}

.list::-webkit-scrollbar-thumb:hover {
  background: #3b485f;
}
</style>
