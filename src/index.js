import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {applyMiddleware, compose, legacy_createStore as createStore} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import {Provider} from "react-redux";
import thunk from "react-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


