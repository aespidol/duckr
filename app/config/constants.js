import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAP9cFBxC5d_ZgbbDQCOdgpCOQd4yTOE1E",
    authDomain: "duckr-7e961.firebaseapp.com",
    databaseURL: "https://duckr-7e961.firebaseio.com",
    projectId: "duckr-7e961",
    storageBucket: "duckr-7e961.appspot.com",
    messagingSenderId: "111587126419"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth