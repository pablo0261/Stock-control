// import { createStore, compose, applyMiddleware } from "redux";
// import rootReducer from "../reducer/index";
// import thunkMiddleware from 'redux-thunk';

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
//   }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     rootReducer,
//     composeEnhancers(applyMiddleware(thunkMiddleware))
//   );

// export default store; 