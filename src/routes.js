import Welcome from "@/pages/welcome/Welcome.vue";
import Login from "@/pages/login/Login.vue";
import Main from "@/pages/main/Main.vue";
import Pair from "@/pages/pair/Pair.vue";
import MessagePanel from "@/pages/message/MessagePanel.vue";
import Chat from "@/pages/message/components/Chat.vue";
import Profile from "@/pages/profile/Profile.vue";
import Recs from "@/pages/recs/Recs.vue";
import Register from "@/pages/register/Register.vue";

export default [
  { name: "welcome", path: "/", component: Welcome },
  { name: "login", path: "/login", component: Login },
  { name: "register", path: "/register", component: Register },
  {
    name: "main",
    path: "/main",
    component: Main,
    children: [
      { name: "main/recs", path: "recs", component: Recs },
      { name: "main/pair", path: "pair", component: Pair },
      { name: "main/message", path: "message", component: MessagePanel },
      { path: "message/:pairId", name: "chat", component: Chat },
      { name: "main/profile", path: "profile", component: Profile },
    ],
  },
];
