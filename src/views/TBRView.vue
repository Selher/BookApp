<template>
  
  
  <h1 class="add-h1">To Be Read Books</h1>
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
           <div class="button-group">
             
             
             <button class="btn_moveBook" @click="moveBook(book.id, 'ReadView')">Move to Read</button>
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
 newImageUrl,
 moveBook,
} = useBooks();


const visibleBooks = computed(() => books.value.filter(book => book.location === 'TBRView' && !book.hidden));



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


.btn_moveBook {
 padding: 10px ;
 border-radius: 5px;
 border: none;
 background-color: rosybrown;
 color: white;
 cursor: pointer;
}

.btn_moveBook:hover {
 background-color: grey;
}

</style>
