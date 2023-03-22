import Welcome from "@/pages/welcome/Welcome.vue";
import Login from "@/pages/login/Login.vue";
import Main from "@/pages/main/Main.vue";
import Pair from "@/pages/pair/Pair.vue";
import Message from "@/pages/message/Message.vue";
import Profile from "@/pages/profile/Profile.vue";
import Recs from "@/pages/recs/Recs.vue";
import Register from "@/pages/register/Register.vue";

export default [
  { path: "/", component: Welcome },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  {
    path: "/main",
    component: Main,
    children: [
      { path: "recs", component: Recs },
      { path: "pair", component: Pair },
      { path: "message", component: Message },
      { path: "profile", component: Profile },
    ],
  },
];
