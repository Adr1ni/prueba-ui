<script setup>
import { onMounted } from 'vue';
import users from '../auth/users';

const { userData,user } = users();
onMounted(async () => {
  await userData();
});
</script>
<template>
    <router-link :to="{ name: 'FacturacionDetalle', params: { id: user.id }, props: true }" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Editar
    </router-link>
</template>