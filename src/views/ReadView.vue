<template>
  
  
   <h1 class="add-h1">Your Read Books</h1>
    <p class="add-p">Add a Book</p>

    <!-- Input fields for adding a new book -->
    <div class="add-form">
    <input
      type="text"
      v-model="newBookTitle"
      placeholder="Add a new book"
    />
    <input
      type="text"
      v-model="newAuthor"
      placeholder="Add an author"
    />

    <!-- Button to add the book -->
    <button class="btn_addBook" @click="addBook">Add Book</button>
  </div>

  <h1 class="add-h1">See All</h1>

  
      <!-- Display the list of books -->
      <div class="book-card" v-for="book in books" :key="book.id">
        <img v-if="book.imageUrl" :src="book.imageUrl" alt="Book cover" class="book-cover" />
        <strong>Title:</strong> {{ book.title }}<br>
        <strong>Author:</strong> {{ book.author }}
      </div>



   
 
</template>

<script setup>

import { books as useBooks  } from '../modules/books.js';


// Get the data and methods from the books module
const {
  books,
  newBookTitle,
  newAuthor,
  
  addBook
} = useBooks();

// Add a new ref for image URL in `addBook` function
// const newImageUrl = ref(''); // Commented out to avoid redeclaration


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
.add-form {
  margin: 20px auto;
  padding: 20px;
  width: 50%;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  justify-content: center;
 
}
input {
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid;
}
.btn_addBook {

  padding: 10px ;
  border-radius: 5px;
  border: none;
  background-color: rosybrown;
  color: white;
  cursor: pointer;
}

/* Styling for the Book List Component */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;

}
.book-list {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.book-card {
  display: flex;
  align-items: center;
  justify-content:center;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f9f9f9;
 

}
.book-cover {
  width: 100px;
  height: auto;
  margin-right: 15px;
  border-radius: 5px;
}
</style>
 