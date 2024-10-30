<template>
  
  
  <h1 class="add-h1">Read Books</h1>
 
  
      <!-- Display the list of books -->
      <div class="book-card" v-for="book in visibleBooks" :key="book.id">
        
          <strong>Book</strong>
          <img v-if="book.imageUrl" :src="book.imageUrl" alt="Book cover" class="book-cover" />

          <div class="book-details">
            <strong>Title:</strong> {{ book.title }}<br>
            <strong>Author:</strong> {{ book.author }}
            <strong>Rating:</strong> 
            <span v-if="!book.isEditing">{{ book.rating }}</span> 
              <select v-else v-model="book.tempRating">
                <option v-for="n in 6" :key="n" :value="n-1">{{ n-1 }}</option> 
              </select>
          </div>

          <div class="book-description">
            <strong>Description:</strong><br> 
            <p v-if="!book.isEditing">{{ book.description }}</p>
            <textarea v-else v-model="book.tempDescription"></textarea>
          </div>

            <div class="button-group">
              <button class="btn_editBook" @click="toggleEdit(book)">{{ book.isEditing ? 'Save' : 'Edit' }}</button>
              <button class="btn_deleteBook" @click="hideBook(book.id)">Delete</button>
            </div>
          
      </div> 
 
</template>

<script setup>
import { computed } from 'vue';
import { books as useBooks  } from '../modules/books.js';

// Get the data and methods from the books module
const {
  books,
  hideBook,
  toggleEdit,
} = useBooks();


const visibleBooks = computed(() => books.value.filter(book => book.location === 'ReadView' && !book.hidden));



</script>

<style scoped>

    .add-h1 {
      text-align: center;
      font-size: 35px;
      margin-top: 20px;
    }
    
    .book-details-inputs,
    .book-extra-inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      margin-right: 20px;
    }

    .book-details-inputs input,
    .book-extra-inputs input,
    .book-extra-inputs textarea {
      width: 100%;
      margin-bottom: 10px;
    
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }



    textarea {
    
      height: 80px;
    }
    .button-container{
    align-self: flex-start;
    }
    .btn_addBook {

      padding: 5px 10px ;
      border-radius: 5px;
      border: none;
      background-color: rosybrown;
      color: white;
      cursor: pointer;
    }
    .btn_addBook:hover {
      background-color: grey;
    }

    


    strong {
      font-weight: bold;
      font-size: large;
      margin: 10px;
      padding: 10px;
      
    }


    .book-card {
      display: flex;
      align-items: center;
      justify-content:center;
      
      border: 2px solid #000000;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 15px;
      margin-left: 20%;
      background-color: #ffffff;
      width: 60%;

    }
    .book-cover {
      width: 100px;
      height: auto;
      margin-right: 15px;
      border-radius: 5px;
    }
    .book-details{
      flex:1;
    }
    .book-description {
      margin-top: 8px; 
      padding: 8px;
      
    }

    .book-description strong {
      font-weight: bold;
      
    }

    .book-description p {
      margin: 5px 0 0;
      
    }
    .button-group{
      display: flex;
      gap:10px;
      margin-top: 20%;
    }

    .btn_editBook,
    .btn_deleteBook {
      padding: 10px ;
      
      border-radius: 5px;
      border: none;
      background-color: rosybrown;
      color: white;
      cursor: pointer;
    }
    .btn_editBook:hover,
    .btn_deleteBook:hover {
      background-color: grey;
    }

</style>
 