import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return(
            <div className='form-container'>
                <h1>Game Night</h1>
                <p>An app for planning painless game nights!</p>
                <form>
                    <label htmlFor='userName'>User Name</label>
                    <input 
                      type='text'
                      placeholder='Gameshow Bob'
                      onChange={() => value.updateUserName}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                      type='text'
                      placeholder='password'
                      onChange={() => value.updatePassword}
                    />
                    <button 
                      type='submit'
                      onSubmit={e => value.handleFormSubmit}
                    >
                        Log-in
                    </button>
                </form>
            </div>
        )
    }
}