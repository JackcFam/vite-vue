<template>
    <div>
        <h1 class="text-red-700 font-bold text-3xl">Chi tiết sản phẩm</h1>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

    onMounted(() => {
        const router = useRoute()
        console.log('router.query.id', router.query.id);
        console.log('router.params.id', router.params.id);
    })
</script>

<style lang="scss" scoped>

</style>