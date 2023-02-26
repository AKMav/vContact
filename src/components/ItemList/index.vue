<template>
  <ul class="item-list list-group">
    <li
      v-for="(contact, idx) of data"
      :key="contact.id"
      class="list-group-item"
    >
      <ContactItem :item-data="{...contact, idx}" />
    </li>
  </ul>
</template>

<script>
import ContactItem from "@/components/ContactItem/index.vue";
export default {
  name: "ItemList",
  components: {
    ContactItem
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup() {
  }
};
</script>

<style lang="scss">
  @import './style.scss';
</style>