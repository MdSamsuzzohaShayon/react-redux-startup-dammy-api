import React, { Component } from 'react';
import './App.css';
import {Provider } from 'react-redux';//PROVIDER IS GLU FOR REACT AND REDUX
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import Navigation from './components/Navigation';


//import {createStore, applyMiddleware} from 'redux';
//const store = createStore(()=>[], {},applyMiddleware());

import store from './store';



class App extends Component {
  
  render() {
    return (
      <Provider store={store}>

        <div className="App">
          <Navigation />
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}


export default App;
