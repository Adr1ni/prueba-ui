<template>
    <div>
      <div class="invoice-container">
        <!-- Datos de la Empresa -->
        <div class="company-details">
          <h2>Nombre de la Empresa</h2>
          <p>Dirección de la Empresa</p>
          <p>Teléfono: XXX-XXX-XXXX</p>
          <!-- Otros detalles de la empresa según tus necesidades -->
        </div>
    
        <!-- Datos de la Factura -->
        <div class="invoice-details">
          <h3>Factura #{{ factura_pdf.id }}</h3>
          <p>Fecha de Emisión: {{ factura_pdf.fecha_emision }}</p>
          <p>Fecha de Vencimiento: {{ factura_pdf.fecha_vencimiento }}</p>
          <p>Moneda: {{ factura_pdf.moneda }}</p>
          <p>Condición de Pago: {{ factura_pdf.condicion_pago }}</p>
          <p>Observación: {{ factura_pdf.observacion }}</p>
        </div>
    
        <!-- Detalles de la Factura -->
        <div class="invoice-items">
          <h3>Detalle de la Factura</h3>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Descuento</th>
                <th>IGV</th>
                <th>Subtotal</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detalle in factura_pdf.detalles" :key="detalle.id">
                <td>{{ detalle.producto.descripcion }}</td>
                <td>{{ detalle.cantidad }}</td>
                <td>{{ detalle.descuento }}</td>
                <td>{{ detalle.igv }}</td>
                <td>{{ detalle.subtotal }}</td>
                <td>{{ detalle.total }}</td>
              </tr>
            </tbody>
            <tfoot>
            <tr>
              <td colspan="5" style="text-align: right; font-weight: bold;">Total</td>
              <td>{{ factura_pdf.totalDetalles }}</td>
            </tr>
          </tfoot>
          </table>
        </div>
      </div>
      
      <!-- Mover el botón fuera del contenedor principal -->
      <button class="export-btn" @click="exportToPdf">Exportar Pdf</button>
    </div>
  </template>
  
  <script setup>
  import { onMounted, defineProps,ref } from 'vue';
  import VueHtml2Pdf from 'vue-html2pdf';
  import facturas from './factura';
  
  const props = defineProps(['id']);
  const { getDetallesByFacturaId, factura_pdf } = facturas();
  
  const total = ref(0);

onMounted(async () => {
  await getDetallesByFacturaId(props.id);
});

  
  const exportToPdf = () => {
    const options = {
      margin: 1,
      filename: 'facturadf-' + factura_pdf.id,
    };
  
    VueHtml2Pdf.createPdf(document.getElementById('invoice-container'), options);
  };
  </script>
  
  <style scoped>
  /* Estilos CSS para el componente */
  .invoice-container {
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
    border: 1px solid #ddd; 
    border-radius: 8px; 
    overflow: hidden; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
  }
  
  .company-details {
    background-color: #f5f5f5;
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  .invoice-details {
    padding: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  .invoice-items {
    padding: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  h2, h3 {
    color: #333;
  }
  
  .export-btn {
    display: block;
    margin: 20px auto; /* Centrar el botón */
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .export-btn:hover {
    background-color: #0056b3;
  }
  </style>
  
  
  