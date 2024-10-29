import { ref, onMounted } from 'vue';
import { booksCollection } from './firebase'; // Ensure this imports your Firestore collection correctly
import { onSnapshot, addDoc, } from 'firebase/firestore';

export const books = () => {
  // Step 1: Create refs for new book title and author
  const newBookTitle = ref('');
  const newAuthor = ref('');

  // Step 2: Create a ref to store the list of books
  const books = ref([]);

  // Step 3: Fetch all books from Firestore and update the books list
 /*  const fetchBooks = async () => {
    const booksDocs = await getDocs(booksCollection);
    books.value = booksDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }; */

  // Step 4: Use onMounted to get real-time updates and fetch books
  onMounted(() => {
    onSnapshot(booksCollection, (snapshot) => {
      books.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() // Spread operator to merge the id and document data
      }));
     
    });
   
  });

  // Step 5: Add a new book to Firestore
  const addBook = async (newAuthor, newBookTitle, newImageUrl) => {
    if (newBookTitle.value.trim() === '' || newAuthor.value.trim() === '' || newImageUrl.value.trim() ==='') return;

    await addDoc(booksCollection, {
      title: newBookTitle.value,
      author: newAuthor.value,
      imageUrl: newImageUrl.value.trim() || null,

    });

    newBookTitle.value = ''; // Clear the input fields after adding
    newAuthor.value = '';
    newImageUrl.value = '';
  };

  // Step 6: Return the state and actions
  return {
    newBookTitle,
    newAuthor,
    books,
    addBook,
    
  };
};
  
    // Step 6: Create a function to delete a movie from the list
   /*  const deleteBook = async (id) => {
      console.log("deleting book with id: ", id);
      await deleteDoc(doc(booksCollection, id));
    }; */
  
     
  
   