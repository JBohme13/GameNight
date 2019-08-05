import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return(
            <div className='nav-container'>
                <a 
                  className='home'
                  href={'/home'}
                >
                    Home 
                </a>
                <a
                  className='game-nights'
                  href={'/game-nights'}
                >
                    game nights
                </a>
                <a
                  className='log-out'
                  href={'/'}
                >
                    Log out
                </a>
            </div>
        )
    }
}