import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAc1d0H0rCJDYxGx2E9XCcK1UuXsuPD-9M",
  authDomain: "world-is-yours.firebaseapp.com",
  projectId: "world-is-yours",
  storageBucket: "world-is-yours.appspot.com",
  messagingSenderId: "243870399439",
  appId: "1:243870399439:web:15c17a54037c5ace9ff0ba",
  measurementId: "G-3RS52YY7KJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
