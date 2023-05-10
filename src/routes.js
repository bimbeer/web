import Welcome from "@/pages/welcome/Welcome.vue";
import Login from "@/pages/login/Login.vue";
import Main from "@/pages/main/Main.vue";
import Pair from "@/pages/pair/Pair.vue";
import Message from "@/pages/message/Message.vue";
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
      { name: "main/message", path: "message", component: Message },
      { name: "main/profile", path: "profile", component: Profile },
    ],
  },
];
