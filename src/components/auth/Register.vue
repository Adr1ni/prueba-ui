<script setup>

import { reactive } from 'vue'
import users from './users';

const {register} = users()

let form = reactive({
	name: '',
  lastname: '',
  email: '',
  password: '',
  c_password: '',
  dni: '',
  telefono: '',
  direccion: '',
})

const handleRegister = () => {
    register(form);
};

</script>
<template>
    <form @submit.prevent="handleRegister" class="container mx-auto mt-10 p-8 bg-gray-100 rounded-lg shadow-md">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Nombre:</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="lastname" class="block text-sm font-medium text-gray-700">Apellido:</label>
        <input
          type="text"
          id="lastname"
          v-model="form.lastname"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Contraseña:</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="c_password" class="block text-sm font-medium text-gray-700">Confirmar Contraseña:</label>
        <input
          type="password"
          id="c_password"
          v-model="form.c_password"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="dni" class="block text-sm font-medium text-gray-700">DNI:</label>
        <input
          type="text"
          id="dni"
          v-model="form.dni"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="telefono" class="block text-sm font-medium text-gray-700">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          v-model="form.telefono"
          class="input input-field"
          required
        />
      </div>
  
      <div class="mb-4">
        <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección:</label>
        <input
          type="text"
          id="direccion"
          v-model="form.direccion"
          class="input input-field"
          required
        />
      </div>
  
      <div>
        <input type="submit" class="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800" value="Guardar" />
      </div>
    </form>
</template>
  
  
  
  

  
  