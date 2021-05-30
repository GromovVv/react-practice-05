import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
// import { myAction, myAction_2 } from './redux/actions';


import 'modern-normalize/modern-normalize.css';
import "./styles/Base.scss"

import './index.css';
import App from './App';

// console.log(store);
// console.log(myAction(5));
// console.log(myAction(10));
// console.log(store.dispatch(myAction()));
// console.log(store.dispatch(myAction_2));

// console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> 
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
