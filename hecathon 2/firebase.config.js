
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
  import { getFirestore,  doc, deleteDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBcmx-HXfYx65irCHgssbACPt8eU0XIAIY",
    authDomain: "dashboard-1e0dd.firebaseapp.com",
    projectId: "dashboard-1e0dd",
    storageBucket: "dashboard-1e0dd.appspot.com",
    messagingSenderId: "482608391587",
    appId: "1:482608391587:web:565d759e5d349a93b72616"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);    // Firestore
  const auth = getAuth(app);       // Authentication

  function addUser(){
  // Example: Firestore - Adding a document
    db.collection("users").add({
      name: "John Doe",
      email: "johndoe@example.com"
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  
  function deleteUser(){
    // Delete the user document
      deleteDoc(doc(db, "users", user.uid)).then(() => {
        console.log("User document deleted successfully from Firestore.");
      }).catch((error) => {
        console.error("Error deleting user document: ", error);
      });
  }

  function Signin(){
    signInWithEmailAndPassword(auth, "user@example.com", "user_password")
    .then((userCredential) => {
      // User signed in
      const user = userCredential.user;
    }).catch((error) => {
      console.error("Error deleting user document: ", error);
    });
  }

  
   function signUpUser(email, password, name) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;

        // Create user document in Firestore
        const userDocRef = doc(db, "users", user.uid);
        setDoc(userDocRef, {
          uid: user.uid,
          name: name,
          email: email,
        }).then(() => {
          console.log("User document created successfully.");
        }).catch((error) => {
          console.error("Error creating user document: ", error);
        });

        console.log("User signed up successfully:", user);
      })
      .catch((error) => {
        console.error("Error during signup: ", error);
      });
  }

  function checkUser(){
    
  // Check if user is logged in
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log("User is logged in:", user);
      // You can access user information here, e.g., user.uid, user.email, etc.
    } else {
      // No user is signed in
      console.log("No user is logged in.");
    }
  });
  }
  
