<script setup lang="ts">
import SingleProduct from '@/pages/SingleProduct.vue';
import '@/styles/home.css';
import { allItems } from '@/api/api';

</script>

<template>
    <div class="homepage">
        <h1>Все товары</h1>
        <section class="all_items">
            <li v-for="(product, index) in allItems" :key="product.id">
                <RouterLink :to="{ name: `SingleProduct`, params: { itemId: product.id } }">
                    <SingleProduct :product="product" />
                </RouterLink>
            </li>
        </section>
    </div>
</template>

<style scoped>
.load-more {
  margin: 20px 0;
  border: 1px solid silver;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.2s ease-in;
}
</style>