<script setup>
import TheHeader from "./components/TheHeader.vue";
import ProductList from "./components/ProductList.vue";

</script>

<template>
  <TheHeader></TheHeader>
  <router-view />
  <ProductList></ProductList>
</template>

<style scoped>
</style>
