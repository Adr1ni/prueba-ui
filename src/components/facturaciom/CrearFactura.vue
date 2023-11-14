<script setup>
  import { reactive } from 'vue';
  import factura from './factura';

  const { insertFactura } = factura();

  const fac = reactive({
  empresa_id: 1,
  fecha_emision: '',
  fecha_vencimiento: '',
  moneda: '',
  condicion_pago: '',
  observacion: ''
});
  
</script>
<template>
    <div class="flex items-center justify-center min-h-screen">
      <form @submit.prevent="insertFactura(fac)" class="max-w-lg w-full p-8 bg-white shadow-md rounded-md overflow-hidden">
        <div class="mb-4">
          <label for="fecha_emision" class="block text-sm font-medium text-gray-700">Fecha de Emisión:</label>
          <input type="date" id="fecha_emision" v-model="fac.fecha_emision" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="fecha_vencimiento" class="block text-sm font-medium text-gray-700">Fecha de Vencimiento:</label>
          <input type="date" id="fecha_vencimiento" v-model="fac.fecha_vencimiento" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="moneda" class="block text-sm font-medium text-gray-700">Moneda:</label>
          <input type="text" id="moneda" v-model="fac.moneda" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="condicion_pago" class="block text-sm font-medium text-gray-700">Condición de Pago:</label>
          <input type="text" id="condicion_pago" v-model="fac.condicion_pago" class="input input-field" required>
        </div>
  
        <div class="mb-4">
          <label for="observacion" class="block text-sm font-medium text-gray-700">Observación:</label>
          <textarea id="observacion" v-model="fac.observacion" class="input input-field" rows="3" required></textarea>
        </div>
  
        <div>
          <button type="submit" class="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Guardar Factura</button>
        </div>
      </form>
    </div>
</template>
  

  