import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import logoHome from '../images/Giulio_home_page.jpeg'

export default function Homes(){

    const [name, setName] = useState();
    const [surname, setSurname] = useState([]);
    const { logout, currentUser } = useAuth()
    const url = "http://localhost:5001/user?username="+currentUser.email;

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setName(data["Item"]["nome"]);
            setSurname(data["Item"]["cognome"]);
        });
    }, []);

    async function handleLogout(){
        try{
            await logout()
        } catch {
            console('Error during logout')
        }
    }

    return(
        <div>
            <br />
            <h2>Benvenuto {name} {surname}</h2>
            <p><img src={logoHome} alt="loading..." /></p>
            <p>
                <Button variant='link' onClick={handleLogout}>Log out</Button>
            </p>
        </div>
    )
}

<p><img src={logoHome} alt="loading..." /></p>