<script setup lang="ts">
    import type { IProducts } from '@/api/types';
import '@/styles/home.css'

    let props = defineProps<{ product: IProducts}>(); 

</script>

<template>
    <div class="single_product">
        <img :src="product.img" loading="lazy"/>
        <div>
            <h2>{{ product.itemName }}</h2>
            <h3>Цена: {{ product.itemPrice }}</h3>
            <h3>Нажми чтобы узнать подробнее</h3>
        </div>
    </div>
</template>