import React, { useState, useEffect } from "react";
import { useAuth } from '../context/AuthContext'
import "./Poll.css";

function Poll(){
    const {currentUser} = useAuth();
    const [data, setData] = useState();
    const [voteData, setVoteData] = useState();
    const [users, setUsers] = useState([]);
    const [totalVotes, setTotalVotes] = useState(0);

    const url = "http://localhost:5001/pollItem?pollId=SITO_CATTANEA";
    
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setVoteData(data["Item"]["options"]);
            setUsers(data["Item"]["usersPoll"]);
            setData(data);
            let sum = 0;
            data["Item"]["options"].forEach(function (obj){
                sum += obj.voted;
            });
            setTotalVotes(sum);
        });
    }, []);

    const submitVote = (e) => {
        console.log('event.currentTarget.dataset.id', e.currentTarget.dataset.id);
        if(!users.includes(currentUser.email)){
            users.push(currentUser.email);
            const voteSelected = e.currentTarget.dataset.id;
            const voteCurrent = voteData[voteSelected].voted;
            voteData[voteSelected].voted = voteCurrent + 1;
            setTotalVotes(totalVotes + 1);
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
    };

    let pollOptions;

    if (voteData) {
        pollOptions = voteData.map((item) => {
            return (
                <li key={item.value}>
                    <button onClick={submitVote} data-id={item.id}>
                    {item.value}
                    <span>- {item.voted} Votes</span>
                    </button>          
                </li>
            );
        });
    }

    return (
        <div className="poll">
          <h1>Which option do you like the best?</h1>
          <ul className={"options"}>
            {pollOptions}
          </ul>
          <p>Total Votes: {totalVotes}</p>
        </div>
      );

}
export default Poll;