import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/root'
import App from './components/App'

let store = createStore(rootReducer)

const Calendar = ({}) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Calendar
