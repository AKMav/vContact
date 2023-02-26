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
        disabled
        selected
      >
        Search options
      </option>
      <option
        v-for="item of options"
        :key="item"
      >
        {{ item }}
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
  setup() {
    const selected = ref("");
    const options = ["name", "email", "phone", "tags"];
    const searchQuery = ref("");

    const optionChange = (e) => {
      console.log(e.target.value);
    };

    const onSearch = () => {
      
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