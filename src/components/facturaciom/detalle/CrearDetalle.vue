<script setup>
import { onMounted, reactive } from 'vue';
import facturas from '../detalles_productos';
import productosCrud from '../producto/productos';

const {insertDetalle} = facturas()
const {getProductos,productos} = productosCrud()

const props = defineProps(['id']);

let detalle = reactive({
  factura_id : props.id,
	cantidad: 0,
  descuento: 0,
  producto_id: 0,
})


onMounted(async () => {
    getProductos()
});

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
      <form @submit.prevent="insertDetalle(detalle)">
        <div class="mb-4">
          <label for="producto" class="block text-sm font-medium text-gray-700">Producto:</label>
          <select id="producto" v-model="detalle.producto_id" class="input input-field" required>
            <option :value="null" disabled>Selecciona un producto</option>
            <option v-for="producto in productos" :key="producto.id" :value="producto.id">{{ producto.descripcion }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="cantidad" class="block text-sm font-medium text-gray-700">Cantidad:</label>
          <input type="number" id="cantidad" v-model="detalle.cantidad" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="descuento" class="block text-sm font-medium text-gray-700">Descuento:</label>
          <input type="text" id="descuento" v-model="detalle.descuento" class="input input-field" required>
        </div>
        <div>
          <button type="submit" class="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Guardar</button>
        </div>
      </form>
      </div>
      </div>
</template>