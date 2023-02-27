import { createRouter, createWebHistory } from "vue-router";
import ContactList from "@/pages/ContactList/index.vue";
import ContactForm from "@/pages/ContactForm/index.vue";

const routes = [
    {
        path: "/",
        name: "ContactList",
        component: ContactList,
    },
    {        
      path: "/contact",
      name: "ContactForm",
      component: ContactForm,
      children: [
        {
          path: ":id",
          component: ContactForm, 
        }
      ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;