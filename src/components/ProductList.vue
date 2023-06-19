<template>
  <div class="container mx-auto">
    <div class="flex items-center gap-2">
      <router-link to="/cart" class="font-bold">giỏ hàng</router-link>
      <router-link
        :to="{ name: 'Detail', params: { id: '1233213' } }"
        class="font-bold"
        >chi tiết</router-link
      >
    </div>

    <h2 class="text-center w-full text-3xl font-bold text-blue-500">
      Danh sách sản phẩm
    </h2>
    <div v-if="productList.length > 0" class="mt-4 grid grid-cols-4 gap-4">
      <product-item
        v-for="(item, index) in productList"
        :key="index"
        :product-item="item"
      ></product-item>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductItem from "./ProductItem.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import sp1 from "@/assets/images/sp1.webp";
import sp2 from "@/assets/images/sp2.webp";
import sp3 from "@/assets/images/sp3.webp";
import sp4 from "@/assets/images/sp4.webp";
import sp5 from "@/assets/images/sp5.webp";
import sp6 from "@/assets/images/sp6.webp";
import sp7 from "@/assets/images/sp7.webp";
import sp8 from "@/assets/images/sp8.webp";

//pinia
import { useProductStore } from "@/stores/product.js";

const data = [
  {
    id: 1,
    name: "Bộ Bàn Phím",
    image: sp1,
    description:
      "Phím và chuột có dây dài Phù hợp với nhiều loại hệ điều hành khác nhau, nhiều cấu hình máy của PC hoặc laptop. Đèn Led bắt mắt, phù hợp cho các game thủ chơi Game vào ban đêm Phím giả cơ nghe âm thanh rất thanh và êm Chuột Chuyên Game được thiết kế riêng dành cho game thủ và phòng net",
    price: 134000,
    sale: 10,
    quantityInStock: 10,
  },
  {
    id: 2,
    name: "Chuột Captain Marvel ",
    image: sp2,
    description:
      "Phím và chuột có dây dài Phù hợp với nhiều loại hệ điều hành khác nhau, nhiều cấu hình máy của PC hoặc laptop. Đèn Led bắt mắt, phù hợp cho các game thủ chơi Game vào ban đêm Phím giả cơ nghe âm thanh rất thanh và êm Chuột Chuyên Game được thiết kế riêng dành cho game thủ và phòng net",
    price: 250000,
    sale: 5,
    quantityInStock: 15,
  },
  {
    id: 3,
    name: "Laptop Gaming",
    image: sp3,
    description:
      "Phím và chuột có dây dài Phù hợp với nhiều loại hệ điều hành khác nhau, nhiều cấu hình máy của PC hoặc laptop. Đèn Led bắt mắt, phù hợp cho các game thủ chơi Game vào ban đêm Phím giả cơ nghe âm thanh rất thanh và êm Chuột Chuyên Game được thiết kế riêng dành cho game thủ và phòng net",
    price: 10500000,
    sale: 0,
    quantityInStock: 5,
  },
  {
    id: 4,
    name: "Lót Chuột",
    image: sp4,
    description: "lót chuột chống chày sước bàn ghế",
    price: 230000,
    sale: 5,
    quantityInStock: 35,
  },
  {
    id: 5,
    name: "Tai Nghe",
    image: sp5,
    description: "Tai Nghe hiện đại",
    price: 1000000,
    sale: 10,
    quantityInStock: 10,
  },
  {
    id: 6,
    name: "Loa Sony",
    image: sp6,
    description: "Nghe Nhạc cực chất",
    price: 750000,
    sale: 5,
    quantityInStock: 15,
  },
  {
    id: 7,
    name: "Màn Hình View Sonic",
    image: sp7,
    description: "Độ Phân Giải cực nét full HD không che",
    price: 134000,
    sale: 10,
    quantityInStock: 10,
  },
  {
    id: 8,
    name: "Mic Thu âm",
    image: sp8,
    description: "Khử Ổn Siêu Hiệu Quả",
    price: 300000,
    sale: 0,
    quantityInStock: 7,
  },
];

const productData = useProductStore();

productData.increment(); // Gọi đến action trong store
productData.product = data; // Thay đổi trực tiếp dữ liệu trong store

console.log('fsdafdsafd',productData.product);
productData.logs(); // Gọi đến action trong store
console.log(productData.product); // Truy cập state trong store
console.log(productData.doubleCount); // Truy cập getter trong store

console.log(productData.name);
const store = useStore();
const route = useRoute();
store.commit("products/SET_DATA_PRODUCT", data);
const productList = ref(data);
console.log(route.path);
</script>

<style lang="scss" scoped></style>