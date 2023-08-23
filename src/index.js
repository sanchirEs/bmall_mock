import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./Pages/App";

import { createStore, applyMiddleware, compose, combineReducers} from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers/reducer";
import thunk from "redux-thunk";
import signupReducer from "./redux/reducers/signupReducer"


const loggermidlleware = store => {
  return next => {
    return action =>{
      console.log("loggermidllewaware dispatching=> " , action);
      return next(action);
    }
  }
}

const reducers = combineReducers({
  reducer,
  signupReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const middlewares = [loggermidlleware, thunk]

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
