import { createRouter, createWebHistory } from "vue-router";
import App from "@/App.vue";
import ContactList from "@/pages/ContactList/index.vue";

const routes = [
    {
        path: "/",
        name: "App",
        component: App,
    },
    {        
      path: "/list",
      name: "ContactList",
      component: ContactList
    },
    // {        
    //   path: "/contact/:id",
    //   name: "ContactList",
    //   component: ContactList
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;