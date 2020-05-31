import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./views/AppHeader";
import Home from "./views/Home.vue";
import UserRegistration from "./views/Register.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";

import PublishHelp from "./views/PublishHelp.vue"

import EditProfile from "./views/EditInfoProfile";


import RegisterMenu from "./views/RegisterMenu.vue";
import HelpMenu from "./views/HelpMenu.vue";
import MedicalHelpFeed from "./views/MedicalHelpFeed.vue";
import PrivateChat from "./views/PrivateChat.vue";
import ChatList from "./views/ChatList.vue";
import SymptomsForm from "./views/SymptomsForm.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        header: AppHeader,
        default: Home,
      },
    },
    {
      path: "/registerHealth",
      name: "registerHealth",
      components: {
        header: AppHeader,
        default: UserRegistration,
      },
      props: {
        default: { userType: "health" },
      },
    },
    {
      path: "/registerNormal",
      name: "registerNormal",
      components: {
        header: AppHeader,
        default: UserRegistration,
      },
      props: {
        default: { userType: "normal" },
      },
    },
    {
      path: "/publishHelp",
      name: "publishHelp",
      components: {
        header: AppHeader,
        default: PublishHelp,
      },
      
    },
    {
      path: "/login",
      name: "Login",
      components: {
        header: AppHeader,
        default: Login,
      },
    },
    {
      path: "/profile",
      name: "Profile",
      components: {
        header: AppHeader,
        default: Profile,
      },
    },
    {
      path: "/registerMenu",
      name: "RegisterMenu",
      components: {
        header: AppHeader,
        default: RegisterMenu,
      },
    },
    {
      path: "/helpMenu",
      name: "HelpMenu",
      components: {
        header: AppHeader,
        default: HelpMenu,
      },
    },
    {
      path: "/medicalHelpFeed",
      name: "MedicalHelpFeed",
      components: {
        header: AppHeader,
        default: MedicalHelpFeed,
      },
    },
    {
      path: "/editProfile",
      name: "EditProfile",
      components: {
        header: AppHeader,
        default: EditProfile,
      },
    },
    {
      path: "/privateChat",
      name: "privateChat",
      components: {
        header: AppHeader,
        default: PrivateChat,
      }
    },
    {
      path: "/myChats",
      name: "ChatList",
      components: {
        header: AppHeader,
        default: ChatList,
      },
    },
    {
      path: "/symptomsForm",
      name: "SymptomsForm",
      components: {
        header: AppHeader,
        default: SymptomsForm,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
