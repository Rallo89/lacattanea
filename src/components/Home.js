import React from 'react'
import { Button } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import logoHome from '../images/Giulio_home_page.jpeg'
import Poll from "./Poll";

export default function Homes(){
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
            <br />
            <h2>Benvenuto {currentUser && currentUser.email}</h2>
            <Poll />
            <p>
                <Button variant='link' onClick={handleLogout}>Log out</Button>
            </p>
        </div>
    )
}

//<p><img src={logoHome} alt="loading..." /></p>