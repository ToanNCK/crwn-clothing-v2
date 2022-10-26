// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkKzDjjjf4FdsORdHeAuAZAKyszdFBuNU",
  authDomain: "crwn-clothing-db-c386a.firebaseapp.com",
  projectId: "crwn-clothing-db-c386a",
  storageBucket: "crwn-clothing-db-c386a.appspot.com",
  messagingSenderId: "577163302653",
  appId: "1:577163302653:web:fcc7745a4cb6f16b9fd094",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
