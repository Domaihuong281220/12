import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAQD78DYU_CK61jmyMVMIT6vv1zElZJ080",
  authDomain: "testpload-a2134.firebaseapp.com",
  projectId: "testpload-a2134",
  storageBucket: "testpload-a2134.appspot.com",
  messagingSenderId: "135416892023",
  appId: "1:135416892023:web:9deb077ab906bce1535472"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)