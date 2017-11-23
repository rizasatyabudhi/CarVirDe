import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBDQxIBaFPQkT6Sc5-N5Cj27RsSqHj6yUg",
  authDomain: "carvirde.firebaseapp.com",
  databaseURL: "https://carvirde.firebaseio.com",
  projectId: "carvirde",
  storageBucket: "carvirde.appspot.com",
  messagingSenderId: "349941526996"
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

////////////// ARRAYS IN FIREBASE /////////////////////

// database.ref("cars").push({
//   merk: "Ford",
//   tipe: "Focus"
// });

// database.ref("cars").on("value", snapshot => {
//   const cars = [];
//   snapshot.forEach(childSnapshot => {
//     cars.push({
//       // id will take the id and make it inside the array
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(cars);
// });

// // will be run everytime the database is changed
// database.ref("cars").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // will be run everytime the database is deleted
// database.ref("cars").on("child_remove", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // FETCH DATA FROM DATABASE
// // Use ONCE , data changes will not be fetched automatically
// // database
// //   .ref("location")
// //   .once("value")
// //   .then(snapshot => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   });

// // Use ON, data changes will be fetched automatically
// // database.ref().on("value", snapshot => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // INSERT DATA INTO DATABASE
// // database.ref().set({
// //   name: "Andrew Mead",
// //   age: 26,
// //   stressLevel: 6,
// //   job: {
// //     title: "Software developer",
// //     company: "Google"
// //   },
// //   location: {
// //     city: "Philadelphia",
// //     country: "United States"
// //   }
// // });

// // UPDATE DATA FROM DATABASE
// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "Amazon",
// //   "location/city": "Seattle"
// // });

// // REMOVE DATA FROM DATABASE
// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log('Did not remove data', e);
// //   });
