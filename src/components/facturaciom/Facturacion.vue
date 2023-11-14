<script setup>
import { onMounted } from 'vue';
import users from '../auth/users';
import factura from './factura';

const { logout } = users();
const { allFacturas, totalFacturas, deleteFactura } = factura();
onMounted(async () => {
  await allFacturas();
});
</script>

<template>
  <div class="container mx-auto mt-8">
    <router-link :to="{ name: 'CrearFactura'}" class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Crear
    </router-link>
    <table class="min-w-full bg-white shadow-md rounded-md overflow-hidden">
      <thead>
        <tr class="bg-gray-800 text-white">
          <th class="py-3 px-6 text-left">Fecha de Emisión</th>
          <th class="py-3 px-6 text-left">Fecha de Vencimiento</th>
          <th class="py-3 px-6 text-left">Moneda</th>
          <th class="py-3 px-6 text-left">Condición de Pago</th>
          <th class="py-3 px-6 text-left">Observación</th>
          <th class="py-3 px-6 text-left">Editar</th>
          <th class="py-3 px-6 text-left">Pdf</th>
          <th class="py-3 px-6 text-left">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="factura of totalFacturas" :key="factura._id" class="hover:bg-gray-100">
          <td class="py-4 px-6 border-b">{{ factura.fecha_emision }}</td>
          <td class="py-4 px-6 border-b">{{ factura.fecha_vencimiento }}</td>
          <td class="py-4 px-6 border-b">{{ factura.moneda }}</td>
          <td class="py-4 px-6 border-b">{{ factura.condicion_pago }}</td>
          <td class="py-4 px-6 border-b">{{ factura.observacion }}</td>
          
          <td>
            <router-link :to="{ name: 'FacturacionDetalle', params: { id: factura.id }, props: true }" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              Editar
            </router-link>
          </td>
          <td>
            <router-link :to="{ name: 'FacturaPdf', params: { id: factura.id }, props: true }" class="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-yelloy active:bg-blue-800">
              Pdf
            </router-link>
          </td>
          <td>
            <button @click="deleteFactura(factura.id)" class="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-red active:bg-red-800">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="fixed top-4 right-4 flex items-center">
    <router-link :to="{ name: 'Productos'}" class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
      Productos
    </router-link>
    <router-link :to="{ name: 'Update'}" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ml-4">
        Editar Perfil
    </router-link>
    <button
      class="btn bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-red active:bg-red-800 ml-4"
      @click="logout"
    >
      Cerrar sesión
    </button>
  </div>
</template>


