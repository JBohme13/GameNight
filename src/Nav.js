import React, { Component } from 'react'
import { Router, Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return(
            <div className='nav-container'>
                <Link 
                  className='home'
                  to={'/'}
                >
                    Home 
                </Link>
                <Link
                  className='game-nights'
                  to={'/game-nights'}
                >
                </Link>
            </div>
        )
    }
}