import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAmHGxAf866bBTUz214m8dI5fTjTBhdH_A",
  authDomain: "campaign-fc7cc.firebaseapp.com",
  databaseURL: "https://campaign-fc7cc.firebaseio.com",
  projectId: "campaign-fc7cc",
  storageBucket: "campaign-fc7cc.appspot.com",
  messagingSenderId: "444226664708"
};
firebase.initializeApp(config);

export default firebase;