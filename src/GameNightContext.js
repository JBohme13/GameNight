import React from 'react'

const GameNightContext = React.createContext({
    userName: {
        value: ''
    },
    password: {
        value: ''
    },
})

export default GameNightContext;