<template>
  <div class="contacts container">
    <div class="controls">
      searchinput etc
    </div>

    <ItemList :data="contacts" />

    <button
      type="button"
      class="add-btn btn btn-primary w-50"
      @click="addContact"
    >
      Add contact
    </button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ItemList from "@/components/ItemList/index.vue";

export default {
  name: "ContactList",
  components: {
    ItemList
  },

  setup() {
    const store = useStore();
    
    const addContact = () => {
      return store.dispatch("addNewContact",         {
          fullname: "User",
          email: "email@email.com",
          number: "+998909989121",
          tags: ["work"],
          id: Date.now().toString()
        });
    };

    return {
      contacts: computed(() => store.getters.contacts),
      addContact
    };
  }
};
</script>
<style lang="scss">
@import './style.scss';
</style>