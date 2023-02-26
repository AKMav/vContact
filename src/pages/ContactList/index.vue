<template>
  <div class="contacts container">
    <div class="controls">
      searchinput etc
    </div>

    <ItemList :data="contacts" />

    <button
      type="button"
      class="add-btn btn btn-primary w-50"
    >
      Add contact
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import ItemList from "@/components/ItemList/index.vue";

export default {
  name: "ContactList",
  components: {
    ItemList
  },
  setup() {
    const contacts = ref([
      {
        fullname: "User",
        email: "email@email.com",
        number: "+998909989121",
        tags: ["family"],
        id: Date.now().toString()
      },
      {
        fullname: "User",
        email: "email@email.com",
        number: "+998909989121",
        tags: ["work"],
        id: Date.now().toString()
      }
    ]);
    
    console.log( contacts );
    
  
    return {
      contacts
    };
  }
};
</script>
<style lang="scss">
@import './style.scss';
</style>