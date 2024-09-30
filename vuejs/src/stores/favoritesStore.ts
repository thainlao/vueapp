import type { IProducts } from "@/api/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritesStore = defineStore('favoritesStore', () => {
    let favoriteItems = ref<IProducts[]>([]);

    function addToFavorites(product: IProducts) {
        let existItem = favoriteItems.value.find(item => item.id === product.id);
        if (!existItem) {
            favoriteItems.value.push(product)
        }
    }

    function removeFromFavorites(productId: number) {
        favoriteItems.value = favoriteItems.value.filter(item => item.id !== productId);
    }

    return { favoriteItems, addToFavorites, removeFromFavorites}
})