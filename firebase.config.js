import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAx9uuXE0EcY3iNIFqeqirlr31na2gPjnI",
  authDomain: "mediquanta.firebaseapp.com",
  projectId: "mediquanta",
  storageBucket: "mediquanta.appspot.com",
  messagingSenderId: "484429217400",
  appId: "1:484429217400:web:57df5a9d943b18f1c3378d",
};

export const app = initializeApp(firebaseConfig);
