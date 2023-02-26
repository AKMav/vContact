<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

if (route.path === "/") {
  router.replace("/list");
}

</script>

<template>
  <div class="app-wrapper container bg-light">
    <RouterView />
  </div>
</template>

<style scoped></style>
