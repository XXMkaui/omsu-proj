import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADTVzH7Wivd6j1wrS97xiNmcxin90E0sg",
  authDomain: "films-db-c9e39.firebaseapp.com",
  projectId: "films-db-c9e39",
  storageBucket: "films-db-c9e39.appspot.com",
  messagingSenderId: "541130759606",
  appId: "1:541130759606:web:99bbab497d917568683517",
  measurementId: "G-60GEKCCJ16"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);