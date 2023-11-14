
<script setup>
import { onMounted } from 'vue';
import productosCrud from './productos';

const {getProductos,productos,deleteProducto} = productosCrud()

onMounted(async () => {
    getProductos()
});

</script>

<template>

<div class="container mx-auto mt-8">
    <router-link :to="{ name: 'CrearProdcuto'}" class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Crear
    </router-link>
    <table class="min-w-full bg-white shadow-md rounded-md overflow-hidden">
      <thead>
        <tr class="bg-gray-800 text-white">
          <th class="py-3 px-6 text-left">descripcion</th>
          <th class="py-3 px-6 text-left">Stock</th>
          <th class="py-3 px-6 text-left">Precio Unitario</th>
          <th class="py-3 px-6 text-left">Categoria</th>
          <th class="py-3 px-6 text-left">Editar</th>
          <th class="py-3 px-6 text-left">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto of productos" :key="producto._id" class="hover:bg-gray-100">
          <td class="py-4 px-6 border-b">{{ producto.descripcion }}</td>
          <td class="py-4 px-6 border-b">{{ producto.stock }}</td>
          <td class="py-4 px-6 border-b">{{ producto.precio_unitario }}</td>
          <td class="py-4 px-6 border-b">{{ producto.categoria }}</td>
          <td>
            <button @click="deleteProducto(producto.id)" class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-red active:bg-red-800">
              Eliminar
            </button>
          </td>
          <td>
            <router-link :to="{ name: 'EditarProducto', params: { id: producto.id }, props: true }" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Editar
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="fixed top-4 right-4 flex items-center">
    <router-link to="/" class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
      Atras
    </router-link>
  </div>
</template>