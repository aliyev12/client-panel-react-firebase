import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
// @todo

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId
}

// React redux firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

// Init
firebase.initializeApp(firebaseConfig);
// Init firestore
//const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
















// import React, { useState, useReducer } from 'react';
// import firebase from 'firebase';
// import 'firebase/firestore';
// import { useCollection } from 'react-firebase-hooks/firestore';



// const rrfConfig = {
//   userProfile: 'users',
//   useFirestoreForProfile: true,
// }

// firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();

// const initialState = {};

// const store = {};

// // const FirestoreCollection = () => {
// //     const { error, loading, value } = useCollection(
// //       firebase.firestore().collection('hooks')
// //     );
// //     return (
// //       <div>
// //         <p>
// //           {error && <strong>Error: {error}</strong>}
// //           {loading && <span>Collection: Loading...</span>}
// //           {value && (
// //             <span>
// //               Collection:{' '}
// //               {value.docs.map(doc => (
// //                 <React.Fragment key={doc.id}>
// //                   {JSON.stringify(doc.data())},{' '}
// //                 </React.Fragment>
// //               ))}
// //             </span>
// //           )}
// //         </p>
// //       </div>
// //     );
// //   };