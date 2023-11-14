<script setup>

import { onMounted,defineProps } from 'vue';
import detalle_producto from '../detalles_productos';

const {getDetalleById,detalle,updateDetalle,getProductoByDetalleFacturaId,producto} = detalle_producto()

const props = defineProps(['id']);
onMounted(async () => {
    getDetalleById(props.id)
    getProductoByDetalleFacturaId(props.id)
})

const submitForm = () => {
    updateDetalle(props.id);
};

</script>

<template>
    <div class="bg-gray-300 p-10 rounded-lg">
    <h1 class="text-4xl font-bold text-blue-700 mb-6">Detalle</h1>
    <div class="flex justify-end mt-1">
      <router-link to="/" class="btn bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-yellow active:bg-yellow-800">
        Atrás
      </router-link>
    </div>
    <div class="container mx-auto mt-8 flex">
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="cantidad" class="block text-sm font-medium text-gray-700">Cantidad:</label>
          <input type="number" id="cantidad" v-model="detalle.cantidad" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="descuento" class="block text-sm font-medium text-gray-700">Descuento:</label>
          <input type="text" id="descuento" v-model="detalle.descuento" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="igv" class="block text-sm font-medium text-gray-700">IGV:</label>
          <input type="text" id="igv" v-model="detalle.igv" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="subtotal" class="block text-sm font-medium text-gray-700">Subtotal:</label>
          <input type="text" id="subtotal" v-model="detalle.subtotal" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="total" class="block text-sm font-medium text-gray-700">Total:</label>
          <input type="text" id="total" v-model="detalle.total" class="input input-field" required>
        </div>
  
        <div>
          <button type="submit" class="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Guardar Cambios</button>
        </div>
      </form>
    
    <div class="ml-8">
      <h2 class="text-xl font-semibold mb-4">Información del Producto</h2>
      <div class="mb-2">
        <strong>Descripción:</strong> {{ producto.descripcion }}
      </div>
      <div class="mb-2">
        <strong>Stock:</strong> {{ producto.stock }}
      </div>
      <div class="mb-2">
        <strong>Precio Unitario:</strong> {{ producto.precio_unitario }}
      </div>
      <div class="mb-2">
        <strong>Categoría:</strong> {{ producto.categoria }}
      </div>
    </div>
    </div>
</div>
</template>

  