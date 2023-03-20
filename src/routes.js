import Welcome from "@/pages/welcome/Welcome.vue";
import Login from "@/pages/login/Login.vue";
import Main from "@/pages/main/Main.vue";
import Pair from "@/pages/pair/Pair.vue";
import Message from "@/pages/message/Message.vue";
import Profile from "@/pages/profile/Profile.vue";

export default [
  { path: "/", component: Welcome },
  { path: "/login", component: Login },
  {
    path: "/main",
    component: Main,
    children: [
      { path: "pair", component: Pair },
      { path: "message", component: Message },
      { path: "profile", component: Profile },
    ],
  },
];
