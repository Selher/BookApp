import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from './firebase';

import { ref } from 'vue';
import router from "@/router";

export const logIn = () => {
  const user = ref(null);


  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');

  const login = async (email, password) => {
     try { 
      const userCredential = await signInWithEmailAndPassword(auth, email, password); 
      const user = userCredential.user;

      // Tjek brugerens e-mail og omdiriger baseret på den
      if (user.email === "admin@admin.com") {
        router.push('/tbr'); // Admin har adgang til alle templates
      } else {
        router.push('/bookshelf'); // Almindelige brugere ser kun Bookshelf
      } 
    } catch (error) { 
      console.log(error.message); 
      errorMessage.value = error.message; 
    } 
  };
  
  const logout = async () => {
    try {
      await signOut(auth)
      router.push('/')
    }
    catch (error) {
      console.log(error.message)
    }
  }

  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  })


  return {
    user,
    login,
    logout,
    email, 
    password,
    errorMessage
  }
}

