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

export default function productosCrud(){
    const router = useRouter()
    const producto = ref([])
    const productos = ref([])

    const getProductos = async () => {
        await axiosInstance.get('/productos')
          .then(response => {
            productos.value = response.data;
          });
    }

    const insertProducto = async(form) =>{
        await axiosInstance.post('/productos', form)
            .then(response => {
                if(response.data.success){
                    router.push('/productos')
                }else{
                  const { message } = response.data
                  const field = Object.keys(message)[0]
                  alert(message[field])
                }
            })
    }

    const updateProducto = async(id) =>{
        await axiosInstance.put('/productos/'+ id, producto.value)
            .then(response => {
                if(response.data.success){
                    router.push('/productos')
                }else{
                  const { message } = response.data
                  const field = Object.keys(message)[0]
                  alert(message[field])
                }
            })
    }

    
    const getProductoById = async(id) =>{
        await axiosInstance.get('/productos/' + id)
            .then(response => {
                if(response){
                    producto.value = response.data
                }else{
                  const { message } = response.data
                  const field = Object.keys(message)[0]
                  alert(message[field])
                }
          })
    }

    const deleteProducto = async (id) => {
        if(!window.confirm("Estas seguro de eliminar?")){
            return;
        }
        await axiosInstance.delete('/productos/' + id)
            .then(response => {
                if (response.data.success) {
                    router.push('/productos')
                } else {
                    alert(response.data.message);
                }
            })
    }

    return{
        producto,
        productos,
        deleteProducto,
        getProductoById,
        insertProducto,
        updateProducto,
        getProductos,
    }
}