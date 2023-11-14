<script setup>
  import { reactive,onMounted } from 'vue';
  import productosCrud from './productos';

const { updateProducto,getProductoById,producto } = productosCrud();

const props = defineProps(['id']);

onMounted(async () => {
    getProductoById(props.id)
});
</script>

<template>
    <div class="flex items-center justify-center min-h-screen">

      <form @submit.prevent="updateProducto(producto.id)" class="max-w-lg w-full p-8 bg-white shadow-md rounded-md overflow-hidden">
        <h1 class="text-4xl font-bold text-blue-700 mb-6">Producto</h1>
        <div class="flex justify-end mt-1">
        <router-link to="/productos" class="btn bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-yellow active:bg-yellow-800">
          Atrás
        </router-link>
        </div>
        <div class="mb-4">
          <label for="descripcion" class="block text-sm font-medium text-gray-700">Descripción:</label>
          <input type="text" id="descripcion" v-model="producto.descripcion" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="stock" class="block text-sm font-medium text-gray-700">Stock:</label>
          <input type="number" id="stock" v-model="producto.stock" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="precio_unitario" class="block text-sm font-medium text-gray-700">Precio Unitario:</label>
          <input type="number" id="precio_unitario" v-model="producto.precio_unitario" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="categoria" class="block text-sm font-medium text-gray-700">Categoría:</label>
          <input type="text" id="categoria" v-model="producto.categoria" class="input input-field" required>
        </div>
  
        <div>
          <button type="submit" class="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Guardar Producto</button>
        </div>
  
      </form>
    </div>
  </template>