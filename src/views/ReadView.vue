<template>
  <div class="about">
    <h1>See your read books</h1>
    <input type="text" v-model="newBookTitle" placeholder="Add a new book" />
    <input type="text" v-model="newBookAuthor" placeholder="Add a author" />
    
    <button class="btn_addBook" @click="addBook">Add Book</button>
    <ul>
      <li v-for="book in books" :key="book.id">
        id: {{ book.id }}
        Title: {{ book.title }}
        Director: {{ book.director }}
        <ul>
          <li v-for="authorName in book.author" :key="authorName">
            Actor: {{ actorName }}
          </li>
        </ul>
      
        <button @click="removeBook(book.id)">Delete me</button>
      </li>
    </ul>
  </div>
</template>

  <script setup>
  import {books} from '../modules/books.js';

  const {
    addBook,
    removeBook,
  } = books();

  </script>
 