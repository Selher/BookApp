<template>
  
  
   <h1 class="add-h1">Read Books</h1>
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
    <input
      type="text"
      v-model="newImageUrl"
      placeholder="Add an image URL"
    />
    <input type="number" v-model="newRating" min="0" max="5" placeholder="Rate" />
    <!-- Button to add the book -->
    <button class="btn_addBook" @click="addBook()">Add Book</button>
  </div>

  <h1 class="add-h1">See All</h1>

  
      <!-- Display the list of books -->
      <div class="book-card" v-for="book in visibleBooks" :key="book.id">
        
          <strong>Book</strong>
          <img v-if="book.imageUrl" :src="book.imageUrl" alt="Book cover" class="book-cover" />
          <strong>Title:</strong> {{ book.title }}<br>
          <strong>Author:</strong> {{ book.author }}
          <strong>Rating:</strong> 
          <span v-if="!book.isEditing">{{ book.rating }}</span> 
            <select v-else v-model="book.tempRating">
               <option v-for="n in 6" :key="n" :value="n-1">{{ n-1 }}</option> 
            </select>
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
  newBookTitle,
  newAuthor,
  addBook,
  hideBook,
  newImageUrl,
  newRating,
  
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
.add-p{
  text-align: center;
  font-size: 20px;
}
.add-form {
  margin: 20px auto;
  padding: 20px;
  width: 50%;
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
.btn_addBook:hover {
  background-color: grey;
}

/* Styling for the Book List Component */


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
 