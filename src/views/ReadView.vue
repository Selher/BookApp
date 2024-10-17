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
    <ul>
      <li v-for="book in books" :key="book.id">
        <strong>ID:</strong> {{ book.id }}<br>
        <strong>Title:</strong> {{ book.title }}<br>
        <strong>Author:</strong> {{ book.author }}
      </li>
    </ul>

 
</template>

<script setup>
import { books } from '../modules/books.js';

// Get the data and methods from the books module
const {
  newBookTitle,
  newAuthor,
  addBook
} = books();
</script>

<style scoped>

.add-h1{
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

</style>
 