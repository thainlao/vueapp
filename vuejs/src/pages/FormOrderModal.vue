<script setup lang="ts">
import type { IOrders, IProducts } from '@/api/types';
import { useCartStore } from '@/stores/cartStore';
import { useOrderStore } from '@/stores/orderStore';

import '@/styles/modal.css';
import { computed, ref } from 'vue';
    //данные о заказе
    let props = defineProps<{isOpen: boolean}>();
    let emit = defineEmits(['close']);
    let closeModal = () => {
        emit('close');
    }
    let cartStore = useCartStore();
    let useorderStore = useOrderStore()
    let totalSum = computed(() => {
        return cartStore.cartItems.reduce((sum, item) => sum + item.itemPrice * (item.quantity || 1), 0);
    })

    //для заказа оформелние input
    let nameInput = ref<string>('');
    let addressInput = ref<string>('');
    let numberInput = ref<string | number>('');
    let addInfoInput = ref<string | null>('');
    let paymentMethod = ref<string>('Картой');

    // Функция для форматирования номера телефона
    function formatPhoneNumber(value: string) {
    // Удаляем все, кроме цифр
    const digits = value.replace(/\D/g, '');
    
    // Убедимся, что первая цифра всегда 7
    const firstDigit = '7';
    let formatted = firstDigit;

    // Если меньше 1 цифры после 7, возвращаем только 7
    if (digits.length <= 1) {
        return formatted;
    }

    // Добавляем оставшиеся цифры с форматированием
    const remainingDigits = digits.slice(1); // Убираем первую 7 для форматирования
    const parts = [
        remainingDigits.slice(0, 3), // 999
        remainingDigits.slice(3, 6), // 999
        remainingDigits.slice(6, 8), // 99
        remainingDigits.slice(8, 10) // 99
    ].filter(part => part); // Удаляем пустые части

    formatted += ' ' + parts.join(' '); // Формируем окончательный номер
    return formatted.trim();
    }

    // Ввод номера телефона с форматированием
    function handlePhoneNumberInput(event: Event) {
        const input = event.target as HTMLInputElement;

        // Убедимся, что вводим только цифры или стираем
        const currentValue = input.value;
        const formatted = formatPhoneNumber(currentValue);

        input.value = formatted; // Устанавливаем отформатированное значение
        numberInput.value = formatted; // Sync the ref with the formatted value
    }

    // Проверка заполненности всех полей
    function isFormValid() {
        return nameInput.value !== '' && addressInput.value !== '' && numberInput.value !== '' && paymentMethod.value !== null;
    }

    async function makeOrder(){
        if (!isFormValid()) {
            alert('Заполните все поля пожалуйста')
            return;
        }
        //логика

        let orderData = {
            _id: null,
            customer_name: nameInput.value,
            customer_number: numberInput.value,
            order_id: `ORD-` + Date.now(),
            order_details: cartStore.cartItems.map(item => ({
                item_name: item.itemName,
                item_quantity: item.quantity ?? 0,
                item_price: item.itemPrice,
                item_id: item.id
            })),
            order_comments: addInfoInput.value,
            payment_method: paymentMethod.value,
            order_date: new Date().toISOString()
        }

        try {
            let res = await useorderStore.makeOrder(orderData);
            if (res.success) {
                alert('Заказ успешно создан')
                cartStore.cartItems = [];
                closeModal()
            } else {
                alert('Произошла ошибка при создании заказа')
            }
        } catch (e) {
            console.log(e)
        }
    }
</script>

<template>
    <div class="modal-overlay" v-if="isOpen" @click.self="closeModal">
        <div class="modal-content">
            <div v-if="useorderStore.loading">Загрузка...</div>
            <h3>Ваш заказ</h3>
            <ul v-for="item in cartStore.cartItems" :key="item.id">
               <img :src="item.img"/>
               <h2>{{ item.itemName }}</h2>
               <section>
                    <button @click="cartStore.decreaseQuantity(item.id)">-</button>
                    <h5>{{ item.quantity }}</h5>
                    <button @click="cartStore.increaseQuantity(item.id)">+</button>
               </section>
               <h2>{{ (item.quantity ?? 1) > 1 ? item.itemPrice * (item.quantity ?? 1) : item.itemPrice.toLocaleString() }}</h2>
               <h2></h2>
            </ul>
            <h4>Total sum: {{ totalSum.toLocaleString() }}</h4>

            <div class="input_section">
                <h2>Для оформления заказа укажите</h2>
                
                <input 
                    placeholder="Ваше имя"
                    v-model="nameInput"
                />

                <input 
                    placeholder="Номер телефона"
                    v-model="numberInput"
                    @input="handlePhoneNumberInput"
                />

                <input 
                    placeholder="Адресс"
                    v-model="addressInput"
                />

                <input 
                    v-model="addInfoInput"
                    placeholder="Дополнительная информация если есть"
                />

                <div class="input_radio">
                    <h3>Тип оплаты</h3>
                    <label>
                        <span>Картой</span> <input type="radio" value="Картой" v-model="paymentMethod" />
                    </label>
                    <label>
                        <span>Наличными</span> <input type="radio" value="Наличными" v-model="paymentMethod" />
                    </label>
                    <label>
                        <span>На сайте</span> <input type="radio" value="На сайте" v-model="paymentMethod" />
                    </label>
                </div>
            </div>
            
            <button
                :disabled="!isFormValid()"
                @click="makeOrder"
                :class="isFormValid() ? 'order_button' : 'order_disabled'"
            >
                {{ useorderStore.loading === true ? 'Загрузка...' : 'Заказать' }}
            </button>

            <button class="closemodal" @click="closeModal"></button>
        </div>
    </div>
</template>