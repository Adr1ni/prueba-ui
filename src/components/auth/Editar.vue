<script setup>
import { onMounted } from 'vue';
import users from './users';

const {update,user,userData} = users()

onMounted(async () => {
  await userData();
});

</script>
<template>
    <form @submit.prevent="update(user.id)" class="container mx-auto mt-10 p-8 bg-gray-100 rounded-lg shadow-md">
      <div class="flex justify-end mt-1">
        <router-link to="/" class="btn bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-yellow active:bg-yellow-800">
          Atrás
        </router-link>
        </div>
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Nombre:</label>
        <input
          type="text"
          id="name"
          v-model="user.name"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="lastname" class="block text-sm font-medium text-gray-700">Apellido:</label>
        <input
          type="text"
          id="lastname"
          v-model="user.lastname"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          v-model="user.email"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña:</label>
        <input
          type="password"
          id="password"
          v-model="user.password"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="c_password" class="block text-sm font-medium text-gray-700">Confirmar Contraseña:</label>
        <input
          type="password"
          id="c_password"
          v-model="user.c_password"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="dni" class="block text-sm font-medium text-gray-700">DNI:</label>
        <input
          type="text"
          id="dni"
          v-model="user.dni"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="telefono" class="block text-sm font-medium text-gray-700">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          v-model="user.telefono"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección:</label>
        <input
          type="text"
          id="direccion"
          v-model="user.direccion"
          class="input input-field"
          required
        />
      </div>
  
      <div>
        <input type="submit" class="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800" value="Guardar" />
      </div>
    </form>
</template>