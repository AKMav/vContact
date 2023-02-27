import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { tagsSource } from "@/utils/variables.js";

const tags = ref(tagsSource.map(tag => ({ value: tag, action: false })));
const initValue = {
  fullname: "",
  email: "",
  phone: "",
  tags: [],
  id: ""
};
const contact = ref({ ...initValue });

const hasEmptyInput = computed(() => {
  if (!contact.value.fullname || !contact.value.email || !contact.value.phone ) {
    return true;
  } return false;
});

export default function useContactForm() {
  const store = useStore();
  const route  = useRoute();
  const router  = useRouter();

  onMounted(() => {
    if (route.params.id) {
      let _contact = store.getters.contacts.find(item => item.id === route.params.id);
    if (_contact) {
      contact.value = _contact;
    }
    tags.value = tags.value.map(item => {
      if (contact.value.tags.includes(item.value)) {
        item.active = true;
      } else {
        false;
      }
      return item;
    });
    }
  });

  const choseTag = (tag) => {
    tags.value = tags.value.map(item => {
      if (item.value === tag.value) {
        item.active = !item.active;
      }
      return item;
    });
  };

  const clearAll = () => {
    contact.value = { ...clearAll };
    tags.value = tags.value.map(item => ({ ...item, active: false }));
  };

  const addContact = () => {
    if (hasEmptyInput.value) {
      return;
    }
    if (!contact.value.id) {
      contact.value.id = Date.now().toString();
    }
    const body = { ...contact.value, tags: tags.value.map(item => {
      if (item.active) {
        return item.value;
      } return;
    }).filter(item => item) };
    store.dispatch("addNewContact", body);
    router.push("/");
  };

  const removeContact = () => {
    store.dispatch("removeContact", route.params.id);
    router.push("/");
  };

  const goToMain = () => {
    clearAll();
    router.push("/");
  };

  return {
    contacts: computed(() => store.getters.contacts),
    tags,
    contact,
    hasId: route.params.id,
    hasEmptyInput,
    addContact,
    choseTag,
    clearAll,
    removeContact,
    goToMain,
  };
}