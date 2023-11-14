import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from "axios";

const authToken = localStorage.getItem('data');

const axiosInstance = axios.create({
  baseURL: "http://3.15.142.158/api",
  headers: {
    Authorization: `Bearer ${authToken}`, 
    'Content-Type': 'application/json',
  },
});

export default function facturas(){
    const router = useRouter()
    const fac = ref([])
    const detalles = ref([])
    const totalFacturas = ref([])
    const factura_pdf = ref([])

    const insertFactura = async(form) =>{
        await axiosInstance.post('/facturas', form)
            .then(response => {
                if(response.data.success){
                    router.push('/home')
                }else{
                    const { message } = response.data
                    const field = Object.keys(message)[0]
                    alert(message[field])
                }
        })
    }

    const updateFactura = async(id) =>{
        await axiosInstance.put('/facturas/'+ id, fac.value)
            .then(response => {
                if(response.data.success){
                    router.push('/home')
                }else{
                  const { message } = response.data
                  const field = Object.keys(message)[0]
                  alert(message[field])
                }
            })
    }

    const getById = async(id) =>{
        await axiosInstance.get('/facturas/' + id)
            .then(response => {
                if(response){
                    fac.value = response.data
                }else{
                  const { message } = response.data
                  const field = Object.keys(message)[0]
                  alert(message[field])
                }
          })
    }
    
    const deleteFactura = async (id) => {
        if(!window.confirm("Estas seguro de eliminar?")){
            return;
        }
        await axiosInstance.delete('/facturas/' + id)
            .then(response => {
                if (response.data.success) {
                    router.push('/home')
                } else {
                    alert(response.data.message);
                }
            })
    }

    const allFacturas = async () => {
        await axiosInstance.get('/facturas')
          .then(response => {
            totalFacturas.value = response.data;
          });
    }

    const getDetallesByFacturaId = async (id) => {
        await axiosInstance.get('/facturas/' + id + '/detalle_facturas')
            .then(response => {
                factura_pdf.value = response.data
                detalles.value = response.data.detalles;
            });
    }
    

    return{
        totalFacturas,
        fac,
        detalles,
        factura_pdf,
        getDetallesByFacturaId,
        allFacturas,
        deleteFactura,
        insertFactura,
        updateFactura,
        getById,
    }
}