<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './stores/cartStore';
import { useFavoritesStore } from './stores/favoritesStore';

let username = ref('no username');
let cartStore = useCartStore();
let favoriteStore = useFavoritesStore();

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div>
          <RouterLink to="/" class="link">Store</RouterLink>
          <RouterLink to="/about" class="link">All users</RouterLink>
          <RouterLink to="/orders" class="link">All orders</RouterLink>
        </div>
        <div class="links">

          <div>
            <RouterLink to="/favorites" class="link">Favorites</RouterLink>
            <span>{{ favoriteStore.favoriteItems.length }}</span>
          </div>

          <div>
            <RouterLink to="/cart" class="link">Cart</RouterLink>
            <span>{{ cartStore.cartItems.length }}</span>
          </div>

        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
