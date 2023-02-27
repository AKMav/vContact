import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const searchParams = ref({
  type: "",
  query: ""
});

export default function useContactList() {

  const store = useStore();
  const router = useRouter();

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
    addContact,
    filterSearch
  };
}