import React, { useState, useEffect } from "react";
import { Alert, Accordion, Button, ProgressBar } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import "./Poll.css";

function Poll({pollId}){

    /**
     * DEFINIZIONE VARIABILI
     */
    const {currentUser} = useAuth();
    const [data, setData] = useState();
    const [voteData, setVoteData] = useState();
    const [users, setUsers] = useState([]);
    const [totalVotes, setTotalVotes] = useState(0);
    const [title, setTitle] = useState();
    const poll = pollId;
    const url = "http://localhost:5001/pollItem?pollId="+poll;

    //Recupero dati singola survey
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setVoteData(data["Item"]["options"]);
            setUsers(data["Item"]["usersPoll"]);
            setTitle(data["Item"]["title"]);
            setData(data);
            let sum = 0;
            data["Item"]["options"].forEach(function (obj){
                sum += obj.voted;
            });
            setTotalVotes(sum);
        });
    }, []);

    /**
     * Gestione invio voto
     * @param {*} e 
     * @returns 
     */
     const submitVote = (e) => {
        //Se non hai ancora votato        
        if(!users.includes(currentUser.email)){
            const voteSelected = e.currentTarget.dataset.id;
            const voteCurrent = voteData[voteSelected].voted;
            voteData[voteSelected].voted = voteCurrent + 1;
            setTotalVotes(totalVotes + 1);
            users.push(currentUser.email);
            data["Item"]["options"] = voteData;
            data["Item"]["usersPoll"] = users;
            const options = {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json"},
            };
            fetch(url, options)
                .then((res) => console.log(res));
        } 
        //Se hai già votato
        else {
            return (
                <Alert variant="danger">
                    <Alert.Heading>Errore</Alert.Heading>
                    <p>
                        Hai già votato per questo sondaggio!
                    </p>
                </Alert>
            );
        }
    };

    if(users.includes(currentUser.email)){
        let pollProgressbar = voteData.map((item) => {
            return (
                <li>
                    <ProgressBar variant="success" now={Number.parseFloat((item.voted*100/totalVotes)).toFixed(2)} label={item.value + ' - ' + Number.parseFloat((item.voted*100/totalVotes)).toFixed(2) + '%'}/>
                </li>
            );
        });
        return (
            <Accordion>
                <Accordion.Item eventKey={poll}>
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                        <div className="poll">
                        <h1>Risultati</h1>
                        <ul className={"options"}>
                            {pollProgressbar}
                        </ul>
                        <p>Total Votes: {totalVotes}</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          );
    } else {
        console.log(data);
        let pollOptions;
        if(voteData){
            pollOptions = voteData.map((item) => {
                return (
                    <li key={item.value}>
                        <Button variant="dark" onClick={submitVote} data-id={item.id}>{item.value}</Button>
                    </li>
                );
            });
        }
        return (
            <Accordion>
                <Accordion.Item eventKey={poll}>
                    <Accordion.Header>{title}</Accordion.Header>
                    <Accordion.Body>
                        <div className="poll">
                        <h1>{title}</h1>
                        <ul className={"options"}>
                            {pollOptions}
                        </ul>
                        <p>Total Votes: {totalVotes}</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          );
    }

}
export default Poll;