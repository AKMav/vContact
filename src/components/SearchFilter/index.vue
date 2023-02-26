<template>
  <div class="search-filter">
    <input
      v-model="searchQuery"
      class="form-control search-input mb-2 me-1"
      type="text"
      placeholder="search query ..."
    >
    <select
      v-model="selected"
      class="form-select mb-2 mx-1 w-25"
    >
      <option
        value=""
        selected
      >
        Default
      </option>
      <option
        v-for="item of options"
        :key="item"
        :value="item"
      >
        {{ `By ${item}` }}
      </option>
    </select>
    <button
      type="button"
      class="btn btn-success mb-2 ms-1 w-25"
      @click="onSearch"
    >
      Search
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SearchFilter",
  // eslint-disable-next-line no-unused-vars
  setup(_, { emit }) {
    const selected = ref("");
    const options = ["fullname", "email", "phone", "tags"];
    const searchQuery = ref("");

    const optionChange = (e) => {
      console.log(e.target.value);
    };

    const onSearch = () => {
      emit("onSearch", { type: selected.value, query: searchQuery.value });
    };
    
    return {
      selected,
      options,
      searchQuery,
      onSearch,
      optionChange
    };


  }
};
</script>

<style lang="scss">
  @import './style.scss';
</style>