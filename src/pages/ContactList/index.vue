<template>
  <div class="contacts container">
    <div class="controls">
      <SearchFilter @on-search="filterSearch" />
    </div>

    <ItemList :data="contacts" />
    <h2
      v-if="!contacts.length"
      class="empty-title"
    >
      No contacts found
    </h2>

    <button
      type="button"
      class="add-btn btn btn-primary w-50 mt-3"
      @click="addContact"
    >
      Add contact
    </button>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ItemList from "@/components/ItemList/index.vue";
import SearchFilter from "@/components/SearchFilter/index.vue";

export default {
  name: "ContactList",
  components: {
    ItemList,
    SearchFilter
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const searchParams = ref({
      type: "",
      query: ""
    });
    
    const addContact = () => {
      router.push("/contact");
    };

    const filterSearch = (params) => {
      searchParams.value = params;
    };

    return {
      contacts: computed(() => {
        let { query, type } = searchParams.value;

        if (searchParams.value.type) {
          return store.getters.contacts.filter(item => {
            if (Array.isArray(item[type])) {
              return item[type].map(i => i.toLowerCase()).includes(query.toLowerCase());
            } else {
              return item[type].toLowerCase().includes(query.toLowerCase());
            }
          });
        } else {
          return store.getters.contacts.filter(item => {
            return Object.values(item).some(value => {
              if (Array.isArray(value)) {
                return value.map(i => i.toLowerCase()).includes(query.toLowerCase());
            } else {
              return value.includes(query.toLowerCase());
            }
            });
          });
        }        
      }),
      searchParams,
      addContact,
      filterSearch
    };
  }
};
</script>
<style lang="scss">
@import './style.scss';
</style>