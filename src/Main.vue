<template>
    <div class="container mx-auto mt-10 p-8 bg-gray-100 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-4 underline">
        Bienvenido
      </h1>
      
      <div class="flex space-x-4">
        <router-link to="iniciar-sesion" class="btn bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Iniciar Sesión
        </router-link>
        
        <router-link to="registro" class="btn-two bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-green active:bg-green-800">
          Registrarse
        </router-link>
      </div>
    </div>
  </template>
  