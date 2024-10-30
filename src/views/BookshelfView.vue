<template>
    <div>
      <h1 class="add-h1">Bookshelf</h1>
      <!-- Display the list of books from ReadView -->
       <div class="bookshelf-grid">
          <div class="book-card" v-for="book in visibleBooks" :key="book.id">
            <strong class="book-details">Book</strong>
            <img v-if="book.imageUrl" :src="book.imageUrl" alt="Book cover" class="book-cover" />
            <strong class="book-details">Title:</strong> {{ book.title }}<br>
            <strong class="book-details">Author:</strong> {{ book.author }}<br>
            <strong class="book-details">Rating:</strong> <span>{{ book.rating }}</span><br>
            <strong class="book-details">Description:</strong><br> <p>{{ book.description }}</p>
          </div>
        </div>
    
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { books as useBooks } from '../modules/books.js';
  
  // Get the data and methods from the books module
  const { books } = useBooks();
  const visibleBooks = computed(() => books.value.filter(book => book.location === 'ReadView' && !book.hidden));
  </script>

  <style scoped>
  .add-h1 {
    text-align: center;
    font-size: 35px;
    margin-top: 20px;
  }
  .add-p{
    text-align: center;
    font-size: 20px;
  }
 
  .bookshelf-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* To show two cards per row */
  gap: 20px; /* Space between cards */
  margin: 20px auto;
  max-width: 1200px; /* Optional, limits width of grid */
}

.book-card {
  background-color: rosybrown;
  border: 2px solid #000000;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-cover {
  width: 100%;
  height: auto;
  max-width: 200px;
  margin-bottom: 15px;
  border-radius: 5px;
}



.book-details{
  font-weight: bold;
  font-size: 25px;
  display: block;
  margin-bottom: 5px;
}

.book-details p {
  margin: 5px 0;
  line-height: 1.4;
}
 
  
 
  
  </style>
   