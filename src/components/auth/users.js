import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from "axios";

axios.defaults.baseURL = "http://3.15.142.158/api";
const authToken = localStorage.getItem('data');

const axiosInstance = axios.create({
    baseURL: "http://3.15.142.158/api",
    headers: {
      Authorization: `Bearer ${authToken}`, 
      'Content-Type': 'application/json',
    },
  });

export default function users(){
    const router = useRouter()
    const user = ref([])
    const totalUsers = ref([])

    const login = async(form) =>{
        await axios.post('/login', form)
            .then(response => {
                if(response.data.success){
                    localStorage.setItem('data', response.data.data)
                    router.push('/home')
                }else{
                    alert(response.data.message)
                }
        })
    }

    const register = async (form) => {
        await axios.post('/users', form)
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

    const update = async(id) =>{
        await axiosInstance.put('/users/'+ id, user.value)
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

    const userData = async() =>{
        await axiosInstance.get('/user-profile')
            .then(response => {
                if(response.data.success){
                    user.value = response.data.data
                }else{
                  const { message } = response.data
                  const field = Object.keys(message)[0]
                  alert(message[field])
                }
          })
    }

    const logout = () => {
        localStorage.removeItem('data')
        router.push('/')
    
    }
    
    const deleteUser = async (id) => {
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

    const allUsers = async () => {
        await axios.get('/api/users')
          .then(response => {
            totalUsers.value = response.data.data;
          });
    }

    const userDataById = async (id) => {
        await axios.get('/users/' + id)
          .then(response => {
            user.value = response.data.data;
          });
    }

    return{
        login,
        register,
        userData,
        update,
        user,
        logout,
        deleteUser,
        allUsers,
        totalUsers,
        userDataById,
    }

}