
<template>
 
            
<nav class="navbar navbar-expand-lg" style="background-color: rosybrown;">
    
  <div class="container-fluid ">
        <a class="navbar-brand" href="#">
                    <img src="../assets/bookshelf.png"  width="50" height="48">
                </a>
        <a class="navbar-brand fs-2" style="color:white" href="#">BookTalk</a>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <RouterLink class="nav-link" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                     <RouterLink class="nav-link" to="/read">Read</RouterLink>
                    </li>
                    <li class="nav-item">
                    <RouterLink class="nav-link" to="/tbr">TBR</RouterLink>
                     </li>
                     <li class="nav-item">
                    <RouterLink class="nav-link" to="/bookshelf">Bookshelf</RouterLink>
                     </li>
            
                </ul>
            
            </div>
            

  </div>
</nav>
            
        
        
        
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>

.nav-link {
    color: black; 
}

.nav-link:hover {
    color: white; 
    text-decoration: border; 
}


.navbar-nav {
    flex:0.85;
    justify-content: center; 
    font-size: large;
}
</style>