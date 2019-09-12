import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if(window.currentUser){
    const preloadedState = {
      session: {id: window.currentUser.id, email: window.currentUser.email, 
                first_name: window.currentUser.first_name, last_name: window.currentUser.last_name,
                state: window.currentUser.state, portfolio: window.currentUser.portfolioItems}
    }
    store = configureStore(preloadedState);
    delete window.currentUser;
  }else {
    store = configureStore();
  }

  //TEST ONLY//
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  let root = document.getElementById('root'); 
  ReactDOM.render(<Root store={store} />, root)
})