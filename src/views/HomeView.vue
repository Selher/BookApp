
<template>
  <main>
  
    
    <div class="container">
  <div class="image-container">
    <img src="../assets/front-page.jpg" alt="" class="img-fluid">
    <div class="overlay-header">Welcome to BookEase</div>
    <div class="overlay-text">Scroll down to login</div>
  </div>
</div>

<div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
          required
        />
      </div>
      <button v-if="!user" @click="login('BookEase@admin.com', '123456')">Login</button>
        <button v-if="user" @click="logout">Logout</button>
        <p v-if="user">Logged in as: {{ user.email }}</p>
    </form>
    <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
  </div>

      <div>
        
      </div>
    
 
  

  </main>
</template>

<script setup>
import {logIn} from '../modules/logIn.js'

const { user, login, logout } = logIn()

</script>

<style scoped>
  .image-container {
      position: relative;
      width: 100%; /* Adjust width as needed */
    }
    .image-container img {
      width: 100%; /* Ensure the image fits the container */
      height: auto;
    }
    .overlay-header {
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, 50%);
      color: black;
      font-size: 50px;
      
      padding: 10px;
     
    }
    .overlay-text{
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, 100%);
      color: black;
      font-size: 30px;
      padding: 10px;
    }
  
</style>
