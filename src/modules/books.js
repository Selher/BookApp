import { ref, onMounted } from 'vue';
import { booksCollection } from './firebase'; // Ensure this imports your Firestore collection correctly
import { onSnapshot, addDoc, updateDoc, doc} from 'firebase/firestore';

export const books = () => {
  // Create refs for new book title and author
  const newBookTitle = ref('');
  const newAuthor = ref('');
  const newImageUrl = ref('');
  const newRating = ref(0);
  const newDescription = ref('');

  // Create a ref to store the list of books
  const books = ref([]);


  // Get real-time updates and fetch books
  onMounted(() => {
    onSnapshot(booksCollection, (snapshot) => {
      books.value = snapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data(), 
         isEditing: false, // add isediting property status
         tempRating: doc.data().rating, // temporary rating to for editing
         tempDescription: doc.data().description // temporary description for editing
        }))
        
     
    });
   
  });

  // Add a new book to Firestore
  const addBook = async () => {
    if (newBookTitle.value.trim() === '' || newAuthor.value.trim() === '' || newImageUrl.value.trim() ==='') return;

        await addDoc(booksCollection, {
          title: newBookTitle.value,
          author: newAuthor.value,
          imageUrl: newImageUrl.value.trim() || null,
          rating:newRating.value,
          description: newDescription.value,
          location:'TBRView',
          hidden: false,
        });

        // Clear the input fields after adding
        newBookTitle.value = ''; 
        newAuthor.value = '';
        newImageUrl.value = '';
        newRating.value = 0;
        newDescription.value = '';

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
      const updateDescription = async (id, description) => { 
        const bookDoc = doc(booksCollection, id); 
        await updateDoc(bookDoc, { description }); 
      };

      const toggleEdit = (book) => { 
        book.isEditing = !book.isEditing;
      if (!book.isEditing){
        updateRating(book.id, book.tempRating); // update the rating when editing is done
        updateDescription(book.id, book.tempDescription);
      } };

      const moveBook = async (id, newLocation) => {
        const bookDoc = doc(booksCollection, id); 
        await updateDoc(bookDoc, { location: newLocation });
        };

  // Return the state and actions
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
        updateDescription,
        toggleEdit,
        moveBook,
      };
};
  
  






   

