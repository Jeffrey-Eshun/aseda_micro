import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAjBvCn2yBwJ4wd06oERJCQE_VTR1Pr14M",
  authDomain: "aseda-f210c.firebaseapp.com",
  projectId: "aseda-f210c",
  storageBucket: "aseda-f210c.appspot.com",
  messagingSenderId: "15499484216",
  appId: "1:15499484216:web:ee527ae46f1345ee229acd",
  measurementId: "G-M274332K5Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

