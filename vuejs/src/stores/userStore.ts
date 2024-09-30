import axios from "axios";
import { defineStore } from "pinia";

export const UseuserStore = defineStore('userStore', {
    state: () => ({
        users: [] as any[],
        loading: false,
        error: null as string | null
    }),
    actions: {
        async fetchUsers(){
            this.loading = true
            try {
                let res = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.users = res.data;
            } catch (e) {
                this.error = 'Ошибка'
            } finally {
                this.loading = false
            }
        }
    }
})