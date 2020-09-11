import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import './index.css'
import * as serviceWorker from './serviceWorker'
import RootReducers from './reducers/index'


// Root
import Root from './containers/Root'

const store = createStore(RootReducers)

ReactDOM.render(
  <Provider store={store}>
    <HashRouter >
      <React.StrictMode>
        <Root />
      </React.StrictMode>
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
