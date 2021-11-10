import React from 'react'
import { Button } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

export default function Dashboard(){
    const { logout, currentUser } = useAuth()

    async function handleLogout(){
        try{
            await logout()
        } catch {
            console('erorrrrroror')
        }
    }

    return(
        <div>
            <h2>Paolo merda {currentUser && currentUser.email}</h2>
            <p><img src={'https://c.tenor.com/5eyCQsKKDEQAAAAM/sideshow-bob-rakes.gif'} alt="loading..." /></p>
            <p>
                <Button variant='link' onClick={handleLogout}>Log out</Button>
            </p>
        </div>
    )
}