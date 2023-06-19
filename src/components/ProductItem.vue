<template>
    <div class="shadow-lg p-4">
        <img class="w-full h-[200px]" :src="props.productItem.image" alt="">
        <h4>{{ props.productItem.name }}</h4>
        <h4>{{ props.productItem.price }} VND</h4>
        <p>{{ props.productItem.description }}</p>
        <div class="flex justify-between items-center mt-3">
            <button class="text-white font-bold bg-red-500 rounded-lg p-2">Mua</button>
            <button class="text-white font-bold bg-green-500 rounded-lg p-2">Chi tiết</button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
    productItem: {
        type: Object,
        required: true
    }
});
</script>

<style lang="css" scoped>

</style>