import React from 'react'
import { Button } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ component: Component , ...rest }){
    
    const { currentUser } = useAuth()

    return(
        <Route {...rest} render={props => { return currentUser ? <Component {...props} /> : <Redirect to='/login' />}}></Route>
    )
}