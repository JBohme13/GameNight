import React, { Component } from 'react'
import GameNightContext from './GameNightContext';

export default class Login extends Component {
    static contextType = GameNightContext;
    render() {
      const value = this.context;
        return(
            <div className='form-container'>
                <h1>Game Night</h1>
                <p>An app for planning painless game nights!</p>
                <form>
                    <label htmlFor='userName'>User Name</label>
                    <input 
                      type='text'
                      placeholder='Gameshow Bob'
                      onChange={e => value.updateUserName(e)}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                      type='text'
                      placeholder='password'
                      onChange={e => value.updatePassword(e)}
                    />
                    <button 
                      type='submit'
                      onSubmit={e => value.handleFormSubmit(e)}
                    >
                        Log-in
                    </button>
                </form>
            </div>
        )
    }
}