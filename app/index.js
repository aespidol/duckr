import React from 'react'
import ReactDOM from 'react-dom'
import getRoutes from './config/routes'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import users from 'redux/modules/users'
import thunk from 'redux-thunk'
import { checkIfAuthed } from 'helpers/auth'

const store = createStore(users, compose(
  applyMiddleware(thunk), 
  window.devToolsExtension ? window.devToolsExtension(): (f) => f )
)

function checkAuth(){
  if(store.getState().isFetching === true){
    return 
  }
  const isAuthed = checkIfAuthed(store)
  console.log(store.getState())
  return isAuthed
}

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(checkAuth)}
  </Provider>,
  document.getElementById('app')
)
