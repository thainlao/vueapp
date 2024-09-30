<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import { useFavoritesStore } from '@/stores/favoritesStore';
import '@/styles/about.css';

    let favoritesStore = useFavoritesStore();
    let cartStore = useCartStore();
</script>

<template>
    <div class="cart_page">
        <h2>Favorites page</h2>

        <div class="single_fav" v-if="favoritesStore.favoriteItems.length">
            <li v-for="item in favoritesStore.favoriteItems" :key="item.id">
            <RouterLink :to="{name: `SingleProduct`, params: { itemId: item.id}}">
                <img :src="item.img"/>
            </RouterLink>
            <h3>{{ item.itemName }}</h3>
            <h4>{{ item.itemPrice }}</h4>
            <h3>{{ item.weight }}</h3>
            <div>
                <button @click="cartStore.addToCart(item)">{{ cartStore.cartItems.includes(item) ? 'Уже в корзине' : 'Купить'}}</button>
                <button @click="favoritesStore.removeFromFavorites(item.id)">Удалить</button>
            </div>
        </li>
        </div>

        <div v-else>
            <h2>Нет избранных</h2>
        </div>
    </div>
</template>