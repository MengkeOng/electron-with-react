import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import rootStore from './reducers'

let store = createStore(rootStore)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)