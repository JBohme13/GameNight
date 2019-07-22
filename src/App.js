import React, { Component } from 'react';
import GameNightContext from './GameNightContext'
import './App.css';

export default class App extends Component {
  static contextType = GameNightContext;
  constructon(props){
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
    contextValue = {
      userName: {
        value: this.state.userName.value
      },
      password: {
        value: this.state.password.value
      },
    }
    return(
      <GameNightContext.Provider value={contextValue}>
        <div className='app-container'>
          <Nav />
          <Main /> 
          <Sidebar />
        </div>
        </GameNightContext.Provider>
    )
  }
}