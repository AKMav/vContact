<template>
  <div class="contact-form container">
    <header
      class="w-75 mb-4"
    >
      <h2 class="w-50">
        Contact info
      </h2>
      <button
        type="button"
        class="return-btn btn btn-primary"
        @click="goToMain"
      >
        Return to contact list
      </button>
    </header>
    <form
      action.prevent=""
    >
      <div class="mb-3 form-row w-75">
        <label
          for="name"
          class="form-label"
        >Full name</label>
        <input
          id="name"
          v-model="contact.fullname"
          type="text"
          class="form-control"
          placeholder="John Doe"
        >
        <!-- <i
          v-if="$v.fullname.$error"
          class="error"
        >Error</i> -->
      </div>
      <div class="mb-3 form-row w-75">
        <label
          for="email"
          class="form-label"
        >Email address</label>
        <input
          id="email"
          v-model="contact.email"
          type="email"
          class="form-control"
          placeholder="name@example.com"
        >
      </div>
      <div class="mb-3 form-row w-75">
        <label
          for="phone"
          class="form-label"
        >Phone number</label>
        <input
          id="phone"
          v-model="contact.phone"
          type="phone"
          class="form-control"
          placeholder="+99899 123 45 67"
        >
      </div>
      <div class="mb-3 form-row w-75">
        <label
          class="form-label"
        >Chose tags for contact</label>
        <div class="tag-row">
          <div
            v-for="tag of tags"
            :key="tag.value"
          >
            <button
              type="button"
              class="btn btn-outline-secondary"
              :class="{active: tag.active}"
              @click="choseTag(tag)"
            >
              {{ tag.value }}
            </button>
          </div>
        </div>
      </div>
    </form>
    <div class="action-btns w-75 row mb-5">
      <button
        type="button"
        class="btn btn-outline-success col-3"
        @click="addContact"
      >
        Save changes
      </button>
      <button
        type="button"
        class="btn btn-outline-warning col-3"
        @click="clearAll"
      >
        Clear
      </button>
      <button
        v-if="hasId"
        type="button"
        class="btn btn-outline-danger col-3"
        @click="removeContact"
      >
        Remove contact
      </button>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { tagsSource } from "@/utils/variables.js";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "ContactForm",
  setup() {
    const store = useStore();
    const route  = useRoute();
    const router  = useRouter();
    
    const tags = ref(tagsSource.map(tag => ({ value: tag, action: false })));

    const initValue = {
      fullname: "",
      email: "",
      phone: "",
      tags: [],
      id: ""
    };

    const contact = ref({ ...initValue });

    const rules = computed(() => ({
      contact: {
        fullname: { required }
      }
    }));

    const v$ = useVuelidate(rules, contact);

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
      v$,
      addContact,
      choseTag,
      clearAll,
      removeContact,
      goToMain,

    };
  },
};
</script>

<style lang="scss">
@import './style.scss';
</style>