import firebase from "firebase"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyC1_r1mT24PUnP0HWmM-y2Zd6iykvhh2nk",
    authDomain: "polling-app-27a86.firebaseapp.com",
    databaseURL: "https://polling-app-27a86.firebaseio.com",
    projectId: "polling-app-27a86",
    storageBucket: "polling-app-27a86.appspot.com",
    messagingSenderId: "101312282058"
}

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.store = firebase.firestore;
    this.auth = firebase.auth;
  }

  get polls() {
    return this.store().collection('polls');
  }
}

export default new Firebase();