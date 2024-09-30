<script setup lang="ts">

import { UseuserStore } from '@/stores/userStore';
import '@/styles/about.css'
import { onMounted } from 'vue';

    let userStore = UseuserStore();

    onMounted(() => {
        userStore.fetchUsers();
    })
</script>

<template>
    <div class="user-list">
      <h1>Список пользователей</h1>
  
      <!-- Показываем индикатор загрузки, пока идет запрос -->
      <div v-if="userStore.loading">Загрузка...</div>
  
      <!-- Показываем ошибку, если запрос завершился неудачно -->
      <div v-if="userStore.error">{{ userStore.error }}</div>
  
      <!-- Показываем пользователей -->
      <ul v-if="!userStore.loading && !userStore.error">
        <li v-for="user in userStore.users" :key="user.id">
          <h3>{{ user.name }}</h3>
          <p>Email: {{ user.email }}</p>
          <p>Phone: {{ user.phone }}</p>
          <p>Website: {{ user.website }}</p>
        </li>
      </ul>
    </div>
</template>

<style scoped>
.user-list {
  margin: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
}
</style>