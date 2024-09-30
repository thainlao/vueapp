<script setup lang="ts">
import FormOrderModal from '@/pages/FormOrderModal.vue';
import { useCartStore } from '@/stores/cartStore';
import '@/styles/about.css';
import { ref } from 'vue';

    let cartStore = useCartStore();
    let modalOpen = ref<boolean>(false);
</script>

<template>
    <div class="cart_page">
        <h2>Cart page</h2>

        <div class="single_fav" v-if="cartStore.cartItems.length">
            <li v-for="item in cartStore.cartItems" :key="item.id">
                <RouterLink :to="{name: `SingleProduct`, params: { itemId: item.id}}">
                    <img :src="item.img"/>
                </RouterLink>
                <h3>{{ item.itemName }}</h3>
                <h4>{{ item.itemPrice }}</h4>
                <h3>{{ item.weight }}</h3>
                <button @click="cartStore.removeFromCart(item.id)">Удалить</button>
            </li>

        <button @click="modalOpen = true">Оформить заказ</button>
        </div>

        <div v-else>
            <h2>Корзина пуста</h2>
        </div>

        <FormOrderModal :is-open="modalOpen" @close="modalOpen = false"/>
    </div>
</template>