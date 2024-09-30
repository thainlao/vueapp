import type { IOrders, IProducts } from "@/api/types";
import axios from "axios";
import { defineStore } from "pinia";

export const useOrderStore = defineStore('orderStore', {
    state: () => ({
        allOrders: [] as any[],
        loading: false,
        error: null as string | null
    }),
    actions: {
        async makeOrder(orderData: IOrders){
            this.loading = true
            try {
                let res = await axios.post('http://localhost:3000/order/create', orderData);
                return res.data;
            } catch (e) {
                this.error = 'Ошибка'
            } finally {
                this.loading = false
            }
        },
        async getAllOrders(){
            this.loading = true;
            try {
                let res = await axios.get('http://localhost:3000/order/allorders');
                this.allOrders = res.data.allOrders;
            } catch(e) {
                this.error = 'Ошибка'
            } finally {
                this.loading = false;
            }
        },
        async updateOrderStatus(id: string, newStatus: string){
            try {
                await axios.put('http://localhost:3000/order/update', {
                    id, status: newStatus
                })
            } catch(e) {
                this.error = 'Ошибка'
            } 
        },
        //delete
        async deleteOrder(id: any){
            try {
                await axios.post('http://localhost:3000/order/delete', {id})
                this.allOrders = this.allOrders.filter(order => order._id !== id);
            } catch(e) {
                this.error = 'Ошибка'
            }
        }
        
    }
})