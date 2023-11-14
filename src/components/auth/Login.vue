<script setup>
  import { reactive } from 'vue';
  import users from './users';
  
  const { login } = users();
  
  const form = reactive({
    email: '',
    password: ''
  });
  
  const handleLogin = () => {
    login(form);
  };
</script>

<template>
    <form @submit.prevent="handleLogin" class="container mx-auto mt-10 p-8 bg-gray-100 rounded-lg shadow-md">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico:</label>
        <input
          type="email"
          placeholder="Ingrese su email"
          v-model="form.email"
          class="input input-field"
          minlength="4"
          autocomplete="off"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña:</label>
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          v-model="form.password"
          class="input input-field"
          autocomplete="off"
          required
        />
      </div>
  
      <div class="flex items-center space-x-4">
        <input type="submit" class="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800" value="Ingresar" />
        <router-link to="/" class="btn bg-gray-400 hover:bg-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-gray active:bg-gray-800">Cancelar</router-link>
      </div>
    </form>
  </template>
  

  

