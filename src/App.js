import React, { Component } from 'react';
import GameNightContext from './GameNightContext'
import Nav from './Nav'
import Main from './Main'
import Sidebar from './sidebar'
import './dummy-store'
import './App.css';
import Login from './Login';

export default class App extends Component {
  static contextType = GameNightContext;
  constructor(props){
    super(props);
    this.state = {
      userName: {
        value: ''
      },
      password: {
        value: ''
      },
    }
  }

  updateuserName = (name) => {
    this.setState({ userName: { value: name }})
  }

  updatePassword = (password) => {
    this.setState({ password: { value: password }})
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const contextValue = {
      userName: {
        value: this.state.userName.value
      },
      password: {
        value: this.state.password.value
      },
    }

    const routes = [
      {
        path: '/',
        exact: true,
        main: Login,
        nav: Nav,
      },
      {
        path: '/home',
        exact: false,
        main: Main,
        nav: Nav,
      },
    ]
    return(
      <GameNightContext.Provider value={contextValue}>
        <div className='app-container'>
          <Nav routes={routes}/>
          <Main routes={routes}/> 
          <Sidebar routes={routes}/>
        </div>
        </GameNightContext.Provider>
    )
  }
}