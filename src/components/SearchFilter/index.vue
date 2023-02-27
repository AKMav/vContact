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
export default {
  name: "SearchFilter",
};
</script>

<script setup>
  import useSearch from "@/logic/SearchFilter/index.js";
  const emit = defineEmits(["onSearch"]);
  
  const onSearch = () => {
    emit("onSearch", { type: selected.value, query: searchQuery.value });
  };

  const { selected,
    options,
    searchQuery
    } = useSearch();
</script>

<style lang="scss">
  @import './style.scss';
</style>