import { ref, onMounted} from 'vue';
import { booksCollection } from './firebase';
import { onSnapshot, addDoc, deleteDoc, getDocs, doc } from 'firebase/firestore';

export const books = () => {
    // Step 1: Create a new movie title and director and store them in refs
    const newBookTitle = ref('');
    const newAuthor = ref('');
  
    // Step 2: Create a list of movies and store it in a ref
    const books = ref([]);
  
 
  
    // Fetch actors from Firebase
    const fetchBooks = async () => {
      const booksDocs = await getDocs(booksCollection);
      books.value = booksDocs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
    };
  
    // Step 4: Create a function to retrieve a new movie to the list
    onMounted(() => {
      onSnapshot(booksCollection, (snapshot) => {
        books.value = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data() // spread operator
        }));
      });
      fetchBooks();
    });
  
    // Step 5: Create a function to add a new movie to the list
    const addBook = async () => {
      if (newBookTitle.value.trim() === '' || newAuthor.value.trim() === '') return;
      // check if the input is empty, if input is empty, return (stop function)
  
      await addDoc(booksCollection, {
        title: newBookTitle.value,
        author: newAuthor.value,
        
      });
  
      newBookTitle.value = '';
      newAuthor.value = '';
      
    };
  
    // Step 6: Create a function to delete a movie from the list
    const deleteBook = async (id) => {
      console.log("deleting book with id: ", id);
      await deleteDoc(doc(booksCollection, id));
    };
  
     
  
    return {
      newBookTitle,
      newAuthor,
    
     
      addBook,
      deleteBook
    };
  };