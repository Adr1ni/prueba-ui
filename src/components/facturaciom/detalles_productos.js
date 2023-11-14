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

export default function detalle_producto(){
    const router = useRouter()
    const producto = ref([])
    const detalle = ref([])

    const insertDetalle = async(form) =>{
        await axiosInstance.post('/detalles', form)
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

    const updateDetalle = async(id) =>{
        await axiosInstance.put('/detalles/'+ id, detalle.value)
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

    
    const getDetalleById = async(id) =>{
        await axiosInstance.get('/detalles/' + id)
            .then(response => {
                if(response){
                    detalle.value = response.data
                }else{
                  const { message } = response.data
                  const field = Object.keys(message)[0]
                  alert(message[field])
                }
          })
    }

    const deleteDetalle = async (id) => {
        if(!window.confirm("Estas seguro de eliminar?")){
            return;
        }
        await axiosInstance.delete('/detalles/' + id)
            .then(response => {
                if (response.data.success) {
                    router.push('/home')
                } else {
                    alert(response.data.message);
                }
            })
    }

    const getProductoByDetalleFacturaId = async (id) => {
        await axiosInstance.get('/detalles/' + id + '/producto')
            .then(response => {
                if (response) {
                    producto.value = response.data
                }else{
                    const { message } = response.data
                    const field = Object.keys(message)[0]
                    alert(message[field])
                }
            })
    }

    return{
        producto,
        detalle,
        deleteDetalle,
        insertDetalle,
        updateDetalle,
        getDetalleById,
        getProductoByDetalleFacturaId
    }
}