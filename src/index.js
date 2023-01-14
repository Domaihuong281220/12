import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Multi-Lang
import "./i18n";

//Redux
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/rootSaga";
import rootReducer from "./redux/rootReducer";
import { createStore, applyMiddleware, compose } from "redux"

const sagaMiddleware = createSagaMiddleware();
const store = compose(applyMiddleware(sagaMiddleware))(createStore)(rootReducer);
window.store = store
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
