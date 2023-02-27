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
import ItemList from "@/components/ItemList/index.vue";
import SearchFilter from "@/components/SearchFilter/index.vue";
export default {
  name: "ContactList",
  components: {
    ItemList,
    SearchFilter
  },
};
</script>

<script setup>
import useContactList from "@/logic/ContactList/index.js";
const { contacts, addContact, filterSearch } = useContactList();
</script>

<style lang="scss">
@import './style.scss';
</style>