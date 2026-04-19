// ============================================================
// FIREBASE CONFIG
// ============================================================
// Paste the config object from Firebase Console here.
// Steps to get it:
//   1. Go to https://console.firebase.google.com
//   2. Create a new project (or use existing): "forge-app"
//   3. Click the </> (Web) icon to add a web app
//   4. Copy the firebaseConfig object it gives you
//   5. Paste the values below (replace YOUR_API_KEY_HERE etc.)
//   6. Enable Firestore Database (in Firebase Console → Build → Firestore)
//   7. Start in "test mode" (30-day open rules) while we get rolling
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyAeSqxW0w6SPzXK7-fVZv4vCM3LOgTN2d8",
  authDomain: "forge-app-b5d99.firebaseapp.com",
  projectId: "forge-app-b5d99",
  storageBucket: "forge-app-b5d99.firebasestorage.app",
  messagingSenderId: "718617949190",
  appId: "1:718617949190:web:2ce21734721f909bdb3f87"
};

// Your personal user ID. Since there's just you + your parents reading,
// a static ID is fine. Change this to anything you like.
export const USER_ID = "JillianP";
