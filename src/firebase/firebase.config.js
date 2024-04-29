// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,

  // apiKey: "AIzaSyDP3vD2XnpqoxfAUzDTkfKZgdaqfC1nqTU",
  // authDomain: "bistro-boss-7b9b0.firebaseapp.com",
  // projectId: "bistro-boss-7b9b0",
  // storageBucket: "bistro-boss-7b9b0.appspot.com",
  // messagingSenderId: "653840905865",
  // appId: "1:653840905865:web:ed8aaa4b3a89b6df7b3858",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
