import firebase from 'firebase';

export const appName = 'frontflip-dc7b7';

export const firebaseConfig = {
  apiKey: 'AIzaSyBAVbG9YEWsqCJGg4mazPhjLSqHPdt7qzo',
  authDomain: 'frontflip-dc7b7.firebaseapp.com',
  databaseURL: 'https://frontflip-dc7b7.firebaseio.com',
  projectId: 'frontflip-dc7b7',
  storageBucket: 'frontflip-dc7b7.appspot.com',
  messagingSenderId: '339876832330',
};

firebase.initializeApp(firebaseConfig);
