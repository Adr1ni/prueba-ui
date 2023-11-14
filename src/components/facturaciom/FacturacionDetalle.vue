<script setup>
import { onMounted,defineProps } from 'vue';
import facturas from './factura';
import detalle_producto from './detalles_productos';

const {getDetallesByFacturaId,getById,fac,detalles,updateFactura} = facturas()
const {deleteDetalle} = detalle_producto()

const props = defineProps(['id']);

onMounted(async () => {
    getById(props.id); 
    getDetallesByFacturaId(props.id);
});
const submitForm = () => {
    updateFactura(props.id);
};

</script>

<template>
    <div class="bg-gray-300 p-10 rounded-lg">
    <h1 class="text-4xl font-bold text-blue-700 mb-6">Factura</h1>
    <div class="flex justify-end mt-1">
  <router-link to="/" class="btn bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-yellow active:bg-yellow-800">
    Atrás
  </router-link>

  <router-link :to="{ name: 'CrearDetalle' ,params: { id: fac.id }, props: true}" class="btn bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-yellow active:bg-yellow-800 ml-2">
    Crear Detalle
  </router-link>
</div>

    <div class="container mx-auto mt-8 flex">
        <div>
        <form @submit.prevent="submitForm">
        <div class="mb-4">
            <label for="fecha_emision" class="block text-sm font-medium text-gray-700">Fecha de Emisión:</label>
            <label class="block text-sm font-medium text-black-700">{{ fac.fecha_emision }}</label>
        </div>

        <div class="mb-4">
            <label for="fecha_vencimiento" class="block text-sm font-medium text-gray-700">Fecha de Vencimiento:</label>
            <label class="block text-sm font-medium text-black-700">{{ fac.fecha_vencimiento }}</label>
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
            <button type="submit" class="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">Guardar Cambios</button>
        </div>
        </form>
        </div>

        <div class="ml-8" v-if="detalles.length > 0">
        <h2 class="text-2xl font-semibold mb-4">Detalles de la Factura</h2>
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
            <thead>
                <tr>
                <th class="px-4 py-2">Producto</th>
                <th class="px-4 py-2">Cantidad</th>
                <th class="px-4 py-2">Total</th>
                <th class="px-4 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="detalle in detalles" :key="detalle.id">
                <td class="border px-4 py-2">{{ detalle.producto.descripcion }}</td>
                <td class="border px-4 py-2">{{ detalle.cantidad }}</td>
                <td class="border px-4 py-2">{{ detalle.total }}</td>
                <td class="border px-4 py-2">
                    <router-link :to="{ name: 'Detalle', params: { id: detalle.id }, props: true }" 
                    class="btn bg-green-500 hover:bg-green-700 text-white px-2 py-1 mr-2">Editar</router-link>
                    <button @click="deleteDetalle(detalle.id)" class="btn bg-red-500 hover:bg-red-700 text-white px-2 py-1">Eliminar</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>
</template>


  