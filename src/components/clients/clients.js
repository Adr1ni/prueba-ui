import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from "axios";

axios.defaults.baseURL = "http://3.15.142.158/api";

export default function users(){
    const router = useRouter()
    const cliente = ref([])
    const clientes = ref([])

    const getAllClientes = async(form) =>{
        await axios.post('/clientes', form)
            .then(response => {
                if(response.data.success){
                    localStorage.setItem('data', response.data.data)
                    router.push('/home')
                }else{
                    alert(response.data.message)
                }
        })
    }

    const addCliente = async (form) => {
        await axios.post('/clientes', form)
            .then(response => {
                if (response.data.success) {
                    router.push('/')
                } else {
                    const { message } = response.data
                    const field = Object.keys(message)[0]
                    alert(message[field])
                }
            })
    }

    const updateCliente = async(id,form) =>{
        await axios.put('/clientes/'+ id, form)
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

    const getByIdCliente = async() =>{
        await axios.get('/user-profile')
            .then(response => {
                if(response.data.success){
                    cliente.value = response.data.data
                }else{
                  const { message } = response.data
                  const field = Object.keys(message)[0]
                  alert(message[field])
                }
          })
    }

    
    const deleteCliente = async (id) => {
        if(!window.confirm("Estas seguro de eliminar tu usuario?")){
            return;
        }
        await axios.delete('/users/' + id)
            .then(response => {
                if (response.data.success) {
                    localStorage.removeItem('data')
                    router.push('/')
                } else {
                    alert(response.data.message);
                }
            })
    }
    return{
        cliente,
        clientes,
        getAllClientes,
        getByIdCliente,
        updateCliente,
        deleteCliente,
        addCliente,
    }

}