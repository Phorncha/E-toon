import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// คอนฟิก Firebase SDK
const firebaseConfig = {
    apiKey: "AIzaSyBg7mH2TTRJy1PyMRqbdRXXJj-0IgU_SEI",
    authDomain: "test-c6db1.firebaseapp.com",
    projectId: "test-c6db1",
    storageBucket: "test-c6db1.appspot.com",
    messagingSenderId: "828435202153",
    appId: "1:828435202153:web:361f368a72d2c80bf5e2f8",
    measurementId: "G-SZ7YF9JXVE"
  };
  

// กำหนดค่า Firebase
const firebaseApp = initializeApp(firebaseConfig);

// เรียกใช้งาน Firebase Storage
const storage = getStorage(firebaseApp);

export default storage;
