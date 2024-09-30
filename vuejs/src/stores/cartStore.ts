import type { IProducts } from "@/api/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cartStore', () => {
    let cartItems = ref<IProducts[]>([]);

    function addToCart(product: IProducts) {
        let item = cartItems.value.find(item => item.id === product.id);
        if (item) {
            item.quantity! += 1; 
        } else {
            product.quantity = 1;
            cartItems.value.push(product);
        }
    }

    function removeFromCart(productId: number) {
        cartItems.value = cartItems.value.filter(item => item.id !== productId);
    }

    function increaseQuantity(productId: number) {
        let item = cartItems.value.find(item => item.id === productId);
        if (item) {
            item.quantity! += 1;
        }
    }

    function decreaseQuantity(productId: number) {
        let item = cartItems.value.find(item => item.id === productId);
        if (item && item.quantity! > 1) {
            item.quantity! -= 1;
        }
    }
    
    return { cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity };
})