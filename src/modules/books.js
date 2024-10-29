import { ref, onMounted } from 'vue';
import { booksCollection } from './firebase'; // Ensure this imports your Firestore collection correctly
import { onSnapshot, addDoc, updateDoc, doc} from 'firebase/firestore';

export const books = () => {
  // Step 1: Create refs for new book title and author
  const newBookTitle = ref('');
  const newAuthor = ref('');
  const newImageUrl = ref('');
  const newRating = ref(0);

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
      books.value = snapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data(), // Spread operator to merge the id and document data
         isEditing: false, // add isediting property status
         tempRating: doc.data().rating, // temporary rating to for editing
        }))
        
     
    });
   
  });

  // Step 5: Add a new book to Firestore
  const addBook = async () => {
    if (newBookTitle.value.trim() === '' || newAuthor.value.trim() === '' || newImageUrl.value.trim() ==='') return;

    await addDoc(booksCollection, {
      title: newBookTitle.value,
      author: newAuthor.value,
      imageUrl: newImageUrl.value.trim() || null,
      rating:newRating.value,
      hidden: false,
    });

    newBookTitle.value = ''; // Clear the input fields after adding
    newAuthor.value = '';
    newImageUrl.value = '';
    newRating.value = 0;
  };
  const hideBook = async (id) => {
    const bookDoc = doc(booksCollection, id);
    await updateDoc(bookDoc, { hidden: true });
  };

  const unhideBook = async (id) => {
    const bookDoc = doc(booksCollection, id);
    await updateDoc(bookDoc, { hidden: false });
  };
  
  const updateRating = async (id, rating) => { 
    const bookDoc = doc(booksCollection, id); 
    await updateDoc(bookDoc, { rating }); 
  };

  const toggleEdit = (book) => { 
    book.isEditing = !book.isEditing;
  if (!book.isEditing){
    updateRating(book.id, book.tempRating); // update the rating when editing is done
  } };

  // Step 6: Return the state and actions
  return {
    newBookTitle,
    newAuthor,
    newImageUrl,
    newRating,
    books,
    addBook,
    hideBook,
   unhideBook,
    updateRating,
    toggleEdit,
  };
};
  
  






   

