import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Main extends Component {
    render() {
        return (
            this.props.routes.map((route, i) => {
              return(
                <Route
                    key={i}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
              )
            })
            
            
        )
    }
}

Main.defaultProps = {
    routes: [],
}

Main.propTypes = {
    routes: PropTypes.array,
}