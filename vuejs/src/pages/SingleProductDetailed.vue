<script setup lang="ts">
import { useRoute } from 'vue-router';
import { allItems } from '@/api/api';
import '@/styles/home.css'
import { useCartStore } from '@/stores/cartStore';
import { useFavoritesStore } from '@/stores/favoritesStore';
import type { IProducts } from '@/api/types';

    const route = useRoute();
    const itemId = Number(decodeURIComponent(route.params.itemId as string));
    let product = allItems.value.find(item => item.id === itemId);

    let cartStore = useCartStore();
    let favoritesStore = useFavoritesStore();

    function addToFavorites(product: IProducts){
        favoritesStore.addToFavorites(product)
    }

    function addToCart(product: IProducts){
        cartStore.addToCart(product)
    }

</script>

<template>
    <div class="singleitem_detailed" v-if="product">
        <RouterLink to="/">
            Вернуться в магазин
        </RouterLink>
        <section>
            <img :src="product.img"/>

            <div>
                <h2>{{ product.itemName }}</h2>
                <h2>weight: {{ product.weight }}</h2>
                <h2>price: {{ product.itemPrice }}</h2>
            </div>
        </section>

        <div class="buttons_section">
            <button @click="addToCart(product)">{{ cartStore.cartItems.includes(product) ? 'Уже в корзине' : 'Добавить в корзину' }}</button>
            <button @click="addToFavorites(product)">{{ favoritesStore.favoriteItems.includes(product) ? 'Уже в избранном' : 'Добавить в избранное' }}</button>
        </div>
    </div>

    <div v-else>
        <h2>Товар не найден</h2>
    </div>
</template>