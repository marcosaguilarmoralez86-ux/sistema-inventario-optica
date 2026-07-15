import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOPFT-X1JakfSbLyTfF_Z9DxIdCf2Gtjk",
  authDomain: "inventario-optica-57f81.firebaseapp.com",
  projectId: "inventario-optica-57f81",
  storageBucket: "inventario-optica-57f81.firebasestorage.app",
  messagingSenderId: "814712172686",
  appId: "1:814712172686:web:28f2297e82a136c6d819df"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };