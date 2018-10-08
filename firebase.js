const firebase = require('firebase')
// // Required for side-effects
// require("firebase/firestore");

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyARU4cDLo4VUByr_Sc4XC8i6bXOUTbPe58',
  authDomain: 'spell-well.firebaseapp.com',
  databaseURL: 'https://spell-well.firebaseio.com',
  projectId: 'spell-well',
  storageBucket: 'spell-well.appspot.com',
  messagingSenderId: '756406787666',
}
firebase.initializeApp(config)

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore()

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true,
})

export default db
