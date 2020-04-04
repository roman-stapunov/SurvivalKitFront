import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import AuthService from '../service/AuthService';

class AuthenticatedRoute extends React.Component {
    render() {
        if (AuthService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect to="/home"/>
        }

    }
}

export default AuthenticatedRoute;