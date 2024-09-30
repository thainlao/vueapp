<script lang="ts">
import { useOrderStore } from '@/stores/orderStore';
import { computed, onMounted, ref, watch } from 'vue';
import '@/styles/allorders.css';

export default {
    setup() {
        const OrderStore = useOrderStore();
        const nameInput = ref('');
        const debounceTimeout = ref<any>(null);
        const currentFilter = ref('all');

        const filteredOrders = computed(() => {
            let orders = OrderStore.allOrders;

            if (currentFilter.value !== 'all') {
                orders = orders.filter(order => order.status === currentFilter.value);
            }

            if (nameInput.value) {
                orders = orders.filter(order => 
                    order.customer_name.toLowerCase().includes(nameInput.value.toLowerCase())
                );
            }

            return orders;
        });

        onMounted(() => {
            OrderStore.getAllOrders();
        });

        const formatDate = (dateString: string) => {
            const options: Intl.DateTimeFormatOptions = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: false 
            };
            return new Date(dateString).toLocaleString('ru-RU', options);
        };


        let updateStatus = (id: string, newStatus: string) => {
            OrderStore.updateOrderStatus(id, newStatus)
        }

        const setFilter = (filter: string) => {
            currentFilter.value = filter;
        };

        const deleteOrderById = (id: any) => {
            OrderStore.deleteOrder(id)
        }

        watch(nameInput, (newValue) => {
            if (debounceTimeout.value) {
                clearTimeout(debounceTimeout.value);
            }

            debounceTimeout.value = setTimeout(() => {
                // Обновляем состояние, чтобы инициировать поиск
                // Просто изменение nameInput вызывает реакцию
                nameInput.value = newValue; 
            }, 500); // 500 мс
        });

        return { deleteOrderById, nameInput, currentFilter, setFilter, OrderStore, formatDate, updateStatus, filteredOrders };
    }
};
</script>

<template>
    <div class="user-list">
        <h1>Список всех заказов</h1>
        <h2>Сортировать по</h2>

        <section class="sorted">
            <button 
                :class="{ active: currentFilter === 'completed' }" 
                @click="setFilter('completed')"
            >Выполненные</button>
            <button 
                :class="{ active: currentFilter === 'progress' }" 
                @click="setFilter('progress')"
            >В прогрессе</button>
            <button 
                :class="{ active: currentFilter === 'failed' }" 
                @click="setFilter('failed')"
            >Провальные</button>
            <button 
                :class="{ active: currentFilter === 'all' }" 
                @click="setFilter('all')"
            >Все</button>
        </section>

        <section class="input_search">
            Поиск по имени
            <input 
                v-model="nameInput" 
                placeholder="Введите имя клиента" 
            />
        </section>

        <div v-if="OrderStore.loading">Загрузка</div>
        <div v-if="OrderStore.error">{{ OrderStore.error }}</div>

        <ul v-if="!OrderStore.loading && !OrderStore.error">
            <li 
            class="list" 
            :class="order.status"
            v-for="order in filteredOrders" 
            :key="order._id"
            >
                <h3>имя: {{ order.customer_name }}</h3>
                <h3>Номер: {{ order.customer_number }}</h3>

                <div class="order_detailed">
                    <div v-for="or in order.order_details" :key="or._id">
                        <h4>{{ or.item_name }}</h4>
                        <h4>количество: {{ or.item_quantity }}</h4>
                        <h4>цена: {{ or.item_price.toLocaleString() }}</h4>
                    </div>
                </div>

                <h3>Комментарии :{{ order.order_comments }}</h3>
                <h3>Метод оплаты: {{ order.payment_method }}</h3>
                <h3>Status: {{ order.status }}</h3>
                <h3>Дата заказа: {{ formatDate(order.order_date) }}</h3>

                <section>
                    <h2 style="margin-bottom: 10px;">Перевести в статус</h2>

                    <div class="input_radio_orders">
                        <label>
                            <span>Progress</span>
                            <input type="radio" value="progress" v-model="order.status" @change="updateStatus(order._id, 'progress')" />
                        </label>
                        <label>
                            <span>Completed</span>
                            <input type="radio" value="completed" v-model="order.status" @change="updateStatus(order._id, 'completed')" />
                        </label>
                        <label>
                            <span>Failed</span>
                            <input type="radio" value="failed" v-model="order.status" @change="updateStatus(order._id, 'failed')" />
                        </label>
                    </div>
                </section>
                <button @click="deleteOrderById(order._id)" class="delete_button">Delete</button>
            </li>
        </ul>


    </div>
</template>