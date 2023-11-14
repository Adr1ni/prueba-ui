import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name:"Home",    
        path:'/home',
        component:() => import('../components/facturaciom/Facturacion.vue'),
        meta:{
            requiresAuth:true
        }
    },

    {
        name:"CrearFactura",    
        path:'/factura/create',
        component:() => import('../components/facturaciom/CrearFactura.vue'),
        meta:{
            requiresAuth:true
        }
    },

    {
        name:"CrearDetalle",    
        path:'/detalle/create/:id',
        component:() => import('../components/facturaciom/detalle/CrearDetalle.vue'),
        meta:{
            requiresAuth:true
        },
        props:true
    },

    {
        name: 'Detalle',
        path: '/detalles/:id',
        component: () => import('../components/facturaciom/detalle/Detalle.vue'),
        meta: {
          requiresAuth: true,
        },
        props:true
    },
      

    {
        name:'Login',
        path:"/iniciar-sesion",
        component:() => import("../components/auth/Login.vue"),
        meta:{
            requiresAuth:false
        }
    },

    {
        name:"Register",
        path:"/registro",
        component:() => import("../components/auth/Register.vue"),
        meta:{
            requiresAuth:false
        }
    },

    {
        name:'Update',
        path:"/actualizar",
        component: () => import("../components/auth/Editar.vue"),
        meta:{
            requiresAuth:true
        },

    },

    {
        name:'FacturacionDetalle',
        path:"/facturacion/:id",
        component: () => import("../components/facturaciom/FacturacionDetalle.vue"),
        meta:{
            requiresAuth:true
        },
        props:true
    },

    {
        name:'Productos',
        path:"/productos",
        component: () => import("../components/facturaciom/producto/Productos.vue"),
        meta:{
            requiresAuth:true
        }
    },

    {
        name:'CrearProdcuto',
        path:"/producto/create",
        component: () => import("../components/facturaciom/producto/CrearProducto.vue"),
        meta:{
            requiresAuth:true
        }
    },

    {
        name:'EditarProducto',
        path:"/producto/:id",
        component: () => import("../components/facturaciom/producto/EditarProducto.vue"),
        meta:{
            requiresAuth:true
        },
        props:true
    },

    {
        name:'Inicio',
        path:"/",
        component: () => import("../Main.vue"),
        meta:{
            requiresAuth:false
        }
    },

    {
        name: 'Clientes',
        path: '/clientes',
        component: () => import('../components/clients/Clientes.vue'),
        meta: {
          requiresAuth: true,
        },
    },

    {
        name: 'EditarCliente',
        path: '/editar-clientes/:id',
        component: () => import('../components/clients/EditarCliente.vue'),
        meta: {
          requiresAuth: true,
        },
        props:true
    },

    {
        name: 'FacturaPdf',
        path: '/factura-detalles-pdf/:id',
        component: () => import('../components/facturaciom/FacturaPdf.vue'),
        meta: {
          requiresAuth: true,
        },
        props:true
    },

    //Not Found
    {
        name:'NotFound',
        path:"/:pathMatch(.*)*",
        component: () => import("../NotFound.vue"),
        meta:{
            requiresAuth:false
        }
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, form) => {
  if (to.meta.requiresAuth && !localStorage.getItem("data")) {
      return { name: "Login" };
  }

  if (!to.meta.requiresAuth && localStorage.getItem("data")) {
      return { name: "Home" };
  }
});

export default router;